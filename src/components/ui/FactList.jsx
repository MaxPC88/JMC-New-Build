import styles from './FactList.module.css'

/**
 * A label/value description list, for company facts and quality highlights.
 *
 * Uses a real <dl> so the label-to-value relationship is conveyed to assistive
 * technology rather than only implied by layout.
 *
 * @param {{label: string, value: string}[]} items
 * @param {'stacked'|'inline'} layout  `inline` puts labels in a left column
 *   on wide screens; `stacked` keeps label above value.
 */
export default function FactList({
  items = [],
  layout = 'inline',
  className = '',
}) {
  if (items.length === 0) return null

  return (
    <dl
      className={[styles.list, styles[layout], className]
        .filter(Boolean)
        .join(' ')}
    >
      {items.map((item) => (
        <div key={item.label} className={styles.row}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={styles.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
