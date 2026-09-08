/**
 * Complete equipment and facilities list.
 *
 * SOURCE: facilities_list.html on jonesmachineco.com. All 57 line items are
 * reproduced here — quantities, years, model designations, capacities and
 * axis travels are exactly as published.
 *
 * PRESENTATION NOTE ON CASING
 * The source page sets this list in full uppercase. It is written here in
 * mixed case, matching how the company writes the same machines in prose on
 * its own precision_milling.html page ("2025 FANUC D28 LiB5 ADV Plus 500 CNC
 * Robo Drill"). Long uppercase runs are hard to read and can be spelled out
 * letter-by-letter by screen readers. No numbers, capacities or model codes
 * were altered.
 *
 * NORMALIZED SPELLINGS — the source contains these obvious typos, corrected
 * here and listed so the change is auditable and reversible:
 *   VERTICLE   -> Vertical
 *   SPINDAL    -> Spindle
 *   REMISHAW   -> Renishaw   (the same page spells it RENISHAW elsewhere)
 *   CAPABILITES-> Capabilities
 *   MICROSOPE  -> Microscope
 *   MITRE      -> Mitre       (kept; valid British spelling)
 *
 * NOT CORRECTED — flagged for the owners, left exactly as published because
 * they may be real designations rather than errors:
 *   "2000 FANUC T141B" vs "2000 FANUC T14IB" — adjacent entries, one letter
 *   apart. Could be two distinct machines or a typo.
 *   "1997 RA-1G Pallet Machining Center" — the milling page calls the same
 *   machine a Matsuura RA1G.
 *   KIWA KH-45 is listed as 2014 here and "New 2016" on the milling page.
 */

export const equipmentCategories = [
  {
    id: 'milling-machines',
    name: 'Milling Machines',
    items: [
      {
        qty: 1,
        name: '2025 FANUC D28LiB 5ADV Plus 500 CNC Robo Drill',
        detail:
          'X=27.56, Y=19.68, Z=15.74 axis travel. 28 tool / 24K RPM, Renishaw tool and spindle probe.',
      },
      {
        qty: 1,
        name: '2023 FANUC D21LiB 5ADV Plus CNC Robo Drill / integrated high speed 4th axis',
        detail:
          'X=27.55, Y=15.74, Z=15.74 axis travel. 21 tool / 10K RPM, Renishaw tool & spindle probe.',
      },
      {
        qty: 1,
        name: '2022 Methods MV 1000L High Performance Vertical Machining Center',
        detail:
          'X=39.4", Y=20.5", Z=20.7". High speed machine capabilities with 12K spindle speed.',
      },
      {
        qty: 1,
        name: '2020 FANUC Robo D21SiB5 / Robot Cell Automation',
        detail: '24K spindle. X 11.81, Y 11.81, Z 15.74.',
      },
      {
        qty: 1,
        name: '2014 KIWA KH-45 Horizontal Mill',
        detail: 'Coolant through spindle / 6 pallet system.',
      },
      {
        qty: 1,
        name: '2004 FANUC T21IDL CNC Robo Pallet',
        detail: '20K spindle speed. X=27", Y=14", Z=18" axis travel.',
      },
      {
        qty: 1,
        name: '2004 TRAK DPM E2 Bed Mill with 3 axis control',
        detail: 'X=32", Y=16", Z=25" axis travel.',
      },
      {
        qty: 1,
        name: '2000 FANUC T14IB Vertical CNC Robodrill (15000 RPM)',
        detail: 'X=20", Y=14", Z=18" axis travel.',
      },
      {
        qty: 1,
        name: '2000 FANUC T141B Vertical CNC Robodrill',
        detail: 'X=20", Y=14", Z=18" axis travel.',
      },
      {
        qty: 1,
        name: '2000 FANUC T14IA Vertical CNC Robodrill',
        detail: 'X=20", Y=14", Z=18" axis travel.',
      },
      {
        qty: 1,
        name: '1997 RA-1G Pallet Machining Center',
        detail: 'X=20", Y=14", Z=18" axis travel.',
      },
      {
        qty: 1,
        name: '1997 FANUC T14IA Vertical CNC Robodrill',
        detail: 'X=20", Y=14", Z=18" axis travel.',
      },
    ],
  },

  {
    id: 'lathes',
    name: 'Lathes',
    items: [
      {
        qty: 1,
        name: '2006 Nakamura SC300',
        detail:
          '2.75" dia. thru spindle, 10" chuck cap. / LNS Quickload barfeeder.',
      },
      {
        qty: 1,
        name: '2000 Nakamura SC150M subspindle / live tooling turning center',
        detail: '2" bar cap / Quickload S2 bar feeder.',
      },
      {
        qty: 1,
        name: '1994 Nakamura TW-20 6th axis turning center',
        detail:
          '2" bar capacity, 8" chuck capacity / LNS bar feeder / high pressure coolant pumps.',
      },
      {
        qty: 1,
        name: '1985 CNC Nakamura Slant III',
        detail: '2 1/2" bar capacity, 14" chuck capacity, LNS bar feeder.',
      },
      {
        qty: 1,
        name: 'Hardinge second operation lathe',
        detail: 'Super precision.',
      },
    ],
  },

  {
    id: 'grinders',
    name: 'Grinders',
    items: [
      { qty: 1, name: 'Ko Lee all purpose hole & cylindrical grinder' },
      { qty: 1, name: '7A Covel Grinder 6 x 12' },
      { qty: 1, name: 'Darex E 90 tool grinder' },
    ],
  },

  {
    id: 'software',
    name: 'Special Features',
    items: [
      {
        qty: 1,
        name: '2025 Mastercam, Mill Level 3, advanced turning and solids',
        detail:
          'CAD formats: IGES, DXF, DWG, solids. 4 axis / full 3D machining.',
      },
      {
        qty: 1,
        name: 'SmartCAM communication package / milling, advanced turning',
      },
    ],
  },

  {
    id: 'miscellaneous-machines',
    name: 'Miscellaneous Machines',
    items: [
      { qty: 1, name: '2020 CNC Haas Model 5C 4th axis indexer' },
      { qty: 1, name: '2014 Omegasonic 7950 ultrasonic cleaner' },
      { qty: 1, name: '2013 Miller Syncrowave 250 DX welding machine' },
      { qty: 1, name: '2008 Tsudakoma CNC 4th axis indexer / 6" chuck' },
      { qty: 1, name: 'Sweco vibratory / 3\' cu capacity' },
      { qty: 1, name: 'Sunnen hone' },
      { qty: 1, name: 'Ultramatic vibrator' },
      { qty: 8, name: 'Drill presses' },
      { qty: 1, name: 'Branson 5510 ultrasonic cleaner' },
      { qty: 1, name: 'Royson 25" x 32" vibratory finisher' },
    ],
  },

  {
    id: 'presses-benders',
    name: 'Presses & Benders',
    items: [
      {
        qty: 1,
        name: '2015 Baileigh RDD-050 tube bender',
        detail: '2.50" dia. capacity.',
      },
      {
        qty: 1,
        name: '2004 Pedrick rotary compression bending machine',
        detail: '1" tube, ¾ round solid capacity.',
      },
      { qty: 1, name: '3 1/2 Greenerd arbor press' },
      { qty: 1, name: "3' sheet metal bender" },
      { qty: 1, name: '90° notcher' },
    ],
  },

  {
    id: 'saws',
    name: 'Saws',
    items: [
      {
        qty: 1,
        name: '2004 Kalamazoo horizontal mitre saw',
        detail: '10" capacity auto retract.',
      },
      { qty: 1, name: '2022 Baileigh BSV-18VS-220-V2 vertical bandsaw' },
    ],
  },

  {
    id: 'accessories',
    name: 'Accessories',
    items: [
      {
        qty: 1,
        name: 'Sandblaster Cyclone',
        detail: '20"W x 42"L x 21"H cabinet.',
      },
      { qty: 1, name: 'Texas Airsonics high precision pencil glass beader' },
      { qty: 1, name: '2004 Wilton belt sander' },
      { qty: 1, name: '2013 SK15 H.P. Kaeser air compressor' },
      { qty: 1, name: '2013 Zeks heatsink air dryer' },
      { qty: 1, name: 'Compressors 10HP Ingersoll-Rand Queen screw' },
      { qty: 1, name: '2010 Yale 3500 lb. fork lift' },
      { qty: 1, name: '2020 Pacesetter Autobag packaging system' },
      { qty: 1, name: '2019 GMC 3/4 ton pickup truck' },
      { qty: 1, name: '2020 PS 125 One Step table top bagger / printer' },
    ],
  },

  {
    id: 'inspection-equipment',
    name: 'Inspection Equipment',
    /* The source heading carries this qualifier — it is a significant trust
       signal and must not be dropped when the heading is shortened. */
    note: 'Complete climate controlled inspection room with full-time Q.A. Manager.',
    items: [
      { qty: 1, name: '2005 TESA Hite 600' },
      { qty: 1, name: '2002 TESA Hite 350 Plus D' },
      { qty: 1, name: '1995 24" Brown & Sharpe Microhite' },
      { qty: 1, name: '14" comparator — Deltronic — digital readout' },
      {
        qty: 1,
        name: 'Olympus Model SZ30 stereo microscope / fiberoptic ring light',
      },
      { qty: 1, name: "4' x 8' pink & 2' x 3' black granite plate" },
      { qty: 1, name: 'Mitutoyo Surftest 402' },
      {
        name: 'Sets of plug & thread gages / Deltronic gage pins .0001 incr.',
      },
    ],
  },
]
