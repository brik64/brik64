import type { Metadata } from "next";
import {
  CanonicalPageLayout,
  PageHeaderVNext,
  SupportingSurface,
  ButtonVNext,
  PillarCard,
} from "@/components/PageArchetypes";
import { ShieldCheck, Key, GitBranch, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise — BRIK64",
  description:
    "Private delivery, identity controls, and reviewable evidence workflows for enterprise engineering organizations.",
  alternates: { canonical: "/enterprise" },
};

const metrics = [
  { label: "Identity", value: "SSO / SAML / OIDC + SCIM", detail: "Access controls align with enterprise identity lifecycles." },
  { label: "Evidence trail", value: "Compilation + review logs", detail: "Verification outputs carry traceable review artifacts into operating workflows." },
  { label: "Claim boundary", value: "Support posture", detail: "BRIK-64 supports audit and review workflows; it does not certify organizations by itself." },
];

const capabilities = [
  {
    title: "Identity and access",
    body: "SSO, SAML, OIDC, and SCIM integration for centralized user lifecycle and access policy.",
    icon: <Key className="h-6 w-6" />,
  },
  {
    title: "Audit and traceability",
    body: "Compilation trail, certification state, and status artifacts for review and change-control workflows.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Delivery governance",
    body: "CI/CD gates, private registry controls, and deployment-boundary workflows for production adoption.",
    icon: <GitBranch className="h-6 w-6" />,
  },
];

const handoff = [
  {
    title: "Architecture review",
    body: "Technical scope, deployment options, and control-point design.",
    action: "enterprise@brik64.com",
    href: "mailto:enterprise@brik64.com",
  },
  {
    title: "Compliance posture",
    body: "Evidence mapping and claim boundaries for standards-oriented programs.",
    action: "Open Compliance",
    href: "/compliance",
  },
  {
    title: "Platform integration",
    body: "Registry, review flows, and reusable component governance.",
    action: "Open Platform",
    href: "/platform",
  },
];

export default function EnterprisePage() {
  return (
    <CanonicalPageLayout>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5 pb-24 pt-32 md:pb-32 md:pt-48">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            <PageHeaderVNext
              eyebrow="Enterprise"
              title="Private delivery, identity controls, and reviewable evidence workflows."
              description="Enterprise adoption focuses on identity integration, audit traceability, CI/CD status gates, and deployment posture under explicit claim boundaries."
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">{m.label}</p>
                  <p className="mt-3 text-lg font-black text-white leading-tight">{m.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">{m.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <ButtonVNext href="mailto:enterprise@brik64.com" external tone="primary" className="h-14 rounded-2xl px-10 font-black">
                Request Architecture Review
              </ButtonVNext>
              <ButtonVNext href="/compliance" tone="secondary" className="h-14 rounded-2xl px-10 font-black">
                Read Compliance
              </ButtonVNext>
            </div>
          </div>
        </section>

        {/* Operating model section label */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Enterprise Operating Model</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From bounded software checks to organizational review handoff
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/50">
              Enterprise teams can operationalize identity, evidence, and deployment controls today, while legal and program certification controls remain separate.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {capabilities.map((cap) => (
              <PillarCard
                key={cap.title}
                icon={cap.icon}
                title={cap.title}
                description={cap.body}
              />
            ))}
          </div>

          <p className="mt-12 text-center text-sm italic text-white/25">
            Enterprise value comes from traceable workflows and explicit operating boundaries, not certification theater.
          </p>
        </section>

        {/* Handoff routes */}
        <SupportingSurface className="relative border-t border-white/5 bg-[#0b0b0f] blueprint-grid overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
            <div className="mb-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Enterprise Handoff</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Routes for compliance, deployment, and support
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/50">
                Use the route that matches the workstream: technical controls, compliance mapping, or architecture review.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {handoff.map((h) => (
                <a
                  key={h.title}
                  href={h.href}
                  className="group flex flex-col rounded-[2rem] border border-white/5 bg-black/40 p-8 backdrop-blur-md transition-all hover:border-[color:var(--accent-soft)]/30 hover:bg-[#071019]"
                >
                  <h3 className="text-xl font-bold text-white">{h.title}</h3>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/40">{h.body}</p>
                  <div className="mt-8 text-sm font-black uppercase tracking-widest text-[color:var(--accent)] opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                    {h.action} →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </SupportingSurface>

        {/* CTA */}
        <section className="relative px-6 py-32 text-center blueprint-grid md:px-8 lg:px-12">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              Start with architecture scope, then map controls.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-xl text-white/50">
              Begin with enterprise architecture review and move into compliance and platform routes with the same evidence posture.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <ButtonVNext href="mailto:enterprise@brik64.com" external tone="primary" className="h-14 rounded-2xl px-10 text-base font-black">
                Request Architecture Review
              </ButtonVNext>
              <ButtonVNext href="/platform" tone="secondary" className="h-14 rounded-2xl px-10 text-base font-black">
                Open Platform
              </ButtonVNext>
            </div>
          </div>
        </section>
      </main>

    </CanonicalPageLayout>
  );
}
