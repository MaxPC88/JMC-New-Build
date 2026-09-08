/**
 * Navigation structure for the rebuilt site.
 *
 * The existing site splits navigation across a 6-link text bar and a separate
 * column of 9 unlabeled image buttons, which left most pages unreachable by
 * text link. This consolidates everything into one flat primary navigation
 * plus a footer, with no hover-only dropdowns.
 */

/** Primary header navigation. Deliberately flat and short. */
export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Equipment', to: '/equipment' },
  { label: 'Quality', to: '/quality' },
  { label: 'Sample Parts', to: '/sample-parts' },
  { label: 'Contact', to: '/contact' },
]

/*
 * The capability sub-pages are surfaced as cards on the /capabilities hub
 * rather than in a dropdown, so navigation never depends on hover. That list
 * lives with its descriptions in `capabilityAreas` in data/services.js.
 */

/** Footer link columns. Carries the secondary routes kept out of the header. */
export const footerNav = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'News & Awards', to: '/news' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Capabilities',
    links: [
      { label: 'Services & Capabilities', to: '/capabilities' },
      { label: 'Precision CNC Milling', to: '/capabilities/milling' },
      { label: 'Precision CNC Turning', to: '/capabilities/turning' },
      { label: 'Packaging & Bagging', to: '/capabilities/packaging' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Equipment & Facilities', to: '/equipment' },
      { label: 'Quality & Compliance', to: '/quality' },
      { label: 'Sample Parts', to: '/sample-parts' },
      { label: 'Custom Products', to: '/custom-products' },
    ],
  },
]

/**
 * Legacy .html URLs from the existing site mapped to their new routes.
 * These preserve inbound links, bookmarks and search rankings, and are
 * registered as redirect routes in src/routes.jsx.
 */
export const legacyRedirects = [
  { from: '/index.html', to: '/' },
  { from: '/about_CNC-machine-shop.html', to: '/about' },
  { from: '/services.html', to: '/capabilities' },
  { from: '/precision_milling.html', to: '/capabilities/milling' },
  { from: '/precision_turning.html', to: '/capabilities/turning' },
  { from: '/packing_capabilities.html', to: '/capabilities/packaging' },
  { from: '/facilities_list.html', to: '/equipment' },
  { from: '/quality_inspection.html', to: '/quality' },
  { from: '/EU.html', to: '/quality#rohs' },
  { from: '/sample_parts.html', to: '/sample-parts' },
  { from: '/products.html', to: '/custom-products' },
  { from: '/news.html', to: '/news' },
  { from: '/jobs.html', to: '/careers' },
  { from: '/contact_us.html', to: '/contact' },
]
