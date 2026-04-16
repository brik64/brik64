import { ArrowRight, ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

const inputs = [
  "JavaScript", "TypeScript", "Python", "Rust", "C", "C++", "Go", "COBOL", "PHP", "Java"
];

const outputs = [
  "Rust", "JavaScript", "TypeScript", "Python", "C", "C++", "Go", "COBOL", "PHP", "Java", "Swift", "WebAssembly", "BIR", "x86-64"
];

export function LanguageTargetGrid({ className }: { className?: string }) {
  return (
    <div className={cn("relative rounded-[24px] border border-white/10 bg-[#071019] p-6 lg:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]", className)}>
      <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] items-center">
        {/* Left Column: Inputs */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-white/50">10 Input Languages</span>
            <span className="text-xs text-white/40">Lifter</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {inputs.map((lang) => (
              <span key={lang} className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Center: PCD Pivot */}
        <div className="relative flex flex-col items-center">
          {/* Connecting dashed lines for desktop */}
          <div className="absolute top-1/2 left-[-3rem] hidden w-12 -translate-y-1/2 border-t border-dashed border-white/20 lg:block" />
          <div className="absolute top-1/2 right-[-3rem] hidden w-12 -translate-y-1/2 border-t border-dashed border-white/20 lg:block" />
          
          <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-[20px] border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)] text-center shadow-[0_0_40px_rgba(0,229,255,0.15)] ring-1 ring-white/10">
            <span className="text-xs font-semibold tracking-widest text-[color:var(--accent)] uppercase">Pivot</span>
            <span className="mt-1 text-2xl font-bold tracking-tight text-white">PCD</span>
          </div>
          
          <div className="mt-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white/60">
            <ArrowLeftRight className="h-3 w-3" />
            <span className="whitespace-nowrap">Depurate & Bound</span>
          </div>
        </div>

        {/* Right Column: Outputs */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#4ade80]">14 Output Targets</span>
            <span className="text-xs text-[#4ade80]/60">Compiler</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {outputs.map((lang) => (
              <span key={lang} className="inline-flex items-center rounded-lg border border-[#4ade80]/20 bg-[#4ade80]/5 px-3 py-1.5 text-xs font-medium text-[#4ade80] transition-colors hover:bg-[#4ade80]/10 hover:text-[#4ade80]">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
