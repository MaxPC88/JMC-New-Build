import Container from '../ui/Container.jsx'
import { company, formattedAddress } from '../../data/company.js'
import styles from './UtilityBar.module.css'

/**
 * Thin navy bar above the header carrying phone, email and location.
 *
 * Contact details are the primary call to action for a machine shop, so they
 * are present on every page and on every screen size rather than being buried
 * on a contact page. Phone and email are real tel:/mailto: links.
 */
export default function UtilityBar() {
  return (
    <div className={`${styles.utilityBar} u-on-dark`}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.location}>{formattedAddress}</p>
          <ul className={styles.contact}>
            <li>
              <a className={styles.link} href={company.phone.href}>
                <span className={styles.label}>Phone</span>
                {company.phone.display}
              </a>
            </li>
            <li>
              <a className={styles.link} href={company.email.href}>
                <span className={styles.label}>Email</span>
                {company.email.display}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
