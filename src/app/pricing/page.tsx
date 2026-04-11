import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Pricing — BRIK64",
  description:
    "Detailed pricing tiers, comparison matrix, and commercial FAQ for CLI, team workflows, and enterprise evaluation.",
};

type Tier = {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  ctaHref: string;
  highlight?: boolean;
  icon: typeof Sparkles;
  features: string[];
};

type ComparisonRow = {
  feature: string;
  free: boolean | string;
  pro: boolean | string;
  team: boolean | string;
  enterprise: boolean | string;
};

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description:
      "For individual developers exploring CLI, SDKs, and the bounded verification workflow.",
    cta: "Start with CLI",
    ctaHref: "/cli",
    icon: Sparkles,
    features: [
      "CLI + SDK routes",
      "Core and extended monomer catalog access",
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
    description:
      "For smaller teams that need private workflow surfaces without jumping straight into enterprise scope.",
    cta: "Discuss Pro access",
    ctaHref: "/contact",
    highlight: true,
    icon: Zap,
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
    description:
      "For engineering groups that need shared review state, governance, and operator visibility.",
    cta: "Plan team rollout",
    ctaHref: "/contact",
    icon: Users,
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
    description:
      "For organizations that need identity controls, deployment posture review, and evidence artifacts for audit workflows.",
    cta: "Talk to enterprise",
    ctaHref: "/enterprise",
    icon: Building2,
    features: [
      "Everything in Team",
      "SSO / SAML / OIDC",
      "SCIM provisioning",
      "Evidence artifacts teams may map into standards workflows",
      "Private registry and badge posture",
      "CI/CD gate plugins",
      "Deployment review including self-host posture",
      "Dedicated enterprise support path",
    ],
  },
];

const comparisonSections: Array<{ title: string; rows: ComparisonRow[] }> = [
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
      { feature: "Team seats", free: "1", pro: "Up to 10", team: "Up to 50", enterprise: "Scoped per evaluation" },
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
      { feature: "Evidence artifacts", free: false, pro: false, team: false, enterprise: true },
      { feature: "Self-host / on-prem posture", free: false, pro: false, team: false, enterprise: true },
      { feature: "SLA review", free: false, pro: false, team: false, enterprise: "Available in enterprise evaluation" },
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
    question: "Can I use BRIK-64 without the platform?",
    answer:
      "Yes. The CLI and public docs are the open entry path. Platform and registry workflows become relevant when you need shared review state, publication, or private collaboration.",
  },
  {
    question: "What languages are supported?",
    answer:
      "BRIK-64 documents multiple lift-from and export targets. The practical source of truth is the current CLI and SDK documentation, because supported paths can evolve during beta.",
  },
  {
    question: "What does 'certified' mean here?",
    answer:
      "It means the modeled circuit has passed the declared checks under bounded domains and supported workflows. It is not a blanket promise about unmanaged infrastructure, runtime side effects, or organizational compliance.",
  },
  {
    question: "Is there academic pricing?",
    answer:
      "Academic evaluation is handled directly rather than through a public self-serve checkout. Use hello@brik64.com with institutional context so scope can be routed correctly.",
  },
  {
    question: "Can I self-host?",
    answer:
      "Self-host and on-prem posture are enterprise evaluation topics. They depend on deployment requirements, identity controls, and the exact review workflow the team needs to preserve.",
  },
  {
    question: "Does BRIK-64 store my source code?",
    answer:
      "The public CLI path is local-first. When teams publish or collaborate through platform workflows, the public site frames stored artifacts around blueprints, hashes, and review state rather than raw source as a default assumption.",
  },
  {
    question: "What happens after beta?",
    answer:
      "The open CLI path stays public. Paid team and enterprise packaging will be published only when the commercial scope is stable enough to document without inventing guarantees.",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="mx-auto h-4 w-4 text-emerald-400" />;
  }
  if (value === false) {
    return <X className="mx-auto h-4 w-4 text-muted-foreground/60" />;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <section className="border-b border-border bg-gradient-to-b from-teal/[0.10] via-background to-background">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Pricing
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Open developer path, shared team workflow, and{" "}
              <span className="text-teal">enterprise evaluation.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              The CLI path is public. Team features expand review and governance workflow. Enterprise scope adds identity,
              deployment, and audit posture when those controls need explicit design.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Open route
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">CLI + docs</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Individual developers can start locally without waiting on commercial setup.
                </p>
              </div>
              <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Team route
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Shared review</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Dashboard, audit, and collaboration features support multi-operator workflow.
                </p>
              </div>
              <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Enterprise route
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Evaluation</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Deployment, identity, and evidence posture are scoped during architecture review.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            PACKAGING MODEL
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Four tiers with different workflow depth
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            This page preserves the detailed tier map, but keeps the claim boundary explicit: platform, compliance,
            and support scope depend on the route you enter, not on a blanket promise.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`relative flex flex-col border p-8 ${
                  tier.highlight
                    ? "border-teal/40 bg-teal/[0.04] shadow-lg shadow-teal/5"
                    : "border-border bg-muted/10"
                }`}
              >
                {tier.highlight ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-teal px-3 py-0.5 text-xs font-medium text-white">
                    Beta path
                  </span>
                ) : null}
                <tier.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-lg font-bold">{tier.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-teal">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`mt-8 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors ${
                    tier.highlight
                      ? "bg-teal text-white hover:bg-teal-hover"
                      : "border border-border bg-muted/20 text-foreground hover:bg-muted/40"
                  }`}
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            FEATURE COMPARISON
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Detailed comparison by workflow area
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-sm font-medium text-muted-foreground">Feature</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">Free</th>
                  <th className="pb-4 text-center text-sm font-medium text-teal">Pro</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">Team</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonSections.flatMap((section) => [
                  <tr key={`${section.title}-heading`}>
                    <td colSpan={5} className="pb-2 pt-6 text-xs font-medium uppercase tracking-widest text-teal">
                      {section.title}
                    </td>
                  </tr>,
                  ...section.rows.map((row) => (
                    <tr key={`${section.title}-${row.feature}`} className="border-b border-border/40">
                      <td className="py-3 text-sm">{row.feature}</td>
                      <td className="py-3 text-center">
                        <CellValue value={row.free} />
                      </td>
                      <td className="py-3 text-center">
                        <CellValue value={row.pro} />
                      </td>
                      <td className="py-3 text-center">
                        <CellValue value={row.team} />
                      </td>
                      <td className="py-3 text-center">
                        <CellValue value={row.enterprise} />
                      </td>
                    </tr>
                  )),
                ])}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            COMMERCIAL FAQ
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Common questions before rollout
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="border border-border bg-muted/10 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium text-foreground">
                  {faq.question}
                </summary>
                <div className="border-t border-border/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-20 text-center md:px-12 lg:px-18">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Start open, then escalate scope only when the workflow needs it.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Developer routes begin with CLI and docs. Shared review starts when teams need it. Enterprise starts with
            architecture review, not with checkout theater.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/enterprise"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Talk to enterprise
            </Link>
            <Link
              href="/cli"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Start with CLI <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
