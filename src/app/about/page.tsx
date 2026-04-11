import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";
import { EvidenceSurface, FeatureMatrixSurface, PageSectionHeader } from "@/components/PageArtifacts";

export const metadata = {
  title: "About — BRIK64",
  description:
    "BRIK64 presents a bounded software stack built around PCD, compiler verification, and reusable platform workflows.",
};

const sections = [
  {
    tag: "01",
    title: "The Problem We Are Solving",
    content:
      "For sixty years, we have written programs as human-readable text and hoped they would work. That approach built an industry. It also built a permanent gap between what code says and what code does. Testing happens after the fact — if it happens at all. Reviews are manual, subjective, and incomplete. And now AI generates more code than every human developer combined. Not a single line carries a mathematical proof of correctness. The AI guesses. The human rubber-stamps. Nobody is sure. That does not scale. That was never going to scale.",
  },
  {
    tag: "02",
    title: "The Idea",
    content:
      "Software should behave like a bounded system, not an open-ended guess. A circuit either closes or it does not. We applied that discipline to software through Digital Circuitality: 128 reviewed atomic operations, EVA composition laws, and a formal blueprint language. The compiler verifies closure against the declared model before emission. Φc = 1 remains a model-level closure condition, not a blanket claim about every external environment.",
  },
  {
    tag: "03",
    title: "The Science",
    content:
      "BRIK64 is grounded in information-theoretic reasoning and proof-oriented compiler discipline. In this framework, Φc = 1 is treated as a binary closure condition on the modeled circuit. It is not a confidence score. Current repo evidence includes a 207-file proof corpus for the formal core. The science route keeps theorem, analogy, and product implication separate so claims remain supportable.",
  },
  {
    tag: "04",
    title: "What We Built",
    content:
      "PCD is the formal blueprint format. The operation catalog keeps 64 formal-core operations and 64 contract-bounded extensions. EVA defines sequential, parallel, and conditional composition. The Lifter reads 10 source languages into bounded blueprints, and the compiler emits 14 targets from the same normalized representation. A self-compiling fixpoint is documented as consistency evidence for the current compiler build chain.",
  },
  {
    tag: "05",
    title: "AI Native by Design",
    content:
      "PCD stays compact enough for model-assisted authoring and human review. AI can propose candidate blueprints, but verification remains external to the model. If checks fail, diagnostics feed the repair loop until the bounded circuit passes policy and closure requirements. The key property is not model trust by default; it is an explicit external verification path.",
  },
  {
    tag: "06",
    title: "Developer Access and Adoption",
    content:
      "The CLI and core tooling provide a low-friction technical entrypoint. Teams can start locally, verify bounded logic, and move into platform workflows when they need shared review and reuse. The adoption claim is practical: stronger structural guarantees for the modeled software path, with explicit boundaries around what remains outside that model.",
  },
];

const facts = [
  { value: "128", label: "Certified Operations" },
  { value: "14", label: "Compilation Targets" },
  { value: "10", label: "Input Languages" },
  { value: "207", label: "Coq Proofs" },
  { value: "Fixpoint", label: "Self-Hosted Chain" },
  { value: "Qualified", label: "Claim Posture" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">

          {/* ── Hero ── */}
          <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
            <HeroWireframeClient />
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
              <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                Company
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                We built the language{" "}
                <span className="text-teal">where incorrect programs cannot compile.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                BRIK64 combines formal blueprints, bounded verification, and reusable delivery workflows.
                Teams can author or lift logic into PCD, verify closure and domains, and carry review-ready
                outputs into platform and registry workflows with explicit claim boundaries.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="/foundations"
                  className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
                >
                  Read the science <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://docs.brik64.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  Documentation <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* ── Facts ── */}
          <section className="bg-background border-b border-border px-6 py-12 lg:px-16">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {facts.map((f) => (
                <div key={f.label} className="border border-border bg-muted/20 p-4 text-center">
                  <div className="text-2xl font-bold text-teal">{f.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{f.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="border-b border-border px-6 py-16 lg:px-16">
            <PageSectionHeader
              eyebrow="Company Overview"
              title="Operating thesis, proof posture, and product handoff in one view"
              description="This opening block keeps the stack and evidence posture explicit before the long-form company narrative."
            />
            <div className="mx-auto mt-10 grid max-w-6xl gap-6">
              <FeatureMatrixSurface
                eyebrow="Company Matrix"
                title="The BRIK64 operating thesis in one technical matrix"
                description="Core numbers and positioning are presented with explicit evidence boundaries."
                metrics={[
                  { label: "Monomers", value: "128", detail: "Verified operations kept intentionally small enough for human and agent reasoning." },
                  { label: "Targets", value: "14", detail: "Multiple compilation targets still flow from one formal blueprint." },
                  { label: "Proof posture", value: "Φc = 1", detail: "Closure remains a binary certification condition, not a score." },
                ]}
                rows={[
                  { title: "Problem", body: "AI-generated software scales faster than human review. The old review stack does not scale with it.", state: "accent" },
                  { title: "Method", body: "Digital Circuitality moves software closer to circuit design: bounded inputs, explicit composition, and compile-time closure." },
                  { title: "Position", body: "The company page stays rigorous by separating theorem-backed claims from broader positioning language." },
                ]}
              />
              <EvidenceSurface
                eyebrow="Claim Boundary"
                title="What the company page is allowed to claim"
                description="The redesign sharpens the distinction between supportable engineering facts and narrative context."
                items={[
                  { label: "Formal claim", body: "The compiler enforces structural closure and domain-bounded computation on the formal circuit model." },
                  { label: "Platform claim", body: "BRIK64 provides a toolchain, registry, and AI-facing workflow around that formal core." },
                  { label: "Narrative claim", body: "The company story can describe why this matters, but it should not blur proof, evidence, and aspiration." },
                ]}
              />
            </div>
          </section>

          {/* ── Story Sections ── */}
          {sections.map((s) => (
            <section
              key={s.tag}
              className="bg-background border-b border-border px-6 py-16 lg:px-16"
            >
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-teal">
                [{s.tag}] {s.title.toUpperCase()}
              </p>
              <h2 className="mx-auto text-center max-w-3xl text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {s.title}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
                {s.content}
              </p>
            </section>
          ))}

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Start locally, then move into platform workflows
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Install the CLI for local bounded workflows, then continue into foundations, platform, and documentation for team adoption paths.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/foundations"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
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

        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
