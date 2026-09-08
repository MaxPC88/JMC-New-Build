import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Logo from './Logo.jsx'
import MainNav from './MainNav.jsx'
import MobileNav from './MobileNav.jsx'
import UtilityBar from './UtilityBar.jsx'
import styles from './Header.module.css'

/**
 * Site header: navy contact bar, then a white bar carrying the wordmark,
 * primary navigation and the quote call to action.
 *
 * The white nav bar keeps navigation text at maximum contrast, which matters
 * more here than a fully colored banner.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <UtilityBar />

      <div className={styles.bar}>
        <Container>
          <div className={styles.inner}>
            <Logo />

            <div className={styles.navGroup}>
              <MainNav />
              <Button to="/contact" className={styles.cta}>
                Request a Quote
              </Button>
              <MobileNav />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
