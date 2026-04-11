"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { MonomerFamilyBoard } from "@/components/MonomerArtifacts";
import {
  ArtifactFrame,
  ArtifactHeader,
  CodeProofPanel,
  FlowNode,
  MetricTile,
  ProofBadge,
  StatusPill,
} from "@/components/HomeProofArtifacts";
import { BlueprintHubArtifact } from "@/components/HomeProofArtifacts.client";
import { EvidenceSurface, PageSectionHeader } from "@/components/PageArtifacts";
import {
  FileCode,
  ArrowRight,
  Shield,
  Layers,
  Terminal,
  BookOpen,
  Zap,
  Code,
  Braces,
  Split,
  GitBranch,
} from "lucide-react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ── Monomer families ── */

const coreFamilies = [
  { family: "Arithmetic", ops: "8 operations for integer math", proof: "Certified" },
  { family: "Logic", ops: "8 operations for bitwise logic", proof: "Certified" },
  { family: "Memory", ops: "8 operations for memory management", proof: "Certified" },
  { family: "Control", ops: "8 operations for control flow", proof: "Certified" },
  { family: "I/O", ops: "8 operations for input/output", proof: "Certified" },
  { family: "String", ops: "8 operations for string processing", proof: "Certified" },
  { family: "Crypto", ops: "8 operations for cryptography", proof: "Certified" },
  { family: "System", ops: "8 operations for system calls", proof: "Certified" },
];

const extendedFamilies = [
  { family: "Float64", ops: "8 operations for floating-point math" },
  { family: "Math", ops: "8 operations for transcendental functions" },
  { family: "Network", ops: "8 operations for networking" },
  { family: "Graphics", ops: "8 operations for graphics buffers" },
  { family: "Audio", ops: "8 operations for audio processing" },
  { family: "Filesystem", ops: "8 operations for filesystem access" },
  { family: "Concurrency", ops: "8 operations for parallel execution" },
  { family: "Interop", ops: "8 operations for foreign function interface" },
];

/* ── Code examples ── */

const codeExamples = [
  {
    label: "Hello World",
    code: `PC hello {
    let msg = "Hello, verified world!";
    let n = LEN(msg);
    WRITE(1, msg, n);
    OUTPUT 0;
}`,
  },
  {
    label: "Fibonacci",
    code: `PC fibonacci {
    fn fib(n) {
        if (n <= 1) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    }

    let result = fib(10);
    OUTPUT result;
}`,
  },
  {
    label: "Data Pipeline",
    code: `PC data_pipeline {
    let raw = READ(0);
    let trimmed = TRIM(raw);
    let upper = UPPER(trimmed);
    let hash = HASH(upper);
    WRITE(1, hash, LEN(hash));
    OUTPUT 0;
}`,
  },
  {
    label: "Interest Calc",
    code: `PC calculate_interest {
    let principal = 0;
    let rate = 0;
    let years = 0;
    let interest = principal * rate / 100;
    let total = principal + (interest * years);
    OUTPUT total;
}`,
  },
];

/* ── EVA operators ── */

const evaOps = [
  { symbol: "SEQ", name: "Sequential", desc: "Do A then B: output of A feeds into B. Pipeline composition." },
  { symbol: "PAR", name: "Parallel", desc: "Do A and B independently on the same input. Results as tuple." },
  { symbol: "COND", name: "Conditional", desc: "If predicate P holds, do A; otherwise do B. Both branches verified." },
];

const syntaxArtifacts = [
  {
    label: "Program shell",
    title: "Named circuit block",
    body: "Every program declares a single circuit boundary and a single terminal OUTPUT.",
    code: `PC circuit_name {\n    OUTPUT result;\n}`,
  },
  {
    label: "State model",
    title: "Immutable bindings",
    body: "PCD keeps SSA-style reassignment explicit so the compiler can trace every value path.",
    code: `let x = 42;\nlet name = "hello";\nlet flag = true;`,
  },
  {
    label: "Control constructs",
    title: "Functions, loops, closures",
    body: "Higher-level constructs remain available, but they still lower into explicit composition paths.",
    code: `fn add(a, b) { return a + b; }\nloop(10) as i {\n    let count = count + 1;\n}\nlet double = fn(n) { n * 2 };`,
  },
];

const domainCards = [
  { title: "No division by zero", desc: "Lower bounds exclude zero exactly where the circuit requires it." },
  { title: "No overflow drift", desc: "Bounded inputs keep outputs inside a known envelope before export." },
  { title: "No NaN / Infinity", desc: "Float domains remove degenerate values from the legal input set." },
  { title: "Deterministic closure", desc: "The same domain declaration closes the same circuit every time." },
];

const evaExample = `PC policy_gate {\n    let normalized = SEQ(parse_input, validate_domain);\n    let mirrored = PAR(score_risk, derive_trace);\n    let decision = COND(authorized, allow_action, block_action);\n    OUTPUT decision;\n}`;

/* ── Key properties ── */

const keyProps = [
  { icon: <FileCode className="h-5 w-5 text-teal" />, title: "Finite grammar", desc: "PCD stays intentionally small so humans, agents, and the compiler can reason about the same bounded format." },
  { icon: <Shield className="h-5 w-5 text-teal" />, title: "Reviewed operations", desc: "Every PCD program is built from a formally reviewed core plus explicit contract-bounded extensions." },
  { icon: <Zap className="h-5 w-5 text-teal" />, title: "Closure gate", desc: "If the blueprint does not close as a circuit (\u03a6_c \u2260 1), the compiler rejects it under the formal model." },
  { icon: <Layers className="h-5 w-5 text-teal" />, title: "Multi-target compiler", desc: "One blueprint can emit multiple targets while keeping the intermediate circuit representation explicit." },
  { icon: <Code className="h-5 w-5 text-teal" />, title: "Self-hosting consistency", desc: "The brikc compiler can compile itself and compare the resulting output for build-chain consistency." },
  { icon: <Terminal className="h-5 w-5 text-teal" />, title: "Agent-readable format", desc: "The grammar is small enough for machine-assisted authoring, while verification remains external to the authoring model." },
];

function SyntaxWorkbench({
  activeExample,
}: {
  activeExample: number;
}) {
  return (
    <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_1.15fr]">
      <ArtifactFrame className="space-y-5">
        <ArtifactHeader
          eyebrow="Syntax Workbench"
          title="A small grammar with explicit circuit boundaries."
          description="PCD is concise on purpose: the parser sees a finite language, and the human sees the same closure structure the compiler checks."
          status={<StatusPill tone="teal"><Braces className="h-3.5 w-3.5" />pcd syntax</StatusPill>}
        />
        <div className="grid gap-4">
          {syntaxArtifacts.map((artifact) => (
            <div key={artifact.label} className="rounded-[1.5rem] border border-border/80 bg-background/90 p-5 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{artifact.label}</p>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground">{artifact.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{artifact.body}</p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-border/70 bg-muted/25 px-4 py-3">
                <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">
                  <code>{artifact.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </ArtifactFrame>

      <CodeProofPanel
        eyebrow="Live example"
        title={codeExamples[activeExample].label}
        badge={<ProofBadge />}
        code={codeExamples[activeExample].code}
      />
    </div>
  );
}

function DomainSurface() {
  return (
    <ArtifactFrame className="mx-auto mt-8 max-w-5xl space-y-6">
      <ArtifactHeader
        eyebrow="Declared domains"
        title="Domains define the legal input envelope before evaluation starts."
        description="Types alone are not enough. PCD binds values to declared ranges so the compiler can reason about the whole circuit, not only local types."
        status={<ProofBadge />}
      />
      <div className="grid gap-4 md:grid-cols-3">
        <MetricTile label="Speed" value="0.0 .. 340.0" detail="Flight envelope stays explicit." />
        <MetricTile label="Altitude" value="0.0 .. 51000.0" detail="No unconstrained service ceiling." />
        <MetricTile label="Time" value="1.0 .. 86400.0" detail="Zero removed from critical divisors." />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <CodeProofPanel
          eyebrow="Declared ranges"
          title="Domain Syntax"
          badge={<StatusPill tone="teal">domain checked</StatusPill>}
          code={`input speed    : Float64[0.0 .. 340.0]   // knots — bounded to flight envelope\ninput altitude : Float64[0.0 .. 51000.0] // feet — bounded to service ceiling\ninput time     : Float64[1.0 .. 86400.0] // seconds — never zero`}
        />
        <div className="grid gap-3">
          {domainCards.map((card) => (
            <div key={card.title} className="rounded-[1.35rem] border border-border/80 bg-background/90 px-5 py-4">
              <p className="text-sm font-semibold text-foreground">{card.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[1.4rem] border border-teal/15 bg-teal/[0.04] p-4 text-center text-sm text-muted-foreground">
        Deep dive:{" "}
        <Link href="/blog/precision-as-domain" className="font-medium text-teal underline underline-offset-2 hover:text-teal-hover">
          Why Your Calculator Is Lying to You
        </Link>
      </div>
    </ArtifactFrame>
  );
}

function MonomerCatalogSurface() {
  return (
    <div className="mx-auto mt-8 grid max-w-6xl gap-6">
      <BlueprintHubArtifact compact />
      <MonomerFamilyBoard />
      <div className="grid gap-6 xl:grid-cols-2">
        <ArtifactFrame className="space-y-5">
          <ArtifactHeader
            eyebrow="Core Monomers"
            title="64 certified operations remain inside the formal substrate."
            description="Core monomers form the formally reviewed substrate. They anchor closure, domains, and compiler proofs."
            status={<ProofBadge />}
          />
          <div className="grid gap-3">
            {coreFamilies.map((f) => (
              <div key={f.family} className="grid grid-cols-[110px_1fr_auto] items-center gap-4 rounded-[1.35rem] border border-border/80 bg-background/90 px-5 py-4">
                <span className="text-sm font-semibold text-foreground">{f.family}</span>
                <span className="text-sm text-muted-foreground">{f.ops}</span>
                <span className="rounded-full border border-emerald-500/25 bg-emerald-500/[0.09] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                  {f.proof}
                </span>
              </div>
            ))}
          </div>
        </ArtifactFrame>

        <ArtifactFrame className="space-y-5">
          <ArtifactHeader
            eyebrow="Extended Monomers"
            title="64 contract-bounded bridges expand the language without faking certification."
            description="Extended monomers are explicit bridges to floating-point, network, filesystem, and other system-bound concerns."
            status={<StatusPill tone="warning">contract boundary</StatusPill>}
          />
          <div className="grid gap-3">
            {extendedFamilies.map((f) => (
              <div key={f.family} className="grid grid-cols-[110px_1fr] items-center gap-4 rounded-[1.35rem] border border-border/80 bg-background/90 px-5 py-4">
                <span className="text-sm font-semibold text-foreground">{f.family}</span>
                <span className="text-sm text-muted-foreground">{f.ops}</span>
              </div>
            ))}
          </div>
          <div className="rounded-[1.4rem] border border-orange-400/20 bg-orange-400/[0.06] p-4 text-sm leading-relaxed text-muted-foreground">
            Core monomers remain formally verified regardless of what extended monomers surround them. The compiler keeps that boundary explicit.
          </div>
        </ArtifactFrame>
      </div>
    </div>
  );
}

function EvaAlgebraArtifact() {
  return (
    <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.95fr]">
      <ArtifactFrame className="space-y-6">
        <ArtifactHeader
          eyebrow="EVA Algebra"
          title="Three operators build larger circuits without changing the proof model."
          description="EVA is the composition layer. It keeps sequencing, fan-out, and branching explicit instead of hiding them inside runtime conventions."
          status={<ProofBadge />}
        />
        <div className="grid gap-4 md:grid-cols-3">
          <MetricTile label="Operators" value="3" detail="Finite composition grammar." />
          <MetricTile label="Guarantee" value={<><PhiC /> = 1</>} detail="Closure remains attached to composition." />
          <MetricTile label="Evaluation" value="explicit" detail="Order, branch and parallel fan-out are all named." />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <FlowNode
            label={evaOps[0].symbol}
            title={evaOps[0].name}
            body={evaOps[0].desc}
            icon={<ArrowRight className="h-4 w-4" />}
            state="active"
          />
          <FlowNode
            label={evaOps[1].symbol}
            title={evaOps[1].name}
            body={evaOps[1].desc}
            icon={<Split className="h-4 w-4" />}
            state="idle"
          />
          <FlowNode
            label={evaOps[2].symbol}
            title={evaOps[2].name}
            body={evaOps[2].desc}
            icon={<GitBranch className="h-4 w-4" />}
            state="success"
          />
        </div>
        <EvidenceSurface
          eyebrow="Composition Reading"
          title="EVA does not add magic syntax. It names the only three composition moves the compiler needs."
          description="That is why the algebra remains learnable and inspectable."
          items={[
            { label: "SEQ", body: "Output of one stage becomes the input of the next stage in a deterministic pipeline." },
            { label: "PAR", body: "The same input fans out to independent branches and returns a tuple of results." },
            { label: "COND", body: "Both branches are explicit in the circuit; the predicate selects the terminal path." },
          ]}
        />
      </ArtifactFrame>

      <CodeProofPanel
        eyebrow="Composition sketch"
        title="A small policy circuit using all EVA operators"
        badge={<StatusPill tone="teal">seq / par / cond</StatusPill>}
        code={evaExample}
      />
    </div>
  );
}

export default function PCDPage() {
  const [activeExample, setActiveExample] = useState(0);

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              PCD &mdash; Printed Circuit Description
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Printed Circuit Description. <span className="text-teal">A bounded computational format.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              PCD is the compiler-facing format for describing bounded computation, declared domains, and explicit composition. It is readable by humans and agents, but verification still happens outside the authoring model.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm italic text-muted-foreground">
              &ldquo;Describe the computation once. Keep the boundary explicit across targets.&rdquo;
            </p>
          </div>
        </section>

        {/* Key properties */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <PageSectionHeader
            eyebrow="[01] NOT A LANGUAGE — A FORMAT"
            title="PCD is a bounded circuit format, not an open syntax playground."
            description="The grammar stays finite so AI agents and human reviewers can reason about the same bounded format without ambiguity."
          />
          <div className="mx-auto mt-8 grid max-w-6xl gap-6">
            <ArtifactFrame className="space-y-6">
              <ArtifactHeader
                eyebrow="Format"
                title="The whole format fits inside one explicit operational envelope."
                description="The value of PCD is not stylistic minimalism. It is that every program is assembled from a finite substrate, explicit domains, and a closed composition algebra."
                status={<ProofBadge />}
              />
              <div className="grid gap-4 md:grid-cols-3">
                <MetricTile label="Core" value="64 certified" detail="Formally proven monomers." />
                <MetricTile label="Extended" value="64 contract-bounded" detail="System bridges that stay explicit." />
                <MetricTile label="Targets" value="14" detail="One blueprint, many export materials." />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {keyProps.map((kp) => (
                  <div key={kp.title} className="rounded-[1.5rem] border border-border/80 bg-background/90 p-5 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05]">
                      {kp.icon}
                    </div>
                    <p className="mt-4 text-sm font-semibold text-foreground">{kp.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{kp.desc}</p>
                  </div>
                ))}
              </div>
            </ArtifactFrame>
          </div>
        </section>

        {/* Syntax overview */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <PageSectionHeader
            eyebrow="[02] SYNTAX"
            title="Circuit schematics, not source code."
            description="A PCD program is a named circuit block with immutable bindings, explicit composition and one terminal OUTPUT."
          />

          <div className="mx-auto mt-8 max-w-3xl">
            <div className="flex flex-wrap justify-center gap-2">
              {codeExamples.map((ex, i) => (
                <button
                  key={ex.label}
                  onClick={() => setActiveExample(i)}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                    activeExample === i
                      ? "border-teal/30 bg-teal/[0.08] text-teal"
                      : "border-border/80 bg-background text-muted-foreground hover:border-teal/20 hover:text-foreground"
                  }`}
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          <SyntaxWorkbench activeExample={activeExample} />
        </section>

        {/* Closure Domains */}
        <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
          <PageSectionHeader
            eyebrow="Closure Domains"
            title="Types tell you what. Domains tell you where."
            description="Without domains, a circuit cannot close. With domains, the compiler can prove that every input path remains inside the legal envelope."
          />
          <DomainSurface />
        </section>

        {/* 128 Monomers */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <PageSectionHeader
            eyebrow="[03] 128 MONOMERS"
            title="The complete operation catalog."
            description="64 core certified operations and 64 extended contract-bounded bridges define the full computational material available to PCD."
          />

          <MonomerCatalogSurface />
        </section>

        {/* EVA Composition */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <PageSectionHeader
            eyebrow="[04] EVA ALGEBRA"
            title="Three operators. Correctness preserved."
            description="EVA is the formal composition algebra behind PCD: sequence, parallel fan-out, and conditional branching."
          />
          <EvaAlgebraArtifact />
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Read the format, then install the toolchain.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            PCD describes what a program computes and under which declared bounds. Follow the reference docs or install the CLI to work with the format directly.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <BookOpen className="h-4 w-4" /> Full PCD Reference
            </a>
            <a
              href="/cli"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Install the CLI <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
