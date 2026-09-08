import Seo from '../components/seo/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import ButtonGroup from '../components/ui/ButtonGroup.jsx'
import Card from '../components/ui/Card.jsx'
import Container from '../components/ui/Container.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import FactList from '../components/ui/FactList.jsx'
import Grid from '../components/ui/Grid.jsx'
import Prose from '../components/ui/Prose.jsx'
import Section from '../components/ui/Section.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import { company } from '../data/company.js'
import { facilityImage, homeIntro, industries } from '../data/about.js'
import { capabilityAreas } from '../data/services.js'
import { qualityHighlights } from '../data/quality.js'
import { pageMeta } from '../data/seo.js'
import styles from './Home.module.css'

/**
 * Home page.
 *
 * The H1 is the headline the existing site carries across every page:
 * "Full Service CNC Milling and Turning Machine Shop Providing Quality and
 * Service". Intro copy is verbatim from index.html.
 */
export default function Home() {
  return (
    <>
      <Seo
        title={pageMeta['/'].title}
        noSuffix
        description="Jones Machine Company, Inc. is a full service CNC machine shop in Danvers, Massachusetts, family run since 1973. CNC milling, turning, assembly and fabrication."
      />

      {/* Static intro band — no animation, no background video. */}
      <section className={`${styles.hero} u-on-dark`}>
        <Container>
          <div className={styles.heroInner}>
            <p className={`${styles.eyebrow} u-label`}>
              Serving industry since {company.foundedYear}
            </p>
            <h1 className={styles.heroTitle}>
              Full Service CNC Milling and Turning Machine Shop Providing
              Quality and Service
            </h1>
            <ul className={styles.valueProps}>
              {company.valueProps.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
            <ButtonGroup className={styles.heroActions}>
              <Button to="/contact" variant="onDark" size="large">
                Request a Quote
              </Button>
              <Button href={company.phone.href} variant="text">
                Call {company.phone.display}
              </Button>
            </ButtonGroup>
          </div>
        </Container>
      </section>

      {/* Company introduction, verbatim from index.html. */}
      <Section>
        <div className={styles.introLayout}>
          <img
            className={styles.introImage}
            src={facilityImage.src}
            alt={facilityImage.alt}
            width="686"
            height="250"
          />
          <Prose className={styles.introText}>
            <h2>A full service machine shop</h2>
            {homeIntro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>
              <Button to="/about" variant="text">
                More about Jones Machine Company
              </Button>
            </p>
          </Prose>
        </div>
      </Section>

      {/* Industries served — one sentence on the existing site, given room. */}
      <Section variant="alt" bordered>
        <SectionHeader
          title="Industries we serve"
          intro="Our customers span a variety of industries."
        />
        <ul className={styles.industries}>
          {industries.map((industry) => (
            <li key={industry} className={styles.industry}>
              {industry}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          title="Capabilities"
          intro="CNC milling, CNC turning, fabricating and assembly in house, with a full turnkey option through our trusted vendors."
        />
        <Grid columns={2} as="ul">
          {capabilityAreas.map((area) => (
            <li key={area.to}>
              <Card title={area.title} to={area.to} headingLevel="h3">
                <p>{area.description}</p>
              </Card>
            </li>
          ))}
        </Grid>
        <ButtonGroup className={styles.sectionActions}>
          <Button to="/capabilities" variant="secondary">
            View all services and capabilities
          </Button>
          <Button to="/equipment" variant="secondary">
            View our equipment list
          </Button>
        </ButtonGroup>
      </Section>

      {/* Quality credentials — buried on the existing site, surfaced here. */}
      <Section variant="alt" bordered>
        <SectionHeader
          title="Quality and inspection"
          intro="Quality is our main focus throughout the manufacturing process."
        />
        <FactList items={qualityHighlights} />
        <ButtonGroup className={styles.sectionActions}>
          <Button to="/quality" variant="secondary">
            Quality &amp; compliance details
          </Button>
        </ButtonGroup>
      </Section>

      <CtaBanner />
    </>
  )
}
