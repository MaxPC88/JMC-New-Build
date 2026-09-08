import { Link } from 'react-router-dom'
import { company } from '../../data/company.js'
import styles from './Logo.module.css'

/**
 * The JMC wordmark lockup.
 *
 * Built from live text rather than the original 976px banner.gif so it stays
 * crisp at any size, reflows on small screens, and remains readable to search
 * engines and screen readers. It keeps every recognizable element of the
 * existing brand: the JMC monogram, the full company name, the founding year,
 * and the navy blue from the shop signage.
 *
 * NOTE: this is a faithful but plain rendering. A refined SVG wordmark should
 * be reviewed with the owners before launch.
 */
export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={[styles.logo, className].filter(Boolean).join(' ')}
      aria-label={`${company.legalName} — home`}
    >
      <span className={styles.mark} aria-hidden="true">
        JMC
      </span>
      <span className={styles.lockup}>
        <span className={styles.name}>{company.name}</span>
        <span className={styles.since}>Since {company.foundedYear}</span>
      </span>
    </Link>
  )
}
