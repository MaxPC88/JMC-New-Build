import styles from './ButtonGroup.module.css'

/**
 * Lays out a row of related actions with consistent gaps, wrapping to a
 * stacked column on narrow screens so buttons never crowd or overflow.
 *
 * @param {'start'|'center'} align
 * @param {boolean} stackOnMobile  Full-width stacked buttons below 640px,
 *   which is easier to tap than two half-width buttons side by side.
 */
export default function ButtonGroup({
  align = 'start',
  stackOnMobile = true,
  className = '',
  children,
}) {
  const classNames = [
    styles.group,
    styles[align],
    stackOnMobile && styles.stack,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classNames}>{children}</div>
}
