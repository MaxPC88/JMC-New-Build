import Container from './Container.jsx'
import styles from './Section.module.css'

/**
 * A full-width page band with consistent vertical rhythm.
 *
 * Alternating `default` and `alt` sections is how the site separates content
 * — background bands and 1px rules rather than shadows or cards everywhere.
 *
 * @param {'default'|'alt'|'dark'} variant  Background treatment.
 * @param {'default'|'large'|'none'} spacing  Vertical padding.
 * @param {boolean} bordered  Adds a top hairline rule.
 * @param {'default'|'narrow'|false} container  Set false to manage your own.
 */
export default function Section({
  as: Tag = 'section',
  variant = 'default',
  spacing = 'default',
  bordered = false,
  container = 'default',
  className = '',
  children,
  ...rest
}) {
  const classNames = [
    styles.section,
    styles[variant],
    styles[`spacing-${spacing}`],
    bordered && styles.bordered,
    variant === 'dark' && 'u-on-dark',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classNames} {...rest}>
      {container ? <Container size={container}>{children}</Container> : children}
    </Tag>
  )
}
