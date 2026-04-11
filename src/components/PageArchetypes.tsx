import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ExternalLink,
  Gauge,
  Link2,
  MoveRight,
  ShieldCheck,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";
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

function cx(...classes: Array<string | false | null | undefined>): string {
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

function ActionAnchor({ action }: { action: PageAction }) {
  const tone = action.tone ?? "secondary";
  const isExternalHref =
    action.external ?? /^(https?:|mailto:|tel:)/.test(action.href);
  const shared =
    "inline-flex items-center gap-2 text-sm font-medium transition-colors";
  const classes =
    tone === "primary"
      ? `${shared} rounded-md bg-teal px-6 py-3 text-white hover:bg-teal-hover`
      : tone === "secondary"
        ? `${shared} rounded-md border border-border bg-background px-5 py-3 text-foreground hover:border-teal/30 hover:bg-teal/[0.04]`
        : `${shared} text-muted-foreground hover:text-foreground`;

  const icon = isExternalHref ? (
    <ExternalLink className="h-4 w-4" />
  ) : (
    <ArrowRight className="h-4 w-4" />
  );

  if (isExternalHref) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {action.label}
        {icon}
      </a>
    );
  }

  return (
    <Link href={action.href} className={classes}>
      {action.label}
      {icon}
    </Link>
  );
}

export function CanonicalPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          {children}
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
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
    <section
      className={cx(
        "border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function CanonicalPageHero({
  eyebrow,
  title,
  highlight,
  description,
  actions,
  metrics,
  status,
  proofStripEyebrow,
  proofStripTitle,
  proofStripDescription,
}: {
  eyebrow: string;
  title: ReactNode;
  highlight?: string;
  description: ReactNode;
  actions?: PageAction[];
  metrics?: Array<{ label: string; value: string; detail?: string }>;
  status?: ReactNode;
  proofStripEyebrow?: string;
  proofStripTitle?: ReactNode;
  proofStripDescription?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
      <HeroWireframeClient />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
            {eyebrow}
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
            {highlight ? <span className="text-teal"> {highlight}</span> : null}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
          {actions?.length ? (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {actions.map((action) => (
                <ActionAnchor key={`${action.label}-${action.href}`} action={action} />
              ))}
            </div>
          ) : null}
        </div>

        {metrics?.length ? (
          <div className="mx-auto mt-12 max-w-5xl">
            <ArtifactFrame className="space-y-5">
              <ArtifactHeader
                eyebrow={proofStripEyebrow ?? "Proof strip"}
                title={
                  proofStripTitle ??
                  "One bounded object summarises the page before the body expands it."
                }
                description={
                  proofStripDescription ??
                  "The hero keeps the hook, but the proof strip carries state, scope, and operator-readable consequences."
                }
                status={
                  status ?? (
                    <StatusPill tone="teal">
                      <Gauge className="h-3.5 w-3.5" />
                      page surface
                    </StatusPill>
                  )
                }
              />
              <div className="grid gap-4 md:grid-cols-3">
                {metrics.map((metric) => (
                  <MetricTile
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    detail={metric.detail}
                  />
                ))}
              </div>
            </ArtifactFrame>
          </div>
        ) : null}
      </div>
    </section>
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
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={
          <StatusPill tone={statusTone ?? "warning"}>
            <ShieldCheck className="h-3.5 w-3.5" />
            {statusLabel ?? "risk evidence"}
          </StatusPill>
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <MetricTile
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
                ? "border-teal/25 bg-teal/[0.05]"
                : track.emphasis === "risk"
                  ? "border-amber-500/25 bg-amber-500/[0.08]"
                  : "border-border/80 bg-background/90",
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
}: {
  eyebrow: string;
  title: string;
  description: string;
  constraints: Array<{ title: string; body: string; outcome: string }>;
  codeEyebrow?: string;
  codeTitle?: string;
  code?: string;
  footer?: ReactNode;
}) {
  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={<ProofBadge />}
      />
      <div className={cx("grid gap-4", code ? "xl:grid-cols-[0.95fr_1.05fr]" : undefined)}>
        <div className="grid gap-3">
          {constraints.map((constraint) => (
            <div
              key={constraint.title}
              className="rounded-[1.35rem] border border-border/80 bg-background/90 px-5 py-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-foreground">
                  {constraint.title}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">
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
            eyebrow={codeEyebrow ?? "Bounded example"}
            title={codeTitle}
            badge={<ProofBadge />}
            code={code}
          />
        ) : null}
      </div>
      {footer ? (
        <div className="rounded-[1.4rem] border border-teal/15 bg-teal/[0.04] p-4 text-sm text-muted-foreground">
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
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={
          <StatusPill tone={statusTone ?? "teal"}>
            <Link2 className="h-3.5 w-3.5" />
            {statusLabel ?? "scenario flow"}
          </StatusPill>
        }
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <FlowNode
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
        <div className="rounded-[1.4rem] border border-border/80 bg-background/90 p-4 text-sm text-muted-foreground">
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
}: {
  eyebrow: string;
  title: string;
  description: string;
  rows: Array<{ title: string; body: string; note?: string }>;
  footer?: ReactNode;
}) {
  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={
          <StatusPill tone="neutral">
            <Gauge className="h-3.5 w-3.5" />
            utility surface
          </StatusPill>
        }
      />
      <div className="grid gap-3">
        {rows.map((row) => (
          <div
            key={row.title}
            className="rounded-[1.35rem] border border-border/80 bg-background/90 px-5 py-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-foreground">{row.title}</p>
              {row.note ? (
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {row.note}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {row.body}
            </p>
          </div>
        ))}
      </div>
      {footer ? (
        <div className="rounded-[1.4rem] border border-border/80 bg-muted/40 p-4 text-sm text-muted-foreground">
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
}: {
  eyebrow: string;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
  statements: Array<{ title: string; body: string }>;
}) {
  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={<ProofBadge />}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <MetricTile
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
              "rounded-[1.5rem] border p-5 shadow-sm",
              index === 0 ? "border-teal/25 bg-teal/[0.05]" : "border-border/80 bg-background/90",
            )}
          >
            <p className="text-sm font-semibold text-foreground">{statement.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
}: {
  eyebrow: string;
  title: string;
  description: string;
  channels: Array<{ title: string; body: string; action: string; href: string; external?: boolean }>;
  footer?: ReactNode;
}) {
  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={
          <StatusPill tone="teal">
            <ArrowRight className="h-3.5 w-3.5" />
            action rail
          </StatusPill>
        }
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {channels.map((channel) => (
          <div
            key={channel.title}
            className="rounded-[1.5rem] border border-border/80 bg-background/90 p-5 shadow-sm"
          >
            <p className="text-sm font-semibold text-foreground">{channel.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
        <div className="rounded-[1.4rem] border border-teal/15 bg-teal/[0.04] p-4 text-sm text-muted-foreground">
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
}: {
  eyebrow: string;
  title: string;
  description: string;
  links: Array<{ title: string; body: string; href: string; external?: boolean }>;
  note?: ReactNode;
}) {
  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={
          <StatusPill tone="neutral">
            <ExternalLink className="h-3.5 w-3.5" />
            docs rail
          </StatusPill>
        }
      />
      <div className="grid gap-3">
        {links.map((link) => (
          <div
            key={link.title}
            className="rounded-[1.35rem] border border-border/80 bg-background/90 px-5 py-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-foreground">{link.title}</p>
              <ActionAnchor
                action={{
                  label: "Open",
                  href: link.href,
                  tone: "link",
                  external: link.external,
                }}
              />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {link.body}
            </p>
          </div>
        ))}
      </div>
      {note ? (
        <div className="rounded-[1.4rem] border border-border/80 bg-muted/40 p-4 text-sm text-muted-foreground">
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
}: {
  eyebrow: string;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
  exchanges: Array<{ title: string; body: string }>;
  codeTitle?: string;
  code?: string;
  footer?: ReactNode;
}) {
  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={
          <StatusPill tone="teal">
            <ArrowRight className="h-3.5 w-3.5" />
            language exchange
          </StatusPill>
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <MetricTile
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
              className="rounded-[1.35rem] border border-border/80 bg-background/90 px-5 py-4"
            >
              <p className="text-sm font-semibold text-foreground">{exchange.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {exchange.body}
              </p>
            </div>
          ))}
        </div>
        {code && codeTitle ? (
          <CodeProofPanel
            eyebrow="Language example"
            title={codeTitle}
            badge={<StatusPill tone="success">bridge pattern</StatusPill>}
            code={code}
          />
        ) : null}
      </div>
      {footer ? (
        <div className="rounded-[1.4rem] border border-teal/15 bg-teal/[0.04] p-4 text-sm text-muted-foreground">
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
      {title} <span className="text-teal">{highlight}</span>
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
        actions={hero.actions}
        metrics={hero.metrics}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader {...sectionHeader} />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
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
            />
          ) : (
            <UtilitySurface
              eyebrow={primarySurface.eyebrow}
              title={primarySurface.title}
              description={primarySurface.description}
              rows={primarySurface.rows}
              footer={primarySurface.footer}
            />
          )}

          {secondarySurface?.kind === "action" && secondarySurface.channels ? (
            <ActionSurface
              eyebrow={secondarySurface.eyebrow}
              title={secondarySurface.title}
              description={secondarySurface.description}
              channels={secondarySurface.channels}
              footer={secondarySurface.footer}
            />
          ) : secondarySurface?.kind === "docs" && secondarySurface.links ? (
            <DocsRailSurface
              eyebrow={secondarySurface.eyebrow}
              title={secondarySurface.title}
              description={secondarySurface.description}
              links={secondarySurface.links}
              note={secondarySurface.footer}
            />
          ) : secondarySurface?.rows ? (
            <UtilitySurface
              eyebrow={secondarySurface.eyebrow}
              title={secondarySurface.title}
              description={secondarySurface.description}
              rows={secondarySurface.rows}
              footer={secondarySurface.footer}
            />
          ) : null}
        </div>
      </CanonicalSection>

      {cta ? (
        <CanonicalSection className="text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mx-auto text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {cta.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {cta.actions.map((action) => (
                <ActionAnchor key={`${action.label}-${action.href}`} action={action} />
              ))}
            </div>
          </div>
        </CanonicalSection>
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
        actions={page.hero.actions}
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

      <CanonicalSection>
        <ArchetypeSectionHeader {...page.sectionHeader} />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
          <RiskEvidenceSurface {...page.evidence} />
          <ConstraintEnvelopeSurface {...page.constraint} />
          <ScenarioFlowSurface {...page.scenario} />
        </div>
      </CanonicalSection>

      <CanonicalSection className="text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mx-auto text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {page.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {page.cta.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {page.cta.actions.map((action) => (
              <ActionAnchor key={`${action.label}-${action.href}`} action={action} />
            ))}
          </div>
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
