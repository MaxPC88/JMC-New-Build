/**
 * Services, capabilities and packaging.
 *
 * SOURCE: services.html and packing_capabilities.html. Verbatim.
 */

/** Verbatim from services.html. */
export const servicesIntro =
  'Jones Machine provides CNC Milling, CNC Turning, Fabricating and Assembly inhouse.'

export const inHouseServices = [
  'CNC Milling',
  'CNC Turning',
  'Fabricating',
  'Assembly',
]

/** Verbatim lead-in from services.html. */
export const turnkeyIntro =
  'We also offer a variety of other services provided for by our trusted vendors for a total Turnkey option, including'

export const turnkeyServices = [
  'Plating/Painting',
  'Sheet Metal',
  'Welding',
  'Centerless grinding',
  'Assembly',
]

/** Named partners recommended on services.html. */
export const recommendedVendors = [
  {
    name: 'Circle Finishing',
    /* Source links http://www.circlefinishing.com/, which now redirects to
       https://circlefinishing.com/. Linking the destination directly. */
    href: 'https://circlefinishing.com/',
    description:
      'Specializes in high-quality anodize, chromate and passivate finishes.',
  },
  {
    name: 'Metallic Fusion',
    href: 'http://metallicfusion.com/',
    description: 'Provides high-quality welding services.',
  },
]

/**
 * Capability areas linked from the Capabilities hub. Descriptions are drawn
 * from each destination page's own intro text.
 */
export const capabilityAreas = [
  {
    title: 'Precision CNC Milling',
    to: '/capabilities/milling',
    description:
      'Prototype and large production runs on high speed spindles and robotics, with fast XYZ rapids.',
  },
  {
    title: 'Precision CNC Turning',
    to: '/capabilities/turning',
    description:
      'LNS quick load bar systems and high pressure coolant pumps let us produce parts quickly and cost effectively.',
  },
  {
    title: 'Packaging & Bagging',
    to: '/capabilities/packaging',
    description:
      'The PS 125 “One Step” table top bagger prints labels directly onto poly bags, tailored to customer needs.',
  },
  {
    title: 'Custom Products',
    to: '/custom-products',
    description:
      'Custom products made for a variety of industries, proudly made in the USA.',
  },
]

/** Verbatim from packing_capabilities.html. */
export const packaging = {
  title: 'PS 125 “One Step” Table Top Bagger',
  description:
    'The PS 125 “ONE STEP” Table Top Bagging machine is a compact bagging and sealing system that allows us to custom print labels directly onto poly bags. The unit is designed to bring simplicity, versatility, quality, and value to hand-load packaging applications. We can tailor this for our customer needs.',
  image: '/images/packaging/ps125-table-top-bagger.jpg',
  alt: 'PS 125 One Step table top bagging and sealing machine',
}
