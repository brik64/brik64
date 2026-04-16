import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  PageHeaderVNext,
  SupportingSurface,
  ButtonVNext,
} from "@/components/vnext/primitives";
import { Plus, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — BRIK64",
  description:
    "Questions technical teams ask before adopting the formal layer. Answers on PCD, certification, compliance language, and product routes.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Is BRIK-64 a language, a compiler, or a platform?",
    a: "Publicly, it is presented as a formal language and compiler path wrapped by broader platform and registry workflows. PCD is the format; the CLI is the primary operator path; the platform handles publication, discovery, and reuse.",
  },
  {
    q: "Do I need PCD to start?",
    a: "No. The public entry path can begin with CLI and SDK material, then move into PCD when formal structure matters. The operator path is: CLI → bounded blueprint → platform.",
  },
  {
    q: "Does the site claim full compliance or certification?",
    a: "No. Compliance language stays scoped to evidence posture, bounded logic, and operator review workflows. BRIK-64 supports audit and review workflows; it does not certify organizations by itself.",
  },
  {
    q: "What is Digital Circuitality?",
    a: "Digital Circuitality is the formal model behind BRIK-64. It draws on information-theoretic concepts to describe bounded computation where closure (Φc = 1) means zero informational uncertainty within the modeled circuit.",
  },
  {
    q: "How do teams adopt PCD without rewriting everything?",
    a: "The Lifter extracts review-critical logic into bounded blueprints from existing codebases. Teams can start with a subset of their stack and expand coverage incrementally without replacing the host language.",
  },
  {
    q: "Where should I go next?",
    a: "Docs, the platform page, or contact, depending on whether the question is technical, exploratory, or commercial. The CLI install path is in the documentation. Enterprise evaluation routes to enterprise@brik64.com.",
  },
];

const refs = [
  { title: "Documentation", body: "Reference material and command help.", href: "https://docs.brik64.dev", external: true },
  { title: "Platform", body: "The product route that explains how the pieces combine.", href: "/platform" },
  { title: "Contact", body: "Route unresolved questions into the correct support or enterprise channel.", href: "/contact" },
];

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5 pb-24 pt-32 md:pb-32 md:pt-48">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            <PageHeaderVNext
              eyebrow="FAQ"
              title="Questions technical teams ask before adopting the formal layer."
              description="Answer the recurring questions quickly, then route deeper technical or commercial topics to the right product or contact path."
            />
            <div className="mt-12 flex flex-wrap gap-4">
              <ButtonVNext href="/contact" tone="primary" className="h-14 rounded-2xl px-10 font-black">
                Ask a Question
              </ButtonVNext>
              <ButtonVNext href="https://docs.brik64.dev" external tone="secondary" className="h-14 rounded-2xl px-10 font-black">
                Documentation
              </ButtonVNext>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">FAQ</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Clarify the system, then route to the right next step
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/50">
              The design priority is clarity and routing, not ornamental interaction.
            </p>
          </div>

          <div className="max-w-4xl space-y-0 divide-y divide-white/5">
            {faqs.map((faq, i) => (
              <div key={i} className="group py-8">
                <div className="flex gap-6">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30 group-hover:border-[color:var(--accent)]/40 group-hover:text-[color:var(--accent)] transition-colors">
                    <span className="text-[10px] font-black">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{faq.q}</h3>
                    <p className="mt-4 text-[16px] leading-relaxed text-white/50">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reference routes */}
        <SupportingSurface className="relative border-t border-white/5 bg-[#0b0b0f] blueprint-grid overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
            <div className="mb-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Reference routes</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Useful routes when FAQ is not enough
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/50">
                The FAQ should still resolve to specific technical destinations.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {refs.map((ref) => (
                <a
                  key={ref.title}
                  href={ref.href}
                  target={ref.external ? "_blank" : undefined}
                  rel={ref.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col rounded-[2rem] border border-white/5 bg-black/40 p-8 backdrop-blur-md transition-all hover:border-[color:var(--accent-soft)]/30 hover:bg-[#071019]"
                >
                  <h3 className="text-xl font-bold text-white">{ref.title}</h3>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/40">{ref.body}</p>
                  <div className="mt-8 text-sm font-black uppercase tracking-widest text-[color:var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
                    Open →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </SupportingSurface>

        {/* CTA */}
        <section className="relative px-6 py-32 text-center blueprint-grid md:px-8 lg:px-12">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              If the answer needs proof, move to the product routes.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-xl text-white/50">
              FAQ should clarify terminology and routing. Detailed evidence belongs in the relevant product or contact routes.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <ButtonVNext href="/platform" tone="primary" className="h-14 rounded-2xl px-10 text-base font-black">
                Open Platform
              </ButtonVNext>
              <ButtonVNext href="/contact" tone="secondary" className="h-14 rounded-2xl px-10 text-base font-black">
                Contact
              </ButtonVNext>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
