# BRIK64 Official Logo Assets

This document records the canonical BRIK64 logo variants and the intended usage of each asset across the website and metadata surfaces.

## Canonical Variants

### 1. Primary horizontal logo

- Canonical role: main brand mark for the top navigation and general header usage.
- Visual structure: `BRIK` in black with `64` in blue on the same horizontal line.
- Intended surfaces:
  - site header
  - navigation menu
  - footer brand reference where a full-width mark is appropriate

Recommended asset naming:

- `brik64-logo-primary-horizontal-menu.ai`
- `brik64-logo-primary-horizontal-menu.svg`

### 2. Compact `B64` mark

- Canonical role: compact brand mark for favicon-scale usage.
- Visual structure: black `B` plus blue `64`.
- Intended surfaces:
  - favicon
  - app icon
  - pinned tab / compact square placements
  - any constrained square brand slot

Recommended asset naming:

- `brik64-logo-favicon-b64-master.ai`
- `brik64-logo-favicon-b64-master.svg`

### 3. Stacked social / Open Graph logo

- Canonical role: social sharing and Open Graph composition.
- Visual structure: `BRIK` in black above a large blue `64`.
- Intended surfaces:
  - Open Graph images
  - social sharing cards
  - media thumbnails where the horizontal logo would be too small

Recommended asset naming:

- `brik64-logo-opengraph-stacked.ai`
- `brik64-logo-opengraph-stacked.svg`

## Derived Support Assets

Some exports contain only the blue `64` in transparent raster form. These are support assets, not canonical full-logo masters.

Examples:

- `brik64-number-64-right-aligned-transparent.png`
- `brik64-number-64-large-transparent.png`
- `brik64-number-64-compact-transparent.png`

These should not replace the canonical master files above when a full logo is required.

## Classification Rules

- Use the horizontal logo as the default website identity mark.
- Use the compact `B64` mark only when the available surface is too constrained for the full horizontal logo.
- Use the stacked variant for Open Graph and social card generation.
- Treat `.ai` and `.svg` as source-of-truth vector masters.
- Treat `.jpg` and `.png` as exports or previews unless explicitly promoted to canonical output.

## Current Asset Organization

The current manually classified asset set was organized outside the repository in a local working directory:

- `~/Downloads/BRIK64-official-logos/01-primary-horizontal-menu/`
- `~/Downloads/BRIK64-official-logos/02-favicon-b64/`
- `~/Downloads/BRIK64-official-logos/03-opengraph-stacked/`
- `~/Downloads/BRIK64-official-logos/support-assets/`

If these assets are later imported into the repository, preserve the same naming and classification scheme to avoid semantic drift between favicon, navigation, and social-sharing assets.
