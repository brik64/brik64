"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ── FAQ items ── */

const faqs = [
  {
    q: "What is BRIK64?",
    a: "A formal software stack centered on PCD blueprints, bounded verification, and platform workflows. Public references describe 128 operations (formal core plus contract-bounded extensions), EVA composition, and a compiler chain with self-hosting consistency checks.",
  },
  {
    q: "What is PCD?",
    a: "PCD is the bounded blueprint format used by the compiler chain. It describes what a computation does at the circuit level, including domains and composition structure, so logic can be verified and then emitted across supported targets.",
  },
  {
    q: "Is BRIK64 a programming language?",
    a: "PCD is a language, but BRIK64 is more than that. It\u2019s a compiler, a lifter (reverse compiler), a certification engine, and a platform. You don\u2019t have to write PCD directly \u2014 you can lift existing code from multiple languages into PCD blueprints, then export to multiple targets.",
  },
  {
    q: "What does \u03A6_c = 1 mean?",
    a: "\u03A6_c (phi-c) is the closure signal for the modeled circuit in the BRIK64 verification flow. \u03A6_c = 1 means declared domains, composition paths, and output constraints satisfy that formal model. The claim applies to the bounded representation, not every external runtime condition.",
  },
  {
    q: "How is this different from testing?",
    a: "Testing samples behavior for selected cases. The BRIK64 approach checks closure and domain completeness on a bounded circuit model before emission. Current repo evidence includes a 207-file proof corpus for the formal core; broader system behavior still depends on modeled scope and integration boundaries.",
  },
  {
    q: "Can I use BRIK64 with my existing code?",
    a: "Already have code? Verify it. No rewrite needed. The Lifter reverse-compiles your existing code into PCD blueprints. Point it at any file or repo. Pure functions get full certification. Impure functions get CONTRACT certification. Works with your existing code today.",
  },
  {
    q: "What languages does it support?",
    a: "Repo documentation presents lift coverage across 10 source languages and emission across 14 targets. The transpilation claim is tied to the extracted and normalized blueprint path, with explicit boundaries around unmanaged side effects.",
  },
  {
    q: "Is it open source?",
    a: "The CLI is free forever with a dual license: free for academic use, commercial license for business. The platform (registry, dashboard, GitHub integration) is a paid service with free and Pro tiers. Enterprise features include SSO, compliance, and on-premise deployment.",
  },
  {
    q: "What is the BPU?",
    a: "The BRIK Processing Unit (BPU) is presented as a policy-enforcement hardware roadmap. Current availability is software-phase enforcement and policy circuits; FPGA and silicon stages are roadmap targets with explicit phase boundaries.",
  },
  {
    q: "How much does it cost?",
    a: "The public route starts with open CLI access and documentation. Team and enterprise options extend into collaboration, governance, and deployment posture. For current commercial scope, use pricing and enterprise routes.",
  },
];

/* ── Page ── */

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              FAQ
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Frequently asked <span className="text-teal">questions.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Straight answers with explicit scope, evidence posture, and next routes.
            </p>
          </div>
        </section>

        {/* Accordion */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <div className="mx-auto max-w-3xl space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left text-sm font-medium transition-colors hover:bg-muted/20"
                >
                  <span>{faq.q}</span>
                  {open === i ? (
                    <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {open === i && (
                  <div className="border-t border-border/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Join our Discord community or reach out directly. We&rsquo;re happy to help.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Contact Us
            </a>
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Read the docs
            </a>
          </div>
        </section>
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
