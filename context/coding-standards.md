# Coding Standards

Rules for the Wild Olives codebase: React 18 (JSX), Vite 6, Tailwind v3, React Router v7, ESLint flat config, no TypeScript, no tests.

Each rule below is backed by an authoritative source. When in doubt, defer to:

- React docs: https://react.dev
- Airbnb React/JSX style guide: https://github.com/airbnb/javascript/tree/master/react
- Vite docs: https://vite.dev/guide/
- Tailwind v3 docs: https://v3.tailwindcss.com/docs
- WCAG 2.2 AA quickref: https://www.w3.org/WAI/WCAG22/quickref/
- MDN Web Docs: https://developer.mozilla.org

---

## Language (JavaScript / JSX)

- Use ES modules (`import` / `export`). Vite requires this. `package.json` has `"type": "module"`.
- Prefer `const` over `let`. Never use `var`. (Airbnb 2.1, 2.2)
- Use arrow functions for callbacks and inline functions. Use `function` declarations for top-level named exports of components. (Airbnb React 8.1: components as classes are deprecated; use function components)
- Use template literals for string interpolation. No string concatenation with `+`.
- Use destructuring for props and array elements where it improves clarity. (Airbnb 5)
- Use the spread operator (`...`) for shallow copies and prop forwarding. (Airbnb 4.3, 5.4)
- Single quotes for strings, double quotes for JSX attributes. (Airbnb React `jsx-quotes`)
- Trailing comma in multi-line literals. Keeps diffs clean.
- No semicolons OR consistent semicolons; the existing codebase omits them, match the file you are editing.

This project does not use TypeScript. If you find yourself needing types, prefer JSDoc annotations on exported functions rather than introducing TS without an explicit decision.

## React

- **Function components only.** No class components. (https://react.dev/reference/react/Component "Most components in modern React are function components")
- **Rules of Hooks** (https://react.dev/reference/rules/rules-of-hooks):
  1. Only call hooks at the top level. Never inside loops, conditions, or nested functions.
  2. Only call hooks from React function components or other custom hooks.
- **`useEffect` dependency arrays must list every reactive value referenced inside.** This is enforced by `react-hooks/exhaustive-deps`. If a value is intentionally excluded, leave a one-line `// reason:` comment. (https://react.dev/reference/react/useEffect#specifying-reactive-dependencies)
- **Effects should describe synchronization, not "things that happen on render."** Most "I want to do X when the user clicks Y" logic belongs in event handlers, not effects. (https://react.dev/learn/you-might-not-need-an-effect)
- **Cleanup effects that subscribe, lock, or attach.** The mobile-nav scroll lock in [src/components/layout/Navbar.jsx](src/components/layout/Navbar.jsx) is the reference pattern: capture previous value, set new value, return a cleanup that restores. (https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development)
- **`StrictMode` is on** ([src/main.jsx:7](src/main.jsx#L7)). Effects run twice in dev. Write effects that are safe to run twice. (https://react.dev/reference/react/StrictMode)
- **Lists need stable `key` props.** Never use array index unless the list is static and never reordered. (https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
- **Lift state up only as far as needed.** Co-locate state with the component that uses it. (https://react.dev/learn/sharing-state-between-components)
- **Avoid premature `useMemo` / `useCallback`.** Add them only when a measured render cost or a dependency-array stability problem justifies it. (https://react.dev/reference/react/useMemo#should-you-add-usememo-everywhere)
- **Controlled inputs:** form fields hold value in state and update via `onChange`. Pattern: see [src/components/sections/PrivateEventsForm.jsx](src/components/sections/PrivateEventsForm.jsx). (https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

## Routing (React Router v7)

- Routes are declared in [src/App.jsx](src/App.jsx) using `createBrowserRouter` + `createRoutesFromElements`. Do not introduce a second router. (https://reactrouter.com/start/library/routing)
- Use `<Link>` / `<NavLink>` for in-app navigation, never raw `<a href="/...">`. Raw `<a>` triggers a full page reload and breaks SPA state.
- Use `<NavLink>` (not `<Link>`) when the link should style differently when active. Pattern: see [src/components/layout/Navbar.jsx](src/components/layout/Navbar.jsx). (https://reactrouter.com/api/components/NavLink)
- Route paths are lowercase with hyphens (`/private-events`, `/our-story`). Match the existing scheme.
- The catch-all `path="*"` route must remain last and render `NotFound`.

## Styling (Tailwind v3)

- Tailwind v3 uses a JS config file and the three `@tailwind` directives in [src/index.css](src/index.css). Do not migrate to v4 patterns (`@import "tailwindcss"`, CSS-only config) without an explicit upgrade plan. (https://v3.tailwindcss.com/docs/installation)
- **Utility-first.** Compose classes inline rather than writing custom CSS. (https://v3.tailwindcss.com/docs/utility-first)
- **Extend the theme, do not replace it.** Add tokens under `theme.extend` in [tailwind.config.js](tailwind.config.js) so Tailwind defaults remain. (https://v3.tailwindcss.com/docs/theme#extending-the-default-theme)
- **Mobile-first responsive prefixes.** Write base classes for mobile, then layer `md:`, `lg:`, etc. (https://v3.tailwindcss.com/docs/responsive-design)
- **Class lists must be plain string literals** (or template literals composed from plain strings). Tailwind's content scanner does not see classes built from runtime concatenation of fragments. Build a full class string per branch (the pattern in [src/components/ui/ButtonLink.jsx](src/components/ui/ButtonLink.jsx)) rather than `bg-${color}-500`. (https://v3.tailwindcss.com/docs/content-configuration#dynamic-class-names)
- Arbitrary values (`h-[600px]`, `w-[250px]`) are allowed but prefer theme tokens when the same value appears more than twice.
- Avoid `@apply` in CSS. Compose at the JSX level instead. (https://v3.tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply)
- Custom font families, letter-spacing tokens, colors, and grid templates already live in [tailwind.config.js](tailwind.config.js). Add new design tokens there, not as one-off arbitrary values.

## File Organization

| Layer | Path | Purpose |
|---|---|---|
| Pages (route components) | `src/pages/PageName.jsx` | One file per route. No data fetching. Compose sections + UI primitives. |
| Layout shell | `src/components/layout/` | `Navbar`, `Footer`, `MainLayout`. Used by every page. |
| Composite sections | `src/components/sections/` | Reusable multi-element blocks (forms, galleries, embeds). |
| UI primitives | `src/components/ui/` | Smallest reusable building blocks (`Container`, `Heading`, `Divider`, `ButtonLink`). |
| Static assets | `src/assets/{images,logos,icons,fonts}/` | Imported via ES `import`, not referenced as absolute paths. |
| Routing | `src/App.jsx` | Single source of truth for routes. |
| Entrypoint | `src/main.jsx` | Mounts `<App />` inside `<StrictMode>`. |
| Global CSS | `src/index.css` | Only Tailwind directives + the base font-family on `html, body`. |

Do not introduce a fourth component tier without proposing it first. Three layers (`ui` -> `sections` -> `layout`) plus pages is the convention.

## Assets and Images

- **Always `import` images from `src/assets/`** so Vite hashes filenames and emits cache-friendly URLs. (https://vite.dev/guide/assets#importing-asset-as-url)
- Files in `public/` are served as-is at the URL root with no hashing or processing. Use `public/` only for assets that must keep a stable URL (favicons, manifest files, robots.txt). (https://vite.dev/guide/assets#the-public-directory)
- Every `<img>` must have an `alt` attribute. Decorative images use `alt=""`. (WCAG 2.2 SC 1.1.1, https://www.w3.org/WAI/WCAG22/quickref/#non-text-content)
- Prefer `.webp` for new photographic assets when source quality allows. Existing `.jpg` and `.png` files do not need to be converted en masse.
- Large hero images should be reasonably compressed before commit. Vite does not compress source images.

## Naming

- **Components:** `PascalCase` filename and identifier (`Navbar.jsx` exports `Navbar`). (Airbnb React 1, 2)
- **Component files:** one component per file. Filename matches the component name.
- **Hooks:** `useThing.js`, returns `[state, helpers]` or an object. Must start with `use`. (https://react.dev/reference/rules/rules-of-hooks)
- **Variables and functions:** `camelCase`.
- **Constants (true module-level constants):** `SCREAMING_SNAKE_CASE` only when the value is a fixed primitive used like an enum. Local arrays of strings (e.g. `months` in [src/components/sections/PrivateEventsForm.jsx](src/components/sections/PrivateEventsForm.jsx)) stay `camelCase`.
- **Boolean props and state:** prefix with `is`, `has`, `should` (`isOpen`, `isMenuOpen`).
- **Event handlers:** `handleX` for handlers defined inside a component, `onX` for props that accept handlers. (Airbnb React 8: `onClick={handleClick}`)
- **Routes / URLs:** lowercase, kebab-case (`/private-events`).
- **CSS class strings:** keep stable in source so Tailwind's content scanner sees them.

## Data Handling and Forms

This project has no backend.

- **Hardcoded content** belongs in JSX (current pattern). If a page grows beyond a few dozen items, extract a per-page data file (e.g. `src/data/menuDinner.js` exporting an array) and `import` it into the page.
- **Form state** lives in component state via `useState`. The submit handler is invoked via an `onSubmit` prop so the integration choice (Formspree, AWS SES + Lambda, etc.) is deferred.
- **When forms get wired up,** validate inputs client-side (HTML5 attributes first: `required`, `type="email"`, `pattern`, `minLength`). For richer validation, introduce one library (`zod` is a common choice) rather than ad-hoc helpers.
- **No `fetch` is required today.** If one is added: handle the rejected promise, show a user-visible error, and never block the UI thread waiting for it.

## Accessibility (WCAG 2.2 AA)

Reference: https://www.w3.org/WAI/WCAG22/quickref/

- **Images: meaningful `alt`** for content images; `alt=""` for decorative. (SC 1.1.1)
- **Color contrast 4.5:1** for normal text, 3:1 for large text. White-on-photo titles must use a darkening overlay (current pattern: `bg-black/30` to `bg-black/40`). (SC 1.4.3)
- **Touch targets >= 24x24px** (WCAG 2.2 SC 2.5.8 minimum). Aim for 44x44px on primary actions per Apple HIG and Material guidance.
- **Keyboard support:** every interactive element must be reachable by Tab and operable by Enter / Space. Avoid `onClick` on `<div>` / `<span>`. Use `<button>` or `<a>`.
- **Visible focus indicator** on all interactive elements. Do not remove default outlines without replacing them. (SC 2.4.7)
- **`aria-label`** required on icon-only buttons (current pattern: hamburger button in [src/components/layout/Navbar.jsx](src/components/layout/Navbar.jsx) sets `aria-label` and `aria-expanded`). (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- **Heading order:** one `<h1>` per page, then nested levels in order. Do not skip levels for styling. (SC 1.3.1)
- **`lang` attribute on `<html>`** (already set to `en` in [index.html](index.html)). (SC 3.1.1)
- **External links:** `target="_blank"` must include `rel="noreferrer"` (or `rel="noopener noreferrer"`) to prevent tab-nabbing. Already followed in [src/components/layout/Footer.jsx](src/components/layout/Footer.jsx). (https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#security_and_privacy)

## Error Handling

- **Render-time errors:** wrap risky subtrees in an error boundary. React 18 has no built-in function-component boundary; if one becomes necessary use `react-error-boundary`. Currently the app has no boundary because every page is static. (https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- **Effects that may throw:** wrap the throwing call in `try/catch` inside the effect body, surface user-visible state, never let the effect crash silently.
- **Asynchronous code (when added):** always handle the rejected branch. No unhandled promise rejections.
- **`console.log` is not allowed in committed code.** `console.warn` and `console.error` are acceptable in genuine error paths. ESLint does not enforce this today; treat it as a code-review rule.

## Linting

- ESLint flat config in [eslint.config.js](eslint.config.js) is the source of truth.
- Plugins enabled: `@eslint/js`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`. (https://eslint.org/docs/latest/use/configure/configuration-files)
- `react-hooks/exhaustive-deps` and `react-hooks/rules-of-hooks` are on by default through `reactHooks.configs.recommended.rules`. Do not silence them per-line; fix the dependency or extract logic out of the effect.
- `react-refresh/only-export-components` is `warn`. A file that exports a component should not also export non-component values; split if you hit the warning.
- Do not add `eslint-disable` comments without a `// reason:` note in the same line or above.

## Testing

There is no test framework installed. Manual testing is the standard:

1. Run `npm run dev`.
2. Verify the page in Chrome at 375px (mobile), 768px (tablet), 1280px (desktop).
3. Verify keyboard navigation and visible focus.
4. Run `npm run build` and `npm run preview` to verify the production bundle.

If tests are introduced later, the conventional choice for this stack is **Vitest + React Testing Library** because it shares Vite's config and dependency graph (https://vitest.dev/guide/). That decision is not made yet.

## Code Quality

- No commented-out code in committed files. Delete it; git keeps history.
- No unused imports or variables. ESLint surfaces these.
- Keep components under ~200 lines. The current outlier is [src/components/layout/Navbar.jsx](src/components/layout/Navbar.jsx) at ~197 lines, which is the soft ceiling.
- Keep functions under ~50 lines. Long render bodies usually want extraction into smaller components or sections.
- Prefer prop-driven configuration over duplication. The existing `Gallery`, `SplitFeature`, `ContentBanner`, and `ParallaxBanner` components are the model.
- One default export per component file. Named exports are fine for non-component utilities.
- Match the formatting of the file you are editing. There is no Prettier config; do not introduce one without discussion.
- No magic numbers in JSX style props if a Tailwind token already exists.
