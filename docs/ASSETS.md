# Image assets

Every image here came from the existing Jones Machine Co. website
(jonesmachineco.com/images/). Nothing is stock photography, AI generated, or
sourced from anywhere else. Files were renamed descriptively; the pixels are
unmodified.

Alt text for each image lives beside its content in `src/data/`, not here, so
the description stays with the machine or product it belongs to.

## Original filename → new path

| Original          | New path                                       | Used by             |
| ----------------- | ---------------------------------------------- | ------------------- |
| `JonesMachine.jpg`| `facility/building-exterior.jpg`               | Home, About, share  |
| `fanuc_d28.jpeg`  | `milling/fanuc-d28-2025.jpg`                   | Milling             |
| `fanuc_d21.jpeg`  | `milling/fanuc-d21-2023.jpg`                   | Milling             |
| `MV1000L.jpg`     | `milling/methods-mv1000l.jpg`                  | Milling             |
| `KIWA2.jpg`       | `milling/kiwa-kh45.jpg`                        | Milling             |
| `RoboticMachine2.jpg` | `milling/fanuc-robot-cell.jpg`             | Milling             |
| `pm4.jpg`         | `milling/robo-t21-pallet.jpg`                  | Milling             |
| `pm5.jpg`         | `milling/robo-drill-row.jpg`                   | Milling             |
| `pm2.jpg`         | `milling/matsuura-ra1g.jpg`                    | Milling             |
| `pt1.jpg`         | `turning/nakamura-tw20.jpg`                    | Turning             |
| `pt2.jpg`         | `turning/nakamura-sc300.jpg`                   | Turning             |
| `pt3.jpg`         | `turning/nakamura-sc150.jpg`                   | Turning             |
| `pt4.jpg`         | `turning/nakamura-slant-iii.jpg`               | Turning             |
| `parts4.jpg`      | `parts/machined-parts-01.jpg`                  | Sample Parts        |
| `parts5.jpg`      | `parts/machined-parts-02.jpg`                  | Sample Parts        |
| `NewJonesMachineParts.jpg` | `parts/machined-parts-03.jpg`         | Sample Parts        |
| `cribbage2.jpg`   | `products/cribbage-board.jpg`                  | Custom Products     |
| `tool_bench.jpg`  | `products/tool-holder-rack.jpg`                | Custom Products     |
| `tool-holder.jpg` | `products/bench-top-tool-changer.jpg`          | Custom Products     |
| `QualityControl2.jpg` | `quality/inspection-room.jpg`              | Quality             |
| `Bagger.jpg`      | `packaging/ps125-table-top-bagger.jpg`         | Packaging           |
| `NASA.jpg`        | `news/nasa-award.jpg`                          | News & Awards       |
| `banner.gif`      | `brand/original-banner-archive.gif`            | **Archive only**    |

## Notes

**`brand/original-banner-archive.gif`** is the original 976 × 163 header
banner. It is kept for reference and is intentionally not used by the site —
it is a fixed-width raster with a gradient background and bevelled chrome
lettering, so it cannot reflow on mobile and would not stay crisp on modern
displays.

The header wordmark is instead rebuilt as live text
(`src/components/layout/Logo.jsx`), preserving the banner's recognizable
elements: the JMC monogram, the full company name, "Since 1973", and the navy
blue of the shop signage. The banner's "Proudly made in the USA!" flag is
rebuilt as `src/components/layout/MadeInUsaBadge.jsx`.

**This recreation should be reviewed with the owners before launch.** If they
have the original logo artwork as vector (AI, EPS or SVG), that file should
replace the text lockup.

## Still to do

Images are served at their original resolution. Generating WebP versions and
correctly sized variants is a performance task, not a content task, and has
not been done.
