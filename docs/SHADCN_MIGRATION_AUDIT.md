# Shadcn Migration Audit

Date: 2026-05-13
Repo: `brik64.com`
Decision: keep `components.json` on Shadcn v4 `base-nova`; port selected
`brik64-platform` components into a native `brik64.com` public-site library
instead of importing platform runtime files directly.

## Current Baseline

- Local dev server: `http://localhost:3000`
- Public site already has `components.json`, Tailwind v4 tokens, `shadcn`,
  `class-variance-authority`, `tailwind-merge`, `lucide-react`, and one runtime
  Shadcn-style component: `src/components/ui/button.tsx`.
- Platform reference copied to `references/shadcn-platform-ui/`.
- Native BRIK64 public-site library started under `src/components/brik`.
- `brik64-platform` reference includes: alert, badge, button, card,
  dropdown-menu, input, label, progress, scroll-area, select, switch, tabs,
  textarea, tooltip.

## Migration Categories

### Replace With Shadcn Runtime Components

These patterns should move first because they are repeated and low-risk:

- Buttons and links: `ButtonVNext`, pixel-perfect button variants, inline copy
  buttons, CTA buttons.
- Cards/surfaces: `SurfaceCard`, `ProductFrame`, repeated bordered content
  panels, proof artifact cards, page archetype cards.
- Badges/chips: `ChipVNext`, `AnnouncementPill`, status pills, language pills,
  proof badges where the visual contract stays unchanged.
- Tabs/segmented controls: `CustomerStoriesSection`, `MonomerGrid`,
  `HomeProofArtifacts.client`, `code-artifact`.
- Form primitives: login/signup/contact inputs, labels, textareas, selects.
- Tooltip/dropdown primitives: copy actions, navbar/menu actions, icon-only
  buttons.

### Wrapped As BRIK64 Public-Site Components

These should become BRIK64 wrappers around Shadcn primitives, not direct page
markup:

- `PageHeaderVNext`
- `SupportingSurface`
- `ProtagonistSurface`
- `PillarCard`
- `ToolRail`
- `CopyableCode`
- `TerminalBlock`
- `FeatureGrid`
- `BrikCertificationBadge`
- `BrikProofBadge`
- `BrikStatusBadge`
- `BrikMonomerCompositionBar`
- `BrikTopologyNodeCard`

### Keep Custom BRIK64 Visual Components

These carry product-specific visual meaning and should not be flattened into
generic Shadcn components:

- `MonomerGrid`
- `MonomerMatrix`
- `MonomerTile`
- `MonomerSvg`
- `monomer-cube-map`
- `CircuitGrid`, `StaticCircuitGrid`, `CircuitDivider`
- hero/generated image compositions and formal proof visuals

They can still use Shadcn primitives internally for buttons, tabs, cards, and
tooltips.

## Implementation Status

### Completed In Current Pass

- Added local Shadcn/base-nova primitives:
  `tabs`, `tooltip`, `dropdown-menu`, `progress`, `switch`, `select`,
  `scroll-area`, `dialog`, `sheet`, `popover`.
- Added BRIK64 public-site library:
  `src/components/brik/brik-certification-badge.tsx`,
  `src/components/brik/brik-proof-badge.tsx`,
  `src/components/brik/brik-status-badge.tsx`,
  `src/components/brik/brik-monomer-composition-bar.tsx`,
  `src/components/brik/brik-topology-node-card.tsx`.
- Added BRIK64 token aliases in `src/app/globals.css`:
  `--brik-core`, `--brik-extended`, `--brik-invalid`, `--brik-pending`,
  `--brik-stale`.
- Refactored `ButtonVNext`, `ChipVNext`, `AnnouncementPill`, `SurfaceCard`,
  `ProductFrame`, `PillarCard` to delegate to local Shadcn primitives.
- Refactored `MultiLanguageCodeArtifact` to use `Tabs`, `Button`, `Card`, and
  `ScrollArea`.
- Refactored proof/certificate/topology surfaces to consume BRIK64 public-site
  library components.
- Updated `registry.json` with the added primitives and BRIK64 proof library.

### Remaining Follow-Up

- Broaden migration beyond the home to older page archetype components.
- Replace remaining one-off cards in legacy sections where doing so does not
  change layout semantics.
- Run visual review across `/design-system`, `/monomer-structure`,
  `/for-agents`, `/login`, `/signup`, and `/pricing` before claiming full
  site-wide migration.

## First Implementation Pass Checklist

1. Expand `src/components/ui` with BRIK64-adapted Shadcn primitives:
   `card`, `badge`, `input`, `label`, `textarea`, `tabs`, `tooltip`,
   `dropdown-menu`, `select`, `progress`, `switch`, `separator`.
2. Keep API names aligned with Shadcn official exports.
3. Refactor `src/components/vnext/primitives.tsx` to delegate:
   `ButtonVNext -> Button`, `SurfaceCard/ProductFrame -> Card`,
   `ChipVNext/AnnouncementPill -> Badge` wrappers.
4. Add a public registry under `public/r/` after the runtime primitives are
   stable.
5. Validate `/`, `/design-system`, `/monomer-structure`, `/for-agents`,
   `/login`, `/signup`, and `/pricing`.

## Risks

- `brik64-platform` reference uses classic Radix components while `brik64.com`
  currently uses Shadcn v4 `base-nova` with Base UI for `Button`; copying
  platform directly into runtime would mix primitive systems.
- Some visual components use large custom Tailwind strings. Migration should
  reduce duplication without erasing the BRIK64 dark/circuit identity.
- This is a public website; no copy or claim changes should be made as part of
  primitive migration unless required for accessibility.

## Verification 2026-05-13

- `npm run lint`: passed with 0 errors and 0 warnings.
- `npx vitest run tests/home-visual-contract.test.ts tests/proof-badge.test.ts tests/proof-notes-copy.test.ts --reporter=verbose`: passed, 11 tests.
- `npm run build`: passed, 131 static/SSG routes generated.
- `npx shadcn build ./registry.json -o ./public/r`: passed.
- `curl -I http://localhost:3000/`: 200.
- `curl -I http://localhost:3000/r/brik64-button.json`: 200.
- `curl -I http://localhost:3000/r/brik64-proof-library.json`: 200.
- `npx wrangler pages deploy out --project-name brik64-web-brik64com`: passed.
- Deployment URL: `https://ba0136d7.brik64-web-brik64com.pages.dev`.
- `curl -I https://brik64.com`: 200.
- `curl -I https://www.brik64.com`: 200.
- `curl -I https://ba0136d7.brik64-web-brik64com.pages.dev`: 200.
- Playwright desktop `1033x938`: captured home top, PCD section, topology section.
- Playwright mobile `390x844`: captured home top and topology section.
- Playwright interactions: PCD artifact tabs switched to Rust and JavaScript; CLI copy button clicked.
- Mobile overflow check after CSS fix: `scrollWidth` equals `clientWidth` at 390px.

### Known Test Debt

- `npx vitest run`: currently fails 101 legacy source-contract tests.
- Failure pattern: stale expectations for pre-migration page shells, old home
  copy/layout contracts, login/signup utility wrappers, and IP-protection rules
  that conflict with the explicit monomer visual language now present on the
  public home.
- Release decision: deployment proceeded with lint, focused regression tests,
  production build, and domain smoke tests green. The legacy suite must be
  realigned before treating the full repo test gate as clean.
