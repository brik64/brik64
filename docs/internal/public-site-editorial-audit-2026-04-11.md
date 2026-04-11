# Public Site Editorial + Visual Grammar Audit (2026-04-11)

## Scope

This audit pass covered:

- Utility wrappers: `/about`, `/contact`, `/download`, `/pricing`, `/legal`, `/investors`, `/shop`
- Risk thesis pages: `/ai`, `/blockchain`, `/safety-critical`
- Migrated direct pages: `/compliance`, `/enterprise`, `/ai-agents`
- Direct product references: `/foundations`, `/bpu`, `/pcd`
- Blog surfaces and corpus: `/blog`, `/blog/[slug]`, `src/lib/blog-data.ts`

Out of scope for this pass:

- `/faq`, `/docs`, `/playground`, `/changelog`, `/news` and additional routes not listed above.

## Structural outcomes

1. Canonical wrappers no longer emit internal default labels/copy in public runtime when explicit metadata is not provided.
2. Utility/risk/company surfaces now support optional status metadata and avoid synthetic system badges by default.
3. Public wrappers and risk theses were rewritten to domain-led content (problem, workflow, claim boundary) instead of self-referential page/system copy.
4. Direct technical pages were recalibrated to qualified-evidence language and roadmap-scoped claims.
5. Blog index/article framing and post seeds were rewritten to remove blocked hype and absolute guarantees.

## Claim discipline outcomes

Blocked internal/meta nouns and system copy were removed from audited runtime surfaces, including:

- `Proof strip`
- `page surface`
- `utility surface`
- `risk evidence`
- `action rail`
- `docs rail`
- `The page should`
- `This page should`
- `Use this page`
- `promissory copy`

## Verification performed

- `npm run lint` (0 errors, warnings pre-existing in unrelated components)
- `npx vitest run` (1550 tests passing)
- `npm run build` (Next.js static generation succeeded)
- `npm run deploy` (Cloudflare Pages deployment succeeded)
- New adversarial guard suites were added for:
  - public wrapper editorial language
  - public wrapper visual grammar
  - risk thesis editorial language
  - direct product editorial discipline
  - blog editorial discipline
  - runtime copy guards

## Residual risk

1. Non-audited routes can still contain legacy wording patterns and should be covered in a dedicated pass.
2. Runtime guard checks are phrase-based and do not fully prove semantic quality.
3. Build and tests validate site behavior and copy guards, not formal verification of every factual claim.
