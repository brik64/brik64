"use client";

import { CircleHelp, Clock3, Lock, RotateCcw, ShieldCheck, ShieldX, Unlock } from "lucide-react";
import type { ComponentType, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type BrikProofArtifactType = "PCD" | "POLYMER" | "APP" | "SYSTEM" | "PROOF";
export type BrikProofStatus = "VALID" | "SUPERSEDED" | "REVOKED" | "EXPIRED" | "UNVERIFIABLE";
export type BrikProofVisibility = "PUBLIC" | "PRIVATE";

const statusMeta: Record<BrikProofStatus, { label: string; tone: "valid" | "superseded" | "revoked" | "expired" | "unverifiable"; icon: ComponentType<{ className?: string }> }> = {
  VALID: { label: "VALID", tone: "valid", icon: ShieldCheck },
  SUPERSEDED: { label: "SUPERSEDED", tone: "superseded", icon: RotateCcw },
  REVOKED: { label: "REVOKED", tone: "revoked", icon: ShieldX },
  EXPIRED: { label: "EXPIRED", tone: "expired", icon: Clock3 },
  UNVERIFIABLE: { label: "UNVERIFIABLE", tone: "unverifiable", icon: CircleHelp },
};

const toneClass = {
  valid: {
    shell: "border-emerald-500/38 bg-emerald-500/10 text-emerald-500",
    icon: "bg-emerald-500 text-white",
    visibility: "bg-emerald-500/26",
  },
  superseded: {
    shell: "border-[hsl(var(--brik-extended)/0.38)] bg-[hsl(var(--brik-extended)/0.09)] text-[hsl(var(--brik-extended))]",
    icon: "bg-[hsl(var(--brik-extended))] text-white",
    visibility: "bg-[hsl(var(--brik-extended)/0.26)]",
  },
  revoked: {
    shell: "border-[hsl(var(--brik-invalid)/0.42)] bg-[hsl(var(--brik-invalid)/0.10)] text-[hsl(var(--brik-invalid))]",
    icon: "bg-[hsl(var(--brik-invalid))] text-white",
    visibility: "bg-[hsl(var(--brik-invalid)/0.26)]",
  },
  expired: {
    shell: "border-[hsl(var(--brik-stale)/0.42)] bg-[hsl(var(--brik-stale)/0.10)] text-[hsl(var(--brik-stale))]",
    icon: "bg-[hsl(var(--brik-stale))] text-slate-950",
    visibility: "bg-[hsl(var(--brik-stale)/0.26)]",
  },
  unverifiable: {
    shell: "border-border bg-muted/20 text-muted-foreground",
    icon: "bg-muted text-muted-foreground",
    visibility: "bg-muted",
  },
};

const visibilityTitle: Record<BrikProofVisibility, string> = {
  PUBLIC: "Publicly verifiable proof",
  PRIVATE: "Private proof, restricted to authorized tenant access",
};

export function BrikProofBadge({
  artifactType,
  status,
  visibility,
  href,
  size = "md",
  className,
  ...props
}: HTMLAttributes<HTMLElement> & {
  artifactType: BrikProofArtifactType;
  status: BrikProofStatus;
  visibility: BrikProofVisibility;
  href?: string;
  size?: "sm" | "md";
}) {
  const meta = statusMeta[status];
  const StatusIcon = meta.icon;
  const VisibilityIcon = visibility === "PUBLIC" ? Unlock : Lock;
  const tone = toneClass[meta.tone];
  const isSmall = size === "sm";
  const visibilityToneClass = visibility === "PUBLIC" ? "!text-emerald-500" : "!text-[hsl(var(--brik-invalid))]";
  const label = `BRIK64 · ${artifactType} · ${meta.label}`;
  const sharedProps = {
    ...props,
    title: `${meta.label} · ${visibilityTitle[visibility]}`,
    "aria-label": props["aria-label"] ?? `${label}, ${visibilityTitle[visibility]}`,
    "data-brik-proof-badge": "true",
    "data-status": status,
    "data-visibility": visibility,
  };
  const content = (
    <>
      <span className={cn("grid shrink-0 place-items-center rounded-l-md", isSmall ? "h-7 w-7" : "h-8 w-8", tone.icon)}>
        <StatusIcon className={cn(isSmall ? "h-3.5 w-3.5" : "h-4 w-4")} />
      </span>
      <span className={cn("grid min-w-0 place-items-center justify-items-start border-y border-current/35 bg-transparent", isSmall ? "h-7 px-2" : "h-8 px-2.5")}>
        <span className={cn("truncate font-semibold leading-none", isSmall ? "text-[11px]" : "text-xs")}>{label}</span>
      </span>
      <span className={cn("inline-flex shrink-0 items-center gap-1.5 rounded-r-md px-2 font-semibold leading-none", tone.visibility, isSmall ? "h-7 text-[11px]" : "h-8 text-xs")} title={visibilityTitle[visibility]}>
        <VisibilityIcon className={cn(isSmall ? "h-3 w-3" : "h-3.5 w-3.5", visibilityToneClass)} />
        <span className={visibilityToneClass}>{visibility}</span>
      </span>
    </>
  );
  const classNames = cn("inline-flex max-w-full overflow-hidden rounded-md border", href && "transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", tone.shell, className);

  if (href) {
    return (
      <a {...sharedProps} href={href} className={classNames}>
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
