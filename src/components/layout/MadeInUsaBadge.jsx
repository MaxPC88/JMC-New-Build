import { company } from '../../data/company.js'
import styles from './MadeInUsaBadge.module.css'

/**
 * "Proudly Made in the USA" badge.
 *
 * The existing site carries this claim, with a US flag, baked into its
 * banner.gif header image. Rebuilding it as markup keeps a recognizable piece
 * of the company's identity that would otherwise have been lost when the
 * banner graphic was replaced, and makes the wording readable to search
 * engines and screen readers.
 *
 * The flag is decorative — the adjacent text carries the meaning — so it is
 * hidden from assistive technology.
 */
export default function MadeInUsaBadge({ className = '' }) {
  return (
    <p className={[styles.badge, className].filter(Boolean).join(' ')}>
      <svg
        className={styles.flag}
        viewBox="0 0 38 20"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="38" height="20" fill="#ffffff" />
        {/* Seven red stripes */}
        {[0, 2, 4, 6, 8, 10, 12].map((row) => (
          <rect
            key={row}
            y={(row * 20) / 13}
            width="38"
            height={20 / 13}
            fill="#b3261e"
          />
        ))}
        {/* Canton */}
        <rect width="16" height={(20 / 13) * 7} fill="#0a3d7c" />
        {[...Array(4)].map((_, row) =>
          [...Array(5)].map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={1.6 + col * 3.2}
              cy={1.4 + row * 2.6}
              r="0.6"
              fill="#ffffff"
            />
          )),
        )}
        <rect
          width="38"
          height="20"
          fill="none"
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="1"
        />
      </svg>
      <span className={styles.text}>{company.madeInUsa}</span>
    </p>
  )
}
