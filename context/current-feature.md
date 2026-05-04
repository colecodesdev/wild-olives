> Use [feature-template.md](feature-template.md) as the structure for any new feature.
> Replace this block when starting a new feature.

# Current Feature

## Status

Complete

## Goals

Fix issues raised by the code-scanner audit (2026-05-04). Two critical bugs (broken submit button, case-sensitive asset import), two routing/lint issues, seven medium quality issues, and five low/decomposition items.

## Notes

- Pre-existing lint errors (99 on main, prop-types and unescaped-entities) are unrelated to this work. After changes, lint shows 102 errors, the +3 being prop-types on the new shared `MenuPage` component, matching the project's existing pattern.
- `CareersForm` "Submit Application" button left as `ButtonLink` since the form has no submit handler at all (intentional gap per CLAUDE.md). Only the labels/required/rename items the audit flagged were addressed.

## History

- 2026-05-04: Audit cleanup. Fixed `PrivateEventsForm` submit button (was a router `<Link>`; now a real `<button type="submit">`); fixed case-sensitive `strawberry-cheesecake.jpg` import that would break Linux builds; reordered routes in `App.jsx` so the catch-all `*` is last; re-enabled `react/jsx-no-target-blank`; stripped dead `/api` proxy and `.trycloudflare.com` host from `vite.config.js`; renamed `MenuBrunch`/`MenuCocktails` exported function names to match filenames; deleted unused `src/components/ui/Hero.jsx` scaffold; added `type="button"` to back-buttons in `NotFound` and `BusinessClosed`; removed component-name DOM id in `Events.jsx`; extracted shared `MenuPage` section component, collapsing 6 menu pages to ~12 lines each; added accessible `<label>` elements and `required`/`autoComplete` attributes to `CareersForm`; switched `Gallery`/`SocialGrid` to stable `key={src}`; promoted "Private Events" section title from `<div>` to `<h2>` via `Heading`. Build verified.
