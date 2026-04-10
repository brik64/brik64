# Design System Rollout Plan

> Aplicar los patrones del landing a TODA la web (55+ páginas)
>
> Historical rollout notes. The current canonical site grammar now lives in the live design system page and the updated `docs/DESIGN-SYSTEM.md` front matter.

---

## Scope

237 instancias de bordes redondeados + terminales sin dots + headings descentrados.

## Estrategia: 3 waves paralelas

---

### Wave A — Global Find & Replace (mecánico, sin juicio)

**Archivos:** TODOS en `src/app/*/page.tsx` y `src/app/*/*/page.tsx`

#### A1. Cards: eliminar rounded de contenedores
```
rounded-lg border border-border → border border-border
rounded-xl border border-border → border border-border
rounded-2xl border border-border → border border-border
```
EXCEPTO: terminales (bg-[#0a0e14]) mantienen rounded-xl

#### A2. Botones: rounded-lg → rounded-md
```
rounded-lg bg-teal → rounded-md bg-teal
rounded-lg border border-teal → rounded-md border border-teal
```

#### A3. Terminal background normalizar
```
bg-zinc-950 → bg-[#0a0e14]
bg-[#111] → bg-[#0a0e14]
bg-black → bg-[#0a0e14]
```

#### A4. Terminal window dots
Buscar todos los terminales que NO tienen `ff5f57` y añadir la barra de dots.

**Páginas afectadas (estimadas):**
- /cli (5 terminales)
- /platform (2 terminales)
- /registry (2 terminales)
- /lifter (3 terminales)
- /transpiler (2 terminales)
- /sdks (3 terminales)
- /bpu (1 terminal)
- /pcd (5 terminales)
- /use-cases/* (5 terminales, 1 por página)
- /industries/* (8 terminales, 1 por página)
- /languages/* (2 terminales por página × 14 = 28)
- /ai-agents (3 terminales)
- /changelog, /pricing, /enterprise (3 terminales)

Total: ~70 terminales a auditar

---

### Wave B — Layout & Centering (requiere juicio)

#### B1. Headings centrados
Regla: TODOS los h2 de sección deben ser `text-center`
```
// ANTES
<h2 className="text-2xl font-bold">Título</h2>

// DESPUÉS
<h2 className="text-center text-2xl font-bold">Título</h2>
```

#### B2. Subtitles centrados
```
// ANTES
<p className="mt-4 text-muted-foreground">Sub</p>

// DESPUÉS
<p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">Sub</p>
```

#### B3. Card grids → border-separator pattern
Páginas con 4+ cards en grid que usan gap → convertir a border-based:

- /cli → stats cards, commands grid
- /platform → pillar cards, pipeline steps, capabilities
- /features → feature cards
- /sdks → SDK cards (pero son tabs, OK)
- /bpu → architecture cards, specs
- /enterprise → feature grid (ya tiene border pattern en landing)
- /pricing → tier cards (estos SÍ deben tener gap, son pricing)
- /industries/* → challenge cards, use case cards
- /use-cases/* → problem cards, result cards

**Excepciones (mantener gap):**
- Pricing tiers (necesitan separación visual para comparar)
- Editor cards (ya tienen border pattern)
- Blog post cards (grid con gap está bien)

#### B4. External link icons
Buscar todos `target="_blank"` que NO tienen ExternalLink icon → añadir.

---

### Wave C — Polish final

#### C1. Spacing normalización
- Secciones: `py-16 md:py-24` (no py-12, no py-20)
- Section padding horizontal: `px-6 md:px-12 lg:px-18`

#### C2. Font consistency
- Card titles: `text-sm font-medium` (no text-base)
- Card descriptions: `text-xs text-muted-foreground` (no text-sm)

#### C3. Button consistency
- Primary CTA: `rounded-md bg-teal px-6 py-2.5 text-sm font-medium text-white`
- No `rounded-full` buttons (excepto el hero email)

---

## Orden de ejecución

1. **Wave A** (20 min) — sed/grep batch replacements across all files
2. **Wave B** (40 min) — per-file layout fixes with subagents
3. **Wave C** (10 min) — final polish sweep
4. **Verify** — `npm run build` + visual spot-check

## Archivos a procesar (55+)

### Product pages (8):
cli, platform, registry, lifter, transpiler, sdks, bpu, pcd

### Industry pages (8):
ai, science, engineering, aerospace, finance, healthcare, automotive, government

### Use case pages (5):
ai-safety, cobol-migration, universal-transpilation, formal-verification, ci-cd-integration

### Language pages (1 template, 14 instances):
[slug]/page.tsx

### Content pages (12):
pricing, enterprise, foundations, features, investors, faq, contact, legal, login, about, changelog, playground

### Blog/News (4 templates):
blog/page, blog/[slug]/page, news/page, news/[slug]/page

### Other:
ai-agents, not-found

**Total: ~40 unique files to process**
# Design System Rollout Notes

## PCD page migration

The `pcd` route is now treated as a canonical product page under the same site grammar used by the home and the newer product cluster pages.

### Replaced legacy structures

- Removed stacked `CopyableCode` blocks for syntax walkthroughs.
- Removed the old EVA algebra presentation based on three flat cards.
- Removed the raw monomer tables as the primary visual narrative.

### New surfaces

- `Format Surface`
  - Explains why PCD is a bounded format rather than an open syntax space.
  - Carries explicit metrics for certified core, contract surface, and export targets.
- `Syntax Workbench`
  - Keeps one active example selector.
  - Uses a left-side syntax explanation and a right-side proof/code panel.
- `Domain Surface`
  - Makes declared ranges the protagonist instead of a loose snippet.
  - Ties domains to explicit closure consequences.
- `MonomerCatalogSurface`
  - Preserves `BlueprintHubArtifact` and `MonomerFamilyBoard`.
  - Splits core and extended monomers into separate surfaces with explicit state.
- `EvaAlgebraArtifact`
  - Presents EVA as one composition artifact.
  - Uses metrics, flow nodes, evidence reading, and a compact PCD sketch.

### Regression rules

- Do not reintroduce `CopyableCode` for PCD syntax walkthroughs or domain explanation.
- Do not render EVA as a plain `evaOps.map(...)` grid again.
- Keep section headers centered and teal.
- Keep the active code/example view centered and attached to a single proof panel.
