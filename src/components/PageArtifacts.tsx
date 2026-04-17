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
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className={cx("text-[11px] font-semibold uppercase tracking-[0.22em]", dark ? "text-white/40" : "text-muted-foreground")}>
        {eyebrow}
      </p>
      <h2 className={cx("text-balance text-3xl font-medium tracking-[-0.04em] sm:text-4xl", dark ? "text-white" : "text-foreground")}>
        {title}
      </h2>
      <p className={cx("max-w-2xl text-base leading-7", dark ? "text-white/50" : "text-muted-foreground")}>
        {description}
      </p>
    </div>
  );
}

export function PageSectionHeader(props: { eyebrow: string; title: string; description: string; dark?: boolean }) {
  return <SectionHeaderBase {...props} />;
}

export function HomeSectionHeader(props: { eyebrow: string; title: string; description: string; dark?: boolean }) {
  return <SectionHeaderBase {...props} />;
}

export function ComparisonSurface({
  eyebrow,
  title,
  description,
  statusLabel,
  statusTone,
  leftEyebrow,
  leftTitle,
  leftBody,
  rightEyebrow,
  rightTitle,
  rightBody,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  statusLabel?: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
  leftEyebrow?: string;
  leftTitle: string;
  leftBody: string;
  rightEyebrow?: string;
  rightTitle: string;
  rightBody: string;
  dark?: boolean;
}) {
  return (
    <ArtifactFrame dark={dark} className="space-y-6">
      <ArtifactHeader
        dark={dark}
        eyebrow={eyebrow}
        title={title}
        description={description ?? "Two operating models rendered as concrete surfaces instead of generic feature bullets."}
        status={
          <StatusPill tone={statusTone ?? "teal"}>
            <Sparkles className="h-3.5 w-3.5" />
            {statusLabel ?? "Comparison surface"}
          </StatusPill>
        }
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className={cx(
          "rounded-[1.25rem] border p-5",
          dark ? "border-rose-500/10 bg-rose-500/[0.04]" : "border-rose-500/18 bg-rose-500/[0.06]"
        )}>
          <p className={cx(
            "text-[10px] font-semibold uppercase tracking-[0.18em]",
            dark ? "text-rose-400" : "text-rose-300"
          )}>{leftEyebrow ?? "Legacy pattern"}</p>
          <h3 className="mt-3 text-lg font-medium text-foreground">{leftTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{leftBody}</p>
        </div>
        <div className={cx(
          "rounded-[1.25rem] border p-5",
          dark ? "border-[color:var(--accent-soft)]/20 bg-[color:var(--accent-soft)]/10" : "border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]"
        )}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">{rightEyebrow ?? "BRIK64 pattern"}</p>
          <h3 className="mt-3 text-lg font-medium text-foreground">{rightTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{rightBody}</p>
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
  dark = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
  rows: Array<{ title: string; body: string; state?: "default" | "accent" }>;
  dark?: boolean;
}) {
  return (
    <ArtifactFrame dark={dark} className="space-y-6">
      <ArtifactHeader dark={dark} eyebrow={eyebrow} title={title} description={description} status={<ProofBadge />} />
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <MetricTile dark={dark} key={metric.label} label={metric.label} value={metric.value} detail={metric.detail} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {rows.map((row) => (
          <div
            key={row.title}
            className={cx(
              "rounded-[1.25rem] border p-5",
              row.state === "accent" 
                ? (dark ? "border-[color:var(--accent-soft)]/20 bg-[color:var(--accent-soft)]/10" : "border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]")
                : (dark ? "border-white/10 bg-white/[0.04]" : "border-border bg-card/95"),
            )}
          >
            <p className="text-sm font-medium text-foreground">{row.title}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{row.body}</p>
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
  statusLabel,
  statusTone,
  itemStatusLabel,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{ label: string; body: string }>;
  footer?: ReactNode;
  statusLabel?: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
  itemStatusLabel?: string;
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
          <StatusPill tone={statusTone ?? "success"}>
            <ShieldCheck className="h-3.5 w-3.5" />
            {statusLabel ?? "Evidence surface"}
          </StatusPill>
        }
      />
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item.label} className={cx(
            "rounded-[1.15rem] border px-5 py-4",
            dark ? "border-white/10 bg-white/[0.04]" : "border-border bg-card/95"
          )}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {itemStatusLabel ?? "Evidence"} <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
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

export function PageArtifactsShowcase() {
  return (
    <div className="grid gap-6">
      <ComparisonSurface
        eyebrow="Problem frame"
        title="From verbose theory to a visible operating model"
        leftTitle="Too much explanation, weak object"
        leftBody="The user reads a wall of copy before seeing what the system actually is."
        rightTitle="One protagonist surface"
        rightBody="The section carries state, structure, and system identity in one object before more text arrives."
      />
      <FeatureMatrixSurface
        eyebrow="Shared grammar"
        title="Core page surfaces use one dark-first product language"
        description="Metrics, payload objects, and compact proof cues replace ad hoc card piles and centered teal headings."
        metrics={[
          { label: "Density", value: "Condensed", detail: "Long sections collapse into inspectable payload objects." },
          { label: "Hierarchy", value: "Explicit", detail: "One dominant object per section." },
          { label: "Proof", value: "Visible", detail: "State and scope remain close to the UI." },
        ]}
        rows={[
          { title: "Comparison surface", body: "For category framing and product contrasts." },
          { title: "Evidence surface", body: "For compliance, enterprise, and risk-boundary routes." },
          { title: "Editorial surface", body: "For blog and news with stronger reading rhythm.", state: "accent" },
        ]}
      />
    </div>
  );
}
