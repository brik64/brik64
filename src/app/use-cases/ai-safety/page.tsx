import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Shield, AlertTriangle, Brain, Cpu, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "AI Safety: Guardrails That Actually Work — BRIK64",
  description:
    "Policy circuits that verify before execution. Not alignment training — algebraic verification. External to the model. Mathematical constraints no prompt injection can bypass.",
};

const painPoints = [
  {
    title: "Every AI safety system today is a suggestion",
    desc: "RLHF. Constitutional AI. System prompts. Red-teaming. Guardrails. Every single approach works the same way: it asks the model to behave. It trains the model to want to be safe. And every single one can be bypassed. Jailbroken with a clever prompt. Fine-tuned away with a weekend of compute. Ignored entirely by open-weight variants. There are 400 million people using AI tools right now. The safety layer protecting them is a polite request embedded in a probability distribution. That is not engineering. That is hope.",
  },
  {
    title: "AI-generated code is the fastest-growing attack surface in history",
    desc: "GitHub Copilot generates 46% of all code in enabled repositories. Amazon CodeWhisperer, Cursor, Cody — every enterprise developer now has an AI writing production code. None of it is verified. Not one line. The AI produces code that compiles, passes the tests you wrote, reads like a senior engineer wrote it — and carries zero mathematical proof of correctness. Every Fortune 500 company using AI-assisted development is deploying unverified code to production. Every single day. The attack surface is not the AI itself. It is the code the AI writes.",
  },
  {
    title: "There is no standard. There is no framework. There is nothing.",
    desc: "Ask any CISO: 'How do you verify AI-generated code before it reaches production?' The answer is code review. A human reads what the machine wrote. In 2026. At scale. With AI generating millions of lines per day across your organization. There is no ISO standard for certifying AI output. No NIST framework for mathematical verification of generated code. No tool that produces a formal certificate. The industry responsible for the most powerful technology ever created has exactly zero infrastructure for proving it works correctly. The first company to solve this wins the entire market.",
  },
];

const steps = [
  {
    step: "01",
    title: "Define the mathematical boundaries — policy circuits",
    desc: "You write constraints as PCD programs. Not rules. Not filters. Mathematics. domain confidence: Range[0.0, 1.0]. domain action_risk: Range[0, 10]. domain token_count: Range[0, 4096]. Each policy circuit defines a closed algebraic space. If the AI's output falls inside the space — allowed. If it falls outside — blocked. Not by a content filter that can be tricked. Not by a classifier that can be fooled. By algebra. You cannot jailbreak algebra. You cannot prompt-inject a theorem.",
  },
  {
    step: "02",
    title: "The AI generates. The compiler judges. Before execution.",
    desc: "The AI agent writes code or takes an action. BRIK64 lifts it to PCD and runs circuit closure analysis in milliseconds. If every input is consumed, every output is produced, every domain constraint is satisfied — the circuit closes. The code is certified. If not, it is rejected with a precise diagnostic telling the AI exactly what failed and why. The AI gets the error as its next prompt and iterates. This happens before execution. Before deployment. Before any damage is possible. The AI never touches production until the math says yes.",
  },
  {
    step: "03",
    title: "MCP integration — works with every AI agent that exists",
    desc: "Two tools over Model Context Protocol: brik64.discover and brik64.execute. Any agent that speaks MCP connects in one function call. Claude, Codex, Gemini, Grok, Llama, Mistral, and every model that will ship next year. The guardrails are external to the model. They live outside the weights. They cannot be fine-tuned away. They cannot be prompt-injected. They cannot be removed by running an open-weight variant. The verification is architecturally independent of the AI. That is the entire point.",
  },
  {
    step: "04",
    title: "The BPU roadmap — when software guardrails become silicon law",
    desc: "Phase 1 is shipping now: compiler-level verification on every AI output. Phase 2 is the BRIK Processing Unit — 64 monomer operations etched in silicon, an EVA Router for composition, and a TCE Unit that physically prevents uncertified code from executing. A non-maskable hardware BLOCK signal. No driver can override it. No kernel can bypass it. No jailbreak can reach it. When the silicon says no, the instruction does not execute. Period. This is the trajectory: voluntary today, industry standard tomorrow, regulatory mandate after that. Like seatbelts. Like ABS. Like airbags. First they were optional. Then they were law.",
  },
];

const results = [
  {
    title: "The math is the trust — not the model, not the company, not the promise",
    desc: "No probabilistic alignment. No reward hacking. No hope-based safety. No 'we trained it to be helpful and harmless.' The circuit closes or it does not. The proof holds or it does not. There is no 'mostly safe.' There is no '95% aligned.' There is no 'we believe this model is safe based on our evaluations.' There is a binary mathematical property. One or zero. Closed or open. The math does not care what the model intended. It does not care what the training data contained. It only cares what the code does. And that is verifiable.",
  },
  {
    title: "Model-agnostic — works with every LLM today and every LLM that will ever exist",
    desc: "Claude, GPT, Gemini, Grok, Llama, Mistral, Qwen, DeepSeek, and every model that will launch next quarter. The guardrails are external to the architecture. They verify outputs, not intentions. They do not depend on RLHF holding. They do not depend on safety training persisting through fine-tuning. When a better model ships, the policy circuits do not change. When an open-weight model strips safety training, the policy circuits still hold. When a model you have never heard of writes code for your production system, the algebraic verification is identical. The safety is permanent because it is mathematical.",
  },
  {
    title: "From compiler verification today to hardware enforcement tomorrow",
    desc: "Today: every AI output runs through the compiler's closure analysis. Uncertified code is rejected with a diagnostic. Tomorrow: the BPU coprocessor enforces policy circuits in silicon. A hardware BLOCK signal that no software can override. RLHF teaches AI to want to do right. The BPU prevents it from doing wrong. One is education. The other is physics. Education fails every day — students cheat, employees cut corners, models get jailbroken. Physics does not fail. The speed of light does not have a jailbreak. Neither will the BPU.",
  },
];

export default function AISafetyUseCasePage() {
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
              Use Case
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Safety:{" "}
              <span className="text-[#00b8d4]">Guardrails That Actually Work</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Policy circuits that verify before execution. Not alignment training — algebraic verification.
              No prompt injection bypasses algebra. No jailbreak rewrites a theorem. External to the model.
              Works with Claude, Codex, Gemini, Grok, and every LLM that will ever exist. Because the guardrails
              are not inside the AI. They are around it.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
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
              The entire AI safety industry is built on asking the model to behave
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
              Policy circuits — mathematical constraints that live outside the model
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
              A policy circuit that makes unsafe AI actions mathematically impossible
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This is a real policy circuit. Three domain constraints define the entire
              mathematical space of allowed AI actions. Confidence below 0.9 on a high-risk action? Blocked.
              Output exceeds 4096 tokens? Blocked. Not by a filter that can be tricked. Not by a classifier
              that can be fooled. By algebra. The circuit is closed — there is no path through it that produces
              an uncertified action. Not one. Not ever.
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
              What changes when math replaces hope
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
              Make your AI provably safe. Not hopefully safe.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Connect your AI agent via MCP. Define policy circuits. Every action verified before execution.
              Every output certified with an immutable hash. Every guardrail enforced by algebra, not by
              asking the model to behave. This is not incremental improvement. This is a category change.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
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
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
