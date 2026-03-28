# BRIK64 Web v4 — Design System & Assets Reference

Generated: 2026-03-27

---

## 1. Route Structure (App.tsx)

| Path | Component | Loading |
|------|-----------|---------|
| `/` | Index | Eager |
| `/design-system` | DesignSystem | Eager |
| `/features` | FeaturesPage | Lazy |
| `/pricing` | PricingPage | Lazy |
| `/enterprise` | EnterprisePage | Lazy |
| `/investors` | InvestorsPage | Lazy |
| `/login` | LoginPage | Lazy |
| `/cli` | CLIPage | Lazy |
| `/platform` | PlatformPage | Lazy |
| `/lifter` | LifterPage | Lazy |
| `/export` | ExportPage | Lazy |
| `/languages` | LanguagesPage | Lazy |
| `/ai-agents` | AIAgentsPage | Lazy |
| `/transpiler` | TranspilerPage | Lazy |
| `/docs` | DocsPage | Lazy |
| `/faq` | FAQPage | Lazy |
| `/contact` | ContactPage | Lazy |
| `/legal` | LegalPage | Lazy |
| `/blog` | BlogList | Lazy |
| `/blog/:slug` | BlogPost | Lazy |
| `/news` | NewsIndex | Lazy |
| `/news/launch` | Launch | Lazy |
| `/news/platform` | Platform | Lazy |
| `/news/documentation` | Documentation | Lazy |
| `/news/skills` | Skills | Lazy |
| `/news/open-source` | OpenSource | Lazy |
| `/news/community` | Community | Lazy |
| `/landing-b` | LandingB | Lazy |
| `/landing-platform` | LandingPlatform | Lazy |
| `*` | NotFound | Eager |

---

## 2. Tailwind Config & Design Tokens

### Fonts
- **Sans:** `"Inter", sans-serif`
- **Mono:** `"Geist Mono", "Courier New", monospace`

### CSS Custom Properties (HSL, no `hsl()` wrapper)

```
--background:          0 0% 4%          (#0a0a0a)
--foreground:          0 0% 98%
--card:                0 0% 6%
--card-foreground:     0 0% 98%
--popover:             0 0% 6%
--popover-foreground:  0 0% 98%
--primary:             187 100% 50%     (#00e5ff — teal/cyan)
--primary-foreground:  0 0% 4%
--secondary:           0 0% 12%
--secondary-foreground:0 0% 98%
--muted:               0 0% 12%
--muted-foreground:    0 0% 55%
--accent:              0 0% 12%
--accent-foreground:   0 0% 98%
--destructive:         0 62% 50%
--destructive-foreground: 0 0% 98%
--border:              0 0% 14%
--input:               0 0% 14%
--ring:                187 100% 50%
--radius:              0.75rem
```

### BRIK Brand Colors

| Token | HSL | Approx Hex |
|-------|-----|-----------|
| `--brik-teal` | 187 100% 50% | #00e5ff |
| `--brik-teal-light` | 187 80% 65% | ~#4dd9f0 |
| `--brik-dark` | 0 0% 4% | #0a0a0a |
| `--brik-cream` | 40 20% 95% | ~#f5f2ed |
| `--brik-gold` | 45 90% 55% | ~#e8b517 |
| `--brik-olive` | 80 30% 40% | ~#6b8539 |
| `--brik-red` | 0 70% 50% | ~#d92626 |

### Key Hardcoded Colors
- Navbar/Footer bg: `#0a0a0a`
- CTA button: `bg-[#00e5ff] text-black`
- Body gradient: `linear-gradient(180deg, #0a0a0a 0%, #0d1117 30%, #0a0a0a 60%, #0d1117 100%)`
- Text hierarchy: `text-white`, `text-white/60`, `text-white/40`, `text-white/30`, `text-white/20`, `text-white/15`
- Hover accent: `hover:text-[#00e5ff]`

### Border Radius
- `lg`: 0.75rem
- `md`: calc(0.75rem - 2px)
- `sm`: calc(0.75rem - 4px)

### Container
- Max: 1400px (`2xl`)
- Padding: 2rem
- Centered

### Animations (Tailwind)
- `accordion-down` / `accordion-up` (0.2s ease-out, Radix)

### Plugins
- `tailwindcss-animate`

---

## 3. All Public Assets

### Favicon
- `/favicon.svg`

### LLM Files
- `/llms.txt`
- `/llms-full.txt`

### Brand SVGs (`/brands/`)

**Companies/Services:**
amazon, anthropic, antigravity, apple, boeing, cloudflare, discord, docker, github, gitlab, google, jenkins, linkedin, lockheed-martin, medium, meta, microsoft, nasa, nvidia, palantir, spacex, stripe, tesla

**Languages:**
c, cobol, cplusplus, dart, go, java, javascript, kotlin, php, python, ruby, rust, swift, typescript, webassembly

**Editors/Tools:**
claude-code, codex, cursor, gemini-cli, grok, helix, intellij, neovim, openclaw, opencode, qoder, sublimetext, trae, vscode, windsurf, x-twitter, zed

---

## 4. Navigation Structure (Navbar)

**Logo:** Text-only — `BRIK64` (bold, tracking-tight, white)

**Desktop links (flat, no dropdowns):**
1. Product → `/features`
2. Platform → `/platform`
3. Transpiler → `/transpiler`
4. CLI → `/cli`
5. Languages → `/languages`
6. Pricing → `/pricing`
7. Docs → `https://docs.brik64.dev` (external)
8. Theory → `https://digitalcircuitality.com` (external)

**CTA buttons:**
- Login (text link) → `/login`
- Sign Up (teal button) → `/login`

**Mobile:** Hamburger menu (Menu/X icons from lucide-react), same links stacked vertically.

**Navbar styling:**
- Fixed top, z-50
- `bg-[#0a0a0a]`, `border-b border-white/5`
- Height: h-16
- Max width: max-w-7xl
- Framer Motion entrance: y: -20→0, opacity: 0→1, 0.5s

---

## 5. Footer Structure

**5 columns (md:grid-cols-5):**

### Brand Column
- Logo: `BRIK64` (text)
- Subtitle: "Digital Circuitality"
- Social links: X (`x.com/brik64`), GitHub (`github.com/brik64`), Medium (`medium.com/@cjperezl`)

### Product
Features, Pricing, Transpiler, CLI, Lifter, Export, Languages, AI Agents

### Resources
Docs (external: docs.brik64.dev), Blog, News, GitHub (external: github.com/brik64), FAQ, Design System

### Company
Enterprise, Investors, Contact, Legal, Login

### Papers
Digital Circuitality (external: digitalcircuitality.com), arXiv (coming soon, disabled)

### Bottom Bar
- `digitalcircuitality.com — The science`
- `brik64.com — The platform`
- `(c) 2026 BRIK-64 — All rights reserved`
- `Digital Circuitality(TM) | BRIK-64(TM) | PCD(TM)`

**Footer styling:**
- `bg-[#0a0a0a]`, `border-t border-white/5`, `pt-16 pb-8`
- Link hover: `hover:text-[#00e5ff]`

---

## 6. Logo Carousel (LogoCarousel.tsx)

**Heading:** "TRUSTED BY ENGINEERING TEAMS AT" (mono, 10px, tracking-[0.3em], uppercase, white/40)

**Companies (8):**
cloudflare, nvidia, lockheed-martin, meta, tesla, spacex, nasa, apple

**Layout:** Grid 4 cols (mobile) / 8 cols (desktop), gap-8

**Logo styling:**
- Source: `/brands/{name}.svg`
- Height: h-8 (mobile) / h-10 (desktop)
- Opacity: 40% → 70% on hover
- CSS filter to tint all logos teal: `brightness(0) saturate(100%) invert(76%) sepia(68%) saturate(2000%) hue-rotate(152deg) brightness(104%) contrast(104%)`

**Animation:** fadeUp (opacity 0→1, y 10→0, staggered 0.05s per logo, viewport once)

---

## 7. CircuitGridBackground Implementation

The visible grid is NOT from `CircuitGridBackground.tsx` — it uses a CSS class `circuit-grid-bg` that is **not defined** in the CSS. The actual grid comes from `#root::before`:

```css
#root::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 1;
}
```

**Aurora glow overlay** (`#root::after`):
```css
radial-gradient(ellipse 600px 400px at 20% 30%, rgba(0, 229, 255, 0.07) 0%, transparent 70%),
radial-gradient(ellipse 500px 500px at 80% 60%, rgba(0, 229, 255, 0.05) 0%, transparent 70%),
radial-gradient(ellipse 400px 300px at 50% 90%, rgba(0, 229, 255, 0.04) 0%, transparent 70%)
```

**CircuitGridBackground component:** Uses framer-motion parallax (scrollYProgress → y: 200px to -200px). The `circuit-grid-bg` class is missing from CSS so this component may be non-functional or vestigial.

### Additional CSS Utilities

| Class | Purpose |
|-------|---------|
| `.grid-bg` / `.bg-grid` | 60px grid, 3% white lines |
| `.glow-teal` | `box-shadow: 0 0 20px rgba(0,229,255,0.15), 0 0 60px rgba(0,229,255,0.05)` |
| `.glow-teal-strong` | `box-shadow: 0 0 30px rgba(0,229,255,0.25), 0 0 80px rgba(0,229,255,0.1)` |
| `.card-opaque` | `background: #0d0d0d`, z-index: 2 — blocks grid bleed-through |
| `.code-opaque` | `background: #0a0e1a`, z-index: 2 |
| `.cursor-blink` | 1s step-end blink animation |
| `.prose-brik` | Blog typography (h2, h3, p, code, pre, lists) |

---

## 8. Animation Utilities (src/utils/animations.ts)

```ts
fadeUp(delay = 0)
// initial: { opacity: 0, y: 20 }
// whileInView: { opacity: 1, y: 0 }
// viewport: { once: true }
// transition: { duration: 0.6, ease: "easeOut", delay }

pulse(delay = 0)
// animate: { opacity: [0.3, 1, 0.3] }
// transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay }

packet(cx[], cy[], dur, delay = 0)
// animate: { cx, cy, opacity: [0, 1, 1, 0] }
// transition: { duration: dur, repeat: Infinity, ease: "linear", delay }
```

All three are framer-motion prop-spread helpers (used as `{...fadeUp(0.1)}`).

---

## 9. Inline SVG Components

### TechLogos.tsx
GitHubLogo, DiscordLogo, RustLogo, GoLogo, PythonLogo, JavaScriptLogo, CppLogo, CobolLogo, VSCodeLogo, CursorLogo, TypeScriptLogo, PHPLogo, WebAssemblyLogo

### SocialIcons.tsx
XIcon, GitHubIcon, MediumIcon

All accept `{ size, className }` props and render inline SVGs with `fill="currentColor"`.

---

## 10. Key Design Patterns Summary

- **Dark-first:** Near-black bg (#0a0a0a), white text with opacity layers
- **Accent color:** Teal/cyan #00e5ff (HSL 187 100% 50%) used for CTAs, links, glows
- **Grid texture:** 60px CSS grid lines at ~3.5% white opacity, fixed position
- **Aurora glow:** Teal radial gradients as fixed overlay
- **Typography:** Inter (sans), Geist Mono (mono), lightweight headings
- **Motion:** Framer Motion for entrance animations (fadeUp), parallax, viewport-triggered
- **Spacing:** Sections use py-20, max-w-6xl/7xl, px-6
- **Cards:** Opaque backgrounds to block grid bleed-through
- **Border style:** `border-white/5` (very subtle)
