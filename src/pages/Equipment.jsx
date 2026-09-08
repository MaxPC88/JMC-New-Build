import Seo from '../components/seo/Seo.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import EquipmentList from '../components/ui/EquipmentList.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import { equipmentCategories, equipmentItemCount } from '../data/equipment.js'
import styles from './Equipment.module.css'

const title = 'Equipment & Facilities'

/**
 * The complete facilities list.
 *
 * This page is long by design — the equipment schedule is a genuine
 * differentiator for buyers evaluating a shop, and every one of the source
 * page's line items is reproduced. In-page jump links make the length
 * navigable instead of shortening the content.
 */
export default function Equipment() {
  return (
    <>
      <Seo
        title={title}
        description="The complete Jones Machine Company equipment list: CNC milling machines, lathes, grinders, inspection equipment and support machinery in Danvers, Massachusetts."
      />
      <PageHeader
        title="CNC Milling and Turning Machine Shop Facilities List"
        intro={`Our full capital equipment schedule — ${equipmentItemCount} listed machines and systems across ${equipmentCategories.length} categories.`}
      />

      <Section>
        <nav className={styles.jumpNav} aria-label="Equipment categories">
          <h2 className={styles.jumpHeading}>Jump to a category</h2>
          <ul className={styles.jumpList}>
            {equipmentCategories.map((category) => (
              <li key={category.id}>
                <a href={`#${category.id}`} className={styles.jumpLink}>
                  {category.name}
                  <span className={styles.jumpCount}>
                    {category.items.length}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.categories}>
          {equipmentCategories.map((category) => (
            <EquipmentList key={category.id} category={category} />
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
