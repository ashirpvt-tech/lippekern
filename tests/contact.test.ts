import { test } from "node:test";
import assert from "node:assert/strict";
import { contactSchema } from "../src/lib/contact";
const valid = {
  name: "Ada Example",
  email: "ada@example.org",
  company: "",
  message: "I would like to discuss a digital product.",
  privacy: true,
  website: "",
  locale: "en",
};
test("accepts an enquiry and trims user text", () => {
  const result = contactSchema.parse({ ...valid, name: "  Ada Example  " });
  assert.equal(result.name, "Ada Example");
});
test("rejects invalid email and missing privacy acknowledgement", () => {
  assert.equal(
    contactSchema.safeParse({ ...valid, email: "bad", privacy: false }).success,
    false,
  );
});
test("bounds message and identity sizes", () => {
  for (const change of [
    { message: "short" },
    { message: "a".repeat(5001) },
    { name: "a".repeat(101) },
    { company: "a".repeat(151) },
  ])
    assert.equal(
      contactSchema.safeParse({ ...valid, ...change }).success,
      false,
    );
});
test("requires an explicitly supported language", () => {
  assert.equal(
    contactSchema.safeParse({ ...valid, locale: "fr" }).success,
    false,
  );
});
