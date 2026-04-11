# Implementation Plan: Homepage Refactor Against Master Editorial Plan

## Objective
Refactor the public homepage so it matches the master site plan for a `CTO / VP Engineering` buyer:

- bounded-software thesis first
- blueprint and workflow visible
- AI framed as a producer, not a trust source
- explicit claim boundaries
- removal of legacy AI-hype and slogan-driven homepage copy

## Strategy
1. Read the master refactor document and required repo truth-boundary docs.
2. Replace the homepage hero and section narrative with the approved thesis/workflow/boundary order.
3. Remove homepage sections that behaved like a feature catalog instead of a thesis map.
4. Align home-adjacent metadata and navigation copy so the homepage shell does not reintroduce old framing.
5. Add adversarial tests that fail if the legacy homepage language returns.
6. Validate with targeted Vitest suites, lint, build, and runtime HTML inspection.

## Design Decisions
- Preserve the existing visual system, wireframes, and artifact components where they still communicate the product clearly.
- Reduce homepage scope to:
  - Hero
  - Buyer strip
  - Problem
  - PCD blueprint
  - Workflow
  - Platform
  - AI verification loop
  - Claim boundaries
  - CTA
- Keep proof language qualified:
  - core operations may be presented as formally proven
  - extended operations stay contract-bounded
  - runtime and external systems stay outside the bounded claim
