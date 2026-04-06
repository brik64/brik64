"use client";

import { useState } from "react";
import { FileCode, ArrowRight, Shield, Maximize2 } from "lucide-react";
import { PhiC } from "@/components/PhiC";

const targets = [
  "Rust",
  "JavaScript",
  "Python",
  "Go",
  "COBOL",
  "C",
  "C++",
  "Java",
  "Swift",
  "Kotlin",
  "Haskell",
  "Zig",
  "Wasm",
  "LLVM IR",
];

const pcdCode = `PC hello {
    let msg = "Hello, verified world!";
    let n = LEN(msg);
    WRITE(1, msg, n);
    OUTPUT 0;
}`;

const outputs: Record<string, { lang: string; code: string }> = {
  PCD: {
    lang: "pcd",
    code: pcdCode,
  },
  Rust: {
    lang: "rust",
    code: `fn hello() -> i32 {
    let msg = "Hello, verified world!";
    let n = msg.len();
    io::stdout().write_all(msg.as_bytes()).unwrap();
    0 // Φ_c = 1 — circuit closed
}`,
  },
  JavaScript: {
    lang: "javascript",
    code: `function hello() {
    const msg = "Hello, verified world!";
    const n = msg.length;
    process.stdout.write(msg);
    return 0; // Φ_c = 1 — circuit closed
}`,
  },
  Python: {
    lang: "python",
    code: `def hello() -> int:
    msg = "Hello, verified world!"
    n = len(msg)
    sys.stdout.write(msg)
    return 0  # Φ_c = 1 — circuit closed`,
  },
};

const tabKeys = Object.keys(outputs);

const keyPoints = [
  {
    icon: <FileCode className="h-5 w-5 text-teal" />,
    title: "AI-native language",
    desc: "64 + 64 operations an LLM memorizes completely. Domain constraints the compiler enforces. The first language designed for AI agents to write directly.",
  },
  {
    icon: <Shield className="h-5 w-5 text-teal" />,
    title: "Verified operations",
    desc: "Every PCD program is built from formally verified operations. Core operations formally proven, plus contract-based extended set.",
  },
  {
    icon: <ArrowRight className="h-5 w-5 text-teal" />,
    title: "Verified by design",
    desc: (
      <>
        If the blueprint doesn&apos;t close as a circuit (<PhiC /> ≠ 1), it
        simply won&apos;t compile. The math is the proof.
      </>
    ),
  },
  {
    icon: <Maximize2 className="h-5 w-5 text-teal" />,
    title: "Domain Constraints",
    desc: "Every input declares its valid range. The compiler enforces boundaries — no overflow, no NaN, no division by zero. By construction.",
  },
];

export function PCDSection() {
  const [activeTab, setActiveTab] = useState("PCD");

  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [02] · THE BLUEPRINT
        </p>

        <h3 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
          This is PCD. Learn it in one prompt.
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          64 core monomers, formally proven. 64 extended monomers, bounds-checked. Domain constraints on every input. Deterministic by construction.
          An AI learns the entire language in one prompt. Humans write JavaScript, Python, or Rust &mdash; the Lifter converts it to PCD. AIs write PCD directly.
        </p>

        {/* Two-column: diagram + code */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Visual analogy */}
          <div className="flex flex-col items-center justify-center border border-border bg-muted p-8">
            <div className="rounded-md border border-teal/40 bg-teal/[0.06] px-6 py-3 text-sm font-medium text-teal">
              <FileCode className="mr-2 inline-block h-4 w-4" />
              PCD Blueprint
            </div>

            <div className="my-3 h-6 w-px bg-border" />

            <div className="flex flex-wrap justify-center gap-2">
              {targets.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-teal/30 hover:text-foreground"
                >
                  <ArrowRight className="h-3 w-3 text-teal/60" />
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-6 text-center text-xs italic text-muted-foreground">
              &ldquo;One blueprint. Any material.&rdquo;
            </p>
          </div>

          {/* Right: Tabbed code */}
          <div className="flex flex-col overflow-hidden border border-border">
            <div className="flex border-b border-border bg-muted/30">
              {tabKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`cursor-pointer px-4 py-2 text-xs font-medium transition-colors ${
                    activeTab === key
                      ? "border-b-2 border-teal text-teal"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="bg-[#0d1117] p-4 flex-1">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-teal/70">
                {activeTab === "PCD" ? "PCD Source" : `Output — ${activeTab}`}
              </p>
              <pre className="overflow-x-auto text-xs leading-relaxed text-gray-300">
                <code>{outputs[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Three key-point cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {keyPoints.map((kp) => (
            <div
              key={kp.title}
              className="group border border-border bg-muted p-6 transition-colors hover:border-teal/30 hover:bg-teal/[0.03]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05]">
                {kp.icon}
              </div>
              <p className="text-sm font-medium">{kp.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {kp.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 mx-auto max-w-3xl text-center text-sm italic leading-relaxed text-muted-foreground">
          &ldquo;An AI doesn&apos;t need a better language. It needs a language where incorrect programs cannot compile.&rdquo;
        </p>
      </div>
    </section>
  );
}
