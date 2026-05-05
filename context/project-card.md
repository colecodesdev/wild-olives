# Wild Olives

A static marketing site for Wild Olives, a 30A bistro in Santa Rosa Beach, FL, rebuilt from Wix to a maintainable React SPA hosted cheaply on AWS.

---

**STACK:** React 18, Vite 6, Tailwind CSS v3, React Router v7, AWS S3 + CloudFront, OpenTable embed, Google Maps embed, Font Awesome 6, Google Fonts

**ARCHITECTURE IN ONE SENTENCE:** Client-side SPA served from an S3 bucket behind CloudFront, with no backend, where all content is hardcoded in JSX components and CloudFront handles SPA routing by returning index.html on 403/404.

**HARDEST DECISION:** Keeping all menu and page content hardcoded in JSX rather than introducing a CMS or data layer, accepting the maintenance cost of manual edits in exchange for zero runtime dependencies, no API costs, and a deployment that's just an S3 sync.

**IF I HAD MORE TIME:** Wire the private events and careers forms to a real submission endpoint (Formspree or a lightweight Lambda + SES setup) and integrate online ordering instead of the current placeholder route.
