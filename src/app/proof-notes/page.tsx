import Link from "next/link";
import { CheckCircle2, ExternalLink, FileCheck2, ShieldAlert } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Proof Notes for AI-generated code - BRIK64",
  description:
    "BRIK64 Proof Notes provide bounded provenance for agent-assisted code without claiming full repository correctness.",
};

const verifierUrl = "https://brik64.dev/proofs/brik_proof_public_pcd_valid_01";

const coverage = [
  "bounded logic scope",
  "declared input domain",
  "hashes for model, patch, fixtures, and certificate",
  "evidence level reached",
  "claims and non-claims",
] as const;

const nonClaims = [
  "full repository correctness",
  "deployment or runtime security posture",
  "future changes after the reviewed patch",
  "a replacement for maintainer review",
] as const;

export default function ProofNotesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">BRIK64 Proof Notes</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                Bounded provenance for code generated or checked by agents.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                A Proof Note gives maintainers a compact link to scope, hashes, evidence level, and claim boundaries.
                It does not ask an open-source project to install BRIK64 or accept broad certification claims.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  href={verifierUrl}
                >
                  Open proof <ExternalLink className="h-4 w-4" />
                </Link>
                <Link className="rounded-md border px-4 py-2 text-sm font-medium" href="/ai-agents">
                  Agent workflow
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Example status</p>
                  <h2 className="mt-2 text-2xl font-semibold">VALID</h2>
                </div>
                <CheckCircle2 className="h-8 w-8 text-emerald-500" />
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="rounded-lg border bg-muted/30 p-3">
                  <p className="font-medium">Scope</p>
                  <p className="mt-1 text-muted-foreground">src/status.ts :: normalizeStatus</p>
                </div>
                <div className="rounded-lg border bg-muted/30 p-3">
                  <p className="font-medium">Claim</p>
                  <p className="mt-1 text-muted-foreground">
                    Deterministic behavior for declared input domain with fail-closed unknown-state handling.
                  </p>
                </div>
                <div className="rounded-lg border bg-muted/30 p-3">
                  <p className="font-medium">Boundary</p>
                  <p className="mt-1 text-muted-foreground">
                    Submitted code requires no BRIK64 dependency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2 lg:px-10">
          <article className="rounded-xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <FileCheck2 className="h-6 w-6 text-primary" />
              What a Proof Note covers
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {coverage.map((item) => <li key={item}>- {item}</li>)}
            </ul>
          </article>
          <article className="rounded-xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <ShieldAlert className="h-6 w-6 text-amber-500" />
              What it does not cover
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {nonClaims.map((item) => <li key={item}>- {item}</li>)}
            </ul>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold">Pull request snippet</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Use this only after the code and tests already stand on their own in the target repository.
            </p>
            <pre className="mt-5 overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
              <code>{`Optional provenance:
Optional provenance: this bounded logic change was prepared with BRIK64-assisted verification.
Proof: ${verifierUrl}
Submitted code requires no BRIK64 dependency.`}</code>
            </pre>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
