# BRIK64 Design System

> Canonical site grammar for `brik64.com`. Historical notes from earlier visual
> systems are retained only as archival context and must not override the rules
> below.

## Current canonical site grammar

- Section headers are centered and use the official teal accent for the title.
- Home, product, utility, and risk pages all inherit the same baseline cadence:
  one protagonist surface, one supporting surface, and bounded CTA treatment.
- A page only counts as migrated when it has:
  - a centered teal header
  - a protagonist artifact or structured surface
  - explicit payload or proof metadata
  - CTA treatment aligned with the site canon
- `HeroWireframe` can remain as ambient scaffolding, but it is not itself proof
  of migration.
- CTA rows use one teal primary action, one muted secondary action, and external
  links with a visible affordance.
- Generic card clouds, ornamental resource shelves, and legacy split grammars
  are regressions even if they look polished.

## Page archetypes

Every public route must fit one of these families.

### 1. Product Surface

Used by:

- `/`
- `/pcd`
- `/platform`
- `/registry`
- `/cli`
- `/sdks`
- `/transpiler`
- `/lifter`
- `/bpu`
- `/features`
- `/foundations`
- `/enterprise`
- `/compliance`
- `/ai-agents`

Rules:

- keep one protagonist artifact per section
- keep proof or state visible in the same surface
- subordinate code or terminal payload to the artifact
- keep CTA rows technical and compact

### 2. Editorial Surface

Used by:

- `/blog`
- `/blog/page/[page]`
- `/blog/[slug]`
- `/news`
- `/news/[slug]`

Rules:

- preserve `EditorialSystem`
- keep covers, metadata strips, and pagination rails coherent
- avoid importing product cards into editorial detail pages

### 3. Risk / Use-Case Surface

Used by:

- `/industries/*`
- `/use-cases/*`
- `/ai`
- `/blockchain`
- `/safety-critical`
- `/languages/[slug]`

Rules:

- hero centered in teal
- one `RiskEvidenceSurface` or equivalent protagonist object
- one `ConstraintEnvelopeSurface` or `ScenarioFlowSurface`
- code examples are evidence, not the protagonist
- copy should talk about constraint, traceability, bounded behavior, and proof

### 4. Utility / Company Surface

Used by:

- `/about`
- `/contact`
- `/download`
- `/pricing`
- `/faq`
- `/legal`
- `/investors`
- `/playground`
- `/changelog`
- `/docs`
- `/shop`
- `/login`
- `/signup`
- `/design-system`

Rules:

- keep the same header cadence as product pages
- do not turn every utility page into a product demo
- favor one main service or thesis surface plus one supporting surface
- keep auth, legal, and docs visually sober but still on-system

### 5. Retired Route

Used by:

- `/v2`
- `/v2-jobs`

Rules:

- redirect out of the public navigation
- do not keep a parallel public grammar alive

## Canonical surfaces

These are the reusable surfaces the site is allowed to compose.

- `PageSectionHeader`
- `ComparisonSurface`
- `FeatureMatrixSurface`
- `EvidenceSurface`
- `RiskEvidenceSurface`
- `ConstraintEnvelopeSurface`
- `ScenarioFlowSurface`
- `LanguageExchangeSurface`
- `UtilitySurface`
- `CompanyThesisSurface`
- `ActionSurface`
- `DocsRailSurface`
- `EditorialSystem`

## Canonical spacing and rhythm

- section shell: `border-t border-border px-6 py-16 md:px-12 md:py-24`
- header width: `mx-auto max-w-4xl text-center`
- subtitle width: `mx-auto max-w-2xl`
- protagonist surface gap from section header: `mt-10`
- CTA groups should stay compact and not form a third design language

## CTA canon

- primary: teal background, white text
- secondary: bordered or muted surface action
- external links: visible arrow or external-link icon
- the CTA row should read like an operator next step, not a decorative shelf

## Audience calibration

- Primary buyer persona: `Staff / Principal Engineer` or `Platform Lead`
- The hero can keep the AI hook, but surrounding sections must move quickly to:
  - structure
  - traceability
  - deterministic behavior
  - explicit scope
- The body of the site should make the delivery path legible:
  - `CLI -> PCD -> platform -> registry -> proof`
- Marketing language is acceptable in the hero and top lead, but supporting
  surfaces must anchor it in evidence and bounded claims.

## What counts as migrated

A page is considered migrated only when all of the following are true:

1. it uses the centered teal section header grammar
2. it presents a protagonist surface instead of a cloud of equal-weight cards
3. it makes state, proof, or scope visible inside that surface
4. it avoids mixing legacy v5 and current site grammar in the same reading path
5. its CTA row follows the site canon

## Prohibited patterns

- grids of 3-6 equivalent cards as the main object of a section
- `HeroWireframe` plus text plus CTA as the only modernization step
- arbitrary mixing of legacy and current grammar on the same page
- ornamental resource shelves with no protagonist object
- left-aligned code windows as the main object of already-migrated pages
- unsupported claims about certification, customers, or compliance posture
- internal links rendered like generic external resources

## Qualified claims

When numbers or strong capability claims appear on the site, they must stay
traceable to current repo evidence. This includes:

- counts of monomers, targets, tests, or proofs
- claims about supported AI workflows or IDE integrations
- compliance or safety positioning
- registry or enterprise readiness language
- counts of evidence files or verification instances

If the evidence is not present in the repo, the claim must be qualified or
removed.


This system is preserved only so existing documentation and historical tests remain interpretable.
