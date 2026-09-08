import Seo from '../components/seo/Seo.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Prose from '../components/ui/Prose.jsx'
import Section from '../components/ui/Section.jsx'
import { packaging } from '../data/services.js'
import styles from './Packaging.module.css'
import { asset } from '../utils/asset.js'

const title = 'Packaging & Bagging'

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: title },
]

/** Content verbatim from packing_capabilities.html. */
export default function Packaging() {
  return (
    <>
      <Seo
        title={title}
        description="The PS 125 One Step table top bagging and sealing system lets us custom print labels directly onto poly bags for hand-load packaging applications."
      />
      <PageHeader title={packaging.title} breadcrumbs={breadcrumbs} />

      <Section>
        <div className={styles.layout}>
          <figure className={styles.figure}>
            <img
              src={asset(packaging.image)}
              alt={packaging.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <Prose>
            <p>{packaging.description}</p>
          </Prose>
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
