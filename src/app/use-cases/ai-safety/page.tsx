import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Shield, AlertTriangle, Brain, Cpu, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "AI Safety: Guardrails Built from Math, Not Hope — BRIK64",
  description:
    "Policy circuits are mathematical constraints that no prompt injection can bypass. Not alignment training — algebraic verification. External to the model. Works with Claude, Codex, Gemini, Grok.",
};

const painPoints = [
  {
    title: "AI generates code that looks correct. That\u2019s the danger.",
    desc: "GPT-4, Claude, Gemini \u2014 they all produce code that compiles, passes the tests you wrote, and reads like a senior engineer wrote it. But \u2018looks correct\u2019 is not \u2018is correct.\u2019 There is zero mathematical proof behind any line of AI-generated code. You\u2019re deploying to production on vibes. Every company using Copilot right now is running unverified code in production. Every single one.",
  },
  {
    title: "RLHF is a prayer. Constitutional AI is a suggestion.",
    desc: "Every current AI safety approach works by training the model to \u2018want\u2019 to be safe. RLHF, Constitutional AI, system prompts \u2014 these are software guardrails embedded inside the model. They can be jailbroken with a clever prompt. They can be bypassed by fine-tuning. They can be ignored by open-weight variants. You\u2019re trusting the wolf to guard the sheep because you asked it nicely. Education fails. Math does not.",
  },
  {
    title: "There is no standard for certifying AI-generated code",
    desc: "Ask any enterprise: \u2018How do you verify AI-generated code?\u2019 The answer is code review. A human reads what the machine wrote and hopes they catch the bugs. There is no framework, no tool, no ISO standard for producing a mathematical certificate that AI output is correct. The industry is flying blind. The first company to solve this wins the entire market.",
  },
];

const steps = [
  {
    step: "01",
    title: "Define Policy Circuits \u2014 the mathematical boundaries",
    desc: "Write constraints as PCD programs. domain confidence: Range[0.0, 1.0]. domain action_risk: Range[0, 10]. domain token_count: Range[0, 4096]. Each policy circuit defines a closed mathematical space. If the AI\u2019s output falls inside the space, it\u2019s allowed. If it falls outside, it\u2019s blocked. Not by a filter. By algebra.",
  },
  {
    step: "02",
    title: "AI generates. The compiler judges.",
    desc: "The AI agent writes code. brikc lifts it to PCD and runs circuit closure analysis. If \u03A6_c = 1 \u2014 every input consumed, every output produced, every domain constraint satisfied \u2014 the code is certified. If not, it\u2019s rejected with a precise diagnostic. Before execution. Before deployment. Before damage. The AI gets the error message as its next prompt and tries again. Iterate until the math says yes.",
  },
  {
    step: "03",
    title: "MCP integration \u2014 works with every major AI agent",
    desc: "Two MCP tools: brik64.discover (search the registry) and brik64.execute (compile and certify). Any agent that speaks Model Context Protocol connects in one function call. Claude, Codex, Gemini, Grok, Llama, Mistral \u2014 the guardrails are external to the model. They can\u2019t be fine-tuned away. They can\u2019t be prompt-injected. The verification lives outside the AI.",
  },
  {
    step: "04",
    title: "BPU roadmap \u2014 when software guardrails become silicon laws",
    desc: "Phase 1 is now: compiler-level verification. Phase 2 is the BPU coprocessor \u2014 64 monomer units in silicon, an EVA Router, and a TCE Unit that physically blocks uncertified code from executing. A non-maskable hardware BLOCK signal. No driver override. No kernel bypass. No jailbreak. When the silicon says no, the code does not run. Like ABS for cars: today voluntary, tomorrow mandatory.",
  },
];

const results = [
  {
    title: "The math is the trust \u2014 not the model",
    desc: "No probabilistic alignment. No reward hacking. No hope-based safety. \u03A6_c = 1 is a binary mathematical property. The circuit is closed or it isn\u2019t. The proof holds or it doesn\u2019t. There is no \u2018mostly safe.\u2019 There is no \u201895% aligned.\u2019 The math doesn\u2019t care what the model intended. It only cares what the code does.",
  },
  {
    title: "Model-agnostic \u2014 works with every LLM, today and tomorrow",
    desc: "Claude, GPT, Gemini, Grok, Llama, Mistral, and every model that will exist next year. The guardrails are external to the model architecture. They verify outputs, not intentions. When a better model ships, the policy circuits don\u2019t change. When an open-weight model removes safety training, the policy circuits still hold. The verification is permanent.",
  },
  {
    title: "From compiler verification to hardware enforcement",
    desc: "Today: every AI output runs through the compiler\u2019s closure analysis. Uncertified code is rejected. Tomorrow: the BPU coprocessor enforces policy circuits in silicon \u2014 a hardware BLOCK signal that cannot be overridden by software. RLHF teaches AI to want to do right. The BPU prevents it from doing wrong. Education fails. Physics does not.",
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
              <span className="text-[#00b8d4]">Guardrails Built from Math, Not Hope</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              RLHF teaches AI to want to be safe. Policy circuits make unsafe output mathematically impossible.
              No prompt injection bypasses algebra. No jailbreak rewrites a theorem. External to the model. Works with Claude, Codex, Gemini, Grok, and every LLM that will ever exist.
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
              Every company using AI-generated code is flying blind
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
              Policy circuits \u2014 guardrails that live outside the model
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
              A policy circuit that constrains what any AI agent can do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This is a real policy circuit. Three domain constraints define the entire
              mathematical space of allowed AI actions. Confidence below 0.9 on a high-risk action? Blocked.
              Output exceeds 4096 tokens? Blocked. Not by a filter. By algebra. The circuit is closed \u2014 there is no path through it that produces an unsafe action.
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
              Connect your AI agent via MCP. Define policy circuits. Every action verified before execution. Every output certified with an immutable hash. Every guardrail enforced by algebra, not by asking the model to behave.
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
