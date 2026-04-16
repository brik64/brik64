"use client";

import { useState } from "react";


import { ArrowRight, CheckCircle2, GitBranch, Layers3, TerminalSquare, FileCode2, Package, LayoutTemplate, Copy, ExternalLink } from "lucide-react";
import { MonomerTile } from "./monomer-tile";
import { MonomerMatrix } from "./monomer-matrix";
import { CertificatePreview } from "./certificate-preview";
import { AgenticArchitecture } from "./agentic-architecture";
import { LanguageExchangeArtifact } from "@/components/HomeProofArtifacts";

import {
  AnnouncementPill,
  ButtonVNext,
  PillarCard,
  PageHeaderVNext,
  ProtagonistSurface,
  renderBrandText,
  SupportingSurface,
  ToolRail,
  SurfaceCard,
  GitHubMark,
} from "@/components/vnext/primitives";
import { MultiLanguageCodeArtifact } from "./code-artifact";

const toolRail = ["TypeScript", "Python", "Rust", "Go", "PostgreSQL", "AI agents"];

export function VNextHome() {
  const [hoveredMonomer, setHoveredMonomer] = useState<{
    id: string;
    title: string;
    type: "core" | "extended";
    domain: string;
    property: string;
    description: string;
  }>({
    id: `MC_21`,
    title: "DUP",
    type: "core",
    domain: "i64 → i64, i64",
    property: "Bounded",
    description: "Duplicates the top value on the stack."
  });

  return (
    <div className="bg-background text-foreground">
      {/* Section 1: Hero */}
      <ProtagonistSurface className="relative border-b border-border bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.16),transparent_40%),linear-gradient(180deg,#0a0d12_0%,#0b1016_58%,#0a0d12_100%)] overflow-hidden">
        <div className="hero-light-glow pointer-events-none absolute inset-0" />
        <div className="hero-light-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_32%,transparent_68%,rgba(0,229,255,0.08))]" />
        
        <div className="relative mx-auto flex min-h-[calc(100vh-4.25rem)] max-w-[1400px] flex-col justify-center px-6 py-20 md:px-8 lg:px-12">
          <div className="max-w-[720px]">
            <AnnouncementPill href="/foundations">
              THE FORMAL LAYER FOR AI-ERA SOFTWARE
            </AnnouncementPill>
            <h1 className="mt-8 max-w-[15ch] text-balance text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {renderBrandText("Trust infrastructure for software.")}
            </h1>
            <p className="mt-6 max-w-[50ch] text-xl leading-relaxed text-white/60">
              {renderBrandText("Formalizes software as an information circuit, providing verified and hash-locked logic certification.")}
            </p>

            <div className="mt-12 max-w-[850px]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 ml-1">DOWNLOAD THE CLI</span>
                  <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
                    <div className="group relative flex flex-1 items-center gap-5 rounded-2xl border border-white/20 bg-black/40 px-6 py-5 backdrop-blur-xl transition-all hover:border-white/40 hover:bg-white/[0.02] focus-within:border-[color:var(--accent)]">
                      <div className="flex flex-1 items-center gap-4 font-mono text-sm sm:text-lg text-white/95">
                        <span className="text-[color:var(--accent)] font-bold opacity-80 shrink-0">$</span>
                        <code className="select-all tracking-tight truncate">curl -sL https://brik64.sh | sh</code>
                      </div>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText("curl -sL https://brik64.sh | sh");
                        }}
                        className="ml-2 shrink-0 rounded-xl p-3 text-white/40 hover:bg-white/10 hover:text-[color:var(--accent)] transition-all active:scale-90"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-6 w-6" />
                      </button>
                    </div>

                    <ButtonVNext 
                      href="https://github.com/brik64-org/skills" 
                      tone="primary" 
                      className="h-[74px] px-12 text-base font-black tracking-[0.2em] rounded-2xl flex items-center justify-center shrink-0 whitespace-nowrap shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)] hover:shadow-[0_0_45px_rgba(var(--accent-rgb),0.4)] hover:scale-[1.03] active:scale-[0.97] transition-all"
                      external
                    >
                      <div className="flex items-center gap-4">
                        <GitHubMark className="h-8 w-8" />
                        <span className="uppercase font-black">SKILL</span>
                        <ExternalLink className="h-5 w-5 opacity-80" />
                      </div>
                    </ButtonVNext>
                  </div>
                </div>

                <p className="text-[11px] font-bold text-white uppercase tracking-[0.2em] flex flex-wrap items-center gap-x-3 gap-y-1 opacity-80">
                  <span className="h-px w-6 bg-white/20 hidden sm:block" />
                  <span>Grab the {renderBrandText("BRIK64")} CLI and get the Skills for your agent</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToolRail label="Designed for the systems you already run" />
      </ProtagonistSurface>

      {/* Section 2: The 4 Pillars */}
      <SupportingSurface>
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="What is BRIK64?"
            title="Software that functions as hardware."
            description="A trust infrastructure treating code as a formal circuit to be mathematically verified, certified, and published."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <PillarCard
              icon={<FileCode2 className="h-5 w-5" />}
              title="PCD Blueprint"
              description="A structural format for describing software logic as a formal circuit. Semantic-agnostic and verifiable."
              href="https://docs.brik64.dev"
              actionLabel="Learn PCD"
            />
            <PillarCard
              icon={<TerminalSquare className="h-5 w-5" />}
              title="BRIK64 CLI"
              description="The sovereign compiler (brikc) for lifting code, bounding logic, and emitting certified bundles."
              href="/cli"
              actionLabel="Download CLI"
            />
            <PillarCard
              icon={<LayoutTemplate className="h-5 w-5" />}
              title="Platform"
              description="Design, certify, and audit circuits collaboratively in a governed environment."
              href="/platform"
              actionLabel="Register"
            />
            <PillarCard
              icon={<Package className="h-5 w-5" />}
              title="Public Registry"
              description="A library of pre-certified circuits for governed and traceable reuse."
              href="/registry"
              actionLabel="Visit"
            />
          </div>
        </div>
      </SupportingSurface>


      {/* Section 4: PCD: FORMAL LANGUAGE AI OPTIMIZED */}
      <SupportingSurface className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <PageHeaderVNext
                eyebrow="FORMAL LANGUAGE AI OPTIMIZED"
                title="PCD: CAD for Software."
                description="A formal intermediate representation built for strict trust, certification, and exact cross-target portability."
              />
              
              <div className="mt-16 relative">
                <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border sm:left-[39px]"></div>
                <div className="space-y-12">
                  {[
                    { step: "01", title: "Write Directly", desc: "Author logic in the pure BRIK64 language using 64 mathematically bounded operations.", icon: <FileCode2 className="h-4 w-4" /> },
                    { step: "02", title: "Lift Existing Code", desc: "Import any codebase. The lifter extracts the structural logic into a pristine PCD blueprint.", icon: <GitBranch className="h-4 w-4" /> },
                    { step: "03", title: "Depurate Logic", desc: "Analyze the blueprint to isolate which parts are bounded (Φc=1) and which require open contracts.", icon: <TerminalSquare className="h-4 w-4" /> }
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-start gap-6 sm:gap-8">
                      <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border border-[color:var(--accent-soft)] bg-[#071019] text-[color:var(--accent)] sm:h-20 sm:w-20">
                        <span className="text-xs font-semibold">{item.step}</span>
                      </div>
                      <div className="pt-2 sm:pt-4">
                        <h3 className="text-lg font-medium text-white">{renderBrandText(item.title)}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{renderBrandText(item.desc)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <MultiLanguageCodeArtifact />
              <div className="mt-8 rounded-2xl border border-[color:var(--accent-soft)]/10 bg-[color:var(--accent-soft)]/5 p-6 backdrop-blur-sm">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[color:var(--accent)] flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-4 w-4" />
                  Proof Guaranteed
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  The PCD blueprint serves as the single source of truth. Any logic expressed in PCD can be formally verified before emitting a single line of target code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SupportingSurface>

      {/* Section 5: The Lifter & Compiler */}
      <SupportingSurface className="border-t border-border bg-[#05080c]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="The Engine"
            title="Transpilation & Optimization."
            description="PCD acts as a canonical semantic pivot for mathematical transpilation and clean logic re-compilation across targets."
          />
          <div className="mt-16 max-w-[1100px] mx-auto">
            <LanguageExchangeArtifact />
          </div>
          <div className="mt-16 max-w-3xl">
            <p className="text-lg text-white/60">
              <strong className="text-white font-medium">Compilation as optimization:</strong> The compiler refuses to compile a circuit if its domains and closure conditions are ambiguous. If Φc ≠ 1, the compiler rejects it. The system guides you to iteratively optimize your own code until bounds are strictly defined.
            </p>
          </div>
        </div>
      </SupportingSurface>
      {/* Section 6: Monomers & EVA */}
      <SupportingSurface className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          
          <div className="flex flex-col space-y-16">
            <PageHeaderVNext
              eyebrow="The Atomic Logic"
              title="Monomers & EVA Algebra."
              description="A core vocabulary of 64 bounded operations capable of constructing every strictly calculable software domain."
            />

            <div className="grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-24 items-center">
              {/* Left Column: Centered Matrices */}
              <div className="flex justify-center w-full">
                <MonomerMatrix 
                  hoveredId={hoveredMonomer.id} 
                  onHover={setHoveredMonomer} 
                />
              </div>

              {/* Right Column: Detail Tile (Fixed height alignment) */}
              <div className="hidden lg:block shrink-0">
                <div className="scale-110 xl:scale-[1.2] transform-gpu">
                  <MonomerTile 
                    id={hoveredMonomer.id}
                    title={hoveredMonomer.title}
                    type={hoveredMonomer.type}
                    domain={hoveredMonomer.domain}
                    property={hoveredMonomer.property}
                    description={hoveredMonomer.description}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <ButtonVNext href="https://docs.brik64.com" tone="primary" className="text-xs font-bold uppercase tracking-widest">
                Learn PCD Language
              </ButtonVNext>
              <ButtonVNext href="https://github.com/brik64" tone="secondary" external className="text-xs font-bold uppercase tracking-widest">
                <GitHubMark className="h-4 w-4" />
                Add Skills to your AI Agent
              </ButtonVNext>
            </div>
          </div>

        </div>
      </SupportingSurface>

      {/* Section 7: Certification Model */}
      <SupportingSurface className="border-t border-border bg-[#05080c]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <PageHeaderVNext
                eyebrow="The Trust Artifact"
                title="Strict certification."
                description="Compiles code into hash-locked bundles containing source, automated proofs, and mathematical guarantee states."
              />
              
              <div className="mt-12 space-y-8">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 lg:p-8 hover:border-[#2BB6AC]/30 transition-colors">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                    <span className="h-3 w-3 rounded-full bg-[#2BB6AC]" /> Core Certificate (Φc = 1.0)
                  </h3>
                  <div className="mt-4 grid gap-3 text-sm text-white/60">
                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="font-medium text-white/40">Monomers</span> <span className="font-mono text-white/90">MC_00 - MC_63 only</span></div>
                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="font-medium text-white/40">Tests</span> <span className="text-[#2BB6AC]">Math IS the proof (None needed)</span></div>
                    <div className="flex justify-between"><span className="font-medium text-white/40">Guarantee</span> <span className="text-white">Formally strict for all inputs</span></div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 lg:p-8 hover:border-[#FF8A22]/30 transition-colors">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                    <span className="h-3 w-3 rounded-full bg-[#FF8A22]" /> Contract Certificate (Φc ≠ 1.0)
                  </h3>
                  <div className="mt-4 grid gap-3 text-sm text-white/60">
                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="font-medium text-white/40">Monomers</span> <span className="font-mono text-white/90">Includes MX_64 - 127</span></div>
                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="font-medium text-white/40">Tests</span> <span className="text-[#FF8A22]">Auto-generated boundaries</span></div>
                    <div className="flex justify-between"><span className="font-medium text-white/40">Guarantee</span> <span className="text-white">Tamper-evident / Hash-locked</span></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center max-w-lg mx-auto w-full">
              <CertificatePreview />
            </div>
          </div>
        </div>
      </SupportingSurface>
      {/* Section 8: Agentic Architecture */}
      <SupportingSurface className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="mb-16">
            <PageHeaderVNext
              eyebrow="Agentic Capability"
              title="Perfectly bounded for AI agents."
              description="A finite, 64-monomer vocabulary mathematically optimized for rule-based reasoning and Agentic code authoring."
            />
          </div>
          <AgenticArchitecture />
        </div>
      </SupportingSurface>

      {/* Section 9: Incremental Adoption */}
      <SupportingSurface className="relative border-t border-border bg-[#001f28] blueprint-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 py-24 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-12">
          <PageHeaderVNext
            eyebrow="Incremental Adoption"
            title="Adopt without a rewrite."
            description="Start formalizing critical logic incrementally without requiring a monorepo rewrite or system overhaul."
          />
          <div className="space-y-4">
            {[
              { step: 1, title: "Start with one workflow", desc: "Isolate a single critical API payload or AI-generated function." },
              { step: 2, title: "Generate a blueprint", desc: "Use the lifter to parse it into a canonical PCD structure." },
              { step: 3, title: "Add policy enforcement", desc: "Apply organizational constraints and compilation boundaries." },
              { step: 4, title: "Expand horizontally", desc: "Once the first artifact is governed, scale it across the team." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 rounded-[20px] border border-white/10 bg-[#0a0d12] p-5 shadow-xl">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-sm font-semibold text-[color:var(--accent)]">
                  {s.step}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SupportingSurface>

      {/* Section 9: Digital Circuitality */}
      <SupportingSurface className="relative border-t border-[#242a31] bg-[#0b0b0f] blueprint-grid overflow-hidden">
        {/* Technical Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,210,255,0.06),transparent_60%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-[1400px] px-6 py-40 md:px-8 lg:px-12">
          <div className="flex flex-col items-center">
            <PageHeaderVNext
              centered
              eyebrow="The Engineering Philosophy"
              title={<span style={{ color: '#f5f7fa' }}>Digital Circuitality.</span>}
              description={<span style={{ color: '#a7b0ba' }}>Digital Circuitality is the discipline of treating software as a formal physical circuit. By bounding logic within mathematical constraints, we eliminate the guesswork of traditional coding, achieving hardware-level reliability in a digital world.</span>}
            />
            <div className="mt-16 group">
              <ButtonVNext 
                href="https://digitalcircuitality.com" 
                external 
                tone="primary"
                className="bg-[#f5f7fa] text-[#0b0b0f] hover:bg-[#f5f7fa]/90 h-16 px-12 text-lg rounded-full shadow-[0_0_40px_rgba(57,210,255,0.15)] hover:shadow-[0_0_60px_rgba(57,210,255,0.25)] transition-all font-black tracking-tight"
              >
                VISIT DIGITALCIRCUITALITY.COM
              </ButtonVNext>
            </div>
          </div>
        </div>
      </SupportingSurface>

      {/* Section 10: Route Chooser */}
      <SupportingSurface className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <PageHeaderVNext
              eyebrow="Route Chooser"
              title="Where to go next."
              description="From safe AI payload routing to legacy system modernization, choose the path for your engineering needs."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "BRIK64 CLI (brikc)", href: "/cli", desc: "Install the compiler and lift your first repository." },
                { title: "Platform & Registry", href: "/platform", desc: "Inspect the collaborative circuit design environment." },
                { title: "The 64 Monomers", href: "/docs/monomers", desc: "Browse the complete vocabulary of bonded operations." },
                { title: "Theoretical Foundations", href: "/foundations", desc: "Read the mathematical proofs behind Digital Circuitality." }
              ].map((link, i) => (
                <a key={i} href={link.href} className="group rounded-[20px] border border-border bg-[#0A0D12] p-5 transition-colors hover:border-[color:var(--accent-soft)]">
                  <p className="text-sm font-medium text-white">{link.title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/50">{link.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-[color:var(--accent)]">
                     <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </SupportingSurface>
    </div>
  );
}
