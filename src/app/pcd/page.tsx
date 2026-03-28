"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  FileCode,
  ArrowRight,
  Shield,
  Layers,
  Terminal,
  BookOpen,
  Zap,
  Code,
} from "lucide-react";

/* ── Monomer families ── */

const coreFamilies = [
  { family: "Arithmetic", range: "MC_00\u2013MC_07", ops: "ADD8, SUB8, MUL8, DIV8, INC, DEC, MOD, NEG", proof: "Coq" },
  { family: "Logic", range: "MC_08\u2013MC_15", ops: "AND8, OR8, XOR8, NOT8, SHL, SHR, ROTL, ROTR", proof: "Coq" },
  { family: "Memory", range: "MC_16\u2013MC_23", ops: "LOAD, STORE, ALLOC, FREE, COPY, SWAP, CAS, FENCE", proof: "Coq" },
  { family: "Control", range: "MC_24\u2013MC_31", ops: "IF, JUMP, CALL, RET, LOOP, BREAK, CONT, HALT", proof: "Coq" },
  { family: "I/O", range: "MC_32\u2013MC_39", ops: "READ, WRITE, OPEN, CLOSE, SEEK, STAT, POLL, FLUSH", proof: "Coq" },
  { family: "String", range: "MC_40\u2013MC_47", ops: "CONCAT, SPLIT, SUBSTR, LEN, UPPER, CHAR_AT, TRIM, MATCH", proof: "Coq" },
  { family: "Crypto", range: "MC_48\u2013MC_55", ops: "HASH, HMAC, AES_ENC, AES_DEC, SHA256, RAND, SIGN, VERIFY", proof: "Coq" },
  { family: "System", range: "MC_56\u2013MC_63", ops: "TIME, SLEEP, ENV, EXIT, PID, SIGNAL, MMAP, SYSINFO", proof: "Coq" },
];

const extendedFamilies = [
  { family: "Float64", range: "MC_64\u2013MC_71", ops: "FADD, FSUB, FMUL, FDIV, FABS, FNEG, FSQRT, FMOD" },
  { family: "Math", range: "MC_72\u2013MC_79", ops: "SIN, COS, TAN, EXP, LN, LOG2, POW, CEIL" },
  { family: "Network", range: "MC_80\u2013MC_87", ops: "CONN, SEND, RECV, CLOSE, BIND, LISTEN, ACCEPT, POLL" },
  { family: "Graphics", range: "MC_88\u2013MC_95", ops: "CREATE, PIXEL, READ, CLEAR, BLIT, LINE, RECT, DIMS" },
  { family: "Audio", range: "MC_96\u2013MC_103", ops: "CREATE, WRITE, READ, MIX, GAIN, LEN, RATE, CHANS" },
  { family: "Filesystem", range: "MC_104\u2013MC_111", ops: "STAT, MKDIR, RMDIR, LIST, COPY, RENAME, REMOVE, EXISTS" },
  { family: "Concurrency", range: "MC_112\u2013MC_119", ops: "SPAWN, JOIN, MUTEX, LOCK, UNLOCK, CHAN, SEND, RECV" },
  { family: "Interop", range: "MC_120\u2013MC_127", ops: "CALL, LOAD, FREE, JSON_E, JSON_D, WASM_L, WASM_C, WASM_F" },
];

/* ── Code examples ── */

const codeExamples = [
  {
    label: "Hello World",
    code: `PC hello {
    let msg = "Hello, verified world!";
    let n = MC_43.LEN(msg);
    MC_33.WRITE(1, msg, n);
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
    let _ = MC_58.WRITE(result);
    OUTPUT result;
}`,
  },
  {
    label: "Data Pipeline",
    code: `PC data_pipeline {
    let raw = MC_32.READ(0);
    let trimmed = MC_46.TRIM(raw);
    let upper = MC_44.UPPER(trimmed);
    let hash = MC_48.HASH(upper);
    MC_33.WRITE(1, hash, MC_43.LEN(hash));
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
  {
    label: "Policy Circuit",
    code: `policy check_file_write(path: string, agent_id: string) -> decision {
    let allowed_prefix = "/tmp/";
    let is_safe_path = MC_40.FIND(path, allowed_prefix);
    let is_known_agent = MC_40.FIND(agent_id, "verified:");

    if (is_safe_path == 0) { return BLOCK; }
    if (is_known_agent == 0) { return BLOCK; }
    return ALLOW;
}`,
  },
];

/* ── EVA operators ── */

const evaOps = [
  { symbol: "\u2297", name: "Sequential", desc: "f \u2297 g: output of f feeds into g. Pipeline composition.", pcd: "let pipeline = seq(add8, mul8);" },
  { symbol: "\u2225", name: "Parallel", desc: "f \u2225 g: both execute on the same input. Results as tuple.", pcd: "let both = par(add8, mul8);" },
  { symbol: "\u2295", name: "Conditional", desc: "p \u2295 (f, g): if predicate p, then f, else g.", pcd: "let branch = cond(gt10, add1, sub1);" },
];

/* ── Key properties ── */

const keyProps = [
  { icon: <FileCode className="h-5 w-5 text-teal" />, title: "Not a language", desc: "PCD is a format, like PDF for documents or SVG for graphics. It describes computation, not syntax." },
  { icon: <Shield className="h-5 w-5 text-teal" />, title: "128 operations", desc: "Every PCD program is built from 128 formally verified operations. 64 proven in Coq. 64 contract-based." },
  { icon: <Zap className="h-5 w-5 text-teal" />, title: "Verified by design", desc: "If the blueprint doesn\u2019t close as a circuit (\u03a6_c \u2260 1), it simply won\u2019t compile. The math is the guarantee." },
  { icon: <Layers className="h-5 w-5 text-teal" />, title: "14 targets", desc: "Compile to Rust, JavaScript, Python, C, C++, Go, COBOL, PHP, Java, Swift, WebAssembly, BIR, Native." },
  { icon: <Code className="h-5 w-5 text-teal" />, title: "Self-compiling", desc: "The brikc compiler compiles itself producing an identical hash. The fixpoint is the proof." },
  { icon: <Terminal className="h-5 w-5 text-teal" />, title: "Designed for AI", desc: "128 total operations. An LLM can learn the entire language. Generate certified PCD in seconds." },
];

export default function PCDPage() {
  const [activeExample, setActiveExample] = useState(0);

  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18">
          <span className="text-muted-foreground mb-5 inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
            PCD &mdash; Printed Circuit Description
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The blueprint standard <span className="text-teal">for software.</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            PCD is a Turing-complete language where programs are circuit schematics. Every valid PCD program has
            Thermodynamic Coherence <PhiC /> = 1: no dead branches, no unreachable code, no undefined flows.
          </p>
          <p className="mt-4 max-w-2xl text-sm italic text-muted-foreground">
            &ldquo;PCD is to code what architectural blueprints are to buildings.
            You describe once. You build in any material.&rdquo;
          </p>
        </section>

        {/* Key properties */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] NOT A LANGUAGE &mdash; A FORMAT
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyProps.map((kp) => (
              <div key={kp.title} className="group border border-border bg-muted/20 p-6 transition-colors hover:border-teal/30 hover:bg-teal/[0.03]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05]">
                  {kp.icon}
                </div>
                <p className="text-sm font-medium">{kp.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{kp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Syntax overview */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] SYNTAX
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Circuit schematics, not source code
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Every PCD program is a named circuit block. The OUTPUT directive marks the final value emitted.
            Variables are immutable (SSA form). Functions, closures, loops, and conditionals are all supported.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Syntax snippets */}
            <div className="space-y-4">
              <div className="overflow-hidden border border-border">
                <div className="border-b border-border bg-muted/30 px-4 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-teal/70">Program Structure</p>
                </div>
                <div className="bg-[#0a0e14] p-4">
                  <pre className="text-xs leading-relaxed text-gray-300"><code>{`PC circuit_name {
    // functions and logic here
    OUTPUT result;
}`}</code></pre>
                </div>
              </div>
              <div className="overflow-hidden border border-border">
                <div className="border-b border-border bg-muted/30 px-4 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-teal/70">Variables & Functions</p>
                </div>
                <div className="bg-[#0a0e14] p-4">
                  <pre className="text-xs leading-relaxed text-gray-300"><code>{`let x = 42;           // immutable
let name = "hello";    // string
let flag = true;       // boolean

fn add(a, b) {
    return a + b;
}

fn factorial(n) {
    if (n <= 1) { return 1; }
    return n * factorial(n - 1);
}`}</code></pre>
                </div>
              </div>
              <div className="overflow-hidden border border-border">
                <div className="border-b border-border bg-muted/30 px-4 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-teal/70">Loops & Closures</p>
                </div>
                <div className="bg-[#0a0e14] p-4">
                  <pre className="text-xs leading-relaxed text-gray-300"><code>{`// Loop with carried variable
let count = 0;
loop(10) as i {
    let count = count + 1;
}

// Closure
let double = fn(n) { n * 2 };
let result = double(5);   // 10`}</code></pre>
                </div>
              </div>
            </div>

            {/* Code examples with tabs */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex flex-wrap border-b border-white/10">
                {codeExamples.map((ex, i) => (
                  <button
                    key={ex.label}
                    onClick={() => setActiveExample(i)}
                    className={`cursor-pointer px-3 py-2.5 text-[11px] font-medium transition-colors ${
                      activeExample === i
                        ? "border-b-2 border-teal text-teal"
                        : "text-white/40 hover:text-white/60"
                    }`}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
              <div className="p-5">
                <pre className="overflow-x-auto text-xs leading-relaxed text-gray-300">
                  <code>{codeExamples[activeExample].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 128 Monomers */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] 128 MONOMERS
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            The complete operation catalog
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            64 formally verified atomic operations (Core, Coq-proven) + 64 bounds-checked extended operations (CONTRACT).
            Every monomer has a declared domain, range, postconditions, and termination guarantee.
          </p>

          {/* Core monomers */}
          <h3 className="mt-8 text-sm font-bold">
            Core Monomers &mdash; MC_00\u2013MC_63{" "}
            <span className="ml-2 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              <PhiC /> = 1
            </span>
          </h3>
          <div className="mt-4 overflow-hidden border border-border">
            {coreFamilies.map((f) => (
              <div key={f.family} className="grid grid-cols-[100px_120px_1fr_60px] items-center gap-0 border-b border-border px-4 py-2.5 last:border-b-0">
                <span className="text-xs font-medium">{f.family}</span>
                <span className="font-mono text-xs text-teal">{f.range}</span>
                <span className="text-xs text-muted-foreground">{f.ops}</span>
                <span className="text-right text-[10px] font-bold text-emerald-400">{f.proof}</span>
              </div>
            ))}
          </div>

          {/* Extended monomers */}
          <h3 className="mt-8 text-sm font-bold">
            Extended Monomers &mdash; MC_64\u2013MC_127{" "}
            <span className="ml-2 rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-400">
              CONTRACT
            </span>
          </h3>
          <div className="mt-4 overflow-hidden border border-border">
            {extendedFamilies.map((f) => (
              <div key={f.family} className="grid grid-cols-[100px_120px_1fr] items-center gap-0 border-b border-border px-4 py-2.5 last:border-b-0">
                <span className="text-xs font-medium">{f.family}</span>
                <span className="font-mono text-xs text-blue-400">{f.range}</span>
                <span className="text-xs text-muted-foreground">{f.ops}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs italic text-muted-foreground">
            Core monomers remain formally verified regardless of what Extended monomers surround them.
            The compiler enforces the boundary statically.
          </p>
        </section>

        {/* EVA Composition */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] EVA ALGEBRA
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Three operators. Correctness preserved.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {evaOps.map((op) => (
              <div key={op.name} className="border border-border bg-muted/20 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-xl font-bold text-teal">
                  {op.symbol}
                </div>
                <p className="text-sm font-bold">{op.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{op.desc}</p>
                <code className="mt-3 block rounded bg-[#0a0e14] px-3 py-1.5 font-mono text-[11px] text-emerald-400">
                  {op.pcd}
                </code>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Correctness preserved by composition. Proven in Coq. <PhiC /> = 1 for the entire composition if all
            constituent monomers are Core.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            One blueprint. Any material.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            PCD describes WHAT your program computes &mdash; not HOW. Language-agnostic. Mathematically verifiable.
            Compiles to any target.
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
      </main>
      <Footer />
    </>
  );
}
