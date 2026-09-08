/**
 * Company narrative, industries, materials and processes.
 *
 * SOURCE: index.html and about_CNC-machine-shop.html. Paragraphs are verbatim.
 *
 * FLAGGED FOR OWNERS: the home page says "over 40 years experience in the
 * machining trade". The company has operated since 1973, which is over 50
 * years. The wording is carried over unchanged pending the owners' decision.
 */

/** Verbatim from index.html. */
export const homeIntro = [
  'Jones Machine Company, Inc. is a full service machine shop specializing in CNC Milling/Turning, assembly and fabrication. Our major goal is the assurance of quality and service in every facet of operations. With over 40 years experience in the machining trade, we know how important it is to be cost effective, have zero defects, and deliver just-in-time in today’s demanding market place.',
  'Our customers span a variety of industries, including Aerospace, Pharmaceutical, Military, Semiconductor and Medical Instrumentation. Please take a moment to browse some of our capabilities and let us put our experienced team, quality and service to work for you.',
]

/** Verbatim from about_CNC-machine-shop.html. */
export const aboutParagraphs = [
  'Jones Machine Company, Inc., is a family run business that has been operating since 1973. Located in Danvers Massachusetts we are conveniently located near major highways. We have over 11,000 square feet of manufacturing space with capabilities of expanding in the future.',
  'Our quality precision manufacturing services include CNC Milling/Turning, assembly and fabrication. We specialize in stainless steel, aluminum, steel, plastics, brass and copper. We also offer a host of secondary processes which include plating, painting, and welding.',
  'Together with our highly skilled tradesmen, we set as our major goal the assurance of quality, reliability and on-time delivery in every facet of operations.',
]

/** From index.html: "Our customers span a variety of industries, including..." */
export const industries = [
  'Aerospace',
  'Pharmaceutical',
  'Military',
  'Semiconductor',
  'Medical Instrumentation',
]

/** From about_CNC-machine-shop.html: "We specialize in..." */
export const materials = [
  'Stainless steel',
  'Aluminum',
  'Steel',
  'Plastics',
  'Brass',
  'Copper',
]

/** From about_CNC-machine-shop.html: "a host of secondary processes". */
export const secondaryProcesses = ['Plating', 'Painting', 'Welding']

/** Facts stated on the About page, surfaced as an at-a-glance list. */
export const companyFacts = [
  { label: 'Established', value: '1973' },
  { label: 'Ownership', value: 'Family run business' },
  { label: 'Location', value: 'Danvers, Massachusetts' },
  { label: 'Manufacturing space', value: 'Over 11,000 square feet' },
]

export const facilityImage = {
  src: '/images/facility/building-exterior.jpg',
  /* Original alt was simply "Jones Machine". The building sign reads JONES
     MACHINE CO. INC.; the source never ties this photograph to a street
     address, so none is asserted here. */
  alt: 'The Jones Machine Company building',
}
