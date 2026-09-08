import Button from './Button.jsx'
import ButtonGroup from './ButtonGroup.jsx'
import Section from './Section.jsx'
import { company } from '../../data/company.js'
import { quoteCta } from '../../data/callsToAction.js'
import styles from './CtaBanner.module.css'

/**
 * The quote call to action, designed to repeat at the foot of content pages.
 *
 * Quoting is the company's primary conversion, so the phone number is a real
 * tel: link and the fax number — still used for RFQs in this trade — is kept
 * alongside it.
 *
 * The default body text is quoted verbatim from the existing site; pass
 * `text` only to use another of the site's own calls to action.
 */
export default function CtaBanner({
  title = 'Request a Quote',
  text = quoteCta.text,
}) {
  return (
    <Section variant="dark" aria-labelledby="cta-heading">
      <div className={styles.inner}>
        <div>
          <h2 id="cta-heading" className={styles.title}>
            {title}
          </h2>
          <p className={styles.text}>{text}</p>
        </div>

        <div className={styles.actions}>
          <ButtonGroup>
            <Button href={company.phone.href} variant="onDark" size="large">
              Call {company.phone.display}
            </Button>
            <Button href={company.email.href} variant="text">
              {company.email.display}
            </Button>
          </ButtonGroup>
          <p className={styles.fax}>Fax: {company.fax.display}</p>
        </div>
      </div>
    </Section>
  )
}
