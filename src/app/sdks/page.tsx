"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { MonomerFamilyBoard } from "@/components/MonomerArtifacts";
import { EvidenceSurface } from "@/components/PageArtifacts";
import {
  ArrowRight,
  Package,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import Image from "next/image";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

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
    <button onClick={copy} className="cursor-pointer text-muted-foreground transition-colors hover:text-teal">
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
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              SDKs
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Drop verified operations <span className="text-teal">into your code.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              No new language. No compiler install. Add a library to your existing Rust, JavaScript, or Python project.
              Every function built from verified operations automatically carries <PhiC /> = 1. Works with your existing code.
            </p>
          </div>
        </section>

        {/* SDK Selector */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] SDK WORKBENCH
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            One substrate. Three host languages.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Choose a runtime, inspect the install path, and verify how the same certified substrate appears in host-language code.
          </p>

          <div className="mx-auto mt-8 max-w-5xl rounded-[1.9rem] border border-border/80 bg-gradient-to-br from-muted/35 via-background to-background p-5 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">
            <div className="grid gap-3 border-b border-border/70 pb-5 sm:grid-cols-3">
              {sdks.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => { setActiveSDK(i); setActiveTab("code"); }}
                  className={`cursor-pointer rounded-2xl border px-5 py-4 text-center text-sm font-medium transition-colors ${
                    activeSDK === i
                      ? "border-teal/25 bg-teal/[0.06] text-foreground shadow-[0_18px_50px_rgba(13,148,136,0.08)]"
                      : "border-border/70 bg-background/90 text-muted-foreground hover:bg-muted/20 hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Image src={s.logo} alt={s.name} width={20} height={20} className="h-5 w-5" />
                    <span>{s.name}</span>
                  </div>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {s.pkg}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.25fr]">
              <div className="space-y-4">
                <div className="rounded-[1.6rem] border border-teal/15 bg-teal/[0.05] p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal/80">Selected runtime</p>
                  <div className="mt-3 flex items-center justify-center gap-3 text-center">
                    <Image src={sdk.logo} alt={sdk.name} width={26} height={26} className="h-6 w-6" />
                    <div>
                      <p className="text-lg font-semibold tracking-tight text-teal">{sdk.name}</p>
                      <p className="text-xs text-muted-foreground">{sdk.pkg}</p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a0e14] shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-2 text-xs font-mono text-white/30">install</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-4">
                    <code className="font-mono text-sm text-emerald-400">
                      <span className="text-teal">$</span> {sdk.install}
                    </code>
                    <CopyButton text={sdk.install} />
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-border/80 bg-background/90 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Package source</p>
                  <a
                    href={sdk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-teal"
                  >
                    {sdk.linkLabel} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="grid gap-2">
                  {sdk.features.map((f) => (
                    <div key={f} className="rounded-2xl border border-border/70 bg-background/80 px-4 py-3 text-xs text-muted-foreground">
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a0e14] shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-xs font-mono text-white/30">{sdk.name.toLowerCase()} surface</span>
                </div>
                <div className="flex flex-wrap gap-2 border-b border-white/10 px-4 py-3">
                  {(["code", "domains", "eva", "families"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                        activeTab === tab
                          ? "bg-teal/15 text-teal"
                          : "text-white/45 hover:text-white/70"
                      }`}
                    >
                      {tab === "code" ? "Quick Start" : tab === "domains" ? "Domain Constraints" : tab === "eva" ? "Composition" : "All Families"}
                    </button>
                  ))}
                </div>
                <div className="border-b border-white/10 px-4 py-4">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Host</p>
                      <p className="mt-2 text-sm font-semibold text-teal">{sdk.name}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Proof surface</p>
                      <p className="mt-2 text-sm font-semibold text-teal"><PhiC /> = 1</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Material</p>
                      <p className="mt-2 text-sm font-semibold text-teal">Core + bounded bridges</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <pre className="overflow-x-auto text-xs leading-relaxed text-gray-300">
                    <code>
                      {activeTab === "code" ? sdk.code : activeTab === "domains" ? sdk.domainExample : activeTab === "eva" ? sdk.evaExample : sdk.families}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            <MonomerFamilyBoard />
            <EvidenceSurface
              eyebrow="SDK Evidence"
              title="Libraries expose proof-preserving operations instead of hiding the substrate."
              description="The host-language wrappers keep the certified surface, bounded bridges, and runtime target explicit."
              items={[
                { label: "Rust", body: "Zero-cost composition with compile-time domain and closure checks." },
                { label: "JavaScript / Python", body: "Structured APIs expose the same verified operations without introducing a new language." },
                { label: "Boundary", body: "Extended material remains explicit so host-language ergonomics do not blur certification scope." },
              ]}
            />
          </div>
        </section>

        {/* EVA Algebra */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            COMPOSITION
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Three primitives. Infinite composition.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            These are the three composition moves exposed by the SDKs: enough to build larger verified functions without changing the underlying algebra.
          </p>
          <div className="mx-auto mt-8 max-w-5xl rounded-[1.9rem] border border-border/80 bg-gradient-to-br from-muted/35 via-background to-background p-5 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-border/80 bg-background/90 p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-lg font-bold text-teal">
                S
              </div>
              <p className="text-sm font-medium">Sequential</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Output of f feeds into g. Pipeline. <code>compose.sequential(f, g)</code>
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-border/80 bg-background/90 p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-lg font-bold text-teal">
                P
              </div>
              <p className="text-sm font-medium">Parallel</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Both f and g execute on the same input. <code>compose.parallel(f, g)</code>
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-border/80 bg-background/90 p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-lg font-bold text-teal">
                C
              </div>
              <p className="text-sm font-medium">Conditional</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Branch: if predicate then f else g. <code>compose.conditional(p, f, g)</code>
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-teal/15 bg-teal/[0.05] px-4 py-4 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal/80">Composition surface</p>
            <p className="mt-2 text-xs italic text-muted-foreground">
            Correctness preserved by composition. Mathematically certified. Any function built from Core monomers via EVA operators
            retains <PhiC /> = 1 &mdash; regardless of which language it runs in.
            </p>
          </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Start building &mdash; free
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Add one library. Get verified operations. No new language. Works with your existing code today.
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
