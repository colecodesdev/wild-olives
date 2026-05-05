# Wild Olives

Static React SPA marketing site for Wild Olives, a 30A bistro in Santa Rosa Beach, FL. Hosted on AWS S3 + CloudFront. No backend, no database, no auth.

## Context Files

Read the following to get the full context of the project:

- @context/project-overview.md
- @context/coding-standards.md
- @context/current-feature.md

## Commands

- `npm run dev`: start Vite dev server on port 3000
- `npm run build`: production build, outputs to `dist/`
- `npm run lint`: run ESLint (flat config, `eslint.config.js`)
- `npm run preview`: preview the production build locally

There is no test command. The project has no test framework installed by design (static marketing site).

## Infrastructure

- **Hosting:** Amazon S3 (private bucket) behind CloudFront CDN. Build artifact is `dist/`, uploaded to S3.
- **SPA routing:** CloudFront returns `/index.html` on 403 and 404 so deep links resolve client-side. See [README.md](README.md) "SPA Routing Support" section.
- **CloudFront / IAM JSON:** [cf-dist.json](cf-dist.json), [oac.json](oac.json), [s3-cf-policy.json](s3-cf-policy.json) are reference copies of the deployed AWS configuration. Do not treat them as live state; AWS console is the source of truth.
- **Production URL:** https://d6uiwxps2u5ue.cloudfront.net
- **No environment variables.** No `.env` file is needed or expected. If one is added in the future, both the file and `.env.example` should be created together.

## Screenshot protocol

All committed screenshots live under [context/screenshots/](context/screenshots/). Save new screenshots there directly; do not drop them in the repo root. The root [.gitignore](.gitignore) excludes top-level `*.png`, `*.jpg`, `*.jpeg`, `*.webp`, and `*.gif` so a stray screenshot at the project root is never accidentally staged. The single exception is [docs/app-screenshot.png](docs/app-screenshot.png), which is the production reference image embedded in the README.

## Known intentional gaps

These are not bugs. Do not "fix" them without explicit instruction.

- Form submissions in [src/components/sections/PrivateEventsForm.jsx](src/components/sections/PrivateEventsForm.jsx) and [src/components/sections/CareersForm.jsx](src/components/sections/CareersForm.jsx) accept input but have no submit handler wired up. There is no email service or API.
- The "Order Online" CTA (desktop and mobile) routes to `/closed` as a placeholder until online ordering is integrated.
- No tests, no TypeScript, no SSR, no CMS.
