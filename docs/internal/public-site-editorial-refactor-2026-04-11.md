# Public Site Editorial Refactor — 2026-04-11

## Scope
- Utility direct routes: `/about`, `/pricing`, `/download`, `/contact`, `/legal`, `/investors`, `/shop`, `/faq`
- Utility wrappers: `/docs`, `/playground`, `/changelog`, `/login`, `/signup`
- Risk thesis routes: `/ai`, `/blockchain`, `/safety-critical`
- Direct technical routes: `/foundations`, `/bpu`, `/pcd`, `/lifter`, `/transpiler`, `/cli`
- Blog templates and blog seed corpus

## Objective
- Preserve semantic information while removing meta-copy and unsupported absolutist claims.
- Re-center public language for CTO/VP Engineering decision-makers with qualified evidence boundaries.

## Changes Applied
- Added editorial contracts and claim classes in `src/lib/public-site-editorial-contracts.ts`.
- Added no-loss baseline atoms in `tests/fixtures/public-content-atoms.json`.
- Updated `PageArchetypes` to avoid implicit visual/system labels and implicit proof badges.
- Rewrote high-risk copy in key direct pages (`about`, `pricing`, `download`, `faq`, `investors`, `enterprise`, `ai-agents`, `transpiler`, `bpu`, `legal`, `shop`).
- Refined risk/use-case wording in `src/lib/risk-page-data.ts` to remove system/meta vocabulary and keep claim boundaries explicit.

## Verification Additions
- Added adversarial tests for:
  - no-loss content preservation
  - qualified-claims enforcement
  - visual language guardrails
  - direct-product boundary discipline
  - blog editorial discipline
- Executed deliberate break attempts and confirmed expected test failures before revert:
  - reintroduced `The page should` in utility data -> runtime/source guard failed
  - reintroduced `No other compiler on earth` in `about` -> qualified-claims guard failed
  - reintroduced `100% liftability` in `lifter` -> remaining-routes audit failed
- Runtime copy guards validated with static export served locally via `SITE_BASE_URL=http://127.0.0.1:3011`.

## Residual Risk
- `src/lib/blog-content.tsx` long-form article bodies still contain historical rhetorical language; this file remains outside this closure step and should be audited in a dedicated pass.
- Some regulatory and commercial statements in legacy direct pages remain high-sensitivity and should be reviewed against legal/compliance sign-off before campaign publication.
