import Link from "next/link";
import {
  CircleHelp,
  Clock,
  Lock,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  Unlock,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type BrikProofBadgeProps = {
  artifactType: "PCD" | "POLYMER" | "APP" | "SYSTEM" | "PROOF";
  status: "VALID" | "SUPERSEDED" | "REVOKED" | "EXPIRED" | "UNVERIFIABLE";
  visibility: "PUBLIC" | "PRIVATE";
  href?: string;
  size?: "sm" | "md";
};

const statusConfig = {
  VALID: {
    icon: ShieldCheck,
    className: "border-teal/30 bg-teal/10 text-teal",
    label: "Valid bounded proof",
  },
  SUPERSEDED: {
    icon: ShieldAlert,
    className: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    label: "Superseded proof",
  },
  REVOKED: {
    icon: ShieldX,
    className: "border-red-500/35 bg-red-500/10 text-red-300",
    label: "Revoked proof",
  },
  EXPIRED: {
    icon: Clock,
    className: "border-white/15 bg-white/[0.06] text-white/55",
    label: "Expired proof",
  },
  UNVERIFIABLE: {
    icon: CircleHelp,
    className: "border-amber-500/30 bg-amber-500/10 text-amber-200",
    label: "Unverifiable proof",
  },
} as const;

const visibilityConfig = {
  PUBLIC: {
    icon: Unlock,
    className: "border-l-teal/25 bg-teal/[0.08] text-teal",
    title: "Publicly verifiable proof",
  },
  PRIVATE: {
    icon: Lock,
    className: "border-l-white/10 bg-white/[0.06] text-white/65",
    title: "Private proof, restricted to authorized tenant access",
  },
} as const;

export function BrikProofBadge({
  artifactType,
  status,
  visibility,
  href,
  size = "md",
}: BrikProofBadgeProps) {
  const StatusIcon = statusConfig[status].icon;
  const VisibilityIcon = visibilityConfig[visibility].icon;
  const label = `BRIK64 ${artifactType} ${status} ${visibility}`;
  const compact = size === "sm";
  const content = (
    <span
      aria-label={label}
      className={cn(
        "inline-flex max-w-full overflow-hidden rounded-lg border text-[11px] font-semibold uppercase leading-none tracking-normal shadow-sm",
        statusConfig[status].className,
        compact ? "h-7" : "h-8",
      )}
      title={`${statusConfig[status].label}. ${visibilityConfig[visibility].title}.`}
    >
      <span className={cn("inline-flex items-center gap-1.5 whitespace-nowrap", compact ? "px-2" : "px-2.5")}>
        <StatusIcon className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} aria-hidden="true" />
        <span>BRIK64</span>
        <span className="text-current/45">·</span>
        <span>{artifactType}</span>
        <span className="text-current/45">·</span>
        <span>{status}</span>
      </span>
      <span
        className={cn(
          "inline-flex items-center gap-1.5 border-l px-2",
          visibilityConfig[visibility].className,
        )}
        title={visibilityConfig[visibility].title}
      >
        <VisibilityIcon className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} aria-hidden="true" />
        <span>{visibility}</span>
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {content}
    </Link>
  );
}
