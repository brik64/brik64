"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  ArrowRight,
  Terminal,
  Package,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import Image from "next/image";

/* ── SDK Data ── */

const sdks = [
  {
    name: "Rust",
    logo: "/brands/rust.svg",
    pkg: "brik64-core",
    install: "cargo add brik64-core",
    link: "https://crates.io/crates/brik64-core",
    linkLabel: "crates.io/crates/brik64-core",
    features: ["no_std support for embedded", "Crypto feature flag", "Full verified operations API", "Zero-cost composition in Rust (compile-time). Minimal runtime overhead in JavaScript and Python"],
    code: `use brik64_core::prelude::*;

fn validated_transfer(amount: f64, balance: f64) -> Result<f64, BrikError> {
    let check = compose::sequential(
        ops::clamp(0.01, 1_000_000.0),
        ops::assert_lte(balance),
    );
    check.apply(amount)
}`,
    domainExample: `use brik64_core::domain::Domain;
use brik64_core::prelude::*;

let speed = Domain::float64(0.0..=340.0);
let time = Domain::float64(1.0..=86400.0); // excludes zero

let distance = compose::sequential(
    ops::multiply(speed, time),
    ops::clamp(0.0, 29_304_000.0),
);
// Domain closure verified at compile time`,
    evaExample: `// Three composition primitives are available:
//
// Sequential — output of f feeds into g (pipeline)
// Parallel   — both f and g execute on the same input
// Conditional — branch based on a predicate
//
// Any function built from verified operations via
// these composition primitives retains formal
// correctness guarantees automatically.`,
    families: `// 8 operation families available:
// Arithmetic, Logic, Memory, Control,
// I/O, String, Crypto, System
//
// Each family provides a set of verified
// operations with formal correctness proofs.`,
  },
  {
    name: "JavaScript",
    logo: "/brands/javascript.svg",
    pkg: "@brik64/core",
    install: "npm install @brik64/core",
    link: "https://www.npmjs.com/package/@brik64/core",
    linkLabel: "npmjs.com/package/@brik64/core",
    features: ["Node.js 18+ & browsers", "Full TypeScript types", "Tree-shakeable ESM + CJS", "Async crypto operations"],
    code: `import { core, compose } from '@brik64/core';

// The SDKs provide access to verified operations
// and composition primitives across all 8 families.
//
// Operations are saturating by default and
// formally verified — no throws, no undefined behavior.
//
// Full TypeScript types included.
// Tree-shakeable ESM + CJS builds.`,
    domainExample: `import { domain, compose, ops } from '@brik64/core';

const speed = domain.float64(0, 340);
const time = domain.float64(1, 86400); // never zero

const distance = compose.seq(
  ops.multiply(speed, time),
  ops.clamp(0, 29_304_000)
);`,
    evaExample: `// Three composition primitives are available:
//
// Sequential — output of f feeds into g (pipeline)
// Parallel   — both f and g execute on the same input
// Conditional — branch based on a predicate
//
// Any function built from verified operations via
// these composition primitives retains formal
// correctness guarantees automatically.`,
    families: `// 8 operation families available:
// Arithmetic, Logic, Memory, Control,
// I/O, String, Crypto, System
//
// Each family provides a set of verified
// operations with formal correctness proofs.`,
  },
  {
    name: "Python",
    logo: "/brands/python.svg",
    pkg: "brik64",
    install: "pip install brik64",
    link: "https://pypi.org/project/brik64/",
    linkLabel: "pypi.org/project/brik64",
    features: ["Python 3.10+", "Zero dependencies", "Full type stubs", "Lambda-friendly API"],
    code: `from brik64 import core, compose

# The SDKs provide access to verified operations
# and composition primitives across all 8 families.
#
# Operations are saturating by default and
# formally verified — no exceptions, no undefined behavior.
#
# Full type stubs included.
# Zero dependencies.`,
    domainExample: `from brik64 import domain, compose, ops

speed = domain.float64(0, 340)
time = domain.float64(1, 86400)  # never zero

distance = compose.seq(
    ops.multiply(speed, time),
    ops.clamp(0, 29_304_000)
)`,
    evaExample: `# Three composition primitives are available:
#
# Sequential — output of f feeds into g (pipeline)
# Parallel   — both f and g execute on the same input
# Conditional — branch based on a predicate
#
# Any function built from verified operations via
# these composition primitives retains formal
# correctness guarantees automatically.`,
    families: `# 8 operation families available:
# Arithmetic, Logic, Memory, Control,
# I/O, String, Crypto, System
#
# Each family provides a set of verified
# operations with formal correctness proofs.`,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} className="cursor-pointer text-zinc-500 hover:text-white transition-colors">
      {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

export default function SDKsPage() {
  const [activeSDK, setActiveSDK] = useState(0);
  const [activeTab, setActiveTab] = useState<"code" | "domains" | "eva" | "families">("code");

  const sdk = sdks[activeSDK];

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              SDKs
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Verified operations <span className="text-[#00b8d4]">in your language.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Use verified operations inside your existing project. No new language, no compiler install required.
              Any function built from verified operations via composition primitives automatically carries <PhiC /> = 1.
            </p>
          </div>
        </section>

        {/* SDK Selector */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          {/* Language tabs */}
          <div className="flex gap-3">
            {sdks.map((s, i) => (
              <button
                key={s.name}
                onClick={() => { setActiveSDK(i); setActiveTab("code"); }}
                className={`cursor-pointer flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium transition-colors ${
                  activeSDK === i
                    ? "border-teal/30 bg-teal/[0.06] text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                <Image src={s.logo} alt={s.name} width={20} height={20} className="h-5 w-5" />
                {s.name}
              </button>
            ))}
          </div>

          {/* Install + link */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-3 border border-border bg-[#0a0e14] px-4 py-2.5">
              <code className="font-mono text-sm text-emerald-400">
                <span className="text-teal">$</span> {sdk.install}
              </code>
              <CopyButton text={sdk.install} />
            </div>
            <a
              href={sdk.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-teal inline-flex items-center gap-1 text-sm transition-colors"
            >
              {sdk.linkLabel} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Features */}
          <div className="mt-6 flex flex-wrap gap-2">
            {sdk.features.map((f) => (
              <span key={f} className="rounded-full border border-border bg-muted/20 px-3 py-1 text-xs text-muted-foreground">
                {f}
              </span>
            ))}
          </div>

          {/* Code tabs */}
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex border-b border-white/10">
              {(["code", "domains", "eva", "families"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer px-4 py-2.5 text-xs font-medium transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-teal text-teal"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  {tab === "code" ? "Quick Start" : tab === "domains" ? "Domain Constraints" : tab === "eva" ? "Composition" : "All Families"}
                </button>
              ))}
            </div>
            <div className="p-5">
              <pre className="overflow-x-auto text-xs leading-relaxed text-gray-300">
                <code>
                  {activeTab === "code" ? sdk.code : activeTab === "domains" ? sdk.domainExample : activeTab === "eva" ? sdk.evaExample : sdk.families}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* EVA Algebra */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            COMPOSITION
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Three primitives. Infinite composition.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="border border-border bg-muted/20 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-lg font-bold text-teal">
                S
              </div>
              <p className="text-sm font-medium">Sequential</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Output of f feeds into g. Pipeline. <code>compose.sequential(f, g)</code>
              </p>
            </div>
            <div className="border border-border bg-muted/20 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-lg font-bold text-teal">
                P
              </div>
              <p className="text-sm font-medium">Parallel</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Both f and g execute on the same input. <code>compose.parallel(f, g)</code>
              </p>
            </div>
            <div className="border border-border bg-muted/20 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-lg font-bold text-teal">
                C
              </div>
              <p className="text-sm font-medium">Conditional</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Branch: if predicate then f else g. <code>compose.conditional(p, f, g)</code>
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs italic text-muted-foreground">
            Correctness preserved by composition. Proven in Coq. Any function built from Core monomers via EVA operators
            retains <PhiC /> = 1 &mdash; regardless of which language it runs in.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Drop in. Verify.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Add a library to your existing codebase and start using formally verified operations today. No new language required.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <Package className="h-4 w-4" /> SDK Documentation
            </a>
            <a
              href="/pcd"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Learn PCD <ArrowRight className="h-3.5 w-3.5" />
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
