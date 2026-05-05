# Project State: Wild Olives

> Snapshot for rescoping conversations. Captures what is built, what is intentionally placeholder, and what the current architecture cannot do without structural changes. Pair with [project-overview.md](project-overview.md) and [coding-standards.md](coding-standards.md) for full context.

*Snapshot date: 2026-05-04*

---

## 1. One-paragraph summary

Wild Olives is a static React 18 SPA marketing site for a 30A bistro, built with Vite 6, Tailwind v3, and React Router v7. It is deployed as a hashed static bundle to a private S3 bucket fronted by CloudFront (OAC), with `/index.html` returned on 403/404 so client-side deep links resolve. There is no server runtime, no database, no auth, no CMS, no analytics, and no test suite. All page content is hardcoded JSX. Two forms exist (private events, careers) but collect into local state only; there is no submit endpoint.

Production: https://d6uiwxps2u5ue.cloudfront.net

---

## 2. What is built and working

### Routes (source of truth: [src/App.jsx](src/App.jsx))

```
/                  Home
/menu              -> redirect /menu/dinner
/menu/dinner       Menu - Dinner
/menu/brunch       Menu - Brunch
/menu/happy-hour   Menu - Happy Hour
/menu/cocktails    Menu - Cocktails
/menu/wine         Menu - Wine
/menu/dessert      Menu - Dessert
/reservations      OpenTable iframe embed
/events            Events
/private-events    Private events + inquiry form (UI only)
/our-story         About
/contact           Contact + Google Maps iframe
/careers           Careers + application form (UI only)
/closed            Placeholder used as the "Order Online" destination
/*                 NotFound (404)
```

### Component layers (three tiers + pages)

- **`src/components/ui/`** primitives: `Container`, `Section`, `Heading`, `Divider`, `Grid`, `ImageTile`, `ParallaxBanner`, `ContentBanner`, `HeroTitle`, `PageHeroTitle`, `ButtonLink`, `BackButton`, `LogoDivider`.
- **`src/components/sections/`** composites: `Gallery`, `SocialGrid`, `SplitFeature`, `CenteredInfoBlock`, `MenuNav`, `MenuPage`, `OpenTableEmbed`, `GoogleMapEmbed`, `CorkBanner`, `PrivateEvents`, `PrivateEventsForm`, `CareersForm`.
- **`src/components/layout/`** shell: `Navbar`, `Footer`, `MainLayout`.
- **`src/pages/`** route components, one per route.
- **`src/data/menuLinks.js`** shared `MENU_LINKS_DESKTOP` / `MENU_LINKS_MOBILE` used by `Navbar` mobile submenu and `MenuNav`.
- **`src/lib/`** small utilities: `navLinkClass.js`, `typography.js` (`proseClass`, `sectionTitleClass`).

### Behaviors that already work

- Mobile-first responsive layout (375px / 768px / 1280px tested).
- Sticky desktop navbar with `NavLink` active styling.
- Full-screen mobile overlay nav with auto-expanding Menu submenu when on a `/menu/*` route, plus body scroll lock.
- Smooth scroll-to-top on every route change ([MainLayout.jsx](src/components/layout/MainLayout.jsx)).
- Animated hamburger ↔ X icon.
- Parallax background-attachment on `md:` and up only (mobile would jank).
- OpenTable widget embed on `/reservations`.
- Google Maps embed on `/contact`.
- Custom 404 with a `BackButton` that calls `useNavigate(-1)`.
- All images imported from `src/assets/` so Vite hashes filenames.

### Tooling

- `npm run dev` (Vite, port 3000)
- `npm run build` (outputs `dist/`)
- `npm run lint` (ESLint 9 flat config)
- `npm run preview`
- No test command. No test runner installed.

---

## 3. What is intentionally placeholder

Do not "fix" these without explicit direction. They are scoped-out, not bugs.

| Surface | Current state | What's missing |
|---|---|---|
| `PrivateEventsForm` | Collects into local `useState`, no `onSubmit` wired | No email/API endpoint chosen |
| `CareersForm` | Collects into local `useState`, no `onSubmit` wired, file input is decorative | No upload destination, no submit endpoint |
| "Order Online" CTA (desktop + mobile) | Routes to `/closed` (`BusinessClosed` page) | No online ordering integration selected |
| `react-toastify` | Installed | Not imported anywhere |
| `react-spinners` | Installed | Not imported anywhere |
| `context/screenshots/` | Empty directory | Reference shot lives at [docs/app-screenshot.png](docs/app-screenshot.png) instead |

---

## 4. Architectural constraints (what the current setup is and is not)

### What this architecture **is**

- A pure client SPA, served as a hashed static bundle from S3 via CloudFront.
- Single bundle, no code-splitting beyond Vite defaults.
- React Router v7 data router (`createBrowserRouter` + `createRoutesFromElements`).
- Tailwind v3 with JS config and `@tailwind base/components/utilities`. **Not** v4 CSS-first config.
- JavaScript / JSX. **No** TypeScript.
- ES modules everywhere (`"type": "module"`).
- `StrictMode` on, so effects run twice in dev.
- Three-tier component model (`ui` → `sections` → `layout`) plus pages. Adding a fourth tier requires explicit discussion.

### What this architecture **cannot do without structural change**

These are the leverage points to think about during rescoping. Any feature that requires one of these triggers a real expansion of scope, not a tweak.

1. **No server runtime.** Anything that needs to keep a secret, sign a request, mutate shared state, or run untrusted input cannot live in this repo as-is. Options when we hit it: introduce serverless functions (AWS Lambda + API Gateway), a third-party form service (Formspree, Basin), or a BaaS (Supabase, Firebase). Each is a real new system.
2. **No database / persistence.** No way to store reservations, applications, leads, or orders beyond what a third party holds.
3. **No authentication.** No user accounts, no admin area, no gated pages. Adding auth means adding both an identity provider and a server-side enforcement layer.
4. **No CMS.** Menus, hours, copy, and image references are hardcoded JSX. Non-developer edits today require a code change, PR, build, and S3 sync. If marketing wants to update content without a deploy, this changes.
5. **No SSR / SSG.** Crawlers see an empty `#root` until JS executes. Page-specific `<title>` and meta tags are not managed (a single `index.html` head). SEO and link-preview cards are limited until we add a static-site build (Astro, Next static export) or a head-management library and prerender step.
6. **No analytics, no telemetry, no consent banner.** Zero behavioral data. No conversion tracking on the inquiry forms or the (not-yet-wired) order CTA.
7. **No payments.** Stripe / Square / Toast / etc. would require either a third-party hosted checkout (redirect off-site, easiest) or a serverless function to mint sessions.
8. **No image optimization pipeline beyond Vite's filename hashing.** Source images are committed at whatever size they were exported at. No responsive `srcset`, no `<picture>`, no AVIF fallbacks. Vite does not compress source images.
9. **No tests.** Manual QA across 375/768/1280px is the entire verification process. Any feature that needs regression confidence (forms with validation, payment flow, auth) effectively brings the test stack with it (Vitest + React Testing Library is the conventional pick, not yet decided).
10. **No environment variables / secrets.** No `.env`, no build-time config. Anything requiring an API key needs both the key-management story and a way to keep it out of the public bundle (i.e. a server, see #1).
11. **Static deploy = full bundle invalidation per change.** No incremental edits, no preview environments per branch (manual S3 sync + CloudFront invalidation today).

### Conventions worth not breaking accidentally

- All in-app navigation uses `<Link>` / `<NavLink>`. Raw `<a href="/...">` breaks SPA state.
- `<NavLink>` only when the link needs active styling.
- Tailwind class strings must be plain literals (no `bg-${color}-500` — the content scanner won't see them). Pattern lives in [ButtonLink.jsx](src/components/ui/ButtonLink.jsx).
- Function components only. No classes.
- Routes are lowercase kebab-case.
- `path="*"` 404 stays last.
- One default export per component file.

---

## 5. Recent change context (so AI doesn't re-propose what just happened)

The last completed work (2026-05-04, see [current-feature.md](current-feature.md) History) was a refactor pass after a `refactor-scanner` audit. It extracted patterns repeated 3+ times across `src/`:

- `CorkBanner` (cork overlay over a `ContentBanner`).
- `LogoDivider` (logo flanked by bordered rules).
- `BackButton` (uses `useNavigate(-1)`).
- `navLinkClass` shared between `Navbar` desktop links and `MenuNav`.
- `MENU_LINKS_DESKTOP` / `MENU_LINKS_MOBILE` (preserves intentionally different ordering between desktop and mobile menus).
- `proseClass` and `sectionTitleClass` typography utilities.
- `ButtonLink` gained `type` and `onClick` props so submit buttons share the same visual base; `buttonLinkBase` is now exported.
- `PageHeroTitle` defaults `subtitle = 'Wild Olives 30a'`.

Two earlier passes also relevant:
- 2026 audit cleanup: removed orphaned pages, removed json-server leftovers, fixed mobile "Order Online" button, addressed `code-scanner` findings.
- ESLint state: known pre-existing errors are prop-types and unescaped-entities only. New components in the recent refactor follow the project convention of not declaring prop-types on local components.

---

## 6. Useful starting questions for a rescoping conversation

If the rescoping is open-ended, these are the forks that materially change scope:

1. **Do forms need to actually submit, and where to?** (Formspree vs Lambda+SES vs full backend.) This is the smallest possible step away from "pure static."
2. **Does "Order Online" need to be real, or stay deferred?** Real online ordering is a vendor integration (Toast, ChowNow, BentoBox) and likely off-site redirect — but if we want it embedded, that's a different cost.
3. **Does content need to be editable without a deploy?** If yes, we need a CMS choice (headless CMS + build webhook, or runtime fetch). If no, we can stay hardcoded.
4. **Does SEO / link previews matter for this site?** Today the head is single-page. Per-route titles/meta need either a head-management library + prerender, or a framework migration (Astro / Next static export).
5. **Are we adding analytics?** If yes, decide on consent-banner posture before picking a vendor (GA4, Plausible, Fathom).
6. **Reservations: stay with OpenTable iframe, or switch to Resy / SevenRooms / native?**
7. **Mobile/tablet image performance: do we want a responsive-image pipeline?** Plausible add without changing the architecture (`vite-imagetools` or similar).
8. **Do we want a test stack now or defer?** Vitest + React Testing Library is the conventional next step.

Each "yes" pulls in the corresponding constraint from §4. Picking which ones we're saying yes to is the actual rescoping decision.
