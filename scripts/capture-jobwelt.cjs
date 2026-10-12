const { chromium } = require("@playwright/test");
const sharp = require("sharp");
const fs = require("node:fs/promises");
(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1050 },
    deviceScaleFactor: 1,
  });
  await page.goto("https://www.jobwelt.work/", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.locator("h1").waitFor();
  await page.screenshot({ path: "public/images/jobwelt-original.png" });
  await sharp("public/images/jobwelt-original.png")
    .webp({ quality: 85 })
    .toFile("public/images/jobwelt-preview.webp");
  await fs.writeFile(
    "public/images/jobwelt-source.json",
    JSON.stringify(
      {
        url: page.url(),
        capturedAt: new Date().toISOString(),
        viewport: { width: 1440, height: 1050 },
        note: "Unaltered browser viewport capture; WebP compression only.",
      },
      null,
      2,
    ),
  );
  console.log(await page.title());
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
