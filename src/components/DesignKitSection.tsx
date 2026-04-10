import { ArrowUpRight, Check, AlertCircle, Info, ChevronRight } from "lucide-react";
import { PhiC } from "@/components/PhiC";
import { PixelPerfectShowcase } from "@/components/PixelPerfectShowcase";
import { HomeProofArtifactsShowcase } from "@/components/HomeProofArtifacts";
import { PageArtifactsShowcase } from "@/components/PageArtifacts";
import { HomePrimaryButton, HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

export function DesignKitSection() {
  return (
    <section className="border-border border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Header */}
        <p className="text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
          DESIGN KIT
        </p>
        <h2 className="mt-3 max-w-4xl text-2xl font-normal leading-[40px] tracking-[-0.9px] text-balance md:text-4xl">
          BRIK64 Design System — Complete Reference
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
          Every element, token, and pattern used across the site. Built with
          Tailwind CSS v4 + shadcn/ui design tokens.
        </p>

        <div className="mt-12 border border-border bg-background p-6">
          <p className="text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
            Archived Motion Asset
          </p>
          <h3 className="mt-2 text-lg font-medium tracking-tight">
            CircuitGrid Background
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            The animated background with active monomer nodes was removed from the canonical home to reduce visual noise. The asset stays preserved as <code className="font-mono text-xs">CircuitGrid</code> with a static companion <code className="font-mono text-xs">StaticCircuitGrid</code> for future use in experimental pages, demos, or brand motion.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="border border-border p-5">
              <p className="text-sm font-semibold">Animated Source</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                <code className="font-mono">src/components/CircuitGrid.tsx</code>
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Canvas-based full-screen background with energized paths, activated monomer nodes, and low-opacity circuit rails.
              </p>
            </div>
            <div className="border border-border p-5">
              <p className="text-sm font-semibold">Static Companion</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                <code className="font-mono">src/components/StaticCircuitGrid.tsx</code>
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                SVG fallback for mockups, design references, or static surfaces where the animated layer would be too busy.
              </p>
            </div>
          </div>
        </div>

        {/* ─── COLORS ─── */}
        <div className="mt-16">
          <h3 className="text-lg font-medium tracking-tight">Color Palette</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Brand teal accent with warm neutrals
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {[
              { name: "Teal", value: "#00e5ff", cls: "bg-teal text-white" },
              { name: "Teal Hover", value: "#00ccee", cls: "bg-teal-hover text-white" },
              { name: "Teal/10", value: "10%", cls: "bg-teal-muted text-foreground" },
              { name: "Foreground", value: "#1A1817", cls: "bg-foreground text-white" },
              { name: "Muted FG", value: "#322F2D", cls: "bg-muted-foreground text-white" },
              { name: "Background", value: "#FFFFFF", cls: "bg-background text-foreground border border-border" },
              { name: "Secondary", value: "#F0EFEB", cls: "bg-secondary text-foreground" },
              { name: "Border", value: "#EEEEEE", cls: "bg-border text-foreground" },
              { name: "Gold", value: "#e0b020", cls: "bg-gold text-white" },
              { name: "Olive", value: "#6b8c40", cls: "bg-olive text-white" },
              { name: "Circuit Red", value: "#cc3333", cls: "bg-circuit-red text-white" },
              { name: "Accent", value: "#00b8d4", cls: "bg-accent text-white" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col gap-2">
                <div className={`h-16 rounded-lg ${c.cls}`} />
                <div>
                  <p className="text-xs font-medium">{c.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── TYPOGRAPHY ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-medium tracking-tight">Typography</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Jura (headings h1–h3) + Geist Sans (body) + Geist Mono (code)
          </p>

          <div className="mt-8 space-y-6">
            <div className="border-b border-border pb-4">
              <h1 className="text-4xl font-semibold tracking-tight">Heading 1 — Jura / text-4xl</h1>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">36px · Jura · font-semibold · tracking-tight · applied via CSS base layer</p>
            </div>
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-semibold tracking-tight">Heading 2 — Jura / text-2xl</h2>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">24px · Jura · font-semibold · leading-[32px]</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-xl font-medium tracking-tight">Heading 3 — Jura / text-xl</h3>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">20px · Jura · font-medium</p>
            </div>
            <div className="border-b border-border pb-4">
              <p className="text-base leading-relaxed">Body — text-base / leading-relaxed</p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">16px · font-normal · leading-[26px]</p>
            </div>
            <div className="border-b border-border pb-4">
              <p className="text-sm text-muted-foreground">Muted — text-sm / text-muted-foreground</p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">14px · color: #322F2D</p>
            </div>
            <div className="border-b border-border pb-4">
              <p className="text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
                Section Label — uppercase / tracking-[1.44px]
              </p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">12px · font-medium · uppercase · letter-spacing: 1.44px</p>
            </div>
            <div>
              <p className="font-mono text-sm">Monospace — font-mono text-sm</p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">14px · Geist Mono</p>
            </div>
          </div>
        </div>

        {/* ─── BUTTONS ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-medium tracking-tight">Buttons</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Primary teal, muted secondary, and external-link actions now share one site grammar.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <HomePrimaryButton href="https://docs.brik64.dev" target="_blank" rel="noopener noreferrer">
              Primary CTA
            </HomePrimaryButton>
            <HomeSecondaryButton href="https://github.com/brik64-admin/brik64-skills" target="_blank" rel="noopener noreferrer">
              Secondary CTA
            </HomeSecondaryButton>
            <a href="https://digitalcircuitality.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-base font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-teal hover:underline">
              External link <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex h-12 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.04] px-4 text-xs font-semibold uppercase tracking-[0.16em] text-teal">
              Button family
            </span>
            <span className="inline-flex h-12 items-center justify-center rounded-md border border-border px-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              No black CTA
            </span>
            <span className="inline-flex h-12 items-center justify-center rounded-md border border-border px-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              External icon required
            </span>
          </div>
        </div>

        {/* ─── BADGES ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-medium tracking-tight">Badges & Pills</h3>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
              Teal Badge
            </span>
            <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              Research
            </span>
            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
              Pass
            </span>
            <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600">
              Blocked
            </span>
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600">
              Running
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Active
            </span>
          </div>
        </div>

        {/* ─── CARDS ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-medium tracking-tight">Cards</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Standard, bordered, and elevated card styles
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-5">
              <h4 className="text-sm font-semibold">Bordered Card</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Simple border, white bg. Used for research cards and list items.
              </p>
              <span className="mt-3 inline-block rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                border-border
              </span>
            </div>

            <div className="rounded-xl border border-border/70 bg-background p-5 shadow-sm">
              <h4 className="text-sm font-semibold">Shadow Card</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Subtle shadow with light border. Used for feature cards.
              </p>
              <span className="mt-3 inline-block rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                shadow-sm
              </span>
            </div>

            <div className="rounded-xl border border-border bg-secondary/30 p-5">
              <h4 className="text-sm font-semibold">Muted Card</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Secondary background. Used for mock UI panels and code blocks.
              </p>
              <span className="mt-3 inline-block rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                bg-secondary/30
              </span>
            </div>
          </div>
        </div>

        {/* ─── HOME PROOF ARTIFACTS ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
            HOME PROOF ARTIFACTS
          </p>
          <h3 className="mt-3 text-lg font-medium tracking-tight">
            Certification Artifacts
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Polished home-page objects for formal proof narratives. Each artifact must carry
            a header, a status, a visual payload, proof metadata, and a scoped claim. These are
            the canonical surfaces for Blueprint Hub, Registry Workbench, Workflow Rail, Agent
            Proof Loop, Evidence Dossier, and Risk Case Board.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            The same family now covers Problem Frame, Language Exchange, Guarantee Matrix,
            Integration Relay, and Editor Control so the home reads as one system instead of
            isolated card variants.
          </p>

          <div className="mt-8">
            <HomeProofArtifactsShowcase />
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
            PAGE ARTIFACTS
          </p>
          <h3 className="mt-3 text-lg font-medium tracking-tight">
            Product, Evidence, and Editorial Surfaces
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            The redesign extends beyond the home. Comparison Surface, Feature Matrix, and Evidence
            Surface are the shared grammar for product pages, compliance narratives, and editorial
            listings. Blog and news now use local covers, strong featured artifacts, and paginated
            archive rails instead of flat post grids.
          </p>

          <div className="mt-8">
            <PageArtifactsShowcase />
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
            SITE GRAMMAR
          </p>
          <h3 className="mt-3 text-lg font-medium tracking-tight">
            One section language across home, product, and editorial pages
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            The public site now uses the same centered teal section header, the same artifact-first narrative, and the same CTA family everywhere that matters. Home sections, product sections, and editorial surfaces differ in content, not in grammar.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.5rem] border border-border/80 bg-background/90 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Headers</p>
              <p className="mt-3 text-sm font-semibold text-foreground">Centered teal titles</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                `HomeSectionHeader` and `PageSectionHeader` now share the same alignment, eyebrow treatment, and hierarchy.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-border/80 bg-background/90 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Actions</p>
              <p className="mt-3 text-sm font-semibold text-foreground">Teal primary + muted secondary</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Primary buttons are solid teal. Secondary buttons are subdued. External links carry the arrow icon.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-border/80 bg-background/90 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Artifacts</p>
              <p className="mt-3 text-sm font-semibold text-foreground">One protagonist per section</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Each block should show header, status, payload, proof metadata, and a scoped claim rather than many equal-weight cards.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-border/80 bg-background/90 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Forbidden</p>
              <p className="mt-3 text-sm font-semibold text-foreground">No isolated black oval CTA</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Mixed alignment, section-specific title colors, and generic card clouds are treated as regressions.
              </p>
            </div>
          </div>
        </div>

        {/* ─── SPACING & GRID ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-medium tracking-tight">Grid & Spacing</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            max-w-7xl container with border-x rails. Grid patterns for sections.
          </p>

          <div className="mt-8 space-y-6">
            {/* Grid demo: 2-col */}
            <div>
              <p className="mb-2 font-mono text-xs text-muted-foreground">grid md:grid-cols-[1.15fr_0.85fr] gap-12</p>
              <div className="grid gap-4 rounded-lg border border-border p-4 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
                <div className="flex h-20 items-center justify-center rounded-md bg-teal/10 text-sm font-medium text-teal">
                  1.15fr — Text Column
                </div>
                <div className="flex h-20 items-center justify-center rounded-md bg-secondary text-sm font-medium text-muted-foreground">
                  0.85fr — Cards Column
                </div>
              </div>
            </div>

            {/* Grid demo: 2x2 */}
            <div>
              <p className="mb-2 font-mono text-xs text-muted-foreground">grid grid-cols-2 (2×2 card grid)</p>
              <div className="overflow-hidden rounded-xl border border-border/70">
                <div className="grid grid-cols-2">
                  {["TL", "TR", "BL", "BR"].map((pos, i) => (
                    <div
                      key={pos}
                      className={`flex h-20 items-center justify-center text-xs text-muted-foreground ${
                        i < 2 ? "border-b border-border/70" : ""
                      } ${i % 2 === 0 ? "border-r border-border/70" : ""}`}
                    >
                      {pos}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid demo: 3-col */}
            <div>
              <p className="mb-2 font-mono text-xs text-muted-foreground">grid md:grid-cols-3 gap-4</p>
              <div className="grid gap-4 md:grid-cols-3">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex h-16 items-center justify-center rounded-lg border border-border text-xs text-muted-foreground">
                    Column {n}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid demo: 2-col equal */}
            <div>
              <p className="mb-2 font-mono text-xs text-muted-foreground">grid md:grid-cols-2 gap-10 (Workflow layout)</p>
              <div className="grid gap-4 md:grid-cols-2 md:gap-10">
                <div className="flex h-16 items-center justify-center rounded-lg bg-secondary text-xs text-muted-foreground">
                  Left Panel
                </div>
                <div className="flex h-16 items-center justify-center rounded-lg bg-secondary text-xs text-muted-foreground">
                  Right Panel
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── SEPARATORS & BORDERS ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-medium tracking-tight">Separators & Borders</h3>

          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-2 font-mono text-xs text-muted-foreground">border-border (standard)</p>
              <div className="border-t border-border" />
            </div>
            <div>
              <p className="mb-2 font-mono text-xs text-muted-foreground">border-border/70 (subtle)</p>
              <div className="border-t border-border/70" />
            </div>
            <div>
              <p className="mb-2 font-mono text-xs text-muted-foreground">border-x border-border (rail borders — max-w-7xl container)</p>
              <div className="mx-auto max-w-md border-x border-border py-6 text-center text-xs text-muted-foreground">
                Content within border-x rails
              </div>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs text-muted-foreground">divide-y border-border (accordion dividers)</p>
              <div className="divide-y border-y border-border">
                {["Item 1", "Item 2", "Item 3"].map((item) => (
                  <div key={item} className="flex items-center justify-between px-4 py-3 text-sm">
                    <span>{item}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── SHADOWS ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-medium tracking-tight">Shadows & Elevation</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="flex h-24 items-center justify-center rounded-xl bg-background text-xs text-muted-foreground shadow-none ring-1 ring-border">
              No shadow
            </div>
            <div className="flex h-24 items-center justify-center rounded-xl bg-background text-xs text-muted-foreground shadow-sm">
              shadow-sm
            </div>
            <div className="flex h-24 items-center justify-center rounded-xl bg-background text-xs text-muted-foreground shadow-md">
              shadow-md
            </div>
            <div className="flex h-24 items-center justify-center rounded-xl bg-background text-xs text-muted-foreground shadow-lg">
              shadow-lg
            </div>
          </div>
        </div>

        {/* ─── FORM ELEMENTS ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-medium tracking-tight">Form Elements</h3>

          <div className="mt-8 max-w-md space-y-4">
            <div className="flex h-12 items-center rounded-md border border-teal/20 bg-teal/[0.02] pr-1.5 pl-4">
              <input
                type="email"
                placeholder="Email input (teal border)"
                className="h-full flex-1 bg-transparent text-sm text-foreground placeholder-teal/40 outline-none"
                readOnly
              />
              <button className="inline-flex h-9 items-center rounded-md bg-teal px-4 text-sm font-medium text-white">
                Submit
              </button>
            </div>

            <input
              type="text"
              placeholder="Standard text input"
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
              readOnly
            />

            <div className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded border border-teal bg-teal">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm">Checkbox (checked)</span>

              <div className="ml-4 h-5 w-5 rounded border border-border" />
              <span className="text-sm text-muted-foreground">Unchecked</span>
            </div>
          </div>
        </div>

        {/* ─── ALERTS ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-medium tracking-tight">Alerts & Status</h3>

          <div className="mt-8 space-y-3 max-w-lg">
            <div className="flex items-start gap-3 rounded-lg border border-teal/20 bg-teal/5 p-4">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <div>
                <p className="text-sm font-medium">Info</p>
                <p className="mt-0.5 text-xs text-muted-foreground"><PhiC /> = 1 — Circuit is closed and verified.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-900">Success</p>
                <p className="mt-0.5 text-xs text-green-700">All 15,424 tests passing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
              <div>
                <p className="text-sm font-medium text-red-900">Error</p>
                <p className="mt-0.5 text-xs text-red-700">Domain violation: value exceeds declared range.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── SPACING SCALE ─── */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-medium tracking-tight">Spacing Scale</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tailwind default scale — key values used in this design system
          </p>

          <div className="mt-6 space-y-2">
            {[
              { name: "px-6 / py-2.5", px: "24px / 10px", usage: "Section padding, banner" },
              { name: "gap-4", px: "16px", usage: "Card grid gaps" },
              { name: "gap-8", px: "32px", usage: "Section internal gaps" },
              { name: "gap-12", px: "48px", usage: "Large section gaps" },
              { name: "py-12 / py-16", px: "48px / 64px", usage: "Section vertical padding" },
              { name: "py-20 / py-24", px: "80px / 96px", usage: "Large section padding" },
              { name: "mt-3", px: "12px", usage: "Heading after label" },
              { name: "mt-4", px: "16px", usage: "Description after heading" },
            ].map((s) => (
              <div key={s.name} className="flex items-center gap-4 text-xs">
                <code className="w-32 shrink-0 font-mono text-teal">{s.name}</code>
                <span className="w-24 shrink-0 text-muted-foreground">{s.px}</span>
                <span className="text-muted-foreground">{s.usage}</span>
              </div>
            ))}
          </div>
        </div>

        <PixelPerfectShowcase />

      </div>
    </section>
  );
}
