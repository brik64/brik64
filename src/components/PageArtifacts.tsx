"use client";

import type { ReactNode } from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { ArtifactFrame, ArtifactHeader, MetricTile, ProofBadge, StatusPill } from "@/components/HomeProofArtifacts";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeaderBase({
  eyebrow,
  title,
  description,
  titleClassName,
}: {
  eyebrow: string;
  title: string;
  description: string;
  titleClassName: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal">{eyebrow}</p>
      <h2 className={cx("mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[2.5rem]", titleClassName)}>{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
    </div>
  );
}

export function PageSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <SectionHeaderBase
      eyebrow={eyebrow}
      title={title}
      description={description}
      titleClassName="text-teal"
    />
  );
}

export function HomeSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <SectionHeaderBase
      eyebrow={eyebrow}
      title={title}
      description={description}
      titleClassName="text-teal"
    />
  );
}

export function ComparisonSurface({
  eyebrow,
  title,
  leftTitle,
  leftBody,
  rightTitle,
  rightBody,
}: {
  eyebrow: string;
  title: string;
  leftTitle: string;
  leftBody: string;
  rightTitle: string;
  rightBody: string;
}) {
  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow={eyebrow}
        title={title}
        description="Two opposing operating models rendered as artifacts instead of generic feature bullets."
        status={<StatusPill tone="teal"><Sparkles className="h-3.5 w-3.5" />Comparison Surface</StatusPill>}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-rose-500/20 bg-rose-500/[0.04] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-700">Legacy pattern</p>
          <h3 className="mt-3 text-lg font-semibold text-foreground">{leftTitle}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{leftBody}</p>
        </div>
        <div className="rounded-[1.5rem] border border-teal/20 bg-teal/[0.05] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">BRIK64 pattern</p>
          <h3 className="mt-3 text-lg font-semibold text-foreground">{rightTitle}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{rightBody}</p>
        </div>
      </div>
    </ArtifactFrame>
  );
}

export function FeatureMatrixSurface({
  eyebrow,
  title,
  description,
  metrics,
  rows,
}: {
  eyebrow: string;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: ReactNode; detail: string }>;
  rows: Array<{ title: string; body: string; state?: "default" | "accent" }>;
}) {
  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader eyebrow={eyebrow} title={title} description={description} status={<ProofBadge />} />
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <MetricTile key={metric.label} label={metric.label} value={metric.value} detail={metric.detail} />
        ))}
      </div>
      <div className="grid gap-3">
        {rows.map((row) => (
          <div
            key={row.title}
            className={cx(
              "rounded-[1.5rem] border p-5 shadow-sm",
              row.state === "accent" ? "border-teal/25 bg-teal/[0.05]" : "border-border/80 bg-background/90",
            )}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <p className="text-sm font-semibold text-foreground">{row.title}</p>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                structured payload
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{row.body}</p>
          </div>
        ))}
      </div>
    </ArtifactFrame>
  );
}

export function EvidenceSurface({
  eyebrow,
  title,
  description,
  items,
  footer,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{ label: ReactNode; body: string }>;
  footer?: ReactNode;
}) {
  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        status={<StatusPill tone="success"><ShieldCheck className="h-3.5 w-3.5" />Evidence Surface</StatusPill>}
      />
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div key={index} className="rounded-[1.35rem] border border-border/80 bg-background/90 px-5 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Evidence <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
      {footer ? <div className="rounded-[1.4rem] border border-teal/15 bg-teal/[0.04] p-4 text-sm text-muted-foreground">{footer}</div> : null}
    </ArtifactFrame>
  );
}

export function PageArtifactsShowcase() {
  return (
    <div className="grid gap-6">
      <ComparisonSurface
        eyebrow="Problem Frame"
        title="From open software claims to bounded system objects"
        leftTitle="Verbose claims, weak object"
        leftBody="A wall of text that explains the problem but does not demonstrate anything concrete or inspectable."
        rightTitle="One protagonist artifact"
        rightBody="A single surface carries the idea, state, metadata, and proof angle. The user understands the system faster."
      />
      <FeatureMatrixSurface
        eyebrow="Feature Matrix"
        title="Core page surfaces share one grammar"
        description="Metrics, compact proof lines, and explicit payload blocks replace ad hoc cards."
        metrics={[
          { label: "Density", value: "Condensed", detail: "Long sections collapse into 3-5 payload objects." },
          { label: "Hierarchy", value: "Explicit", detail: "One dominant object per section, not many equal-weight cards." },
          { label: "Proof", value: "Visible", detail: "State, evidence, and scope live inside the same surface." },
        ]}
        rows={[
          { title: "Comparison Surface", body: "For product positioning, legacy-vs-certified framing, and explanation-heavy pages." },
          { title: "Evidence Surface", body: "For compliance, enterprise, safety, and any page where scope must stay technically honest." },
          { title: "Editorial Surface", body: "For blog and news: covers, metadata, pagination, and a stronger reading rhythm.", state: "accent" },
        ]}
      />
    </div>
  );
}
