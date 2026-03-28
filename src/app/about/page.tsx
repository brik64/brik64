import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink } from "lucide-react";

const sections = [
  {
    tag: "01",
    title: "The Vision",
    content:
      "Software should work like hardware. A certified circuit does not fail \u2014 it either computes correctly or it does not execute at all. BRIK-64 brings this guarantee to software by treating every program as a composition of mathematically proven building blocks.",
  },
  {
    tag: "02",
    title: "The Science",
    content:
      "BRIK-64 is grounded in information theory. Brillouin\u2019s principle establishes the thermodynamic cost of information. Kish (Texas A\u0026M) extended this to digital systems, proving that computation has measurable physical constraints. Digital Circuitality applies these insights to create software that carries its own correctness proof.",
  },
  {
    tag: "03",
    title: "The Technology",
    content:
      "PCD (Proven Circuit Description) is the universal blueprint format. The brikc compiler maps programs onto 128 formally verified monomers \u2014 atomic operations with Coq proofs. The EVA algebra composes monomers into certified circuits where \u03a6_c = 1 guarantees closure: every input produces a valid output.",
  },
  {
    tag: "04",
    title: "Open Source",
    content:
      "BRIK-64 is built in the open. The compiler, monomers, and PCD specification are all open source. Join the community on GitHub, Discord, X, and Medium to contribute, report issues, and help shape the future of verified software.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18 text-center">
          <span className="text-muted-foreground mb-5 inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
            Company
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About <span className="text-teal">BRIK-64</span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            Digital Circuitality is a new paradigm for building software that is mathematically guaranteed to be correct.
            Every certified program carries a proof that <PhiC /> = 1 &mdash; the circuit is closed.
          </p>
        </section>

        {/* Sections */}
        {sections.map((s) => (
          <section
            key={s.tag}
            className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18"
          >
            <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
              [{s.tag}] {s.title.toUpperCase()}
            </p>
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              {s.title}
            </h2>
            <p className="text-center mx-auto text-muted-foreground mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
              {s.content}
            </p>
          </section>
        ))}

        {/* CTA */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Explore BRIK-64
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Read the foundations, browse the docs, or dive into the code.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/foundations"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Foundations <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Documentation <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/brik64"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
