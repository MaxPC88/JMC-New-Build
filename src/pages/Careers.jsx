import Seo from '../components/seo/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import ButtonGroup from '../components/ui/ButtonGroup.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Prose from '../components/ui/Prose.jsx'
import Section from '../components/ui/Section.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import { company } from '../data/company.js'
import { benefits, benefitsIntro, careersIntro } from '../data/products.js'
import styles from './Careers.module.css'

const title = 'Careers'

/** Content verbatim from jobs.html. */
export default function Careers() {
  return (
    <>
      <Seo
        title={title}
        description="Always hiring skilled machinists in Danvers, Massachusetts. Benefits include group health insurance, a 401k profit sharing plan, and paid holidays and vacation."
      />
      <PageHeader title="Join our team" intro={careersIntro} />

      <Section>
        <div className={styles.layout}>
          <Prose>
            <h2>How to apply</h2>
            <p>
              Please contact our main office by email at{' '}
              <a href={company.email.href}>{company.email.display}</a> or by
              phone at <a href={company.phone.href}>{company.phone.display}</a>.
            </p>
            <ButtonGroup className={styles.actions}>
              <Button href={company.email.href}>Email us</Button>
              <Button href={company.phone.href} variant="secondary">
                Call {company.phone.display}
              </Button>
            </ButtonGroup>
          </Prose>

          <div className={styles.benefits}>
            <SectionHeader as="h2" title="Benefits" intro={benefitsIntro} />
            <ul className={styles.benefitList}>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
