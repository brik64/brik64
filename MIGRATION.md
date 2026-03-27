# Migration Guide: brik64web → brik64web-v2

## Source repo
- **Actual:** `/Users/carlosjperez/Documents/GitHub/brik64web` (React + Vite)
- **Deploy:** Cloudflare Pages → brik64.com
- **Stack:** React 18 + Vite + Tailwind (v3, HSL tokens)

## Target (este repo)
- **Stack:** Next.js 16 + Tailwind v4 + shadcn/ui
- **Design system:** PlayerZero layout patterns + colores de brik64.com/design-system
- **Deploy:** Cloudflare Pages (mismo) → brik64.com (reemplazo)

---

## Inventario de páginas existentes

| Página | Componente actual | Prioridad | Notas |
|--------|-----------------|-----------|-------|
| `/` | `Index.tsx` | 🔴 Alta | Landing principal — reconstruir primero |
| `/platform` | `LandingPlatform.tsx` / `PlatformPage.tsx` | 🔴 Alta | Plataforma BRIK-64 |
| `/pricing` | `PricingPage.tsx` | 🔴 Alta | Planes y precios |
| `/features` | `FeaturesPage.tsx` | 🟡 Media | Features por sección |
| `/docs` | `DocsPage.tsx` | 🟡 Media | Documentación |
| `/cli` | `CLIPage.tsx` | 🟡 Media | CLI brikc |
| `/languages` | `LanguagesPage.tsx` | 🟡 Media | Soporte multi-lenguaje |
| `/enterprise` | `EnterprisePage.tsx` | 🟡 Media | Versión enterprise |
| `/faq` | `FAQPage.tsx` | 🟢 Baja | FAQ — usar patrón Firecrawl |
| `/ai-agents` | `AIAgentsPage.tsx` | 🟢 Baja | Agentes IA |
| `/export` | `ExportPage.tsx` | 🟢 Baja | Exportación |
| `/contact` | `ContactPage.tsx` | 🟢 Baja | Contacto |
| `/blog` | `BlogList.tsx` | 🟢 Baja | Lista de artículos |
| `/design-system` | `DesignSystem.tsx` | 🟢 Baja | Mantener referencia |
| `/legal` | `LegalPage.tsx` | 🟢 Baja | Términos / privacidad |

## Inventario de secciones reutilizables

| Sección | Componente actual | Equivalente nuevo |
|---------|-----------------|------------------|
| Hero principal | `HeroSection.tsx` | → nuevo `HeroSection.tsx` (patrón PZ) |
| Grid de circuito | `CircuitGridBackground.tsx` | → mantener / adaptar a SVG |
| Monomers (64 core) | `CoreMonomersSection.tsx` | → nuevo, adaptar a cards teal |
| Monomers extended | `ExtendedMonomersSection.tsx` | → nuevo |
| Pricing | `PricingSection.tsx` | → usar patrón Firecrawl |
| FAQ | `FAQSection.tsx` | → usar patrón Firecrawl |
| Footer | `Footer.tsx` | → nuevo (patrón PZ) |
| Navbar | `Navbar.tsx` | → nuevo Header (patrón PZ) |
| Blog | `BlogSection.tsx` | → HighlightsSection (patrón PZ) |
| Integrations | `IntegrationsSection.tsx` | → LogoCloud pattern |
| Languages | `LanguagesSection.tsx` | → cards grid |
| Certification | `CertificationSection.tsx` | → stats cards patrón PZ |

## Plan de construcción

### Fase 1 — Fundación (este sprint)
- [x] Scaffold Next.js + tokens BRIK-64
- [ ] `Navbar.tsx` — adaptar Header de PlayerZero, teal accent
- [ ] `Footer.tsx` — adaptar Footer de PlayerZero
- [ ] `HeroSection.tsx` — headline + CTA teal + grid circuito

### Fase 2 — Páginas core
- [ ] Landing `/` — Hero + Features + Stats + CTA
- [ ] `/platform` — World model equivalente BRIK-64
- [ ] `/pricing` — Planes (patrón Firecrawl)

### Fase 3 — Contenido
- [ ] `/docs` — Documentación (Next.js MDX o link a docs.brik64.com)
- [ ] `/blog` — Lista + artículos
- [ ] `/faq` — FAQ accordion

### Fase 4 — Sub-páginas
- [ ] `/cli`, `/languages`, `/enterprise`, `/export`

## Contenido a migrar (verbatim)
- Todos los textos de `Index.tsx` (headings, subheadlines, CTAs)
- Lista de 64 monomers de `CoreMonomersSection.tsx`
- Lista de 64 extended de `ExtendedMonomersSection.tsx`
- Pricing tiers de `PricingSection.tsx`
- FAQ items de `FAQPage.tsx`
- Footer links de `Footer.tsx`

## Assets a migrar
```bash
# Logos, icons, images de brik64web/public/
cp -r /Users/carlosjperez/Documents/GitHub/brik64web/public/ ./public/
```
