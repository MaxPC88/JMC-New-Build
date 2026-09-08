/**
 * Featured machines with photographs and descriptions.
 *
 * SOURCE: precision_milling.html and precision_turning.html. Every
 * description is reproduced verbatim; only obvious spelling slips in ordinary
 * words were corrected (noted inline). Model designations, capacities, speeds
 * and travels are untouched.
 */

/** Intro paragraph from precision_milling.html. */
export const millingIntro =
  'Our milling department can also run prototype and large production runs. Equipped with high speed spindles/robotics and fast XYZ rapids.'

export const millingMachines = [
  {
    id: 'fanuc-d28-2025',
    /* SOURCE DISCREPANCY: the page heading reads "D21" but its own body text
       and the facilities list both say D28. Using D28. Flagged for owners. */
    name: '2025 FANUC D28 LiB5 ADV Plus 500 CNC Robo Drill',
    image: '/images/milling/fanuc-d28-2025.jpg',
    alt: 'FANUC D28 LiB5 ADV Plus 500 CNC Robo Drill',
    description:
      'The 2025 FANUC D28 LiB5 ADV Plus 500 CNC Robo Drill features travels of X 27.56", Y 19.68", and Z 15.74" for increased machining capacity. Equipped with a 28 tool changer and 24K RPM spindle, this machine delivers high speed and precision performance for demanding production work. Also includes Renishaw tool and spindle probes for improved setup accuracy and repeatability.',
  },
  {
    id: 'fanuc-d21-2023',
    name: '2023 FANUC D21 LiB5 ADV Plus CNC Robo Drill',
    image: '/images/milling/fanuc-d21-2023.jpg',
    alt: 'FANUC D21 LiB5 ADV Plus CNC Robo Drill with integrated high speed 4th axis',
    description:
      'The 2023 FANUC D21LiB5 ADV Plus CNC Robo Drill comes equipped with travels of X 27.55", Y 15.74", and Z 15.74" along with an integrated FANUC high speed 4th axis. Featuring a 21 tool changer and 10K RPM spindle, this machine provides excellent speed, accuracy, and flexibility for complex machining applications. Also includes Renishaw tool and spindle probe systems for improved precision and setup efficiency.',
  },
  {
    id: 'methods-mv1000l',
    name: '2022 METHODS MV 1000L High Performance Vertical Machining Center',
    image: '/images/milling/methods-mv1000l.jpg',
    alt: 'Methods MV 1000L high performance vertical machining center',
    description:
      'Very fast and precise hole to hole accuracy X+Y rapids 2362 IPM Z = 1181 IPM Max spindle speeds of 12K. With travels of X 39.4", Y 20.5", Z 20.7". Fanuc control comes with look ahead for high speed machining capabilities.',
  },
  {
    id: 'kiwa-kh45',
    /* SOURCE DISCREPANCY: the facilities list dates this machine 2014.
       Heading kept as published on the milling page. Flagged for owners. */
    name: 'KIWA KH-45 Horizontal Machine Center (New 2016)',
    image: '/images/milling/kiwa-kh45.jpg',
    alt: 'KIWA KH-45 horizontal machining center with 6 pallet system',
    description:
      'The Kiwa comes equipped with 12,000 R.P.M. spindle speed and rapids of 2,362 IPM. The working envelope is 30"(X) by 40" (Y) with a tool carasol of 120 tools and 6 pallet capacity. This makes this a very fast and productive machining center. Also comes with tool tip brake protection which allows for "lights out" machining as well as full 4th axis.',
  },
  {
    id: 'fanuc-robot-cell',
    name: '2020 FANUC D21SiB5 ADV Robo Drill / Robot Cell',
    image: '/images/milling/fanuc-robot-cell.jpg',
    alt: 'FANUC D21SiB5 ADV Robo Drill / Robot Cell',
    description:
      'Introducing our latest investment in future machining and technology. The Robo Drill machine has the following capabilities: 24K Direct Drive high torque spindle with a capacity of X & Y travel of 11.8" and a Z travel of 15.74. With a high speed control, this allows us the capability to use Trochoidal machining practices. The Robot Cell gives us the advantage to run lights out, keeping overhead low and quick turnarounds.',
  },
  {
    id: 'robo-t21-pallet',
    name: 'Robo T21 Pallet Machining Center',
    image: '/images/milling/robo-t21-pallet.jpg',
    alt: 'Robo T21 long bed pallet machining center',
    description:
      'Robo T21 (Long Bed) with X21", Y14", Z18" and a spindle speed of 20K RPM. This milling machine is very fast, accurate, and very easy to set up. With 8 stations on each pallet this minimizes tool changing and always keeps the tool in the cut. Spindle speeds maxing out at 20K RPM makes for a great productive machining center.',
  },
  {
    id: 'robo-drill-row',
    name: 'Robo Drills',
    image: '/images/milling/robo-drill-row.jpg',
    alt: 'A row of six Robo Drill milling machines',
    description:
      'With 6 Robo drills in a row 2 or 3 operators can set up and operate all the machines. This keeps our overhead low and pricing competitive.',
  },
  {
    id: 'matsuura-ra1g',
    /* Source spells this "Matsurra". Corrected to the manufacturer's name. */
    name: 'Matsuura RA1G Pallet',
    image: '/images/milling/matsuura-ra1g.jpg',
    alt: 'Matsuura RA1G pallet machining center',
    description:
      'RA1G Travel (X Travel 20", Y Travel 14", Z Travel 18" with 8000 RPM spindle.',
  },
]

/** Intro paragraph from precision_turning.html. */
export const turningIntro =
  'Our turning department can also run prototype and large production runs. Equipped with LNS quick load bar systems/high pressure coolant pumps allows us to produce parts quickly and cost effective.'

export const turningMachines = [
  {
    id: 'nakamura-tw20',
    name: 'Nakamura TW-20',
    image: '/images/turning/nakamura-tw20.jpg',
    alt: 'Nakamura TW-20 twin spindle live tooling turning center',
    description:
      'The TW-20 6th axis Lathe is a twin spindle/turret, live tooling turning center. This machine has live tooling stations on any turret position. High pressure coolant on both spindles helps eliminate the need for peck drilling. It is possible to cut our cycle time by 50% or more with the twin spindles. This makes the machine an excellent example for large production runs.',
  },
  {
    id: 'nakamura-sc300',
    name: 'Nakamura SC-300',
    image: '/images/turning/nakamura-sc300.jpg',
    alt: 'Nakamura SC-300 CNC turning center with LNS quick load bar feeder',
    description:
      'The SC-300 is equipped with an LNS quick load bar feeder system which enables us to load material automatically in under 20 seconds.',
  },
  {
    id: 'nakamura-sc150',
    name: 'Nakamura SC-150',
    image: '/images/turning/nakamura-sc150.jpg',
    alt: 'Nakamura SC-150 turning center with sub spindle and live tooling',
    description:
      'The SC-150 has live tooling on a single turret. This machine is equipped with a sub spindle for machining the back side of the part as well. Also equipped with an LNS quick load bar feeder.',
  },
  {
    id: 'nakamura-slant-iii',
    name: 'Nakamura Slant III',
    image: '/images/turning/nakamura-slant-iii.jpg',
    alt: 'Nakamura Slant III CNC lathe with programmable tail stock',
    description:
      'The Nakamura Slant III is also equipped with a programmable tail stock, which enables us to turn long shafts on centers.',
  },
]
