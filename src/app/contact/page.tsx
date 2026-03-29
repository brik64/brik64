import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Building2,
  LifeBuoy,
  GitBranch as Github,
  MessageCircle,
  Bug,
} from "lucide-react";

/* ── Contact cards ── */

const contacts = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about BRIK-64, PCD, or Digital Circuitality.",
    action: "hello@brik64.com",
    href: "mailto:hello@brik64.com",
  },
  {
    icon: Building2,
    title: "Enterprise Sales",
    description: "SSO, compliance, on-premise, and custom deployments.",
    action: "enterprise@brik64.com",
    href: "mailto:enterprise@brik64.com",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "Technical issues, bug reports, and platform help.",
    action: "support@brik64.com",
    href: "mailto:support@brik64.com",
  },
];

const socials = [
  {
    icon: Github,
    title: "GitHub",
    description: "Source code, issues, and contributions.",
    action: "github.com/brik64",
    href: "https://github.com/brik64",
  },
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Community chat, support, and announcements.",
    action: "discord.gg/brik64",
    href: "https://discord.gg/brik64",
  },
  {
    icon: Bug,
    title: "Bug Reports",
    description: "Found an issue? Open a GitHub issue.",
    action: "github.com/brik64/brik64/issues",
    href: "https://github.com/brik64/brik64/issues",
  },
];

/* ── Page ── */

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Contact
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Get in <span className="text-[#00b8d4]">touch.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Whether you&rsquo;re exploring BRIK-64 for your team, reporting an issue, or just curious
              about Digital Circuitality &mdash; we&rsquo;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] EMAIL
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {contacts.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="group border border-border bg-muted/10 p-6 transition-colors hover:border-teal/30 hover:bg-teal/[0.04]"
              >
                <c.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-sm font-bold">{c.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.description}</p>
                <p className="mt-3 text-sm font-medium text-teal group-hover:underline">{c.action}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Social / Community */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] COMMUNITY
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {socials.map((s) => (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border bg-muted/10 p-6 transition-colors hover:border-teal/30 hover:bg-teal/[0.04]"
              >
                <s.icon className="mb-4 h-6 w-6 text-teal" />
                <h3 className="text-sm font-bold">{s.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                <p className="mt-3 text-sm font-medium text-teal group-hover:underline">{s.action}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact form */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] SEND A MESSAGE
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">Contact form</h2>
          <div className="mx-auto mt-10 max-w-lg space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Company (optional)"
              className="w-full rounded-md border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full rounded-md border border-border bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none resize-none"
            />
            <button className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover">
              <Mail className="h-4 w-4" /> Send Message
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
