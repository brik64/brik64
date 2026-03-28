import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { languages, getLanguageBySlug } from "@/lib/language-data";
import { ArrowRight, Check, X, Terminal, Package, ArrowUpDown } from "lucide-react";

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
      <main>
        {/* Hero */}
        <section className="border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18">
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
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] CAPABILITIES
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            What you can do with {lang.name}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/20 p-5">
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
            <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/20 p-5">
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
          <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
            <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
              [02] SDK
            </p>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
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

        {/* Lift Example */}
        {lang.canLiftFrom && lang.liftExample && (
          <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
            <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
              LIFT
            </p>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Lift from {lang.name} to PCD
            </h2>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Terminal className="h-3.5 w-3.5" />
              <code className="text-foreground">brikc lift file{lang.extension} --to pcd</code>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
                <div className="border-b border-white/10 px-4 py-2">
                  <span className="text-xs text-white/40 font-mono">input{lang.extension}</span>
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
          <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
            <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
              COMPILE
            </p>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Compile PCD to {lang.name}
            </h2>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Terminal className="h-3.5 w-3.5" />
              <code className="text-foreground">brikc compile app.pcd --target {lang.slug}</code>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
                <div className="border-b border-white/10 px-4 py-2">
                  <span className="text-xs text-white/40 font-mono">app.pcd</span>
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
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            See the full transpilation matrix
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            {lang.name} is one of 14 supported languages. Explore every certified path.
          </p>
          <div className="mt-8">
            <a
              href="/transpiler"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Transpiler matrix <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
