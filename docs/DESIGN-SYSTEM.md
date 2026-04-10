# BRIK-64 Design System v6

> Current canonical site grammar. Legacy v5 notes below are retained only as historical context.

## Current canonical site grammar

- Section headers are centered and use the official teal accent for the title.
- Home and internal product pages share the same header structure, differing only in content and density.
- Each section should have one protagonist artifact with header, status, payload, proof metadata, and scoped claim.
- Supporting payload blocks inside an `ArtifactFrame` may use soft rounded corners when they are clearly subordinate to the protagonist surface.
- CTA rows use one teal primary action, one muted secondary action, and external links with an arrow icon.
- Black oval CTA buttons, mixed title alignments, and generic card clouds without a protagonist object are treated as regressions.
- Resource shelves without a clear protagonist surface, purely typographic audience clouds, and disconnected evidence grids are also regressions.

### Product page canon — PCD

- `pcd` now uses four named page-level artifacts:
  - `Format Surface`
  - `Syntax Workbench`
  - `Domain Surface`
  - `EvaAlgebraArtifact`
- Syntax examples are no longer stacked as disconnected terminal/code boxes. They live inside a centered workbench with one active proof panel.
- Domain explanation is no longer a loose code snippet plus four cards. It is a bounded surface with metrics, one domain code panel, and explicit closure consequences.
- EVA algebra is no longer three flat cards. It is a single composition artifact with metrics, flow nodes, evidence reading, and one PCD sketch.
- The monomer catalog is split into two surfaces:
  - `Core Monomers` with explicit certified state
  - `Extended Monomers` with explicit contract-bounded state

### Audience calibration

- Primary buyer persona: `Staff / Principal Engineer` or `Platform Lead`.
- The home can keep the AI hook, but the supporting copy must quickly move to structure, traceability, deterministic behavior, and explicit scope.
- The body of the site should prove fit with real delivery paths: `CLI -> PCD -> platform -> registry -> proof`.
- Marketing language is acceptable in the hero and the first lead section, but the surrounding sections must anchor it in evidence, bounded claims, and operator-friendly surfaces.
- Sections that read as generic feature clouds, ornamental CTA treatments, or unbounded claims are regressions even when they look visually polished.

> The notes below describe older implementation details and should not override the current site grammar. Where those notes conflict with the canon above, the canon above wins.

---

## 1. Colores

| Token | Valor | Uso |
|-------|-------|-----|
| teal (primary) | #00b8d4 | Accent, CTAs, links, terminal prompts |
| teal-hover | #00e5ff | Hover states |
| border | var(--border) | Borders de secciones y cards |
| background | white | Fondo de secciones y cards |
| foreground | dark text | Body text |
| muted-foreground | gray | Subtitles, descriptions |
| terminal-bg | #0a0e14 | Fondo de bloques de código/terminal |

## 2. Bordes y Esquinas

### REGLA LEGACY: Cards y contenedores tienen bordes cuadrados (sin rounded)
- Cards, secciones, contenedores, grids: **SIN `rounded-*`** (bordes cuadrados)
- Solo conservan rounded:
  - `rounded-xl` → SOLO en bloques de terminal/código (bg-[#0a0e14])
  - `rounded-md` → SOLO en botones de acción (CTA, submit)
  - `rounded-full` → SOLO en badges, pills, avatares, dots

### REGLA LEGACY: Cards adyacentes usan border-separators, no gaps
En lugar de `gap-4` entre cards, usar border-based grid:
```tsx
<div className="grid grid-cols-2 border border-border">
  <div className="border-b border-r border-border p-6">Card 1</div>
  <div className="border-b border-border p-6">Card 2</div>
  <div className="border-r border-border p-6">Card 3</div>
  <div className="p-6">Card 4</div>
</div>
```

## 3. Terminal Blocks

### Anatomía de un bloque de terminal:
```tsx
<div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
  {/* Window dots — SIEMPRE presentes */}
  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    <span className="ml-2 font-mono text-xs text-white/30">title</span>
  </div>
  {/* Content */}
  <pre className="p-5 font-mono text-sm text-zinc-300">{code}</pre>
</div>
```

### Reglas:
1. **Siempre** `rounded-xl` (es la ÚNICA excepción a bordes cuadrados)
2. **Siempre** window dots (rojo/amarillo/verde) en la barra superior
3. **Siempre** `bg-[#0a0e14]` (no bg-zinc-950 ni bg-black)
4. Prompt: `<span className="text-teal">$</span>` seguido del comando
5. Success output: `text-emerald-400`
6. Muted output: `text-zinc-400`

## 4. Section Counters
--- (truncated for brevity in common sections)
---
