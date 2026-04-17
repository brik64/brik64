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
- `brik64-logo-primary-horizontal-black.svg`
- `brik64-logo-primary-horizontal-white.svg`

Color usage:

- Black horizontal: default website header/footer logo on light backgrounds
- White horizontal: inverted variant for dark backgrounds or overlays

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

## Repository Organization

Source-of-truth imported asset set:

- `docs/design-references/brand-assets/BRIK64-official-logos/01-primary-horizontal-menu/`
- `docs/design-references/brand-assets/BRIK64-official-logos/02-favicon-b64/`
- `docs/design-references/brand-assets/BRIK64-official-logos/03-opengraph-stacked/`
- `docs/design-references/brand-assets/BRIK64-official-logos/support-assets/`

Runtime web assets:

- `public/brand/brik64-logo-primary-horizontal-menu.svg`
- `public/brand/brik64-logo-primary-horizontal-black.svg`
- `public/brand/brik64-logo-primary-horizontal-white.svg`
- `public/brand/brik64-logo-favicon-b64-master.svg`
- `public/brand/brik64-logo-opengraph-stacked.svg`
- `public/favicon.svg`
- `public/seo/brik64-opengraph-stacked.png`

Preserve this naming and classification scheme to avoid semantic drift between favicon, navigation, footer, and social-sharing assets.
