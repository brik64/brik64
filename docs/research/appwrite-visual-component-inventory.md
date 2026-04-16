# Appwrite Visual Component Inventory

Date audited: 2026-04-11  
Source audited: `https://appwrite.io/`  
Purpose: extract reusable visual grammar and component patterns for `brik64.com` vNext without copying Appwrite branding or unsupported product claims.

## Measured Visual Tokens

- Body font: `Inter, arial, sans-serif`
- Display font: `"Aeonik Pro", ui-sans-serif, system-ui, sans-serif`
- Hero `h1`:
  - size: `72px`
  - weight: `400`
  - line-height: `74px`
  - letter-spacing: `-1.584px`
- Page background: `rgb(25, 25, 28)` / `#19191c`
- Header border: `rgba(255, 255, 255, 0.1)`
- Primary CTA radius: `8px`
- Primary CTA weight: `500`
- Nav/body default text: soft gray, not full white
- Accent strategy: one dominant accent color, used sparingly

## Component Inventory

### Global shell

1. Announcement strip
- full-width promotional bar above the header
- single-line message
- high-contrast accent background

2. Thin dark navbar
- low-height header chrome
- logo left
- simple textual nav center
- social proof and primary CTA right

3. GitHub star badge
- inline text label + count bubble
- secondary proof, not the main CTA

4. Primary CTA
- medium radius
- filled accent background
- compact vertical padding

5. Secondary CTA
- transparent/dark surface
- thin border
- same height family as primary CTA

### Hero system

6. Hero announcement pill
- small pill above headline
- low-saturation accent tint
- simple icon/dot at left
- inline arrow at right

7. Split hero composition
- text block left
- product image/mockup right
- strong vertical alignment
- first viewport behaves like a poster, not a document

8. Product screenshot frame
- large dark product mockup
- visible chrome
- subtle shadow
- no noisy gradients over the content

9. Tool/framework rail
- horizontal compatibility strip under the hero
- short label on the left
- framework names/icons on the right
- acts as ecosystem proof without becoming a logo cloud

### Mid-page sections

10. Customer logo cloud
- monochrome marks
- restrained contrast
- placed after the hero, not inside it

11. Product category switcher
- section-level labels such as `BUILD` / `DEPLOY`
- simple categorical navigation

12. Feature tiles with embedded mini-UIs
- each product card contains:
  - illustrated product icon
  - product label
  - one short explanatory paragraph
  - a tiny fake-but-readable product surface

13. Quote/testimonial block
- oversized pull quote
- human proof
- positioned as a breathing section between denser product areas

14. AI workflow benchmark block
- productized comparison table
- secondary CTA pair near the benchmark
- used to prove specialization, not just list features

15. Security/compliance grid
- short cards or text blocks
- consistent heading/body rhythm
- equal visual weight, minimal decoration

16. Network/coverage section
- map or systems visualization
- tabs/segmented controls above or below the visual

17. Stats/proof strip
- KPI-style metrics under a testimonial or conversion section

18. Pricing CTA trio
- simple 3-tier cards
- clear progression from free to enterprise

### Footer system

19. Large multi-column footer
- grouped by intent, not chronology
- uppercase muted headings
- dense but orderly link lists

20. Social/legal/status bottom rail
- social icons
- copyright
- system status badge
- terms/privacy/cookies

## Reuse Rules For BRIK64

Safe to reuse as grammar:

- dark shell
- thin header chrome
- hero announcement pill
- split hero with product frame
- ecosystem/tool rail
- grouped footer composition
- inline GitHub proof badge
- embedded mini-UI feature tiles

Do not reuse directly:

- Appwrite magenta brand accent
- exact copy structure
- customer proof patterns we cannot substantiate
- product names or category language specific to Appwrite
- top promotional strip unless we have a real announcement

## Translation To BRIK64 vNext

- Keep our accent `blue-teal`, not Appwrite magenta.
- Keep `Geist` + `Geist Mono` instead of cloning their font stack.
- Preserve the `poster-first` hero and Appwrite-like ecosystem rail.
- Use Appwrite’s component grammar to simplify the home:
  - one hero pill
  - one dominant screenshot
  - one tool rail
  - then product modules
- Make footer composition feel Appwrite/Supabase-like:
  - grouped, uppercase headings
  - legal separated inside company
  - dense but ordered bottom rail

## Notes On The `ai-website-cloner-template` Repo

The repository at `https://github.com/JCodesMore/ai-website-cloner-template` is useful as a process reference, not as a component source.

Useful ideas:

- extract measured CSS values before rebuilding
- write component inventories/specs before coding
- separate tokens, assets, sections, and QA

Not useful to copy directly into `brik64.com`:

- its starter UI
- its placeholder page
- its default token set
- its cloning workflow assumptions

For `brik64.com`, the correct use is:

1. audit a target site visually
2. write the inventory
3. translate the grammar into BRIK64 primitives
4. verify locally against our content and claims
