# BRIK-64 Web v5 — Plan de Implementacion Completa

> Fecha: 2026-03-27
> Fuentes: brik64web (produccion), docs.brik64.dev, CMO playbook
> Framework: Next.js 16, App Router, Tailwind v4, shadcn/ui

---

## Estado Actual

### Ya implementado (landing page):
- [x] Navbar con mega dropdowns (Product + Industries)
- [x] HeroSection (grid background + terminal interactivo)
- [x] TrustedBySection (8 logos)
- [x] ProblemSection
- [x] PCDSection (blueprint + code tabs)
- [x] PlatformSection (mockup laboratorio)
- [x] WorldModelsSection (4 cards + 16 familias acordeon)
- [x] LanguagesSection (source → PCD → target)
- [x] WorkflowSection (Connect → Certify → Publish)
- [x] IntegrationsSection (GitHub flow)
- [x] EditorsSection (6 IDEs)
- [x] EnterpriseSection (6 features)
- [x] AINativeSection
- [x] CTASection (dual path + resources)
- [x] Footer

### Falta implementar:
- [ ] 15+ paginas internas (Product, Industries, Blog, etc.)
- [ ] 25 blog posts
- [ ] 6 news articles
- [ ] Routing completo (App Router)
- [ ] Assets (copiar SVGs del repo produccion)

---

## Fase 1: Infraestructura y Assets

### 1.1 Copiar assets graficos
```
brik64web/public/brands/*.svg → brik64web-v5/public/brands/
```
55 SVGs: logos de empresas, lenguajes, editores, tools.

### 1.2 Layout compartido
- `src/app/layout.tsx` — ya existe, verificar meta tags
- Crear layout wrapper para paginas internas con sidebar/breadcrumbs

### 1.3 Componentes compartidos
- PageHeader — titulo + subtitulo + breadcrumb para paginas internas
- TerminalBlock — bloque de codigo terminal reutilizable
- FeatureCard — card con icono + titulo + descripcion
- MetricCard — stat + label
- SectionCounter — [0N] · TITLE pattern

---

## Fase 2: Paginas de Producto (dropdown "Product")

### 2.1 `/cli` — CLI Page
**Fuente:** src/pages/CLIPage.tsx
**Contenido:**
- Hero: "One binary. Every guarantee."
- Install: brew, cargo, npm, curl
- Commands: compile, lift, transpile, check, publish, connect, lsp, mcp-server
- Features: 708KB binary, 0 dependencies, 14 targets
- Terminal demos interactivos

### 2.2 `/platform` — Platform Page
**Fuente:** src/pages/PlatformPage.tsx + PlatformHero/Cards/Preview/Pipeline
**Contenido:**
- Hero: "Your circuit laboratory"
- 4 pilares: Personal Library, Public Registry, Visual Composition, Certification
- Pipeline visual: Push → Lift → Certify → Publish
- Preview mockup del laboratorio (expandido)
- Pricing teaser

### 2.3 `/registry` — Registry Page
**Fuente:** Derivado de PlatformSection + contenido CMO
**Contenido:**
- Hero: "The npm for verified software"
- Search demo interactivo
- Circuitos destacados
- Stats del registry
- Publishing workflow
- Badge embed guide

Semantic rule for copy and IA:
- `/pcd` explains individual circuit blueprints.
- `/polymers` explains reusable compositions of multiple PCDs.
- `/registry` publishes and discovers PCDs, polymers, hashes and evidence.
- Do not use PCD and polymer as synonyms.

### 2.4 `/lifter` — Lifter Page
**Fuente:** src/pages/LifterPage.tsx + LifterSection
**Contenido:**
- Hero: "Reverse-compile anything"
- 10 source languages con logos
- Demo: JS → PCD → verified
- COBOL migration story
- Technical details: AST extraction, monomer mapping

### 2.5 `/transpiler` — Transpiler Page
**Fuente:** src/pages/TranspilerPage.tsx
**Contenido:**
- Hero: "140 certified paths"
- Matrix visual (10 × 14)
- Translation validation
- Side-by-side demos
- "Through PCD, not direct"

### 2.6 `/sdks` — SDKs Page
**Fuente:** Componentes de CLI/Features
**Contenido:**
- Rust: `brik64-core` crate
- JavaScript: `@brik64/core` npm
- Python: `brik64` pip
- Code examples para cada uno
- EVA algebra en cada lenguaje

### 2.7 `/bpu` — BPU Page
**Fuente:** docs/theory/bpu + blog/BPUHardwareThatSaysNo
**Contenido:**
- Hero: "Hardware that says no"
- Architecture diagram
- 64 monomer gates
- EVA Router
- TCE Unit
- BLOCK signal
- Roadmap to silicon

### 2.8 `/pcd` — PCD Format Page
**Fuente:** docs/pcd/* + blog/FirstPCDCircuit + FullSpectrumPCD
**Contenido:**
- Hero: "The blueprint standard"
- Syntax overview
- 128 monomers reference
- EVA composition
- Examples gallery
- Link to full docs

---

## Fase 3: Paginas de Industria (dropdown "Industries")

### 3.1 `/industries/ai` — AI & Machine Learning
**Contenido:**
- Policy circuits como guardrails
- AI genera PCD → compilador certifica
- MCP integration
- Claude Code skills
- "The first language designed for AI"
- Examples: robot arm constraints, drone speed limits

### 3.2 `/industries/science` — Science & Research
**Contenido:**
- Algoritmos cientificos verificados
- Gestion de dominios (medida, precision, error)
- Reproducibilidad computacional
- PCD como publicacion formal de algoritmos
- Closure domains para unidades fisicas
- Example: simulacion con error bounds

### 3.3 `/industries/engineering` — Engineering
**Contenido:**
- Standards compliance (ISO, IEC)
- Certified components para sistemas criticos
- Formal verification accesible
- Bridge/structure analogy
- Compound effect: components verificados como beams probados

### 3.4 `/industries/aerospace` — Aerospace & Defense
**Contenido:**
- DO-178C compliance path
- Mission-critical certification
- BPU for avionics
- "Hardware that physically cannot execute uncertified code"
- Lockheed Martin / NASA / SpaceX relevance

### 3.5 `/industries/finance` — Banking & Finance
**Contenido:**
- SOC2/PCI-DSS evidence automatica
- Trading system verification
- Domain constraints: money never negative, rates bounded
- Audit trail inmutable
- Certification badges para compliance

### 3.6 `/industries/healthcare` — Healthcare
**Contenido:**
- HIPAA compliance
- Medical device software (IEC 62304)
- Drug dosage domain constraints
- Patient data flow verification
- "If the circuit doesn't close, the device doesn't ship"

### 3.7 `/industries/automotive` — Automotive
**Contenido:**
- ISO 26262 certification
- ASIL levels mapping
- Autonomous vehicle safety
- Sensor fusion verification
- "Speed ∈ [0, 900] — the compiler enforces physics"

### 3.8 `/industries/government` — Government
**Contenido:**
- FedRAMP readiness
- Classified system verification
- Zero-trust code
- Audit + transparency
- Open source + auditable proofs

---

## Fase 4: Paginas de Contenido

### 4.1 `/blog` — Blog Index
**Fuente:** src/pages/BlogList.tsx + blog-data.ts
- Grid de 25 posts con title, date, excerpt, tag
- Filtros por categoria
- Pagination o infinite scroll

### 4.2 `/blog/[slug]` — Blog Posts (25 posts)
**Fuente:** src/pages/blog/*.tsx
- Cada post como pagina individual
- MDX o componente directo
- Shared layout: title, date, back link, content

### 4.3 `/news` — News Index
**Fuente:** src/pages/NewsIndex.tsx
- 6 news articles en grid

### 4.4 `/news/[slug]` — News Articles (6 articles)
**Fuente:** src/pages/news/*.tsx

### 4.5 `/pricing` — Pricing Page
**Fuente:** src/pages/PricingPage.tsx + PricingSection
- Tiers: Free / Pro / Enterprise
- Feature comparison table
- FAQ de pricing

### 4.6 `/enterprise` — Enterprise Page
**Fuente:** src/pages/EnterprisePage.tsx
- CI/CD, Compliance, Badges, SSO, Audit, SLA
- Contact form
- Case studies placeholder

### 4.7 `/foundations` — Foundations/Theory Page
**Fuente:** docs/theory/* + brik64-content.md (/foundations)
- Digital Circuitality theory
- EVA Algebra
- CMF (Φ_c, δ, V(C))
- Kish-Brillouin distinction
- Papers I-IV

### 4.8 `/features` — Features Overview
**Fuente:** src/pages/FeaturesPage.tsx
- All features in organized sections

### 4.9 `/investors` — Investors Page
**Fuente:** src/pages/InvestorsPage.tsx
- Market opportunity
- Business model
- Traction metrics
- Team/advisors

### 4.10 `/faq` — FAQ Page
**Fuente:** src/pages/FAQPage.tsx
- Accordion FAQ items

### 4.11 `/contact` — Contact Page
**Fuente:** src/pages/ContactPage.tsx
- Contact form
- Email, Discord, GitHub links

### 4.12 `/legal` — Legal Page
**Fuente:** src/pages/LegalPage.tsx
- Terms of service
- Privacy policy

### 4.13 `/login` — Login Page
- Email + password form
- OAuth buttons (GitHub, Google)
- Sign up link

### 4.14 `/docs` — Docs Redirect
- Redirect to docs.brik64.dev

---

## Fase 5: Blog Content Migration

25 blog posts a migrar:
1. WhatIsDigitalCircuitality
2. FirstPCDCircuit
3. EVAAlgebraDeepDive
4. UniversalTranspiler
5. ErrorElimination
6. COBOLMigrationRevolution
7. BPUHardwareThatSaysNo
8. WhyYourAINeedsBlueprints
9. PCDForAIAgents
10. KishFerryDistinction
11. ProfKishNoiseLogic
12. AISafetyPolicyCircuits
13. AIGuardrailsForRobots
14. ReverseCompileAnything
15. JavaScriptToRust3Commands
16. VerificationGap
17. CleanCodeFromBlueprints
18. TranslationValidation
19. BuildingWithSDKs
20. WhatArtificialIntuitionCantVerify
21. YourCodeExistsNowVerify
22. FullSpectrumPCD
23. PrecisionAsDomain
24. AdversarialCorpus
25. APIAndMCP

Formato: MDX files en `src/content/blog/` con frontmatter.

---

## Orden de Ejecucion

### Wave 1 (paralelo — estructura base):
- Copiar assets SVG
- Crear componentes compartidos (PageHeader, TerminalBlock, FeatureCard)
- Crear layouts compartidos

### Wave 2 (paralelo — paginas Product):
- /cli, /platform, /registry, /lifter, /transpiler, /sdks, /bpu, /pcd

### Wave 3 (paralelo — paginas Industries):
- /industries/ai, /industries/science, /industries/engineering, /industries/aerospace
- /industries/finance, /industries/healthcare, /industries/automotive, /industries/government

### Wave 4 (paralelo — content pages):
- /pricing, /enterprise, /foundations, /features, /investors
- /faq, /contact, /legal, /login, /docs

### Wave 5 (blog migration):
- Blog data + MDX setup
- 25 blog posts
- 6 news articles
- Blog/news index pages

### Wave 6 (polish):
- SEO meta tags
- OG images
- Favicon
- 404 page
- Responsive testing
- Performance audit

---

## Metricas de Completitud

| Elemento | Produccion | v5 Target |
|----------|-----------|-----------|
| Paginas | 30 | 30+ |
| Blog posts | 25 | 25 |
| News articles | 6 | 6 |
| SVG assets | 55 | 55 |
| Routes | 30 | 30+ |
| Industries | 0 (nuevo) | 8 |
# Circuit Topology Public Messaging

- Public copy guide: `docs/CIRCUIT_TOPOLOGY_PUBLIC_MESSAGING.md`
