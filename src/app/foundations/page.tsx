"use client";

import { PhiC } from "@/components/PhiC";
import {
  BookOpen,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Search,
} from "lucide-react";
import { 
  PageHeaderVNext, 
  SupportingSurface, 
  ButtonVNext, 
  BrandWordmark,
  PillarCard
} from "@/components/vnext/primitives";
import { CanonicalPageLayout, ActionAnchor } from "@/components/PageArchetypes";
import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

export default function FoundationsPage() {
  return (
    <CanonicalPageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 pb-24 pt-32 md:pb-32 md:pt-48 lg:pb-40">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.84] [filter:saturate(1.16)_contrast(1.08)_brightness(1.16)]"
          style={{ backgroundImage: "url(/generated/foundations-hero-bg.png)" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen opacity-[0.26] [filter:saturate(1.28)_contrast(1.08)_brightness(1.3)]"
          style={{ backgroundImage: "url(/generated/foundations-hero-bg.png)" }}
        />
        <div className="absolute inset-0 blueprint-grid opacity-[0.08]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,10,0.42)_0%,rgba(4,10,16,0.18)_28%,rgba(4,10,16,0.14)_56%,rgba(1,4,8,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,182,172,0.05)_0%,rgba(8,18,28,0.04)_34%,rgba(2,6,10,0.18)_70%,rgba(1,3,6,0.52)_100%)]" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
          <PageHeaderVNext
            eyebrow="Technical Foundations"
            title="Digital Circuitality on an information-theoretic footing."
            description="This foundations route explains the formal model behind Digital Circuitality, the limits of its thermodynamic analogy, and the product implications that follow from bounded computation."
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
            description="Formal specification reaches zero informational uncertainty (H(X) = 0) when all states are bounded and closed."
            actionLabel="H(X) = 0"
          />
          <PillarCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Closure"
            description="Closure remains binary and compile-time enforced. Within the modeled circuit, Φc marks the condition the compiler checks."
            actionLabel="Φc = 1"
          />
          <PillarCard
            icon={<Layers className="h-6 w-6" />}
            title="Composition"
            description="Sequential, parallel, and conditional composition (EVA) preserve certified structure throughout the stack."
            actionLabel="EVA Algebra"
          />
        </div>
      </section>

      {/* Formal Definition */}
      <SupportingSurface className="relative border-t border-white/10 bg-[#0b0b0f] blueprint-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
        
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Section [01]</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Formal Definition</h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/60">
                <p>
                  Shannon (1948) defined the entropy of a discrete source as a measure of uncertainty. When a system is completely deterministic — every input produces exactly one output through every path — informational uncertainty collapses to zero.
                </p>
                <p className="font-medium text-white">
                  Digital Circuitality aims to remove informational uncertainty from the modeled computation by construction rather than by sampling.
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
                      "Within the modeled circuit, Φc marks the closure condition the compiler checks before emission."
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
                Conventional software samples behavior and lowers uncertainty only for the cases explored by the test suite. Uncertainty remains &gt; 0 due to unverified execution paths and unexplored states.
              </p>
            </div>
            <div className="rounded-[2.5rem] border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/5 p-10 blueprint-grid relative">
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent pointer-events-none rounded-[2.5rem]" />
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent)]">Digital Circuitality</p>
                <h3 className="mt-4 text-2xl font-bold text-white">Uncertainty removal by structure</h3>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Bounded domains, closed composition, and verification completeness (Φc = 1) push the specification to a deterministic state instead of hoping test coverage was enough.
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
              The SEQ, PAR, and COND operators make sequencing, fan-out, and branching explicit before the compiler checks closure.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "SEQ", full: "Sequential", desc: "Output of one stage becomes the input of the next stage.", icon: <ArrowRight className="h-5 w-5" /> },
              { name: "PAR", full: "Parallel", desc: "Independent branches evaluate on the same input and return a tuple.", icon: <Zap className="h-5 w-5" /> },
              { name: "COND", full: "Conditional", desc: "Branch structure remains explicit in the circuit before selection.", icon: <Activity className="h-5 w-5" /> },
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
               The framework draws conceptual inspiration from Brillouin and Dijkstra while operating on purely informational foundations grounded in Shannon’s framework.
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
      <section className="relative px-6 py-32 text-center md:px-8 lg:px-12 border-t border-white/5 bg-[#0b0b0f] blueprint-grid">
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-7xl">
              FORMALIZE THE STACK
            </h2>
            <p className="mt-8 text-xl text-white/60 mx-auto max-w-2xl leading-relaxed">
              The Foundations route is just the beginning. Follow the logical chain from theory into PCD, CLI, and platform workflows.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <ActionAnchor action={{ label: "Explore PCD Language", href: "/pcd", tone: "primary" }} />
              <ActionAnchor action={{ label: "Open Platform", href: "/platform", tone: "link" }} />
            </div>
         </div>
      </section>
    </CanonicalPageLayout>
  );
}
