import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "CI/CD Integration: Certify Every Pull Request — BRIK-64",
  description:
    "Every PR mathematically certified. Block uncertified merges. Audit trail for compliance.",
};

const painPoints = [
  {
    title: "Tests pass but code still breaks in production",
    desc: "Your CI pipeline runs 10,000 tests. They all pass. You merge. Production breaks. Why? Because tests only verify the cases you thought of. The bug was in the case you didn't.",
  },
  {
    title: "Code review is manual and doesn't scale",
    desc: "Senior engineers spend 30% of their time reviewing PRs. They miss things. They get tired. They rubber-stamp on Fridays. Code review is a human process with human failure modes.",
  },
  {
    title: "No mathematical guarantee a PR is safe to merge",
    desc: "Your merge button says 'All checks passed.' It should say 'All tests we wrote passed.' There's no way to guarantee the PR won't introduce undefined behavior, overflow, or logic errors.",
  },
];

const steps = [
  {
    step: "01",
    title: "Connect your repo",
    desc: "brikc connect installs a GitHub App with one click. Webhook configured automatically. Works with GitHub, GitLab, and Bitbucket.",
  },
  {
    step: "02",
    title: "Every push triggers certification",
    desc: "On every push, brikc auto-lifts changed files to PCD and runs circuit closure analysis. No manual step. No configuration. It just works.",
  },
  {
    step: "03",
    title: "PR gets a certification comment",
    desc: "The bot posts a certification report on your PR: \u03A6_c = 1 (certified) or \u03A6_c \u2260 1 (failed) with detailed diagnostics on which circuits failed and why.",
  },
  {
    step: "04",
    title: "Block uncertified merges",
    desc: "Configure BRIK-64 as a required status check in GitHub. If certification fails, the merge button is blocked. No uncertified code reaches main. Ever.",
  },
];

const results = [
  {
    title: "Every PR mathematically certified",
    desc: "Not just tested. Certified. Every pull request gets a formal verification report. Your CI pipeline goes from 'tests pass' to 'mathematically proven.'",
  },
  {
    title: "Block uncertified merges",
    desc: "Required status check integration means the merge button is physically grayed out until certification passes. No overrides. No exceptions.",
  },
  {
    title: "Audit trail for compliance",
    desc: "Every certification generates a verifiable certificate. SOC2 auditors, ISO assessors, and regulators get machine-readable proof of code correctness.",
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
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Use Case
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              CI/CD Integration:{" "}
              <span className="text-[#00b8d4]">Certify Every Pull Request</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Tests tell you code works for known cases. BRIK-64 tells you code works for ALL cases.
              Add mathematical certification to your CI pipeline in one command.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
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
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Problem
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your CI pipeline has a trust gap
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
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Solution
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mathematical certification in your pipeline
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
            <CopyableCode title="terminal">{`$ brikc connect github.com/your-org/your-repo
✓ GitHub App installed
✓ Webhook configured (push, pull_request)
✓ Required status check: brik64/certification

$ git push origin feature/new-payment-flow
# → BRIK-64 automatically triggers:
#   1. Lift changed files to PCD
#   2. Run circuit closure analysis
#   3. Post certification comment on PR

# PR Comment:
# ┌──────────────────────────────────────────┐
# │ BRIK-64 Certification                     │
# │ Φ_c = 1  ✓  CERTIFIED                    │
# │ 14 circuits analyzed, 14 certified        │
# │ Certificate: 0xe7f3...a291                │
# │ Safe to merge.                            │
# └──────────────────────────────────────────┘`}</CopyableCode>
          </section>

          {/* ── Real Example ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Real Example
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              GitHub Actions workflow — one step
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Add BRIK-64 certification to your existing GitHub Actions workflow. One step.
              Runs alongside your tests. Blocks merge if certification fails.
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
          # Fails the check if Φ_c ≠ 1`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              One GitHub Action step. Your entire CI pipeline now produces mathematical proofs, not just test results.{" "}
              <PhiC /> = 1 or the merge is blocked.
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
                <div key={item.title} className="border border-border bg-white p-6">
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
              Certify every merge
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              One command to connect. Every PR certified. Every merge proven safe. Every audit satisfied.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
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
