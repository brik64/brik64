# BRIK64 Platform Shadcn Reference

This directory is a non-importable reference snapshot copied from
`/Users/carlosjperez/Documents/GitHub/brik64-platform/frontend`.

Copied files:
- `components/*.tsx` from `frontend/src/components/ui`
- `config/components.platform.json` from `frontend/components.json`

Purpose:
- Preserve the BRIK64 platform Shadcn component vocabulary while `brik64.com`
  migrates to its own Shadcn v4 `base-nova` public-site library.
- Compare visual/system patterns without mixing runtime assumptions.

Do not import from this directory in application code. Runtime components for
`brik64.com` belong under `src/components/ui` or public-site wrappers built on
top of that library.
