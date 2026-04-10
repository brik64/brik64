import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "CI/CD Integration: Push Code. Get Mathematical Proof. — BRIK64",
  description:
    "Every PR mathematically certified. Block uncertified merges. Audit trail for SOC2, ISO, and every compliance framework that exists.",
};

const painPoints = [
  {
    title: "Your tests pass. Your code still breaks.",
    desc: "You have 10,000 tests. They all pass. Green across the board. You merge with confidence. And production breaks at 2 AM. Why? Because tests only verify the scenarios you imagined. The bug lives in the scenario you did not imagine. It always does. Testing is a net with holes — the fish that matters always slips through. Every production incident in the history of software happened in a codebase where the tests were passing. Every. Single. One.",
  },
  {
    title: "Code review does not scale. It never did.",
    desc: "Your senior engineers spend 30-40% of their time reviewing pull requests. They are tired. They are context-switching. They rubber-stamp on Friday afternoons. They miss the subtle logic error on line 847 because they are reviewing their fifth PR of the day. Code review is a human process with human failure modes — fatigue, distraction, boredom, deadline pressure. And now AI is generating code 10x faster than humans can review it. The bottleneck is not writing code anymore. The bottleneck is proving it works. And your process for proving it works is a person reading a diff.",
  },
  {
    title: "Your merge button lies to you",
    desc: "The green checkmark on your PR says 'All checks passed.' What it actually means is 'All tests we wrote passed for the inputs we chose.' There is no guarantee the PR does not introduce undefined behavior. No guarantee it does not overflow. No guarantee it does not break an invariant the tests do not cover. Your merge button is a confidence indicator, not a proof. And the gap between confidence and proof is where every production bug lives.",
  },
];

const steps = [
  {
    step: "01",
    title: "Connect your repo — one command, done",
    desc: "brikc connect installs a GitHub App on your repository. One click. Webhook configured automatically. Required status check registered. Works with GitHub, GitLab, and Bitbucket. No YAML to write. No pipeline to configure. No infrastructure to maintain. You connect it and it works. That is the entire setup.",
  },
  {
    step: "02",
    title: "Every push triggers mathematical certification — automatically",
    desc: "On every push, BRIK64 lifts changed files to PCD and runs circuit closure analysis. Every function. Every branch. Every domain constraint. Not sampling — exhaustive analysis. Not testing — proving. This runs in parallel with your existing tests. Your tests stay. BRIK64 adds the layer your tests cannot provide: mathematical proof that the code is correct for ALL inputs, not just the ones in your test suite.",
  },
  {
    step: "03",
    title: "Your PR gets a certification report — not a test result",
    desc: "The bot posts a certification comment directly on your pull request. Not 'tests pass.' Not 'coverage is 87%.' A mathematical verdict: circuits analyzed, domains verified, constraints satisfied, closure confirmed. If any circuit fails, you get a precise diagnostic — which function, which constraint, which input domain. Your developers do not debug. They read the proof failure and fix the exact issue.",
  },
  {
    step: "04",
    title: "Uncertified code cannot merge — the button is grayed out",
    desc: "Configure BRIK64 as a required status check. If certification fails, the merge button is physically disabled. Not a warning. Not a suggestion. The button does not work. No uncertified code reaches main. No manager overrides the proof. No deadline pressure bypasses the math. This is the first CI pipeline in history where 'all checks passed' actually means something.",
  },
];

const results = [
  {
    title: "Every pull request — mathematically certified",
    desc: "Not tested. Not reviewed. Certified. Every pull request that reaches your main branch carries a formal verification report. Your CI pipeline goes from 'tests pass and a human glanced at the diff' to 'mathematically proven correct for all possible inputs.' That is not an improvement. That is a different category of engineering.",
  },
  {
    title: "Uncertified merges are physically impossible",
    desc: "Required status check integration means the merge button is disabled until certification passes. Not a soft warning. Not a notification. The button does not function. No override. No exception. No 'ship it anyway, we will fix it Monday.' The math is the gatekeeper and the math does not negotiate.",
  },
  {
    title: "Audit trail that satisfies every compliance framework",
    desc: "Every certification generates a verifiable, immutable certificate with a unique hash. SOC2 auditors get machine-readable proof. ISO 27001 assessors get formal verification records. FDA reviewers get mathematical correctness certificates. DORA compliance officers get audit trails with cryptographic integrity. Every regulator who has ever asked 'how do you know this code is correct?' now gets an answer that is not 'we tested it.'",
  },
];

export default function CICDIntegrationUseCasePage() {
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
              Use Case
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              CI/CD Integration:{" "}
              <span className="text-teal">Push Code. Get Mathematical Proof. Automatically.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Tests check the cases you thought of. BRIK64 proves ALL cases. Every push triggers
              mathematical certification. Every PR gets a formal proof. Every uncertified merge is
              blocked. One command to connect. Zero configuration. Free.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/enterprise"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Enterprise page <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border">
          {/* ── The Problem ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
              The Problem
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your CI pipeline has a trust gap the size of a canyon
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item.title} className="border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── The Solution ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
              The Solution
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mathematical proof as a CI step — not a research project
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-teal/10">
                    <span className="text-sm font-bold text-teal">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal example */}
            <CopyableCode title="terminal">{`$ brikc connect github.com/your-org/your-repo
✓ GitHub App installed
✓ Webhook configured (push, pull_request)
✓ Required status check: brik64/certification

$ git push origin feature/new-payment-flow
# → BRIK64 automatically triggers:
#   1. Lift changed files to PCD
#   2. Run circuit closure analysis
#   3. Post certification comment on PR

# PR Comment:
# ┌──────────────────────────────────────────┐
# │ BRIK64 Certification                     │
# │ Φc = 1  ✓  CERTIFIED                    │
# │ 14 circuits analyzed, 14 certified        │
# │ Certificate: 0xe7f3...a291                │
# │ Safe to merge.                            │
# └──────────────────────────────────────────┘`}</CopyableCode>
          </section>

          {/* ── Real Example ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
              Real Example
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              GitHub Actions — one step changes everything
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Add BRIK64 certification to your existing GitHub Actions workflow. One step.
              It runs alongside your tests. It does not replace them — it adds the layer
              they cannot provide. If certification fails, the merge is blocked.
            </p>
            <CopyableCode title=".github/workflows/ci.yml">{`name: CI + Certification

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm test

  certify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: brik64/certify-action@v1
        with:
          token: \${{ secrets.BRIK64_TOKEN }}
          # That's it. One step.
          # Lifts changed files → PCD → certification
          # Posts result as PR comment
          # Fails the check if Φc ≠ 1`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              One GitHub Action step. Your entire CI pipeline now produces mathematical proofs, not just test results.{" "}
              <PhiC /> = 1 or the merge is blocked. That is the new standard.
            </p>
          </section>

          {/* ── Results ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
              Results
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What your pipeline becomes
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {results.map((item) => (
                <div key={item.title} className="border border-border bg-white p-6">
                  <CheckCircle2 className="mb-3 h-6 w-6 text-teal" />
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Push code. Get proof. Ship with certainty.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              One command to connect. Every PR certified. Every merge proven safe. Every audit satisfied.
              Your pipeline is about to produce something it has never produced before: mathematical certainty.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://docs.brik64.dev/ci-cd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                CI/CD Docs <ExternalLink className="h-4 w-4" />
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
