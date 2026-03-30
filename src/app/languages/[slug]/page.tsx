import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { languages, getLanguageBySlug } from "@/lib/language-data";
import { ArrowRight, Check, X, Terminal, Package, ArrowUpDown, Puzzle, Globe, Sparkles } from "lucide-react";

const sdkExamples: Record<string, { code: string; description: string }> = {
  javascript: {
    description: "Use verified monomers directly in your JavaScript/TypeScript code. Every function built from Core monomers via EVA operators automatically carries Φ_c = 1 — regardless of the host language.",
    code: `import { mc, eva } from '@brik64/core';

// Use verified monomers instead of raw operators
const safeAdd = mc.add8(200, 100);  // 44 (wrapping, proven in Coq)
const hash = mc.hashHex(Buffer.from('payload')); // SHA-256

// EVA sequential composition — correctness preserved
const pipeline = eva.seq(
  (x) => mc.add8(x, 10),
  (x) => mc.mod8(x, 7)
);

// Pull a certified circuit from the public registry
// and use it directly in your code
import { registry } from '@brik64/core';
const jwtValidator = await registry.pull('CRYPTO-005');
const isValid = jwtValidator.run(token); // Φ_c = 1`,
  },
  python: {
    description: "Drop verified monomers into your Python codebase. Every operation carries its mathematical proof. Pull certified circuits from the registry and use them as regular Python functions.",
    code: `from brik64.mc import arithmetic, crypto, string
from brik64.eva import seq, par, pipeline
from brik64.registry import pull

# Verified monomers — not just functions, proofs
result = arithmetic.add8(200, 100)  # 44 (wrapping, Coq-proven)
digest = crypto.hash_hex(b"payload")  # SHA-256

# EVA composition — correctness propagates
process = seq(
    lambda x: arithmetic.add8(x, 10),
    lambda x: arithmetic.mod8(x, 7)
)

# Pull from the public registry — drop into existing code
auth_flow = pull("AUTH-FLOW-001")  # OAuth2 handler, Φ_c = 1
result = auth_flow.execute(request)  # certified, no PCD needed`,
  },
  rust: {
    description: "Use Coq-proven monomers in your Rust code. The brik64-core crate provides all verified operations with zero-cost abstractions. Compatible with the public registry.",
    code: `use brik64_core::{mc, eva};
use brik64_core::registry::Registry;

fn main() {
    // Verified monomers — formally proven in Coq
    let sum = mc::add8(200, 100);  // 44 (wrapping)
    let hash = mc::hash_hex(b"payload");  // SHA-256

    // EVA sequential composition
    let pipeline = eva::seq(
        |x: (u8, u8)| mc::add8(x.0, x.1),
        |s| mc::mod8(s, 7)
    );
    println!("{}", pipeline((250, 10))); // Φ_c = 1

    // Pull certified circuits from registry
    let registry = Registry::public();
    let sort = registry.pull("SORT-ALG-042").unwrap(); // Quicksort
    let sorted = sort.run(&mut data); // certified, Φ_c = 1
}`,
  },
};

export function generateStaticParams() {
  return languages.map((l) => ({ slug: l.slug }));
}

export default async function LanguagePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const lang = getLanguageBySlug(slug);
  if (!lang) return notFound();

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lang.logo} alt={lang.name} className="h-12 w-12" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {lang.name}
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">{lang.extension}</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            {lang.description}
          </p>
        </section>

        {/* Capabilities */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] CAPABILITIES
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            What you can do with {lang.name}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 border border-border bg-muted/20 p-5">
              <ArrowUpDown className="h-5 w-5 shrink-0 text-teal" />
              <div>
                <p className="text-sm font-medium">Lift from {lang.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Reverse-compile {lang.extension} files to PCD
                </p>
              </div>
              <div className="ml-auto">
                {lang.canLiftFrom ? (
                  <Check className="h-5 w-5 text-emerald-500" />
                ) : (
                  <X className="h-5 w-5 text-zinc-400" />
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 border border-border bg-muted/20 p-5">
              <Terminal className="h-5 w-5 shrink-0 text-teal" />
              <div>
                <p className="text-sm font-medium">Compile to {lang.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Generate certified {lang.extension} from PCD
                </p>
              </div>
              <div className="ml-auto">
                {lang.canCompileTo ? (
                  <Check className="h-5 w-5 text-emerald-500" />
                ) : (
                  <X className="h-5 w-5 text-zinc-400" />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SDK Install */}
        {lang.installCommand && (
          <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
            <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
              [02] SDK
            </p>
            <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
              Install the {lang.name} SDK
            </h2>
            <div className="mt-6 max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-white/30 font-mono">install</span>
              </div>
              <div className="px-5 py-4">
                <code className="font-mono text-sm text-emerald-400">
                  <span className="text-teal">$</span> {lang.installCommand}
                </code>
              </div>
            </div>
          </section>
        )}

        {/* SDK Programming — write BRIK-64 patterns in your language */}
        {lang.installCommand && sdkExamples[lang.slug] && (
          <section className="bg-background border-border mx-auto max-w-7xl border-x border-t bg-background px-6 py-16 md:px-12 lg:px-18">
            <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
              PROGRAM WITH BRIK-64 PATTERNS
            </p>
            <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
              Write verified {lang.name} — no PCD required
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed">
              {sdkExamples[lang.slug].description}
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
              {/* Left — benefits */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium">Keep your existing workflow</p>
                    <p className="mt-1 text-xs text-muted-foreground">Write {lang.name} as you always do. Use <code className="text-foreground">mc.*</code> monomers instead of raw operators. Your code stays in {lang.name} — no context switching to PCD.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Puzzle className="mt-1 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium">Pull from the registry</p>
                    <p className="mt-1 text-xs text-muted-foreground">Certified circuits from the public registry can be pulled and used directly as {lang.name} functions. OAuth handlers, sorting algorithms, validators — all pre-verified.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="mt-1 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium">Lift to PCD is trivial</p>
                    <p className="mt-1 text-xs text-muted-foreground">Code written with BRIK-64 patterns maps 1:1 to PCD monomers. When you&apos;re ready to certify, <code className="text-foreground">brikc lift</code> produces a clean blueprint instantly — because your code already follows the circuit pattern.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="mt-1 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium">Insert into existing software</p>
                    <p className="mt-1 text-xs text-muted-foreground">Functions built from BRIK-64 monomers are standard {lang.name} functions. They drop into any existing codebase. No special runtime, no PCD required at deployment.</p>
                  </div>
                </div>
              </div>

              {/* Right — code example */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 font-mono text-xs text-white/30">app{lang.extension}</span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-zinc-300 whitespace-pre-wrap">{sdkExamples[lang.slug].code}</pre>
              </div>
            </div>

            <div className="mt-8 rounded-md border border-teal/20 bg-teal/[0.03] p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">The key insight:</strong> You don&apos;t need to learn PCD or change your language. Use the SDK in your {lang.name} code, pull certified circuits from the registry, and your programs are automatically compatible with the BRIK-64 ecosystem. When you need formal certification, <code className="text-foreground">brikc lift</code> extracts the PCD blueprint from your already-structured code — trivially, because the patterns already match.
              </p>
            </div>
          </section>
        )}

        {/* Lift Example */}
        {lang.canLiftFrom && lang.liftExample && (
          <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
            <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
              LIFT
            </p>
            <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
              Lift from {lang.name} to PCD
            </h2>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Terminal className="h-3.5 w-3.5" />
              <code className="text-foreground">brikc lift file{lang.extension} --to pcd</code>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-xs text-white/40 font-mono">input{lang.extension}</span>
                </div>
                <pre className="p-4 text-sm text-zinc-400 font-mono whitespace-pre-wrap">{lang.liftExample.input}</pre>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
                <div className="border-b border-white/10 px-4 py-2">
                  <span className="text-xs text-emerald-400/60 font-mono">output.pcd</span>
                </div>
                <pre className="p-4 text-sm text-emerald-400 font-mono whitespace-pre-wrap">{lang.liftExample.output}</pre>
              </div>
            </div>
          </section>
        )}

        {/* Compile Example */}
        {lang.canCompileTo && lang.compileExample && (
          <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
            <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
              COMPILE
            </p>
            <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
              Compile PCD to {lang.name}
            </h2>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Terminal className="h-3.5 w-3.5" />
              <code className="text-foreground">brikc compile app.pcd --target {lang.slug}</code>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-xs text-white/40 font-mono">app.pcd</span>
                </div>
                <pre className="p-4 text-sm text-zinc-400 font-mono whitespace-pre-wrap">{lang.compileExample.input}</pre>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
                <div className="border-b border-white/10 px-4 py-2">
                  <span className="text-xs text-emerald-400/60 font-mono">output{lang.extension}</span>
                </div>
                <pre className="p-4 text-sm text-emerald-400 font-mono whitespace-pre-wrap">{lang.compileExample.output}</pre>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            See the full transpilation matrix
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            {lang.name} is one of 14 supported languages. Explore every certified path.
          </p>
          <div className="mt-8">
            <a
              href="/transpiler"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Transpiler matrix <ArrowRight className="h-4 w-4" />
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
