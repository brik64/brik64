# brik64.com

Public website repository for BRIK-64. This repo contains the marketing site,
brand-facing content surfaces, and the supporting documentation that constrains
what the site is allowed to claim.

The site is not the source of truth for formal semantics, compiler behavior, or
certification guarantees. Those claims must stay aligned with the engineering
repositories and the evidence they expose. This repo owns presentation,
navigation, brand assets, and audience-specific framing without inventing new
technical guarantees.

## Repository Role

- Publish the external narrative for BRIK-64 across landing pages and content
  surfaces.
- Maintain canonical website brand assets and their runtime exports.
- Keep marketing copy bounded by a documented truth set.
- Provide a stable public shell for product, platform, and registry messaging.

## Core Documentation

- `AGENTS.md` - repo-specific operating rules for agents editing the website.
- `docs/content-marketing-scope.md` - allowed surfaces, audience boundaries, and
  claim discipline for public messaging.
- `docs/BRAND-LOGO-ASSETS.md` - canonical logo variants, classification, and
  runtime asset mapping.
- `docs/perspectives/03-CMO.md` - current communication thesis and go-to-market
  framing.
- `docs/research/brik64-content.md` - extracted historical site content used as
  reference material, not as an automatic truth source.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Wrangler Pages deploy target

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npx vitest run
npm run deploy
```

## Editing Rules

- Do not add public claims that lack a traceable evidence path.
- When copy changes affect positioning or scope, update
  `docs/content-marketing-scope.md` in the same pass.
- When logo usage changes, update `docs/BRAND-LOGO-ASSETS.md` in the same pass.
- Treat screenshots, extracted copy, and inspiration documents as references,
  not authority.
- Preserve existing user changes outside the documentation scope you are
  touching.

## Validation Expectations

For copy-only changes, verify at least:

- the modified Markdown files exist at the documented paths
- referenced commands and files are real
- no new claim contradicts the documented scope note

For site code changes, also run the relevant lint, build, and targeted tests.
