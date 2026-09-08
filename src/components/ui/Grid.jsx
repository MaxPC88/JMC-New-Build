import styles from './Grid.module.css'

/**
 * A responsive equal-width grid for cards and figures.
 *
 * Columns are the maximum at the widest breakpoint; the grid steps down
 * automatically on smaller screens rather than requiring per-use media
 * queries.
 *
 * @param {2|3|4} columns
 */
export default function Grid({
  columns = 3,
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  const classNames = [styles.grid, styles[`cols-${columns}`], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classNames} {...rest}>
      {children}
    </Tag>
  )
}
