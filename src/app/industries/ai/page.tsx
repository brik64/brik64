import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { CopyableCode } from "@/components/CopyableCode";
import { Shield, Bot, Lock, Zap, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";

export const metadata = {
  title: "AI & Machine Learning — BRIK64 Industries",
  description:
    "RLHF teaches AI to want to do right. BRIK64 prevents it from doing wrong. Policy circuits as mathematical guardrails for AI-generated code.",
};

const useCases = [
  {
    icon: Shield,
    title: "Policy Circuits as Guardrails",
    description:
      "Define hard mathematical boundaries for what AI agents can do. Not alignment — constraint. Every action passes through a verified circuit before execution. File deletion, API calls, database writes — each route guarded by a domain-constrained policy circuit. The agent cannot bypass it. Physics does not negotiate.",
  },
  {
    icon: Bot,
    title: "MCP Integration",
    description:
      "Connect AI agents to the BRIK64 registry via Model Context Protocol. Your agent queries certified circuits before generating new code. Two tools: certify() and query(). The agent writes PCD. The compiler verifies it. If Φc ≠ 1, the error message becomes the next prompt. Loop until certified.",
  },
  {
    icon: Lock,
    title: "AI Agent Certification",
    description:
      "70% of new code is AI-generated. Who verifies it? Every function an AI produces can be lifted to PCD and certified. If the proof fails, the code doesn't ship. No exceptions. No overrides. The developer reviews certified functions, not AI guesses. That is a different job.",
  },
  {
    icon: Zap,
    title: "Vibe Coding Safety Net",
    description:
      "AI writes fast. Humans approve fast. Nobody verifies. BRIK64 catches what code review misses — mathematically, not statistically. The Lifter reads 10 languages and converts them to certified PCD. Your existing AI-generated codebase can be certified retroactively. Every function. Today.",
  },
];

const standards = [
  "EU AI Act (2024) — High-risk AI systems require documentation of testing and human oversight. BRIK64 policy circuits provide the mathematical oversight layer.",
  "NIST AI RMF — Risk management framework for AI systems. Policy circuits enforce risk boundaries by construction, not by policy.",
  "SOC2 Processing Integrity — Every AI-generated function certified, every output hashed, every change tracked. Audit trail automatic.",
  "ISO/IEC 42001 — AI Management System Standard. BRIK64 provides the technical verification layer that ISO 42001 requires.",
  "No AI code safety standards exist yet — BRIK64 policy circuits are the standard the industry will converge on.",
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
              <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                AI &amp; Machine Learning
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                RLHF teaches AI to{" "}
                <span className="text-teal">want to do right. BRIK64 prevents it from doing wrong.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                70% of new code is now AI-generated. Not a single line carries a mathematical
                proof of correctness. The AI guesses. The human rubber-stamps. Nobody verifies.
                That is not a workflow. That is a liability accumulating at the speed of inference.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
                >
                  Certify AI-generated code <ArrowRight className="h-4 w-4" />
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
            </div>
          </section>

          <div className="mx-auto max-w-7xl border-x border-border">
            {/* ── The Challenge ── */}
            <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                The Challenge
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                AI writes faster than humans can verify
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Scale breaks review",
                    desc: "GitHub Copilot generates millions of lines per day. A code reviewer can meaningfully check 200 lines per hour. The math doesn't work. You can hire more reviewers or you can change the math. BRIK64 changes the math.",
                  },
                  {
                    title: "Alignment is not enough",
                    desc: "RLHF makes AI systems prefer correct behavior. It does not make incorrect behavior impossible. An aligned AI can still generate a buffer overflow, a SQL injection, an off-by-one error in a financial calculation. Preference is not proof.",
                  },
                  {
                    title: "The EU AI Act is here",
                    desc: "High-risk AI applications under the EU AI Act require documented testing, human oversight, and risk management systems. 'The model said it was correct' is not a compliance argument. Mathematical proof is.",
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
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                How BRIK64 Helps
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The compiler verifies what the model cannot guarantee
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {useCases.map((uc) => (
                  <div key={uc.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-teal/10">
                      <uc.icon className="h-6 w-6 text-teal" />
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
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                Policy Circuit Example
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                An AI agent that cannot exceed its authorization
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                This is not a prompt. This is a policy circuit. File access is bounded to
                a project directory. API calls are rate-limited by construction. Database writes
                require explicit authorization tokens. The AI agent passes every proposed
                action through this circuit before execution. No action outside these
                bounds can proceed. The circuit does not negotiate.
              </p>
              <CopyableCode title="ai_agent_policy.pcd">{`// AI Agent Policy Circuit — Authorization Bounds
// Φc = 1 — every agent action mathematically authorized

circuit ai_agent_policy {
  // Action classification
  input action_type   : Enum["read", "write", "delete", "api_call", "exec"]
  input resource_path : String[1 .. 512]
  input api_endpoint  : String[0 .. 256]
  input auth_token    : String[32 .. 128]

  // Rate limiting domains
  input calls_per_min : Int64[0 .. 1000]
  input calls_today   : Int64[0 .. 100000]

  // Authorization constraints
  assert action_type != "delete" || has_delete_permission(auth_token)
    | block("Delete operations require explicit authorization")

  assert action_type != "exec" || is_sandboxed_environment()
    | block("Code execution only in verified sandbox")

  // Path constraints — agent cannot escape project root
  assert resource_path starts_with(project_root())
    | block("Access outside project directory denied")

  // Rate limiting — enforce by construction
  assert calls_per_min <= 60
    | throttle("Rate limit: 60 API calls per minute")

  assert calls_today <= 10000
    | block("Daily API quota exceeded")

  // API whitelist
  assert api_endpoint in approved_endpoints()
    | block("API endpoint not in approved list")

  output authorization : {
    granted:    true,
    action:     action_type,
    resource:   resource_path,
    timestamp:  current_time(),
    audit_hash: certification_hash()
  }
}`}</CopyableCode>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
                Every action type bounded. Every path constrained. Every API call rate-limited.{" "}
                <PhiC /> = 1 — the AI agent cannot exceed its authorization. Not by design. By construction.
              </p>
            </section>

            {/* ── Standards ── */}
            <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                Compliance &amp; Standards
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The regulatory framework for AI is converging on proof
              </h2>
              <ul className="mx-auto mt-8 max-w-2xl space-y-3">
                {standards.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-sm text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── CTA ── */}
            <section className="bg-background px-6 py-24 text-center lg:px-16">
              <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                AI writes the code. BRIK64 proves it&rsquo;s correct.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
                Every AI-generated function certified. Every agent action authorized.
                Every policy circuit verified. The model does not need to be trustworthy.
                The compiler is. That is the difference between alignment and proof.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
                >
                  Certify AI-generated code <ArrowRight className="h-4 w-4" />
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
