import styles from './MachineProfile.module.css'

/**
 * A photograph paired with a heading and specification text.
 *
 * This is the workhorse of the capability and product pages — the existing
 * site builds the same pattern fifteen times with hand-written layout tables.
 * Rows alternate the image side on wide screens and stack image-above-text
 * below 900px.
 *
 * @param {boolean} reverse  Place the image on the right.
 * @param {'h2'|'h3'} as     Heading level, to keep the outline correct.
 */
export default function MachineProfile({
  name,
  image,
  alt,
  description,
  reverse = false,
  as: Heading = 'h2',
  id,
}) {
  return (
    <article
      className={[styles.profile, reverse && styles.reverse]
        .filter(Boolean)
        .join(' ')}
      id={id}
    >
      <div className={styles.media}>
        <img src={image} alt={alt} loading="lazy" decoding="async" />
      </div>
      <div className={styles.body}>
        <Heading className={styles.title}>{name}</Heading>
        <p>{description}</p>
      </div>
    </article>
  )
}
