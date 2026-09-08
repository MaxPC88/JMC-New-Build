/**
 * Company facts.
 *
 * SOURCE OF TRUTH: every value here was taken directly from the existing
 * Jones Machine Co. website (jonesmachineco.com). Nothing in this file is
 * invented or estimated.
 *
 * Do not add company claims, certifications, capabilities or statistics here
 * unless they appear on the existing site or the owners supply them.
 */

export const company = {
  legalName: 'Jones Machine Company, Inc.',
  name: 'Jones Machine Company',
  shortName: 'Jones Machine Co.',

  /* From the banner graphic: "(SINCE 1973)" */
  foundedYear: 1973,

  /* From the banner graphic: "Proudly made in the USA!" */
  madeInUsa: 'Proudly Made in the USA',

  address: {
    street: '4 Canal Street',
    city: 'Danvers',
    state: 'MA',
    postalCode: '01923',
    country: 'USA',
  },

  phone: {
    display: '978-774-1140',
    href: 'tel:+19787741140',
  },

  /* Still in active use for RFQs in this industry — do not drop. */
  fax: {
    display: '978-774-1465',
  },

  email: {
    display: 'contactus@jonesmac.com',
    href: 'mailto:contactus@jonesmac.com',
  },

  website: {
    display: 'www.jonesmachineco.com',
    href: 'https://www.jonesmachineco.com',
  },

  /* The four-part strip that appears in the footer of every existing page. */
  valueProps: [
    'Quality',
    'Experience',
    'On Time Deliveries',
    'Competitive Pricing',
  ],
}

/** "4 Canal Street, Danvers, MA 01923" */
export const formattedAddress = [
  company.address.street,
  `${company.address.city}, ${company.address.state} ${company.address.postalCode}`,
].join(', ')
