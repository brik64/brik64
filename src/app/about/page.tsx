import type { Metadata } from "next";
import { 
  PageHeaderVNext, 
  SupportingSurface, 
  ButtonVNext, 
  PillarCard,
  BrandWordmark,
  CanonicalPageLayout,
  ProtagonistSurface
} from "@/components/PageArchetypes";
import { Layers, Terminal, ShieldCheck, BookOpen, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About — BRIK64",
  description:
    "Company overview for CTO and VP Engineering readers: formal language, compiler path, and platform workflows.",
  alternates: { canonical: "/about" },
};

const metrics = [
  { label: "Formal layer", value: "PCD", detail: "The public story stays anchored to the bounded blueprint format." },
  { label: "Operator path", value: "CLI → PCD → platform", detail: "The main route stays visible across the site." },
  { label: "Claim posture", value: "Qualified", detail: "Public language stays tied to evidence present in the repo." },
];

export default function AboutPage() {
  return (
    <CanonicalPageLayout>
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5 pb-24 pt-32 md:pb-32 md:pt-48">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            <PageHeaderVNext
              eyebrow="Company"
              title="BRIK-64 builds the formal layer for AI-era programming."
              description="BRIK-64 combines a formal language, a canonical blueprint, a compiler path, platform workflows, and registry-oriented reuse around reviewable software. It clarifies what exists publicly today and where technical teams should go next."
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">{m.label}</p>
                  <p className="mt-3 text-xl font-black text-white">{m.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What BRIK-64 is building */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Company</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What BRIK-64 is building and how the public stack fits together
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/50">
              Start with the language and compiler path, then follow the platform, registry, and documentation routes that carry the technical detail.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <PillarCard
              icon={<Terminal className="h-6 w-6" />}
              title="Formal language & compiler"
              description="PCD is the public format. The compiler path clips, checks, and emits from bounded specification rather than from test coverage."
              href="/pcd"
              actionLabel="Open PCD →"
            />
            <PillarCard
              icon={<Layers className="h-6 w-6" />}
              title="Platform & registry workflows"
              description="Publication, discovery, review state, governance, and reuse. The registry makes bounded logic a shared resource."
              href="/platform"
              actionLabel="Open Platform →"
            />
            <PillarCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Reviewable evidence posture"
              description="BRIK-64 does not certify organizations. It produces traceable verification artifacts for auditors, reviewers, and operators."
              href="/compliance"
              actionLabel="Read Compliance →"
            />
          </div>
        </section>

        {/* Mission surface */}
        <SupportingSurface className="relative border-t border-white/5 bg-[#0b0b0f] overflow-hidden blueprint-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">What BRIK-64 is today</p>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  A formal language, a compiler path, and reviewable workflows
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/50">
                  The company thesis stays tied to product routes that exist on this site: PCD, the compiler chain, platform workflows, and reusable libraries.
                </p>

                <div className="mt-12 space-y-8">
                  {[
                    { title: "Why it exists", body: "BRIK-64 argues for bounded computation, explicit composition, and reviewable software before deployment or migration hides the logic." },
                    { title: "What is public today", body: "Foundations, PCD, platform, registry, CLI, SDK, and risk pages define the current public stack." },
                    { title: "What stays out of scope", body: "The company route does not invent customer, audit, or market-leadership claims that the repo cannot support." },
                  ].map((row) => (
                    <div key={row.title} className="border-l-2 border-[color:var(--accent)]/30 pl-6">
                      <h3 className="text-lg font-bold text-white">{row.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/50">{row.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">System frame</p>
                  <p className="mt-2 text-2xl font-black text-white">Verified software</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">The public thesis stays tied to bounded verification rather than AI spectacle.</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Delivery path</p>
                  <p className="mt-2 text-2xl font-black text-white">Compiler-led</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">Local workflows lead into platform and registry use rather than replacing them.</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">Truth boundary</p>
                  <p className="mt-2 text-2xl font-black text-white">Repo-backed</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">The site separates product evidence from broader market ambition.</p>
                </div>
              </div>
            </div>
          </div>
        </SupportingSurface>

        {/* Technical references */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Next routes</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Technical references behind the company overview</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "Foundations", body: "Formal background and proof-adjacent framing.", href: "/foundations" },
              { title: "Platform", body: "Registry, review, and reuse workflows around certified software.", href: "/platform" },
              { title: "Documentation", body: "Command references, language guides, and operator material.", href: "https://docs.brik64.dev", external: true },
            ].map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-[color:var(--accent-soft)]/30 hover:bg-[#071019]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{link.title}</h3>
                  {link.external ? (
                    <ExternalLink className="h-4 w-4 text-white/20 group-hover:text-[color:var(--accent)]" />
                  ) : (
                    <span className="text-white/20 group-hover:text-[color:var(--accent)] transition-colors">→</span>
                  )}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-white/40">{link.body}</p>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 py-32 text-center blueprint-grid md:px-8 lg:px-12">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              Follow the stack into the technical references.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-xl text-white/50">
              Move from the company overview into foundations, platform, and documentation without changing claim posture.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <ButtonVNext href="/platform" tone="primary" className="h-14 rounded-2xl px-10 text-base font-black">
                Open Platform
              </ButtonVNext>
              <ButtonVNext href="https://docs.brik64.dev" external tone="secondary" className="h-14 rounded-2xl px-10 text-base font-black">
                Read Docs
              </ButtonVNext>
            </div>
          </div>
        </section>
      </main>
    </CanonicalPageLayout>
  );
}
