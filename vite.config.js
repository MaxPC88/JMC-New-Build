import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * GitHub Pages serves this repository as a PROJECT site, at
 *   https://<user>.github.io/JMC-New-Build/
 * not at the domain root. Production builds must therefore emit asset URLs
 * prefixed with the repository name, or every /assets/... request resolves to
 * the domain root, 404s, and the page renders blank.
 *
 * The dev server keeps base '/' so `npm run dev` is unchanged.
 * Set VITE_BASE to override (e.g. '/' when deploying to a custom domain).
 */
const REPO_BASE = '/JMC-New-Build/'

/**
 * Application routes, mirroring src/routes.jsx.
 *
 * Only used to emit static HTML shells at build time (below). A route missing
 * from this list still works — it just falls back to 404.html — so this
 * drifting out of sync degrades gracefully rather than breaking anything.
 */
const ROUTES = [
  'about',
  'capabilities',
  'capabilities/milling',
  'capabilities/turning',
  'capabilities/packaging',
  'equipment',
  'quality',
  'sample-parts',
  'custom-products',
  'news',
  'careers',
  'contact',
]

/**
 * GitHub Pages serves static files only — it has no rewrite rules — so a deep
 * link such as /JMC-New-Build/about has no file to match.
 *
 * Two things are emitted here:
 *
 * 1. A copy of index.html at each route's path (dist/about/index.html, …).
 *    Pages then answers those URLs with HTTP 200 and the app routes onward.
 *    Without this every page except the home page returns a 404 status, which
 *    renders fine for a visitor but tells search engines the page is missing.
 *
 * 2. 404.html, the catch-all for anything not in the list above — deep links
 *    added later, or mistyped URLs, which the app renders as its NotFound page.
 */
function staticRouteShells() {
  return {
    name: 'static-route-shells',
    apply: 'build',
    closeBundle() {
      const dist = path.resolve('dist')
      const index = path.join(dist, 'index.html')
      if (!fs.existsSync(index)) return

      const html = fs.readFileSync(index)

      for (const route of ROUTES) {
        const dir = path.join(dist, ...route.split('/'))
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), html)
      }

      fs.writeFileSync(path.join(dist, '404.html'), html)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  // Build and `vite preview` use the Pages sub-path so preview mirrors the
  // real deployment. Only the dev server stays at '/'.
  base:
    command === 'build' || isPreview ? (process.env.VITE_BASE ?? REPO_BASE) : '/',
  plugins: [react(), staticRouteShells()],
}))
