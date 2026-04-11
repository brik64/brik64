# Industries Editorial Spec

This document defines the editorial contract for `industries/*` routes rendered via [`RiskPageView`](/Users/carlosjperez/Documents/GitHub/brik64.com/src/components/PageArchetypes.tsx).

## Purpose

Keep industry pages as technical reference surfaces for engineering buyers, not as:

- generic archetype placeholders
- marketing-only narratives
- unsupported compliance claims

## Runtime Source Of Truth

- Dataset: [`src/lib/risk-page-data.ts`](/Users/carlosjperez/Documents/GitHub/brik64.com/src/lib/risk-page-data.ts)
- Wrappers: `src/app/industries/*/page.tsx`

Industry sections must stay specific to domain risk and integration posture.

## Required Editorial Fields Per Industry

Each industry spec must include explicit content for:

- sector thesis
- dominant software risk
- where BRIK-64 enters the workflow
- concrete workflow example
- evidence outputs
- standards context (support posture)
- claim boundary
- contextual CTA pair

## Language Guardrails

Do not show archetype meta language in runtime copy:

- `Proof strip`
- `review object`
- `constraint set`
- `evidence path`
- `this page`
- `the page should`

The page must read as a domain dossier, not as a component demonstration.

## Claims Boundary

Industry pages may discuss standards contexts (for example `DO-178C`, `IEC 62304`, `PCI-DSS`, `SOX`, `MiFID II`, `FedRAMP`) only as review posture.

They must not claim:

- complete certification
- guaranteed compliance
- customer-backed deployment assertions not present in repo evidence

## Regression Tests

Primary test:

- [`tests/industries-content.test.ts`](/Users/carlosjperez/Documents/GitHub/brik64.com/tests/industries-content.test.ts)

Supporting guards:

- [`tests/design-grammar-risk.test.ts`](/Users/carlosjperez/Documents/GitHub/brik64.com/tests/design-grammar-risk.test.ts)

