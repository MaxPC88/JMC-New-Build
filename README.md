# Jones Machine Co. — Website Rebuild

A React rebuild of [jonesmachineco.com](https://www.jonesmachineco.com/) for
Jones Machine Company, Inc., a CNC machine shop in Danvers, Massachusetts,
family run since 1973.

The goal is to modernize the presentation, not the company's identity. See
[CLAUDE.md](CLAUDE.md) for the full design brief and constraints.

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

Requires Node 20+.

## Stack

| Concern    | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | React 19                                 |
| Build      | Vite 8                                   |
| Routing    | react-router-dom 7                       |
| Styling    | Plain CSS — custom properties + CSS Modules |
| Fonts      | Self-hosted variable fonts via Fontsource |
| Page meta  | React 19 native metadata hoisting        |
| Linting    | oxlint                                   |

No CSS framework, no UI library, no animation library, no icon library. The
dependency list is deliberately short.

## Project structure

```
public/
  favicon.svg
  images/            photographs, organized by subject (populated in Phase 2)
src/
  main.jsx           entry point; imports the global stylesheet
  App.jsx            owns the router
  routes.jsx         the route table, including legacy .html redirects
  components/
    layout/          Layout, Header, Footer, MainNav, MobileNav,
                     UtilityBar, Logo, SkipLink, ScrollToTop
    ui/              Container, Section, Button, Card, PageHeader,
                     PagePlaceholder
    seo/             Seo
  pages/             one component per route
  data/              all site content, as plain JS modules
  hooks/             shared hooks
  styles/            global CSS layers
  utils/             helpers
```

### Content lives in `src/data`, not in JSX

Every factual claim, equipment listing, machine specification and contact
detail is a plain data module under `src/data`. Pages and components are
presentational and read from those modules.

This is deliberate. It means the full equipment list and company details exist
in exactly one place, can be reviewed against the original site in one pass,
and can be edited later without touching layout code.

**`src/data/company.js` is the source of truth for company facts. Nothing in
it is invented — every value came from the existing website. Do not add
company claims, certifications, capabilities or statistics unless they appear
on the existing site or the owners supply them.**

### Styling

Global CSS is layered, imported once from `src/main.jsx`:

```
src/styles/global.css     entry — imports fonts then the layers below
  tokens.css              design tokens: color, type, spacing, layout
  reset.css               small modern normalization
  base.css                element defaults, typography, links, focus
  utilities.css           a short list of `u-` prefixed helpers
```

Everything else is component-scoped in a sibling `Component.module.css`, so
there is no global cascade to reason about.

Component styles should reference tokens rather than raw values. If a value is
missing, add a token to `tokens.css`.

Breakpoints are documented at the bottom of `tokens.css`. The notable one is
**1200px**, where the full primary navigation replaces the mobile disclosure
button; the quote button in the header appears at **1280px**.

### Routing

`src/routes.jsx` holds the route table. Every route renders inside `Layout`
via a pathless layout route, so the header and footer persist across
navigation.

The old site's `.html` URLs are registered as redirects from
`legacyRedirects` in `src/data/navigation.js`, so existing inbound links,
bookmarks and search results keep working. **These need matching server-side
redirects at deploy time** — a `public/_redirects` file or host equivalent —
because the client-side routes only help once the app has loaded.

### Page metadata

React 19 hoists `<title>`, `<meta>` and `<link>` into `<head>`, so no helmet
library is needed. Each page renders one `<Seo>` at its top. Titles live in
`src/data/seo.js`.

## Build status

Phase 1 (foundation) is complete: project structure, global CSS, typography,
color palette, layout shell, reusable component foundations and routing.

All 14 routes exist and are navigable, but page content has **not** been
migrated yet. Unbuilt pages render `PagePlaceholder`, a deliberately
off-brand hatched box marked "not built yet". It contains no marketing copy so
it cannot be mistaken for approved content. Delete the component once no page
imports it.

Remaining phases are listed in the implementation plan: content extraction
(2), header/nav polish (3), core pages (4), capabilities (5), equipment and
quality (6), secondary pages (7), SEO and metadata (8), testing (9).

## Open questions for the owners

Two items were flagged during the content audit and are intentionally
unresolved:

1. **Contact form.** The existing site has none; quoting happens by phone, fax
   and email. A working RFQ form needs a backend the owners agree to.
2. **Three factual inconsistencies** on the existing site: the FANUC D21 vs.
   D28 heading on the milling page, the KIWA KH-45 year (2014 vs. 2016), and
   "over 40 years experience" versus 50+ years since 1973. These are carried
   over verbatim until the owners confirm corrections.
