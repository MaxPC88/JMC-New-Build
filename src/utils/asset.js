/**
 * Resolve a public-directory asset path against the deployment base URL.
 *
 * Vite rewrites asset URLs it can see at build time (imports, and references
 * inside index.html), but NOT plain strings held in data modules. Our image
 * paths live in src/data as strings like '/images/milling/kiwa-kh45.jpg', so
 * on GitHub Pages — where the site is served from /JMC-New-Build/ rather than
 * the domain root — they would resolve to the wrong place and 404.
 *
 * import.meta.env.BASE_URL is '/' during development and '/JMC-New-Build/' in
 * a production build, so this works in both without the data files needing to
 * know anything about deployment.
 *
 * @param {string} filePath Root-relative path, e.g. '/images/foo.jpg'
 * @returns {string} Path prefixed with the deployment base
 */
export function asset(filePath) {
  if (!filePath) return filePath
  // BASE_URL always carries a trailing slash, so drop the leading one here.
  return `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`
}
