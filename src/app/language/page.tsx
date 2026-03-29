import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CircuitGrid } from "@/components/CircuitGrid";
import { PhiC } from "@/components/PhiC";

const b64Features = [
  { title: "Range types", desc: "Declare valid bounds at the type level. Out-of-range values are rejected at compile time.", code: `type Speed = range[0, 900];\ntype Dose = range[0.0, 25.0];` },
  { title: "Exhaustive matching", desc: "Every match must cover every possible value. The compiler verifies completeness.", code: `fn brake(dist: Distance) -> Force {\n    match dist {\n        0.0..5.0 => 1.0,\n        5.0..20.0 => 0.7,\n        20.0..50.0 => 0.3,\n        _ => 0.0,\n    }\n}` },
  { title: "Domain constraints", desc: "Functions declare their input/output domains. The compiler traces bounds through every operation.", code: `fn calculate(a: range[0, 100], b: range[1, 10]) -> range[0, 1000] {\n    a * b\n}` },
  { title: "Struct types", desc: "Compose named fields with individual domain constraints.", code: `type Position = {\n    lat: range[-90, 90],\n    lon: range[-180, 180],\n    alt: range[0, 15_000],\n};` },
  { title: "Enum types", desc: "Finite state machines with exhaustive handling.", code: `type Status = enum { Active, Paused, Stopped };\n\nfn transition(s: Status) -> Status {\n    match s {\n        Active => Status.Paused,\n        Paused => Status.Active,\n        Stopped => Status.Stopped,\n    }\n}` },
  { title: "Module system", desc: "Organize code into modules. Import verified circuits from the registry.", code: `use registry::crypto::hash256;\nuse registry::math::clamp;\n\nfn process(data: Bytes) -> Hash {\n    hash256(data)\n}` },
];

export default function LanguagePage() {
  return (
    <>
      <CircuitGrid />
      <Navbar />
      <main className="bg-background relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <span className="text-muted-foreground mb-5 inline-block w-fit rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium tracking-wide">
            The .b64 Language
          </span>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Write .b64.{" "}
            <span className="text-teal">The compiler proves the rest.</span>
          </h1>

          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            .b64 is a programming language with range types, exhaustive pattern matching,
            and automatic formal verification. Write familiar code &mdash; get mathematical
            proof that it&apos;s correct.
          </p>

          {/* Quick example */}
          <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">example.b64</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[12px] leading-relaxed text-teal/80">{`type Temperature = range[-40, 80];
type Humidity = range[0, 100];

fn comfort_index(temp: Temperature, hum: Humidity) -> range[0, 100] {
    let heat_factor = temp * 0.7;
    let moisture = hum * 0.3;
    clamp(heat_factor + moisture, 0, 100)
}
// Φ_c = 1 — every input produces a bounded output`}</pre>
          </div>
        </section>

        {/* .b64 vs PCD */}
        <section className="border-border mx-auto max-w-7xl border-t px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium tracking-tight">.b64 vs PCD: Two layers, one system</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Like Rust and LLVM IR, BRIK-64 separates the developer experience from the verification engine.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* .b64 */}
            <div className="rounded-lg border border-teal/30 bg-teal/[0.02] p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">.b64</span>
                <span className="text-sm font-medium text-foreground">The language you write</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>&#10003; Familiar syntax (Rust/Swift-like)</li>
                <li>&#10003; Range types, structs, enums, modules</li>
                <li>&#10003; Exhaustive pattern matching</li>
                <li>&#10003; Domain constraints at the type level</li>
                <li>&#10003; Designed for developers</li>
              </ul>
              <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-[#0a0e14]">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <pre className="overflow-x-auto p-3 text-[11px] leading-relaxed text-teal/80">{`type Speed = range[0, 900];

fn check(v: Speed) -> Status {
    match v {
        0..200 => Status.Slow,
        200..900 => Status.Fast,
    }
}`}</pre>
              </div>
            </div>

            {/* PCD */}
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="rounded-full bg-zinc-500/10 px-3 py-1 text-xs font-medium text-zinc-400">PCD</span>
                <span className="text-sm font-medium text-foreground">The verified intermediate representation</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>&#10003; Low-level circuit description</li>
                <li>&#10003; 128 monomers (verified operations)</li>
                <li>&#10003; Explicit wiring and data flow</li>
                <li>&#10003; Machine-generated and machine-verified</li>
                <li>&#10003; Designed for compilers and tools</li>
              </ul>
              <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-[#0a0e14]">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <pre className="overflow-x-auto p-3 text-[11px] leading-relaxed text-teal/80">{`pc check(v: i64) -> i64 {
    domain speed: Range [0, 900];
    assert v in speed;
    let cmp = MC_16.LT(v, 200);
    match cmp { ... }
}`}</pre>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">The pipeline:</strong>{" "}
              .b64 &rarr; PCD &rarr; CMF verification (<PhiC /> = 1) &rarr; 14 compilation targets (Rust, JS, Python, C, Go, WASM, native...)
            </p>
          </div>
        </section>

        {/* Language features */}
        <section className="border-border mx-auto max-w-7xl border-t px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium tracking-tight">Language features</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {b64Features.map((f) => (
              <div key={f.title} className="rounded-lg border border-border bg-card p-5">
                <h3 className="text-sm font-medium text-foreground">{f.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
                <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#0a0e14]">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  </div>
                  <pre className="overflow-x-auto p-3 text-[11px] leading-relaxed text-teal/80">{f.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compilation flow */}
        <section className="border-border mx-auto max-w-7xl border-t px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium tracking-tight">Write once, deploy everywhere</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            One .b64 file compiles to 14 targets with identical behavior guaranteed by formal verification.
          </p>

          <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">brikc build</span>
            </div>
            <div className="flex flex-col gap-1 p-5 font-mono text-xs">
              <p className="text-white/70"><span className="text-teal">$</span> brikc build app.b64 --target rust,js,python,wasm</p>
              <p className="mt-1 text-emerald-400">&nbsp;&nbsp;&#10003; Parsed app.b64 &mdash; 3 types, 2 functions</p>
              <p className="text-emerald-400">&nbsp;&nbsp;&#10003; Generated PCD &mdash; 14 monomers</p>
              <p className="text-emerald-400">&nbsp;&nbsp;&#10003; &Phi;<sub>c</sub> = 1.000 &mdash; circuit closed</p>
              <p className="text-emerald-400">&nbsp;&nbsp;&#10003; Emitted: app.rs, app.js, app.py, app.wasm</p>
              <p className="mt-1 text-zinc-400">&nbsp;&nbsp;Certificate: app.cert.json (SHA-256 hash)</p>
            </div>
          </div>
        </section>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
