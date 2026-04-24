"use client";

import { PhiC } from "@/components/PhiC";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
} from "lucide-react";
import { 
  PageHeaderVNext, 
  SupportingSurface, 
  PillarCard,
  DigitalCircuitalityBackdrop,
} from "@/components/vnext/primitives";
import { CanonicalPageLayout, ActionAnchor } from "@/components/PageArchetypes";

export default function FoundationsPage() {
  return (
    <CanonicalPageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 pb-24 pt-32 md:pb-32 md:pt-48 lg:pb-40">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.64] [filter:saturate(1.08)_contrast(1.01)_brightness(1.08)]"
          style={{ backgroundImage: "url(/generated/foundations-hero-bg.png)" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen opacity-[0.2] [filter:saturate(1.08)_contrast(1.0)_brightness(1.08)]"
          style={{ backgroundImage: "url(/generated/foundations-hero-bg.png)" }}
        />
        <div className="absolute inset-0 bg-[rgba(1,4,8,0.04)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,4,8,0.34)_0%,rgba(2,6,10,0.26)_24%,rgba(2,6,10,0.22)_54%,rgba(1,3,6,0.52)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,182,172,0.06)_0%,rgba(23,69,109,0.2)_34%,rgba(4,12,20,0.34)_68%,rgba(1,3,6,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,223,255,0.16),transparent_42%)]" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="Technical Foundations"
            title="Digital Circuitality on an information-theoretic footing."
            description="The model behind bounded computation, closure, and compositional control."
            centered
          />
        </div>
      </section>

      {/* Matrix Section */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          <PillarCard
            icon={<Activity className="h-6 w-6" />}
            title="Entropy"
            description="Bounded states reduce informational uncertainty."
            actionLabel="H(X) = 0"
          />
          <PillarCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Closure"
            description="Φc marks the closure condition the compiler checks."
            actionLabel="Φc = 1"
          />
          <PillarCard
            icon={<Layers className="h-6 w-6" />}
            title="Composition"
            description="EVA makes sequence, parallel, and conditional flow explicit."
            actionLabel="EVA Algebra"
          />
        </div>
      </section>

      {/* Formal Definition */}
      <SupportingSurface className="relative border-t border-[#242a31] bg-[#09111a] blueprint-grid overflow-hidden">
        <DigitalCircuitalityBackdrop />
        
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Section [01]</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Formal Definition</h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/60">
                <p>
                  Entropy is uncertainty. Bounded computation reduces it by constraining modeled states.
                </p>
                <p className="font-medium text-white">
                  Digital Circuitality reduces uncertainty by structure, not sampling.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-lg rounded-[2.5rem] border border-[color:var(--accent-soft)] bg-black/60 p-10 backdrop-blur-xl shadow-2xl shadow-[color:var(--accent-soft)]/20">
                 <div className="text-center">
                    <p className="text-lg font-bold text-[color:var(--accent)]">
                      Full coherence means zero informational uncertainty
                    </p>
                    <div className="mt-8 flex justify-center">
                      <div className="flex items-center gap-4 text-4xl font-black tracking-tighter text-white">
                        <PhiC /> <span className="text-2xl opacity-40">=</span> 1
                      </div>
                    </div>
                    <p className="mt-8 text-sm text-white/50 leading-relaxed italic">
                      &ldquo;Φc marks the closure condition checked before emission.&rdquo;
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </SupportingSurface>

      {/* Comparison Section */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-8 lg:px-12">
         <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-[2.5rem] border border-white/10 bg-black/40 p-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Conventional Model</p>
              <h3 className="mt-4 text-2xl font-bold text-white">Testing reduces uncertainty</h3>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                Conventional workflows sample behavior. Unchecked paths stay open.
              </p>
            </div>
            <div className="rounded-[2.5rem] border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/5 p-10 blueprint-grid relative">
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent pointer-events-none rounded-[2.5rem]" />
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent)]">Digital Circuitality</p>
                <h3 className="mt-4 text-2xl font-bold text-white">Uncertainty removal by structure</h3>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Bounded domains plus closed composition make modeled state deterministic.
                </p>
              </div>
            </div>
         </div>
      </section>

      {/* EVA Algebra Section */}
      <SupportingSurface className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Section [03]</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">EVA Algebra: Composition Operators</h2>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              SEQ, PAR, and COND keep flow explicit before closure checks.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "SEQ", full: "Sequential", desc: "One stage feeds the next stage.", icon: <ArrowRight className="h-5 w-5" /> },
              { name: "PAR", full: "Parallel", desc: "Branches evaluate on the same input.", icon: <Zap className="h-5 w-5" /> },
              { name: "COND", full: "Conditional", desc: "Branch structure stays explicit before selection.", icon: <Activity className="h-5 w-5" /> },
            ].map((op) => (
              <div key={op.name} className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.05] transition-colors group">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[color:var(--accent)] group-hover:scale-110 transition-transform">
                  {op.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{op.name} <span className="font-medium opacity-40 ml-2">{op.full}</span></h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{op.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SupportingSurface>

      {/* References */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Bibliography</span>
             <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Academic Foundations</h2>
             <p className="mt-6 text-white/50 text-sm leading-relaxed">
               References for uncertainty, discipline, and information boundaries.
             </p>
             <div className="mt-10">
               <ActionAnchor action={{ label: "Visit digitalcircuitality.com", href: "https://digitalcircuitality.com", external: true, tone: "primary" }} />
             </div>
          </div>
          
          <div className="lg:w-2/3 grid gap-6">
            {[
              { authors: "Shannon, C.E.", year: "1948", title: "A Mathematical Theory of Communication.", Relevance: "Informational entropy foundations." },
              { authors: "Dijkstra, E.W.", year: "1976", title: "A Discipline of Programming.", Relevance: "Software verification discipline." },
              { authors: "Kish, L.B.", year: "2018", title: "Information vs Thermal Entropy.", Relevance: "Rigorous distinction of quantities." },
            ].map((ref, i) => (
              <div key={i} className="flex border-b border-white/5 pb-8 group last:border-0 hover:border-[color:var(--accent)] transition-colors">
                <div className="mr-8 pt-1 text-sm font-black text-white/20 group-hover:text-[color:var(--accent)] transition-colors">0{i+1}</div>
                <div>
                  <h4 className="font-bold text-white">{ref.authors} ({ref.year})</h4>
                  <p className="mt-1 text-sm italic text-white/60">{ref.title}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[color:var(--accent)]">{ref.Relevance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative border-t border-[#242a31] bg-[#09111a] blueprint-grid overflow-hidden px-6 py-40 text-center md:px-8 lg:px-12">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.34] [filter:saturate(1.03)_contrast(1.02)_brightness(0.74)]"
          style={{ backgroundImage: "url(/generated/home-digital-circuitality-bg.png)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen opacity-[0.08] [filter:saturate(1.08)_contrast(1.02)_brightness(1.03)]"
          style={{ backgroundImage: "url(/generated/home-digital-circuitality-bg.png)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,4,8,0.94)_0%,rgba(2,6,10,0.82)_26%,rgba(3,8,13,0.68)_52%,rgba(1,4,8,0.96)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,210,255,0.02)_0%,rgba(14,32,52,0.14)_34%,rgba(5,12,20,0.56)_70%,rgba(1,4,8,0.92)_100%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <PageHeaderVNext
            centered
            eyebrow="The Engineering Philosophy"
            title={<span style={{ color: "#f5f7fa" }}>Digital Circuitality.</span>}
            description={
              <span style={{ color: "#a7b0ba" }}>
                The theory behind BRIK64: software logic treated as bounded, composable circuits.
              </span>
            }
          />
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <ActionAnchor action={{ label: "Explore PCD Language", href: "/pcd", tone: "primary" }} />
            <ActionAnchor action={{ label: "Open Platform", href: "/platform", tone: "link" }} />
          </div>
        </div>
      </section>
    </CanonicalPageLayout>
  );
}
