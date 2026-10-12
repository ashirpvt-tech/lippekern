const fs = require("node:fs");
const mark =
  '<path d="M24 3 44 14.5v19L24 45 4 33.5v-19L24 3Z" stroke="currentColor" stroke-width="3"/><path d="m24 12 12 7v10l-12 7-12-7V19l12-7Z" stroke="currentColor" stroke-width="3"/><path d="m24 20 4 2.3v4.4L24 29l-4-2.3v-4.4l4-2.3Z" fill="currentColor"/><path d="M24 3v9M44 33.5l-8-4.5M4 33.5l8-4.5" stroke="currentColor" stroke-width="3"/>';
fs.mkdirSync("public/brand", { recursive: true });
fs.mkdirSync("public/images", { recursive: true });
for (const [name, color] of [
  ["dark", "#173f32"],
  ["light", "#fafbf7"],
  ["mono", "#000000"],
]) {
  fs.writeFileSync(
    `public/brand/icon-${name}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="${color}">${mark}</svg>`,
  );
  fs.writeFileSync(
    `public/brand/logo-${name}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 64" fill="none" color="${color}"><title>Lippekern Technologies</title><g transform="translate(3 8)">${mark}</g><text x="66" y="31" font-family="Arial,sans-serif" font-size="25" font-weight="700" letter-spacing="3" fill="${color}">LIPPEKERN</text><text x="67" y="49" font-family="Arial,sans-serif" font-size="10" letter-spacing="4.2" fill="${color}">TECHNOLOGIES</text></svg>`,
  );
}
fs.writeFileSync(
  "public/icon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="13" fill="#173f32"/><g transform="translate(8 8)" color="#edf3df">${mark}</g></svg>`,
);
const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f5f7ee"/><g transform="translate(70 54)" fill="none" color="#173f32">${mark}</g><text x="137" y="82" font-family="Arial,sans-serif" font-size="24" font-weight="700" letter-spacing="4" fill="#173f32">LIPPEKERN</text><text x="137" y="102" font-family="Arial,sans-serif" font-size="10" letter-spacing="4.3" fill="#173f32">TECHNOLOGIES</text><text x="70" y="253" font-family="Arial,sans-serif" font-size="76" letter-spacing="-3" fill="#202e29">Gute Ideen.</text><text x="70" y="341" font-family="Arial,sans-serif" font-size="76" letter-spacing="-3" fill="#202e29">Intelligent</text><text x="70" y="429" font-family="Arial,sans-serif" font-size="76" letter-spacing="-3" fill="#54745a">entwickelt.</text><g transform="translate(770 178) scale(6)" fill="none" color="#537753">${mark}</g><path d="M70 531h1060" stroke="#d3ddca"/><text x="70" y="574" font-family="Arial,sans-serif" font-size="17" fill="#52664a">Digitale Produkte. Technologie im Kern.</text><text x="1000" y="574" font-family="Arial,sans-serif" font-size="17" fill="#52664a">lippekern.de</text></svg>`;
fs.writeFileSync("public/brand/social-card.svg", social);
require("sharp")(Buffer.from(social))
  .png()
  .toFile("public/brand/social-card.png");
const socialEnglish = social
  .replace("Gute Ideen.", "Good ideas.")
  .replace("Intelligent</text>", "Intelligently</text>")
  .replace("entwickelt.", "engineered.")
  .replace(
    "Digitale Produkte. Technologie im Kern.",
    "Digital products. Technology at the core.",
  );
fs.writeFileSync("public/brand/social-card-en.svg", socialEnglish);
require("sharp")(Buffer.from(socialEnglish))
  .png()
  .toFile("public/brand/social-card-en.png");
