# BRIK64 Design System vNext

## Status
- This is the live visual system for new work on `brik64.com`.
- The earlier light-first grammar is now `legacy` and should be used only as a reference for historical copy or documentation context.
- Strategic parent document:
  - `docs/brik_64_final_positioning_brand_web_cmo_system.md`
- This design system is the visual and interface translation of that master
  positioning document. If visual grammar, web narrative, or buyer posture
  drifts from the master document, this file must be updated to realign.

## Core Direction
- dark-first runtime
- Inter for body and interface copy
- Manrope for display headings
- Jura reserved for visible `BRIK64` / `BRIK-64` brand wordmarks
- Geist Mono for commands and payloads
- official brand teal accent: `#00E5FF`
- product-led surfaces before long explanation
- home hero reads as one poster-like composition
- chips are reusable navigation and metadata primitives, not hero clutter
- top navbar follows the InsForge-style shell grammar: slim black bar, quiet social proof, blue-teal login CTA, dark outline sign-up CTA

## Tokens
- background: `#0A0D12`
- elevated surface: `#11161D`
- secondary surface: `#171D26`
- primary text: `#F5F7FA`
- muted text: `#98A3B3`
- border: `rgba(255,255,255,0.08)`
- accent: `#00E5FF`
- accent hover: `#00CCEE`
- accent soft: `rgba(0,229,255,0.14)`
- control radius: `8px`
- chip radius: `9999px`

## Typography
- display: `Manrope`
- body: `Inter`
- mono: `Geist Mono`
- brand wordmark: `Jura`
- `Jura` does not replace interface or display typography; it is reserved for visible brand signatures

## Navbar Canon
- left: BRIK64 logo
- center: `Product`, `Industries`, `Pricing`, `Blog`, `Docs`
- right: `Discord`, `GitHub + stars`, `Login`, `Sign Up`
- shell style:
  - `48px` height
  - black background
  - small/firm nav labels at `14px`
  - logo box `100x24`
  - social icons on `36x36` hit areas
  - GitHub badge on `36px` height with a fixed-width footprint
  - blue-teal `Login` CTA
  - dark outlined `Sign Up` CTA
- `Product` and `Industries` open mega dropdowns modeled after the InsForge-style shell grammar
- `Pricing` and `Blog` stay as direct links
- `Docs` is an external primary-nav link that opens `https://docs.brik64.dev` in a new tab
- mobile keeps the same top-level links plus the same social/auth block, with Product and Industries rendered as expandable sections and Docs opening externally

## Footer Canon
- Company:
  - About
  - Blog
  - Careers
  - Contact Sales
  - Security
  - Legal
  - Privacy Policy
  - Terms of Use
  - DPA
  - Subprocessors List
  - Cookie Policy
  - Business Information
- Resources:
  - Docs
  - Shop
  - Changelog
  - Support
  - Community Guides
  - PostgreSQL Tutorial
  - Startups
- Community:
  - Discord
  - GitHub
  - X.com
  - LinkedIn
  - YouTube

## Composition Rules
- first viewport reads as one composition
- full-bleed hero for landing surfaces
- no hero cards by default
- no stats, rails, chip soup, or logo clouds in the hero
- one dominant visual plane before secondary content
- motion creates hierarchy, not noise

## Surface Grammar
- `PageShell`
- `NavbarVNext`
- `FooterVNext`
- `ButtonVNext`
- `ChipVNext`
- `CommandChip`
- `SurfaceCard`
- `ProductFrame`
- `SectionRail`
- `LogoRail`
- `StatBadge`
- `AuthAction`
- `SocialIconLink`
- `GitHubStarBadge`
- `FooterColumn`
- `FooterLinkGroup`
- `PageHeaderVNext`
- `ProtagonistSurface`
- `SupportingSurface`

## Chip System
- product: `CLI`, `PCD`, `Registry`, `Transpiler`
- section: internal anchors and rails
- status: `Docs`, `Live`, `Example`, `Beta`, `Legacy`
- command: `brikc compile`, `publish`, `certify`
- filter: product and use-case grouping
- announcement pills:
  - opaque surface
  - no leading status dot
  - no trailing arrow
  - must visually cut off any grid, glow, or hero texture behind them
  - should read as a solid plate, not a translucent overlay

## Teal Taxonomy
Use teal with function discipline. Do not reuse the same visual treatment for every short label.

### 1. Announcement
- Purpose: short contextual statement attached to a hero or major entry surface.
- Current component: `AnnouncementPill`
- Visual rule:
  - solid opaque plate
  - rounded full
  - short sentence only
  - no dot, no arrow, no status icon
  - allowed over textured or illuminated backgrounds because it blocks the texture behind it
- Do not use for:
  - proof state
  - verification state
  - section headings
  - product filters

### 2. Status
- Purpose: operational state, proof posture, or verification posture inside an artifact.
- Current components:
  - `StatusPill`
  - `ProofBadge`
- Visual rule:
  - compact pill
  - uppercase, high-density label
  - may include an icon
  - color depends on tone: `teal`, `success`, `warning`, `neutral`
  - belongs inside cards, frames, workbenches, and evidence surfaces
- Do not use for:
  - hero messaging
  - section intros
  - navigation chips

### 3. Section Label
- Purpose: orient the reader at the start of a section.
- Current components:
  - `PageHeaderVNext` eyebrow
  - `PageSectionHeader` eyebrow
  - `HomeSectionHeader` eyebrow
- Visual rule:
  - plain text only
  - uppercase, tracked, small
  - no border
  - no pill container
  - no icon by default
- Do not use teal fill or accent-soft backgrounds here. A section label is a caption, not a badge.

### 4. Chip
- Purpose: navigation, grouping, filtering, product object labeling, or command display.
- Current components:
  - `ChipVNext`
  - `CommandChip`
- Visual rule:
  - pill form is allowed
  - may be neutral, active, or accent
  - should not imply system proof or live state unless the copy explicitly says so
- Do not use chips as announcement replacements in the hero.

## Current Mapping
- `AnnouncementPill` → `Announcement`
- `StatusPill` / `ProofBadge` → `Status`
- `PageHeaderVNext` eyebrow → `Section Label`
- `PageSectionHeader` / `HomeSectionHeader` eyebrow → `Section Label`
- `ChipVNext` / `CommandChip` → `Chip`

## Anti-Drift Rules
- Never use a filled teal pill as a generic fallback when the semantic type is unknown.
- If the element communicates system state, use `Status`.
- If the element introduces a section, use `Section Label`.
- If the element is a short hero context line, use `Announcement`.
- If the element groups, filters, or names product objects, use `Chip`.
- Do not place icons in `Announcement` unless the component is explicitly redesigned and the manual is updated in the same change.

## Verification Rules
- routes migrated to vNext must keep `Jura` scoped to visible brand signatures only
- shell changes must preserve exact navbar and footer coverage
- GitHub stars are delivered from a repository snapshot, not via client-side runtime fetch
- visual validation must include desktop and mobile review
