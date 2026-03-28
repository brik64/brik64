import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  Shield,
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

/* ── Feature cards ── */

const features = [
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description:
      "GitHub Actions, GitLab CI, and Jenkins plugins. Add certification gates to your pipeline \u2014 code that doesn\u2019t reach \u03A6_c = 1 never reaches production.",
  },
  {
    icon: FileCheck,
    title: "Compliance Reports",
    description:
      "Auto-generated evidence for SOC2, HIPAA, PCI-DSS, and ISO 27001. Certification hashes create an immutable audit trail tied to every deployment.",
  },
  {
    icon: BadgeCheck,
    title: "Certification Badges",
    description:
      "White-label embeddable badges that prove your code is certified. API-connected, real-time verification, subscription-locked for enterprise.",
  },
  {
    icon: KeyRound,
    title: "SSO / SAML / OIDC",
    description:
      "Single sign-on with your identity provider. SCIM provisioning for automated user lifecycle management. Zero friction for large teams.",
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
      "99.9% uptime SLA. Dedicated support engineer. On-premise deployment option for air-gapped environments.",
  },
];

/* ── Use cases ── */

const useCases = [
  {
    icon: Landmark,
    title: "Banking & Fintech",
    description:
      "Migrate COBOL mainframe logic to Go/Rust with mathematical proof of equivalence. $3T+ in daily transactions depend on legacy systems \u2014 modernize without risk.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "HIPAA-compliant certification for medical software. Every function that processes patient data carries a formal proof of correctness.",
  },
  {
    icon: Car,
    title: "Automotive & Aerospace",
    description:
      "ISO 26262 and DO-178C evidence generated automatically from certified PCD blueprints. Closure domains enforce physical safety bounds at compile time.",
  },
  {
    icon: Building2,
    title: "Government & Defense",
    description:
      "Air-gapped on-premise deployment. Audit trails exportable for NIST and FedRAMP compliance. Source code never leaves your network.",
  },
];

/* ── Compliance standards ── */

const standards = [
  "SOC2 Type II",
  "HIPAA",
  "PCI-DSS",
  "ISO 27001",
  "ISO 26262",
  "GDPR",
  "FedRAMP",
  "DO-178C",
];

/* ── Page ── */

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18">
          <span className="text-muted-foreground mb-5 inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
            Enterprise
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Built for <span className="text-teal">regulated industries.</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            Fintech. Healthcare. Automotive. Government. When &ldquo;tests pass&rdquo; isn&rsquo;t
            enough, <PhiC /> = 1 provides mathematical proof that your code is correct.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Request a Demo
            </a>
            <a
              href="/pricing"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              See pricing <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>

        {/* Feature cards */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] CAPABILITIES
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Enterprise-grade verification
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-lg border border-border bg-muted/10 p-6">
                <f.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-sm font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] USE CASES
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Trusted across industries
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-lg border border-border bg-muted/10 p-6">
                <uc.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-sm font-bold">{uc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{uc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance standards */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] COMPLIANCE
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Standards we help you meet
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {standards.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-border bg-muted/20 px-4 py-2.5 text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl text-sm leading-relaxed">
            Certification hashes, audit trails, and compliance reports are generated automatically
            from your PCD blueprints. No manual documentation \u2014 the math is the evidence.
          </p>
        </section>

        {/* Contact form placeholder */}
        <section
          id="contact"
          className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18"
        >
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] GET IN TOUCH
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Request a demo
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
            Tell us about your team and we&rsquo;ll schedule a personalized walkthrough of
            BRIK-64 Enterprise.
          </p>
          <div className="mt-10 max-w-lg space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                className="rounded-lg border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
              />
              <input
                type="email"
                placeholder="Work email"
                className="rounded-lg border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="w-full rounded-lg border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
            />
            <textarea
              placeholder="Tell us about your use case"
              rows={4}
              className="w-full rounded-lg border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none resize-none"
            />
            <button className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover">
              <Mail className="h-4 w-4" /> Request Demo
            </button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Or email us directly at{" "}
            <a href="mailto:enterprise@brik64.com" className="text-teal hover:underline">
              enterprise@brik64.com
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
