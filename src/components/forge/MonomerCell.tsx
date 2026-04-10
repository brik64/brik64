"use client";

import { cn } from "@/lib/utils";
import { FAMILIES, type FamilyName } from "@/lib/monomer-data";

interface MonomerCellProps {
  id: number;
  prefix: "MC" | "MX";
  name: string;
  family: string;
  active?: boolean;
  count?: number;
}

export function MonomerCell({
  id,
  prefix,
  name,
  family,
  active = false,
  count = 0,
}: MonomerCellProps) {
  const familyColor = FAMILIES[family as FamilyName] ?? "#64748b";

  return (
    <div
      className={cn(
        "relative flex aspect-square flex-col rounded-md p-1.5 transition-all duration-300",
        active
          ? "bg-foreground text-white shadow-[0_0_12px_rgba(0,229,255,0.2)]"
          : "border border-border bg-secondary/30 opacity-40",
      )}
      style={
        active
          ? { borderTop: `3px solid ${familyColor}` }
          : undefined
      }
    >
      {/* Badge */}
      {active && count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 z-10 flex min-w-[18px] items-center justify-center rounded-full border-2 border-background bg-circuit-red px-1 py-0 font-mono text-[8px] font-bold leading-[14px] text-white shadow-sm">
          {count}
        </span>
      )}

      {/* ID */}
      <span
        className={cn(
          "font-mono text-[7px] leading-none",
          active ? "text-white/40" : "text-muted-foreground/50",
        )}
      >
        {prefix}_{String(id).padStart(2, "0")}
      </span>

      {/* Number */}
      <span
        className={cn(
          "mt-auto text-center font-[family-name:var(--font-jura)] text-lg font-bold leading-none tracking-tight",
          active ? "text-white" : "text-muted-foreground/40",
        )}
      >
        {String(id).padStart(2, "0")}
      </span>

      {/* Name */}
      <span
        className={cn(
          "text-center font-mono text-[8px] font-semibold leading-none",
        )}
        style={{ color: active ? familyColor : undefined }}
      >
        {active ? name : ""}
      </span>

      {/* Family */}
      {active && (
        <span className="text-center text-[5px] leading-none text-white/25">
          {family}
        </span>
      )}
    </div>
  );
}
