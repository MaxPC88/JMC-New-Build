/**
 * Quality inspection and EU / RoHS compliance.
 *
 * SOURCE: quality_inspection.html and EU.html, merged onto one page because
 * both answer the same buyer question. All content from both pages is kept.
 *
 * NOTE: the source reads "Jones Machine confirms to MIL-I-45208". "Confirms"
 * is corrected to "conforms" here — an obvious typo in an ordinary word. The
 * standard designations themselves are untouched.
 */

/** Verbatim from quality_inspection.html. */
export const qualityIntro =
  'Jones Machine is dedicated to making quality its main focus throughout the manufacturing process. With a fulltime Q.C. Manager, we insure that first piece, in process, and final inspections are performed on all customer parts.'

export const inspectionStages = [
  'First piece inspection',
  'In process inspection',
  'Final inspection',
]

export const inspectionImage = {
  src: '/images/quality/inspection-room.jpg',
  alt: 'Climate controlled quality inspection room at Jones Machine Company',
}

/** From quality_inspection.html and the facilities list heading. */
export const qualityHighlights = [
  {
    label: 'Standards',
    value:
      'Conforms to MIL-I-45208 and is presently ISO 9000 Compliant.',
  },
  {
    label: 'Inspection room',
    value:
      'Complete climate controlled inspection room with a full-time Q.A. Manager.',
  },
  {
    label: 'Coverage',
    value:
      'First piece, in process, and final inspections performed on all customer parts.',
  },
]

/* ---------------------------------------------------------------------------
   EU / RoHS — verbatim from EU.html
   --------------------------------------------------------------------------- */

export const rohs = {
  statement:
    'To the best of our knowledge JONES MACHINE COMPANY, INC. is compliant with the European Directive (EU) 2002/95/EC Titled “Restriction of the use of Hazardous Substances in Electronic Equipment” or ROHS.',

  materials: [
    '6061 Aluminum, 7075 Aluminum',
    '303, 304, 316 SS (Stainless Steel)',
    'Most all steels include 1018 CRS',
    'Plastics including Peek, Lexan, PVC’s, Delrins, ABS, Nylons, etc.',
  ],

  plating: {
    summary:
      'Plating processes: most all Anodize and Chromatic plating processes, excluding:',
    exclusions: ['Yellow chromate, type I'],
    specsNote:
      'This includes the following Mil Specs — MIL-C-5541E Type I, MIL-DTL-5541F Type I, MIL-DTL-81706B Type I, ASTM B 449-93 Type I.',
  },

  caveat:
    'Although not all processes JONES MACHINE COMPANY, INC., offers meet the current European Directive, we are consistently investigating suitable ROHS compliant systems to enhance or replace those finishes and materials which may not meet compliance parameters.',
}
