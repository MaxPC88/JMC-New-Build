import Seo from '../components/seo/Seo.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import FactList from '../components/ui/FactList.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Prose from '../components/ui/Prose.jsx'
import Section from '../components/ui/Section.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import {
  aboutParagraphs,
  companyFacts,
  facilityImage,
  industries,
  materials,
  secondaryProcesses,
} from '../data/about.js'
import styles from './About.module.css'

const title = 'About Us'

/**
 * About page. Narrative copy is verbatim from about_CNC-machine-shop.html;
 * the materials and secondary process lists are pulled out of the running
 * prose so they can be scanned, with the original sentences kept above them.
 */
export default function About() {
  return (
    <>
      <Seo
        title={title}
        description="Jones Machine Company, Inc. is a family run machine shop operating since 1973 in Danvers, Massachusetts, with over 11,000 square feet of manufacturing space."
      />
      <PageHeader title={title} />

      <Section>
        <div className={styles.layout}>
          <Prose className={styles.narrative}>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Prose>

          <figure className={styles.figure}>
            <img
              src={facilityImage.src}
              alt={facilityImage.alt}
              width="686"
              height="250"
              loading="lazy"
            />
          </figure>
        </div>

        <div className={styles.facts}>
          <FactList items={companyFacts} />
        </div>
      </Section>

      <Section variant="alt" bordered>
        <SectionHeader
          title="Materials and processes"
          intro="Our quality precision manufacturing services include CNC Milling/Turning, assembly and fabrication."
        />

        <div className={styles.columns}>
          <div>
            <h3 className={styles.listHeading}>Materials we specialize in</h3>
            <ul className={styles.tagList}>
              {materials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.listHeading}>Secondary processes</h3>
            <ul className={styles.tagList}>
              {secondaryProcesses.map((process) => (
                <li key={process}>{process}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.listHeading}>Industries served</h3>
            <ul className={styles.tagList}>
              {industries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
