"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Zap,
  Building2,
  Sparkles,
} from "lucide-react";

/* ── Tiers ── */

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individual developers exploring verified software.",
    cta: "Get Started",
    ctaHref: "/login",
    highlight: false,
    features: [
      "CLI + all SDKs",
      "128 monomers (64 certified + 64 extended)",
      "14 export targets",
      "Public registry access",
      "5 lifts per day",
      "Community support (Discord)",
    ],
    icon: Sparkles,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For teams that ship verified code to production.",
    cta: "Start Pro",
    ctaHref: "/login",
    highlight: true,
    features: [
      "Everything in Free",
      "Platform access",
      "Private circuits & registry",
      "Up to 10 team members",
      "Unlimited lifts",
      "GitHub integration (auto-lift on push)",
      "PR certification badges",
      "Certification dashboard",
      "Priority email support",
    ],
    icon: Zap,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For regulated industries that need compliance and control.",
    cta: "Contact Sales",
    ctaHref: "/enterprise",
    highlight: false,
    features: [
      "Everything in Pro",
      "SSO / SAML / OIDC",
      "SCIM provisioning",
      "Compliance reports (SOC2, HIPAA, PCI-DSS)",
      "Custom registry & white-label badges",
      "Audit trail & logs",
      "CI/CD gate plugins",
      "Custom SLA (99.9% uptime)",
      "Dedicated support engineer",
      "On-premise / self-hosted option",
    ],
    icon: Building2,
  },
];

/* ── Comparison table ── */

const comparisonSections = [
  {
    title: "Core",
    rows: [
      { feature: "CLI access", free: true, pro: true, enterprise: true },
      { feature: "128 monomers", free: true, pro: true, enterprise: true },
      { feature: "14 export targets", free: true, pro: true, enterprise: true },
      { feature: "207 Coq proofs", free: true, pro: true, enterprise: true },
      { feature: "Self-compilation fixpoint", free: true, pro: true, enterprise: true },
    ],
  },
  {
    title: "Platform",
    rows: [
      { feature: "Lifts per day", free: "5", pro: "Unlimited", enterprise: "Unlimited" },
      { feature: "Public registry", free: true, pro: true, enterprise: true },
      { feature: "Private registry", free: false, pro: true, enterprise: true },
      { feature: "GitHub integration", free: false, pro: true, enterprise: true },
      { feature: "Certification dashboard", free: false, pro: true, enterprise: true },
      { feature: "PR certification badges", free: false, pro: true, enterprise: true },
      { feature: "Team members", free: "1", pro: "10", enterprise: "Unlimited" },
    ],
  },
  {
    title: "Enterprise",
    rows: [
      { feature: "SSO / SAML / OIDC", free: false, pro: false, enterprise: true },
      { feature: "SCIM provisioning", free: false, pro: false, enterprise: true },
      { feature: "Audit trail", free: false, pro: false, enterprise: true },
      { feature: "Compliance reports", free: false, pro: false, enterprise: true },
      { feature: "On-premise option", free: false, pro: false, enterprise: true },
      { feature: "Custom SLA", free: false, pro: false, enterprise: "99.9%" },
      { feature: "Dedicated support", free: false, pro: false, enterprise: true },
    ],
  },
  {
    title: "Support",
    rows: [
      { feature: "Community (Discord)", free: true, pro: true, enterprise: true },
      { feature: "Email support", free: false, pro: true, enterprise: true },
      { feature: "Priority support", free: false, pro: false, enterprise: true },
      { feature: "Dedicated engineer", free: false, pro: false, enterprise: true },
    ],
  },
];

/* ── FAQ ── */

const faqs = [
  {
    q: "Can I use BRIK-64 without the platform?",
    a: "Yes. The CLI is free forever and works completely standalone. You can lift, certify, and export code without a platform account.",
  },
  {
    q: "What languages are supported?",
    a: "Lift from 10 languages (JavaScript, TypeScript, Python, Rust, C, C++, Go, COBOL, PHP, Java) and export to 14 targets including WebAssembly and native x86-64.",
  },
  {
    q: "What does 'certified' mean?",
    a: "A certified function has passed the Thermodynamic Coherence Engine (TCE) with \u03A6_c = 1 \u2014 mathematical proof that every input is consumed, every output is produced, and every execution path terminates correctly.",
  },
  {
    q: "Is there academic pricing?",
    a: "Yes. Academic institutions get all Pro features for free. Contact us at hello@brik64.com with your .edu email.",
  },
  {
    q: "Can I self-host?",
    a: "Enterprise plans include an on-premise deployment option. The CLI always runs locally \u2014 your source code never leaves your machine.",
  },
  {
    q: "Does BRIK-64 store my source code?",
    a: "No. The CLI processes your code locally. Only PCD blueprints and certification hashes are stored on the platform if you choose to publish them.",
  },
  {
    q: "What happens after the beta?",
    a: "Free tier stays free forever. Pro pricing will be $49/month. All circuits created during beta remain yours and fully functional.",
  },
];

/* ── Cell renderer ── */

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-emerald-400" />;
  if (value === false) return <X className="mx-auto h-4 w-4 text-zinc-600" />;
  return <span className="text-sm text-foreground">{value}</span>;
}

/* ── Page ── */

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18 text-center">
          <span className="text-muted-foreground mb-5 inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
            Pricing
          </span>
          <h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Start free. <span className="text-teal">Scale when ready.</span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            Every plan includes the full PCD language, all 128 monomers, and export to every supported language.
            The CLI is free forever.
          </p>
        </section>

        {/* Tier cards */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl border p-8 ${
                  tier.highlight
                    ? "border-teal/40 bg-teal/[0.04] shadow-lg shadow-teal/5"
                    : "border-border bg-muted/10"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-teal px-3 py-0.5 text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}
                <tier.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-lg font-bold">{tier.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-teal">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{tier.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.ctaHref}
                  className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
                    tier.highlight
                      ? "bg-teal text-white hover:bg-teal-hover"
                      : "border border-border bg-muted/20 text-foreground hover:bg-muted/40"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            FEATURE COMPARISON
          </p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Full feature breakdown
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-sm font-medium text-muted-foreground">Feature</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">Free</th>
                  <th className="pb-4 text-center text-sm font-medium text-teal">Pro</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSections.map((section) => (
                  <>
                    <tr key={section.title}>
                      <td colSpan={4} className="pt-6 pb-2 text-xs font-medium uppercase tracking-widest text-teal">
                        {section.title}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.feature} className="border-b border-border/40">
                        <td className="py-3 text-sm">{row.feature}</td>
                        <td className="py-3 text-center"><CellValue value={row.free} /></td>
                        <td className="py-3 text-center"><CellValue value={row.pro} /></td>
                        <td className="py-3 text-center"><CellValue value={row.enterprise} /></td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">FAQ</p>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">Common questions</h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg border border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left text-sm font-medium transition-colors hover:bg-muted/20"
                >
                  {faq.q}
                  {openFaq === i ? (
                    <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="border-t border-border/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to certify your code?
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Install the CLI and start verifying. Every line of code you certify is a line you never have to debug again.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/login"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Get Started Free
            </a>
            <a
              href="/enterprise"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Contact Enterprise Sales
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
