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

/* ── Page ── */

export default function FoundationsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18 text-center">
          <span className="text-muted-foreground mb-5 inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
            Foundations
          </span>
          <h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The science behind <span className="text-teal">Digital Circuitality.</span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            A deterministic, verified computational system has informational entropy zero.
            This is a statement about information, not about heat.
          </p>
        </section>

        {/* Digital Circuitality definition */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] FORMAL DEFINITION
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
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
            </p>
            <p>
              A system <em>S</em> exhibits Digital Circuitality if and only if:
            </p>
            <div className="rounded-md border border-teal/30 bg-teal/[0.04] p-6 text-center">
              <p className="font-mono text-lg font-bold text-teal">
                <PhiC />(S) = 1 &hArr; S_I = 0
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                where S_I is the Shannon informational entropy and <PhiC /> is the coherence coefficient
              </p>
            </div>
            <p>
              <PhiC /> = 1 certifies that every input domain is bounded, every operation verified,
              every output range proven, and no execution path is undefined. There is no
              informational uncertainty because there is no unknown state.
            </p>
            <p>
              Conventional software operates with S_I &gt; 0. Unverified execution paths,
              unexplored states, unbounded inputs. Testing reduces S_I but never eliminates it &mdash;
              Dijkstra (1976): <em>&ldquo;Testing shows the presence of bugs, never their absence.&rdquo;</em>
            </p>
            <p className="font-medium text-foreground">
              Digital Circuitality eliminates S_I by construction, not by sampling.
            </p>
          </div>
        </section>

        {/* Thermodynamic Analogy */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] THERMODYNAMIC ANALOGY
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
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
                  <tr className="border-b border-border/40"><td className="py-2.5 pr-4">Energy flow without leaks</td><td>Transfer efficiency (ETC)</td></tr>
                  <tr className="border-b border-border/40"><td className="py-2.5 pr-4">Closed signal paths</td><td>Circuit closure (<PhiC />)</td></tr>
                  <tr className="border-b border-border/40"><td className="py-2.5 pr-4">Signal integrity</td><td>Signature distance (&delta;)</td></tr>
                  <tr className="border-b border-border/40"><td className="py-2.5 pr-4">Full connectivity</td><td>Verification completeness V(C)</td></tr>
                  <tr><td className="py-2.5 pr-4">Circuit complexity</td><td>Cyclomatic complexity, structural entropy</td></tr>
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
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Composition operators
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="border border-border bg-muted/10 p-6 text-center">
              <div className="text-3xl font-bold text-teal">&otimes;</div>
              <h3 className="mt-3 text-sm font-bold">Sequential</h3>
              <p className="mt-2 text-xs text-muted-foreground">Do A, then B. Output of A feeds input of B.</p>
            </div>
            <div className="border border-border bg-muted/10 p-6 text-center">
              <div className="text-3xl font-bold text-teal">&parallel;</div>
              <h3 className="mt-3 text-sm font-bold">Parallel</h3>
              <p className="mt-2 text-xs text-muted-foreground">Do A and B independently. No data dependency.</p>
            </div>
            <div className="border border-border bg-muted/10 p-6 text-center">
              <div className="text-3xl font-bold text-teal">&oplus;</div>
              <h3 className="mt-3 text-sm font-bold">Conditional</h3>
              <p className="mt-2 text-xs text-muted-foreground">If X then A, else B. Both branches verified.</p>
            </div>
          </div>
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-sm leading-relaxed">
            Each operator preserves the correctness of its operands. If Part A works and Part B works,
            A &otimes; B is guaranteed to work. This is what hardware has always had &mdash; and
            software never did.
          </p>
        </section>

        {/* CMF */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] COHERENCE METRICS FRAMEWORK
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            CMF: Three metrics, one condition
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="border border-border bg-muted/10 p-6">
              <div className="text-2xl font-bold text-teal"><PhiC /></div>
              <h3 className="mt-2 text-sm font-bold">Circuit Closure</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                <PhiC /> = 1 certifies that every branch has a complete input &rarr; output path.
                No dangling operations. The computational analog of a closed electrical loop.
              </p>
            </div>
            <div className="border border-border bg-muted/10 p-6">
              <div className="text-2xl font-bold text-teal">&delta;</div>
              <h3 className="mt-2 text-sm font-bold">Signature Distance</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                &delta; = 0 means the observed signature matches the expected signature exactly.
                The analog of signal integrity &mdash; no distortion, no noise.
              </p>
            </div>
            <div className="border border-border bg-muted/10 p-6">
              <div className="text-2xl font-bold text-teal">V(C)</div>
              <h3 className="mt-2 text-sm font-bold">Verification Completeness</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                V(C) = 1 means all paths have been verified. No execution path has unknown behavior.
                The analog of full connectivity in a circuit.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 rounded-md border border-teal/30 bg-teal/[0.04] p-6 text-center max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-teal/60 mb-2">
              Certification Condition
            </p>
            <p className="font-mono text-sm font-bold text-foreground">
              &Omega; = 1 &hArr; <PhiC /> = 1.000 &and; &Delta;N = 0.000 &and; C_m = 1.000
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              &Omega; is binary. There is no &Omega; = 0.9. All three conditions must hold or the program does not compile.
            </p>
          </div>
        </section>

        {/* Kish-Ferry */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] KISH-FERRY DISTINCTION
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Informational entropy &ne; thermal entropy
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Kish & Ferry (2018, Texas A&M / Arizona State) demonstrated that informational entropy
              and thermal entropy are fundamentally different physical quantities &mdash; in their
              words, <em>&ldquo;apples and oranges.&rdquo;</em>
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border border-border bg-muted/10 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Thermal Entropy S_th</h3>
                <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  <li>&bull; Objective property of the physical system</li>
                  <li>&bull; Macroscopic state variable (Boltzmann distribution)</li>
                  <li>&bull; Units: J/K</li>
                </ul>
              </div>
              <div className="border border-border bg-muted/10 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Informational Entropy S_I</h3>
                <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  <li>&bull; Subjective &mdash; depends on observer knowledge</li>
                  <li>&bull; Units: bits (or nats)</li>
                  <li>&bull; Can be separated in space and time from S_th</li>
                </ul>
              </div>
            </div>
            <p>
              Treating them as interchangeable &mdash; as the standard Landauer interpretation
              requires &mdash; is a <strong className="text-foreground">category error</strong>.
              For Digital Circuitality, the consequence is direct: the CMF measures informational
              entropy, not thermal entropy. No thermodynamic claims needed for the framework to be rigorous.
            </p>
          </div>
        </section>

        {/* Brillouin Connection */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [06] BRILLOUIN CONNECTION
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            From Landauer to Brillouin as inspiration
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Leon Brillouin (1953) proposed the negentropy principle: total entropy of a closed
              system (informational + thermal) cannot decrease. This established a conceptual link
              between information acquisition and thermodynamic cost.
            </p>
            <p>
              Kish & Ferry showed this principle is <strong className="text-foreground">not a general law</strong> &mdash;
              it can be violated when measurement and physical systems are at different temperatures
              or weakly coupled.
            </p>
            <p>Digital Circuitality adopts an epistemologically precise position:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li><strong className="text-foreground">Acknowledges</strong> Brillouin as conceptual inspiration</li>
              <li><strong className="text-foreground">Does not depend</strong> on the validity of the negentropy principle as physical law</li>
              <li><strong className="text-foreground">Operates</strong> on purely informational foundations valid regardless of whether Brillouin was right about the information-thermodynamics connection</li>
            </ol>
            <p>
              The critical correction in BRIK-64&rsquo;s foundational papers: migrate from a Landauer-based
              framing (which assumes entropy interchangeability) to a Brillouin-as-inspiration framing,
              operating on pure Shannon. This correction was suggested by Prof. Kish himself during
              his review of the theoretical framework.
            </p>
          </div>
        </section>

        {/* Zero-Energy Erasure */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [07] ZERO-ENERGY ERASURE
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Information erasure at zero energy cost
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Kish, Granqvist, Khatri & Peper (2016) demonstrated that information erasure can occur
              with <strong className="text-foreground">zero or even negative energy dissipation</strong> through
              passive thermalization in double-well potential memories. This refutes the Landauer
              bound (kT ln 2 per bit) as a general principle.
            </p>
            <div className="rounded-md border border-teal/30 bg-teal/[0.04] p-6">
              <p className="text-sm italic text-foreground">
                &ldquo;In a deterministic computer with error-free memory, the information entropy of
                the memory is <strong>always zero</strong>.&rdquo;
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                &mdash; Kish et al. (2016), Section 4
              </p>
            </div>
            <p>
              This is <strong className="text-foreground">exactly</strong> what <PhiC /> = 1 means
              in Digital Circuitality. A formally verified, deterministic system has zero informational
              uncertainty. Every state is known, every path verified, every domain bounded, the circuit is closed.
            </p>
          </div>
        </section>

        {/* Universal Transpilation */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [08] UNIVERSAL TRANSPILATION
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Transpilation through informational closure
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Traditional transpilers operate at the <strong className="text-foreground">syntactic</strong> level:
              parse an AST in one language, emit an AST in another. BRIK-64 operates at the{" "}
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
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
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
                authors: "Kish, L.B., Granqvist, C.G., Khatri, S.P., Peper, F.",
                year: "2016",
                title: "Zero and negative energy dissipation at information-theoretic erasure.",
                journal: "J. Comput. Electron. 15, 335\u2013339",
                relevance: "Key: refutes Landauer as general principle; S_I = 0 for deterministic computers.",
              },
              {
                authors: "Kish, L.B., Ferry, D.K.",
                year: "2018",
                title: "Information entropy and thermal entropy: apples and oranges.",
                journal: "J. Comput. Electron. 17, 43\u201350",
                relevance: "Critical: informational entropy \u2260 thermal entropy; category error in Landauer.",
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
              reviewed the foundational theoretical framework of Digital Circuitality and suggested the
              informational direction that separates it from physical thermodynamic claims. His work on
              the distinction between informational and thermal entropy directly shaped the theoretical
              foundations of the system, including the critical correction from a Landauer-based framing
              to a Brillouin-as-inspiration framing operating on pure Shannon.
            </p>
          </div>
        </section>

        {/* Synthesis */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            The logical chain
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3 text-sm text-muted-foreground text-left">
            <p>1. Shannon (1948) defines H(X) = 0 for deterministic systems</p>
            <p>2. Kish & Ferry (2018) confirm S_I &ne; S_th &mdash; informational entropy carries no thermodynamic implications</p>
            <p>3. Kish et al. (2016) prove S_I = 0 for deterministic computers with error-free memory</p>
            <p>4. BRIK-64 builds a compiler that certifies <PhiC /> = 1 &hArr; S_I = 0 by construction</p>
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
      </main>
      <Footer />
    </>
  );
}
