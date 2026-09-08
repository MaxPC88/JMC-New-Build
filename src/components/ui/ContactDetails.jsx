import { company, formattedAddress } from '../../data/company.js'
import styles from './ContactDetails.module.css'

/**
 * The company's full contact block.
 *
 * Every channel published on the existing contact page is kept — including
 * the fax number, which is still used for RFQs in this trade — and phone and
 * email are actionable links rather than plain text.
 */
export default function ContactDetails({ className = '' }) {
  return (
    <address
      className={[styles.details, className].filter(Boolean).join(' ')}
    >
      <p className={styles.name}>{company.legalName}</p>

      <dl className={styles.list}>
        <div className={styles.row}>
          <dt className={styles.label}>Address</dt>
          <dd className={styles.value}>{formattedAddress}</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.label}>Phone</dt>
          <dd className={styles.value}>
            <a href={company.phone.href}>{company.phone.display}</a>
          </dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.label}>Fax</dt>
          <dd className={styles.value}>{company.fax.display}</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.label}>Email</dt>
          <dd className={styles.value}>
            <a href={company.email.href}>{company.email.display}</a>
          </dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.label}>Website</dt>
          <dd className={styles.value}>{company.website.display}</dd>
        </div>
      </dl>
    </address>
  )
}
