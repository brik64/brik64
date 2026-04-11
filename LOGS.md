# Iteration Logs

## Iteration 1 — Homepage editorial refactor

### Inputs reviewed
- `/Users/carlosjperez/Downloads/plan_maestro_de_refactorizacion_web_brik_64.md`
- `docs/content-marketing-scope.md`
- `docs/BRAND-LOGO-ASSETS.md`
- `docs/perspectives/03-CMO.md`
- `docs/research/brik64-content.md`

### Implementation
- Rewrote `HeroSection` to lead with bounded software infrastructure instead of AI-first positioning.
- Reframed `ProblemSection`, `PCDSection`, `WorkflowSection`, `PlatformSection`, `AINativeSection`, and `CTASection`.
- Added `HomeClaimBoundariesSection` and inserted it into the homepage sequence.
- Reduced homepage composition so it now behaves like a thesis map instead of a feature catalog.
- Updated `HomeProofArtifacts` and `HomeProofArtifacts.client` so workflow, blueprint, platform, and AI artifacts match the new story.
- Updated `layout` metadata, `StructuredData`, and key `Navbar` descriptions to remove conflicting slogans from the homepage shell.

### Verification
- New/updated adversarial suites:
  - `tests/home-visual-semantics.test.ts`
  - `tests/home-editorial-refactor.test.ts`
  - `tests/buyer-persona-fit.test.ts`
  - `tests/home-polish-audit.test.ts`
  - `tests/public-editorial-qualified-claims.test.ts`
  - `tests/public-runtime-copy-guard.test.ts`
- `npx vitest run tests/home-visual-semantics.test.ts tests/home-polish-audit.test.ts tests/buyer-persona-fit.test.ts tests/home-editorial-refactor.test.ts tests/public-editorial-qualified-claims.test.ts tests/public-runtime-copy-guard.test.ts`
- `npm run lint`
- `npm run build`
- Runtime HTML check against the live dev server on `http://127.0.0.1:3001/`

### Break attempts
1. Checked the served homepage HTML for banned legacy strings:
   - `the first programming language designed for AI`
   - `Teach your agent PCD`
   - `CAD for software`
   - `Tell your AI what to build`
   - `Start building with`
   Result: none found.
2. Checked the served homepage HTML for required new anchors:
   - `BOUNDED SOFTWARE FOR THE AI ERA`
   - `Model logic once.`
   - `What BRIK64 claims, and what it does not.`
   Result: all found.
3. Rewrote the pre-existing homepage tests that were still asserting the old slogans, then reran them after the patch to confirm the new narrative is the enforced baseline.

## Iteration 2 — Hero revert

### Scope
- Reverted only `src/components/HeroSection.tsx` to the previous hero version.
- Left the rest of the homepage refactor intact.

### Verification
- `npx vitest run tests/home-visual-semantics.test.ts tests/home-polish-audit.test.ts tests/buyer-persona-fit.test.ts tests/home-editorial-refactor.test.ts tests/public-runtime-copy-guard.test.ts`
- Runtime HTML check against `http://127.0.0.1:3001/`

### Break attempts
1. Confirmed the served HTML contains:
   - `THE AI-NATIVE SYNTHETIC LANGUAGE`
   - `BRIK64 is the first programming language`
   - `Compile · Certify · Publish`
2. Confirmed the served HTML no longer contains the reverted hero refactor strings:
   - `BOUNDED SOFTWARE FOR THE AI ERA`
   - `Model logic once.`
   - `Review it as a blueprint.`
   - `Read guarantee boundaries`
