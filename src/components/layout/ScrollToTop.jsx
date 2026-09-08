import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Restores the expected browser behaviour that client-side routing breaks:
 * a new page should start at the top.
 *
 * If the URL carries a hash (for example /quality#rohs, which the legacy
 * EU.html redirect uses) the matching element is scrolled to instead.
 *
 * Renders nothing.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView()
        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
