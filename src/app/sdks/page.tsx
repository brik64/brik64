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
    features: ["no_std support for embedded", "Crypto feature flag", "Full 128 monomer API", "Zero-cost EVA composition"],
    code: `use brik64_core::{mc, eva};

fn main() {
    // Arithmetic — wrapping, never panics
    let sum  = mc::arithmetic::add8(200, 100);    // 255
    let diff = mc::arithmetic::sub8(10, 20);      // 0
    let (q, r) = mc::arithmetic::div8(17, 5);     // (3, 2)

    // Crypto
    let hash = mc::crypto::sha256(b"hello");

    // EVA sequential composition (⊗)
    let pipeline = eva::seq(
        |x| mc::arithmetic::add8(x, 10),
        |x| mc::arithmetic::mul8(x, 2),
    );
    assert_eq!(pipeline(5), 30); // Φ_c = 1
}`,
    evaExample: `// Sequential (⊗)
let pipeline = eva::seq(
    |x| mc::arithmetic::add8(x, 10),
    |x| mc::arithmetic::mul8(x, 2),
);
assert_eq!(pipeline(5), 30);

// Parallel (∥)
let both = eva::par(
    |x| mc::arithmetic::add8(x, 1),
    |x| mc::arithmetic::mul8(x, 2),
);
assert_eq!(both(5), (6, 10));

// Conditional (⊕)
let branch = eva::cond(
    |x| x > 10,
    |x| mc::arithmetic::add8(x, 1),
    |x| mc::arithmetic::sub8(x, 1),
);
assert_eq!(branch(15), 16);`,
    families: `mc::arithmetic   // MC_00–MC_07
mc::logic        // MC_08–MC_15
mc::memory       // MC_16–MC_23
mc::control      // MC_24–MC_31
mc::io           // MC_32–MC_39
mc::string       // MC_40–MC_47
mc::crypto       // MC_48–MC_55
mc::system       // MC_56–MC_63`,
  },
  {
    name: "JavaScript",
    logo: "/brands/javascript.svg",
    pkg: "@brik64/core",
    install: "npm install @brik64/core",
    link: "https://www.npmjs.com/package/@brik64/core",
    linkLabel: "npmjs.com/package/@brik64/core",
    features: ["Node.js 18+ & browsers", "Full TypeScript types", "Tree-shakeable ESM + CJS", "Async crypto operations"],
    code: `import { mc, eva } from '@brik64/core';

// Arithmetic — wrapping, never throws
const sum = mc.arithmetic.add8(200, 100);     // 255
const diff = mc.arithmetic.sub8(10, 20);      // 0
const [q, r] = mc.arithmetic.div8(17, 5);     // [3, 2]

// Crypto
const hash = await mc.crypto.sha256(
  new TextEncoder().encode('hello')
);

// EVA sequential composition (⊗)
const pipeline = eva.seq(
  (x: number) => mc.arithmetic.add8(x, 10),
  (x: number) => mc.arithmetic.mul8(x, 2),
);
pipeline(5);  // 30 — Φ_c = 1`,
    evaExample: `// Sequential (⊗)
const pipeline = eva.seq(
  (x: number) => mc.arithmetic.add8(x, 10),
  (x: number) => mc.arithmetic.mul8(x, 2),
);
pipeline(5);  // 30

// Parallel (∥)
const both = eva.par(
  (x: number) => mc.arithmetic.add8(x, 1),
  (x: number) => mc.arithmetic.mul8(x, 2),
);
both(5);  // [6, 10]

// Conditional (⊕)
const branch = eva.cond(
  (x: number) => x > 10,
  (x: number) => mc.arithmetic.add8(x, 1),
  (x: number) => mc.arithmetic.sub8(x, 1),
);
branch(15);  // 16`,
    families: `mc.arithmetic   // MC_00–MC_07
mc.logic        // MC_08–MC_15
mc.memory       // MC_16–MC_23
mc.control      // MC_24–MC_31
mc.io           // MC_32–MC_39
mc.string       // MC_40–MC_47
mc.crypto       // MC_48–MC_55
mc.system       // MC_56–MC_63`,
  },
  {
    name: "Python",
    logo: "/brands/python.svg",
    pkg: "brik64",
    install: "pip install brik64",
    link: "https://pypi.org/project/brik64/",
    linkLabel: "pypi.org/project/brik64",
    features: ["Python 3.10+", "Zero dependencies", "Full type stubs", "Lambda-friendly API"],
    code: `from brik64 import mc, eva

# Arithmetic — saturating, never raises
total = mc.arithmetic.add8(200, 100)     # 255
diff  = mc.arithmetic.sub8(10, 20)       # 0
q, r  = mc.arithmetic.div8(17, 5)        # (3, 2)

# Crypto
digest = mc.crypto.sha256(b"hello")

# EVA sequential composition (⊗)
pipeline = eva.pipeline(
    lambda x: mc.arithmetic.add8(x, 10),
    lambda x: mc.arithmetic.mul8(x, 2),
)
pipeline(5)  # 30 — Φ_c = 1`,
    evaExample: `# Sequential (⊗)
pipeline = eva.pipeline(
    lambda x: mc.arithmetic.add8(x, 10),
    lambda x: mc.arithmetic.mul8(x, 2),
)
pipeline(5)  # 30

# Parallel (∥)
both = eva.parallel(
    lambda x: mc.arithmetic.add8(x, 1),
    lambda x: mc.arithmetic.mul8(x, 2),
)
both(5)  # (6, 10)

# Conditional (⊕)
branch = eva.cond(
    lambda x: x > 10,
    lambda x: mc.arithmetic.add8(x, 1),
    lambda x: mc.arithmetic.sub8(x, 1),
)
branch(15)  # 16`,
    families: `mc.arithmetic   # MC_00–MC_07
mc.logic        # MC_08–MC_15
mc.memory       # MC_16–MC_23
mc.control      # MC_24–MC_31
mc.io           # MC_32–MC_39
mc.string       # MC_40–MC_47
mc.crypto       # MC_48–MC_55
mc.system       # MC_56–MC_63`,
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
  const [activeTab, setActiveTab] = useState<"code" | "eva" | "families">("code");

  const sdk = sdks[activeSDK];

  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18">
          <span className="text-muted-foreground mb-5 inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
            SDKs
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Verified operations <span className="text-teal">in your language.</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            Use the 128 monomers (64 Core + 64 Extended) inside your existing project. No new language, no compiler install required.
            Any function built from Core monomers via EVA operators automatically carries <PhiC /> = 1.
          </p>
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
              {(["code", "eva", "families"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer px-4 py-2.5 text-xs font-medium transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-teal text-teal"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  {tab === "code" ? "Quick Start" : tab === "eva" ? "EVA Algebra" : "All Families"}
                </button>
              ))}
            </div>
            <div className="p-5">
              <pre className="overflow-x-auto text-xs leading-relaxed text-gray-300">
                <code>
                  {activeTab === "code" ? sdk.code : activeTab === "eva" ? sdk.evaExample : sdk.families}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* EVA Algebra */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            EVA COMPOSITION
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Three operators. Infinite composition.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="border border-border bg-muted/20 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-lg font-bold text-teal">
                &otimes;
              </div>
              <p className="text-sm font-medium">Sequential</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Output of f feeds into g. Pipeline. <code>eva.seq(f, g)</code>
              </p>
            </div>
            <div className="border border-border bg-muted/20 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-lg font-bold text-teal">
                &parallel;
              </div>
              <p className="text-sm font-medium">Parallel</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Both f and g execute on the same input. <code>eva.par(f, g)</code>
              </p>
            </div>
            <div className="border border-border bg-muted/20 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-lg font-bold text-teal">
                &oplus;
              </div>
              <p className="text-sm font-medium">Conditional</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Branch: if predicate then f else g. <code>eva.cond(p, f, g)</code>
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
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
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
      </main>
      <Footer />
    </>
  );
}
