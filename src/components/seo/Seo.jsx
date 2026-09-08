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
 * @param {string} image        Share image path, root-relative. Defaults to the
 *   photograph of the shop, so a shared link previews the real building.
 */
export default function Seo({
  title,
  description,
  noSuffix = false,
  image = '/images/facility/building-exterior.jpg',
}) {
  const { pathname } = useLocation()

  const documentTitle =
    !title || noSuffix ? title || titleSuffix : `${title} | ${titleSuffix}`

  const metaDescription = description || defaultDescription
  const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`
  const imageUrl = `${siteUrl}${image}`

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
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  )
}
