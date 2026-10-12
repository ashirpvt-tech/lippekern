# Lippekern Technologies

A complete bilingual company website built with Next.js App Router, TypeScript, Tailwind CSS 4, Motion and Lucide. German is the default at `/de`; English is at `/en`. `/` redirects to German.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production verification:

```sh
npm test
npm run typecheck
npm run build
npm start
```

With the development server running, `npm run test:browser` checks all six content pages plus the mobile view with axe, checks responsive overflow at 375–1440 px, exercises navigation and language switching, and tests contact validation, error retention and success reset with locally mocked requests. It uses an installed Google Chrome browser. Screenshots and the report are saved in `artifacts/`.

Verification completed: production build, TypeScript, seven server/schema tests, and browser checks with zero automated WCAG A/AA violations in the audited views. Automated checks supplement visual and keyboard review; they are not an accessibility certification.

## Content and brand

- `src/lib/site.ts`: German/English copy, company details, contact and product links.
- `src/lib/legal.ts`: clearly marked bilingual legal drafts.
- `src/app/globals.css`: shared design tokens, responsive layout and reduced-motion handling.
- `src/components`: reusable navigation, footer, logo, original SVG hero artwork, reveal and contact form.
- `public/brand`: dark, light and monochrome SVG logos and icons, plus social preview.
- `public/images/jobwelt-preview.webp`: actual browser capture of https://www.jobwelt.work/. Capture provenance is recorded in `jobwelt-source.json`; it is not a fabricated UI.

Identity: warm white, forest green and restrained sage. Manrope is bundled locally; no font provider request is made by visitors. The hexagonal mark describes nested systems around a core. The hero repeats this idea with gently floating architectural layers. Motion is disabled under reduced-motion preferences. There are no fabricated clients, testimonials, metrics or team members.

## Contact delivery

Copy `.env.example` to `.env.local`. Configure all five required service values:

1. `RESEND_API_KEY`: Resend API key; verify the sending domain with the provider.
2. `CONTACT_FROM`: verified sender, for example `Lippekern <CONFIRMED-SENDER@lippekern.de>`.
3. `CONTACT_TO`: confirmed recipient mailbox.
4. `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`: a Redis database for shared, atomic rate limiting. Select an appropriate region and review processor agreements.
5. `NEXT_PUBLIC_CONTACT_EMAIL`: overrides the public contact email, which defaults to `info@lippekern.com`.
6. `SITE_ORIGIN`: exact deployed origin for contact requests, including a Vercel preview hostname when testing a preview.

The form displays an explicit setup notice and disables sending when service settings are missing. It never reports successful delivery without a successful provider response. With configuration, it validates in browser and server, applies a 16 KB body limit, accepts approved origins only, checks a honeypot, and permits five submissions per ten-minute rate-limit bucket. Rate limits persist in Redis, not in serverless memory. No enquiry content is written to application logs. The IP-derived rate key expires after ten minutes. Requests outside Vercel share one bucket unless an equivalent trusted-IP adapter is implemented.

The privacy notice must be updated to match activation, retention periods and actual vendors before enabling delivery. Do not commit credentials. No real email was sent during development; provider success/failure is tested using mocked HTTP responses.

## Deploy to Vercel / lippekern.de

1. Import this repository into Vercel and select the Next.js framework preset. Build command: `npm run build`. Use the committed lockfile.
2. Add the environment variables in Vercel; redeploy after changing public variables or contact availability, because pages are prerendered.
3. Use a protected preview to review all pages, mobile navigation and form states.
4. Before public launch, fill the actual provider name, service address and contact details in `site.ts`, and complete/review `legal.ts`. Do not label the UG as registered until registration is confirmed. Formation details remain in the legal draft; the homepage uses neutral startup wording.
5. Add `lippekern.de` and optionally `www.lippekern.de` to the Vercel project. Apply the exact DNS values Vercel supplies at the domain registrar, choose the apex domain as primary, and verify HTTPS.
6. Run a real delivery test with the confirmed recipient, review hosting/mail/Redis retention and processor agreements, then enable public access. Legal drafts are currently `noindex`; remove that directive only after review if desired.

No deployment or DNS change has been made by this project. Account access, confirmed company information and delivery credentials are required for launch.

## Reference sources

- Product: https://www.jobwelt.work/
- Next.js installation: https://nextjs.org/docs/app/getting-started/installation
- Provider information: https://www.gesetze-im-internet.de/ddg/__5.html
- GDPR: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- Email API: https://resend.com/docs/api-reference/emails/send-email
- Redis REST API: https://upstash.com/docs/redis/features/restapi

Legal pages are implementation-specific drafts, not a legal certification. The 21st catalog was unavailable because its CLI was not signed in; all visual components are original implementations.

The optional 21st source review was blocked by automatic approval review because it could disclose private code to a third-party service. The review was completed locally instead. Webpack is selected explicitly because Turbopack's CSS subprocess failed in this Windows environment.
