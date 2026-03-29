import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Shield, AlertTriangle, Brain, Cpu, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "AI Safety: Guardrails That Can't Be Bypassed — BRIK-64",
  description:
    "Policy circuits as mathematical guardrails for AI-generated code. Not alignment — verification. Works with Claude, Codex, Gemini, Grok.",
};

const painPoints = [
  {
    title: "AI generates code with no guarantees",
    desc: "Large language models produce code that compiles, passes tests, and looks correct — but has zero mathematical proof of correctness. You're trusting vibes, not verification.",
  },
  {
    title: "RLHF and Constitutional AI are bypassable",
    desc: "Current AI safety approaches are software guardrails trained into the model. They can be jailbroken, prompt-injected, or simply ignored by fine-tuned variants. Software guardrails are suggestions, not laws.",
  },
  {
    title: "No formal way to certify AI-generated code",
    desc: "There is no standard, no framework, and no tool that can take AI-generated code and produce a mathematical certificate of correctness. Until now.",
  },
];

const steps = [
  {
    step: "01",
    title: "Define Policy Circuits",
    desc: "Write domain constraints as PCD programs. Each circuit defines the mathematical boundaries of what an AI agent can produce.",
  },
  {
    step: "02",
    title: "AI generates, brikc certifies",
    desc: "The AI agent generates code. brikc lifts it to PCD and checks circuit closure. If \u03A6_c = 1, the code is certified. If not, it's rejected — before execution, not after damage.",
  },
  {
    step: "03",
    title: "MCP integration",
    desc: "Connect any AI agent via Model Context Protocol. The agent compiles and certifies in the same flow — Claude, Codex, Gemini, Grok, any MCP-compatible agent.",
  },
  {
    step: "04",
    title: "BPU roadmap: hardware enforcement",
    desc: "The BPU coprocessor physically blocks uncertified code from executing. Software guardrails become hardware laws. No jailbreak possible when the silicon says no.",
  },
];

const results = [
  {
    title: "The math is the trust",
    desc: "No probabilistic alignment. No hope-based safety. Circuit closure is a mathematical proof — it either holds or it doesn't.",
  },
  {
    title: "Works with Claude, Codex, Gemini, Grok",
    desc: "Any AI agent that speaks MCP can connect to BRIK-64. The guardrails are external to the model — they can't be trained away.",
  },
  {
    title: "From software guardrails to hardware enforcement",
    desc: "Today: compiler-level verification. Tomorrow: the BPU coprocessor enforces policy circuits in silicon. Unstoppable safety.",
  },
];

export default function AISafetyUseCasePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* ── Hero ── */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Use Case
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Safety:{" "}
              <span className="text-[#00b8d4]">Guardrails That Can&apos;t Be Bypassed</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              RLHF is a hope. Constitutional AI is a suggestion. Policy circuits are a mathematical proof.
              BRIK-64 gives AI-generated code guarantees that no prompt injection can break.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/industries/ai"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                AI Industry page <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border">
          {/* ── The Problem ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Problem
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI-generated code is unverified by default
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {painPoints.map((item) => (
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

          {/* ── The Solution ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Solution
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Policy circuits — mathematical guardrails for AI agents
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#00b8d4]/10">
                    <span className="text-sm font-bold text-[#00b8d4]">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal example */}
            <CopyableCode title="terminal">{`$ brikc lift ai_output.py --to pcd
✓ Lifted to ai_output.pcd (23 circuits extracted)

$ brikc check ai_output.pcd --policy ai_action_validator.pcd
✓ Policy circuit check: Φ_c = 1
✓ All 23 circuits pass domain constraints
✓ Certification hash: 0xa3f7...c291

$ brikc certify ai_output.pcd --emit badge
✓ Badge generated: ai_output.certified.json
✓ Verifiable at registry.brik64.dev/verify`}</CopyableCode>
          </section>

          {/* ── Real Example ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Real Example
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI action validator — constrain what agents can do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This policy circuit defines hard mathematical boundaries for AI agent actions.
              If the action falls outside the verified domain, the circuit rejects it — before
              execution, not after damage.
            </p>
            <CopyableCode title="ai_action_validator.pcd">{`// Policy Circuit: AI Action Validator
// Φ_c = 1 — closed circuit, no undefined behavior

PC ai_action_validator {
    domain confidence: Range [0.0, 1.0];
    domain token_count: Range [0, 4096];
    domain action_risk: Range [0, 10];

    fn validate(conf: Range[0.0,1.0], tokens: Range[0,4096], risk: Range[0,10]) {
        if (risk > 7 && conf < 0.9) { return 0; } // BLOCK high-risk low-confidence
        if (tokens > 4096) { return 0; }            // BLOCK oversized outputs
        return 1;                                     // ALLOW — certified safe
    }
}`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Every input is domain-bounded. Every output carries a certification hash.{" "}
              <PhiC /> = 1 — the circuit is mathematically closed. No jailbreak can bypass mathematics.
            </p>
          </section>

          {/* ── Results ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Results
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What you get
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {results.map((item) => (
                <div
                  key={item.title}
                  className="border border-border bg-white p-6"
                >
                  <CheckCircle2 className="mb-3 h-6 w-6 text-[#00b8d4]" />
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Start building verified AI software
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Connect your AI agent to BRIK-64. Every action verified. Every output certified.
              Every guardrail mathematically enforced.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
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
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
