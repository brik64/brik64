import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Bug,
  Cpu,
  Layers,
  Mail,
  Rocket,
  Scale,
  Shield,
  TrendingUp,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Investors — BRIK64",
  description:
    "Category thesis, system form, and investor-facing truth boundary for verified software infrastructure.",
};

const opportunity = [
  {
    icon: Bug,
    title: "The verification gap remains structural",
    description:
      "Modern software delivery still depends on tests, human review, and operational luck to catch failure paths that were never made explicit in the logic itself.",
  },
  {
    icon: Bot,
    title: "AI increases volume faster than review depth",
    description:
      "Generated code expands the surface area of change. That makes external verification and review-ready artifacts more valuable than another layer of optimistic automation.",
  },
  {
    icon: Scale,
    title: "Regulated buyers want inspectable evidence",
    description:
      "Technical leaders increasingly need software evidence they can hand into audit, safety, and governance workflows without rewriting the argument from scratch for each release.",
  },
] as const;

const traction = [
  {
    value: "Public",
    label: "CLI, docs, and technical reference routes are already live.",
  },
  {
    value: "Integrated",
    label: "Language, compiler, platform, registry, and AI routes form one public system story.",
  },
  {
    value: "Review-ready",
    label: "Compliance, enterprise, and policy surfaces preserve the handoff narrative instead of hiding it.",
  },
  {
    value: "Repo-backed",
    label: "The public thesis stays tied to artifacts that exist in the repository today.",
  },
] as const;

const businessModel = [
  {
    title: "Developer entry",
    description:
      "Open CLI and docs make the system legible to engineers before commercial packaging enters the conversation.",
  },
  {
    title: "Team workflow",
    description:
      "Shared review state, private registry posture, and governance-oriented workflow deepen value once software becomes a multi-operator asset.",
  },
  {
    title: "Enterprise operating model",
    description:
      "Identity controls, deployment posture, and evidence mapping turn the product story into an architecture review path for larger organizations.",
  },
  {
    title: "Registry compounding",
    description:
      "Reusable bounded circuits can create reuse and review leverage when teams stop treating each implementation as a new trust problem.",
  },
  {
    title: "AI and policy layer",
    description:
      "Policy circuits and external verification make the stack relevant to teams shipping model-produced code and agent actions under explicit boundaries.",
  },
  {
    title: "Adoption sequencing",
    description:
      "The commercial logic works only if local developer adoption, shared review, and enterprise controls remain one coherent stack instead of disconnected SKUs.",
  },
] as const;

const moat = [
  {
    title: "System form, not a point feature",
    description:
      "The differentiation is the language + compiler + platform + registry chain, not a single scanner or badge.",
  },
  {
    title: "Review object stays stable across handoff",
    description:
      "The public story consistently moves from blueprint to verification state to publication and enterprise review instead of switching nouns at every page boundary.",
  },
  {
    title: "Bounded workflow discipline",
    description:
      "The site, docs, and product routes keep returning to explicit domains, closure state, and reviewable artifacts rather than making trust claims by slogan.",
  },
  {
    title: "AI-era fit",
    description:
      "As generated code increases, the system becomes more relevant wherever organizations need checks outside the model and outside the test suite.",
  },
  {
    title: "Foundations and product alignment",
    description:
      "The category thesis is supported by the same public routes that explain foundations, PCD, CLI, platform, compliance, and AI policy workflows.",
  },
] as const;

const roadmap = [
  {
    phase: "Current surface",
    detail:
      "Public product, reference, and policy routes establish the system shape for developers, technical leaders, and enterprise buyers.",
    state: "current",
  },
  {
    phase: "Operational adoption",
    detail:
      "Deepen the transition from individual CLI use into shared registry, team governance, and architecture review paths.",
    state: "next",
  },
  {
    phase: "Evidence expansion",
    detail:
      "Strengthen policy, compliance, and AI workflow surfaces so review artifacts remain legible across more buyer conversations.",
    state: "next",
  },
  {
    phase: "Ecosystem depth",
    detail:
      "Extend reuse, registry, and integration layers only where the repo and product workflow can still support the claims.",
    state: "future",
  },
  {
    phase: "Hardware research track",
    detail:
      "BPU remains a staged research and roadmap topic. It is not presented here as shipped product availability.",
    state: "future",
  },
] as const;

const ipPosture = [
  {
    title: "Trademark posture",
    items: ["Digital Circuitality", "BRIK-64", "PCD", "BPU"],
  },
  {
    title: "Patent direction",
    items: [
      "Compiler and fixpoint-related workflows under evaluation",
      "Policy and verification workflow inventions under review",
      "Hardware research tracks described as planned work, not granted status",
    ],
  },
] as const;

export default function InvestorsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <section className="border-b border-border bg-gradient-to-b from-teal/[0.10] via-background to-background">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Investors
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A category thesis for{" "}
              <span className="text-teal">verified software infrastructure.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              BRIK-64 is presented here as a system form: language, compiler, platform, registry, and evidence workflow.
              This page explains why that form matters, what the public product already supports, and where the claims stop.
            </p>
            <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-teal/30 bg-teal/[0.04] p-6 text-left shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Truth boundary</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                This is not a financial theater page. It avoids named customer claims, revenue claims, roadmap certainty,
                and unsupported market-leadership language. The point is to make the category and architecture legible to a
                technical investor.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] THE OPPORTUNITY
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">Why this category exists</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {opportunity.map((item) => (
              <article key={item.title} className="border border-border bg-muted/10 p-6">
                <item.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] THE PRODUCT
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">System form</h2>
          <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-teal/30 bg-teal/[0.04] p-6 shadow-sm">
            <p className="text-sm leading-relaxed text-foreground">
              BRIK-64 is not presented as a single compiler feature. Publicly, it is a bounded software stack: PCD as the
              reviewable blueprint layer, the compiler path as the normalization and verification layer, platform and registry
              as the reuse and publication layer, and enterprise / compliance routes as the review handoff layer.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
              <Layers className="h-6 w-6 text-teal" />
              <p className="mt-4 text-sm font-semibold text-foreground">PCD and bounded blueprints</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The system starts with a reviewable representation of computation instead of opaque source transformations.
              </p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
              <Cpu className="h-6 w-6 text-teal" />
              <p className="mt-4 text-sm font-semibold text-foreground">Compiler and verification chain</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The compiler path is the technical object that turns blueprint logic into emitted outputs while preserving review state.
              </p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
              <TrendingUp className="h-6 w-6 text-teal" />
              <p className="mt-4 text-sm font-semibold text-foreground">Platform and registry reuse</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Reuse and publication matter because teams need the verified object to survive collaboration, audit, and deployment handoff.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] TRACTION
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">Repo-backed scope today</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {traction.map((item) => (
              <div key={item.label} className="border border-border bg-muted/20 p-5 text-center">
                <div className="text-xl font-semibold text-teal">{item.value}</div>
                <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            The traction argument here is intentionally conservative: public routes, artifacts, and workflow depth that can
            be inspected in the repo and on the site right now.
          </p>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] BUSINESS MODEL
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Open entry, operational depth, and enterprise handoff
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessModel.map((item) => (
              <article key={item.title} className="border border-border bg-muted/10 p-5">
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] COMPETITIVE MOAT
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Technical defensibility
          </h2>
          <div className="mx-auto mt-8 max-w-4xl space-y-5">
            {moat.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [06] ROADMAP
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Staged hypothesis, not promise theater
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {roadmap.map((item) => (
              <div
                key={item.phase}
                className={`flex items-start gap-4 border p-4 ${
                  item.state === "current"
                    ? "border-teal/40 bg-teal/[0.04]"
                    : "border-border bg-muted/10"
                }`}
              >
                <span
                  className={`shrink-0 text-sm font-mono font-bold ${
                    item.state === "current" ? "text-teal" : "text-muted-foreground"
                  }`}
                >
                  {item.phase}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{item.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [07] INTELLECTUAL PROPERTY
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">IP posture</h2>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {ipPosture.map((section) => (
              <article key={section.title} className="border border-border bg-muted/10 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">{section.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-20 text-center md:px-12 lg:px-18">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Review the category through the technical system, not through slogans.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The strongest investor conversation starts from foundations, product form, and evidence posture, then extends
            into operating model and adoption sequencing.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:investors@brik64.com"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <Mail className="h-4 w-4" /> Request investor overview
            </a>
            <Link
              href="/foundations"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Read foundations <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Open platform <Rocket className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
