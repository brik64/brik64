"use client";

import type { ReactNode } from "react";
import {
  ArrowUpDown,
  ArrowRight,
  BadgeCheck,
  Bot,
  Cpu,
  CheckCircle2,
  CircleAlert,
  FileCheck2,
  FileJson2,
  FileText,
  GitBranch,
  GitPullRequest,
  Landmark,
  Layers3,
  Monitor,
  Package,
  Plane,
  Puzzle,
  ScanLine,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { PhiC } from "@/components/PhiC";
import { BlueprintHubArtifact } from "@/components/HomeProofArtifacts.client";

function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function StatusPill({
  children,
  tone = "teal",
}: {
  children: ReactNode;
  tone?: "teal" | "success" | "warning" | "neutral";
}) {
  const tones = {
    teal: "border-teal/25 bg-teal/[0.08] text-teal",
    success: "border-emerald-500/25 bg-emerald-500/[0.09] text-emerald-600",
    warning: "border-amber-500/30 bg-amber-500/[0.1] text-amber-700",
    neutral: "border-border/80 bg-background/90 text-muted-foreground",
  };

  return (
    <span className={cx(
      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] shadow-sm",
      tones[tone],
    )}>
      {children}
    </span>
  );
}

export function ProofBadge() {
  return (
    <StatusPill tone="success">
      <CheckCircle2 className="h-3.5 w-3.5" />
      <PhiC /> = 1
    </StatusPill>
  );
}

export function ArtifactFrame({
  children,
  className,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cx(
        "overflow-hidden rounded-[2rem] border p-5 shadow-[0_24px_90px_rgba(0,0,0,0.12)] md:p-7",
        dark
          ? "border-white/10 bg-gradient-to-br from-[#0b1418] via-[#10171d] to-[#0a0d12] text-white"
          : "border-border/80 bg-gradient-to-br from-muted/85 via-background to-background text-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ArtifactHeader({
  eyebrow,
  title,
  description,
  status,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-current/10 pb-5 md:flex-row md:items-start md:justify-between">
      <div>
        <p className={cx(
          "text-[10px] font-semibold uppercase tracking-[0.22em]",
          dark ? "text-white/45" : "text-muted-foreground",
        )}>
          {eyebrow}
        </p>
        <div className={cx("mt-2 text-lg font-semibold tracking-tight", dark && "text-white")}>
          {title}
        </div>
        {description ? (
          <p className={cx(
            "mt-2 max-w-xl text-xs leading-relaxed",
            dark ? "text-white/55" : "text-muted-foreground",
          )}>
            {description}
          </p>
        ) : null}
      </div>
      {status ? <div className="shrink-0">{status}</div> : null}
    </div>
  );
}

export function MetricTile({
  label,
  value,
  detail,
  dark = false,
}: {
  label: string;
  value: ReactNode;
  detail?: string;
  dark?: boolean;
}) {
  return (
    <div className={cx(
      "rounded-2xl border p-4 shadow-sm",
      dark ? "border-white/10 bg-white/[0.04]" : "border-border/80 bg-background/90",
    )}>
      <p className={cx(
        "text-[10px] font-semibold uppercase tracking-[0.16em]",
        dark ? "text-white/45" : "text-muted-foreground",
      )}>
        {label}
      </p>
      <div className={cx("mt-2 text-xl font-semibold tracking-tight", dark && "text-white")}>
        {value}
      </div>
      {detail ? (
        <p className={cx("mt-2 text-xs leading-relaxed", dark ? "text-white/50" : "text-muted-foreground")}>
          {detail}
        </p>
      ) : null}
    </div>
  );
}

export function FlowNode({
  label,
  title,
  body,
  icon,
  state = "idle",
}: {
  label: string;
  title: string;
  body: string;
  icon: ReactNode;
  state?: "idle" | "active" | "warning" | "success";
}) {
  const stateClass = {
    idle: "border-border/80 bg-background/90",
    active: "border-teal/30 bg-teal/[0.06]",
    warning: "border-amber-500/30 bg-amber-500/[0.07]",
    success: "border-emerald-500/30 bg-emerald-500/[0.07]",
  };

  return (
    <div className={cx("rounded-3xl border p-4 shadow-sm", stateClass[state])}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        <div className="text-teal">{icon}</div>
      </div>
      <p className="mt-4 text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

export function CodeProofPanel({
  eyebrow,
  title,
  badge,
  code,
}: {
  eyebrow: string;
  title: string;
  badge?: ReactNode;
  code: string;
}) {
  return (
    <ArtifactFrame dark className="flex min-h-full flex-col p-0 md:p-0">
      <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
            {eyebrow}
          </p>
          <p className="mt-2 text-sm font-medium text-white/80">{title}</p>
        </div>
        {badge}
      </div>
      <div className="flex-1 bg-[#070b10] p-5">
        <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-300">
          <code>{code}</code>
        </pre>
      </div>
    </ArtifactFrame>
  );
}

const registryCircuits = [
  { id: "AUTH-FLOW-001", name: "OAuth2 Handler", status: "CERTIFIED", phiC: "1", monomers: 12 },
  { id: "SORT-ALG-042", name: "Quicksort", status: "CERTIFIED", phiC: "1", monomers: 8 },
  { id: "NET-API-017", name: "REST Client", status: "OPEN", phiC: "0.87", monomers: 24 },
];

export function RegistryWorkbenchArtifact() {
  return (
    <ArtifactFrame dark>
      <ArtifactHeader
        dark
        eyebrow="Registry Workbench"
        title="Certified circuits behave like product packages."
        description="Search, inspect closure, attach proof and publish without losing certification metadata."
        status={<StatusPill tone="teal">registry live</StatusPill>}
      />

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 text-xs text-white/40">
            <Search className="h-4 w-4" />
            Search certified circuits...
          </div>

          <div className="mt-5 space-y-3">
            {registryCircuits.map((circuit) => (
              <div key={circuit.id} className="rounded-3xl border border-white/10 bg-black/25 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-teal">{circuit.id}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{circuit.name}</p>
                  </div>
                  <StatusPill tone={circuit.status === "CERTIFIED" ? "success" : "warning"}>
                    {circuit.status}
                  </StatusPill>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/55">
                  <span><PhiC /> = {circuit.phiC}</span>
                  <span>•</span>
                  <span>{circuit.monomers} monomers</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-teal/20 bg-teal/[0.06] p-5">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl border border-teal/30 bg-teal/10 p-3 text-teal">
              <Package className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal/70">Selected package</p>
              <h4 className="mt-2 text-xl font-semibold text-white">auth/oauth2-handler</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Immutable proof hash, closure status and target exports stay attached to the registry package.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <MetricTile dark label="Closure" value={<><PhiC /> = 1</>} />
            <MetricTile dark label="Version" value="1.0.0" />
            <MetricTile dark label="Exports" value="14" />
          </div>
        </div>
      </div>
    </ArtifactFrame>
  );
}

export function WorkflowRailArtifact() {
  const stages = [
    { label: "Push", title: "GitHub push", body: "Repo stays where the team already works.", icon: <GitBranch className="h-4 w-4" />, state: "active" as const },
    { label: "Lift", title: "brikc lift", body: "Changed functions become canonical PCD.", icon: <Layers3 className="h-4 w-4" />, state: "active" as const },
    { label: "Certify", title: "TCE proof", body: "Domains, paths and closure are checked.", icon: <ShieldCheck className="h-4 w-4" />, state: "success" as const },
    { label: "Ship", title: "PR + registry", body: "Proof comments and package metadata update.", icon: <Package className="h-4 w-4" />, state: "success" as const },
  ];

  return (
    <ArtifactFrame>
      <ArtifactHeader
        eyebrow="Workflow Rail"
        title="From push to proof, in one reviewable path."
        description="A continuous certification trail is easier to understand than isolated workflow cards."
        status={<ProofBadge />}
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {stages.map((stage, index) => (
          <div key={stage.label} className="relative">
            <FlowNode {...stage} />
            {index < stages.length - 1 ? (
              <div className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-background p-1 text-muted-foreground lg:block">
                <ArrowRight className="h-4 w-4" />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-border/80 bg-background/90 p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center">
          <MetricTile label="PR comment" value="ready" detail="certification badge attached" />
          <MetricTile label="Domains" value="checked" detail="declared ranges validated" />
          <MetricTile label="Paths" value="exhaustive" detail="all branches accounted for" />
          <div className="md:justify-self-end">
            <ProofBadge />
          </div>
        </div>
      </div>
    </ArtifactFrame>
  );
}

export function AgentProofLoopArtifact() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <ArtifactFrame>
        <ArtifactHeader
          eyebrow="Agent Proof Loop"
          title="The compiler rejection becomes the next prompt."
          description="The point is not a pretty terminal. The point is a closed loop between intent, blueprint, rejection and proof."
          status={<StatusPill tone="warning">2 repair loops</StatusPill>}
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <FlowNode label="Intent" title="Prompt" body="Generate a drone speed controller with wind limits." icon={<Sparkles className="h-4 w-4" />} state="active" />
          <FlowNode label="Draft" title="PCD blueprint" body="The agent emits a finite circuit instead of open-ended glue code." icon={<Bot className="h-4 w-4" />} state="active" />
          <FlowNode label="Reject" title="Compiler diagnostic" body="Missing case: wind_speed > 120 km/h cannot close." icon={<CircleAlert className="h-4 w-4" />} state="warning" />
          <FlowNode label="Proof" title="Certified revision" body="The repaired circuit closes and all execution paths verify." icon={<CheckCircle2 className="h-4 w-4" />} state="success" />
        </div>
      </ArtifactFrame>

      <ArtifactFrame dark>
        <ArtifactHeader
          dark
          eyebrow="Verification State"
          title="Drone speed controller"
          status={<ProofBadge />}
        />
        <div className="mt-6 space-y-4">
          <MetricTile dark label="Closure proof" value={<><PhiC /> = 1</>} />
          <MetricTile dark label="Paths verified" value="12 / 12" />
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.08] p-4 text-sm leading-relaxed text-emerald-100">
            Wind bounds validated. Unsafe branches eliminated before compile.
          </div>
        </div>
      </ArtifactFrame>
    </div>
  );
}

export function EvidenceDossierArtifact() {
  return (
    <ArtifactFrame>
      <ArtifactHeader
        eyebrow="Evidence Dossier"
        title="Auditors get a scoped proof packet, not a marketing claim."
        description="Reports name the mapped control, the evidence source, trace links and what still needs external evidence."
        status={<StatusPill tone="teal">ready for audit</StatusPill>}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <FlowNode label="Control" title="MiFID II Art. 17" body="Algorithmic trading controls mapped to certified trading guardrails." icon={<FileCheck2 className="h-4 w-4" />} state="success" />
          <FlowNode label="Limitation" title="Scope is explicit" body="The report states evidence support; it never claims blanket compliance." icon={<ShieldCheck className="h-4 w-4" />} state="warning" />
        </div>

        <div className="rounded-3xl border border-border/80 bg-background/95 p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Report snapshot</p>
              <p className="mt-2 text-sm font-semibold">Generated from certified PCD</p>
            </div>
            <div className="flex gap-2">
              <StatusPill tone="neutral"><FileJson2 className="h-3.5 w-3.5" />JSON</StatusPill>
              <StatusPill tone="neutral"><FileText className="h-3.5 w-3.5" />PDF</StatusPill>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <MetricTile label="Controls" value="5" />
            <MetricTile label="Trace links" value="12" />
            <MetricTile label="Limitations" value="1" />
          </div>
        </div>
      </div>
    </ArtifactFrame>
  );
}

const riskCases = [
  { icon: <Landmark className="h-5 w-5" />, name: "Algorithmic Trading", standard: "MiFID II", constraint: "OrderValue ∈ [0.01, 10M]", risk: "capital exposure bounded" },
  { icon: <Plane className="h-5 w-5" />, name: "Aerospace", standard: "DO-178C", constraint: "Altitude ∈ [0, 15000]", risk: "flight envelope enforced" },
  { icon: <Zap className="h-5 w-5" />, name: "Embedded / IoT", standard: "Firmware", constraint: "Temperature ∈ [-40, 80]", risk: "device bounds explicit" },
];

export function RiskCaseBoardArtifact() {
  return (
    <ArtifactFrame>
      <ArtifactHeader
        eyebrow="Risk Case Board"
        title="Each vertical is framed as risk, constraint and proof."
        description="The industry card is not a brochure tile. It is a compact safety case."
        status={<ProofBadge />}
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {riskCases.map((riskCase) => (
          <div key={riskCase.name} className="rounded-3xl border border-border/80 bg-background/95 p-5 shadow-sm">
            <div className="flex items-center gap-3 text-teal">
              {riskCase.icon}
              <div>
                <p className="text-sm font-semibold text-foreground">{riskCase.name}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{riskCase.standard}</p>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-teal/20 bg-teal/[0.06] p-4 font-mono text-xs text-teal">
              {riskCase.constraint}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-xs leading-relaxed text-muted-foreground">{riskCase.risk}</p>
              <ProofBadge />
            </div>
          </div>
        ))}
      </div>
    </ArtifactFrame>
  );
}

export function ProblemFrameArtifact() {
  const pillars = [
    {
      label: "Finite language",
      title: "128 operations. Total.",
      body: "A bounded surface an LLM can internalize without statistical guesswork.",
      icon: <Puzzle className="h-4 w-4" />,
      state: "active" as const,
    },
    {
      label: "Composition",
      title: "EVA joins stay sound",
      body: "Programs are composed from algebraic pieces instead of ad hoc glue.",
      icon: <Workflow className="h-4 w-4" />,
      state: "active" as const,
    },
    {
      label: "Verification",
      title: "Open circuits do not ship",
      body: "The compiler rejects structural incompleteness before runtime exists.",
      icon: <ScanLine className="h-4 w-4" />,
      state: "warning" as const,
    },
    {
      label: "Reuse",
      title: "Certified once. Trusted forever.",
      body: "Closed circuits remain reusable assets instead of decaying snippets.",
      icon: <TrendingUp className="h-4 w-4" />,
      state: "success" as const,
    },
  ];

  return (
    <ArtifactFrame>
      <ArtifactHeader
        eyebrow="Problem Frame"
        title="Mainstream languages optimize expression. Teams still need certifiable structure."
        description="The problem is not syntax taste. The problem is that ad hoc rules drift across teams, and AI makes that variation faster."
        status={<StatusPill tone="warning">verification gap</StatusPill>}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-3xl border border-border/80 bg-background/95 p-5 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Failure pattern
          </p>
          <div className="mt-4 space-y-3">
            <MetricTile label="Python" value="80,000+" detail="Built-ins and packages widen the surface faster than any verifier can reason about it." />
            <MetricTile label="JavaScript" value="1,200+" detail="Type coercion and implicit behavior create edge-case density instead of closure." />
            <MetricTile label="BRIK64" value="128" detail="Finite operations, explicit domains, closed composition." />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <FlowNode key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </ArtifactFrame>
  );
}

export function LanguageExchangeArtifact() {
  const sources = ["JavaScript", "TypeScript", "Python", "Rust", "C", "C++", "Go", "COBOL", "PHP", "Java"];
  const targets = ["Rust", "JavaScript", "TypeScript", "Python", "C", "C++", "Go", "COBOL", "PHP", "Java", "Swift", "WASM", "Native", "BIR"];

  return (
    <ArtifactFrame>
      <ArtifactHeader
        eyebrow="Language Exchange"
        title="Many source materials. One canonical circuit. Fourteen emission targets."
        description="PCD is the semantic choke point: lift heterogeneous code in, preserve proof in the middle, emit deterministic targets out."
        status={<ProofBadge />}
      />

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_auto_0.78fr_auto_1fr] lg:items-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Lift from
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {sources.map((lang) => (
              <span key={lang} className="rounded-full border border-border/80 bg-background px-3 py-1.5 text-xs font-medium shadow-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden text-muted-foreground lg:block">
          <ArrowRight className="h-5 w-5" />
        </div>

        <div className="rounded-[1.75rem] border border-teal/25 bg-teal/[0.08] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal/80">
                Canonical relay
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">PCD Blueprint</p>
            </div>
            <ProofBadge />
          </div>
          <div className="mt-5 grid gap-3">
            <MetricTile label="Inputs" value="10" />
            <MetricTile label="Outputs" value="14" />
            <MetricTile label="Closure" value={<><PhiC /> = 1</>} />
          </div>
        </div>

        <div className="hidden text-muted-foreground lg:block">
          <ArrowRight className="h-5 w-5" />
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Compile to
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {targets.map((lang) => (
              <span key={lang} className="rounded-full border border-border/80 bg-background px-3 py-1.5 text-xs font-medium shadow-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ArtifactFrame>
  );
}

export function GuaranteeMatrixArtifact() {
  const guarantees: Array<{
    label: string;
    title: string;
    body: string;
    icon: ReactNode;
    state: "active" | "success";
  }> = [
    {
      label: "Compile",
      title: "Write once, emit anywhere",
      body: "PCD remains the single semantic source across all targets.",
      icon: <Cpu className="h-4 w-4" />,
      state: "active",
    },
    {
      label: "Verify",
      title: "Mathematical proof",
      body: "Behavior is checked structurally, not inferred from a green test run.",
      icon: <ShieldCheck className="h-4 w-4" />,
      state: "success",
    },
    {
      label: "Lift",
      title: "Legacy code to PCD",
      body: "Existing systems can be normalized into canonical circuits without manual rewrites.",
      icon: <ArrowUpDown className="h-4 w-4" />,
      state: "active",
    },
    {
      label: "Certify",
      title: "Closure attached",
      body: "A certified circuit carries proof state with the artifact itself.",
      icon: <BadgeCheck className="h-4 w-4" />,
      state: "success",
    },
  ];

  return (
    <ArtifactFrame>
      <ArtifactHeader
        eyebrow="Guarantee Matrix"
        title="One compiler. Every guarantee."
        description="The artifact here is not a feature card. It is the guarantee surface that binds compile, verify, lift and certify into one chain."
        status={<ProofBadge />}
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {guarantees.map((guarantee) => (
            <FlowNode key={guarantee.title} {...guarantee} />
          ))}
        </div>

        <div className="rounded-3xl border border-border/80 bg-background/95 p-5 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Tier summary
          </p>
          <div className="mt-4 space-y-3">
            <MetricTile label="Core" value="64 certified" detail="Formally proven operation set." />
            <MetricTile label="Extended" value="64 contract-bounded" detail="Bridges to real systems without open panic paths." />
            <MetricTile label="Foundation" value="16 families" detail="The whole operation surface remains enumerable and reviewable." />
          </div>
        </div>
      </div>
    </ArtifactFrame>
  );
}

export function IntegrationRelayArtifact() {
  const stages = [
    { label: "Source", title: "GitHub repo", body: "The repository stays inside the team's existing workflow.", icon: <GitBranch className="h-4 w-4" />, state: "active" as const },
    { label: "Lift", title: "brikc lift", body: "Changed logic is normalized into canonical PCD.", icon: <Layers3 className="h-4 w-4" />, state: "active" as const },
    { label: "Review", title: "PR evidence", body: "Certification state and trace links are posted where review already happens.", icon: <GitPullRequest className="h-4 w-4" />, state: "success" as const },
    { label: "Emit", title: "brikc build", body: "The same proven blueprint emits verified targets without semantic drift.", icon: <Package className="h-4 w-4" />, state: "success" as const },
  ];

  return (
    <ArtifactFrame>
      <ArtifactHeader
        eyebrow="Integration Relay"
        title="Your code stays in GitHub. BRIK64 attaches proof to the same path."
        description="The integration object is the relay itself: source, lift, review and emission share one traceable line."
        status={<StatusPill tone="teal">pr-connected</StatusPill>}
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {stages.map((stage, index) => (
          <div key={stage.title} className="relative">
            <FlowNode {...stage} />
            {index < stages.length - 1 ? (
              <div className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-background p-1 text-muted-foreground lg:block">
                <ArrowRight className="h-4 w-4" />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-border/80 bg-background/95 p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <MetricTile label="Trigger" value="push / PR" detail="No parallel deployment surface to learn." />
          <MetricTile label="Intermediate" value="PCD" detail="Single canonical blueprint for lift and build." />
          <MetricTile label="Review target" value="GitHub" detail="Proof lands in comments, badges and packages." />
        </div>
      </div>
    </ArtifactFrame>
  );
}

export function EditorControlArtifact() {
  const editors = [
    { name: "VSCode", subtitle: "Extension + LSP", status: "AVAILABLE", logo: "/brands/vscode.svg" },
    { name: "Cursor", subtitle: "AI + PCD native", status: "ALPHA", logo: "/brands/cursor.svg" },
    { name: "Windsurf", subtitle: "AI-powered coding", status: "PLANNED", logo: "/brands/windsurf.svg" },
    { name: "Zed", subtitle: "High-performance editor", status: "PLANNED", logo: "/brands/zed.svg" },
    { name: "IntelliJ", subtitle: "JetBrains IDEs", status: "PLANNED", logo: "/brands/intellij.svg" },
    { name: "Antigravity", subtitle: "Google AI IDE", status: "PLANNED", logo: "/brands/antigravity.svg" },
  ];

  return (
    <ArtifactFrame>
      <ArtifactHeader
        eyebrow="Editor Control"
        title="Works where you code. Today."
        description="Editor support appears as operational tooling with explicit availability states."
        status={<StatusPill tone="teal">tooling ready</StatusPill>}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {editors.map((editor) => (
            <div key={editor.name} className="rounded-3xl border border-border/80 bg-background/95 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={editor.logo} alt={editor.name} className="h-8 w-8 grayscale" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{editor.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{editor.subtitle}</p>
                </div>
              </div>
              <div className="mt-4">
                <StatusPill tone={editor.status === "AVAILABLE" ? "success" : editor.status === "ALPHA" ? "warning" : "neutral"}>
                  {editor.status}
                </StatusPill>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border/80 bg-background/95 p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl border border-teal/30 bg-teal/[0.08] p-3 text-teal">
              <Monitor className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Operator surface
              </p>
              <h4 className="mt-2 text-lg font-semibold">IDE workflow stays intact</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Syntax highlighting, inline <PhiC /> status, one-click lift and `brikc lsp` keep verification inside the editor loop.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <MetricTile label="Syntax" value=".pcd aware" />
            <MetricTile label="Status" value={<><PhiC /> inline</>} />
            <MetricTile label="Backend" value="brikc lsp" />
          </div>
        </div>
      </div>
    </ArtifactFrame>
  );
}

export function HomeProofArtifactsShowcase() {
  return (
    <div className="space-y-12">
      <ProblemFrameArtifact />
      <BlueprintHubArtifact compact />
      <LanguageExchangeArtifact />
      <GuaranteeMatrixArtifact />
      <RegistryWorkbenchArtifact />
      <WorkflowRailArtifact />
      <IntegrationRelayArtifact />
      <EditorControlArtifact />
      <AgentProofLoopArtifact />
      <EvidenceDossierArtifact />
      <RiskCaseBoardArtifact />
    </div>
  );
}
