import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().pipe(z.email().max(254)),
  company: z.string().trim().max(150).optional().default(""),
  message: z.string().trim().min(10).max(5000),
  privacy: z.literal(true),
  website: z.string().max(200).optional().default(""),
  locale: z.enum(["de", "en"]),
});
export function contactReady() {
  return !!(
    process.env.CONTACT_FROM &&
    process.env.CONTACT_TO &&
    process.env.RESEND_API_KEY &&
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  );
}
