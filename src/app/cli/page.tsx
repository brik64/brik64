"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  Terminal,
  Download,
  Shield,
  Zap,
  Package,
  FileCode,
  ArrowRight,
  Copy,
  Check,
  Server,
  Globe,
  Search,
  BadgeCheck,
  GitBranch,
  Layers,
  Cpu,
  BookOpen,
} from "lucide-react";

/* ── Install methods ── */

const installMethods = [
  { label: "curl", command: "curl -fsSL https://brik64.dev/install | sh" },
  { label: "Homebrew", command: "brew install brik64/tap/brikc" },
  { label: "Cargo", command: "cargo install brikc" },
  { label: "npm", command: "npm install -g @brik64/cli" },
];

/* ── CLI Commands ── */

const commands = [
  {
    name: "compile",
    desc: "Compile PCD to any target language",
    usage: "brikc compile src/main.pcd --target rust",
    flags: ["--target <lang>", "--output <file>", "--emit-tests"],
    example: [
      { text: "$ brikc compile app.pcd --target js --emit-tests", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  Parsing app.pcd...", style: "muted" as const },
      { text: "  Resolving 4 monomers: ADD8, STORE, WRITE, LEN", style: "muted" as const },
      { text: "  Emitting JavaScript (ES2024)...", style: "muted" as const },
      { text: "", style: "blank" as const },
      { text: "  \u2713 Compiled \u2192 dist/app.js", style: "success" as const },
      { text: "  \u2713 Tests \u2192 dist/app.spec.js (12 tests)", style: "success" as const },
      { text: "  \u2713 \u03a6_c = 1 \u2014 circuit closed", style: "success" as const },
    ],
  },
  {
    name: "lift",
    desc: "Reverse-compile source code to PCD blueprints",
    usage: "brikc lift app.js --output app.pcd",
    flags: ["--language <lang>", "--output <file>", "--format <text|json>", "--min-liftability <0.0-1.0>", "--domains"],
    example: [
      { text: "$ brikc lift legacy.js --to pcd", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  Analyzing legacy.js (247 lines)...", style: "muted" as const },
      { text: "  Extracting computational graph...", style: "muted" as const },
      { text: "  Mapping to PCD monomers...", style: "muted" as const },
      { text: "", style: "blank" as const },
      { text: "  \u2713 Lifted \u2192 legacy.pcd", style: "success" as const },
      { text: "  \u2713 12 monomers identified", style: "success" as const },
    ],
  },
  {
    name: "transpile",
    desc: "Convert entire directories between languages with certification",
    usage: "brikc transpile ./src/ --to rust --output ./dist/",
    flags: ["--to <target>", "--output <dir>", "--from <lang>", "--force", "--certify"],
    example: [
      { text: "$ brikc transpile ./cobol/ --to go --output ./modern/", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  \u2192 SCAN \u2014 finding source files...", style: "muted" as const },
      { text: "    \u2713 Found 5 source files", style: "success" as const },
      { text: "  \u2192 LIFT \u2014 converting to PCD...", style: "muted" as const },
      { text: "    \u2713 interest.cob \u2192 1 circuit", style: "success" as const },
      { text: "    \u2713 tax.cob \u2192 1 circuit", style: "success" as const },
      { text: "  \u2192 CHECK \u2014 certifying PCDs...", style: "muted" as const },
      { text: "    \u2713 All circuits: \u03a6_c = 1", style: "success" as const },
      { text: "  \u2192 BUILD \u2014 generating go output...", style: "muted" as const },
      { text: "    \u2713 5 files transpiled (100%)", style: "success" as const },
    ],
  },
  {
    name: "check",
    desc: "Type-check and verify TCE metrics without running",
    usage: "brikc check program.pcd",
    flags: ["--self (verify compiler itself)"],
    example: [
      { text: "$ brikc check program.pcd", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510", style: "box" as const },
      { text: "  \u2502  CERTIFICATION REPORT             \u2502", style: "box" as const },
      { text: "  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524", style: "box" as const },
      { text: "  \u2502  Status:   \u2713 CERTIFIED            \u2502", style: "box-green" as const },
      { text: "  \u2502  \u03a6_c:      1.000000               \u2502", style: "box-green" as const },
      { text: "  \u2502  Panics:   0 possible              \u2502", style: "box" as const },
      { text: "  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518", style: "box" as const },
    ],
  },
  {
    name: "certify",
    desc: "Run TCE verification, generate immutable certification hash",
    usage: "brikc certify add8.pcd",
    flags: [],
    example: [
      { text: "$ brikc certify add8.pcd", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  Parsing add8.pcd...", style: "muted" as const },
      { text: "  Running TCE verification...", style: "muted" as const },
      { text: "  \u2713 \u03a6_c = 1 (circuit closed)", style: "success" as const },
      { text: "", style: "blank" as const },
      { text: "  BRIK-64 CERTIFICATION", style: "box-green" as const },
      { text: "  Function:  add8", style: "box" as const },
      { text: "  Status:    \u2713 CERTIFIED", style: "box-green" as const },
      { text: "  Hash:      a7f3c9e1...d4b2", style: "box" as const },
      { text: "  Badge URL: brik64.dev/badge/a7f3c9e1", style: "box" as const },
    ],
  },
  {
    name: "publish",
    desc: "Publish certified circuits to the public or private registry",
    usage: "brikc registry publish circuit.pcd",
    flags: ["--private", "--org <name>"],
    example: [
      { text: "$ brikc registry publish validate_token.pcd", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  Verifying certification...", style: "muted" as const },
      { text: "  \u2713 \u03a6_c = 1 \u2014 circuit certified", style: "success" as const },
      { text: "  Publishing to registry.brik64.dev...", style: "muted" as const },
      { text: "  \u2713 Published: @acme/validate_token@1.0.0", style: "success" as const },
    ],
  },
  {
    name: "connect",
    desc: "Connect GitHub repository for auto-lift on push",
    usage: "brikc connect github",
    flags: ["--repo <url>"],
    example: [
      { text: "$ brikc connect github --repo github.com/acme/api", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  \u2713 Repository connected", style: "success" as const },
      { text: "  \u2713 Webhook installed (push, pull_request)", style: "success" as const },
      { text: "  \u2713 Auto-lift enabled", style: "success" as const },
    ],
  },
  {
    name: "lsp",
    desc: "Start Language Server Protocol server for IDE integration",
    usage: "brikc lsp --stdio",
    flags: ["--stdio"],
    example: [
      { text: "$ brikc lsp --stdio", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  BRIK-64 LSP Server v5.0.0-beta.1", style: "muted" as const },
      { text: "  Supports: highlighting, diagnostics, hover,", style: "muted" as const },
      { text: "            go-to-definition, completion", style: "muted" as const },
      { text: "  \u2713 Listening on stdio", style: "success" as const },
    ],
  },
  {
    name: "mcp-server",
    desc: "Start MCP server for AI agent integration",
    usage: "brikc mcp-server",
    flags: ["--transport sse", "--port <number>"],
    example: [
      { text: "$ brikc mcp-server --transport sse --port 3100", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  BRIK-64 MCP Server", style: "muted" as const },
      { text: "  Tools: brik64.discover, brik64.execute", style: "muted" as const },
      { text: "  \u2713 SSE transport on port 3100", style: "success" as const },
    ],
  },
  {
    name: "catalog",
    desc: "List and inspect all 128 monomers",
    usage: "brikc catalog list",
    flags: ["list", "show MC_XX"],
    example: [
      { text: "$ brikc catalog show MC_00", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  MC_00 \u2014 ADD8", style: "box-green" as const },
      { text: "  Family:    Arithmetic", style: "box" as const },
      { text: "  Signature: (u8, u8) \u2192 u8", style: "box" as const },
      { text: "  Domain:    [0,255] \u00d7 [0,255]", style: "box" as const },
      { text: "  Range:     [0,255] (wrapping)", style: "box" as const },
      { text: "  Proof:     Coq \u2713", style: "box-green" as const },
    ],
  },
  {
    name: "verify",
    desc: "Self-verification — compiler verifies its own compilation hash",
    usage: "brikc verify",
    flags: [],
    example: [
      { text: "$ brikc verify", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  \u2713 Self-compilation fixpoint verified", style: "success" as const },
      { text: "  \u2713 Hash: 7229cfcde9613de4...e489e95", style: "success" as const },
      { text: "  \u2713 \u03a9 = 1", style: "success" as const },
    ],
  },
];

/* ── Stats ── */

const stats = [
  { value: "708 KB", label: "Binary size" },
  { value: "0", label: "Dependencies" },
  { value: "128", label: "Monomers" },
  { value: "14", label: "Target languages" },
];

/* ── Terminal line renderer ── */

function TerminalLine({ line }: { line: { text: string; style: string } }) {
  if (line.style === "blank") return <div className="h-3" />;
  if (line.style === "command")
    return (
      <div className="font-mono text-sm text-white/70">
        <span className="text-teal">$</span> {line.text.slice(2)}
      </div>
    );
  if (line.style === "success")
    return <div className="font-mono text-sm text-emerald-400">{line.text}</div>;
  if (line.style === "box-green")
    return <div className="font-mono text-sm font-bold text-emerald-400">{line.text}</div>;
  if (line.style === "box")
    return <div className="font-mono text-sm text-emerald-400/70">{line.text}</div>;
  return <div className="font-mono text-sm text-zinc-400">{line.text}</div>;
}

/* ── Install Tab ── */

function InstallBlock() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(installMethods[active].command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden border border-border">
      <div className="flex border-b border-border bg-muted/30">
        {installMethods.map((m, i) => (
          <button
            key={m.label}
            onClick={() => setActive(i)}
            className={`cursor-pointer px-4 py-2.5 text-xs font-medium transition-colors ${
              active === i
                ? "border-b-2 border-teal text-teal"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 bg-[#0a0e14] px-5 py-4">
        <code className="flex-1 font-mono text-sm text-emerald-400">
          <span className="text-teal">$</span> {installMethods[active].command}
        </code>
        <button onClick={copy} className="cursor-pointer text-zinc-500 hover:text-white transition-colors">
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

/* ── Page ── */

export default function CLIPage() {
  const [activeCmd, setActiveCmd] = useState(0);

  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18">
          <span className="text-muted-foreground mb-5 inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
            Developer Tools
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            One binary. <span className="text-teal">Every guarantee.</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            Install <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-medium text-foreground">brikc</code> and
            start lifting, certifying, and compiling code from your terminal. A self-verifying compiler that ships with
            its own correctness proof.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border border-border bg-muted/20 p-4 text-center">
                <div className="text-2xl font-bold text-teal">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Install */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] INSTALL
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Up and running in 30 seconds
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
            Four installation methods. One result: a 708 KB binary with zero dependencies that can verify its own compilation.
          </p>
          <div className="mt-8 max-w-2xl">
            <InstallBlock />
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Terminal className="h-3.5 w-3.5" />
            <span>Verify: <code className="text-foreground">brikc --version</code> &rarr; brikc 5.0.0-beta.1</span>
          </div>
        </section>

        {/* Commands Reference */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] COMMANDS
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Everything from the terminal
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
            Compile, lift, transpile, certify, publish, and connect &mdash; all through a single binary.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            {/* Command list */}
            <div className="flex flex-col gap-1">
              {commands.map((cmd, i) => (
                <button
                  key={cmd.name}
                  onClick={() => setActiveCmd(i)}
                  className={`cursor-pointer rounded-lg px-4 py-3 text-left transition-colors ${
                    activeCmd === i
                      ? "border border-teal/30 bg-teal/[0.06] text-foreground"
                      : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Terminal className="h-3.5 w-3.5 text-teal" />
                    <span className="text-sm font-medium font-mono">{cmd.name}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{cmd.desc}</p>
                </button>
              ))}
            </div>

            {/* Terminal output */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-white/30 font-mono">brikc {commands[activeCmd].name}</span>
              </div>
              <div className="p-5">
                <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-teal/60">
                  Usage
                </p>
                <code className="mb-4 block font-mono text-xs text-zinc-400">
                  {commands[activeCmd].usage}
                </code>
                {commands[activeCmd].flags.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-teal/60">
                      Flags
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {commands[activeCmd].flags.map((f) => (
                        <span key={f} className="rounded border border-white/10 px-2 py-0.5 font-mono text-[11px] text-zinc-500">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="border-t border-white/10 pt-4">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-teal/60">
                    Example
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {commands[activeCmd].example.map((line, i) => (
                      <TerminalLine key={i} line={line} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] SYSTEM
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Requirements
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="border border-border bg-muted/20 p-6">
              <Server className="mb-3 h-5 w-5 text-teal" />
              <h3 className="text-sm font-medium">Operating Systems</h3>
              <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                <li>macOS 12+ (arm64, x86_64)</li>
                <li>Linux (Ubuntu 20.04+, Debian 11+, Fedora 36+)</li>
                <li>Windows 10+ (WSL2)</li>
              </ul>
            </div>
            <div className="border border-border bg-muted/20 p-6">
              <Zap className="mb-3 h-5 w-5 text-teal" />
              <h3 className="text-sm font-medium">Self-Verifying Binary</h3>
              <p className="mt-3 text-xs text-muted-foreground">
                The <code>brikc</code> compiler is itself a certified BRIK-64 program. It compiles to a 708 KB standalone
                x86-64 ELF &mdash; no Rust runtime, no libc dependency.
              </p>
            </div>
            <div className="border border-border bg-muted/20 p-6">
              <Shield className="mb-3 h-5 w-5 text-teal" />
              <h3 className="text-sm font-medium">Verification</h3>
              <p className="mt-3 text-xs text-muted-foreground">
                Run <code>brikc verify</code> to confirm the self-compilation fixpoint.
                Run <code>brikc catalog</code> to list all 128 monomers with signatures.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Ready to start?
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Install the CLI, pick your SDK, and certify your first function. Every line of code you certify is a line
            you never have to debug again.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <BookOpen className="h-4 w-4" /> Read the docs
            </a>
            <a
              href="/sdks"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Browse SDKs <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
