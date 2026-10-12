const { chromium } = require("@playwright/test");
const { default: AxeBuilder } = require("@axe-core/playwright");
const fs = require("node:fs/promises");
(async () => {
  await fs.mkdir("artifacts", { recursive: true });
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const results = [];
  for (const path of [
    "/de",
    "/en",
    "/de/impressum",
    "/en/impressum",
    "/de/datenschutz",
    "/en/datenschutz",
  ]) {
    const response = await page.goto("http://localhost:3000" + path, {
      waitUntil: "networkidle",
    });
    if (response.status() !== 200)
      throw new Error(`${path}: ${response.status()}`);
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    results.push({
      path,
      title: await page.title(),
      lang: await page.locator("html").getAttribute("lang"),
      violations: audit.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
  }
  await page.goto("http://localhost:3000/de", { waitUntil: "networkidle" });
  await page.screenshot({ path: "artifacts/desktop.png", fullPage: true });
  for (const width of [375, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    );
    if (overflow) throw new Error(`Overflow at ${width}`);
    if (width === 375) {
      await page.screenshot({ path: "artifacts/mobile.png", fullPage: true });
      await page.getByRole("button", { name: "Menü öffnen" }).click();
      await page
        .locator("#mobile-navigation")
        .getByRole("link", { name: "Produkte" })
        .click();
      if (await page.locator("#mobile-navigation").isVisible())
        throw new Error("Mobile menu stayed open");
    }
  }
  await page.setViewportSize({ width: 375, height: 900 });
  await page.getByRole("link", { name: "EN", exact: true }).click();
  await page.waitForURL("**/en");
  await page.waitForFunction(() => document.documentElement.lang === "en");
  if ((await page.locator("html").getAttribute("lang")) !== "en")
    throw new Error("Language switch failed");
  if (
    !(await page
      .getByRole("button", { name: "Send message", exact: true })
      .isDisabled())
  )
    throw new Error("Unconfigured form must disable delivery");
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  results.push({
    path: "en mobile",
    violations: audit.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    })),
  });
  // Invoke the form handler directly while delivery is intentionally disabled.
  // All outgoing requests in these UI-state tests are intercepted locally.
  await page.locator("form").evaluate((form) => form.requestSubmit());
  await page.getByText("Please check the highlighted fields.").waitFor();
  if ((await page.locator('[aria-invalid="true"]').count()) !== 4)
    throw new Error("Expected four invalid required fields");
  await page.getByLabel("Name *", { exact: true }).fill("Ada Example");
  await page
    .getByLabel("Email address *", { exact: true })
    .fill("ada@example.org");
  await page
    .getByLabel("Your message *", { exact: true })
    .fill("This is a local UI verification message.");
  await page.locator("#field-privacy").check();
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: '{"code":"unavailable"}',
    }),
  );
  await page.locator("form").evaluate((form) => form.requestSubmit());
  await page
    .getByText("Your message could not be sent. Please try again later.")
    .waitFor();
  if (
    !(await page.locator("#field-message").inputValue()).includes(
      "verification",
    )
  )
    throw new Error("Form lost message after failure");
  await page.unroute("**/api/contact");
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"code":"ok"}',
    }),
  );
  await page.locator("form").evaluate((form) => form.requestSubmit());
  await page
    .getByText("Thank you. Your message was sent successfully.")
    .waitFor();
  if ((await page.locator("#field-message").inputValue()) !== "")
    throw new Error("Successful form did not reset");
  await page.goto("http://localhost:3000/en/impressum");
  await page.getByRole("link", { name: "DE", exact: true }).click();
  await page.waitForURL("**/de/impressum");
  const missing = await page.goto("http://localhost:3000/en/not-a-page");
  if (missing.status() !== 404)
    throw new Error("Missing page did not return 404");
  await page.getByRole("heading", { name: "A new direction?" }).waitFor();
  await fs.writeFile(
    "artifacts/browser-report.json",
    JSON.stringify({ results, errors }, null, 2),
  );
  console.log(
    JSON.stringify(
      {
        pages: results.length,
        violations: results.reduce((n, r) => n + r.violations.length, 0),
        errors,
      },
      null,
      2,
    ),
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
