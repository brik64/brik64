import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  TrendingUp,
  Bug,
  Bot,
  Scale,
  Shield,
  Layers,
  Users,
  BadgeCheck,
  Rocket,
  Globe,
  ArrowRight,
  Mail,
  Cpu,
} from "lucide-react";

/* ── Traction metrics ── */

const traction = [
  { value: "128", label: "Monomers (64 certified + 64 extended)" },
  { value: "10", label: "Lift-from languages" },
  { value: "14", label: "Export targets" },
  { value: "15,424", label: "Tests (0 failures)" },
  { value: "14", label: "Rust crates" },
  { value: "207", label: "Coq proofs" },
];

/* ── Business model ── */

const businessModel = [
  { title: "Free CLI", desc: "Open source compiler and SDKs. Build the developer community." },
  { title: "Pro ($49/mo)", desc: "Platform access, private registry, GitHub integration, team features." },
  { title: "Enterprise", desc: "SSO, compliance reports, audit trails, CI/CD gates, on-premise, custom SLA." },
  { title: "Registry", desc: "Public free, private paid. npm for verified logic." },
  { title: "Verified Badge", desc: "API-connected certification badge. Subscription-locked. White-label for enterprise." },
  { title: "AI Agent Ecosystem", desc: "MCP server, skills marketplace, agent certification fees." },
];

/* ── Roadmap ── */

const roadmap = [
  { phase: "2026 Q1", label: "Beta launch", status: "current" },
  { phase: "2026 Q2", label: "Public launch, enterprise pilots, academic partnerships", status: "next" },
  { phase: "2026 Q3", label: "Series A target, API marketplace", status: "next" },
  { phase: "2026 Q4", label: "10K+ active users, compliance certifications", status: "next" },
  { phase: "2027", label: "BPU hardware prototype, government contracts", status: "future" },
  { phase: "2028+", label: "BPU chip production, mandatory certification standard", status: "future" },
];

/* ── Page ── */

export default function InvestorsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18 text-center">
          <span className="text-muted-foreground mb-5 inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
            Investors
          </span>
          <h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The infrastructure layer for <span className="text-teal">verified software.</span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            BRIK-64 is building the platform where every line of code is mathematically proven
            correct. We&rsquo;re creating a new category: formal verification as a service.
          </p>
        </section>

        {/* The Problem / Market opportunity */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] THE OPPORTUNITY
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">Why now</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-muted/10 p-6">
              <Bug className="mb-4 h-6 w-6 text-teal" />
              <h3 className="text-sm font-bold">$600B+ software quality market</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Bugs cost the global economy $600B+ annually (NIST). The COBOL crisis alone
                threatens $3T+ in daily banking transactions. Current QA tools reduce bugs;
                BRIK-64 eliminates them by construction.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/10 p-6">
              <Bot className="mb-4 h-6 w-6 text-teal" />
              <h3 className="text-sm font-bold">AI makes it urgent</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                AI generates 40%+ of new code (GitHub Copilot data). Tests written by the same AI
                are circular. Code review doesn&rsquo;t scale. The verification gap grows with every
                AI-generated line.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/10 p-6">
              <Scale className="mb-4 h-6 w-6 text-teal" />
              <h3 className="text-sm font-bold">Regulatory tailwind</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                EU AI Act, FDA software guidelines, NHTSA autonomous vehicle rules. Regulators are
                moving from &ldquo;test it&rdquo; to &ldquo;prove it.&rdquo; BRIK-64 provides the proof.
              </p>
            </div>
          </div>
        </section>

        {/* What BRIK-64 is */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] THE PRODUCT
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">What BRIK-64 is</h2>
          <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-teal/30 bg-teal/[0.04] p-6">
            <p className="text-sm leading-relaxed text-foreground">
              A self-verifying compiler and platform that lifts code from 10 languages into
              mathematically certified blueprints (PCD), then exports to 14 targets with formal
              proof of correctness. <PhiC /> = 1 means zero informational entropy: every input
              consumed, every output produced, every path verified. The compiler verifies its own
              compilation.
            </p>
          </div>
        </section>

        {/* Traction */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] TRACTION
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">What we&rsquo;ve built</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {traction.map((t) => (
              <div key={t.label} className="rounded-lg border border-border bg-muted/20 p-4 text-center">
                <div className="text-2xl font-bold text-teal">{t.value}</div>
                <div className="mt-1 text-[10px] text-muted-foreground">{t.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Business model */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] BUSINESS MODEL
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Open source CLI &rarr; Platform &rarr; Enterprise
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessModel.map((b) => (
              <div key={b.title} className="rounded-lg border border-border bg-muted/10 p-5">
                <h3 className="text-sm font-bold">{b.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competitive moat */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] COMPETITIVE MOAT
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Why this is hard to replicate
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              { title: "207 Coq proofs", desc: "Each monomer is mathematically proven correct. Building this proof library from scratch takes years." },
              { title: "Self-compilation fixpoint", desc: "The compiler compiles itself to an identical hash. This is a property, not a feature \u2014 it\u2019s extremely difficult to achieve." },
              { title: "First-mover in AI verification", desc: "PCD is the first language designed for AI agents. As AI code generation accelerates, the need for formal verification becomes existential." },
              { title: "Academic backing", desc: "Prof. Kish (Texas A&M) reviewed the theoretical foundations. The framework stands on Shannon, Brillouin, and Kish-Ferry." },
              { title: "Network effects", desc: "Every certified circuit in the registry reduces the need to write new code. The more circuits exist, the more valuable the platform." },
            ].map((m) => (
              <div key={m.title} className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <h3 className="text-sm font-bold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [06] VISION
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">Roadmap</h2>
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            {roadmap.map((r) => (
              <div
                key={r.phase}
                className={`flex items-center gap-4 rounded-lg border p-4 ${
                  r.status === "current"
                    ? "border-teal/40 bg-teal/[0.04]"
                    : "border-border bg-muted/10"
                }`}
              >
                <span className={`shrink-0 text-sm font-mono font-bold ${r.status === "current" ? "text-teal" : "text-muted-foreground"}`}>
                  {r.phase}
                </span>
                <span className="text-sm">{r.label}</span>
                {r.status === "current" && (
                  <span className="ml-auto shrink-0 rounded-full bg-teal/20 px-2 py-0.5 text-[10px] font-medium text-teal">
                    WE ARE HERE
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* IP */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [07] INTELLECTUAL PROPERTY
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">IP portfolio</h2>
          <div className="mx-auto mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl">
            <div className="rounded-lg border border-border bg-muted/10 p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">5 Patents Planned</h3>
              <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                <li>&bull; Self-compilation fixpoint verification</li>
                <li>&bull; TCE certification engine</li>
                <li>&bull; BPU hardware architecture</li>
                <li>&bull; AI action verification via policy circuits</li>
                <li>&bull; Policy circuit certification</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-muted/10 p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Trademarks</h3>
              <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                <li>&bull; Digital Circuitality&trade;</li>
                <li>&bull; BRIK-64&trade;</li>
                <li>&bull; PCD&trade;</li>
                <li>&bull; BPU&trade;</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            The future of software is verified.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            We&rsquo;re building the infrastructure layer for a world where every line of code
            carries mathematical proof of correctness.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:investors@brik64.com"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <Mail className="h-4 w-4" /> investors@brik64.com
            </a>
            <a
              href="/features"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              See the product <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
