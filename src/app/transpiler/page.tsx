"use client";

import { useState } from "react";
import { 
  Activity,
  Layers
} from "lucide-react";
import { 
  CanonicalPageLayout, 
  CanonicalPageHero,
  CanonicalSection,
  ActionAnchor
} from "@/components/PageArchetypes";
import { ArtifactFrame, ArtifactHeader, StatusPill } from "@/components/HomeProofArtifacts";
import { EvidenceSurface } from "@/components/PageArtifacts";

const inputLangs = ["JavaScript", "TypeScript", "Python", "Rust", "C", "C++", "Go", "COBOL", "PHP", "Java"];
const outputLangs = ["Rust", "JavaScript", "TypeScript", "Python", "C", "C++", "Go", "COBOL", "PHP", "Java", "Swift", "WebAssembly", "BIR", "Native"];

const comparison = [
  { feature: "Intermediate representation", llvm: "LLVM IR (low-level SSA)", brik: "PCD (semantic circuit description)" },
  { feature: "Verification", llvm: "None (trust the optimizer)", brik: "Φc = 1 certification per circuit" },
  { feature: "Input languages", llvm: "3 major (C, C++, Rust)", brik: "Multiple (JS, TS, Python, Rust, C, C++, Go, COBOL, and more)" },
  { feature: "Output targets", llvm: "Machine code only", brik: "Multiple high-level languages + native + WASM" },
  { feature: "Approach", llvm: "N × M (frontend × backend)", brik: "N + M (frontend + backend via PCD)" },
  { feature: "Proof of correctness", llvm: "No", brik: "Yes — cryptographic certificate" },
];

export default function TranspilerPage() {
  const [hoveredInput, setHoveredInput] = useState<number | null>(null);
  const [hoveredOutput, setHoveredOutput] = useState<number | null>(null);

  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow="Universal Transpiler"
        title="Any language in. Any language out. Certified."
        description="10 input languages. 14 output targets. Each route passes through a bounded intermediate blueprint so equivalence is reviewed at the normalized circuit level before emission."
        backgroundImageSrc="/generated/transpiler-hero-bg.png"
        actions={[
          { label: "Try brikc transpile", href: "/cli", tone: "primary" },
          { label: "Read Documentation", href: "https://docs.brik64.dev", external: true, tone: "secondary" },
        ]}
      />

      <CanonicalSection>
        <div className="space-y-24 py-12">
          {/* Visual Matrix */}
          <ArtifactFrame dark className="space-y-6">
            <ArtifactHeader
              dark
              eyebrow="Demonstration"
              title="Language Matrix"
              description="Every input-output combination is a transpilation path through the same normalized hub."
              status={
                <StatusPill tone="teal">
                  <Layers className="h-3.5 w-3.5" />
                  Production Ready
                </StatusPill>
              }
            />
            <div className="mx-auto max-w-5xl px-4 py-8">
              <div className="grid gap-3 border-b border-white/5 pb-8 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">Inputs</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-[color:var(--accent)]">10</p>
                  <p className="mt-1 text-[10px] text-white/20">Source frontends</p>
                </div>
                <div className="rounded-2xl border border-[color:var(--accent-soft)]/20 bg-[color:var(--accent-soft)]/5 px-4 py-4 text-center shadow-[0_0_40px_rgba(var(--accent-rgb),0.05)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--accent)]">Semantic hub</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-white">PCD</p>
                  <p className="mt-1 text-[10px] text-white/20">Verified substrate</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">Outputs</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-[color:var(--accent)]">14</p>
                  <p className="mt-1 text-[10px] text-white/20">Target backends</p>
                </div>
              </div>

              <div className="mt-8 overflow-x-auto pb-4">
                <div className="min-w-[700px]">
                  <div className="flex gap-1 mb-2">
                    <div className="w-24 shrink-0" />
                    {outputLangs.map((lang, i) => (
                      <div
                        key={lang}
                        onMouseEnter={() => setHoveredOutput(i)}
                        onMouseLeave={() => setHoveredOutput(null)}
                        className={`flex-1 text-center text-[8px] font-black uppercase tracking-widest transition-colors ${
                          hoveredOutput === i ? "text-[color:var(--accent)]" : "text-white/20"
                        }`}
                      >
                        {lang.slice(0, 3)}
                      </div>
                    ))}
                  </div>
                  {inputLangs.map((lang, ri) => (
                    <div
                      key={lang}
                      className="mt-1 flex gap-1 items-center"
                      onMouseEnter={() => setHoveredInput(ri)}
                      onMouseLeave={() => setHoveredInput(null)}
                    >
                      <div
                        className={`w-24 shrink-0 pr-3 text-right text-[10px] font-bold transition-colors ${
                          hoveredInput === ri ? "text-[color:var(--accent)]" : "text-white/30"
                        }`}
                      >
                        {lang}
                      </div>
                      {outputLangs.map((_, ci) => (
                        <div
                          key={ci}
                          className={`flex-1 h-4 rounded-sm border transition-colors ${
                            hoveredInput === ri || hoveredOutput === ci
                              ? "border-[color:var(--accent-soft)]/40 bg-[color:var(--accent-soft)]/20"
                              : "border-white/5 bg-white/[0.03]"
                          }`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ArtifactFrame>

          {/* vs LLVM */}
          <ArtifactFrame dark className="space-y-6">
            <ArtifactHeader
              dark
              eyebrow="Evaluation"
              title="BRIK64 vs LLVM"
              description="LLVM optimizes machine code; PCD preserves semantic structure for polyglot systems."
              status={
                <StatusPill tone="neutral">
                  <Activity className="h-3.5 w-3.5" />
                  Comparative analysis
                </StatusPill>
              }
            />
            <div className="mx-auto max-w-5xl px-4 py-8">
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="grid grid-cols-3 gap-0 border-b border-white/5 bg-white/[0.04] px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">
                  <div>Feature</div>
                  <div>LLVM Infrastructure</div>
                  <div>BRIK64 VNext</div>
                </div>
                {comparison.map((row) => (
                  <div key={row.feature} className="grid grid-cols-3 gap-0 border-b border-white/5 px-6 py-4 last:border-b-0 hover:bg-white/[0.01] transition-colors">
                    <div className="text-xs font-bold text-white/80">{row.feature}</div>
                    <div className="text-xs text-white/40">{row.llvm}</div>
                    <div className="text-xs font-bold text-[color:var(--accent)]">{row.brik}</div>
                  </div>
                ))}
              </div>
            </div>
          </ArtifactFrame>

          {/* Evidence */}
          <div className="grid gap-8">
            <EvidenceSurface
              eyebrow="Translation Evidence"
              title="Equivalence Review Boundary"
              description="Transpilation preserves computation, not syntax. We are explicit about the proof boundary."
              items={[
                { label: "Semantic Substrate", body: "The PCD hub captures the computational meaning of source code." },
                { label: "Normalized Verification", body: "Equivalence proofs are conducted on the intermediate representation." },
                { label: "Scope Isolation", body: "We certify the labeled circuit, not the entire runtime or unmanaged host APIs." }
              ]}
            />
          </div>

          {/* CTA */}
          <section className="mx-auto max-w-4xl rounded-[2.5rem] border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/5 p-12 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent pointer-events-none" />
             <div className="relative z-10 space-y-8">
               <h2 className="text-3xl font-bold text-white">Start your migration loop.</h2>
               <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                 Install the CLI, lift one workflow to PCD, and emit target code with verification certificates attached.
               </p>
               <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                 <ActionAnchor action={{ label: "Try brikc transpile", href: "/cli" }} />
                 <ActionAnchor action={{ label: "Read Documentation", href: "https://docs.brik64.dev", external: true, tone: "link" }} />
               </div>
             </div>
          </section>
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
