import { cn } from "@/lib/utils";

interface MonomerTileProps {
  id: string; // e.g. "MC_21" or "MX_72"
  title: string;
  type: "core" | "extended";
  className?: string;
  property?: string;
  domain?: string;
  description?: string;
}

export function MonomerTile({ id, title, type, className, property, domain, description }: MonomerTileProps) {
  const isCore = type === "core";
  const displayId = id.replace("_", "");
  
  return (
    <div 
      className={cn(
        "relative flex w-full max-w-[360px] min-h-[340px] shrink-0 flex-col justify-between overflow-hidden rounded-[28px] p-6 shadow-xl",
        isCore 
          ? "bg-[#0A1016] border-[2px] border-[#2BB6AC]/20" 
          : "bg-[#140D0A] border-[2px] border-[#FF8A22]/20",
        className
      )}
    >
      {/* Background Glow */}
      <div 
        className={cn(
          "absolute -right-20 -top-20 h-40 w-40 rounded-full blur-[80px] opacity-40",
          isCore ? "bg-[#2BB6AC]" : "bg-[#FF8A22]"
        )} 
      />

      {/* Header */}
      <div className="flex items-start justify-between z-10">
        <div className="flex flex-col">
          <span 
            className={cn(
              "font-mono text-sm tracking-widest",
              isCore ? "text-[#2BB6AC]" : "text-[#FF8A22]"
            )}
          >
            {displayId}
          </span>
          <span className="mt-2 font-mono text-xs text-white/40 uppercase tracking-widest">
            {isCore ? "Bounded Logic" : "Open Contract"}
          </span>
        </div>
        
        {/* Status indicator */}
        <div 
          className={cn(
            "flex h-8 items-center rounded-full px-3 text-xs font-bold uppercase tracking-widest border",
            isCore 
              ? "border-[#2BB6AC]/30 bg-[#2BB6AC]/10 text-[#2BB6AC]" 
              : "border-[#FF8A22]/30 bg-[#FF8A22]/10 text-[#FF8A22]"
          )}
        >
          {isCore ? "Φc = 1" : "Φc ≠ 1"}
        </div>
      </div>

      {/* Center Symbol / Title */}
      <div className={cn(
        "z-10 flex flex-col items-center justify-center font-mono my-auto tracking-tight",
        isCore ? "text-white" : "text-white"
      )}>
        <span className="text-4xl font-bold">{title}</span>
      </div>

      {/* Footer Details */}
      <div className="z-10 flex flex-col gap-2 rounded-xl bg-black/40 p-4 border border-white/5">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span className="text-[10px] uppercase tracking-widest text-[#ED5E68]">Domain</span>
          <span className="text-xs font-mono text-white/80">{domain || "Closed"}</span>
        </div>
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <span className="text-[10px] uppercase tracking-widest text-[#ED5E68]">Property</span>
          <span className="text-xs font-mono text-white/80">{property || "Associative"}</span>
        </div>
        <div className="flex flex-col gap-1 pt-1 opacity-90">
          <span className="text-[10px] uppercase tracking-widest text-[#ED5E68]">Operation</span>
          <p className="text-[11px] leading-relaxed text-white/50 line-clamp-2">
            {description || "Atomic formal operation within bounded scope."}
          </p>
        </div>
      </div>
    </div>
  );
}
