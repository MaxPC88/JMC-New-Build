import Seo from '../components/seo/Seo.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import { awards, newsIntro } from '../data/products.js'
import styles from './News.module.css'
import { asset } from '../utils/asset.js'

const title = 'News & Awards'

/**
 * News and awards.
 *
 * The NASA Group Achievement Award is the strongest trust signal on the
 * existing site and was buried on a page reachable only by image button. It
 * leads here and is also surfaced from the home page.
 */
export default function News() {
  return (
    <>
      <Seo
        title={title}
        description="Jones Machine Company received the NASA Group Achievement Award for the Airborne Antarctic Ozone Equipment project, plus supplier of the year awards."
      />
      <PageHeader title={title} intro={newsIntro} />

      <Section>
        <ul className={styles.awards}>
          {awards.map((award) => (
            <li key={award.id} className={styles.award}>
              {award.image ? (
                <img
                  className={styles.awardImage}
                  src={asset(award.image)}
                  alt={award.alt}
                  width="150"
                  height="121"
                  loading="lazy"
                />
              ) : null}
              <div>
                <h2 className={styles.awardTitle}>{award.title}</h2>
                <p>{award.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner />
    </>
  )
}
