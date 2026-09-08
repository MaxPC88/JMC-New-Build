/**
 * Custom products, sample parts, news and careers.
 *
 * SOURCE: products.html, sample_parts.html, news.html, jobs.html. Verbatim.
 */

/* ---------------------------------------------------------------------------
   Custom products — products.html
   --------------------------------------------------------------------------- */

export const productsIntro =
  'Jones Machine makes custom products for a variety of industries, proudly made in the USA.'

export const customProducts = [
  {
    id: 'cribbage-boards',
    name: 'Cribbage Boards',
    image: '/images/products/cribbage-board.jpg',
    alt: 'Anodized aluminum cribbage board made by Jones Machine Company',
    description:
      'The board and player pins are made from high grade aircraft aluminum. The standard color of black is applied using a plating process called anodized. Other colors are available; red, blue, gold, green, clear. For a more cosmetic look, boards can be customized with your company name and/or logo. Makes a great gift.',
  },
  {
    id: 'tool-holder-rack',
    name: 'Tool Holder Rack',
    image: '/images/products/tool-holder-rack.jpg',
    alt: 'Bench mounted tool holder rack for 30 taper tooling',
    description:
      'Pictured here the bench is used for a 30 tapered tool. Easily mounted to a bench using 8 wood screws. Great space saver and allows for quick view of holders and fast change outs.',
  },
  {
    id: 'bench-top-tool-changer',
    name: 'Bench Top Tool Changer',
    image: '/images/products/bench-top-tool-changer.jpg',
    alt: 'Bench top tool changer holding 30 taper tool holders',
    description:
      'Bench Top Tool Changer Pictured here the bench is used for a 30 tapered tool. Easily mounted to a bench using 8 wood screws. Great space saver and allows for quick view of holders and fast change outs.',
  },
]

/* ---------------------------------------------------------------------------
   Sample parts — sample_parts.html

   The source page shows three photographs with no captions. Alt text is
   written descriptively here; no claims are made about the parts shown.
   --------------------------------------------------------------------------- */

export const samplePartsHeading = 'Sample Milled and Turned Machine Parts'

export const sampleParts = [
  {
    src: '/images/parts/machined-parts-01.jpg',
    alt: 'An assortment of precision milled and turned metal parts',
  },
  {
    src: '/images/parts/machined-parts-02.jpg',
    alt: 'Machined components in a range of sizes and finishes',
  },
  {
    src: '/images/parts/machined-parts-03.jpg',
    alt: 'A wide selection of turned machine parts produced at Jones Machine Company',
    wide: true,
  },
]

/* ---------------------------------------------------------------------------
   News and awards — news.html
   --------------------------------------------------------------------------- */

export const newsIntro =
  'Jones Machine has worked on several special projects for which we are proud to have been accredited.'

export const awards = [
  {
    id: 'nasa-group-achievement',
    title: 'NASA Group Achievement Award',
    image: '/images/news/nasa-award.jpg',
    alt: 'NASA insignia',
    description:
      'The National Aeronautics and Space Administration has awarded Jones Machine the Group Achievement Award for our outstanding accomplishments and contribution to the highly successful Airborne Antarctic Ozone Equipment performed at Punta Arenas, Chile. This project has been a huge success in exploring the effects of ozone depletion, which impacts us today with global warming.',
  },
  {
    id: 'supplier-of-the-year',
    title: 'Supplier of the Year Awards',
    description:
      'Jones Machine has also received several supplier of the year awards from some of our major customers, including a medical company and large contract manufacturer.',
  },
]

/* ---------------------------------------------------------------------------
   Careers — jobs.html
   --------------------------------------------------------------------------- */

export const careersIntro =
  'Jones Machine is always looking to hire skilled machinists and other individuals to join our team.'

export const careersContactNote =
  'Please contact our main office by email or by phone.'

export const benefitsIntro = 'We offer a competitive benefits package which includes:'

export const benefits = [
  'Group Health Insurance including; Medical, Dental, Life, LTD',
  '401k Profit Sharing Plan',
  'Paid holidays and vacation',
]
