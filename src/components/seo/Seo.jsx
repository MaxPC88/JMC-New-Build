import { useLocation } from 'react-router-dom'
import { defaultDescription, siteUrl, titleSuffix } from '../../data/seo.js'

/**
 * Per-page document metadata.
 *
 * No library required: React 19 hoists <title>, <meta> and <link> rendered
 * anywhere in the tree into <head>, so this component can simply return them.
 *
 * Usage — one <Seo> per page, rendered at the top of the page component:
 *   <Seo title="About Us" description="..." />
 *
 * @param {string} title        Page title, without the company suffix.
 * @param {string} description  Meta description. Falls back to the site default.
 * @param {boolean} noSuffix    Set on the home page, whose title is complete.
 */
export default function Seo({ title, description, noSuffix = false }) {
  const { pathname } = useLocation()

  const documentTitle =
    !title || noSuffix ? title || titleSuffix : `${title} | ${titleSuffix}`

  const metaDescription = description || defaultDescription
  const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`

  return (
    <>
      <title>{documentTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={titleSuffix} />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
    </>
  )
}
