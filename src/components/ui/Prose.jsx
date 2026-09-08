import styles from './Prose.module.css'

/**
 * A typographic container for running page copy.
 *
 * Wrap any block of headings, paragraphs and lists in this and the vertical
 * rhythm, list styling and reading measure are handled consistently. It is the
 * one place heading spacing is defined, so pages never set their own margins.
 *
 * @param {boolean} measure  Constrain to a comfortable line length (~68
 *   characters). Leave on for body copy; turn off when the content is a wide
 *   table or an image grid.
 */
export default function Prose({
  as: Tag = 'div',
  measure = true,
  className = '',
  children,
  ...rest
}) {
  const classNames = [styles.prose, measure && styles.measure, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classNames} {...rest}>
      {children}
    </Tag>
  )
}
