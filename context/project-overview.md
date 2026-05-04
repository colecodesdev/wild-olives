# Project Overview: Wild Olives

> **A static React SPA marketing site for Wild Olives, a 30A bistro, deployed to AWS S3 + CloudFront.**

---

## Table of Contents

1. [Problem & Vision](#1-problem--vision)
2. [Target Users](#2-target-users)
3. [Tech Stack](#3-tech-stack)
4. [Architecture Overview](#4-architecture-overview)
5. [Features](#5-features)
6. [Pages](#6-pages)
7. [UI/UX Guidelines](#7-uiux-guidelines)
8. [URL Structure](#8-url-structure)
9. [Integrations](#9-integrations)
10. [Intentionally Out of Scope](#10-intentionally-out-of-scope)
11. [Key Dependencies & Links](#11-key-dependencies--links)

---

## 1. Problem & Vision

The original Wild Olives website was hosted on Wix. The goal of this project is to rebuild it as a maintainable, component-driven React SPA while preserving the visual structure and content of the original site, and to host it cheaply as a static site on AWS.

| What | Where it lives in this build |
|---|---|
| Page content (menus, story, contact, hours) | Hardcoded JSX in [src/pages/](src/pages/) |
| Layout primitives (containers, headings, dividers, buttons) | [src/components/ui/](src/components/ui/) |
| Composite sections (galleries, split features, banners, forms) | [src/components/sections/](src/components/sections/) |
| Site shell (nav, footer, layout) | [src/components/layout/](src/components/layout/) |
| Static assets (images, fonts, logos) | [src/assets/](src/assets/) |
| Routing | [src/App.jsx](src/App.jsx) (React Router v7 data router) |

**Wild Olives** solves this with a small, dependency-light React SPA whose only runtime is the browser.

---

## 2. Target Users

| Persona | Core Need |
|---|---|
| **Diner / Visitor** | Browse menus, find hours and address, make a reservation |
| **Event Inquirer** | Submit a private event request and view event types |
| **Job Seeker** | View open positions and submit a careers form |

---

## 3. Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18.3 (function components + hooks) |
| **Language** | JavaScript (JSX). No TypeScript. |
| **Build Tool** | Vite 6 |
| **Routing** | react-router-dom 7.1 (data router via `createBrowserRouter`) |
| **CSS / Styling** | Tailwind CSS v3.4 + small `index.css` for base font |
| **Components** | None (no UI library, all components are local) |
| **Icons** | react-icons + Font Awesome 6 (loaded via CDN in [index.html](index.html)) |
| **Toasts** | react-toastify (installed, currently unused) |
| **Spinners** | react-spinners (installed, currently unused) |
| **Linting** | ESLint 9 flat config + react / react-hooks / react-refresh plugins |
| **Testing** | None |
| **Hosting** | Amazon S3 (private bucket) behind CloudFront CDN |

> **Static-site rule:** there is no server. All logic runs in the browser. Forms must integrate with a third-party endpoint (Formspree, AWS SES via Lambda, etc.) when they get wired up. Do not introduce a backend without explicit direction.

> **Tailwind v3 rule:** this project uses Tailwind v3, which uses a JS config file ([tailwind.config.js](tailwind.config.js)) and `@tailwind base/components/utilities` directives in [src/index.css](src/index.css). Do not introduce v4 CSS-first config patterns.

---

## 4. Architecture Overview

```
Browser
   |
   v
CloudFront CDN  (HTTPS, edge cache, 403/404 -> /index.html for SPA routes)
   |
   v
S3 (private bucket, OAC)  <- vite build output (dist/)
   |
   v
Browser executes React SPA
   |
   v
React Router (client-side) renders pages from src/pages/
   |
   v
External embeds: OpenTable iframe, Google Maps iframe, Font Awesome CDN
```

All application logic runs client-side. There is no server runtime, database, or API.

---

## 5. Features

### Core Features (All Users)

- Mobile-first responsive marketing site
- Sticky desktop navbar with active-route styling
- Full-screen mobile overlay nav with nested menu dropdown
- Smooth scroll-to-top on route change ([src/components/layout/MainLayout.jsx](src/components/layout/MainLayout.jsx))
- OpenTable reservation widget embed
- Google Maps embed for location
- Multiple menu sub-pages (Dinner, Brunch, Happy Hour, Cocktails, Wine, Dessert)
- Image galleries and parallax banners (parallax disabled on mobile to avoid jank)
- Private event inquiry form (UI only, no submit handler yet)
- Careers form (UI only, no submit handler yet)
- Custom 404 page

There are no tiered or gated features. Every page is publicly accessible.

---

## 6. Pages

| Page | File | Notes |
|---|---|---|
| Home | [src/pages/Home.jsx](src/pages/Home.jsx) | Hero, hours, gallery, story, social grid |
| Menu (index redirect) | redirects to `/menu/dinner` | See [src/App.jsx:24](src/App.jsx#L24) |
| Menu Dinner | [src/pages/MenuDinner.jsx](src/pages/MenuDinner.jsx) | |
| Menu Brunch | [src/pages/MenuBrunch.jsx](src/pages/MenuBrunch.jsx) | |
| Menu Happy Hour | [src/pages/MenuHappyHour.jsx](src/pages/MenuHappyHour.jsx) | |
| Menu Cocktails | [src/pages/MenuCocktails.jsx](src/pages/MenuCocktails.jsx) | |
| Menu Wine | [src/pages/MenuWine.jsx](src/pages/MenuWine.jsx) | |
| Menu Dessert | [src/pages/MenuDessert.jsx](src/pages/MenuDessert.jsx) | |
| Reservations | [src/pages/Reservations.jsx](src/pages/Reservations.jsx) | OpenTable embed |
| Events | [src/pages/Events.jsx](src/pages/Events.jsx) | |
| Private Events | [src/pages/PrivateEvents.jsx](src/pages/PrivateEvents.jsx) | Inquiry form |
| Our Story | [src/pages/OurStory.jsx](src/pages/OurStory.jsx) | |
| Contact | [src/pages/Contact.jsx](src/pages/Contact.jsx) | Google Maps embed |
| Careers | [src/pages/Careers.jsx](src/pages/Careers.jsx) | Application form |
| Business Closed | [src/pages/BusinessClosed.jsx](src/pages/BusinessClosed.jsx) | Currently used as the "Order Online" landing |
| 404 | [src/pages/NotFound.jsx](src/pages/NotFound.jsx) | Catch-all `path="*"` route |

---

## 7. UI/UX Guidelines

### Design Principles

- Mobile-first. Every layout starts at 375px and progressively enhances.
- Component-first. Pages compose primitives from `src/components/ui/` and sections from `src/components/sections/`.
- Quiet, premium aesthetic: white backgrounds, black/near-black type, generous whitespace, photographic imagery.
- Reference design: original Wild Olives Wix site.

### Typography

Loaded via Google Fonts in [index.html](index.html):

- **Raleway** (display, headings, uppercase wide-tracking)
- **Montserrat** (body, default `html, body` font set in [src/index.css](src/index.css))
- **Roboto** (declared in `tailwind.config.js` `font-sans` fallback list)

Custom letter-spacing utilities `tracking-bigWide` (1rem) and `tracking-bigMedium` (0.5rem) are defined in [tailwind.config.js](tailwind.config.js).

### Color

- Primary palette: black (`#000`), white, neutral grays (Tailwind defaults).
- Accent: `oliveBrown` = `hsl(99, 9%, 38%)` ([tailwind.config.js:19](tailwind.config.js#L19)).
- Banner overlays: `bg-black/30` to `bg-black/40` for legibility over photography.

### Layout primitives

- `Container` (max-width 7xl, horizontal padding 6) [src/components/ui/Container.jsx](src/components/ui/Container.jsx)
- `Section` thin wrapper [src/components/ui/Section.jsx](src/components/ui/Section.jsx)
- `Heading`, `Divider`, `ButtonLink`, `ImageTile`, `Grid`, `HeroTitle`, `PageHeroTitle`
- Banners: `ParallaxBanner`, `ContentBanner`, `Hero`

### Composite sections

- `SplitFeature` (two-column reversible layout)
- `Gallery` (configurable rows of images)
- `SocialGrid` (gallery + handle + profile link)
- `CenteredInfoBlock` (title + dividers + centered text + CTA)
- `MenuNav` (sub-nav for menu pages)
- `OpenTableEmbed`, `GoogleMapEmbed`
- `PrivateEvents`, `PrivateEventsForm`, `CareersForm`

### Layout shell

```
+-----------------------------------------------+
|                  Navbar (sticky)              |
+-----------------------------------------------+
|                                               |
|              <Outlet /> (page content)        |
|                                               |
+-----------------------------------------------+
|                    Footer                     |
+-----------------------------------------------+
```

### Responsive breakpoints (Tailwind defaults)

- `sm` 640px, `md` 768px (primary mobile/desktop split), `lg` 1024px, `xl` 1280px, `2xl` 1536px.

### Micro-interactions

- Smooth scroll-to-top on route change.
- Animated hamburger -> X icon transition.
- Mobile menu auto-expands the Menu submenu when opened on a `/menu/*` route.
- Body scroll lock while the mobile overlay is open.
- Parallax background-attachment limited to `md:` and up.

### Screenshots

The reference screenshot of the deployed site is at [docs/app-screenshot.png](docs/app-screenshot.png). The `context/screenshots/` directory is currently empty; populate it before referencing images here.

---

## 8. URL Structure

```
/                          -> Home
/menu                      -> redirects to /menu/dinner
/menu/dinner               -> Dinner menu
/menu/brunch               -> Brunch menu
/menu/happy-hour           -> Happy Hour menu
/menu/cocktails            -> Cocktails menu
/menu/wine                 -> Wine menu
/menu/dessert              -> Dessert menu
/reservations              -> OpenTable embed
/events                    -> Events
/private-events            -> Private events + inquiry form
/our-story                 -> About / Our Story
/contact                   -> Contact + Google Map
/careers                   -> Careers + application form
/closed                    -> "Business closed" landing (currently the Order Online destination)
/*                         -> NotFound (404)
```

Source of truth: [src/App.jsx](src/App.jsx).

---

## 9. Integrations

| Integration | Purpose | Where it lives |
|---|---|---|
| OpenTable | Reservation widget | iframe in [src/components/sections/OpenTableEmbed.jsx](src/components/sections/OpenTableEmbed.jsx), used by [src/pages/Reservations.jsx](src/pages/Reservations.jsx) |
| Google Maps | Location map | iframe in [src/components/sections/GoogleMapEmbed.jsx](src/components/sections/GoogleMapEmbed.jsx) |
| Font Awesome 6 | Social icons | CDN `<link>` in [index.html](index.html) |
| Google Fonts | Raleway, Montserrat | `<link>` in [index.html](index.html) |
| Instagram, X, Facebook | Outbound social links | [src/components/layout/Footer.jsx](src/components/layout/Footer.jsx) and [src/components/sections/SocialGrid.jsx](src/components/sections/SocialGrid.jsx) |

There are no first-party APIs, no analytics, no auth provider, no payment processor.

---

## 10. Intentionally Out of Scope

The following are **not** in this project and should not be flagged as missing by audits:

- No backend, no API routes, no serverless functions.
- No database, no ORM, no schema.
- No authentication or authorization.
- No SSR / SSG. Pure client SPA.
- No CMS integration. Content is hardcoded in JSX.
- No tests. No test runner installed.
- No TypeScript. JSX only.
- No analytics, no telemetry, no cookies, no consent banner.
- Form `onSubmit` handlers in [PrivateEventsForm.jsx](src/components/sections/PrivateEventsForm.jsx) and [CareersForm.jsx](src/components/sections/CareersForm.jsx) are not wired to any service yet. The forms collect data into local state only.
- The "Order Online" CTA (desktop and mobile) routes to `/closed` as a placeholder until online ordering is integrated.

---

## 11. Key Dependencies & Links

### Documentation

| Tool | Link |
|---|---|
| React 18 | https://react.dev |
| React Router v7 | https://reactrouter.com/start/library/routing |
| Vite | https://vite.dev/guide/ |
| Tailwind CSS v3 | https://v3.tailwindcss.com/docs/installation |
| ESLint flat config | https://eslint.org/docs/latest/use/configure/configuration-files |
| Airbnb React/JSX style guide | https://github.com/airbnb/javascript/tree/master/react |
| WCAG 2.2 AA quickref | https://www.w3.org/WAI/WCAG22/quickref/ |
| OpenTable widget | https://restaurant.opentable.com/products/reservation-widget/ |
| AWS S3 + CloudFront static hosting | https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-cloudfront-walkthrough.html |

### Key Packages

```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.1.1",
  "react-spinners": "^0.15.0",
  "react-toastify": "^11.0.3"
},
"devDependencies": {
  "@vitejs/plugin-react": "^4.3.4",
  "tailwindcss": "^3.4.17",
  "vite": "^6.0.5",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16"
}
```

### Build & Deploy

```bash
npm install
npm run dev          # local dev on http://localhost:3000
npm run lint         # ESLint
npm run build        # outputs to dist/
npm run preview      # serve dist/ locally to verify

# Deploy: upload dist/ to the S3 bucket, invalidate the CloudFront distribution.
# AWS CLI examples (run with appropriate AWS_PROFILE):
#   aws s3 sync dist/ s3://<bucket-name>/ --delete
#   aws cloudfront create-invalidation --distribution-id <id> --paths "/*"
```

---

*Last updated: 2026-05-04*
