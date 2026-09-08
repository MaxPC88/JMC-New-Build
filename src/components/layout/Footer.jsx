import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import { company, formattedAddress } from '../../data/company.js'
import { footerNav } from '../../data/navigation.js'
import styles from './Footer.module.css'

/**
 * Site footer.
 *
 * Carries the four-part value strip that appears on every page of the
 * existing site, the full contact block, and the secondary routes kept out of
 * the primary navigation (News, Careers, Custom Products).
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${styles.footer} u-on-dark`}>
      {/* The existing site's tagline strip, preserved verbatim. */}
      <div className={styles.valueStrip}>
        <Container>
          <ul className={styles.valueList}>
            {company.valueProps.map((value) => (
              <li key={value} className={styles.valueItem}>
                {value}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Container>
        <div className={styles.main}>
          <div className={styles.contactBlock}>
            <p className={styles.companyName}>{company.legalName}</p>
            <address className={styles.address}>
              {formattedAddress}
              <br />
              <a href={company.phone.href}>
                Phone: {company.phone.display}
              </a>
              <br />
              <span className={styles.fax}>Fax: {company.fax.display}</span>
              <br />
              <a href={company.email.href}>{company.email.display}</a>
            </address>
          </div>

          {footerNav.map((group) => (
            <nav
              key={group.heading}
              className={styles.linkGroup}
              aria-label={group.heading}
            >
              <h2 className={styles.groupHeading}>{group.heading}</h2>
              <ul className={styles.linkList}>
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          {/* legalName already ends in a period ("...Company, Inc."). */}
          <p className={styles.copyright}>
            &copy; {currentYear} {company.legalName} All rights reserved.
          </p>
          <p className={styles.madeInUsa}>{company.madeInUsa}</p>
        </div>
      </Container>
    </footer>
  )
}
