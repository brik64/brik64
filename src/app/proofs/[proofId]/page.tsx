import Link from "next/link";

import { BrikProofBadge } from "@/components/BrikProofBadge";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type ProofPageProps = {
  params: Promise<{ proofId: string }>;
};

const publicProof = {
  proof_id: "brik_proof_public_pcd_valid_01",
  visibility: "PUBLIC" as const,
  artifact_type: "PCD" as const,
  status: "VALID" as const,
  evidence_level: 3,
  engine: "L6+",
  scope: {
    repo: "example/oss-project",
    pull_request: "https://github.com/example/oss-project/pull/42",
    github: {
      repository: "example/oss-project",
      repository_url: "https://github.com/example/oss-project",
      pull_request_url: "https://github.com/example/oss-project/pull/42",
      pull_request_number: 42,
      branch: "codex/status-normalization",
      commit_sha: "abc1234",
      committed_at: "2026-05-10T00:00:00Z",
      opened_at: "2026-05-10T00:10:00Z",
    },
    files: ["src/status.ts"],
    symbols: ["normalizeStatus"],
  },
  logic: {
    summary: "Normalize external status values into a bounded internal state.",
    pcd_ref: "sha256:1111111111111111111111111111111111111111111111111111111111111111",
    symbols: ["normalizeStatus"],
  },
  bounds: [{ name: "status", kind: "enum", allowed: ["open", "closed", "unknown"] }],
  issued_by: {
    user_id: "github:carlosjperez",
    display_name: "Carlos J. Pérez",
    github: "carlosjperez",
    orcid: "0009-0002-7119-1812",
  },
  claims: ["bounded transition logic matched generated regression tests"],
  non_claims: [
    "does not certify full repository correctness",
    "does not certify deployment or security posture",
    "does not certify future changes",
  ],
  hashes: {
    submitted_patch_sha256: "sha256:3333333333333333333333333333333333333333333333333333333333333333",
    certificate_sha256: "sha256:5555555555555555555555555555555555555555555555555555555555555555",
  },
};

export function generateStaticParams() {
  return [{ proofId: publicProof.proof_id }];
}

export async function generateMetadata({ params }: ProofPageProps) {
  const { proofId } = await params;
  return {
    title: `BRIK64 Proof ${proofId}`,
    description: "Bounded BRIK64 proof certificate with explicit public/private visibility and non-claims.",
  };
}

export default async function ProofPage({ params }: ProofPageProps) {
  const { proofId } = await params;
  const proof = proofId === publicProof.proof_id ? publicProof : {
    ...publicProof,
    proof_id: proofId,
    status: "UNVERIFIABLE" as const,
    artifact_type: "PROOF" as const,
    claims: ["proof record is not currently verifiable from the public fixture registry"],
    hashes: {},
  };
  const proofUrl = `https://brik64.dev/proofs/${proof.proof_id}`;
  const badgeMarkdown = `[![BRIK64 Proof](https://brik64.dev/api/proofs/${proof.proof_id}/badge.svg)](${proofUrl})`;

  return (
    <>
      <Navbar />
      <main className="bg-background">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">BRIK64 Proof</p>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  Bounded proof certificate.
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  This proof covers only the declared bounded scope. It does not certify the full repository,
                  deployment, security posture, or future changes.
                </p>
              </div>
              <BrikProofBadge
                artifactType={proof.artifact_type}
                status={proof.status}
                visibility={proof.visibility}
                href={proofUrl}
              />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-6 py-12 md:grid-cols-2 lg:px-10">
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-xl font-semibold">Scope</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div><dt className="text-muted-foreground">Proof ID</dt><dd className="font-mono text-xs">{proof.proof_id}</dd></div>
              <div><dt className="text-muted-foreground">Repository</dt><dd>{proof.scope.repo}</dd></div>
              <div><dt className="text-muted-foreground">PR</dt><dd>{proof.scope.github.pull_request_url}</dd></div>
              <div><dt className="text-muted-foreground">Branch</dt><dd>{proof.scope.github.branch}</dd></div>
              <div><dt className="text-muted-foreground">Commit</dt><dd className="font-mono text-xs">{proof.scope.github.commit_sha}</dd></div>
              <div><dt className="text-muted-foreground">PR opened</dt><dd>{proof.scope.github.opened_at}</dd></div>
              <div><dt className="text-muted-foreground">Files</dt><dd>{proof.scope.files.join(", ")}</dd></div>
              <div><dt className="text-muted-foreground">Symbols</dt><dd>{proof.scope.symbols.join(", ")}</dd></div>
              <div><dt className="text-muted-foreground">Evidence level</dt><dd>Level {proof.evidence_level}</dd></div>
              <div><dt className="text-muted-foreground">Issued by</dt><dd>{proof.issued_by.display_name}</dd></div>
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-xl font-semibold">Logic and bounds</h2>
            <p className="mt-4 text-sm text-muted-foreground">{proof.logic.summary}</p>
            <div className="mt-4 rounded-lg border border-border bg-muted p-3 text-xs text-muted-foreground">
              {proof.bounds.map((bound) => (
                <p key={bound.name}>
                  {bound.name}: {bound.kind}
                  {"allowed" in bound && bound.allowed ? ` [${bound.allowed.join(", ")}]` : ""}
                </p>
              ))}
            </div>
            <h2 className="mt-6 text-xl font-semibold">Hashes</h2>
            <dl className="mt-4 space-y-2 text-xs text-muted-foreground">
              {Object.entries(proof.hashes).map(([name, value]) => (
                <div key={name}>
                  <dt>{name}</dt>
                  <dd className="break-all font-mono">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 md:col-span-2">
            <h2 className="text-xl font-semibold">Claims</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {proof.claims.map((claim) => <li key={claim}>- {claim}</li>)}
            </ul>
            <h2 className="mt-6 text-xl font-semibold">Non-claims</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {proof.non_claims.map((claim) => <li key={claim}>- {claim}</li>)}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10">
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-xl font-semibold">PR provenance snippet</h2>
            <p className="mt-3 text-sm text-muted-foreground">Submitted code requires no BRIK64 dependency.</p>
            <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 text-xs text-muted-foreground">
              <code>{`Optional provenance: this bounded logic change was prepared with BRIK64-assisted verification.
Proof: ${proofUrl}

${badgeMarkdown}`}</code>
            </pre>
            <Link className="mt-5 inline-flex rounded-md border px-3 py-2 text-sm font-medium" href="/proof-notes">
              Read proof note boundaries
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
