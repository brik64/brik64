import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { CopyableCode } from "@/components/CopyableCode";
import { Shield, Bot, Lock, Zap, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "AI & Machine Learning — BRIK64 Industries",
  description:
    "AI generates millions of lines of code daily. None of it is verified. BRIK64 policy circuits verify AI-generated code before execution — mathematically, not statistically.",
};

const useCases = [
  {
    icon: Shield,
    title: "Policy Circuits as AI Guardrails",
    description:
      "Tell your AI what to build. The compiler proves it's correct. The error becomes the next prompt. Repeat until certified. This is not alignment training — this is a mathematical wall that no hallucination can cross.",
  },
  {
    icon: Bot,
    title: "Verified Code Generation",
    description:
      "Every function your AI generates gets lifted to PCD and certified. GPT-4, Claude, Gemini, Llama — it doesn't matter. The verification is in the compiler, not the model. Works with any LLM, today and tomorrow.",
  },
  {
    icon: Lock,
    title: "Prompt Injection Defense",
    description:
      "Malicious prompts can hijack AI agents into producing backdoored code that passes every test. BRIK64 doesn't test — it proves. A backdoor that violates domain constraints cannot compile. Period.",
  },
  {
    icon: Zap,
    title: "The Vibe Coding Problem",
    description:
      "92% of developers now use AI to write code. Who reviews it? Not humans — they rubber-stamp AI output in 3 seconds. BRIK64 reviews every line mathematically, in milliseconds, with zero fatigue.",
  },
];

const standards = [
  "NIST AI RMF — verification evidence for AI risk management frameworks",
  "EU AI Act — auditable proof that AI-generated code meets declared constraints",
  "SOC 2 — complete audit trail for every AI-generated function",
  "ISO/IEC 42001 — AI management system evidence generation",
  "BRIK64 Policy Circuits — the first enforceable standard for AI code safety",
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
              AI generates millions of lines of code daily.{" "}
              <span className="text-[#00b8d4]">None of it is verified. Until now.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Every day, AI writes more code than every human developer combined. And not a single line
              carries a mathematical proof of correctness. BRIK64 changes that — with policy circuits
              that verify AI output before it ever executes.
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
              The alignment problem isn't in the model. It's in the code.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "AI hallucinations in code",
                  desc: "LLMs generate code that looks correct, compiles correctly, and passes tests — but implements the wrong algorithm. GitHub Copilot alone produces 46% of all new code. A 2024 Stanford study found that developers using AI assistants wrote significantly more security vulnerabilities. The bug is invisible because it's fluent.",
                },
                {
                  title: "Prompt injection attacks",
                  desc: "A single malicious instruction hidden in a codebase comment can hijack your AI agent into producing backdoored code. The output passes every test because the tests were written by the same compromised agent. This isn't theoretical — it's happening today in production.",
                },
                {
                  title: "The circular verification trap",
                  desc: "AI writes code. AI writes tests for that code. AI reviews that code. At no point does any entity with ground truth enter the loop. You're asking the same model that hallucinated the bug to verify it doesn't exist. That's not verification — that's confirmation bias at scale.",
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
              The verification is in the compiler, not the model
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
              AI action validator — the wall no hallucination can cross
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This policy circuit defines exactly what an AI agent is allowed to do. Not what it
              should do, not what it's been trained to do — what it mathematically can do. Every
              action outside these bounds is rejected before execution, not after damage.
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
              <PhiC /> = 1 — the circuit is mathematically closed. An AI that tries to delete system
              files with 80% confidence doesn't get an error message — it gets a compile-time impossibility.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The AI safety industry talks about alignment. We ship verification.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              RLHF teaches AI to want to do right. Policy circuits prevent it from doing wrong.
              Education fails. Mathematics does not. BRIK64 generates enforceable, auditable
              proof for every framework that matters.
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
              Your AI writes the code. BRIK64 proves it&rsquo;s correct.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Connect any LLM. Every action verified. Every output certified.
              Every guardrail mathematically enforced. The model changes. The proof doesn't.
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
