"use client";

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
import { EvidenceSurface, PageSectionHeader } from "@/components/PageArtifacts";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ── Contact cards ── */

const contacts = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about BRIK64, PCD, or Digital Circuitality.",
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
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Contact
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Get in <span className="text-teal">touch.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Building with BRIK64? Have a question? Found a bug? We respond fast.
            </p>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 lg:px-16">
          <PageSectionHeader
            eyebrow="Contact Surface"
            title="The contact page now declares scope before dropping the user into cards and form fields."
            description="Email channels, community links, and support routes stay visible, but they now sit under one explicit service surface instead of feeling like disconnected boxes."
          />
          <div className="mx-auto mt-10 max-w-5xl">
            <EvidenceSurface
              eyebrow="Contact Scope"
              title="Where each request should go"
              description="This block reduces ambiguity before the user reaches the individual cards."
              items={[
                { label: "General inquiries", body: "Use the general route for product questions, architecture clarifications, and initial contact." },
                { label: "Enterprise route", body: "Route deployment, compliance, and commercial conversations to the enterprise channel instead of mixing them with product support." },
                { label: "Support + bugs", body: "Operational issues and bug reports should go through support or GitHub so they stay traceable." },
              ]}
            />
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
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
