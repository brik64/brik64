import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type BrikStatusTone = "neutral" | "success" | "warning" | "danger" | "info" | "extended";

const toneClass: Record<BrikStatusTone, string> = {
  neutral: "border-border text-muted-foreground",
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
  warning: "border-[hsl(var(--brik-stale)/0.35)] bg-[hsl(var(--brik-stale)/0.12)] text-[hsl(var(--brik-stale))]",
  danger: "border-[hsl(var(--brik-invalid)/0.35)] bg-[hsl(var(--brik-invalid)/0.12)] text-[hsl(var(--brik-invalid))]",
  info: "border-primary/30 bg-primary/10 text-primary",
  extended: "border-[hsl(var(--brik-extended)/0.35)] bg-[hsl(var(--brik-extended)/0.12)] text-[hsl(var(--brik-extended))]",
};

export function BrikStatusBadge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: BrikStatusTone;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn("rounded-md px-2 py-0.5 text-xs font-medium normal-case tracking-normal", toneClass[tone], className)}
    >
      {children}
    </Badge>
  );
}
