"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type BrikMonomerCompositionBarProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  coreUses: number;
  extendedUses: number;
  invalidUses?: number;
  pendingUses?: number;
  staleUses?: number;
  totalUses?: number;
  maxSegments?: number;
  size?: "table" | "node" | "compact" | "default" | "modal" | "large";
  density?: "fixed" | "compressed";
  visualState?: "composition" | "uncertified" | "invalid";
  showCounts?: boolean;
  showLegend?: boolean;
  interactive?: boolean;
  stretch?: boolean;
  ariaLabel?: string;
  testId?: string;
};

type SegmentKind = "core" | "extended" | "invalid" | "pending" | "stale" | "empty";

const SIZE_CONFIG = {
  table: { maxSegments: 28, width: 3, height: 14, gap: 2 },
  node: { maxSegments: 12, width: 3, height: 10, gap: 2 },
  compact: { maxSegments: 28, width: 3, height: 14, gap: 2 },
  default: { maxSegments: 40, width: 4, height: 16, gap: 2 },
  modal: { maxSegments: 56, width: 4, height: 18, gap: 2 },
  large: { maxSegments: 56, width: 4, height: 18, gap: 2 },
} as const;

const SEGMENT_CLASS: Record<SegmentKind, string> = {
  core: "bg-[hsl(var(--brik-core))]",
  extended: "bg-[hsl(var(--brik-extended))]",
  invalid: "bg-[hsl(var(--brik-invalid))]",
  pending: "bg-[hsl(var(--brik-pending))]",
  stale: "bg-[hsl(var(--brik-stale))]",
  empty: "bg-muted",
};

function clampUses(value: number | undefined): number {
  if (!Number.isFinite(value ?? 0)) return 0;
  return Math.max(0, Math.floor(value ?? 0));
}

function allocateSegments(counts: Record<Exclude<SegmentKind, "empty">, number>, segmentCount: number): SegmentKind[] {
  const entries = Object.entries(counts).filter(([, count]) => count > 0) as Array<[Exclude<SegmentKind, "empty">, number]>;
  const total = entries.reduce((sum, [, count]) => sum + count, 0);
  if (segmentCount <= 0) return [];
  if (total <= 0) return Array.from({ length: segmentCount }, () => "pending");

  const allocations = entries.map(([kind, count]) => ({
    kind,
    count,
    raw: (count / total) * segmentCount,
    segments: Math.floor((count / total) * segmentCount),
  }));

  for (const allocation of allocations) {
    if (allocation.count > 0 && allocation.segments === 0) allocation.segments = 1;
  }

  let used = allocations.reduce((sum, item) => sum + item.segments, 0);
  while (used < segmentCount) {
    const candidate = allocations.slice().sort((a, b) => b.raw - b.segments - (a.raw - a.segments))[0];
    if (!candidate) break;
    candidate.segments += 1;
    used += 1;
  }

  while (used > segmentCount) {
    const candidate = allocations.filter((item) => item.segments > 1).sort((a, b) => b.segments - b.raw - (a.segments - a.raw))[0];
    if (!candidate) break;
    candidate.segments -= 1;
    used -= 1;
  }

  return allocations.flatMap((allocation) => Array.from({ length: allocation.segments }, () => allocation.kind));
}

export function BrikMonomerCompositionBar({
  coreUses,
  extendedUses,
  invalidUses = 0,
  pendingUses = 0,
  staleUses = 0,
  totalUses,
  maxSegments,
  size = "default",
  density = "fixed",
  visualState,
  showCounts = false,
  showLegend = false,
  interactive = false,
  stretch = false,
  ariaLabel,
  className,
  testId,
  ...props
}: BrikMonomerCompositionBarProps) {
  const config = SIZE_CONFIG[size];
  const segmentCount = Math.max(1, Math.min(maxSegments ?? config.maxSegments, 96));
  const counts = {
    core: clampUses(coreUses),
    extended: clampUses(extendedUses),
    invalid: clampUses(invalidUses),
    pending: clampUses(pendingUses),
    stale: clampUses(staleUses),
  };
  const observedTotal = Object.values(counts).reduce((sum, count) => sum + count, 0);
  const declaredTotal = Math.max(clampUses(totalUses), observedTotal);
  const overflow = Math.max(0, declaredTotal - segmentCount);
  const resolvedVisualState = visualState ?? (counts.invalid > 0 ? "invalid" : counts.pending > 0 || counts.stale > 0 ? "uncertified" : "composition");
  const compositionCounts = {
    core: resolvedVisualState === "composition" ? counts.core : 0,
    extended: resolvedVisualState === "composition" ? counts.extended : 0,
    invalid: resolvedVisualState === "invalid" ? Math.max(declaredTotal, 1) : 0,
    pending: resolvedVisualState === "uncertified" ? Math.max(declaredTotal, 1) : 0,
    stale: 0,
  };
  const segments = density === "compressed" || declaredTotal > segmentCount
    ? allocateSegments(compositionCounts, segmentCount)
    : allocateSegments(compositionCounts, segmentCount);
  const label = ariaLabel ?? `Monomer composition: ${counts.core} core, ${counts.extended} extended, visual state ${resolvedVisualState}.`;

  return (
    <span
      {...props}
      data-testid={testId}
      data-brik-composition-bar="true"
      data-visual-state={resolvedVisualState}
      data-visible-segments={segmentCount}
      data-overflow-count={overflow}
      className={cn("inline-flex min-w-0 flex-col gap-2", stretch && "w-full", className)}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={cn("grid max-w-full overflow-hidden", stretch && "w-full", interactive && "rounded-md focus-within:ring-2 focus-within:ring-ring")}
        style={{
          gridTemplateColumns: stretch ? `repeat(${segmentCount}, minmax(0, 1fr))` : `repeat(${segmentCount}, ${config.width}px)`,
          gap: `${config.gap}px`,
        }}
      >
        {segments.map((kind, index) => (
          <span
            key={`${kind}-${index}`}
            className={cn("rounded-[2px]", SEGMENT_CLASS[kind])}
            style={{ height: `${config.height}px` }}
            data-monomer-segment="true"
            data-segment-kind={kind}
            data-topology-segment={kind === "pending" ? "unresolved" : kind}
          />
        ))}
      </span>

      {showCounts || showLegend ? (
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {showCounts && resolvedVisualState === "composition" ? (
            <>
              <span className="inline-flex items-center gap-1">
                <span>Core</span>
                <span className="font-semibold text-[hsl(var(--brik-core))]">{counts.core}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <span>Extended</span>
                <span className="font-semibold text-[hsl(var(--brik-extended))]">{counts.extended}</span>
              </span>
            </>
          ) : null}
          {showCounts && resolvedVisualState === "invalid" ? (
            <span className="inline-flex items-center gap-1">
              <span>Invalid</span>
              <span className="font-semibold text-[hsl(var(--brik-invalid))]">{Math.max(declaredTotal, 1)}</span>
            </span>
          ) : null}
          {showCounts && resolvedVisualState === "uncertified" ? (
            <span className="inline-flex items-center gap-1">
              <span>Uncertified</span>
              <span className="font-semibold text-[hsl(var(--brik-pending))]">{Math.max(declaredTotal, 1)}</span>
            </span>
          ) : null}
          {overflow ? <span>+{overflow} compressed</span> : null}
          {showLegend && !showCounts && resolvedVisualState === "composition" ? (
            <>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-[hsl(var(--brik-core))]" />Core</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-[hsl(var(--brik-extended))]" />Extended</span>
            </>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}

export const BrikSegmentedCompositionBar = BrikMonomerCompositionBar;
