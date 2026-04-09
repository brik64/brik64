# Content And Marketing Scope

This document defines what `brik64.com` is allowed to communicate, what must be
qualified, and what must not be claimed without stronger evidence. It exists to
keep the public website aligned with the actual state of BRIK-64.

## Purpose

The website should explain BRIK-64 clearly enough for external audiences to
understand the product thesis, while preserving technical rigor. Public copy is
an interface layer, not a license to expand the truth set.

## In Scope

- Brand narrative for BRIK-64, Digital Circuitality, the platform, and the
  registry.
- Audience-specific framing for developers, technical leaders, researchers, and
  enterprise buyers.
- Explanations of product surfaces that already exist in this repository or are
  otherwise documented as active work.
- Canonical logo usage and brand asset references.
- Public-facing navigation, page IA, headlines, CTAs, and supporting copy.

## Out Of Scope

- New formal or mathematical guarantees not backed by engineering evidence.
- Customer, partner, or adoption claims without documented permission or source.
- Compliance or regulatory assertions that imply certification beyond the
  available proof.
- Product roadmap promises phrased as current capability.
- Competitive claims that require market proof this repo does not contain.

## Claim Classes

### 1. Safe To State Directly

These can be stated directly when they remain aligned with the current product
and docs:

- BRIK-64 is presented as a platform for verified software.
- BRIK-64 uses Digital Circuitality and PCD as core concepts in its public
  narrative.
- The website contains public pages for foundations, SDKs, demos, news, and
  related product surfaces present in `src/app/`.
- Canonical logo variants are defined in `docs/BRAND-LOGO-ASSETS.md`.

### 2. Must Be Qualified

These require explicit wording discipline and should be traceable to current
evidence:

- Counts, thresholds, or inventory claims such as number of operations,
  circuits, tests, targets, or proofs.
- Statements about certification, registry size, or live badge behavior.
- Claims about enterprise readiness, compliance value, or safety-critical use.
- References to AI agent workflows, MCP integrations, or supported developer
  environments.

Preferred pattern: state the claim only when the number or capability is
documented elsewhere, and avoid upgrading historical research notes into present
tense fact without verification.

### 3. Blocked Without Evidence

Do not publish these without a supporting source added to the repo:

- Named customer wins, deployments, or production usage.
- Market leadership claims such as "first", "only", or "world-leading".
- Legal, audit, or certification status claims.
- Revenue, adoption, conversion, or waitlist numbers.

## Source Hierarchy

When copy conflicts, prefer sources in this order:

1. current engineering reality and verifiable product surfaces
2. `docs/content-marketing-scope.md`
3. `docs/BRAND-LOGO-ASSETS.md`
4. `docs/perspectives/03-CMO.md`
5. research snapshots and extracted historical content

Research documents are useful context, but they are not self-validating proof.

## Required Checks Before Publishing Messaging Changes

- Confirm the claim is in scope.
- Confirm referenced pages, assets, and commands actually exist.
- Check whether the statement is direct, qualified, or blocked.
- If the change alters narrative boundaries, update this document in the same
  patch.

## Minimum Public Documentation Set

The base documentation expected for this repo is:

- `AGENTS.md`
- `README.md`
- `docs/BRAND-LOGO-ASSETS.md`
- `docs/content-marketing-scope.md`

This set should remain present and internally consistent before broader content
or campaign work proceeds.
