import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { contactReady, contactSchema } from "@/lib/contact";
export const runtime = "nodejs";
export const maxDuration = 30;
const reply = (status: number, code: string) =>
  NextResponse.json(
    { code },
    { status, headers: { "Cache-Control": "no-store" } },
  );
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const allowed = new Set([
    "https://lippekern.de",
    "https://www.lippekern.de",
    process.env.SITE_ORIGIN,
    ...(process.env.NODE_ENV === "development"
      ? ["http://localhost:3000", "http://127.0.0.1:3000"]
      : []),
  ]);
  if (!origin || !allowed.has(origin)) return reply(403, "origin");
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return reply(415, "content_type");
  if (Number(request.headers.get("content-length") || 0) > 16384)
    return reply(413, "size");
  let body: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply(400, "body");
    let bytes = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 16384) {
        await reader.cancel();
        return reply(413, "size");
      }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return reply(400, "json");
  }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return reply(400, "validation");
  if (parsed.data.website) return reply(200, "ok");
  if (!contactReady()) return reply(503, "unavailable");
  // Vercel supplies and overwrites x-vercel-forwarded-for. Use a shared bucket elsewhere.
  const ip =
    request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    "shared";
  const key =
    "contact:" +
    createHash("sha256")
      .update(ip + process.env.UPSTASH_REDIS_REST_TOKEN)
      .digest("hex");
  try {
    const limit = await fetch(process.env.UPSTASH_REDIS_REST_URL!, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        "EVAL",
        "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n",
        1,
        key,
      ]),
      signal: AbortSignal.timeout(5000),
      cache: "no-store",
    });
    if (!limit.ok) return reply(503, "unavailable");
    const result = await limit.json();
    if (typeof result.result !== "number") return reply(503, "unavailable");
    if (result.result > 5) return reply(429, "rate_limit");
    const { name, email, company, message, locale } = parsed.data;
    const sent = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM,
        to: [process.env.CONTACT_TO],
        reply_to: email,
        subject: "Lippekern website enquiry",
        text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${company || "—"}\nLanguage: ${locale}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!sent.ok) return reply(502, "delivery");
    return reply(200, "ok");
  } catch {
    return reply(503, "unavailable");
  }
}
