import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Car,
  Clock,
  ClipboardList,
  FileCheck,
  GitBranch,
  HeartPulse,
  KeyRound,
  Landmark,
  Mail,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Enterprise — BRIK64",
  description:
    "Enterprise operating model for identity controls, deployment posture, and review-ready evidence workflows.",
};

const capabilities = [
  {
    icon: GitBranch,
    title: "CI/CD integration",
    description:
      "Pipeline gates can use verification status and review artifacts to block or escalate changes. They do not replace release governance outside the software path.",
  },
  {
    icon: FileCheck,
    title: "Evidence artifacts",
    description:
      "Processing logic and change-control artifacts can be mapped into SOC2, PCI-DSS, HIPAA, ISO 27001, or similar review programs. The product supports that mapping; it does not satisfy those programs on its own.",
  },
  {
    icon: BadgeCheck,
    title: "Verification status surfaces",
    description:
      "Internal or customer-facing badges can expose verification state and hashes without turning software review status into an organizational certification claim.",
  },
  {
    icon: KeyRound,
    title: "SSO / SAML / OIDC / SCIM",
    description:
      "Identity integration aligns access control with existing enterprise lifecycle management and approval boundaries.",
  },
  {
    icon: ClipboardList,
    title: "Audit trail",
    description:
      "Compilation state, review decisions, and publication events remain exportable so audit and change-control teams can inspect what moved and why.",
  },
  {
    icon: Clock,
    title: "Support and deployment posture",
    description:
      "Dedicated support, SLA discussion, and self-host / on-prem posture are part of enterprise evaluation scope, not a public blanket promise.",
  },
] as const;

const workflow = [
  {
    label: "01",
    title: "Model the bounded slice",
    description:
      "Identify the software logic that needs review rather than treating the whole runtime environment as one indivisible claim.",
  },
  {
    label: "02",
    title: "Integrate identity and gates",
    description:
      "Connect the workflow to SSO, CI/CD, and review controls so approval boundaries stay explicit.",
  },
  {
    label: "03",
    title: "Emit review artifacts",
    description:
      "Carry verification state, hashes, and operator traceability into the program that needs to inspect them.",
  },
  {
    label: "04",
    title: "Hand off to program controls",
    description:
      "Use the resulting artifact in audit, safety, or deployment review without pretending BRIK-64 certifies the whole organization.",
  },
] as const;

const useCases = [
  {
    icon: Landmark,
    title: "Banking & fintech",
    description:
      "Review transaction logic, pricing logic, and migration-critical behavior as bounded software artifacts before they are handed into broader operational control programs.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Preserve the review boundary around processing logic and workflow automation while keeping clinical, infrastructure, and procedural controls out of scope unless separately evidenced.",
  },
  {
    icon: Car,
    title: "Automotive & aerospace",
    description:
      "Use bounded control artifacts to expose thresholds, fallback logic, and review state before wider safety and release programs take over.",
  },
  {
    icon: Building2,
    title: "Government & defense",
    description:
      "Keep source and deployment posture explicit for teams that need air-gapped or controlled environments and review-ready evidence artifacts.",
  },
] as const;

const standards = [
  "SOC2 processing integrity and change-control review",
  "PCI-DSS secure development and audit-trail workflows",
  "HIPAA processing-logic review posture",
  "ISO 27001 change-control and evidence mapping",
  "ISO 26262 / DO-178C software review handoff",
  "NIST and regulated-program evidence packaging",
] as const;

const handoffRoutes = [
  {
    title: "Architecture review",
    body: "Discuss deployment scope, control-point design, identity integration, and rollout constraints.",
    action: "enterprise@brik64.com",
    href: "mailto:enterprise@brik64.com",
  },
  {
    title: "Compliance route",
    body: "Use the compliance page when the conversation is about evidence mapping and standards boundary language.",
    action: "Read compliance",
    href: "/compliance",
  },
  {
    title: "Platform route",
    body: "Use the platform page when the conversation is about registry, publication, and reusable review objects.",
    action: "Open platform",
    href: "/platform",
  },
] as const;

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <section className="border-b border-border bg-gradient-to-b from-teal/[0.10] via-background to-background">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Enterprise
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Operating model for{" "}
              <span className="text-teal">review-heavy engineering teams.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              Enterprise adoption is about identity controls, deployment posture, CI/CD gates, and evidence artifacts that
              survive audit and release review. It is not a blanket compliance or certification claim.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Identity
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">SSO + SCIM</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Centralize access and user lifecycle without losing the software review boundary.
                </p>
              </div>
              <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Evidence
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Traceable artifacts</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Verification state, hashes, and review decisions remain visible as they move through delivery workflow.
                </p>
              </div>
              <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Boundary
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Qualified claims</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  BRIK-64 supports audit and review workflows; it does not certify organizations by itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] CAPABILITIES
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Enterprise-grade review controls
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="border border-border bg-muted/10 p-6">
                <item.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] WORKFLOW
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            How enterprise rollout should move
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
              <article key={step.label} className="border border-border bg-muted/10 p-6 text-center">
                <div className="text-3xl font-bold text-teal">{step.label}</div>
                <h3 className="mt-3 text-sm font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] USE CASES
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Regulated-domain workflows
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {useCases.map((item) => (
              <article key={item.title} className="border border-border bg-muted/10 p-6">
                <item.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] COMPLIANCE
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Standards mapping and claim boundary
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {standards.map((standard) => (
              <span key={standard} className="border border-border bg-muted/20 px-4 py-2.5 text-sm font-medium">
                {standard}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            Enterprise language stays narrow on purpose. BRIK-64 can emit evidence artifacts for software logic and change
            review. Infrastructure, organizational, procedural, and legal controls require separate evidence and separate approval.
          </p>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18"
        >
          <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] ENTERPRISE HANDOFF
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Request architecture review
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            The next step is an operational scoping conversation: deployment posture, identity integration, workflow shape,
            and the exact evidence object your team needs to carry forward.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {handoffRoutes.map((item) => {
              const external = item.href.startsWith("mailto:");
              return external ? (
                <a
                  key={item.title}
                  href={item.href}
                  className="border border-border bg-muted/10 p-5 text-left transition-colors hover:border-teal/40 hover:bg-teal/[0.03]"
                >
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal">
                    {item.action} <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </a>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="border border-border bg-muted/10 p-5 text-left transition-colors hover:border-teal/40 hover:bg-teal/[0.03]"
                >
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal">
                    {item.action} <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:enterprise@brik64.com"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <Mail className="h-4 w-4" /> enterprise@brik64.com
            </a>
            <Link
              href="/compliance"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Read compliance <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
