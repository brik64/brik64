"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  CheckCircle2,
  ChevronRight,
  GitBranch,
  LayoutTemplate,
  LockKeyhole,
  Package,
  Scale,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from "lucide-react";

import { RegistryWorkbenchArtifact } from "@/components/HomeProofArtifacts";
import { BlueprintHubArtifact } from "@/components/HomeProofArtifacts.client";
import { newsArticles } from "@/lib/news-data";
import {
  AnnouncementPill,
  ButtonVNext,
  ChipVNext,
  CommandChip,
  FooterColumn,
  FooterLinkGroup,
  PageHeaderVNext,
  PillarCard,
  ProductFrame,
  ProtagonistSurface,
  SupportingSurface,
  SurfaceCard,
  ToolRail,
  renderBrandText,
} from "@/components/vnext/primitives";

const layerCards = [
  {
    eyebrow: "Public layer",
    title: "CLI + SDKs + Public Registry",
    description:
      "Lift, compile, and certify locally. Start with one repo, one blueprint, and one visible operator path.",
    bullets: [
      "Free CLI and SDK entry path",
      "Local lift, check, and certification flow",
      "Public-facing registry handoff when the package is ready",
    ],
    icon: <TerminalSquare className="h-5 w-5" />,
  },
  {
    eyebrow: "Professional layer",
    title: "Collaborative governed environment",
    description:
      "Design, review, audit, and publish circuits with shared policy, traceability, and team-facing operating state.",
    bullets: [
      "Shared review and policy surfaces",
      "Audit-ready publication flow",
      "Governed reuse across teams and workspaces",
    ],
    icon: <LayoutTemplate className="h-5 w-5" />,
  },
] as const;

const whyNowCards = [
  {
    title: "Generation got cheap",
    body: "AI agents can produce code continuously. That lowers creation cost, not review cost.",
  },
  {
    title: "Review is now the bottleneck",
    body: "Teams still need one canonical object they can inspect before generated code enters shared systems.",
  },
  {
    title: "Governance cannot stay implicit",
    body: "Once generated software touches production workflows, policy, audit, and publication need explicit state.",
  },
] as const;

const flowSteps = [
  {
    label: "01",
    title: "Agent / Prompt",
    body: "Generated or existing code enters the chain.",
  },
  {
    label: "02",
    title: "CLI Lift",
    body: "The CLI extracts logic into a reviewable form.",
  },
  {
    label: "03",
    title: "Canonical Blueprint (PCD)",
    body: "PCD becomes the canonical object between source and targets.",
  },
  {
    label: "04",
    title: "Compile & Certify",
    body: "Public-layer checks stay local and explicit.",
    state: "public",
  },
  {
    label: "05",
    title: "Review + Governance + Audit",
    body: "Platform workflows attach policy and team review state.",
    state: "platform",
  },
  {
    label: "06",
    title: "Publish to Registry",
    body: "Package identity, boundaries, and visibility remain attached.",
  },
] as const;

const capabilityCards = [
  {
    icon: <TerminalSquare className="h-5 w-5" />,
    title: "BRIK64 CLI & SDKs (Public)",
    description: "Sovereign compiler entrypoint and native integrations for local adoption.",
    href: "/cli",
    actionLabel: "Open CLI",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Lifting Engine",
    description: "Absorb generated or existing code and turn it into a canonical blueprint candidate.",
    href: "/lifter",
    actionLabel: "View lifter",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Deterministic Compiler",
    description: "Emit supported targets from the same bounded blueprint without hiding the operator path.",
    href: "/transpiler",
    actionLabel: "View compiler",
  },
  {
    icon: <LockKeyhole className="h-5 w-5" />,
    title: "Governance & Policy Engine (Platform)",
    description: "Shared rules, review state, and audit trails stay attached to the same system object.",
    href: "/platform",
    actionLabel: "Open platform",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Reviewable Diffs & Certification",
    description: "Visible state before merge or publish, instead of hidden trust assumptions.",
    href: "/registry",
    actionLabel: "Inspect states",
  },
  {
    icon: <Package className="h-5 w-5" />,
    title: "Public + Governed Registry",
    description: "Traceable discovery and reuse across public packages and governed team workflows.",
    href: "/registry",
    actionLabel: "Open registry",
  },
] as const;

const adoptionSteps = [
  {
    step: "01",
    title: "Start with the free CLI on one repo",
    body: "Adopt the public layer first, where the operator path is cheapest to inspect.",
  },
  {
    step: "02",
    title: "Generate the canonical blueprint",
    body: "Make the software legible as one blueprint before debating targets or workflow policy.",
  },
  {
    step: "03",
    title: "Add review and policy",
    body: "Introduce explicit review semantics once the blueprint is part of a shared engineering loop.",
  },
  {
    step: "04",
    title: "Scale to the governed Platform",
    body: "Move into team workflows when publication, audit, and reuse need durable shared state.",
  },
] as const;

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Product", href: "/" },
      { label: "CLI & SDKs", href: "/sdks" },
      { label: "Platform", href: "/platform" },
      { label: "Enterprise", href: "/enterprise" },
    ],
  },
  {
    title: "References",
    links: [
      { label: "Docs", href: "https://docs.brik64.dev", external: true },
      { label: "Spec", href: "/pcd" },
      { label: "Theory (Digital Circuitality)", href: "/foundations" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Trust & Boundaries", href: "/compliance" },
      { label: "Status", href: "/support" },
    ],
  },
] as const;

const recentUpdates = newsArticles.slice(0, 3);

function FlowStepCard({
  label,
  title,
  body,
  state,
}: {
  label: string;
  title: string;
  body: string;
  state?: "public" | "platform";
}) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">{label}</span>
        {state ? (
          <ChipVNext
            variant={state === "public" ? "accent" : "active"}
            className={state === "public" ? "bg-[color:var(--accent-soft)]/20 text-[color:var(--accent)]" : "border-white/15 bg-white/[0.06] text-white/70"}
          >
            {state === "public" ? "Public" : "Platform"}
          </ChipVNext>
        ) : null}
      </div>
      <p className="mt-4 text-base font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-white/55">{body}</p>
    </div>
  );
}

function SmallProofCard({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <SurfaceCard className="overflow-hidden border-white/10 bg-[#071019] text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">{eyebrow}</p>
        <p className="mt-2 text-base font-semibold">{title}</p>
        <p className="mt-2 text-sm leading-6 text-white/55">{description}</p>
      </div>
      <div className="p-5">{children}</div>
    </SurfaceCard>
  );
}

export function AlternativeHome() {
  return (
    <div className="bg-background text-foreground">
      <ProtagonistSurface
        id="hero"
        className="relative border-b border-border bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.14),transparent_42%),linear-gradient(180deg,#091018_0%,#0a0f14_56%,#06090e_100%)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.03),transparent_35%,transparent_70%,rgba(0,229,255,0.08))]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.94fr)_minmax(360px,0.86fr)] lg:items-center">
            <div className="max-w-[760px]">
              <AnnouncementPill>THE FORMAL LAYER FOR AI-ERA SOFTWARE</AnnouncementPill>
              <h1 className="mt-8 max-w-[15ch] text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                {renderBrandText("BRIK64 turns generated and existing software into canonical, reviewable blueprints.")}
              </h1>
              <p className="mt-6 max-w-[55ch] text-xl leading-relaxed text-white/65">
                Start instantly with the free CLI and SDKs. Scale into the governed Platform for collaborative design,
                certification, audit, and enterprise governance when team workflows need shared state.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonVNext href="/cli" tone="primary" className="h-12 rounded-2xl px-6 text-sm font-black uppercase tracking-[0.18em]">
                  Install CLI (free)
                </ButtonVNext>
                <ButtonVNext href="/signup" tone="secondary" className="h-12 rounded-2xl border-white/12 bg-white/[0.04] px-6 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-white/[0.08]">
                  Register for the Platform
                </ButtonVNext>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <CommandChip>$ curl -sL https://brik64.sh | sh</CommandChip>
                <ButtonVNext href="/pcd" tone="link" className="text-white/70 hover:text-white">
                  Inspect a live blueprint
                </ButtonVNext>
              </div>
            </div>

            <ProductFrame className="overflow-hidden border-white/12 bg-[linear-gradient(180deg,rgba(8,15,24,0.92),rgba(9,17,26,0.82))]">
              <div className="border-b border-white/10 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">Alternative homepage frame</p>
                    <p className="mt-2 text-lg font-semibold text-white">Two layers. One formal system.</p>
                  </div>
                  <Image
                    src="/brand/brik64-logo-white-teal.png"
                    alt="BRIK64"
                    width={144}
                    height={36}
                    className="h-8 w-auto object-contain"
                    unoptimized
                  />
                </div>
              </div>

              <div className="grid gap-4 p-6">
                <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
                  <div className="rounded-[24px] border border-[color:var(--accent-soft)]/30 bg-[color:var(--accent-soft)]/10 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <ChipVNext variant="accent">Public</ChipVNext>
                      <TerminalSquare className="h-5 w-5 text-[color:var(--accent)]" />
                    </div>
                    <p className="mt-4 text-base font-semibold text-white">CLI + SDKs + local operator flow</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Start on one repo, lift into PCD, compile locally, and keep the boundary visible from the first run.
                    </p>
                  </div>

                  <div className="hidden items-center justify-center text-white/25 md:flex">
                    <ArrowRight className="h-5 w-5" />
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-center justify-between gap-3">
                      <ChipVNext variant="active" className="border-white/12 bg-white/[0.06] text-white/70">
                        Platform
                      </ChipVNext>
                      <LayoutTemplate className="h-5 w-5 text-white/65" />
                    </div>
                    <p className="mt-4 text-base font-semibold text-white">Governed review, audit, and publication</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      When software becomes shared work, policy, review state, and registry publication move into one governed layer.
                    </p>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                    <span>Public chain</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span>CLI</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span>PCD</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span>Compile & Certify</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span>Platform review</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span>Registry publish</span>
                  </div>
                </div>
              </div>
            </ProductFrame>
          </div>
        </div>
        <ToolRail label="Lift from the stacks you already run" />
      </ProtagonistSurface>

      <SupportingSurface id="two-layers">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="Two Layers"
            title="Two layers. One formal system."
            description="The public layer gets individuals moving immediately. The professional layer keeps governance visible when a blueprint becomes shared engineering work."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {layerCards.map((layer) => (
              <SurfaceCard key={layer.title} className="rounded-[30px] border-border/80 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{layer.eyebrow}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">{layer.title}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--accent-soft)]/30 bg-[color:var(--accent-soft)]/10 text-[color:var(--accent)]">
                    {layer.icon}
                  </div>
                </div>
                <p className="mt-5 text-base leading-7 text-muted-foreground">{layer.description}</p>
                <div className="mt-6 space-y-3">
                  {layer.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm leading-6 text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </SurfaceCard>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] border border-border/80 bg-card/95 px-6 py-5 text-sm text-muted-foreground shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
            Start free with the CLI. Move into the Platform when collaborative review, policy, and audit need to stay attached to the same blueprint.
          </div>
        </div>
      </SupportingSurface>

      <SupportingSurface id="why-now" className="bg-[#05080c]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="Why Now"
            title="Software generation became cheap. Formal control and governance did not."
            description="AI agents can generate code at record speed. The public layer gives teams immediate control. The Platform adds the collaboration, governance, and auditability serious teams need."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyNowCards.map((card) => (
              <SurfaceCard
                key={card.title}
                className="rounded-[30px] border-white/10 bg-white/[0.03] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
              >
                <p className="text-lg font-semibold tracking-[-0.03em]">{card.title}</p>
                <p className="mt-3 text-sm leading-6 text-white/60">{card.body}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </SupportingSurface>

      <SupportingSurface id="how-it-works">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="How It Works"
            title="One formal chain. From generation to governed artifact."
            description="The loop stays explicit from source intake to publication. Public and Platform surfaces are shown as different layers on the same chain, not as disconnected products."
          />

          <ProductFrame className="mt-14 overflow-visible border-white/0 bg-transparent shadow-none">
            <div className="grid gap-4 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#09111b,#070c12)] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] md:grid-cols-2 xl:grid-cols-6">
              {flowSteps.map((step, index) => (
                <div key={step.label} className="flex items-stretch gap-4 xl:contents">
                  <FlowStepCard {...step} />
                  {index < flowSteps.length - 1 ? (
                    <div className="hidden items-center justify-center text-white/20 xl:flex">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </ProductFrame>
        </div>
      </SupportingSurface>

      <SupportingSurface id="core-capabilities" className="bg-[#05080c]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="Core Capabilities"
            title="Core capabilities for the public layer and the governed Platform."
            description="These are the product blocks that keep the formal chain legible, from local CLI work to governed registry publication."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {capabilityCards.map((card) => (
              <PillarCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </SupportingSurface>

      <SupportingSurface id="boundaries-trust">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="Boundaries & Trust"
            title="We are explicit about what we guarantee and what we do not."
            description="Core logical circuits are certifiable inside bounded domains. Real-world expansion happens through explicit contract-bounded operations. The boundary stays visible."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <SurfaceCard className="rounded-[30px] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.08] text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">Inside bounded core</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Certifiable logical circuits, canonical blueprints, and visible review state inside declared bounded domains.
              </p>
            </SurfaceCard>

            <SurfaceCard className="rounded-[30px] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--accent-soft)]/30 bg-[color:var(--accent-soft)]/10 text-[color:var(--accent)]">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">Extended by explicit contract</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                External I/O, open interactions, and real-world surfaces move through contract-bounded operations instead of hidden assumptions.
              </p>
            </SurfaceCard>

            <SurfaceCard className="rounded-[30px] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/[0.08] text-amber-700">
                <Blocks className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">Never hidden behind slogans</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                The site does not collapse the difference between certifiable core logic, contract-bounded extensions, and broader organizational controls.
              </p>
            </SurfaceCard>
          </div>
        </div>
      </SupportingSurface>

      <SupportingSurface id="proof-surfaces" className="bg-[#05080c]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="Proof Surfaces"
            title="Proof surfaces replace slogans with inspectable artifacts."
            description="The homepage should expose the kinds of surfaces technical buyers can inspect: blueprint views, registry state, diffs, policy outcomes, repo-lift examples, and release notes."
          />

          <div className="mt-14 grid gap-6 xl:grid-cols-2">
            <BlueprintHubArtifact />
            <RegistryWorkbenchArtifact />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <SmallProofCard
              eyebrow="Compiler Output + Diff"
              title="Example diff from blueprint to governed output"
              description="A reviewable diff should show what changed before publication, not just that something changed."
            >
              <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-300">
                <code>{`- fetch(url)
+ CONTRACT HTTP_GET(url)
+ boundary: external-io
+ reviewer: platform-gate

status: compile blocked until contract is explicit`}</code>
              </pre>
            </SmallProofCard>

            <SmallProofCard
              eyebrow="Policy Violation"
              title="Example policy state"
              description="Illustrative policy feedback keeps the boundary legible instead of pretending every workflow is certifiable."
            >
              <div className="space-y-3 text-sm text-white/70">
                <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.08] px-4 py-3">
                  Rule: external network paths require contract note + reviewer
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Result: publication paused until the boundary is declared
                </div>
              </div>
            </SmallProofCard>

            <SmallProofCard
              eyebrow="Repo Lifting Case"
              title="Example repo-lift case"
              description="A single repo can enter through the public CLI before any broader platform rollout."
            >
              <div className="space-y-3 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">repo: legacy-billing-service/</div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">output: canonical blueprint + boundary notes</div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">next step: review + governed publish</div>
              </div>
            </SmallProofCard>

            <SmallProofCard
              eyebrow="Recent Changelog"
              title="Public release notes stay visible"
              description="Recent public updates should route readers into concrete artifacts and documentation."
            >
              <div className="space-y-3">
                {recentUpdates.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/news/${article.slug}`}
                    className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition-colors hover:border-[color:var(--accent-soft)]/40 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                      <span>{article.tag}</span>
                      <span>{article.date}</span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-white">{article.title}</p>
                  </Link>
                ))}
              </div>
            </SmallProofCard>
          </div>
        </div>
      </SupportingSurface>

      <SupportingSurface id="incremental-adoption">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="Incremental Adoption"
            title="You do not need to rewrite everything."
            description="The adoption ladder stays operational: start on one repo, generate the blueprint, add review semantics, then expand into the governed Platform."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {adoptionSteps.map((step) => (
              <SurfaceCard key={step.step} className="rounded-[30px] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--accent-soft)]/30 bg-[color:var(--accent-soft)]/10 text-sm font-black text-[color:var(--accent)]">
                  {step.step}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </SupportingSurface>

      <SupportingSurface id="platform-staff-teams" className="bg-[#05080c]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="For Platform & Staff Teams"
            title="Built for technical leads already living with AI-generated change."
            description="The public layer gets a blueprint into view quickly. The Platform gives staff and platform teams policy, review, and publication surfaces they can govern together."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <SurfaceCard className="rounded-[32px] border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.92),rgba(9,17,26,0.82))] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.26)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Illustrative buyer voice</p>
              <blockquote className="mt-5 text-2xl font-semibold leading-relaxed tracking-[-0.03em]">
                &quot;We can finally review what the agent produced before it reaches production.&quot;
              </blockquote>
              <p className="mt-6 text-sm text-white/55">Placeholder attribution: Staff Engineer</p>
            </SurfaceCard>

            <div className="grid gap-6 md:grid-cols-2">
              <SurfaceCard className="rounded-[30px] p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Staff engineers</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-foreground">Review the artifact, not just the output.</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Keep one blueprint between source and targets so review happens on a canonical object instead of diff noise alone.
                </p>
              </SurfaceCard>

              <SurfaceCard className="rounded-[30px] p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Platform leads</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-foreground">Add policy without losing developer speed.</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Policy, audit, and publication attach later in the chain, after the public CLI path has already proved the operator flow.
                </p>
              </SurfaceCard>

              <SurfaceCard className="rounded-[30px] p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Architecture leads</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-foreground">Portable blueprints reduce semantic drift.</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Generated and existing software can converge on one canonical blueprint before team workflows branch into targets and packages.
                </p>
              </SurfaceCard>

              <SurfaceCard className="rounded-[30px] p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Shared outcome</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-foreground">Governed software change at organizational scale.</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  The Platform matters when publication, registry reuse, and boundary review become shared organizational work instead of local experimentation.
                </p>
              </SurfaceCard>
            </div>
          </div>
        </div>
      </SupportingSurface>

      <ProtagonistSurface
        id="final-cta"
        className="border-t border-white/8 bg-[linear-gradient(180deg,#071019_0%,#05090d_100%)] text-white"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)] md:p-10">
            <PageHeaderVNext
              eyebrow="Final CTA"
              title="Ready to formalize your generated software?"
              description="Start with the free CLI. Move into the governed Platform when review, policy, audit, and publication need shared team state."
            />

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonVNext href="/cli" tone="primary" className="h-12 rounded-2xl px-6 text-sm font-black uppercase tracking-[0.18em]">
                Try the CLI (free)
              </ButtonVNext>
              <ButtonVNext href="/signup" tone="secondary" className="h-12 rounded-2xl border-white/12 bg-white/[0.04] px-6 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-white/[0.08]">
                Register for the Platform
              </ButtonVNext>
              <ButtonVNext href="/pcd" tone="secondary" className="h-12 rounded-2xl border-white/12 bg-white/[0.04] px-6 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-white/[0.08]">
                Read the formal spec
              </ButtonVNext>
            </div>
          </div>

          <div className="mt-16 grid gap-12 border-t border-white/8 pt-12 md:grid-cols-2 xl:grid-cols-3">
            {footerGroups.map((group) => (
              <FooterColumn key={group.title} title={group.title}>
                {group.links.map((link) => (
                  <FooterLinkGroup
                    key={`${group.title}-${link.label}`}
                    href={link.href}
                    label={link.label}
                    external={"external" in link ? link.external : false}
                  />
                ))}
              </FooterColumn>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
            <p>{renderBrandText("BRIK64 alternative homepage for evaluation against the current public route.")}</p>
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/28">public layer first, governed platform second</p>
          </div>
        </div>
      </ProtagonistSurface>
    </div>
  );
}
