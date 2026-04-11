# Features Editorial Spec

This document defines the runtime editorial contract for [`/features`](/Users/carlosjperez/Documents/GitHub/brik64.com/src/app/features/page.tsx).

## Purpose

Keep `/features` as a single product overview route with:

- one consistent product grammar
- qualified evidence language
- explicit claim boundaries per section

This prevents regression to:

- migration-meta copy visible in runtime
- card-cloud feature catalogs
- unsupported certainty or compliance claims

## Runtime Source Of Truth

- Dataset: [`src/lib/features-page-data.ts`](/Users/carlosjperez/Documents/GitHub/brik64.com/src/lib/features-page-data.ts)
- Renderer: [`src/app/features/page.tsx`](/Users/carlosjperez/Documents/GitHub/brik64.com/src/app/features/page.tsx)

`featureSections` is the canonical contract for all eight anchors:

- `compilation`
- `verification`
- `domain-constraints`
- `lifting`
- `transpilation`
- `platform`
- `ai-native`
- `enterprise`

Each section must keep:

- one protagonist surface
- one supporting surface
- one explicit `claimBoundary`

## Claim Discipline

Allowed claim classes for this page are defined by `featureClaimMatrix.approvedClaims`:

- 128 operations
- 14 targets
- 10 source languages
- 207 proof files
- self-hosting fixpoint consistency
- project-documented liftability evidence (211/211)
- enterprise audit/review posture

Blocked or dropped claim classes are defined by `featureClaimMatrix.droppedClaims`:

- market uniqueness
- blanket correctness
- absolute impossibility language
- universal liftability guarantees
- conflicting tests counts
- AI hype claims
- enterprise certification implication
- speed promises

## Language Guardrails

Do not reintroduce these in visible runtime content for `/features`:

- `Why this page changed`
- `What this page is promising`
- `Core Surfaces`
- `No other compiler on earth`
- `100% liftability guarantee`
- `every AI on earth`
- `verified software engineer`
- `out of the box`
- `magic`
- `never needs debugging`
- `30 seconds`

## Compliance Wording Boundary

Use support-posture wording only:

- BRIK-64 supports audit and review workflows with evidence artifacts that teams may map into standards contexts.
- BRIK-64 does not by itself satisfy regulatory or certification programs.

## CTA Contract

Final CTA row for `/features`:

- primary: `/cli`
- secondary: `/platform`

`/pricing` is intentionally not the secondary route for this page.

## Regression Tests

Primary tests:

- [`tests/features-visual-grammar.test.ts`](/Users/carlosjperez/Documents/GitHub/brik64.com/tests/features-visual-grammar.test.ts)
- [`tests/features-editorial-language.test.ts`](/Users/carlosjperez/Documents/GitHub/brik64.com/tests/features-editorial-language.test.ts)

Supporting guards:

- [`tests/design-grammar-product.test.ts`](/Users/carlosjperez/Documents/GitHub/brik64.com/tests/design-grammar-product.test.ts)
- [`tests/product-visual-semantics.test.ts`](/Users/carlosjperez/Documents/GitHub/brik64.com/tests/product-visual-semantics.test.ts)

