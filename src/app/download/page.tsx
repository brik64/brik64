"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TextReveal } from "@/components/ui/pixel-perfect/text-reveal";
import { TextGradient } from "@/components/ui/pixel-perfect/text-gradient";
import { StripeButton } from "@/components/ui/pixel-perfect/stripe-button";
import { AnimatedCard } from "@/components/ui/pixel-perfect/animated-card";
import { Crosshair } from "@/components/ui/pixel-perfect/crosshair";
import {
  Terminal,
  Cpu,
  Download,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { AppleIcon, WindowsIcon, LinuxIcon } from "@/components/icons/os-icons";
import { PythonIcon, RustIcon, JavaScriptIcon, GoIcon } from "@/components/icons/lang-icons";
import type { ComponentType } from "react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false },
);

/* ── Download categories ── */

const cliDownloads = [
  { os: "macOS", arch: "Apple Silicon (ARM64)", file: "brikc-darwin-arm64", Icon: AppleIcon, primary: true },
  { os: "macOS", arch: "Intel (x86_64)", file: "brikc-darwin-x64", Icon: AppleIcon, primary: false },
  { os: "Linux", arch: "x86_64", file: "brikc-linux-x64", Icon: LinuxIcon, primary: true },
  { os: "Linux", arch: "ARM64", file: "brikc-linux-arm64", Icon: LinuxIcon, primary: false },
  { os: "Windows", arch: "x86_64", file: "brikc-win-x64.exe", Icon: WindowsIcon, primary: true },
  { os: "Windows", arch: "ARM64", file: "brikc-win-arm64.exe", Icon: WindowsIcon, primary: false },
];

const platformApps = [
  {
    os: "macOS",
    format: ".dmg",
    desc: "Universal binary — Apple Silicon & Intel",
    file: "BRIK64-Platform.dmg",
    Icon: AppleIcon,
    available: false,
  },
  {
    os: "Windows",
    format: ".exe",
    desc: "Windows 10+ installer",
    file: "BRIK64-Platform-Setup.exe",
    Icon: WindowsIcon,
    available: false,
  },
  {
    os: "Linux",
    format: ".AppImage",
    desc: "Universal Linux package",
    file: "BRIK64-Platform.AppImage",
    Icon: LinuxIcon,
    available: false,
  },
];

const sdkPackages: { lang: string; cmd: string; pkg: string; registry: string; Icon: ComponentType<{ className?: string }> }[] = [
  { lang: "Python", cmd: "pip install brik64", pkg: "brik64", registry: "PyPI", Icon: PythonIcon },
  { lang: "Rust", cmd: "cargo add brik64", pkg: "brik64", registry: "crates.io", Icon: RustIcon },
  { lang: "JavaScript", cmd: "npm install brik64", pkg: "brik64", registry: "npm", Icon: JavaScriptIcon },
  { lang: "Go", cmd: "go get github.com/brik64/brik64-go", pkg: "brik64-go", registry: "pkg.go.dev", Icon: GoIcon },
];

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          {/* Hero */}
          <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
            <HeroWireframe />
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
              <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                Download
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <TextReveal>Get</TextReveal>{" "}
                <TextGradient className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  BRIK64.
                </TextGradient>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                CLI, compiler, SDKs, and desktop app. Everything you need to
                write, verify, and ship certified code.
              </p>
            </div>
          </section>

          {/* ── CLI ── */}
          <section className="border-b border-border px-6 py-16 md:px-12 lg:px-18">
            <div className="flex items-center gap-3 mb-10">
              <Crosshair size={20} />
              <p className="text-xs font-medium tracking-[2px] text-muted-foreground">
                [01] · CLI
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  <TextReveal>brikc — One binary. Zero dependencies.</TextReveal>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  708 KB. Installs in 30 seconds. Compiles itself to an
                  identical hash — that&apos;s the proof it works.
                </p>

                {/* Quick install */}
                <div className="mt-6 rounded-lg border border-border bg-[#0a0e14] p-4">
                  <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
                    <Terminal className="h-3.5 w-3.5" />
                    Quick install
                  </div>
                  <code className="block font-mono text-sm text-emerald-400">
                    curl -fsSL https://get.brik64.dev | sh
                  </code>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Self-compiling</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> 128 monomers</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> 14 targets</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Formal proofs</span>
                </div>
              </div>

              {/* Download grid */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {cliDownloads.map((d) => (
                  <div
                    key={d.file}
                    className={`flex items-center justify-between rounded-lg border p-4 transition-colors hover:border-teal/30 ${
                      d.primary ? "border-border bg-background" : "border-border/50 bg-secondary/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <d.Icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{d.os}</p>
                        <p className="text-[10px] text-muted-foreground">{d.arch}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 rounded-md bg-teal px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-teal-hover">
                      <Download className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Compiler ── */}
          <section className="border-b border-border px-6 py-16 md:px-12 lg:px-18">
            <div className="flex items-center gap-3 mb-10">
              <Crosshair size={20} />
              <p className="text-xs font-medium tracking-[2px] text-muted-foreground">
                [02] · COMPILER
              </p>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              <TextReveal>The compiler that proves itself.</TextReveal>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              The BRIK64 compiler is bundled with the CLI. It verifies every
              program, generates formal proofs, and emits certified binaries to
              14 target languages. No separate install needed.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { v: "708 KB", l: "Binary size" },
                { v: "128", l: "Operations" },
                { v: "14", l: "Target languages" },
                { v: "Φ_c = 1", l: "Self-certified" },
              ].map((s) => (
                <div key={s.l} className="border border-border bg-muted/20 p-4 text-center">
                  <div className="text-xl font-bold text-teal">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SDKs ── */}
          <section className="border-b border-border px-6 py-16 md:px-12 lg:px-18">
            <div className="flex items-center gap-3 mb-10">
              <Crosshair size={20} />
              <p className="text-xs font-medium tracking-[2px] text-muted-foreground">
                [03] · SDKs & LIBRARIES
              </p>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              <TextReveal>Use BRIK64 in your language.</TextReveal>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Native libraries for Python, Rust, JavaScript, and Go. Import
              verified monomers directly into your existing codebase.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sdkPackages.map((sdk) => (
                <AnimatedCard key={sdk.lang}>
                  <div className="flex items-center gap-2 mb-3">
                    <sdk.Icon className="h-4 w-4 text-foreground" />
                    <span className="text-sm font-semibold">{sdk.lang}</span>
                    <span className="ml-auto text-[9px] text-muted-foreground">
                      {sdk.registry}
                    </span>
                  </div>
                  <div className="rounded-md bg-[#0a0e14] px-3 py-2">
                    <code className="font-mono text-xs text-emerald-400">
                      {sdk.cmd}
                    </code>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* ── Desktop App ── */}
          <section className="border-b border-border px-6 py-16 md:px-12 lg:px-18">
            <div className="flex items-center gap-3 mb-10">
              <Crosshair size={20} />
              <p className="text-xs font-medium tracking-[2px] text-muted-foreground">
                [04] · DESKTOP APP
              </p>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              <TextReveal>The platform, on your machine.</TextReveal>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Forge, compose, and verify circuits locally. The desktop app
              brings the full platform experience to macOS, Windows, and Linux.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {platformApps.map((app) => {
                const Icon = app.Icon;
                return (
                  <div
                    key={app.os}
                    className="relative overflow-hidden rounded-xl border border-border p-6 transition-colors hover:border-teal/30"
                  >
                    {!app.available && (
                      <span className="absolute top-3 right-3 rounded-full bg-gold/10 px-2 py-0.5 text-[9px] font-bold text-gold">
                        Coming Soon
                      </span>
                    )}
                    <Icon className="mb-4 h-8 w-8 text-teal" />
                    <h3 className="text-lg font-semibold">{app.os}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {app.desc}
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-muted-foreground/50">
                      {app.file}
                    </p>
                    <button
                      disabled={!app.available}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-border bg-muted/20 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Download className="h-4 w-4" />
                      {app.available ? `Download ${app.format}` : "Notify me"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="px-6 py-20 text-center md:px-12 lg:px-18">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Ready to build?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Start with the CLI — it&apos;s free forever. Upgrade to the
              platform when your team needs more.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <StripeButton className="h-12 px-8 text-base">
                Install CLI — free
              </StripeButton>
              <a
                href="/platform"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-teal"
              >
                Explore the platform <ExternalLink className="h-3.5 w-3.5" />
              </a>
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
