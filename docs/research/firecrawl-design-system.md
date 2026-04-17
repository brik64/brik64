# Firecrawl.dev Design System Analysis

> Extracted from https://www.firecrawl.dev/ on 2026-03-27 via Chrome DevTools MCP.
> Full-page screenshot: `docs/design-references/firecrawl-fullpage.png`
> Accessibility tree: `docs/design-references/firecrawl-a11y-tree.txt`

---

## COLOR PALETTE

### Brand / Accent (Orange)

| Token | Value | Usage |
|-------|-------|-------|
| `--heat-100` | `#fa5d19` / `color(display-p3 0.980392 0.364706 0.098039)` | Primary CTA, accent |
| `--heat-90` | `#fa5d19e6` / `color(display-p3 0.9816 0.3634 0.0984)` | Button bg (primary) |
| `--heat-40` | `#fa5d1966` | Medium emphasis |
| `--heat-20` | `#fa5d1933` | |
| `--heat-16` | `#fa5d1929` | |
| `--heat-12` | `#fa5d191f` | Alpha tint on hover |
| `--heat-8` | `#fa5d1914` | Subtle tint / badge bg |
| `--heat-4` | `#fa5d190a` | Very subtle tint |
| Darker orange | `color(display-p3 0.9059 0.3294 0.0784)` / `~#e05414` | Pressed state |
| Tinted bg | `rgb(253, 240, 236)` / `#fdf0ec` | Light orange bg |
| Orange border | `rgba(255, 76, 0, 0.1)` | Focus ring |

### Neutrals

| Token | Value | Usage |
|-------|-------|-------|
| `--accent-black` | `#262626` / `color(display-p3 0.14902 0.14902 0.14902)` | Primary text (4667 uses) |
| `--accent-white` | `#ffffff` | White text on dark |
| `--surface` | `#ffffff` | Card surfaces |
| `--surface-raised` | `#ffffff` | Elevated surfaces |
| `--background-base` | `#f9f9f9` / `color(display-p3 0.976471 0.976471 0.976471)` | Page background (94 uses) |
| `--background-lighter` | `#fbfbfb` / `rgb(253, 253, 253)` | Lighter variant |
| `--border-faint` | `#ededed` | Faintest borders |
| `--border-muted` | `#e8e8e8` | Standard borders |
| `--border-loud` | `#e6e6e6` / `color(display-p3 0.929412 0.929412 0.929412)` | Prominent borders (284 uses as border, 198 as bg) |
| `--illustrations-faint` | `#ededed` | |
| `--illustrations-muted` | `#e6e6e6` | |
| `--illustrations-default` | `#dbdbdb` | |

### Black Alpha Scale

| Token | Hex | Approx Opacity |
|-------|-----|----------------|
| `--black-alpha-1` | `#00000003` | 1% |
| `--black-alpha-2` | `#00000005` | 2% |
| `--black-alpha-3` | `#00000008` | 3% |
| `--black-alpha-4` | `#0000000a` | 4% |
| `--black-alpha-5` | `#0000000d` | 5% |
| `--black-alpha-8` | `#00000014` | 8% |
| `--black-alpha-10` | `#0000001a` | 10% |
| `--black-alpha-12` | `#0000001f` | 12% — used for muted text (149 uses) |
| `--black-alpha-16` | `#00000029` | 16% — section label slashes (46 uses) |
| `--black-alpha-20` | `#00000033` | 20% |
| `--black-alpha-24` | `#0000003d` | 24% |
| `--black-alpha-32` | `#26262652` | 32% — secondary text (120 uses) |
| `--black-alpha-40` | `#26262666` | 40% |
| `--black-alpha-48` | `#2626267a` | 48% — caption text (77 uses) |
| `--black-alpha-56` | `#2626268f` | 56% — muted text (66 uses) |
| `--black-alpha-64` | `#262626a3` | 64% — body text muted (221 uses) |
| `--black-alpha-72` | `#262626b8` | 72% — body text (147 uses) |
| `--black-alpha-88` | `#262626e0` | 88% |

### Semantic Accents

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-amethyst` | `#9061ff` | Purple accent |
| `--accent-bluetron` | `#2a6dfb` / `color(display-p3 0.164706 0.427451 0.984314)` | Blue links / accent |
| `--accent-crimson` | `#eb3424` | Error / destructive |
| `--accent-forest` | `#42c366` | Success / green |
| `--accent-honey` | `#ecb730` | Warning / gold |

---

## TYPOGRAPHY SCALE

### Font Families

| Role | Family |
|------|--------|
| **Primary (sans)** | `suisse, "suisse Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` |
| **Monospace** | `GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "Courier New", monospace` |

Font faces loaded: `suisse`, `"suisse Fallback"`, `GeistMono`, `"Roboto Mono"`, `"Roboto Mono Fallback"`

### Heading Scale

| Level | Font Size | Font Weight | Line Height | Letter Spacing | Usage |
|-------|-----------|-------------|-------------|----------------|-------|
| **H1** | 60px | 500 | 64px | -0.3px | Hero headline |
| **H2 (large)** | 52px | 500 | 56px | -0.52px | Section headings (pricing, features, CTA) |
| **H2 (medium)** | 40px | 500 | 44px | -0.4px | Sub-section headings (agent connect, testimonials, FAQ) |
| **H2 (small)** | 24px | 500 | 32px | -0.24px | Card/subsection title (Scale Plans) |
| **H3** | 20px | 450 | 28px | -0.1px | Feature card titles |

### Body Text

| Variant | Font Size | Font Weight | Line Height | Color (alpha) |
|---------|-----------|-------------|-------------|---------------|
| Body default | 16px | 400 | 24px | `accent-black` (100%) |
| Body muted | 16px | 400 | 24px | `black-alpha-72` (72%) |
| Caption | 13px | 400 | 20px | `black-alpha-48` (48%) |
| Code snippet | 13px (mono) | 400 | 20px | `black-alpha-56` (56%) |
| Code block | 14px (mono) | 400 | 22px | `accent-black` |

### Label / UI Text

| Variant | Font Size | Font Weight | Letter Spacing |
|---------|-----------|-------------|----------------|
| Label medium (buttons) | 14px | 450 | normal |
| Section label | 12px | 450 | normal |
| Nav link | 14px | 450 | normal |

### Text Colors (by frequency)

1. `accent-black` (100% opacity) — 4,667 elements
2. `black-alpha-64` — 221 elements (body text muted)
3. `black-alpha-12` — 149 elements
4. `black-alpha-72` — 147 elements (paragraphs)
5. `black` (rgb 0,0,0) — 123 elements
6. `black-alpha-32` — 120 elements
7. `heat-100` (orange) — 113 elements (links, accents)

---

## SPACING SCALE

### Padding Values (by frequency)

| Value | Frequency | Common Usage |
|-------|-----------|-------------|
| **20px** | 290 | Section inner padding |
| **28px** | 199 | Card/container padding |
| **16px** | 182 | Component padding |
| **12px** | 175 | Small component padding |
| **24px** | 165 | Section padding |
| **64px** | 142 | Large section padding |
| **8px** | 115 | Tight padding |
| **6px** | 95 | Button padding (y-axis) |
| **32px** | 78 | Medium section padding |
| **4px** | 76 | Micro padding |
| **15px** | 72 | Input padding |
| **10px** | 43 | Button padding (x-axis) |
| **2px** | 40 | Minimal padding |
| **1px** | 26 | Hairline |
| **60px** | 24 | Large spacing |
| **40px** | 14 | Section spacing |
| **48px** | 14 | Section spacing |

### Derived Spacing Scale

`1px, 2px, 4px, 6px, 8px, 10px, 12px, 14px, 15px, 16px, 18px, 20px, 24px, 28px, 32px, 40px, 45px, 48px, 56px, 60px, 64px, 72px, 76px, 80px, 88px, 92px, 111px, 143px`

Base unit appears to be **4px** with some intermediate values (6, 10, 14, 15).

### Margin Values (by frequency)

| Value | Frequency | Common Usage |
|-------|-----------|-------------|
| 134px | 54 | Horizontal centering offset |
| 64px | 44 | Section vertical spacing |
| 16px | 35 | Component spacing |
| 24px | 23 | Component spacing |
| 4px | 17 | Micro margin |
| 8px | 14 | Small margin |
| 6px | 13 | |
| 12px | 11 | |
| 32px | 9 | Medium section gap |

---

## BORDER RADIUS

| Value | Frequency | Usage |
|-------|-----------|-------|
| **999px** | 299 | Pills, badges, fully-rounded elements (dominant) |
| **8px** | 32 | Buttons, small cards |
| **10px** | 30 | Cards, code blocks, tabs |
| **6px** | 9 | Small elements |
| **16px** | 9 | Large cards, sections |
| **20px** | 8 | Hero containers |
| **4px** | 7 | Micro rounding |
| **50%** | 5 | Circles (avatars) |
| **24px** | 1 | Extra-large rounding |
| Compound: `16px 16px 0px 0px` | 4 | Top-rounded sections |
| Compound: `10px 10px 0px 0px` | 2 | Top-rounded cards |

---

## SHADOWS

### Primary Button Shadow (Orange glow)
```css
/* Small (nav button) */
box-shadow:
  color(display-p3 0.9804 0.1127 0.098 / 0.2) 0px -6px 12px 0px inset,
  color(display-p3 0.9804 0.3647 0.098 / 0.12) 0px 2px 4px 0px,
  color(display-p3 0.9804 0.3647 0.098 / 0.12) 0px 1px 1px 0px,
  color(display-p3 0.9804 0.3647 0.098 / 0.16) 0px 0.5px 0.5px 0px,
  color(display-p3 0.9804 0.3647 0.098 / 0.2) 0px 0.25px 0.25px 0px;

/* Large (hero button) */
box-shadow:
  color(display-p3 0.9804 0.1127 0.098 / 0.2) 0px -6px 12px 0px inset,
  color(display-p3 0.9804 0.3647 0.098 / 0.12) 0px 6px 12px 0px,
  color(display-p3 0.9804 0.3647 0.098 / 0.16) 0px 3px 6px 0px,
  color(display-p3 0.9804 0.3647 0.098 / 0.12) 0px 2px 4px 0px,
  color(display-p3 0.9804 0.3647 0.098 / 0.12) 0px 1px 1px 0px,
  color(display-p3 0.9804 0.3647 0.098 / 0.16) 0px 0.5px 0.5px 0px,
  color(display-p3 0.9804 0.3647 0.098 / 0.2) 0px 0.25px 0.25px 0px;
```

### Hero Focus Ring (orange with spacing)
```css
box-shadow:
  rgba(255, 0, 0, 0.2) 0px -6px 12px 0px inset,
  rgba(255, 77, 0, 0.16) 0px 3px 6px 0px,
  rgba(255, 77, 0, 0.12) 0px 2px 4px 0px,
  rgba(255, 77, 0, 0.12) 0px 1px 1px 0px,
  rgba(255, 77, 0, 0.16) 0px 0.5px 0.5px 0px,
  rgba(255, 77, 0, 0.2) 0px 0.25px 0.25px 0px,
  rgb(249, 249, 249) 0px 0px 0px 4px,      /* white gap */
  rgba(255, 76, 0, 0.1) 0px 0px 0px 5px,   /* orange ring */
  rgb(249, 249, 249) 0px 0px 0px 10px;      /* outer white */
```

### Card Shadows

```css
/* Elevated card (hero section) */
box-shadow:
  rgba(0, 0, 0, 0.02) 0px 0px 44px 0px,
  rgba(0, 0, 0, 0.03) 0px 88px 56px -20px,
  rgba(0, 0, 0, 0.02) 0px 56px 56px -20px,
  rgba(0, 0, 0, 0.03) 0px 32px 32px -20px,
  rgba(0, 0, 0, 0.03) 0px 16px 24px -12px,
  rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,        /* 1px border via shadow */
  rgb(249, 249, 249) 0px 0px 0px 10px;         /* outer bg ring */

/* Medium card */
box-shadow:
  rgba(0, 0, 0, 0.02) 0px 40px 48px -20px,
  rgba(0, 0, 0, 0.03) 0px 32px 32px -20px,
  rgba(0, 0, 0, 0.03) 0px 16px 24px -12px,
  rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;

/* Small card */
box-shadow:
  rgba(0, 0, 0, 0.04) 0px 6px 12px -3px,
  rgba(0, 0, 0, 0.04) 0px 3px 6px -1px,
  rgba(0, 0, 0, 0.04) 0px 1px 2px 0px,
  rgba(0, 0, 0, 0.06) 0px 0.5px 0.5px 0px;

/* Subtle card */
box-shadow:
  rgba(0, 0, 0, 0.03) 0px 24px 32px -12px,
  rgba(0, 0, 0, 0.03) 0px 16px 24px -8px,
  rgba(0, 0, 0, 0.03) 0px 8px 16px -4px,
  rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;

/* With outer ring (featured card) */
box-shadow:
  rgba(0, 0, 0, 0.03) 0px 24px 32px -12px,
  rgba(0, 0, 0, 0.03) 0px 16px 24px -8px,
  rgba(0, 0, 0, 0.03) 0px 8px 16px -4px,
  rgba(0, 0, 0, 0.03) 0px 0px 0px 1px,
  rgb(249, 249, 249) 0px 0px 0px 10px;
```

### Inset Shadows (recessed surfaces)

```css
/* Neutral inset */
box-shadow:
  rgba(0, 0, 0, 0.02) 0px 6px 12px 0px inset,
  rgba(0, 0, 0, 0.02) 0px 0.75px 0.75px 0px inset,
  rgba(0, 0, 0, 0.04) 0px 0.25px 0.25px 0px inset;

/* Orange inset (dark button variant) */
box-shadow:
  rgba(174, 37, 0, 0.12) 0px 6px 12px 0px inset,
  rgba(174, 37, 0, 0.06) 0px 0.75px 0.75px 0px inset,
  rgba(174, 37, 0, 0.06) 0px 0.25px 0.25px 0px inset;
```

### Utility Shadows

```css
/* Ring-only (bg color) */
box-shadow: rgb(249, 249, 249) 0px 0px 0px 8px;
box-shadow: rgb(249, 249, 249) 0px 0px 0px 6px;
box-shadow: rgb(249, 249, 249) 0px 0px 0px 10px;

/* Subtle inset border */
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset;

/* Tiny drop shadow */
box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 3px 0px;
```

---

## LAYOUT SYSTEM

### Container

| Property | Value |
|----------|-------|
| Max-width | `min(100% - 32px, 1112px)` |
| Container width CSS var | `--container-width: 1112px` |
| Container with padding | `--container-width-padding: 1144px` (1112 + 16px each side) |
| Centering | `margin: 0 auto` (implied) |

### Key Max-Widths

| Value | Usage |
|-------|-------|
| `1112px` | Main container |
| `736px` | Narrow text sections |
| `672px` | FAQ content |
| `650px` | Testimonial columns |
| `600px` | Medium content |
| `552px` | Half-width content |
| `450px` | Pricing card |
| `420px` | Small content blocks |
| `400px` | Compact content |
| `369px` | Feature card text |
| `350px` | Narrow columns |
| `330px` | Small cards |
| `300px` | Minimum content |

### Grid Layouts (computed at desktop ~1380px)

| Pattern | Columns | Gap | Usage |
|---------|---------|-----|-------|
| 2-column equal | `548px 548px` | `16px` | Feature bento, comparison cards |
| 2-column equal (larger) | `720px 720px` | `24px` | Wide feature section |
| 2-column equal | `519px 519px` | none | Hero code preview |
| 2-column equal | `556px 556px` | none | Pricing toggle area |
| 3-column equal | `370.664px 370.664px 370.664px` | none | Feature cards, pricing cards |
| 4-column equal | `137px 137px 137px 137px` | none | Logo/stat grid |
| 2-column narrow | `194px 194px` | none | Small grid |

### Flex Layout Patterns

| Pattern | Usage |
|---------|-------|
| `row, gap=24px, justify=normal, align=center` | Nav links |
| `row, gap=16px, justify=normal, align=center` | Button groups |
| `row, gap=12px, justify=center, align=center` | Centered button groups |
| `row, gap=8px, justify=normal, align=center` | Icon + text pairs |
| `row, gap=4px, justify=center, align=center` | Tight icon-text |
| `row, gap=48px, justify=normal, align=normal` | Wide feature layouts |
| `row, gap=40px, justify=normal, align=normal` | Feature content |
| `column, gap=24px, justify=center, align=center` | Stacked CTA sections |
| `column, gap=16px, justify=normal, align=normal` | Content stacks |
| `column, gap=12px, justify=center, align=normal` | Card internals |
| `row, gap=normal, justify=space-between, align=center` | Header nav |

---

## ANIMATION / TRANSITION PATTERNS

### Transitions

| Property | Duration | Easing | Usage |
|----------|----------|--------|-------|
| Color properties (6-prop) | `0.2s` | `ease` | Links, buttons hover |
| Color properties (6-prop) | `0.15s` | `ease` | Faster variant |
| All + scale + box-shadow | `0.2s / 0.1s / 0.1s` | `ease` | Interactive elements |
| opacity | `0.2s` | `ease` | Fade in/out |
| filter, opacity | `0.2s` | `ease` | Image hover |
| translate, width, height, opacity, filter | `0.4s` | `ease` | Layout animations |
| width, height | `0.4s` | `ease` | Expand/collapse |
| transform | `0.2s` | `ease` | Transform hover |
| box-shadow | `0.2s` | `ease` | Shadow transitions |
| padding | `0.2s` | `ease` | Padding animations |
| width, right, opacity | `0.2s` | `ease` | Slide animations |
| Color properties + box-shadow + transform + filter + backdrop | `0.2s` | `ease` | Full interactive |

### Animations

| Name | Duration | Timing | Iterations | Usage |
|------|----------|--------|------------|-------|
| `spin` | `1s` | `linear` | `infinite` | Loading spinners |
| `spin` | `30s` | `linear` | `infinite` | Slow decorative rotation |
| `spin` | `32s` | `linear` | `infinite` | Slow decorative rotation |
| `spin-reverse` | `32s` | `linear` | `infinite` | Counter-rotation |
| `spin-reverse` | `10s` | `linear` | `infinite` | Medium counter-rotation |
| `ai-chats-realtime-indicator` | `3s` | `ease` | `infinite` | Pulsing indicator |

---

## COMPONENT PATTERNS

### Navigation (Header)

```
Position: sticky, top: 0, z-index: 101
Background: #f9f9f9 (background-base)
Height: ~100px (includes padding)
Width: full viewport
Structure:
  - Logo (left)
  - Nav links (center, flex, gap: 24px)
  - Right actions: GitHub stars button + Sign Up CTA
Button styles:
  - Tertiary: transparent bg, 8px radius, padding 6px 10px, height 32px
  - Primary (Sign Up): orange bg, 8px radius, inset shadow, white text, height 32px
Font: suisse, 14px, weight 450
```

### Hero Section

```
Container: section, overflow-x-clip
Inner: container (max-width: min(100%-32px, 1112px))
Content:
  - Badge/pill: "2 Months Free - Annually" (999px radius)
  - H1: 60px, weight 500, line-height 64px, letter-spacing -0.3px
  - Subtitle: 16px, weight 400
  - URL input field: 15px font, placeholder "https://example.com"
  - Primary CTA button: orange, 10px radius, 36px height
  - Logo bar below
  - Code preview: 2-column grid, code block with GeistMono 14px
Card shadow: multi-layered with 1px border + 10px bg ring
```

### Section Label Pattern

```
Text: "//Developer First//" format
Font: 12px, weight 450, suisse
Color: accent-black for text, black-alpha-16 for "//" slashes
Used before every major section heading
```

### Section Heading Pattern

```
Large sections:
  H2: 52px, weight 500, line-height 56px, letter-spacing -0.52px
  Sub-heading text: 16px, weight 400, black-alpha-72 color

Medium sections:
  H2: 40px, weight 500, line-height 44px, letter-spacing -0.4px

Small sections:
  H2: 24px, weight 500, line-height 32px, letter-spacing -0.24px
```

### Feature Cards (Bento Grid)

```
Layout: 2-column grid (548px + 548px, gap 16px)
Card style:
  - Background: white or #f9f9f9
  - Border: 1px via box-shadow (rgba(0,0,0,0.03-0.05))
  - Border-radius: 10px or 16px
  - Padding: 20-28px
  - Shadow: multi-layered subtle shadows
  - Some cards have 10px bg-color ring around them
Feature title: H3, 20px, weight 450
Feature description: 16px, weight 400, muted color
```

### Code Block

```
Font: GeistMono, 14px, weight 400, line-height 22px
Background: white or surface
Border: 1px via shadow
Border-radius: 10px
Line numbers: included, muted color
Syntax: no color highlighting visible (monochrome)
```

### Pricing Cards

```
Layout: 3-column grid (370px each)
Container: max-width 1112px
Card structure:
  - Plan name
  - Price (large text)
  - Feature list
  - CTA button

Primary plan: orange CTA with full shadow
Secondary plans: neutral CTA
Tab toggle: "Monthly" / "Annual" with active state indicator
```

### Testimonials Section

```
Label: "//Community//"
Heading: H2, 40px "People love building with Firecrawl"
Layout: multi-column masonry-like grid
Card: white bg, subtle shadow, rounded corners
Avatar: 50% border-radius (circular)
```

### FAQ Section

```
Label: "//FAQ//"
Heading: H2, 40px "Frequently asked questions"
Max-width: ~672px (centered)
Accordion items with expand/collapse
Transition: width, height 0.4s ease
```

### Buttons

| Variant | Background | Color | Border Radius | Padding | Height | Shadow |
|---------|-----------|-------|---------------|---------|--------|--------|
| **Primary** | `#fa5d19` (heat-100) | white | 8px | 6px | 32px | Orange inset + glow |
| **Primary large** | `#fa5d19` | white | 10px | 0px (span px-6) | 36px | Full orange shadow |
| **Tertiary** | transparent | accent-black | 8px | 6px 10px | 32px | none |
| **Tab** | transparent | accent-black or alpha-56 | 0px | 6px 4px 6px 6px | 32px | none |

### Input Field (Hero)

```
Background: transparent (in container)
Border: none (container provides border)
Border-radius: 0px (inner) / 10px (outer container)
Font: 15px, suisse
Placeholder: "https://example.com"
Height: 24px (inner)
Color: accent-black
```

---

## GRADIENT PATTERNS

| Gradient | Usage |
|----------|-------|
| `linear-gradient(rgb(255,255,255), transparent)` | Top fade overlay |
| `linear-gradient(transparent, #f9f9f9 95%)` | Bottom fade to bg |
| `linear-gradient(#f9f9f9 72%, transparent)` | Section fade out |
| `linear-gradient(to top, #f9f9f9 30%, transparent 80%)` | Bottom-up fade |
| `linear-gradient(to right, transparent, #fa5d19)` | Orange gradient accent |
| `linear-gradient(rgba(0,0,0,0.07), transparent)` | Subtle top darkening |
| `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.4))` | Glassy overlay |
| `conic-gradient(from 90deg, transparent, #eaeaea 180deg, #262626 360deg)` | Decorative spinner (neutral) |
| `conic-gradient(from 90deg, transparent, #fee5da 180deg, #fa5d19 360deg)` | Decorative spinner (orange) |

---

## TECHNICAL NOTES

- **Framework**: Next.js (likely 14/15 based on structure)
- **CSS**: Tailwind CSS with custom design tokens via CSS variables
- **Color space**: Heavy use of `display-p3` color space for wider gamut
- **Shadows**: Multi-layered approach creating depth hierarchy (inset for top-lighting effect on buttons)
- **Border technique**: Many "borders" are actually `box-shadow: ... 0px 0px 0px 1px` — single-pixel ring shadows instead of CSS borders
- **Outer rings**: Cards often wrapped with `box-shadow: #f9f9f9 0px 0px 0px 8-12px` creating a visible "frame" that matches the background
- **Font**: Custom "Suisse" typeface (suisse-intl family), weight range 400-500, with GeistMono for code
- **Design language**: Minimal, light theme only, warm neutral palette (#f9f9f9 base, not pure white), orange as sole accent color
- **Page height**: ~20,554px (very long single-page landing)
