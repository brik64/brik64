"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  FileCode, 
  Shield, 
  Search, 
  Layers, 
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import { 
  CanonicalPageLayout, 
  CanonicalPageHero,
  CanonicalSection,
  ActionAnchor
} from "@/components/PageArchetypes";
import { EvidenceSurface } from "@/components/PageArtifacts";
import { MonomerFamilyBoard } from "@/components/MonomerArtifacts";
import { ArtifactFrame, ArtifactHeader, StatusPill } from "@/components/HomeProofArtifacts";

const sourceLanguages = [
  { name: "JavaScript", ext: ".js", logo: "/brands/javascript.svg", status: "Stable" },
  { name: "TypeScript", ext: ".ts/.tsx", logo: "/brands/typescript.svg", status: "Stable" },
  { name: "Python", ext: ".py", logo: "/brands/python.svg", status: "Stable" },
  { name: "Rust", ext: ".rs", logo: "/brands/rust.svg", status: "Stable" },
  { name: "C / C++", ext: ".c/.cpp", logo: "/brands/c.svg", status: "Stable" },
  { name: "Go", ext: ".go", logo: "/brands/go.svg", status: "Stable" },
  { name: "COBOL", ext: ".cob", logo: "/brands/cobol.svg", status: "Stable" },
  { name: "PHP", ext: ".php", logo: "/brands/php.svg", status: "Stable" },
  { name: "Java", ext: ".java", logo: ".java", status: "Stable" },
  { name: "Kotlin", ext: ".kt", logo: "/brands/kotlin.svg", status: "Planned" },
];

const steps = [
  { label: "Parse", desc: "Parse source into AST using a language-specific frontend.", icon: <Search className="h-5 w-5" /> },
  { label: "Extract", desc: "Identify operations corresponding to BRIK64 monomers.", icon: <Layers className="h-5 w-5" /> },
  { label: "Infer", desc: "Analyze value flows to infer numeric bounds and domains.", icon: <Shield className="h-5 w-5" /> },
  { label: "Map", desc: "Map patterns to verified monomer equivalents.", icon: <FileCode className="h-5 w-5" /> },
  { label: "Verify", desc: "Output valid PCD program and verify certification.", icon: <CheckCircle className="h-5 w-5" /> },
];

const demos = [
  {
    label: "JavaScript",
    lines: [
      { text: "$ brikc lift app.js", style: "command" },
      { text: "  # Input: app.js", style: "muted" },
      { text: "  return a + b;", style: "muted" },
      { text: "", style: "blank" },
      { text: "  PC app {", style: "box-green" },
      { text: "      let result = ADD8(10, 20);", style: "box-green" },
      { text: "      OUTPUT result;", style: "box-green" },
      { text: "  }", style: "box-green" },
    ],
  },
  {
    label: "COBOL",
    lines: [
      { text: "$ brikc lift PAYROLL.cob --domains", style: "command" },
      { text: "  Lifting COBOL (1 file)...", style: "muted" },
      { text: "", style: "blank" },
      { text: "  PC payroll {", style: "box-green" },
      { text: "      domain salary: Range [0, 999999];", style: "box-green" },
      { text: "      ...", style: "box-green" },
      { text: "  }", style: "box-green" },
    ],
  },
];

function TerminalLine({ line }: { line: { text: string; style: string } }) {
  if (line.style === "blank") return <div className="h-3" />;
  if (line.style === "command") return <div className="text-white/70 font-mono"><span className="text-teal">$</span> {line.text.slice(2)}</div>;
  return <div className={`font-mono ${line.style === "box-green" ? "text-emerald-400" : "text-white/40"}`}>{line.text}</div>;
}

export default function LifterPage() {
  const [activeDemo, setActiveDemo] = useState(0);

  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow="Lifter"
        title="Already have code? Verify it."
        description="No rewrite needed. Point the Lifter at your existing code. It extracts, maps, and certifies. 10 languages in. Verified PCD out."
        backgroundImageSrc="/generated/lifter-hero-bg.png"
        actions={[
          { label: "Install CLI", href: "/cli", tone: "primary" },
          { label: "View Transpiler", href: "/transpiler", tone: "secondary" },
        ]}
      />

      <CanonicalSection>
        <div className="space-y-24 py-12">
          {/* Visual Grid */}
          <ArtifactFrame dark className="space-y-6">
            <ArtifactHeader
              dark
              eyebrow="Coverage"
              title="Source Languages"
              description="10 languages. One blueprint."
              status={
                <StatusPill tone="teal">
                  <Layers className="h-3.5 w-3.5" />
                  Production Ready
                </StatusPill>
              }
            />
            <div className="mx-auto max-w-5xl px-4 py-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {sourceLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`group flex items-center gap-3 border border-white/5 p-4 transition-all duration-300 ${
                      lang.status === "Planned"
                        ? "bg-white/[0.01] opacity-40 grayscale"
                        : "bg-white/5 hover:border-[color:var(--accent)]/50 hover:bg-white/[0.08]"
                    }`}
                  >
                    {lang.logo.startsWith("/") && <Image src={lang.logo} alt={lang.name} width={24} height={24} className="h-6 w-6 opacity-70 group-hover:opacity-100 transition-opacity" />}
                    <div>
                      <p className="text-xs font-bold text-white/80">{lang.name}</p>
                      <p className="text-[9px] text-white/30 uppercase tracking-widest">{lang.status === "Planned" ? "Planned" : lang.ext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ArtifactFrame>

          {/* Pipeline */}
          <section className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((s, i) => (
                <div key={s.label} className="relative border border-white/5 bg-white/[0.02] p-6 group hover:bg-white/[0.04] transition-colors">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[color:var(--accent)] group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/90">{s.label}</p>
                  <p className="mt-2 text-[11px] leading-relaxed text-white/40">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-white/10 lg:block" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Demos */}
          <ArtifactFrame dark className="space-y-6">
            <ArtifactHeader
              dark
              eyebrow="Demonstration"
              title="See it in Action"
              description="Terminal-driven lifting with immediate certification feedback."
              status={
                <StatusPill tone="neutral">
                  <Layers className="h-3.5 w-3.5" />
                  Live terminal demo
                </StatusPill>
              }
            />
            <div className="mx-auto max-w-3xl px-4 py-8">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e14] shadow-2xl">
                <div className="flex border-b border-white/10 bg-white/[0.02]">
                  {demos.map((d, i) => (
                    <button
                      key={d.label}
                      onClick={() => setActiveDemo(i)}
                      className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                        activeDemo === i
                          ? "bg-white/5 text-[color:var(--accent)] shadow-[inset_0_-2px_0_var(--accent)]"
                          : "text-white/30 hover:bg-white/[0.03] hover:text-white/50"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
                <div className="p-8 text-xs leading-relaxed">
                  {demos[activeDemo].lines.map((line, i) => (
                    <TerminalLine key={i} line={line} />
                  ))}
                </div>
              </div>
            </div>
          </ArtifactFrame>

          {/* Evidence */}
          <div className="grid gap-8">
            <EvidenceSurface
              eyebrow="Lift Evidence"
              title="Verification Boundaries"
              description="The Lifter remains explicit about certifiable core logic versus contract-tier integration."
              items={[
                { label: "Pure logic", body: "Certified blueprints carry Φc = 1 through extraction." },
                { label: "Side effects", body: "I/O and network behavior remain explicit bridge contracts." },
                { label: "Benchmarks", body: "Documented 211/211 liftability from existing codebase samples." }
              ]}
            />
          </div>

          <MonomerFamilyBoard />

          {/* CTA */}
          <section className="mx-auto max-w-4xl rounded-[2.5rem] border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/5 p-12 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent pointer-events-none" />
             <div className="relative z-10 space-y-8">
               <h2 className="text-3xl font-bold text-white">Start with the verified baseline.</h2>
               <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                 Point the Lifter at any file. Pure functions become certified blueprints. Impure functions get explicit boundaries.
               </p>
               <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                 <ActionAnchor action={{ label: "Install CLI", href: "/cli" }} />
                 <ActionAnchor action={{ label: "View Transpiler", href: "/transpiler", tone: "link" }} />
               </div>
             </div>
          </section>
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
