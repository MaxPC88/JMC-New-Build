import styles from './SkipLink.module.css'

/**
 * Lets keyboard and screen reader users jump past the header straight to page
 * content. Visually hidden until focused.
 */
export default function SkipLink() {
  return (
    <a href="#main-content" className={styles.skipLink}>
      Skip to main content
    </a>
  )
}
