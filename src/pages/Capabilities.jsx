import Seo from '../components/seo/Seo.jsx'
import Card from '../components/ui/Card.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import Grid from '../components/ui/Grid.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Prose from '../components/ui/Prose.jsx'
import Section from '../components/ui/Section.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import {
  capabilityAreas,
  inHouseServices,
  recommendedVendors,
  servicesIntro,
  turnkeyIntro,
  turnkeyServices,
} from '../data/services.js'
import styles from './Capabilities.module.css'

const title = 'Services & Capabilities'

/**
 * Capabilities hub. Replaces the old services.html and acts as the parent for
 * the milling, turning and packaging pages, which the existing site only
 * reached through unlabeled image buttons.
 */
export default function Capabilities() {
  return (
    <>
      <Seo
        title={title}
        description="CNC milling, CNC turning, fabricating and assembly in house, plus plating, sheet metal, welding and centerless grinding through trusted vendors for a total turnkey option."
      />
      <PageHeader title="CNC Machine Shop Services and Capabilities" intro={servicesIntro} />

      <Section>
        <SectionHeader title="In house" />
        <ul className={styles.serviceList}>
          {inHouseServices.map((service) => (
            <li key={service} className={styles.service}>
              {service}
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="alt" bordered>
        <SectionHeader title="Explore our capabilities" />
        <Grid columns={2} as="ul">
          {capabilityAreas.map((area) => (
            <li key={area.to}>
              <Card title={area.title} to={area.to} headingLevel="h3">
                <p>{area.description}</p>
              </Card>
            </li>
          ))}
        </Grid>
      </Section>

      <Section>
        <SectionHeader title="Turnkey services" intro={turnkeyIntro} />

        <div className={styles.turnkeyLayout}>
          <ul className={styles.serviceList}>
            {turnkeyServices.map((service) => (
              <li key={service} className={styles.service}>
                {service}
              </li>
            ))}
          </ul>

          <Prose className={styles.vendors}>
            <h3>Recommended vendors</h3>
            <ul>
              {recommendedVendors.map((vendor) => (
                <li key={vendor.href}>
                  <a
                    href={vendor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {vendor.name}
                  </a>{' '}
                  — {vendor.description}
                </li>
              ))}
            </ul>
          </Prose>
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
