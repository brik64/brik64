"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  GitBranch,
  FileCheck,
  BadgeCheck,
  KeyRound,
  ClipboardList,
  Clock,
  Building2,
  HeartPulse,
  Car,
  Landmark,
  ArrowRight,
  Mail,
} from "lucide-react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ── Feature cards ── */

const features = [
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description:
      "GitHub Actions, GitLab CI, and Jenkins plugins. Add verification gates so bounded checks are visible before deployment decisions.",
  },
  {
    icon: FileCheck,
    title: "Compliance Reports",
    description:
      "Processing logic and change control evidence mapped to SOC2 (PI1.x, CC8.1), PCI-DSS (Req 6, 10), HIPAA processing rules, and ISO 27001 change control. Certification hashes create an immutable audit trail tied to every deployment.",
  },
  {
    icon: BadgeCheck,
    title: "Certification Badges",
    description:
      "White-label embeddable badges tied to verification status and review workflows. API-connected and enterprise-configurable.",
  },
  {
    icon: KeyRound,
    title: "SSO / SAML / OIDC",
    description:
      "Single sign-on with your identity provider and SCIM provisioning for automated user lifecycle management.",
  },
  {
    icon: ClipboardList,
    title: "Audit Trail",
    description:
      "Every certification, every deployment, every user action logged with tamper-proof timestamps. Exportable for regulatory review.",
  },
  {
    icon: Clock,
    title: "SLA & Dedicated Support",
    description:
      "SLA options and dedicated support paths. Deployment options include on-premise posture for air-gapped environments.",
  },
];

/* ── Use cases ── */

const useCases = [
  {
    icon: Landmark,
    title: "Banking & Fintech",
    description:
      "Migrate COBOL mainframe logic to modern targets through lift-check-build workflows with explicit equivalence review boundaries.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "HIPAA-context processing logic evidence for medical software workflows. Infrastructure and access controls require separate evidence programs.",
  },
  {
    icon: Car,
    title: "Automotive & Aerospace",
    description:
      "ISO 26262 and DO-178C contexts supported through bounded software evidence and review-ready outputs from PCD workflows.",
  },
  {
    icon: Building2,
    title: "Government & Defense",
    description:
      "Air-gapped on-premise deployment options and exportable audit trails for NIST and FedRAMP-oriented assessment workflows.",
  },
];

/* ── Compliance standards ── */

const standards = [
  "SOC2 Processing Integrity (PI1.x, CC8.1)",
  "HIPAA processing logic evidence",
  "PCI-DSS Req 6, 10 (secure dev + audit trail)",
  "ISO 27001 change control evidence",
  "ISO 26262 / DO-178C processing evidence",
  "MiFID II Art. 17 (algo trading controls)",
  "SOX Sec 404 (internal controls on calculations)",
];

/* ── Page ── */

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Enterprise
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Built for <span className="text-teal">regulated industries.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Fintech. Healthcare. Automotive. Government. &ldquo;Tests pass&rdquo; is not enough.
              <PhiC /> = 1 indicates closure on the modeled circuit. Compliance posture is supported with review-ready evidence, not automatic program certification.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
              >
                Talk to Us
              </a>
              <a
                href="/pricing"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
              >
                See pricing <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] CAPABILITIES
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Enterprise-grade verification
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="border border-border bg-muted/10 p-6">
                <f.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-sm font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] USE CASES
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Trusted across industries
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {useCases.map((uc) => (
              <div key={uc.title} className="border border-border bg-muted/10 p-6">
                <uc.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-sm font-bold">{uc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{uc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance standards */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] COMPLIANCE
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Standards we generate evidence for
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {standards.map((s) => (
              <span
                key={s}
                className="border border-border bg-muted/20 px-4 py-2.5 text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed">
            BRIK64 generates verification evidence for processing logic and change control.
            Infrastructure, organizational, and procedural controls require separate evidence.
            The verification flow supports processing-integrity review and reduces manual evidence collection overhead.
          </p>
        </section>

        {/* Contact form placeholder */}
        <section
          id="contact"
          className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18"
        >
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] GET IN TOUCH
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Request a demo
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed">
            Tell us about your team and we&rsquo;ll schedule a personalized walkthrough of
            BRIK64 Enterprise.
          </p>
          <div className="mx-auto mt-10 max-w-lg space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                className="border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
              />
              <input
                type="email"
                placeholder="Work email"
                className="border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="w-full rounded-md border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
            />
            <textarea
              placeholder="Tell us about your use case"
              rows={4}
              className="w-full rounded-md border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none resize-none"
            />
            <button className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover">
              <Mail className="h-4 w-4" /> Request Demo
            </button>
          </div>
          <p className="mx-auto mt-6 max-w-lg text-xs text-muted-foreground">
            Or email us directly at{" "}
            <a href="mailto:enterprise@brik64.com" className="text-teal hover:underline">
              enterprise@brik64.com
            </a>
          </p>
        </section>
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
