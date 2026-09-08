/**
 * Per-page SEO metadata.
 *
 * The existing site serves one identical <title> and one identical meta
 * description across all 14 pages. Each route gets a distinct title here.
 *
 * PHASE 8: per-page meta descriptions are written once the real page content
 * exists, so they describe what is actually on each page. Until then every
 * route falls back to `defaultDescription`, which is the verbatim meta
 * description from the existing site — not placeholder copy.
 */

import { company } from './company.js'

/** Verbatim from the existing site's <meta name="description">. */
export const defaultDescription =
  'Jones Machine Company, Inc is a New England based, full service machine shop specializing in CNC Milling and Turning'

/** Appended to every page title except the home page. */
export const titleSuffix = company.shortName

/** Used to build canonical URLs. */
/* Defaults to the company's production domain; the GitHub Pages workflow
   overrides it via VITE_SITE_URL so canonical and og:image URLs resolve on
   the deployed preview too. */
export const siteUrl =
  import.meta.env.VITE_SITE_URL ?? 'https://www.jonesmachineco.com'

/**
 * Route path -> page title.
 * Titles only for now; descriptions are added alongside page content.
 */
export const pageMeta = {
  /* Kept under ~60 characters so search results do not truncate it. */
  '/': {
    title: `${company.shortName} | CNC Machine Shop in Danvers, MA`,
    isHome: true,
  },
  '/about': { title: 'About Us' },
  '/capabilities': { title: 'Services & Capabilities' },
  '/capabilities/milling': { title: 'Precision CNC Milling' },
  '/capabilities/turning': { title: 'Precision CNC Turning' },
  '/capabilities/packaging': { title: 'Packaging & Bagging' },
  '/equipment': { title: 'Equipment & Facilities' },
  '/quality': { title: 'Quality & Compliance' },
  '/sample-parts': { title: 'Sample Parts' },
  '/custom-products': { title: 'Custom Products' },
  '/news': { title: 'News & Awards' },
  '/careers': { title: 'Careers' },
  '/contact': { title: 'Contact Us' },
}
