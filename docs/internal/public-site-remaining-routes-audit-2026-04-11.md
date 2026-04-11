# Remaining Public Routes Audit (2026-04-11)

## Scope

This pass audited routes previously outside the main public cleanup scope:

- Utility routes: `/faq`, `/docs`, `/playground`, `/changelog`, `/login`, `/signup`
- Direct routes: `/cli`, `/lifter`, `/languages/[slug]`
- Use-case routes: `/use-cases/ai-safety`, `/use-cases/ci-cd-integration`, `/use-cases/cobol-migration`, `/use-cases/formal-verification`, `/use-cases/universal-transpilation`
- Additional runtime checks: `/transpiler`, `/platform`, `/registry`, `/sdks`, `/news`, `/news/launch`, `/industries/*`

## Initial findings

1. Meta-copy leaks in runtime
- `This page should` in `/changelog`, `/faq`, `/signup`, and use-case pages.
- `docs rail` visible in `/docs`.
- `utility surface` visible in `/faq` and `/playground`.
- `The page should` visible in `/cli` and `/languages/[slug]`.

2. Claim calibration issue
- `100% liftability` visible in `/lifter` hero.

## Corrections applied

1. Utility dataset cleanup
- Rewrote utility route copy to remove meta/system nouns and page-self-description patterns.
- Replaced wording with route-first operator language and concrete next actions.

2. Use-case thesis cleanup
- Rewrote `buildUseCase` defaults and all five use-case records to remove page-meta language.
- Kept domain framing and explicit claim boundaries.

3. Direct page cleanup
- `/cli`: removed page-self-describing wording and route/surface labels.
- `/languages/[slug]`: removed page-meta prompts from exchange and docs sections.
- `/lifter`: replaced `100% liftability` wording with benchmark-qualified phrasing and removed blanket coverage language.

4. Regression guard
- Added `tests/remaining-routes-editorial-audit.test.ts` with source checks and optional runtime checks (`SITE_BASE_URL`).

## Validation

- `npx vitest run tests/remaining-routes-editorial-audit.test.ts tests/public-runtime-copy-guard.test.ts`
- `npm run lint` (warnings only, no errors)
- `npx vitest run` (full suite)
- `npm run build`
- Runtime phrase-scan across remaining routes (no blocked phrase hits after edits)

## Residual risk

1. This audit does not fully rewrite long-form blog article bodies (`src/lib/blog-content.tsx`) in this pass.
2. Phrase-based guards reduce regressions but do not fully validate semantic truthfulness of every claim.
3. Runtime checks depend on route sampling and configured base URL.
