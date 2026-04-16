import type { Metadata } from "next";
import { Check, X, Sparkles, Zap, Users, Building2 } from "lucide-react";
import {
  PageHeaderVNext,
  SupportingSurface,
  ButtonVNext,
} from "@/components/vnext/primitives";
import { CanonicalPageLayout } from "@/components/PageArchetypes";
import { cn } from "@/lib/utils";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing — BRIK64",
  description:
    "Detailed pricing tiers, comparison matrix, and commercial FAQ for adopting the BRIK64 formal layer from CLI entry to enterprise operating model.",
  alternates: { canonical: "/pricing" },
};

// ─── Data structures from legacy ─────────────────────────────────────────────

const heroMetrics = [
  {
    label: "Open route",
    value: "CLI + docs",
    detail: "Individual developers can start locally without waiting on commercial setup.",
    note: "Free",
  },
  {
    label: "Team route",
    value: "Shared review",
    detail: "Dashboard, audit, and collaboration features support multi-operator workflow.",
    note: "Beta",
  },
  {
    label: "Enterprise route",
    value: "Evaluation",
    detail: "Deployment, identity, and evidence posture are scoped during architecture review.",
    note: "Custom",
  },
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    icon: Sparkles,
    description: "For individual developers exploring CLI, SDKs, and the bounded verification workflow.",
    cta: "Start with CLI",
    href: "/cli",
    features: [
      "CLI + SDK routes",
      "Core and extended monomer catalog",
      "Supported export targets",
      "Public documentation",
      "Public registry browsing",
      "Local lift and check workflow",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "Beta",
    period: "evaluation",
    icon: Zap,
    highlight: true,
    description: "For smaller teams that need private workflow surfaces without jumping straight into enterprise scope.",
    cta: "Discuss Pro access",
    href: "/contact",
    features: [
      "Everything in Free",
      "Private circuits and registry paths",
      "GitHub integration",
      "PR verification status",
      "Certification dashboard",
      "Priority support path",
      "Expanded team collaboration",
    ],
  },
  {
    name: "Team",
    price: "Beta",
    period: "evaluation",
    icon: Users,
    description: "For engineering groups that need shared review state, governance, and operator visibility.",
    cta: "Plan team rollout",
    href: "/contact",
    features: [
      "Everything in Pro",
      "Shared dashboard",
      "Team audit trail",
      "Role-based access control",
      "Organization integration",
      "Slack / webhook notifications",
      "Governance-ready review loops",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "evaluation",
    icon: Building2,
    description: "For organizations that need identity controls, deployment posture review, and evidence packages.",
    cta: "Talk to enterprise",
    href: "mailto:enterprise@brik64.com",
    features: [
      "Everything in Team",
      "SSO / SAML / OIDC",
      "SCIM provisioning",
      "Evidence packages for audit",
      "Private registry badge posture",
      "CI/CD gate plugins",
      "Self-host posture review",
      "Dedicated support path",
    ],
  },
];

const comparisonSections = [
  {
    title: "Core",
    rows: [
      { feature: "CLI access", free: true, pro: true, team: true, enterprise: true },
      { feature: "Core + extended catalog", free: true, pro: true, team: true, enterprise: true },
      { feature: "Supported export targets", free: true, pro: true, team: true, enterprise: true },
      { feature: "Local lift/check workflow", free: true, pro: true, team: true, enterprise: true },
      { feature: "Public docs", free: true, pro: true, team: true, enterprise: true },
    ],
  },
  {
    title: "Platform",
    rows: [
      { feature: "Public registry", free: true, pro: true, team: true, enterprise: true },
      { feature: "Private registry", free: false, pro: true, team: true, enterprise: true },
      { feature: "GitHub integration", free: false, pro: true, team: true, enterprise: true },
      { feature: "Verification dashboard", free: false, pro: true, team: true, enterprise: true },
      { feature: "PR verification status", free: false, pro: true, team: true, enterprise: true },
      { feature: "Team seats", free: "1", pro: "Up to 10", team: "Up to 50", enterprise: "Scoped" },
    ],
  },
  {
    title: "Team & Governance",
    rows: [
      { feature: "Shared dashboard", free: false, pro: false, team: true, enterprise: true },
      { feature: "Team audit trail", free: false, pro: false, team: true, enterprise: true },
      { feature: "Role-based access", free: false, pro: false, team: true, enterprise: true },
      { feature: "Org-level integrations", free: false, pro: false, team: true, enterprise: true },
      { feature: "Slack / webhooks", free: false, pro: false, team: true, enterprise: true },
    ],
  },
  {
    title: "Enterprise",
    rows: [
      { feature: "SSO / SAML / OIDC", free: false, pro: false, team: false, enterprise: true },
      { feature: "SCIM provisioning", free: false, pro: false, team: false, enterprise: true },
      { feature: "Evidence packages", free: false, pro: false, team: false, enterprise: true },
      { feature: "Self-host posture", free: false, pro: false, team: false, enterprise: true },
      { feature: "SLA review", free: false, pro: false, team: false, enterprise: "Yes" },
      { feature: "Dedicated support engineer", free: false, pro: false, team: false, enterprise: true },
    ],
  },
  {
    title: "Support",
    rows: [
      { feature: "Community support", free: true, pro: true, team: true, enterprise: true },
      { feature: "Email support", free: false, pro: true, team: true, enterprise: true },
      { feature: "Priority support", free: false, pro: false, team: true, enterprise: true },
      { feature: "Architecture review", free: false, pro: false, team: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    q: "Can I use BRIK64 without the platform?",
    a: "Yes. The CLI and public docs are the open entry path. Platform and registry workflows become relevant when you need shared review state, publication, or private collaboration.",
  },
  {
    q: "What languages are supported?",
    a: "BRIK64 documents multiple lift-from and export targets. The practical source of truth is the current CLI and SDK documentation, because supported paths can evolve during beta.",
  },
  {
    q: "What does 'certified' mean here?",
    a: "It means the modeled circuit has passed the declared checks under bounded domains and supported workflows. It is not a blanket promise about unmanaged infrastructure, runtime side effects, or organizational compliance.",
  },
  {
    q: "Is there academic pricing?",
    a: "Academic evaluation is handled directly rather than through a public self-serve checkout. Use hello@brik64.com with institutional context so scope can be routed correctly.",
  },
  {
    q: "Can I self-host?",
    a: "Self-host and on-prem posture are enterprise evaluation topics. They depend on deployment requirements, identity controls, and the exact review workflow the team needs to preserve.",
  },
  {
    q: "Does BRIK64 store my source code?",
    a: "The public CLI path is local-first. When teams publish or collaborate through platform workflows, the system frames stored packages around blueprints, hashes, and review state rather than raw source as a default assumption.",
  },
  {
    q: "What happens after beta?",
    a: "The open CLI path stays public. Paid team and enterprise packaging will be published only when the commercial scope is stable enough to document without inventing guarantees.",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-4 w-4 text-[color:var(--accent)]" />;
  if (value === false) return <X className="h-4 w-4 text-white/10" />;
  return <span className="text-[13px] text-white/70">{value}</span>;
}

export default function PricingPage() {
  return (
    <CanonicalPageLayout>
      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/5 pb-24 pt-32 md:pb-32 md:pt-48">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            <PageHeaderVNext
              eyebrow="Packaging & Tiers"
              title="Adopt the formal layer through open entry, team workflow, and enterprise controls."
              description="The CLI path is public. Team features expand shared review and governance workflow. Enterprise scope adds identity, deployment, and audit posture when those controls need explicit design."
            />

            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {heroMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                      {m.label}
                    </p>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-white/30">
                      {m.note}
                    </span>
                  </div>
                  <p className="mt-4 text-2xl font-black text-white">{m.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tier Cards ─────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
          <div className="mb-16">
             <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Packaging Model</p>
             <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Four tiers with different workflow depth</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "group relative flex flex-col rounded-[2.5rem] border p-8 transition-all duration-300",
                  tier.highlight 
                    ? "border-[color:var(--accent-soft)]/50 bg-[#071019] shadow-[0_24px_80px_rgba(0,200,255,0.15)]"
                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                )}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[color:var(--accent)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">
                    Beta Path
                  </span>
                )}
                
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[color:var(--accent)] border border-white/10">
                  <tier.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">{tier.price}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/30">{tier.period}</span>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-white/50">{tier.description}</p>
                
                <ul className="mt-8 flex-1 space-y-4">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="h-4 w-4 shrink-0 text-[color:var(--accent)] mt-0.5" />
                      <span className="text-[13px] leading-relaxed text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <ButtonVNext
                    href={tier.href}
                    tone={tier.highlight ? "primary" : "secondary"}
                    className="w-full h-12 rounded-xl font-black uppercase tracking-widest text-[11px]"
                  >
                    {tier.cta}
                  </ButtonVNext>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm italic text-white/20">
            This page preserves the detailed tier map, but keeps the claim boundary explicit: platform, compliance, and support scope depend on the route you enter.
          </p>
        </section>

        {/* ── Comparison Matrix ────────────────────────────────────────── */}
        <SupportingSurface className="border-t border-white/5 bg-[#0b0b0f]">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
            <div className="mb-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Feature Comparison</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Detailed comparison by workflow area</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Process Area</th>
                    <th className="pb-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Free</th>
                    <th className="pb-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">Pro</th>
                    <th className="pb-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Team</th>
                    <th className="pb-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {comparisonSections.map((section) => (
                    <React.Fragment key={section.title}>
                      <tr>
                        <td colSpan={5} className="py-8 text-[11px] font-black uppercase tracking-[0.3em] text-[color:var(--accent)] opacity-60">
                          {section.title}
                        </td>
                      </tr>
                      {section.rows.map((row) => (
                        <tr key={row.feature} className="group hover:bg-white/[0.01]">
                          <td className="py-4 text-[14px] text-white/60 group-hover:text-white transition-colors">{row.feature}</td>
                          <td className="py-4 text-center"><CellValue value={row.free} /></td>
                          <td className="py-4 text-center"><CellValue value={row.pro} /></td>
                          <td className="py-4 text-center"><CellValue value={row.team} /></td>
                          <td className="py-4 text-center"><CellValue value={row.enterprise} /></td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </SupportingSurface>

        {/* ── Commercial FAQ ────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
            <div className="mb-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">Commercial FAQ</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Common questions before rollout</h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
                {faqs.map((faq, i) => (
                    <div key={i} className="rounded-3xl border border-white/5 bg-white/[0.02] p-8">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-start gap-3">
                            <span className="text-[color:var(--accent)] opacity-40">Q.</span>
                            {faq.q}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-white/40 pl-7 border-l border-white/10">
                            {faq.a}
                        </p>
                    </div>
                ))}
            </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────────── */}
        <section className="relative px-6 py-32 text-center overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 blueprint-grid opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />
          
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
              Ready to formalize your stack?
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonVNext
                href="/platform"
                tone="primary"
                className="h-14 rounded-2xl px-10 text-base font-bold"
              >
                Explore Platform
              </ButtonVNext>
              <ButtonVNext
                href="/contact"
                tone="secondary"
                className="h-14 rounded-2xl px-10 text-base font-bold bg-white/5 border-white/10 text-white"
              >
                Contact Sales
              </ButtonVNext>
            </div>
          </div>
        </section>
      </main>
    </CanonicalPageLayout>
  );
}
