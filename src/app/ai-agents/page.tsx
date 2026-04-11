import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GitBranch,
  MessageCircle,
  Newspaper,
  Shield,
  Workflow,
} from "lucide-react";

import { CopyableCode } from "@/components/CopyableCode";
import { Footer } from "@/components/Footer";
import { HeroWireframe } from "@/components/HeroWireframe";
import { Navbar } from "@/components/Navbar";
import { PhiC } from "@/components/PhiC";

export const metadata = {
  title: "AI Agents — BRIK64",
  description:
    "AI agent integration guide with setup matrix, policy circuits, diagnostics loop, and explicit non-trust-by-default boundaries.",
};

const agents = [
  {
    name: "Claude Code",
    company: "Anthropic",
    command: 'claude "read the brik64-pcd-system skill and lift my auth.js to PCD"',
    prompt: "Lift my authentication module to PCD and emit review-ready output.",
  },
  {
    name: "Codex",
    company: "OpenAI",
    command: 'codex --skill brik64-pcd-system "lift this function to PCD"',
    prompt: "Lift this function to a bounded PCD blueprint and show diagnostics.",
  },
  {
    name: "Gemini CLI",
    company: "Google",
    command: 'gemini "using the brik64 skill, certify my utils.py"',
    prompt: "Certify my Python utility functions with bounded domain checks.",
  },
  {
    name: "Grok",
    company: "xAI",
    command: 'grok --context https://brik64.com/ai-agents "lift my code to PCD"',
    prompt: "Use BRIK64 context to lift the computational core and keep the boundary explicit.",
  },
  {
    name: "OpenCode",
    company: "Open Source",
    command: 'opencode --skill brik64-pcd-system "export my PCD to Rust and Python"',
    prompt: "Emit target outputs from one normalized bounded blueprint.",
  },
] as const;

const workflowSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Generate candidate PCD, policy logic, or bounded lift output from source or prompts.",
  },
  {
    step: "02",
    title: "Check",
    description:
      "Run policy circuits and compiler validation outside the model before the branch can proceed.",
  },
  {
    step: "03",
    title: "Diagnose",
    description:
      "Use structured diagnostics to repair the branch instead of guessing which hidden assumption failed.",
  },
  {
    step: "04",
    title: "Execute / publish",
    description:
      "Only accepted branches move into CLI, platform, registry, or enterprise workflow.",
  },
] as const;

const community = [
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Operator support, troubleshooting, and circuit-sharing discussions.",
    href: "https://discord.gg/brik64",
    external: true,
  },
  {
    icon: GitBranch,
    title: "GitHub",
    description: "Source, issues, skills, and contribution paths.",
    href: "https://github.com/brik64",
    external: true,
  },
  {
    icon: BookOpen,
    title: "Docs",
    description: "Reference material for CLI, PCD, and verification workflows.",
    href: "https://docs.brik64.dev",
    external: true,
  },
  {
    icon: Newspaper,
    title: "AI safety use case",
    description: "Long-form thesis on where external verification enters the AI workflow.",
    href: "/use-cases/ai-safety",
    external: false,
  },
] as const;

const referencePoints = [
  "PCD — Printed Circuit Description, the reviewable blueprint layer.",
  "Monomers — bounded operations composed into explicit circuits.",
  "EVA algebra — sequential, parallel, and conditional composition rules.",
  "policy circuits — machine-readable gates that stay external to model weights.",
  "structured diagnostics — explicit rejection reasons for repair loops.",
] as const;

const assessment = {
  value: [
    "Treat agent output as candidate logic, not as final truth.",
    "Keep verification outside the model so the approval path remains inspectable.",
    "Use the same CLI-to-platform path for accepted branches that human-authored work uses.",
    "Carry policy, diagnostics, and publication state forward as blueprint and package state.",
  ],
  limitations: [
    "No trust by default: the model is not the proof source.",
    "Full closure applies only to the modeled circuit and declared domains.",
    "Runtime, infrastructure, and organizational controls remain outside the proof object.",
    "BPU hardware remains roadmap work, not current agent infrastructure.",
  ],
} as const;

export default function AIAgentsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 bg-background">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-teal/[0.10] via-background to-background">
            <HeroWireframe />
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
              <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                AI Agents
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                AI can produce candidate logic.{" "}
                <span className="text-teal">The formal layer decides what can be trusted.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                BRIK-64 does not ask you to trust the model. It gives agent output a formal language, a canonical blueprint,
                and an external verification loop before anything is executed or published.
              </p>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Workflow</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                    discover → check → execute
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Candidate output moves through a visible operator loop before it is allowed to act.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Control point</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">policy circuits</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Approval logic remains machine-readable and external to the model weights.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Boundary</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">No trust by default</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Verification stays external to the model and visible to the engineering team.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
            <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">How it works</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {workflowSteps.map((item) => (
                <article key={item.step} className="border border-border bg-muted/10 p-6 text-center">
                  <div className="text-3xl font-bold text-teal">{item.step}</div>
                  <h3 className="mt-3 text-sm font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
            <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">Agent setup matrix</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              Recover the actual operator path: one command, one prompt shape, one explicit blueprint and review loop.
            </p>
            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {agents.map((agent) => (
                <article key={agent.name} className="border border-border bg-muted/10 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold">{agent.name}</h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{agent.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                      <Workflow className="h-3.5 w-3.5" /> External checks required
                    </span>
                  </div>
                  <pre className="mt-4 overflow-x-auto rounded-md bg-[#0a0e14] px-4 py-3 text-xs text-gray-300">
                    <code>{agent.command}</code>
                  </pre>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Prompt example: “{agent.prompt}”
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
            <div className="mx-auto max-w-4xl rounded-3xl border border-teal/30 bg-teal/[0.04] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-teal">Machine-readable reference</p>
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Core concepts</h3>
                <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                  {referencePoints.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">PCD syntax example</h3>
                <div className="mt-2">
                  <CopyableCode>{`circuit add_two(x: i64, y: i64) -> i64 {
  result = ADD(x, y);
  return result;
}
// Review state is checked externally under declared domains`}</CopyableCode>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">How to lift code</h3>
                <ol className="mt-2 list-inside list-decimal space-y-1.5 text-xs text-muted-foreground">
                  <li>Install the relevant skill for the agent.</li>
                  <li>Point the agent at a file, directory, or repository.</li>
                  <li>Generate bounded candidate blueprints or policy logic.</li>
                  <li>Run compiler checks and inspect structured diagnostics.</li>
                  <li>Publish accepted branches through CLI and platform workflow.</li>
                </ol>
              </div>
              <div className="mt-6 rounded-2xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Boundary note</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <PhiC /> = 1 and related verification states apply to the modeled circuit under declared domains.
                  They do not make the underlying model, runtime, or organization trustworthy by default.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
            <div className="mx-auto max-w-4xl rounded-3xl border border-teal/30 bg-teal/[0.04] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-teal">Platform assessment brief</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">What this page can responsibly claim</h3>
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Value propositions</h4>
                <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                  {assessment.value.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Honest limitations</h4>
                <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                  {assessment.limitations.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
            <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">Community and reference paths</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {community.map((item) => {
                const body = (
                  <>
                    <item.icon className="mb-4 h-6 w-6 text-teal" />
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </>
                );

                return item.external ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border bg-muted/10 p-6 transition-colors hover:border-teal/40 hover:bg-teal/[0.03]"
                  >
                    {body}
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="border border-border bg-muted/10 p-6 transition-colors hover:border-teal/40 hover:bg-teal/[0.03]"
                  >
                    {body}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-20 text-center md:px-12 lg:px-18">
            <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
              Start with the operator loop, not with model theater.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Install the CLI, inspect the AI safety workflow, or open the docs that define the current integration boundary.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/use-cases/ai-safety"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
              >
                Review AI safety workflow
              </Link>
              <Link
                href="/cli"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Install CLI <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Open docs <Shield className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
