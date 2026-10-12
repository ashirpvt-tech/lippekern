import { test } from "node:test";
import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import { POST } from "../src/app/api/contact/route";
const valid = {
  name: "Ada Example",
  email: "ada@example.org",
  company: "Lab",
  message: "A test enquiry for the website.",
  privacy: true,
  locale: "en",
  website: "",
};
function request(
  body: unknown = valid,
  origin = "https://lippekern.de",
  type = "application/json",
) {
  return new NextRequest("https://lippekern.de/api/contact", {
    method: "POST",
    headers: { origin, "content-type": type },
    body: JSON.stringify(body),
  });
}
test("rejects untrusted origin, unsupported content type and invalid input", async () => {
  assert.equal(
    (await POST(request(valid, "https://evil.example"))).status,
    403,
  );
  assert.equal(
    (await POST(request(valid, undefined, "text/plain"))).status,
    415,
  );
  assert.equal(
    (await POST(request({ ...valid, email: "invalid" }))).status,
    400,
  );
  assert.equal(
    (await POST(request({ ...valid, message: "x".repeat(17000) }))).status,
    413,
  );
});
test("requires configuration and silently discards the honeypot", async () => {
  const original = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  try {
    assert.equal((await POST(request())).status, 503);
    assert.equal(
      (await POST(request({ ...valid, website: "spam.example" }))).status,
      200,
    );
  } finally {
    if (original) process.env.RESEND_API_KEY = original;
  }
});
test("handles provider success, rejection, rate limit, and service failure without false success", async () => {
  const env = { ...process.env };
  const fetchOriginal = globalThis.fetch;
  Object.assign(process.env, {
    CONTACT_FROM: "test@example.org",
    CONTACT_TO: "recipient@example.org",
    RESEND_API_KEY: "test-key",
    UPSTASH_REDIS_REST_URL: "https://redis.example",
    UPSTASH_REDIS_REST_TOKEN: "test-token",
  });
  try {
    let calls = 0;
    globalThis.fetch = async (url, init) => {
      calls++;
      if (String(url).includes("redis")) return Response.json({ result: 1 });
      const payload = JSON.parse(String(init?.body));
      assert.equal(payload.reply_to, valid.email);
      assert.equal(payload.text.includes(valid.message), true);
      return Response.json({ id: "test-id" });
    };
    assert.equal((await POST(request())).status, 200);
    assert.equal(calls, 2);
    globalThis.fetch = async (url) =>
      String(url).includes("redis")
        ? Response.json({ result: 1 })
        : Response.json({ error: "failed" }, { status: 500 });
    assert.equal((await POST(request())).status, 502);
    globalThis.fetch = async () => Response.json({ result: 6 });
    assert.equal((await POST(request())).status, 429);
    globalThis.fetch = async () => {
      throw new Error("unavailable");
    };
    assert.equal((await POST(request())).status, 503);
  } finally {
    globalThis.fetch = fetchOriginal;
    for (const key of [
      "CONTACT_FROM",
      "CONTACT_TO",
      "RESEND_API_KEY",
      "UPSTASH_REDIS_REST_URL",
      "UPSTASH_REDIS_REST_TOKEN",
    ]) {
      if (env[key] === undefined) delete process.env[key];
      else process.env[key] = env[key];
    }
  }
});
