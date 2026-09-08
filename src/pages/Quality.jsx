import Seo from '../components/seo/Seo.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import FactList from '../components/ui/FactList.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Prose from '../components/ui/Prose.jsx'
import Section from '../components/ui/Section.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import {
  inspectionImage,
  inspectionStages,
  qualityHighlights,
  qualityIntro,
  rohs,
} from '../data/quality.js'
import styles from './Quality.module.css'

const title = 'Quality & Compliance'

/**
 * Quality inspection merged with EU / RoHS compliance.
 *
 * The existing site splits these across quality_inspection.html and EU.html,
 * both reachable only through image buttons. They answer the same buyer
 * question, so they are combined here. The legacy /EU.html URL redirects to
 * the #rohs anchor on this page, so that section keeps a stable id.
 */
export default function Quality() {
  return (
    <>
      <Seo
        title={title}
        description="A climate controlled inspection room with a full-time Q.A. Manager, conformance to MIL-I-45208, ISO 9000 compliance, and EU RoHS materials."
      />
      <PageHeader
        title="CNC Machine Shop Quality Inspection"
        intro={qualityIntro}
      />

      <Section>
        <div className={styles.layout}>
          <div>
            <FactList items={qualityHighlights} layout="stacked" />

            <h2 className={styles.stagesHeading}>
              Inspections performed on all customer parts
            </h2>
            <ol className={styles.stages}>
              {inspectionStages.map((stage) => (
                <li key={stage}>{stage}</li>
              ))}
            </ol>
          </div>

          <figure className={styles.figure}>
            <img
              src={inspectionImage.src}
              alt={inspectionImage.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </Section>

      {/* id must remain "rohs" — the legacy /EU.html redirect targets it. */}
      <Section variant="alt" bordered id="rohs">
        <SectionHeader title="EU / RoHS Directives" id="rohs-heading" />

        <Prose>
          <p>{rohs.statement}</p>

          <h3>Materials include</h3>
          <ul>
            {rohs.materials.map((material) => (
              <li key={material}>{material}</li>
            ))}
          </ul>

          <h3>Plating processes</h3>
          <p>{rohs.plating.summary}</p>
          <ul>
            {rohs.plating.exclusions.map((exclusion) => (
              <li key={exclusion}>{exclusion}</li>
            ))}
          </ul>
          <p>{rohs.plating.specsNote}</p>

          <p>{rohs.caveat}</p>
        </Prose>
      </Section>

      <CtaBanner />
    </>
  )
}
