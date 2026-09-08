import Seo from '../components/seo/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import ButtonGroup from '../components/ui/ButtonGroup.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import { sampleParts, samplePartsHeading } from '../data/products.js'
import styles from './SampleParts.module.css'

const title = 'Sample Parts'

/**
 * Sample parts gallery.
 *
 * The source page carries three photographs and no descriptive text, so none
 * is added here — the images are simply presented at a usable size with
 * descriptive alt text.
 */
export default function SampleParts() {
  return (
    <>
      <Seo
        title={title}
        description="Examples of precision milled and turned machine parts produced by Jones Machine Company in Danvers, Massachusetts."
      />
      <PageHeader title={samplePartsHeading} />

      <Section>
        <ul className={styles.gallery}>
          {sampleParts.map((part) => (
            <li
              key={part.src}
              className={part.wide ? styles.wideItem : undefined}
            >
              <img
                className={styles.image}
                src={part.src}
                alt={part.alt}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>

        <ButtonGroup className={styles.actions}>
          <Button to="/capabilities/milling" variant="secondary">
            Precision CNC Milling
          </Button>
          <Button to="/capabilities/turning" variant="secondary">
            Precision CNC Turning
          </Button>
        </ButtonGroup>
      </Section>

      <CtaBanner />
    </>
  )
}
