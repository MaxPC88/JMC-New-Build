import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.css'

/**
 * Breadcrumb trail for interior pages.
 *
 * The existing site gives no indication of where you are within it. This
 * matters most on the nested capability pages, where a visitor arriving from
 * search needs to see that "Precision CNC Milling" sits under "Capabilities".
 *
 * The current page is rendered as plain text with aria-current, not a link.
 *
 * @param {{label: string, to?: string}[]} items  Ancestors first. The last
 *   entry is treated as the current page and should omit `to`.
 */
export default function Breadcrumbs({ items = [], className = '' }) {
  if (items.length === 0) return null

  return (
    <nav
      className={[styles.breadcrumbs, className].filter(Boolean).join(' ')}
      aria-label="Breadcrumb"
    >
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1

          return (
            <li key={item.to ?? item.label} className={styles.item}>
              {isCurrent || !item.to ? (
                <span aria-current={isCurrent ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
              {isCurrent ? null : (
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
