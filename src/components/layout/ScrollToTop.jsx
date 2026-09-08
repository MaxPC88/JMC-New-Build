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
    /* Explicitly instant. The stylesheet enables smooth scrolling for in-page
       anchor clicks, but a page change should land at the top immediately
       rather than animating through the previous page's content. */
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
