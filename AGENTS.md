<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. Read the relevant guide in
`node_modules/next/dist/docs/` before writing code that depends on framework
behavior.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — brik64.com

## What This Repo Is

`brik64.com` is the public website repository for BRIK-64. It exists to present
the platform, registry, and brand narrative with discipline. It is not the
place to invent formal guarantees, redefine compiler semantics, or make
unverified certification claims.

## Mission

Strengthen the public surface of BRIK-64 without creating semantic drift between
marketing copy and the underlying system reality.

## Operating Principles

- Treat public messaging as a constrained interface to a formal system.
- Prefer explicit, supportable statements over hype.
- Preserve alignment between website copy, brand assets, and documented scope.
- Keep diffs narrow, reviewable, and evidence-backed.

## Required Sources Before Editing Claims

Check the relevant documents before changing copy that affects positioning:

- `docs/content-marketing-scope.md`
- `docs/BRAND-LOGO-ASSETS.md`
- `docs/perspectives/03-CMO.md`
- `docs/research/brik64-content.md`

If a claim depends on technical guarantees, trace it to the engineering source
of truth before publishing it here.

## Commands

- `npm run dev` — start local development
- `npm run build` — production build check
- `npm run lint` — static linting
- `npx vitest run` — test suite
- `npm run deploy` — build and deploy to Wrangler Pages target

## Editing Rules

- Do not replace precise claims with vague superlatives.
- Do not introduce customer, partner, or compliance claims without evidence in
  the repo or an explicitly linked source.
- Update the governing Markdown doc when you change scope, brand usage, or the
  truth boundary.
- Avoid touching unrelated application code when the task is documentation-only.
- Respect user changes already present in the worktree.

## Validation Policy

- Documentation changes: verify files, paths, links, and command references.
- Copy changes with behavioral impact: also verify the affected pages render and
  the relevant tests still pass.
- Do not claim that the site is aligned unless you checked the specific
  documents and surfaces you edited.
