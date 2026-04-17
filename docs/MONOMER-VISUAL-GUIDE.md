# Monomer Visual Guide

Source of truth for the official monomer tile geometry, typography, and badge behavior used by BRIK64 web surfaces.

## Canonical Pencil Reference

Source file: `/Users/carlosjperez/MONOMER-GUIDE-BRIK64.pen`

Repo copy: `docs/design-references/monomer-visual-guide/MONOMER-GUIDE-BRIK64.pen`

Relevant reference nodes:

- `r5bnR` — Official monomer guide board
- `wpHAV` — MC 00 positive
- `b7Svq` — MC 00 negative
- `rI6sI` — MX 64 positive
- `E2NQ6` — MX 64 negative
- `kktHL` — MC 21 with badge `999`
- `ecyGw` — MC 21 with badge `21`
- `fOdln` — MC 21 with badge `1K`

## Tile Geometry

- Tile size: `340 x 340`
- Corner radius: `28`
- Positive stroke: `1`
- Negative stroke: `5`
- Core positive fill: teal
- Extended positive fill: orange
- Negative variant fill: white

## Typography

- Font family: `Jura`
- Font weight: `800`

Prefix:

- Size: `60`
- Position: `x: 37`, `y: 26`
- Letter spacing: `1.8`

Number:

- Size: `200`
- Box: `340 x 340`
- Position: `x: 0`, `y: 0`
- Alignment: horizontal center + vertical middle
- Letter spacing:
  - `0` for `00–99`
  - `-10` for `100–127`

Name:

- Size: `60`
- Box width: `340`
- Position: `x: 0`, `y: 239`
- Alignment: horizontal center
- Text growth: `fixed-width`
- Letter spacing: `1.1`

## Badge Rules

Badge is an overlay count marker for monomer usage or related count surfaces.

- Shape: circle
- Fill: red
- Diameter: `104`
- Position: `x: 288`, `y: -52`
- Number box: `104 x 104`
- Number size: `44`
- Number alignment: horizontal center + vertical middle

Count formatting:

- `0–999` => render literal number
- `1000+` => render compact thousands notation: `1K`, `2K`, `3K`, etc.

## Web Implementation Rules

When monomers are represented in the product UI:

- Do not improvise new proportions.
- Do not right-align the name or number.
- Do not use alternate font stacks.
- Do not mix centered number geometry with left-aligned naming.
- Use the teal/orange distinction consistently for Core vs Extended.
- Use the badge only when the count conveys real structural meaning.

## Planned Web Integration

Primary target:

- `src/app/platform/page.tsx`
- `src/components/MonomerArtifacts.tsx`

Follow-up targets:

- `src/app/pcd/page.tsx`
- any monomer-related design-system surface that currently uses placeholder tile geometry

Implementation intent:

- replace the current approximate `SolidMonomerTile` geometry with the canonical tile spec above
- encode badge behavior as a reusable visual rule
- ensure platform and PCD pages both render the same monomer material system
