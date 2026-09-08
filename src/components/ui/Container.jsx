import styles from './Container.module.css'

/**
 * Centers content and applies the site's horizontal gutter.
 *
 * @param {'default'|'narrow'} size  `narrow` constrains to a comfortable
 *   reading measure and is intended for prose-heavy pages.
 */
export default function Container({
  as: Tag = 'div',
  size = 'default',
  className = '',
  children,
  ...rest
}) {
  const classNames = [styles.container, styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classNames} {...rest}>
      {children}
    </Tag>
  )
}
