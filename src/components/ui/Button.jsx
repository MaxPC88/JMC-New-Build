import { Link } from 'react-router-dom'
import styles from './Button.module.css'

/**
 * The site's single button/CTA component.
 *
 * Renders the correct element for the job so semantics stay honest:
 *   - `to`   -> react-router <Link>  (internal navigation)
 *   - `href` -> <a>                  (external links, tel:, mailto:)
 *   - neither -> <button>            (real actions)
 *
 * @param {'primary'|'secondary'|'onDark'|'text'} variant
 *   `text` is an inline, underlined action for tertiary links such as
 *   "View all equipment" — still 44px tall for touch, but not a filled box.
 * @param {'default'|'large'} size
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  className = '',
  children,
  ...rest
}) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classNames} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classNames}
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : null)}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classNames} {...rest}>
      {children}
    </button>
  )
}
