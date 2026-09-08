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
 * GitHub Pages has no server-side rewrite rules, so a deep link such as
 * /JMC-New-Build/about would return the Pages 404 page instead of the app.
 * Serving a copy of index.html as 404.html lets Pages hand those URLs to the
 * SPA, which then routes them client-side.
 */
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    closeBundle() {
      const dist = path.resolve('dist')
      const index = path.join(dist, 'index.html')
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, path.join(dist, '404.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  // Build and `vite preview` use the Pages sub-path so preview mirrors the
  // real deployment. Only the dev server stays at '/'.
  base:
    command === 'build' || isPreview ? (process.env.VITE_BASE ?? REPO_BASE) : '/',
  plugins: [react(), spaFallback()],
}))
