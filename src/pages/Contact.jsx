import Seo from '../components/seo/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import ButtonGroup from '../components/ui/ButtonGroup.jsx'
import ContactDetails from '../components/ui/ContactDetails.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Prose from '../components/ui/Prose.jsx'
import Section from '../components/ui/Section.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import { company, formattedAddress } from '../data/company.js'
import { quoteCta } from '../data/callsToAction.js'
import styles from './Contact.module.css'

const title = 'Contact Us'

const encodedAddress = encodeURIComponent(
  `${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.postalCode}`,
)

/**
 * Contact page.
 *
 * The existing site links directions through Apple Maps only, which fails for
 * most visitors. All three common map services are offered here, built from
 * the same published address.
 *
 * NOTE: there is deliberately no contact form. The existing site has none and
 * quoting happens by phone, fax and email; adding one requires a backend the
 * owners have to agree to.
 */
export default function Contact() {
  return (
    <>
      <Seo
        title={title}
        description="Contact Jones Machine Company, Inc. at 4 Canal Street, Danvers, MA 01923. Phone 978-774-1140, fax 978-774-1465, email contactus@jonesmac.com."
      />
      <PageHeader title={title} />

      <Section>
        <div className={styles.layout}>
          <div>
            <ContactDetails />

            <ButtonGroup className={styles.actions}>
              <Button href={company.phone.href} size="large">
                Call {company.phone.display}
              </Button>
              <Button href={company.email.href} variant="secondary">
                Email us
              </Button>
            </ButtonGroup>
          </div>

          <Prose className={styles.quoteNote}>
            <h2>Requesting a quote</h2>
            <p>{quoteCta.text}</p>
          </Prose>
        </div>
      </Section>

      <Section variant="alt" bordered>
        <SectionHeader
          title="Directions"
          intro={`We are located at ${formattedAddress}, conveniently located near major highways.`}
        />

        <ButtonGroup>
          <Button
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
            variant="secondary"
          >
            Google Maps
          </Button>
          <Button
            href={`https://maps.apple.com/?daddr=${encodedAddress}`}
            variant="secondary"
          >
            Apple Maps
          </Button>
          <Button
            href={`https://www.waze.com/ul?q=${encodedAddress}&navigate=yes`}
            variant="secondary"
          >
            Waze
          </Button>
        </ButtonGroup>
      </Section>
    </>
  )
}
