import {
  Archive,
  CircleDashed,
  Clock3,
  GitPullRequestClosed,
  Lock,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
  ShieldX,
  Unlock,
} from "lucide-react";
import type { ComponentType, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type BrikCertificationStatus =
  | "DRAFT"
  | "VALIDATED"
  | "CORE_CERTIFIED"
  | "CONTRACT_CERTIFIED"
  | "COMPOSITE_CERTIFIED"
  | "PARTIALLY_CERTIFIED"
  | "RESOLVED"
  | "FAILED"
  | "INVALID"
  | "STALE"
  | "BROKEN_DEPENDENCY"
  | "DEPRECATED"
  | "PENDING_EVIDENCE";

export type BrikVerificationState = "pass" | "fail" | "pending" | "missing";
export type BrikProofVisibility = "PUBLIC" | "PRIVATE";

type EffectiveTone = "neutral" | "info" | "success" | "contract" | "warning" | "danger";

const statusMeta: Record<BrikCertificationStatus, { label: string; tone: EffectiveTone; icon: ComponentType<{ className?: string }> }> = {
  DRAFT: { label: "Draft", tone: "neutral", icon: CircleDashed },
  VALIDATED: { label: "Validated", tone: "info", icon: ShieldQuestion },
  CORE_CERTIFIED: { label: "Core certified", tone: "success", icon: ShieldCheck },
  CONTRACT_CERTIFIED: { label: "Contract certified", tone: "contract", icon: ShieldAlert },
  COMPOSITE_CERTIFIED: { label: "Composite certified", tone: "success", icon: ShieldCheck },
  PARTIALLY_CERTIFIED: { label: "Partially certified", tone: "warning", icon: ShieldQuestion },
  RESOLVED: { label: "Resolved", tone: "info", icon: ShieldQuestion },
  FAILED: { label: "Invalid", tone: "danger", icon: ShieldX },
  INVALID: { label: "Invalid", tone: "danger", icon: ShieldX },
  STALE: { label: "Stale", tone: "warning", icon: Clock3 },
  BROKEN_DEPENDENCY: { label: "Broken dependency", tone: "danger", icon: GitPullRequestClosed },
  DEPRECATED: { label: "Deprecated", tone: "neutral", icon: Archive },
  PENDING_EVIDENCE: { label: "Pending evidence", tone: "neutral", icon: ShieldQuestion },
};

const toneClass: Record<EffectiveTone, { shell: string; icon: string; bodyText: string; visibility: string }> = {
  neutral: {
    shell: "border-border bg-muted/20",
    icon: "bg-muted text-muted-foreground",
    bodyText: "text-muted-foreground",
    visibility: "bg-muted",
  },
  info: {
    shell: "border-primary/35 bg-primary/10",
    icon: "bg-primary text-primary-foreground",
    bodyText: "text-primary",
    visibility: "bg-primary/26",
  },
  success: {
    shell: "border-[hsl(var(--brik-core)/0.38)] bg-[hsl(var(--brik-core)/0.10)]",
    icon: "bg-[hsl(var(--brik-core))] text-white",
    bodyText: "text-[hsl(var(--brik-core))]",
    visibility: "bg-[hsl(var(--brik-core)/0.26)]",
  },
  contract: {
    shell: "border-[hsl(var(--brik-extended)/0.38)] bg-[hsl(var(--brik-extended)/0.10)]",
    icon: "bg-[hsl(var(--brik-extended))] text-white",
    bodyText: "text-[hsl(var(--brik-extended))]",
    visibility: "bg-[hsl(var(--brik-extended)/0.26)]",
  },
  warning: {
    shell: "border-[hsl(var(--brik-stale)/0.42)] bg-[hsl(var(--brik-stale)/0.10)]",
    icon: "bg-[hsl(var(--brik-stale))] text-slate-950",
    bodyText: "text-[hsl(var(--brik-stale))]",
    visibility: "bg-[hsl(var(--brik-stale)/0.28)]",
  },
  danger: {
    shell: "border-[hsl(var(--brik-invalid)/0.45)] bg-[hsl(var(--brik-invalid)/0.10)]",
    icon: "bg-[hsl(var(--brik-invalid))] text-white",
    bodyText: "text-[hsl(var(--brik-invalid))]",
    visibility: "bg-[hsl(var(--brik-invalid)/0.26)]",
  },
};

function normalizeStatus(status: string): BrikCertificationStatus {
  const normalized = status.trim().toUpperCase().replace(/[\s-]+/g, "_");
  if (normalized in statusMeta) return normalized as BrikCertificationStatus;
  if (normalized === "NOT_CERTIFIED" || normalized === "UNVERIFIED") return "DRAFT";
  return "PENDING_EVIDENCE";
}

function hasVerificationFailure(states: Array<BrikVerificationState | undefined>) {
  return states.some((state) => state === "fail" || state === "missing");
}

export function BrikCertificationBadge({
  status,
  certificateHash,
  visibility = "PRIVATE",
  integrity = "pass",
  signature = "pass",
  evidence = "pass",
  variant = "compact",
  verificationHref,
  className,
  ...props
}: HTMLAttributes<HTMLElement> & {
  status: BrikCertificationStatus | string;
  certificateHash?: string | null;
  visibility?: BrikProofVisibility;
  integrity?: BrikVerificationState;
  signature?: BrikVerificationState;
  evidence?: BrikVerificationState;
  variant?: "compact" | "rich";
  verificationHref?: string;
  className?: string;
}) {
  const requestedStatus = normalizeStatus(status);
  const effectiveStatus = hasVerificationFailure([integrity, signature, evidence]) && requestedStatus !== "DRAFT"
    ? "INVALID"
    : requestedStatus;
  const meta = statusMeta[effectiveStatus];
  const Icon = meta.icon;
  const VisibilityIcon = visibility === "PUBLIC" ? Unlock : Lock;
  const visibilityLabel = visibility === "PUBLIC" ? "Public proof" : "Private proof";
  const title = [
    meta.label,
    visibilityLabel,
    certificateHash ? `Certificate hash: ${certificateHash}` : null,
    `Integrity: ${integrity}`,
    `Signature: ${signature}`,
    `Evidence: ${evidence}`,
  ].filter(Boolean).join(" · ");
  const tone = toneClass[meta.tone];
  const visibilitySegment = cn(tone.bodyText, tone.visibility);
  const visibilityIconClass = visibility === "PUBLIC" ? "text-emerald-500" : "text-[hsl(var(--brik-invalid))]";
  const sharedProps = {
    ...props,
    title,
    "aria-label": props["aria-label"] ?? `${meta.label}, ${visibilityLabel}${certificateHash ? `, certificate ${certificateHash}` : ""}`,
    "data-brik-certification-badge": "true",
    "data-effective-status": effectiveStatus,
    "data-visibility": visibility,
  };
  const isRich = variant === "rich";
  const shellClass = isRich ? "h-11 w-64" : "h-8 w-52";
  const iconClass = isRich ? "w-11" : "w-8";
  const textClass = isRich ? "px-3 text-sm" : "px-2.5 text-xs";
  const visibilityClass = isRich ? "w-11" : "w-8";
  const content = (
    <>
      <span className={cn("grid h-full min-h-0 shrink-0 place-items-center rounded-l-md", iconClass, tone.icon)}>
        <Icon className={cn("block", isRich ? "h-5 w-5" : "h-4 w-4")} />
      </span>
      <span className={cn("grid h-full min-h-0 min-w-0 flex-1 place-items-center justify-items-start border-y border-current/45 bg-transparent", textClass, tone.bodyText)}>
        <span className="truncate font-semibold leading-none">{meta.label}</span>
      </span>
      <span className={cn("grid h-full min-h-0 shrink-0 place-items-center rounded-r-md", visibilityClass, visibilitySegment)} title={visibilityLabel}>
        <VisibilityIcon className={cn("block", isRich ? "h-4 w-4" : "h-3.5 w-3.5", visibilityIconClass)} />
      </span>
    </>
  );
  const classNames = cn("inline-flex overflow-hidden rounded-md border transition-[transform,background-color]", shellClass, tone.shell, verificationHref && "cursor-pointer hover:-translate-y-px hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className);

  if (verificationHref) {
    return (
      <a {...sharedProps} href={verificationHref} className={classNames}>
        {content}
      </a>
    );
  }

  return (
    <span {...sharedProps} className={classNames}>
      {content}
    </span>
  );
}
