import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { BrikMonomerCompositionBar } from "./brik-monomer-composition-bar";
import { BrikStatusBadge } from "./brik-status-badge";

export function BrikTopologyNodeCard({
  title,
  subtitle,
  status,
  icon,
  coreUses,
  extendedUses,
  invalidUses = 0,
  pendingUses = 0,
  compositionLabel,
  selected = false,
  className,
}: {
  title: string;
  subtitle: string;
  status: "core" | "contract" | "invalid" | "pending" | "composite";
  icon?: ReactNode;
  coreUses: number;
  extendedUses: number;
  invalidUses?: number;
  pendingUses?: number;
  compositionLabel?: string;
  selected?: boolean;
  className?: string;
}) {
  const tone = status === "invalid" ? "danger" : status === "pending" ? "neutral" : status === "contract" ? "extended" : "info";
  const statusLabel = {
    core: "Core",
    contract: "Contract",
    invalid: "Invalid",
    pending: "Pending",
    composite: "Composite",
  }[status];

  return (
    <Card
      className={cn(
        "grid w-full max-w-64 gap-3 rounded-lg border bg-card p-3",
        selected && "border-primary ring-2 ring-primary/20",
        className,
      )}
    >
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{title}</p>
          <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
        </div>
        {icon ? <span className="shrink-0 text-primary">{icon}</span> : null}
      </div>
      <BrikMonomerCompositionBar
        coreUses={coreUses}
        extendedUses={extendedUses}
        invalidUses={invalidUses}
        pendingUses={pendingUses}
        visualState={status === "invalid" ? "invalid" : status === "pending" ? "uncertified" : "composition"}
        size="compact"
        maxSegments={28}
        ariaLabel={compositionLabel}
      />
      <BrikStatusBadge tone={tone}>{statusLabel}</BrikStatusBadge>
    </Card>
  );
}
