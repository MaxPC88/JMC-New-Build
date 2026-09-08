import Button from '../components/ui/Button.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import Seo from '../components/seo/Seo.jsx'
import { company } from '../data/company.js'
import styles from './NotFound.module.css'

/**
 * 404 page. The copy here is interface text, not company content, so it is
 * written in full rather than stubbed.
 */
export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you requested could not be found."
      />
      <PageHeader title="Page Not Found" />
      <Section>
        <div className={styles.body}>
          <p>
            The page you requested does not exist or may have been moved.
            Please use the navigation above, or the contact details below.
          </p>
          <div className={styles.actions}>
            <Button to="/">Return to Home</Button>
            <Button href={company.phone.href} variant="secondary">
              Call {company.phone.display}
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
