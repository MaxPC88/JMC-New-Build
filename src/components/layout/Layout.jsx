import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import SkipLink from './SkipLink.jsx'
import styles from './Layout.module.css'

/**
 * The site shell, applied to every route.
 *
 * Used as a react-router layout route, so pages render into <Outlet /> and the
 * header and footer never remount on navigation.
 */
export default function Layout() {
  return (
    <div className={styles.layout}>
      <SkipLink />
      <ScrollToTop />
      <Header />

      {/* tabIndex -1 so the skip link can move focus here, not just scroll. */}
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
