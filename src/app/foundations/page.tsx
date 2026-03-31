"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  BookOpen,
  Sigma,
  CircuitBoard,
  Cpu,
  Atom,
  Lightbulb,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ── Page ── */

export default function FoundationsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Foundations
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The science is real. <span className="text-[#00b8d4]">The math is published.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A deterministic, verified system has zero informational entropy. Every state known. Every path verified.
              That is a statement about information, not about heat. And it is what our compiler proves.
            </p>
          </div>
        </section>

        {/* Digital Circuitality definition */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] FORMAL DEFINITION
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            Digital Circuitality
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Shannon (1948) defined the entropy of a discrete source as{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                H(X) = -&Sigma; p(x_i) log_2 p(x_i)
              </code>
              . When a system is completely deterministic &mdash; every input produces exactly one
              output through every path &mdash; the probability distribution collapses to a Dirac
              delta on the correct result: <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">H(X) = 0</code>.
              This applies to the circuit&rsquo;s formal specification. Runtime execution introduces
              implementation-level variance that the specification abstracts away.
            </p>
            <p>
              A system <em>S</em> exhibits Digital Circuitality if and only if:
            </p>
            <div className="rounded-md border border-teal/30 bg-teal/[0.04] p-6 text-center">
              <p className="text-lg font-bold text-teal">
                Full coherence means zero informational uncertainty
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                When <PhiC /> certifies a system, every state is known and every path is verified
              </p>
            </div>
            <p>
              <PhiC /> = 1 certifies that every input domain is bounded, every operation verified,
              every output range proven, and no execution path is undefined. There is no
              informational uncertainty because there is no unknown state.
            </p>
            <p>
              Conventional software operates with informational uncertainty &gt; 0. Unverified execution paths,
              unexplored states, unbounded inputs. Testing reduces informational uncertainty but never eliminates it &mdash;
              Dijkstra (1976): <em>&ldquo;Testing shows the presence of bugs, never their absence.&rdquo;</em>
            </p>
            <p className="font-medium text-foreground">
              Digital Circuitality eliminates informational uncertainty by construction, not by sampling.
            </p>
          </div>
        </section>

        {/* Thermodynamic Analogy */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] THERMODYNAMIC ANALOGY
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            The analogy and its limits
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              The term &ldquo;thermodynamic&rdquo; in Digital Circuitality is an <strong className="text-foreground">analogy</strong>,
              not a physical claim. A physical circuit is coherent when energy flows from source to
              sink without leaks, all signal paths are closed, and the circuit reaches steady state.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 pr-4 font-medium text-foreground">Physical circuit property</th>
                    <th className="pb-3 font-medium text-foreground">Computational metric</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/40"><td className="py-2.5 pr-4">Energy flow without leaks</td><td>Transfer efficiency</td></tr>
                  <tr className="border-b border-border/40"><td className="py-2.5 pr-4">Closed signal paths</td><td>Circuit closure (<PhiC />)</td></tr>
                  <tr className="border-b border-border/40"><td className="py-2.5 pr-4">Signal integrity</td><td>Signature verification</td></tr>
                  <tr className="border-b border-border/40"><td className="py-2.5 pr-4">Full connectivity</td><td>Verification completeness</td></tr>
                  <tr><td className="py-2.5 pr-4">Circuit complexity</td><td>Structural complexity metrics</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong className="text-foreground">What the analogy does NOT claim:</strong> No
              physical energy cost from <PhiC /> = 1. No equivalence between computational and
              thermodynamic coherence. No claim that thermodynamic laws govern compilation.
            </p>
          </div>
        </section>

        {/* EVA Algebra */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] EVA ALGEBRA
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            Composition operators
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="border border-border bg-muted/10 p-6 text-center">
              <div className="text-3xl font-bold text-teal">SEQ</div>
              <h3 className="mt-3 text-sm font-bold">Sequential</h3>
              <p className="mt-2 text-xs text-muted-foreground">Do A, then B. Output of A feeds input of B.</p>
            </div>
            <div className="border border-border bg-muted/10 p-6 text-center">
              <div className="text-3xl font-bold text-teal">PAR</div>
              <h3 className="mt-3 text-sm font-bold">Parallel</h3>
              <p className="mt-2 text-xs text-muted-foreground">Do A and B independently. No data dependency.</p>
            </div>
            <div className="border border-border bg-muted/10 p-6 text-center">
              <div className="text-3xl font-bold text-teal">COND</div>
              <h3 className="mt-3 text-sm font-bold">Conditional</h3>
              <p className="mt-2 text-xs text-muted-foreground">If X then A, else B. Both branches verified.</p>
            </div>
          </div>
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-sm leading-relaxed">
            Each operator preserves the correctness of its operands. If Part A works and Part B works,
            their composition is guaranteed to work. This is what hardware has always had &mdash; and
            software never did.
          </p>
        </section>

        {/* CMF */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] COHERENCE METRICS FRAMEWORK
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            CMF: Three metrics, one condition
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="border border-border bg-muted/10 p-6">
              <div className="text-2xl font-bold text-teal"><PhiC /></div>
              <h3 className="mt-2 text-sm font-bold">Circuit Closure</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Certifies that every branch has a complete input-to-output path.
                No dangling operations. The computational analog of a closed electrical loop.
              </p>
            </div>
            <div className="border border-border bg-muted/10 p-6">
              <div className="text-2xl font-bold text-teal">Integrity</div>
              <h3 className="mt-2 text-sm font-bold">Signal Integrity</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Verifies that observed behavior matches the expected specification exactly.
                The analog of signal integrity &mdash; no distortion, no noise.
              </p>
            </div>
            <div className="border border-border bg-muted/10 p-6">
              <div className="text-2xl font-bold text-teal">Coverage</div>
              <h3 className="mt-2 text-sm font-bold">Verification Completeness</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                All paths have been verified. No execution path has unknown behavior.
                The analog of full connectivity in a circuit.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 rounded-md border border-teal/30 bg-teal/[0.04] p-6 text-center max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-teal/60 mb-2">
              Certification Condition
            </p>
            <p className="text-sm font-bold text-foreground">
              Certification is binary. All three conditions &mdash; closure, integrity, and coverage &mdash; must hold simultaneously. There is no partial certification.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              If any condition fails, the program does not compile.
            </p>
          </div>
        </section>

        {/* Closure Through Domains */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04.5] CLOSURE THROUGH DOMAINS
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            Closure through domains
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Circuit closure (<PhiC /> = 1) requires that every execution path produces a valid,
              bounded result. Domain constraints are the mechanism that makes this possible.
            </p>
            <div className="space-y-3">
              <p>
                <strong className="text-foreground">1. Input domains bound what enters the circuit.</strong>{" "}
                Every input declares a numeric range. Values outside the range are rejected at compilation.
              </p>
              <p>
                <strong className="text-foreground">2. Arithmetic on bounded inputs produces bounded outputs.</strong>{" "}
                This is provable: if <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">a &isin; [0, 10]</code> and{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">b &isin; [1, 5]</code>, then{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">a + b &isin; [1, 15]</code> and{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">a / b &isin; [0, 10]</code>.
              </p>
              <p>
                <strong className="text-foreground">3. The compiler traces bounds through every operation to verify closure.</strong>{" "}
                Each intermediate result inherits a computed domain. If any operation could produce an unbounded
                or undefined result, the compiler rejects the program.
              </p>
              <p>
                <strong className="text-foreground">4. If any path can produce an unbounded result, compilation fails.</strong>{" "}
                There is no runtime fallback. The circuit either closes at compile time or it does not exist.
              </p>
            </div>
            <div className="rounded-md border border-teal/30 bg-teal/[0.04] p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-teal/60 mb-2">
                Hardware Analogy
              </p>
              <p className="text-sm text-muted-foreground">
                This is analogous to how hardware engineers specify voltage ranges for every pin.
                A logic gate rated for 0&ndash;5V does not accept 12V &mdash; the domain IS the specification.
                In BRIK64, the same principle applies to every variable in every circuit.
              </p>
            </div>
          </div>
        </section>

        {/* Kish-Ferry */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] INFORMATION THEORY BASIS
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            Informational entropy &ne; thermal entropy
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Recent research in information physics has demonstrated that informational entropy
              and thermal entropy are fundamentally different quantities. Treating them as
              interchangeable is a category error.
            </p>
            <p>
              For Digital Circuitality, the consequence is direct: the coherence framework measures{" "}
              <strong className="text-foreground">informational entropy</strong>, not thermal entropy.
              No thermodynamic claims are needed for the framework to be rigorous. The verification
              operates on purely informational foundations.
            </p>
          </div>
        </section>

        {/* Brillouin Connection */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [06] BRILLOUIN CONNECTION
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            From Landauer to Brillouin as inspiration
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Digital Circuitality draws conceptual inspiration from Brillouin&rsquo;s work on the
              relationship between information and entropy, while operating on purely informational
              foundations grounded in Shannon&rsquo;s framework.
            </p>
            <p>
              The system does not depend on any physical thermodynamic claims. It acknowledges
              the historical inspiration while maintaining rigorous separation between informational
              and physical domains.
            </p>
          </div>
        </section>

        {/* Deterministic Systems */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [07] DETERMINISTIC VERIFICATION
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            Zero informational uncertainty by construction
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              A formally verified, deterministic system has zero informational uncertainty.
              Every state is known, every path verified, every domain bounded, the circuit is closed.
            </p>
            <p>
              This is what <PhiC /> = 1 means in Digital Circuitality: the system&rsquo;s informational
              entropy is zero &mdash; not by testing, but by mathematical construction.
            </p>
          </div>
        </section>

        {/* Universal Transpilation */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [08] UNIVERSAL TRANSPILATION
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            Transpilation through informational closure
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Traditional transpilers operate at the <strong className="text-foreground">syntactic</strong> level:
              parse an AST in one language, emit an AST in another. BRIK64 operates at the{" "}
              <strong className="text-foreground">semantic</strong> level &mdash; extracting the computational
              essence (what it computes, not how it&rsquo;s expressed) and encoding it as a PCD circuit.
            </p>
            <p>
              The critical property: <strong className="text-foreground">if two programs in different languages
              produce the same PCD circuit, they are functionally equivalent.</strong> PCD captures
              the informational content of computation independent of syntactic vehicle.
            </p>
            <div className="border border-border bg-muted/10 p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-teal/60 mb-3">The arithmetic</p>
              <ul className="space-y-1.5 text-xs">
                <li>&bull; 10 input languages &rarr; PCD &rarr; 14 output targets</li>
                <li>&bull; 10 + 14 = 24 components for 10 &times; 14 = 140 transpilation paths</li>
                <li>&bull; Same architectural idea as LLVM (frontends + IR + backends)</li>
                <li>&bull; The addition LLVM doesn&rsquo;t have: <strong className="text-foreground">formal equivalence certification</strong></li>
              </ul>
            </div>
            <p>
              The TCE certifies that the PCD circuit is closed (<PhiC /> = 1), guaranteeing the
              computation is deterministic, total, and informationally preserving. The equivalence
              is algebraic, not tested.
            </p>
          </div>
        </section>

        {/* References */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [09] REFERENCES
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            Academic foundations
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              {
                authors: "Shannon, C.E.",
                year: "1948",
                title: "A Mathematical Theory of Communication.",
                journal: "Bell Syst. Tech. J. 27, 379\u2013423",
                relevance: "Foundation: informational entropy, the framework in which the entire system operates.",
              },
              {
                authors: "Brillouin, L.",
                year: "1953",
                title: "The Negentropy Principle of Information.",
                journal: "J. Appl. Phys. 24, 1152\u20131163",
                relevance: "Inspiration: conceptual information-entropy connection. Not foundation, inspiration.",
              },
              {
                authors: "Dijkstra, E.W.",
                year: "1976",
                title: "A Discipline of Programming.",
                journal: "Prentice-Hall",
                relevance: "Motivation: \u201CTesting shows the presence of bugs, never their absence.\u201D",
              },
              {
                authors: "Kish, L.B. et al.",
                year: "2016\u20132018",
                title: "Research on the distinction between informational and thermal entropy.",
                journal: "Journal of Computational Electronics",
                relevance: "Foundational: informational entropy and thermal entropy are distinct quantities.",
              },
            ].map((ref, i) => (
              <div key={i} className="border border-border bg-muted/10 p-5">
                <p className="text-sm font-medium text-foreground">
                  {ref.authors} ({ref.year})
                </p>
                <p className="mt-1 text-sm italic text-muted-foreground">{ref.title}</p>
                <p className="text-xs text-muted-foreground">{ref.journal}</p>
                <p className="mt-2 text-xs text-teal">{ref.relevance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            ACKNOWLEDGMENT
          </p>
          <div className="mx-auto max-w-3xl rounded-md border border-teal/30 bg-teal/[0.04] p-6">
            <GraduationCap className="mb-3 h-6 w-6 text-teal" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Prof. Laszlo B. Kish</strong> (Texas A&amp;M University)
              reviewed the foundational theoretical framework of Digital Circuitality. His research on
              the distinction between informational and thermal entropy informed the theoretical
              foundations of the system.
            </p>
          </div>
        </section>

        {/* Publications */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            PUBLICATIONS
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            Academic publications
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            <div className="border border-border bg-muted/10 p-5">
              <p className="text-xs font-medium uppercase tracking-widest text-teal/60 mb-2">arXiv preprint</p>
              <p className="text-sm font-medium text-foreground">
                Digital Circuitality: A Formal Framework for Verified Software Composition
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Submitted to arXiv (ID 7419107) &mdash; cs.PL + cs.AI + cs.AR
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                128 monomers, 110,000+ tests, 14 compilation targets, mathematically certified
              </p>
            </div>
            <div className="border border-border bg-muted/10 p-5">
              <p className="text-xs font-medium uppercase tracking-widest text-teal/60 mb-2">Zenodo Archive</p>
              <p className="text-sm font-medium text-foreground">
                BRIK64 Papers I-IV v3 + Mathematical Proofs
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                DOI: 10.5281/zenodo.19313743 &mdash; Permanent academic archive
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                207 mathematical proof files, 0 admits, complete formal verification
              </p>
            </div>
          </div>
        </section>

        {/* Synthesis */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            The logical chain
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3 text-sm text-muted-foreground text-left">
            <p>1. Shannon (1948) establishes that deterministic systems have zero informational entropy</p>
            <p>2. Modern research confirms informational entropy is distinct from thermal entropy</p>
            <p>3. A deterministic, verified computer has zero informational uncertainty</p>
            <p>4. BRIK64 builds a compiler that certifies this property by mathematical construction</p>
            <p>5. The BPU materializes this certification in silicon, where verification is physical and non-maskable</p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://digitalcircuitality.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <BookOpen className="h-4 w-4" /> Read the full theory
            </a>
            <a
              href="/features"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              See all features <ArrowRight className="h-3.5 w-3.5" />
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
