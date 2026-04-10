# BRIK-64 Design System v6

> Current canonical site grammar. Legacy v5 notes below are retained only as historical context.

## Current canonical site grammar

- Section headers are centered and use the official teal accent for the title.
- Home and internal product pages share the same header structure, differing only in content and density.
- Each section should have one protagonist artifact with header, status, payload, proof metadata, and scoped claim.
- CTA rows use one teal primary action, one muted secondary action, and external links with an arrow icon.
- Black oval CTA buttons, mixed title alignments, and generic card clouds without a protagonist object are treated as regressions.

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

> The notes below describe older implementation details and should not override the current site grammar.

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

### REGLA: Cards y contenedores tienen bordes cuadrados (sin rounded)
- Cards, secciones, contenedores, grids: **SIN `rounded-*`** (bordes cuadrados)
- Solo conservan rounded:
  - `rounded-xl` → SOLO en bloques de terminal/código (bg-[#0a0e14])
  - `rounded-md` → SOLO en botones de acción (CTA, submit)
  - `rounded-full` → SOLO en badges, pills, avatares, dots

### REGLA: Cards adyacentes usan border-separators, no gaps
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

Formato: `[0N] · TITLE`
```tsx
<p className="text-xs font-medium uppercase tracking-[2px] text-muted-foreground">
  [01] · THE PROBLEM
</p>
```

Solo en el landing page (home). Las páginas internas no usan counters numerados.

## 5. Secciones

### Landing (home):
```tsx
<section className="border-border border-t bg-background px-6 py-16 md:py-24">
```
- `border-t` para separar de la sección anterior
- `bg-background` sólido (para que el circuit grid no se vea a través)
- Padding vertical generoso (py-16 md:py-24)

### Páginas internas:
```tsx
<section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
```
- `max-w-7xl` + `border-x` para contener el ancho
- Sin bg-background (las internas no tienen circuit grid)

## 6. Headings (centrado)

### Regla: TODOS los section headings son centrados
```tsx
<h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
  Título
</h2>
<p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
  Subtítulo
</p>
```

### Excepción: layouts de 2 columnas (izq copy + der visual)
```tsx
<div className="grid md:grid-cols-2 gap-12">
  <div><!-- heading left-aligned --></div>
  <div><!-- visual/terminal --></div>
</div>
```

## 7. Botones

| Tipo | Clases |
|------|--------|
| Primary | `rounded-md bg-teal px-6 py-2.5 text-sm font-medium text-white` |
| Secondary | `rounded-md border border-teal px-5 py-2 text-sm font-medium text-teal` |
| Ghost | `text-sm text-muted-foreground hover:text-foreground` |
| Link | `text-sm font-medium text-teal + ArrowRight icon` |

### Regla: botones son `rounded-md` (NO `rounded-full`, NO `rounded-lg`)

## 8. Badges / Pills

```tsx
<span className="rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-teal">
  CERTIFIED
</span>
```
- `rounded-full` (es pill, no card)
- Text: `text-[10px]` o `text-xs`
- Tracking: `tracking-widest` o `tracking-wide`

## 9. Logos / Brand Images

- Trusted By: `opacity-40 grayscale`, hover: `opacity-70 grayscale-0`
- Editor logos: `h-8 w-8` con alt text
- Footer social icons: `h-4 w-4 opacity-50` inline con texto
- External link icon: `ExternalLink h-3 w-3` junto a links que salen del sitio

## 10. Circuit Grid (solo home)

- Canvas-based, fixed position, z-0
- Grid lines teal a baja opacidad
- Circuit traces con giros 90°
- Energy dots: sólidos teal (#00e5ff), r=3, sin blur
- Monomer nodes: white bg, gray border → invert a teal cuando energía pasa
- Secciones del landing: `bg-background` sólido (opacan la grid)
- Footer: sólido, z-10

## 11. Tipografía

| Elemento | Tamaño | Peso |
|----------|--------|------|
| Hero h1 | text-3xl sm:text-4xl lg:text-5xl | font-bold |
| Section h2 | text-2xl md:text-3xl | font-bold |
| Section subtitle | text-base md:text-lg | font-normal |
| Card title | text-sm | font-medium |
| Card description | text-xs | font-normal |
| Section counter | text-xs | font-medium uppercase tracking-[2px] |
| Terminal code | text-sm font-mono | — |

## 12. Spacing

| Contexto | Clase |
|----------|-------|
| Section padding vertical | py-16 md:py-24 |
| Section padding horizontal | px-6 md:px-12 lg:px-18 |
| Gap entre heading y content | mt-8 o mt-12 |
| Gap entre subtitle y heading | mt-3 o mt-4 |
| Counter a heading | mb-3 |

---

## Inconsistencias a corregir en páginas internas

### Alta prioridad:
1. **237 instancias de `rounded-lg/xl/2xl` en cards** → eliminar (bordes cuadrados)
2. **Terminales sin window dots** → añadir dots rojo/amarillo/verde
3. **Terminales con `bg-zinc-950`** → cambiar a `bg-[#0a0e14]`
4. **Botones con `rounded-lg`** → cambiar a `rounded-md`
5. **Cards con gap entre ellas** → usar border-separator pattern donde aplique

### Media prioridad:
6. **Headings no centrados** en algunas secciones internas
7. **Subtitles sin `mx-auto max-w-2xl text-center`**
8. **Links externos sin ExternalLink icon**

### Baja prioridad:
9. **Spacing inconsistente** (algunos py-12, otros py-20)
10. **Font sizes inconsistentes** en cards
