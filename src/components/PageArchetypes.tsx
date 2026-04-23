import type { ReactNode } from "react";
import {
  ArrowRight,
  ExternalLink,
  Gauge,
  Link2,
  MoveRight,
  ShieldCheck,
  Layers,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  ArtifactFrame,
  ArtifactHeader,
  CodeProofPanel,
  FlowNode,
  MetricTile,
  ProofBadge,
  StatusPill,
} from "@/components/HomeProofArtifacts";
import { PageSectionHeader } from "@/components/PageArtifacts";
import {
  renderBrandText,
  ButtonVNext,
  ProtagonistSurface,
  PageHeaderVNext,
} from "@/components/vnext/primitives";

export {
  renderBrandText,
  ButtonVNext,
  ProtagonistSurface,
  SupportingSurface,
  PageHeaderVNext,
  PillarCard,
  GitHubMark,
  DiscordMark,
  BrandWordmark,
} from "@/components/vnext/primitives";

export type ActionSpec = {
  label: string;
  href: string;
  tone?: "primary" | "secondary" | "link";
  external?: boolean;
};

export type MetricSpec = {
  label: string;
  value: string;
  detail: string;
};

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export type PageAction = {
  label: string;
  href: string;
  tone?: "primary" | "secondary" | "link";
  external?: boolean;
};

export type SurfaceMetric = { label: string; value: string; detail: string };
export type SurfaceRow = { title: string; body: string; note?: string };
export type RiskTrack = {
  label: string;
  title: string;
  body: string;
  emphasis?: "risk" | "proof";
};
export type ConstraintRow = { title: string; body: string; outcome: string };
export type ScenarioStep = {
  label: string;
  title: string;
  body: string;
  state?: "idle" | "active" | "warning" | "success";
};

export type UtilityPageSpec = {
  hero: {
    eyebrow: string;
    title: string;
    highlight?: string;
    description: string;
    backgroundImageSrc?: string;
    actions?: PageAction[];
    metrics?: SurfaceMetric[];
  };
  sectionHeader: {
    eyebrow: string;
    title: string;
    description: string;
  };
  primarySurface: {
    eyebrow: string;
    title: string;
    description: string;
    metrics?: SurfaceMetric[];
    rows: SurfaceRow[];
    footer?: ReactNode;
    thesis?: boolean;
    statusLabel?: string;
    statusTone?: "teal" | "success" | "warning" | "neutral";
  };
  secondarySurface?: {
    eyebrow: string;
    title: string;
    description: string;
    rows?: SurfaceRow[];
    channels?: Array<{
      title: string;
      body: string;
      action: string;
      href: string;
      external?: boolean;
    }>;
    links?: Array<{ title: string; body: string; href: string; external?: boolean }>;
    footer?: ReactNode;
    kind?: "utility" | "action" | "docs";
    statusLabel?: string;
    statusTone?: "teal" | "success" | "warning" | "neutral";
  };
  cta?: {
    title: string;
    description: string;
    actions: PageAction[];
  };
};

export type RiskPageSpec = {
  hero: {
    eyebrow: string;
    title: string;
    highlight?: string;
    description: string;
    backgroundImageSrc?: string;
    actions?: PageAction[];
    metrics: SurfaceMetric[];
    statusLabel?: string;
    statusTone?: "teal" | "success" | "warning" | "neutral";
    proofStripEyebrow?: string;
    proofStripTitle?: string;
    proofStripDescription?: string;
  };
  sectionHeader: {
    eyebrow: string;
    title: string;
    description: string;
  };
  evidence: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: SurfaceMetric[];
    tracks: RiskTrack[];
    statusLabel?: string;
    statusTone?: "teal" | "success" | "warning" | "neutral";
  };
  constraint: {
    eyebrow: string;
    title: string;
    description: string;
    constraints: ConstraintRow[];
    codeEyebrow?: string;
    codeTitle?: string;
    code?: string;
    footer?: ReactNode;
    statusLabel?: string;
    statusTone?: "teal" | "success" | "warning" | "neutral";
    showProofBadge?: boolean;
  };
  scenario: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ScenarioStep[];
    statusLabel?: string;
    statusTone?: "teal" | "success" | "warning" | "neutral";
    footer?: ReactNode;
  };
  cta: {
    title: string;
    description: string;
    actions: PageAction[];
  };
};

export function ActionAnchor({ action }: { action: ActionSpec }) {
  return (
    <ButtonVNext
      href={action.href}
      tone={action.tone}
      external={action.external}
      className={cx(
        "h-12 px-8 text-sm",
        action.tone === "secondary" && "bg-white/5 border-white/10 text-white hover:bg-white/10"
      )}
    >
      {action.label}
    </ButtonVNext>
  );
}

export function CanonicalPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-[color:var(--accent)]/30">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function CanonicalSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cx("relative border-t border-white/5", className)}>
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-24 md:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}

export function CanonicalPageHero({
  eyebrow,
  title,
  description,
  backgroundImageSrc,
  actions,
  metrics,
  status,
  proofStripEyebrow,
  proofStripTitle,
  proofStripDescription,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  backgroundImageSrc?: string;
  actions: ActionSpec[];
  metrics?: MetricSpec[];
  status?: ReactNode;
  proofStripEyebrow?: string;
  proofStripTitle?: string;
  proofStripDescription?: string;
}) {
  return (
    <ProtagonistSurface className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32 lg:pt-36 lg:pb-40">
      {backgroundImageSrc ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.84] [filter:saturate(1.16)_contrast(1.08)_brightness(1.16)]"
            style={{ backgroundImage: `url(${backgroundImageSrc})` }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen opacity-[0.26] [filter:saturate(1.28)_contrast(1.08)_brightness(1.3)]"
            style={{ backgroundImage: `url(${backgroundImageSrc})` }}
          />
        </>
      ) : null}
      <div className="absolute inset-0 blueprint-grid opacity-[0.08]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,10,0.42)_0%,rgba(4,10,16,0.18)_28%,rgba(4,10,16,0.14)_56%,rgba(1,4,8,0.62)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,182,172,0.05)_0%,rgba(8,18,28,0.04)_34%,rgba(2,6,10,0.18)_70%,rgba(1,3,6,0.52)_100%)]" />
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12 text-center">
        <PageHeaderVNext
          centered
          eyebrow={eyebrow}
          title={title}
          description={description}
          status={status}
        />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {actions.map((action) => (
            <ActionAnchor key={`${action.label}-${action.href}`} action={action} />
          ))}
        </div>

        {metrics && (
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <MetricTile
                dark
                key={metric.label}
                label={metric.label}
                value={metric.value}
                detail={metric.detail}
                className="border-white/14 bg-[#0f1a28] shadow-[0_18px_44px_rgba(0,0,0,0.28)]"
              />
            ))}
          </div>
        )}

        {proofStripTitle && (
          <div className="mx-auto mt-16 max-w-4xl border-t border-white/10 pt-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">
              {proofStripEyebrow ?? "Verification strip"}
            </p>
            <h3 className="mt-4 text-xl font-bold text-white tracking-tight">
              {proofStripTitle}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-2xl mx-auto">
              {proofStripDescription}
            </p>
          </div>
        )}
      </div>
    </ProtagonistSurface>
  );
}

export function RiskEvidenceSurface({
  eyebrow,
  title,
  description,
  metrics,
  tracks,
  statusLabel,
  statusTone,
}: {
  eyebrow: string;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
  tracks: Array<{ label: string; title: string; body: string; emphasis?: "risk" | "proof" }>;
  statusLabel?: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
}) {
  return (
    <ArtifactFrame dark className="space-y-6">
      <ArtifactHeader
        dark
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={statusLabel ? (
          <StatusPill tone={statusTone ?? "warning"}>
            <ShieldCheck className="h-3.5 w-3.5" />
            {statusLabel}
          </StatusPill>
        ) : undefined}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <MetricTile
            dark
            key={metric.label}
            label={metric.label}
            value={metric.value}
            detail={metric.detail}
          />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {tracks.map((track) => (
          <div
            key={track.label}
            className={cx(
              "rounded-[1.5rem] border p-5 shadow-sm",
              track.emphasis === "proof"
                ? "border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]"
                : track.emphasis === "risk"
                  ? "border-amber-500/25 bg-amber-500/[0.08]"
                  : "border-white/10 bg-white/[0.04]",
            )}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {track.label}
            </p>
            <p className="mt-3 text-sm font-semibold text-foreground">{track.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {track.body}
            </p>
          </div>
        ))}
      </div>
    </ArtifactFrame>
  );
}

export function ConstraintEnvelopeSurface({
  eyebrow,
  title,
  description,
  constraints,
  codeEyebrow,
  codeTitle,
  code,
  footer,
  statusLabel,
  statusTone,
  showProofBadge,
}: {
  eyebrow: string;
  title: string;
  description: string;
  constraints: Array<{ title: string; body: string; outcome: string }>;
  codeEyebrow?: string;
  codeTitle?: string;
  code?: string;
  footer?: ReactNode;
  statusLabel?: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
  showProofBadge?: boolean;
}) {
  return (
    <ArtifactFrame dark className="space-y-6">
      <ArtifactHeader
        dark
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={
          showProofBadge ? (
            <ProofBadge />
          ) : statusLabel ? (
            <StatusPill tone={statusTone ?? "neutral"}>{statusLabel}</StatusPill>
          ) : undefined
        }
      />
      <div className={cx("grid gap-4", code ? "xl:grid-cols-[0.95fr_1.05fr]" : undefined)}>
        <div className="grid gap-3">
          {constraints.map((constraint) => (
            <div
              key={constraint.title}
              className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-5 py-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-foreground">
                  {constraint.title}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                  {constraint.outcome}
                  <MoveRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {constraint.body}
              </p>
            </div>
          ))}
        </div>
        {code && codeTitle ? (
          <CodeProofPanel
            dark
            eyebrow={codeEyebrow ?? "Bounded example"}
            title={codeTitle}
            badge={<ProofBadge />}
            code={code}
          />
        ) : null}
      </div>
      {footer ? (
        <div className="rounded-[1.4rem] border border-[color:var(--accent-soft)]/20 bg-[color:var(--accent-soft)]/10 p-4 text-sm text-muted-foreground">
          {footer}
        </div>
      ) : null}
    </ArtifactFrame>
  );
}

export function ScenarioFlowSurface({
  eyebrow,
  title,
  description,
  steps,
  statusLabel,
  statusTone,
  footer,
}: {
  eyebrow: string;
  title: string;
  description: string;
  steps: Array<{ label: string; title: string; body: string; state?: "idle" | "active" | "warning" | "success" }>;
  statusLabel?: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
  footer?: ReactNode;
}) {
  return (
    <ArtifactFrame dark className="space-y-6">
      <ArtifactHeader
        dark
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={statusLabel ? (
          <StatusPill tone={statusTone ?? "teal"}>
            <Link2 className="h-3.5 w-3.5" />
            {statusLabel}
          </StatusPill>
        ) : undefined}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <FlowNode
            dark
            key={step.label}
            label={step.label}
            title={step.title}
            body={step.body}
            state={step.state}
            icon={<ArrowRight className="h-4 w-4" />}
          />
        ))}
      </div>
      {footer ? (
        <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 text-sm text-muted-foreground">
          {footer}
        </div>
      ) : null}
    </ArtifactFrame>
  );
}

export function UtilitySurface({
  eyebrow,
  title,
  description,
  rows,
  footer,
  statusLabel,
  statusTone,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  rows: Array<{ title: string; body: string; note?: string }>;
  footer?: ReactNode;
  statusLabel?: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
  dark?: boolean;
}) {
  return (
    <ArtifactFrame dark={dark} className="space-y-6">
      <ArtifactHeader
        dark={dark}
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={
          <StatusPill tone={statusTone ?? "teal"}>
            <Layers className="h-3.5 w-3.5" />
            {statusLabel ?? "Utility surface"}
          </StatusPill>
        }
      />
      <div className="grid gap-3">
        {rows.map((row) => (
          <div
            key={row.title}
            className={cx(
              "rounded-[1.15rem] border px-5 py-4",
              dark ? "border-white/10 bg-white/[0.04]" : "border-border bg-card/95"
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-bold text-white">{row.title}</p>
              {row.note && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                  {row.note}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm leading-6 text-white/40">{row.body}</p>
          </div>
        ))}
      </div>
      {footer ? (
        <div className={cx(
          "rounded-[1.15rem] border p-4 text-sm text-muted-foreground",
          dark ? "border-[color:var(--accent-soft)]/20 bg-[color:var(--accent-soft)]/10" : "border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]"
        )}>
          {footer}
        </div>
      ) : null}
    </ArtifactFrame>
  );
}

export function CompanyThesisSurface({
  eyebrow,
  title,
  description,
  metrics,
  statements,
  status,
  statusLabel,
  statusTone,
}: {
  eyebrow: string;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
  statements: Array<{ title: string; body: string }>;
  status?: ReactNode;
  statusLabel?: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
}) {
  return (
    <ArtifactFrame dark className="space-y-6">
      <ArtifactHeader
        dark
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={
          status ??
          (statusLabel ? (
            <StatusPill tone={statusTone ?? "teal"}>{statusLabel}</StatusPill>
          ) : undefined)
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <MetricTile
            dark
            key={metric.label}
            label={metric.label}
            value={metric.value}
            detail={metric.detail}
          />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {statements.map((statement, index) => (
          <div
            key={statement.title}
            className={cx(
              "rounded-[1.5rem] border p-5 shadow-sm transition-colors",
              index === 0 
                ? "border-[color:var(--accent-soft)]/40 bg-[color:var(--accent-soft)]/10" 
                : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]",
            )}
          >
            <p className="text-sm font-bold text-white">{statement.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              {statement.body}
            </p>
          </div>
        ))}
      </div>
    </ArtifactFrame>
  );
}

export function ActionSurface({
  eyebrow,
  title,
  description,
  channels,
  footer,
  statusLabel,
  statusTone,
}: {
  eyebrow: string;
  title: string;
  description: string;
  channels: Array<{ title: string; body: string; action: string; href: string; external?: boolean }>;
  footer?: ReactNode;
  statusLabel?: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
}) {
  return (
    <ArtifactFrame dark className="space-y-6">
      <ArtifactHeader
        dark
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={statusLabel ? (
          <StatusPill tone={statusTone ?? "teal"}>
            <ArrowRight className="h-3.5 w-3.5" />
            {statusLabel}
          </StatusPill>
        ) : undefined}
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {channels.map((channel) => (
          <div
            key={channel.title}
            className="rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-5 shadow-sm transition-colors hover:bg-white/[0.04]"
          >
            <p className="text-sm font-bold text-white">{channel.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              {channel.body}
            </p>
            <div className="mt-5">
              <ActionAnchor
                action={{
                  label: channel.action,
                  href: channel.href,
                  tone: "link",
                  external: channel.external,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {footer ? (
        <div className="rounded-[1.4rem] border border-[color:var(--accent-soft)]/20 bg-[color:var(--accent-soft)]/10 p-4 text-sm text-white/40">
          {footer}
        </div>
      ) : null}
    </ArtifactFrame>
  );
}

export function DocsRailSurface({
  eyebrow,
  title,
  description,
  links,
  note,
  statusLabel,
  statusTone,
}: {
  eyebrow: string;
  title: string;
  description: string;
  links: Array<{ title: string; body: string; href: string; external?: boolean }>;
  note?: ReactNode;
  statusLabel?: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
}) {
  return (
    <ArtifactFrame dark className="space-y-6">
      <ArtifactHeader
        dark
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={statusLabel ? (
          <StatusPill tone={statusTone ?? "neutral"}>
            <ExternalLink className="h-3.5 w-3.5" />
            {statusLabel}
          </StatusPill>
        ) : undefined}
      />
      <div className="grid gap-3">
        {links.map((link) => (
          <div
            key={link.title}
            className="rounded-[1.35rem] border border-white/5 bg-white/[0.02] px-5 py-4 transition-colors hover:bg-white/[0.04]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-bold text-white">{link.title}</p>
              <ActionAnchor
                action={{
                  label: "Open",
                  href: link.href,
                  tone: "link",
                  external: link.external,
                }}
              />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/40">
              {link.body}
            </p>
          </div>
        ))}
      </div>
      {note ? (
        <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 text-sm text-white/40">
          {note}
        </div>
      ) : null}
    </ArtifactFrame>
  );
}

export function LanguageExchangeSurface({
  eyebrow,
  title,
  description,
  metrics,
  exchanges,
  codeTitle,
  code,
  footer,
  statusLabel,
  statusTone,
}: {
  eyebrow: string;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
  exchanges: Array<{ title: string; body: string }>;
  codeTitle?: string;
  code?: string;
  footer?: ReactNode;
  statusLabel?: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
}) {
  return (
    <ArtifactFrame dark className="space-y-6">
      <ArtifactHeader
        dark
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={
          statusLabel ? (
            <StatusPill tone={statusTone ?? "teal"}>
              <ArrowRight className="h-3.5 w-3.5" />
              {statusLabel}
            </StatusPill>
          ) : undefined
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <MetricTile
            dark
            key={metric.label}
            label={metric.label}
            value={metric.value}
            detail={metric.detail}
          />
        ))}
      </div>
      <div className={cx("grid gap-4", code ? "xl:grid-cols-[0.95fr_1.05fr]" : undefined)}>
        <div className="grid gap-3">
          {exchanges.map((exchange) => (
            <div
              key={exchange.title}
              className="rounded-[1.35rem] border border-white/5 bg-white/[0.02] px-5 py-4"
            >
              <p className="text-sm font-semibold text-white">{exchange.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {exchange.body}
              </p>
            </div>
          ))}
        </div>
        {code && codeTitle ? (
          <CodeProofPanel
            dark
            eyebrow="Language example"
            title={codeTitle}
            badge={<StatusPill tone="success">bridge pattern</StatusPill>}
            code={code}
          />
        ) : null}
      </div>
      {footer ? (
        <div className="rounded-[1.4rem] border border-[color:var(--accent-soft)]/20 bg-[color:var(--accent-soft)]/10 p-4 text-sm text-white/40">
          {footer}
        </div>
      ) : null}
    </ArtifactFrame>
  );
}

export function ArchetypeSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-6xl">
      <PageSectionHeader
        dark
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
    </div>
  );
}

function HeroTitle({
  title,
  highlight,
}: {
  title: string;
  highlight?: string;
}) {
  if (!highlight) {
    return title;
  }

  return (
    <>
      {title} <span className="text-[color:var(--accent)]">{highlight}</span>
    </>
  );
}

export function UtilityPageView({ page }: { page: UtilityPageSpec }) {
  const { hero, sectionHeader, primarySurface, secondarySurface, cta } = page;

  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow={hero.eyebrow}
        title={<HeroTitle title={hero.title} highlight={hero.highlight} />}
        description={hero.description}
        backgroundImageSrc={hero.backgroundImageSrc}
        actions={hero.actions || []}
        metrics={hero.metrics}
      />

      <section className="bg-black">
        <CanonicalSection>
          <ArchetypeSectionHeader {...sectionHeader} />
          <div className="mx-auto mt-12 grid max-w-6xl gap-8">
            {primarySurface.thesis && primarySurface.metrics ? (
              <CompanyThesisSurface
                eyebrow={primarySurface.eyebrow}
                title={primarySurface.title}
                description={primarySurface.description}
                metrics={primarySurface.metrics}
                statements={primarySurface.rows.map((row) => ({
                  title: row.title,
                  body: row.body,
                }))}
                statusLabel={primarySurface.statusLabel}
                statusTone={primarySurface.statusTone}
              />
            ) : (
              <UtilitySurface
                eyebrow={primarySurface.eyebrow}
                title={primarySurface.title}
                description={primarySurface.description}
                rows={primarySurface.rows}
                footer={primarySurface.footer}
                statusLabel={primarySurface.statusLabel}
                statusTone={primarySurface.statusTone}
              />
            )}

            {secondarySurface?.kind === "action" && secondarySurface.channels ? (
              <ActionSurface
                eyebrow={secondarySurface.eyebrow}
                title={secondarySurface.title}
                description={secondarySurface.description}
                channels={secondarySurface.channels}
                footer={secondarySurface.footer}
                statusLabel={secondarySurface.statusLabel}
                statusTone={secondarySurface.statusTone}
              />
            ) : secondarySurface?.kind === "docs" && secondarySurface.links ? (
              <DocsRailSurface
                eyebrow={secondarySurface.eyebrow}
                title={secondarySurface.title}
                description={secondarySurface.description}
                links={secondarySurface.links}
                note={secondarySurface.footer}
                statusLabel={secondarySurface.statusLabel}
                statusTone={secondarySurface.statusTone}
              />
            ) : secondarySurface?.rows ? (
              <UtilitySurface
                eyebrow={secondarySurface.eyebrow}
                title={secondarySurface.title}
                description={secondarySurface.description}
                rows={secondarySurface.rows}
                footer={secondarySurface.footer}
                statusLabel={secondarySurface.statusLabel}
                statusTone={secondarySurface.statusTone}
              />
            ) : null}
          </div>
        </CanonicalSection>
      </section>

      {cta ? (
        <section className="relative px-6 py-32 text-center blueprint-grid overflow-hidden border-t border-white/5 bg-[#0b0b0f]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
              {cta.title}
            </h2>
            <p className="text-lg text-white/40 mx-auto mt-3 max-w-2xl leading-relaxed mb-12">
              {cta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              {cta.actions.map((action) => (
                <ActionAnchor key={`${action.label}-${action.href}`} action={action} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </CanonicalPageLayout>
  );
}

export function RiskPageView({ page }: { page: RiskPageSpec }) {
  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow={page.hero.eyebrow}
        title={<HeroTitle title={page.hero.title} highlight={page.hero.highlight} />}
        description={page.hero.description}
        backgroundImageSrc={page.hero.backgroundImageSrc}
        actions={page.hero.actions || []}
        metrics={page.hero.metrics}
        status={
          page.hero.statusLabel ? (
            <StatusPill tone={page.hero.statusTone ?? "teal"}>
              <Gauge className="h-3.5 w-3.5" />
              {page.hero.statusLabel}
            </StatusPill>
          ) : undefined
        }
        proofStripEyebrow={page.hero.proofStripEyebrow}
        proofStripTitle={page.hero.proofStripTitle}
        proofStripDescription={page.hero.proofStripDescription}
      />

      <section className="bg-black">
        <CanonicalSection>
          <ArchetypeSectionHeader {...page.sectionHeader} />
          <div className="mx-auto mt-12 grid max-w-6xl gap-8">
            <RiskEvidenceSurface {...page.evidence} />
            <ConstraintEnvelopeSurface {...page.constraint} />
            <ScenarioFlowSurface {...page.scenario} />
          </div>
        </CanonicalSection>
      </section>

      <section className="relative px-6 py-32 text-center blueprint-grid overflow-hidden border-t border-white/5 bg-[#0b0b0f]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
            {page.cta.title}
          </h2>
          <p className="text-lg text-white/40 mx-auto mt-3 max-w-2xl leading-relaxed mb-12">
            {page.cta.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
            {page.cta.actions.map((action) => (
              <ActionAnchor key={`${action.label}-${action.href}`} action={action} />
            ))}
          </div>
        </div>
      </section>
    </CanonicalPageLayout>
  );
}
