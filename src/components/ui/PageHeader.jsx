import Breadcrumbs from './Breadcrumbs.jsx'
import Container from './Container.jsx'
import styles from './PageHeader.module.css'

/**
 * The standard heading block at the top of an interior page.
 *
 * Intentionally modest: a breadcrumb trail, a rule, an H1, and an optional
 * short intro. This is not a hero — interior pages on an industrial site
 * should get the visitor to the information quickly rather than to a
 * full-screen banner.
 *
 * Exactly one PageHeader (and therefore one H1) per page.
 *
 * @param {{label: string, to?: string}[]} breadcrumbs  Optional trail. Omit on
 *   top-level pages; supply on nested ones such as the capability pages.
 */
export default function PageHeader({ title, intro, breadcrumbs, children }) {
  return (
    <header className={styles.pageHeader}>
      <Container>
        {breadcrumbs?.length ? (
          <Breadcrumbs items={breadcrumbs} className={styles.breadcrumbs} />
        ) : null}
        <h1 className={styles.title}>{title}</h1>
        {intro ? <p className={styles.intro}>{intro}</p> : null}
        {children}
      </Container>
    </header>
  )
}
