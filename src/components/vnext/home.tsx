"use client";

import { useEffect, useState } from "react";

import { ArrowRight, Bot, CheckCircle2, CircleAlert, GitBranch, RefreshCw, TerminalSquare, FileCode2, Package, LayoutTemplate, Copy, ExternalLink, Braces, Boxes, Network, ShieldAlert, ShieldCheck, ShieldQuestion } from "lucide-react";
import { MonomerTile } from "./monomer-tile";
import { MonomerMatrix } from "./monomer-matrix";
import { CertificatePreview } from "./certificate-preview";
import { AgenticArchitecture } from "./agentic-architecture";
import { RegulatedIndustriesSection } from "./regulated-industries-section";
import { PlatformProofSurfaces, PublicVerificationSurface } from "./platform-proof-surfaces";
import { LanguageExchangeArtifact } from "@/components/HomeProofArtifacts";

import {
  AnnouncementPill,
  ButtonVNext,
  PillarCard,
  PageHeaderVNext,
  ProtagonistSurface,
  renderBrandText,
  SupportingSurface,
  ToolRail,
  GitHubMark,
} from "@/components/vnext/primitives";
import { MultiLanguageCodeArtifact } from "./code-artifact";

const heroPcdRows = [
  { id: "PCD-104", name: "payment_fee_policy.pcd", lane: "Core", status: "CORE_CERTIFIED", visibility: "PUBLIC", coreUses: 18, extendedUses: 0, segments: ["MC00", "MC04", "MC08", "MC16"] },
  { id: "PCD-118", name: "invoice_tax_boundary.pcd", lane: "Extended", status: "CONTRACT_CERTIFIED", visibility: "PRIVATE", coreUses: 7, extendedUses: 9, segments: ["MC21", "MX64", "MX72"] },
  { id: "PCD-127", name: "auth_session_window.pcd", lane: "Core", status: "VALIDATED", visibility: "PRIVATE", coreUses: 12, extendedUses: 0, segments: ["MC03", "MC12", "MC31"] },
  { id: "PCD-142", name: "webhook_delivery_contract.pcd", lane: "Extended", status: "PENDING_EVIDENCE", visibility: "PRIVATE", coreUses: 0, extendedUses: 14, segments: ["MX88", "MX96"] },
] as const;

type HeroPcdRow = (typeof heroPcdRows)[number];

const heroCertStyles = {
  CORE_CERTIFIED: {
    label: "Core cert",
    Icon: ShieldCheck,
    className: "border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/22 text-[color:var(--accent)]",
  },
  CONTRACT_CERTIFIED: {
    label: "Contract cert",
    Icon: ShieldAlert,
    className: "border-[#ff8a22]/45 bg-[#ff8a22]/18 text-[#ff9d45]",
  },
  VALIDATED: {
    label: "Validated",
    Icon: ShieldCheck,
    className: "border-sky-400/35 bg-sky-400/12 text-sky-300",
  },
  PENDING_EVIDENCE: {
    label: "Evidence pending",
    Icon: ShieldQuestion,
    className: "border-white/14 bg-white/[0.045] text-white/56",
  },
} as const;

function allocateHeroSegments(coreUses: number, extendedUses: number, segmentCount: number) {
  const total = Math.max(1, coreUses + extendedUses);
  const coreCount = coreUses > 0 ? Math.max(1, Math.round((coreUses / total) * segmentCount)) : 0;
  const extendedCount = extendedUses > 0 ? Math.max(1, segmentCount - coreCount) : 0;
  const normalizedCoreCount = extendedUses > 0 ? Math.min(coreCount, segmentCount - extendedCount) : segmentCount;
  return [
    ...Array.from({ length: normalizedCoreCount }, () => "core" as const),
    ...Array.from({ length: Math.max(0, segmentCount - normalizedCoreCount) }, () => "extended" as const),
  ];
}

function HeroFixedSegmentBar({
  coreUses,
  extendedUses,
  segmentCount = 40,
  muted = false,
  className = "",
}: {
  coreUses: number;
  extendedUses: number;
  segmentCount?: number;
  muted?: boolean;
  className?: string;
}) {
  const segments = allocateHeroSegments(coreUses, extendedUses, segmentCount);

  return (
    <div
      className={`flex items-center gap-[3px] overflow-hidden whitespace-nowrap ${className}`}
      aria-label={`Monomer composition: ${coreUses} core, ${extendedUses} extended`}
      data-brik-fixed-segments="true"
    >
      {segments.map((kind, index) => (
        <span
          key={`${kind}-${index}`}
          className={`h-2.5 w-1 shrink-0 rounded-[2px] ${muted ? "bg-white/28" : kind === "core" ? "bg-[color:var(--accent)]" : "bg-[#ff8a22]"}`}
          data-monomer-segment="true"
          data-segment-kind={kind}
        />
      ))}
    </div>
  );
}

function HeroCertPill({ status }: { status: HeroPcdRow["status"] }) {
  const meta = heroCertStyles[status];
  const Icon = meta.Icon;

  return (
    <span className={`inline-flex h-6 max-w-full shrink items-center justify-center gap-1 rounded-full border px-2 font-mono text-[8px] font-black uppercase tracking-[0.04em] ${meta.className}`}>
      <Icon className="h-3 w-3" aria-hidden="true" />
      <span className="truncate">{meta.label}</span>
    </span>
  );
}

function HeroPlatformPreview() {
  const selected = heroPcdRows[0];

  return (
    <div className="relative hidden min-w-0 items-center justify-end xl:flex">
      <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.12),transparent_60%)] blur-2xl" />
      <div className="relative w-[min(75vw,1320px)] overflow-hidden rounded-[20px] border border-white/14 bg-[#061018]/92 shadow-[0_34px_120px_rgba(0,0,0,0.46)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="rounded-full border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/10 px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.16em] text-[color:var(--accent)]">
            Project / PCDs
          </div>
        </div>

        <div className="grid min-h-[430px] grid-cols-[112px_minmax(0,1fr)_285px]">
          <aside className="border-r border-white/8 bg-black/18 p-4">
            <div className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/38">BRIK64</div>
            {["Overview", "Topology", "PCDs", "Proofs"].map((item) => (
              <div
                key={item}
                className={`mb-2 rounded-xl px-3 py-2 text-[11px] font-semibold ${item === "PCDs" ? "bg-[color:var(--accent-soft)] text-[color:var(--accent)]" : "text-white/44"}`}
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="min-w-0 border-r border-white/8 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">Project PCDs</p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">checkout-platform</h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-white/56">18 PCDs</div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                ["Core", "11", "text-[color:var(--accent)]"],
                ["Extended", "7", "text-[#ff8a22]"],
                ["Public", "4", "text-white"],
              ].map(([label, value, valueClass]) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/[0.035] p-3">
                  <p className="font-mono text-[10px] text-white/38">{label}</p>
                  <p className={`mt-1 text-xl font-semibold ${valueClass}`}>{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-2">
              {heroPcdRows.map((pcd, index) => (
                <div
                  key={pcd.id}
                  className={`grid min-w-0 grid-cols-[minmax(160px,1fr)_minmax(220px,0.9fr)_minmax(74px,92px)] items-center gap-3 overflow-hidden rounded-xl border p-3 transition-colors ${
                    index === 0
                      ? "border-[color:var(--accent)]/80 bg-[color:var(--accent-soft)]/12 shadow-[0_0_0_1px_rgba(0,229,255,0.12),0_14px_42px_rgba(0,229,255,0.08)]"
                      : "border-white/8 bg-[#08131d]/88 hover:border-[color:var(--accent-soft)]/50"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${pcd.status === "PENDING_EVIDENCE" ? "bg-white/35" : pcd.coreUses > 0 ? "bg-[color:var(--accent)]" : "bg-[#ff8a22]"}`} />
                      <p className="truncate font-mono text-[11px] font-semibold text-white">{pcd.name}</p>
                    </div>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em]">
                      <span className="text-white/72">{pcd.id}</span>
                      <span className="text-white/30"> · </span>
                      <span className={pcd.lane === "Core" ? "text-[color:var(--accent)]" : "text-[#ff8a22]"}>{pcd.lane}</span>
                    </p>
                  </div>
                  <div className="min-w-0">
                    <HeroFixedSegmentBar coreUses={pcd.coreUses} extendedUses={pcd.extendedUses} segmentCount={pcd.lane === "Core" ? 28 : 30} muted={pcd.status === "PENDING_EVIDENCE"} />
                    <div className="mt-2 flex flex-wrap gap-1">
                      {pcd.segments.map((segment) => (
                        <span
                          key={segment}
                          className={`rounded-md border px-2 py-1 font-mono text-[8px] font-black ${segment.startsWith("MC") ? "border-[color:var(--accent-soft)]/50 bg-[color:var(--accent-soft)]/18 text-[color:var(--accent)]" : "border-[#ff8a22]/40 bg-[#ff8a22]/14 text-[#ff9d45]"}`}
                        >
                          {segment}
                        </span>
                      ))}
                    </div>
                  </div>
                  <HeroCertPill status={pcd.status} />
                </div>
              ))}
            </div>
          </div>

          <aside className="min-w-0 bg-black/12 p-5">
            <div className="rounded-xl border border-white/8 bg-white/[0.035] p-4">
              <div className="grid gap-3">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[color:var(--accent)]">Selected PCD</p>
                  <h3 className="mt-2 text-sm font-semibold tracking-[-0.03em] text-white">{selected.name}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/38">{selected.id} · {selected.lane}</p>
                </div>
                <HeroCertPill status={selected.status} />
              </div>
              <HeroFixedSegmentBar coreUses={selected.coreUses} extendedUses={selected.extendedUses} segmentCount={30} className="mt-5" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-white/8 bg-black/16 p-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/36">Core</p>
                  <p className="mt-1 text-xl font-semibold text-[color:var(--accent)]">{selected.coreUses}</p>
                </div>
                <div className="rounded-lg border border-white/8 bg-black/16 p-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/36">Extended</p>
                  <p className="mt-1 text-xl font-semibold text-[#ff8a22]">{selected.extendedUses}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {selected.segments.map((segment) => (
                  <span
                    key={segment}
                    className="rounded-lg border border-[color:var(--accent-soft)]/50 bg-[color:var(--accent-soft)]/16 px-2.5 py-1.5 font-mono text-[9px] font-black text-[color:var(--accent)]"
                  >
                    {segment}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.025] p-4">
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-white/44">Evidence lanes</p>
              <div className="mt-3 space-y-2">
                {["Core proof", "Contract edge", "Public audit"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-xl border border-white/8 bg-black/14 px-3 py-2">
                    <span className="text-[11px] font-semibold text-white/72">{item}</span>
                    <span className={`h-2 w-8 rounded-full ${index === 1 ? "bg-[#ff8a22]" : "bg-[color:var(--accent)]"}`} />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export function VNextHome() {
  const [certificateMode, setCertificateMode] = useState<"core" | "contract">("core");
  const [activeFeedbackStep, setActiveFeedbackStep] = useState(0);
  const [activeAdoptionPath, setActiveAdoptionPath] = useState(0);
  const [hoveredMonomer, setHoveredMonomer] = useState<{
    id: string;
    title: string;
    type: "core" | "extended";
    domain: string;
    property: string;
    description: string;
  }>({
    id: `MC_21`,
    title: "DUP",
    type: "core",
    domain: "i64 → i64, i64",
    property: "Bounded",
    description: "Duplicates the top value on the stack."
  });
  const feedbackLoopSteps = [
    {
      step: "01",
      title: "Agent drafts the next circuit attempt",
      desc: "Blueprint plus compiler note becomes prompt context.",
      icon: <Bot className="h-4 w-4" />,
      tone: "teal" as const,
    },
    {
      step: "02",
      title: "Compiler checks domains and closure",
      desc: "Explicit bounds pass. Ambiguity returns a rejection.",
      icon: <TerminalSquare className="h-4 w-4" />,
      tone: "neutral" as const,
    },
    {
      step: "03",
      title: "Loop until the circuit becomes bounded",
      desc: "The open edge closes into a narrower circuit target.",
      icon: <RefreshCw className="h-4 w-4" />,
      tone: "green" as const,
    },
    {
      step: "04",
      title: "Feedback seeds the next attempt",
      desc: "The rejection note returns as structured repair context.",
      icon: <CircleAlert className="h-4 w-4" />,
      tone: "amber" as const,
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveFeedbackStep((current) => (current + 1) % feedbackLoopSteps.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [feedbackLoopSteps.length]);

  const adoptionPaths = [
    {
      label: "Generated function",
      title: "Govern one AI-generated function",
      icon: <Bot className="h-5 w-5" />,
      steps: [
        { icon: <FileCode2 className="h-5 w-5" />, title: "Choose the generated function", desc: "Pick one high-value generated function as the bounded review target." },
        { icon: <Braces className="h-5 w-5" />, title: "Lift it into PCD", desc: "Convert the function into a canonical blueprint that reviewers can inspect." },
        { icon: <ShieldCheck className="h-5 w-5" />, title: "Attach review metadata", desc: "Bind hashes, monomer lanes, and evidence state to the review object." },
        { icon: <GitBranch className="h-5 w-5" />, title: "Publish the proof path", desc: "Expose the review trail so agents and maintainers can audit the result." },
      ],
    },
    {
      label: "Legacy workflow",
      title: "Lift one existing workflow",
      icon: <GitBranch className="h-5 w-5" />,
      steps: [
        { icon: <Network className="h-5 w-5" />, title: "Select the workflow boundary", desc: "Mark the smallest production path that can be reviewed without a rewrite." },
        { icon: <FileCode2 className="h-5 w-5" />, title: "Extract the PCD object", desc: "Represent the workflow as a portable blueprint instead of loose source prose." },
        { icon: <Boxes className="h-5 w-5" />, title: "Map core and contract lanes", desc: "Separate bounded logic from external edges that need contract treatment." },
        { icon: <CheckCircle2 className="h-5 w-5" />, title: "Expand after review", desc: "Reuse the reviewed shape only after the first lane has evidence." },
      ],
    },
    {
      label: "Policy surface",
      title: "Add policy to a known edge",
      icon: <ShieldAlert className="h-5 w-5" />,
      steps: [
        { icon: <ShieldAlert className="h-5 w-5" />, title: "Name the contract edge", desc: "Identify the external dependency, API, or data boundary under review." },
        { icon: <TerminalSquare className="h-5 w-5" />, title: "Generate boundary checks", desc: "Create explicit checks for the inputs and outputs that cross that edge." },
        { icon: <Package className="h-5 w-5" />, title: "Hash the evidence packet", desc: "Keep the policy notes, proof state, and bundle identity tied together." },
        { icon: <GitBranch className="h-5 w-5" />, title: "Route it to reviewers", desc: "Send the bounded packet to the team or agent workflow that owns the decision." },
      ],
    },
    {
      label: "Team rollout",
      title: "Scale only after evidence exists",
      icon: <Package className="h-5 w-5" />,
      steps: [
        { icon: <ArrowRight className="h-5 w-5" />, title: "Pick the next lane", desc: "Choose the next workflow only after the first review path is visible." },
        { icon: <LayoutTemplate className="h-5 w-5" />, title: "Reuse the reviewed pattern", desc: "Apply the same PCD shape instead of inventing a new review surface." },
        { icon: <ShieldCheck className="h-5 w-5" />, title: "Track certificate state", desc: "Show whether each artifact is core, contract, public, or still pending evidence." },
        { icon: <Network className="h-5 w-5" />, title: "Promote to platform review", desc: "Move repeatable lanes into the shared product workflow for the team." },
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Section 1: Hero */}
      <ProtagonistSurface className="relative -mt-[104px] border-b border-border bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.05),transparent_30%),linear-gradient(180deg,#050a10_0%,#060b12_44%,#04070c_100%)] pt-[104px] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.64] [filter:saturate(1.08)_contrast(1.01)_brightness(1.08)]"
          style={{ backgroundImage: "url(/generated/home-hero-bg.png)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen opacity-[0.2] [filter:saturate(1.08)_contrast(1.0)_brightness(1.08)]"
          style={{ backgroundImage: "url(/generated/home-hero-bg.png)" }}
        />
        <div className="hero-light-glow pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[rgba(1,4,8,0.04)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(1,4,8,0.34)_0%,rgba(2,6,10,0.26)_24%,rgba(2,6,10,0.22)_54%,rgba(1,3,6,0.52)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,182,172,0.06)_0%,rgba(23,69,109,0.2)_34%,rgba(4,12,20,0.34)_68%,rgba(1,3,6,0.58)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,223,255,0.16),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.008),transparent_34%,transparent_68%,rgba(0,229,255,0.018))]" />
        
        <div className="relative ml-auto grid min-h-[calc(100vh-4.25rem)] w-full max-w-[calc(100vw-0.5rem)] items-center gap-12 px-6 py-20 md:px-8 lg:pl-12 lg:pr-0 xl:grid-cols-[minmax(0,0.68fr)_minmax(760px,1.32fr)]">
          <div className="max-w-[720px]">
            <AnnouncementPill href="/foundations">
              THE FORMAL LAYER FOR AI-ERA SOFTWARE
            </AnnouncementPill>
            <h1 className="mt-8 max-w-[17ch] text-balance text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {renderBrandText("AI writes code. BRIK64 makes it trustworthy.")}
            </h1>
            <p className="mt-6 max-w-[55ch] text-xl leading-relaxed text-white/60">
              {renderBrandText("Convert generated and existing software into canonical blueprints that can be reviewed, certified, and compiled.")}
            </p>

            <div className="mt-10 w-full max-w-[560px]">
              <div className="flex flex-col gap-3">
                <span className="ml-1 text-[11px] font-black uppercase tracking-[0.28em] text-white/58">Download the CLI</span>
                <div className="grid w-full grid-cols-[minmax(0,1fr)_60px] items-stretch gap-4">
                  <div className="flex min-h-[64px] min-w-0 items-center gap-2.5 rounded-[22px] border border-white/10 bg-[#0c1520] px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
                    <span className="select-none font-mono text-lg font-bold text-[color:var(--accent)] opacity-90 sm:text-xl">$</span>
                    <code className="min-w-0 select-all truncate font-mono text-[15px] font-semibold tracking-[-0.03em] text-white transition-colors duration-300 hover:text-[color:var(--accent)] sm:text-[18px]">
                      curl -sL https://brik64.sh | sh
                    </code>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("curl -sL https://brik64.sh | sh");
                    }}
                    className="group relative flex min-h-[64px] shrink-0 items-center justify-center rounded-[18px] border border-white/10 bg-white/5 text-white/40 transition-all hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--accent)] active:scale-95"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid w-full gap-4 sm:grid-cols-2">
                <ButtonVNext 
                  href="https://github.com/brik64-org/skills" 
                  tone="secondary" 
                  className="min-h-[60px] w-full justify-center rounded-[22px] border-white/12 bg-[#1b2940] px-6 py-3 text-[14px] font-black uppercase tracking-[0.22em] text-white shadow-[0_18px_48px_rgba(0,0,0,0.22)] hover:border-[color:var(--accent-soft)] hover:bg-[#22324d]"
                  external
                >
                  <div className="flex items-center gap-4">
                    <GitHubMark className="h-5 w-5" />
                    <span>Grab Skill</span>
                  </div>
                </ButtonVNext>

                <ButtonVNext
                  href="/signup"
                  tone="primary"
                  className="min-h-[60px] w-full justify-center rounded-[22px] px-6 py-3 text-[14px] font-black uppercase tracking-[0.22em] shadow-[0_18px_48px_rgba(0,0,0,0.22)]"
                >
                  <div className="flex items-center gap-4">
                    <span>Get Started</span>
                  </div>
                </ButtonVNext>
              </div>
            </div>
          </div>
          <div>
            <HeroPlatformPreview />
          </div>
        </div>
        <ToolRail label="Designed for the systems you already run" />
      </ProtagonistSurface>

      {/* Section 2: The 4 Pillars */}
      <SupportingSurface>
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow={
              <>
                What is{" "}
                <span className="text-[0.98em] font-semibold normal-case tracking-[-0.04em] text-foreground">
                  BRIK64
                </span>
                ?
              </>
            }
            title="Software that functions as hardware."
            description="Code becomes a formal circuit: reviewable, certifiable, and reusable."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <PillarCard
              icon={<FileCode2 className="h-5 w-5" />}
              title="PCD Blueprint"
              description="Canonical structure for software logic."
              href="https://docs.brik64.dev"
              actionLabel="Learn PCD"
            />
            <PillarCard
              icon={<TerminalSquare className="h-5 w-5" />}
              title="BRIK64 CLI"
              description="Lift code, bound logic, emit bundles."
              href="/cli"
              actionLabel="Download CLI"
            />
            <PillarCard
              icon={<LayoutTemplate className="h-5 w-5" />}
              title="Platform"
              description="Team review, policy, audit, publication."
              href="/platform"
              actionLabel="Register"
            />
            <PillarCard
              icon={<Package className="h-5 w-5" />}
              title="Public Registry"
              description="Discover and reuse reviewed circuits."
              href="/registry"
              actionLabel="Visit"
            />
          </div>
        </div>
      </SupportingSurface>

      {/* Section 4: PCD: FORMAL LANGUAGE AI OPTIMIZED */}
      <SupportingSurface className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <PageHeaderVNext
                eyebrow="FORMAL LANGUAGE AI OPTIMIZED"
                title="PCD: CAD for Software."
                description="Canonical software blueprints for review, certification, and portable emission."
              />
              
              <div className="mt-16 relative">
                <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border sm:left-[39px]"></div>
                <div className="space-y-12">
                  {[
                    { step: "01", title: "Write Directly", desc: "Author bounded logic in PCD.", icon: <FileCode2 className="h-4 w-4" /> },
                    { step: "02", title: "Lift Existing Code", desc: "Extract structure from an existing repo.", icon: <GitBranch className="h-4 w-4" /> },
                    { step: "03", title: "Depurate Logic", desc: "Separate bounded logic from open contracts.", icon: <TerminalSquare className="h-4 w-4" /> }
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-start gap-6 sm:gap-8">
                      <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border border-[color:var(--accent-soft)] bg-[#071019] text-[color:var(--accent)] sm:h-20 sm:w-20">
                        <span className="text-lg font-bold tracking-[-0.04em] sm:text-2xl">{item.step}</span>
                      </div>
                      <div className="pt-2 sm:pt-4">
                        <h3 className="text-lg font-medium text-white">{renderBrandText(item.title)}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{renderBrandText(item.desc)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <MultiLanguageCodeArtifact />
              <div className="mt-8 rounded-2xl border border-[color:var(--accent-soft)]/10 bg-[color:var(--accent-soft)]/5 p-6 backdrop-blur-sm">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[color:var(--accent)] flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-4 w-4" />
                  Review Object
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  PCD is the review object before code is emitted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SupportingSurface>

      <PlatformProofSurfaces />

      {/* Section 5: The Lifter & Compiler */}
      <SupportingSurface className="border-t border-border bg-[#05080c]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="The Engine"
            title="Transpilation & Optimization."
            description="PCD is the canonical pivot for reviewable cross-target emission."
          />
          <div className="mt-16 max-w-[1100px] mx-auto">
            <LanguageExchangeArtifact />
          </div>
          <div className="mt-16 rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(9,16,24,0.96),rgba(7,12,18,0.92))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] lg:p-8">
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Compiler AI Agents Feedback Loops</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">Compiler errors become repair targets for AI agents.</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  Each rejection gives the agent a narrower target until the blueprint closes.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/8 bg-black/20 p-4">
                <div className="relative grid gap-3 md:grid-cols-2">
                  {feedbackLoopSteps.map((item, index) => {
                    const isActive = index === activeFeedbackStep;
                    const toneClass = item.tone === "amber"
                      ? "border-amber-500/25 bg-amber-500/[0.08] text-amber-400"
                      : item.tone === "green"
                        ? "border-emerald-500/25 bg-emerald-500/[0.08] text-emerald-400"
                        : item.tone === "teal"
                          ? "border-[color:var(--accent-soft)]/30 bg-[color:var(--accent-soft)]/10 text-[color:var(--accent)]"
                          : "border-white/10 bg-white/[0.03] text-white/45";

                    return (
                      <div
                        key={item.step}
                        className={`rounded-[20px] border p-3.5 transition-all duration-700 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"} ${
                          isActive
                            ? `${toneClass} scale-[1.015] shadow-[0_0_0_1px_rgba(0,229,255,0.2),0_18px_50px_rgba(0,229,255,0.12)]`
                            : "border-white/8 bg-white/[0.025] opacity-52"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${isActive ? "" : "text-white/35"}`}>{item.step}</span>
                          <span className={isActive ? "" : "text-white/35"}>{item.icon}</span>
                        </div>
                        <p className="mt-3 text-[13px] font-semibold text-white">{item.title}</p>
                        <p className="mt-1.5 text-[11px] leading-5 text-white/55">{item.desc}</p>
                      </div>
                    );
                  })}

                  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--accent-soft)]/45 bg-[#07131f] shadow-[0_18px_48px_rgba(0,0,0,0.42),0_0_38px_rgba(43,182,172,0.18)] md:flex">
                    <RefreshCw className="h-9 w-9 animate-spin text-[color:var(--accent)] [animation-duration:4s]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SupportingSurface>
      {/* Section 6: Monomers & EVA */}
      <SupportingSurface className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center xl:gap-20">
            <div className="flex min-w-0 flex-col items-center lg:items-start">
              <PageHeaderVNext
                eyebrow="The Atomic Logic"
                title="Monomers & EVA Algebra."
                description="64 bounded operations. 64 contract-bounded extensions."
              />

              <div className="mt-14 flex w-full justify-center lg:justify-center">
                <MonomerMatrix
                  hoveredId={hoveredMonomer.id}
                  onHover={setHoveredMonomer}
                  coreAction={
                    <ButtonVNext href="https://docs.brik64.com" tone="primary" className="text-xs font-bold uppercase tracking-widest">
                      Learn PCD Language
                    </ButtonVNext>
                  }
                  extendedAction={
                    <ButtonVNext href="https://github.com/brik64" tone="secondary" external className="text-xs font-bold uppercase tracking-widest">
                      <GitHubMark className="h-4 w-4" />
                      Add Skills to your AI Agent
                    </ButtonVNext>
                  }
                />
              </div>
            </div>

            <div className="flex w-full justify-center lg:justify-center">
              <MonomerTile
                id={hoveredMonomer.id}
                title={hoveredMonomer.title}
                type={hoveredMonomer.type}
                domain={hoveredMonomer.domain}
                property={hoveredMonomer.property}
                description={hoveredMonomer.description}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </SupportingSurface>

      {/* Section 7: Certification Model */}
      <SupportingSurface className="border-t border-border bg-[#05080c]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <PageHeaderVNext
                eyebrow="The Trust Artifact"
                title="Strict certification."
                description="Source, proof state, and bundle identity stay together."
              />
              
              <div className="mt-12 space-y-8">
                <button type="button" onClick={() => setCertificateMode("core")} className={`w-full rounded-2xl border bg-white/[0.02] p-6 text-left transition-colors lg:p-8 ${certificateMode === "core" ? "border-[#2BB6AC]/55" : "border-white/5 hover:border-[#2BB6AC]/30"}`}>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                    <span className="h-3 w-3 rounded-full bg-[#2BB6AC]" /> Core Certificate (Φc = 1.0)
                  </h3>
                  <div className="mt-4 grid gap-3 text-sm text-white/60">
                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="font-medium text-white/40">Monomers</span> <span className="font-mono text-white/90">MC00 - MC63 only</span></div>
                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="font-medium text-white/40">Checks</span> <span className="text-[#2BB6AC]">Bounded proof state</span></div>
                    <div className="flex justify-between"><span className="font-medium text-white/40">Posture</span> <span className="text-white">Closed modeled domain</span></div>
                  </div>
                </button>

                <button type="button" onClick={() => setCertificateMode("contract")} className={`w-full rounded-2xl border bg-white/[0.02] p-6 text-left transition-colors lg:p-8 ${certificateMode === "contract" ? "border-[#FF8A22]/55" : "border-white/5 hover:border-[#FF8A22]/30"}`}>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                    <span className="h-3 w-3 rounded-full bg-[#FF8A22]" /> Contract Certificate (Φc ≠ 1.0)
                  </h3>
                  <div className="mt-4 grid gap-3 text-sm text-white/60">
                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="font-medium text-white/40">Monomers</span> <span className="font-mono text-white/90">Includes MX64 - MX127</span></div>
                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="font-medium text-white/40">Tests</span> <span className="text-[#FF8A22]">Auto-generated boundaries</span></div>
                    <div className="flex justify-between"><span className="font-medium text-white/40">Guarantee</span> <span className="text-white">Tamper-evident / Hash-locked</span></div>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="mx-auto flex w-full max-w-2xl flex-col justify-center">
              <CertificatePreview mode={certificateMode} />
            </div>
          </div>
        </div>
      </SupportingSurface>

      <PublicVerificationSurface />

      {/* Section 8: Agentic Architecture */}
      <SupportingSurface className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="mb-16">
            <PageHeaderVNext
                eyebrow="Agentic Capability"
                title="Bounded for AI agents."
              description="Agents work against bounded operations, not loose generated text."
            />
          </div>
          <AgenticArchitecture />
        </div>
      </SupportingSurface>

      {/* Section 9: Incremental Adoption */}
      <SupportingSurface className="relative border-t border-border bg-[#0a1520] blueprint-grid overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,4,8,0.9)_0%,rgba(2,7,12,0.76)_24%,rgba(4,8,13,0.5)_52%,rgba(1,4,8,0.92)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,182,172,0.04)_0%,rgba(9,25,39,0.08)_34%,rgba(4,10,16,0.4)_72%,rgba(1,4,8,0.9)_100%)] pointer-events-none" />
        <div className="relative mx-auto grid min-h-[720px] max-w-[1400px] items-center gap-12 px-6 py-28 md:px-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:px-12">
          <div className="space-y-8">
            <PageHeaderVNext
              eyebrow="Incremental Adoption"
              title="Adopt without a rewrite."
              description="Start with one governed workflow. Expand only after the first artifact has a visible review path."
            />
            <div className="relative hidden max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-[#071018]/70 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.3)] md:block">
              <div className="grid gap-3">
                {adoptionPaths.map((path, index) => (
                  <button key={path.label} type="button" onClick={() => setActiveAdoptionPath(index)} className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-colors ${activeAdoptionPath === index ? "border-[color:var(--accent-soft)]/55 bg-[color:var(--accent-soft)]/12" : "border-white/10 bg-black/25 hover:border-white/20"}`}>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">{path.icon}</span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{path.label}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{path.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative grid gap-5">
              <div className="rounded-[28px] border border-white/10 bg-[#071018]/76 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.3)]">
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">{adoptionPaths[activeAdoptionPath].label}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{adoptionPaths[activeAdoptionPath].title}</h3>
                <div className="mt-6 grid gap-4">
              {adoptionPaths[activeAdoptionPath].steps.map((step) => (
                <div key={step.title} className="group relative flex min-h-24 gap-5 rounded-[24px] border border-white/10 bg-[#0a0d12]/92 p-6 shadow-xl backdrop-blur-sm transition-colors hover:border-[color:var(--accent-soft)]/45">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)] ring-8 ring-[color:var(--accent-soft)]/5">
                    {step.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-medium text-white">{step.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SupportingSurface>

      {/* Section 9: Digital Circuitality */}
      <SupportingSurface className="relative border-t border-[#242a31] bg-[#09111a] blueprint-grid overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.34] [filter:saturate(1.03)_contrast(1.02)_brightness(0.74)]"
          style={{ backgroundImage: "url(/generated/home-digital-circuitality-bg.png)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen opacity-[0.08] [filter:saturate(1.08)_contrast(1.02)_brightness(1.03)]"
          style={{ backgroundImage: "url(/generated/home-digital-circuitality-bg.png)" }}
        />
        {/* Technical Vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,4,8,0.94)_0%,rgba(2,6,10,0.82)_26%,rgba(3,8,13,0.68)_52%,rgba(1,4,8,0.96)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,210,255,0.02)_0%,rgba(14,32,52,0.14)_34%,rgba(5,12,20,0.56)_70%,rgba(1,4,8,0.92)_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-[1400px] px-6 py-40 md:px-8 lg:px-12">
          <div className="flex flex-col items-center">
            <PageHeaderVNext
              centered
              eyebrow="The Engineering Philosophy"
              title={<span style={{ color: '#f5f7fa' }}>Digital Circuitality.</span>}
              description={<span style={{ color: '#a7b0ba' }}>The theory behind BRIK64: software logic treated as bounded, composable circuits.</span>}
            />
            <div className="mt-16 group">
              <ButtonVNext 
                href="https://digitalcircuitality.com" 
                external 
                tone="primary"
                className="bg-[#f5f7fa] text-[#0b0b0f] hover:bg-[#f5f7fa]/90 h-16 px-12 text-lg rounded-full shadow-[0_0_40px_rgba(57,210,255,0.15)] hover:shadow-[0_0_60px_rgba(57,210,255,0.25)] transition-all font-black tracking-tight"
              >
                 <span>VISIT DIGITALCIRCUITALITY.COM</span>
                 <ExternalLink className="h-5 w-5" />
              </ButtonVNext>
            </div>
          </div>
        </div>
      </SupportingSurface>

      {/* Section 10: Route Chooser */}
      <SupportingSurface className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <PageHeaderVNext
              eyebrow="Route Chooser"
              title="Where to go next."
              description="Pick the entry point: CLI, Platform, monomers, or theory."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "BRIK64 CLI (brikc)", href: "/cli", desc: "Install the command surface and lift a repository into review.", Icon: TerminalSquare, meta: "CLI" },
                { title: "Platform & Registry", href: "/platform", desc: "Open the product surface for review, policy, and publication.", Icon: Network, meta: "APP" },
                { title: "The 64 Monomers", href: "/monomer-structure", desc: "Browse the bounded operation vocabulary and extension families.", Icon: Boxes, meta: "64" },
                { title: "Theoretical Foundations", href: "/foundations", desc: "Read the formal model behind Digital Circuitality.", Icon: Braces, meta: "Φc" }
              ].map(({ Icon, ...link }) => (
                <a key={link.title} href={link.href} className="group relative min-h-[220px] overflow-hidden rounded-[24px] border border-border bg-[#0A0D12] p-6 transition-colors hover:border-[color:var(--accent-soft)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,229,255,0.1),transparent_36%)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl border border-[color:var(--accent-soft)]/35 bg-[color:var(--accent-soft)]/10 text-[color:var(--accent)]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-white/45">{link.meta}</span>
                  </div>
                  <div className="relative mt-8">
                  <p className="text-sm font-medium text-white">{link.title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/50">{link.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-[color:var(--accent)]">
                     <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </SupportingSurface>

      <RegulatedIndustriesSection />

      <SupportingSurface className="border-t border-border bg-[#05080c]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--accent-soft)]/25 bg-[linear-gradient(135deg,rgba(0,229,255,0.09),rgba(8,13,20,0.96)_42%,rgba(255,138,34,0.08))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.28)] lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,229,255,0.16),transparent_34%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-[color:var(--accent)]">Enterprise readiness</p>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">Bring bounded review into your software workflow.</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">
                  Talk to sales for enterprise rollout, create a free account, or sign in to continue platform review.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[560px]">
                <ButtonVNext href="/contact-sales" tone="primary" className="justify-center rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-[0.16em]">
                  Contact Sales
                </ButtonVNext>
                <ButtonVNext href="/signup" tone="secondary" className="justify-center rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-[0.16em]">
                  Create Account
                </ButtonVNext>
                <ButtonVNext href="/login" tone="ghost" className="justify-center rounded-2xl border border-white/12 px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-white">
                  Log In
                </ButtonVNext>
              </div>
            </div>
          </div>
        </div>
      </SupportingSurface>
    </div>
  );
}
