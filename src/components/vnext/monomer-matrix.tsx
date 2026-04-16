"use client";

import { cn } from "@/lib/utils";
import { CORE_MONOMERS, EXTENDED_MONOMERS, Monomer } from "@/lib/monomer-data";

interface MonomerMatrixProps {
  hoveredId: string;
  onHover: (m: {
    id: string;
    title: string;
    type: "core" | "extended";
    domain: string;
    property: string;
    description: string;
  }) => void;
}

export function MonomerMatrix({ hoveredId, onHover }: MonomerMatrixProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 xl:gap-12">
      {/* Core Matrix 8x8 */}
      <div className="flex flex-col gap-3">
        <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#2BB6AC]/60">
          Core MC_00-63
        </div>
        <div className="grid grid-cols-8 gap-1.5 p-4 rounded-3xl border border-white/5 bg-[#0a0d12]/40 shadow-inner backdrop-blur-sm">
          {CORE_MONOMERS.map((m) => {
            const fullId = `MC_${m.id.toString().padStart(2, "0")}`;
            return (
              <div
                key={fullId}
                onMouseEnter={() => onHover({
                  id: fullId,
                  title: m.name,
                  type: "core",
                  domain: m.signature,
                  property: "Bounded",
                  description: m.description
                })}
                className={cn(
                  "h-5 w-5 rounded-sm cursor-pointer transition-all duration-200",
                  hoveredId === fullId
                    ? "bg-[#2BB6AC] shadow-[0_0_20px_rgba(43,182,172,1)] scale-125 z-10"
                    : "bg-[#2BB6AC]/10 hover:bg-[#2BB6AC]/30"
                )}
                title={`${fullId}: ${m.name}`}
              />
            );
          })}
        </div>
      </div>

      {/* Extended Matrix 8x8 */}
      <div className="flex flex-col gap-3">
        <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF8A22]/60">
          Extended MX_64-127
        </div>
        <div className="grid grid-cols-8 gap-1.5 p-4 rounded-3xl border border-white/5 bg-[#140d0a]/40 shadow-inner backdrop-blur-sm">
          {EXTENDED_MONOMERS.map((m) => {
            const fullId = `MX_${(m.id + 64).toString().padStart(2, "0")}`;
            return (
              <div
                key={fullId}
                onMouseEnter={() => onHover({
                  id: fullId,
                  title: m.name,
                  type: "extended",
                  domain: m.signature,
                  property: "Contract",
                  description: m.description
                })}
                className={cn(
                  "h-5 w-5 rounded-sm cursor-pointer transition-all duration-200",
                  hoveredId === fullId
                    ? "bg-[#FF8A22] shadow-[0_0_20px_rgba(255,138,34,1)] scale-125 z-10"
                    : "bg-[#FF8A22]/10 hover:bg-[#FF8A22]/30"
                )}
                title={`${fullId}: ${m.name}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
