import { Link } from 'react-router-dom'
import styles from './Card.module.css'

/**
 * A bordered content block, used for capability and link grids.
 *
 * When `to` is supplied the heading becomes the link and the whole card is
 * made clickable via a stretched pseudo-element, so the accessible name stays
 * on the heading text rather than on a wrapper with no meaningful label.
 *
 * @param {string} title  Card heading text.
 * @param {'h2'|'h3'|'h4'} headingLevel  Keeps document outline correct.
 */
export default function Card({
  title,
  to,
  headingLevel: Heading = 'h3',
  media,
  className = '',
  children,
  ...rest
}) {
  const classNames = [styles.card, to && styles.linked, className]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classNames} {...rest}>
      {media ? <div className={styles.media}>{media}</div> : null}
      <div className={styles.body}>
        {title ? (
          <Heading className={styles.title}>
            {to ? (
              <Link to={to} className={styles.titleLink}>
                {title}
              </Link>
            ) : (
              title
            )}
          </Heading>
        ) : null}
        {children ? <div className={styles.content}>{children}</div> : null}
      </div>
    </article>
  )
}
