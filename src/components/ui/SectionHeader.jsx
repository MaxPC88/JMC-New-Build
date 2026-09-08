import styles from './SectionHeader.module.css'

/**
 * The heading block that opens a page section.
 *
 * Gives every section on the site the same hierarchy — optional eyebrow label,
 * heading, optional short intro — so pages stay visually consistent without
 * each one inventing its own spacing.
 *
 * @param {string} eyebrow  Small uppercase label above the heading. Rendered
 *   as plain text, not a heading, so it never breaks the document outline.
 * @param {'h2'|'h3'} as  Heading level. Keep the outline correct: sections
 *   inside a page use h2.
 */
export default function SectionHeader({
  eyebrow,
  title,
  intro,
  as: Heading = 'h2',
  id,
  className = '',
}) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(' ')}>
      {eyebrow ? <p className={`${styles.eyebrow} u-label`}>{eyebrow}</p> : null}
      <Heading id={id} className={styles.title}>
        {title}
      </Heading>
      {intro ? <p className={styles.intro}>{intro}</p> : null}
    </div>
  )
}
