import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { CopyableCode } from "@/components/CopyableCode";
import { Shield, Bot, Lock, Zap, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "AI & Machine Learning — BRIK64 Industries",
  description:
    "Verified AI. Not just aligned AI. Policy circuits as guardrails for AI-generated code, MCP integration, and vibe coding safety nets.",
};

const useCases = [
  {
    icon: Shield,
    title: "Policy Circuits as Guardrails",
    description:
      "Define hard mathematical boundaries for what AI agents can output. Not alignment — constraint. Every output passes through a verified circuit that validates domain constraints before execution.",
  },
  {
    icon: Bot,
    title: "MCP Integration",
    description:
      "Connect AI agents to the BRIK64 registry via Model Context Protocol. Your agent queries 127,000+ certified circuits before generating new code.",
  },
  {
    icon: Lock,
    title: "AI Agent Certification",
    description:
      "Every function an AI agent produces can be lifted to PCD and certified. If the proof fails, the code doesn't ship. No exceptions.",
  },
  {
    icon: Zap,
    title: "Vibe Coding Safety Net",
    description:
      "AI writes 70% of new code. Who verifies it? BRIK64 catches what code review misses — mathematically, not statistically.",
  },
];

const standards = [
  "No formal AI code safety standards exist yet",
  "BRIK64 Policy Circuits fill the vacuum",
  "Generates evidence aligned with NIST AI RMF",
  "Supports EU AI Act compliance workflows",
  "SOC2 audit trail for AI-generated code",
];

export default function AIIndustryPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* ── Hero ── */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframeClient />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              AI &amp; Machine Learning
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Verified AI.{" "}
              <span className="text-[#00b8d4]">Not just aligned AI.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Alignment is a hope. Verification is a proof. BRIK64 gives AI-generated code
              mathematical verification — not probabilistic guesses.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Connect your AI agent <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://docs.brik64.dev/mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                MCP Docs <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border">
          {/* ── The Challenge ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Challenge
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI-generated code has no guarantees
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Prompt injection",
                  desc: "Malicious prompts can make AI agents produce code that passes tests but contains backdoors. No test suite catches what it wasn't designed to find.",
                },
                {
                  title: "Hallucinated logic",
                  desc: "LLMs generate plausible-looking code that compiles and runs — but implements the wrong algorithm. The bug hides in plain sight.",
                },
                {
                  title: "Circular testing",
                  desc: "Tests written by the same AI that wrote the code are circular by definition. They verify what the model thinks is correct, not what is correct.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-border bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── How BRIK64 Helps ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              How BRIK64 Helps
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mathematical guardrails for AI agents
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {useCases.map((uc) => (
                <div key={uc.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#00b8d4]/10">
                    <uc.icon className="h-6 w-6 text-[#00b8d4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {uc.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Policy Circuit Example ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Policy Circuit Example
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI action validator — constrain output domains
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This policy circuit constrains what an AI agent can output. If the action
              falls outside the verified domain, the circuit rejects it — before execution,
              not after damage.
            </p>
            <div className="mt-8">
              <CopyableCode title="ai_action_validator.pcd">{`// Policy Circuit: AI Action Validator
// Φ_c = 1 — closed circuit, no undefined behavior

circuit ai_action_validator {
  // Input domains — what the AI agent sends
  input action_type : Enum["read", "write", "delete", "execute"]
  input target_path : String[1..256]
  input confidence  : Float64[0.0 .. 1.0]

  // Policy constraints
  assert confidence >= 0.85
    | reject("Low confidence action blocked")

  assert action_type != "delete" || confidence >= 0.99
    | reject("Delete requires near-certain confidence")

  assert !starts_with(target_path, "/system")
    | reject("System paths are off-limits")

  assert !starts_with(target_path, "/credentials")
    | reject("Credential access denied")

  // Output: validated action
  output validated_action : {
    action: action_type,
    path:   target_path,
    conf:   confidence,
    stamp:  certification_hash()
  }
}`}</CopyableCode>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Every input is domain-bounded. Every output carries a certification hash.{" "}
              <PhiC /> = 1 — the circuit is mathematically closed.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              No formal standard exists — BRIK64 <em>is</em> the standard
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              The AI safety industry talks about alignment. BRIK64 delivers verification.
              Policy circuits are an enforceable, circuit-based framework for
              constraining AI-generated code.
            </p>
            <ul className="mx-auto mt-8 max-w-2xl space-y-3">
              {standards.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00b8d4]" />
                  <span className="text-sm text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Start building &mdash; AI software
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Connect your AI agent to BRIK64. Every action verified. Every output certified.
              Every guardrail mathematically enforced.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Connect your AI agent <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Read the docs <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
