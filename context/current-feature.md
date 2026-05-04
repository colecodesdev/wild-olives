> Use [feature-template.md](feature-template.md) as the structure for any new feature.
> Replace this block when starting a new feature.

# Current Feature

## Status

Complete

## Goals

Apply the refactor-scanner findings (2026-05-04, post-audit). Extract shared components and constants for patterns repeated 3+ times across `src/`: cork-overlay banners, logo-divider clusters, back buttons, navigation styling, menu link data, and prose/section-title typography classes.

## Notes

- Pre-existing lint errors continue to be prop-types and unescaped-entities only (unrelated to this work). Count went from 102 (post-audit) to 112 (post-refactor). The +10 are all prop-types errors on new components and on the two new ButtonLink props (`type`, `onClick`), matching the project's existing pattern of not declaring prop-types on local components.
- Mobile and desktop menu link orders deliberately differ; the new `MENU_LINKS_DESKTOP` and `MENU_LINKS_MOBILE` arrays preserve both orderings while sharing one `{ path, label }` source.
- `CorkBanner` defaults match the most common shape (`h-[520px]`, `bg-black/40`); Home overrides `heightClass="h-[500px]"` to preserve its prior look.
- Visual smoke test in browser at 1280px and 375px confirmed Home, Careers, NotFound, PrivateEvents, /menu/dinner, and the mobile nav (with menu submenu open) all render correctly.

## History

- 2026-05-04: Refactor cleanup. Added `subtitle = 'Wild Olives 30a'` default to `PageHeroTitle`, removed explicit prop from 6 pages. Extracted `CorkBanner` section (encapsulating `ContentBanner` + cork-overlay image), updated Home, OurStory, PrivateEvents, Reservations, Careers, Events. Extracted `LogoDivider` ui primitive (logo + bordered rules), updated Home, PrivateEvents, Careers, Events. Added `onClick`/`type` props to `ButtonLink` (button branch when `type="submit"` or no `to`/`href`; passthrough on Link/anchor otherwise) and exported `buttonLinkBase` class string. Extracted `BackButton` ui primitive that uses `useNavigate(-1)` and the shared base; replaced inline back-buttons in `NotFound` and `BusinessClosed`. Replaced `PrivateEventsForm` inline submit `<button>` with `<ButtonLink type="submit">`; replaced `CareersForm` `uploadLabelStyle` constant with imported `buttonLinkBase`. Extracted `navLinkClass` to `src/lib/navLinkClass.js`, used by `Navbar` desktop links and `MenuNav`. Extracted `MENU_LINKS_DESKTOP`/`MENU_LINKS_MOBILE` to `src/data/menuLinks.js`; both `Navbar` mobile submenu and `MenuNav` now map over them. Extracted `proseClass` and `sectionTitleClass` to `src/lib/typography.js`; applied `proseClass` to 8 paragraphs across pages and `PrivateEvents` section, applied `sectionTitleClass` as the new default for `CenteredInfoBlock` and `SocialGrid` plus `Home` "Stay Wild" heading. Removed unused `logo` import from `Events.jsx`. Build verified; visual smoke test passed at desktop and mobile.
