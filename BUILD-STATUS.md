# Validation scope

Run normal frozen install, Astro check/build, output verifier and default Wrangler dry run on the intended revision. Local commands do not establish official build status, domain delivery, browser behavior or live forecast availability.

The site is bilingual. Bengali pages are served at the root; their English mirrors are served under `/en/` and cross-linked with `hreflang` (`bn-BD`, `en`, `x-default`).

Content shape:

- Homepage (`/`) with the topic directory, an English homepage (`/en/`, generated from `src/components/EnHome.astro`) and three legal/settings pages plus a localized error page.
- 36 topic pages under `src/data/pages/*.ts`, each with Bengali and English content, rendered by the single dynamic route `src/pages/[...slug].astro`:
  - `visit/*` (10), `transport/*` (8), `history/*` (4), `architecture/*` (5), `events/*` (2), `nearby/*` (4), `itineraries/*` (3).
- The sitemap includes the homepages and the 36 topic pages in both languages; `noindex` legal pages are excluded.

Production acceptance includes HTTP/www normalization, true nonempty 404, empty HEAD, referenced resources, mobile legibility, analytics controls, weather success/fallback, correct `hreflang` pairing and canonical trailing-slash normalization.
