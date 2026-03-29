"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, Terminal, Layers, ArrowUpDown, GitBranch, Box, Cpu, FileCode, Globe, ExternalLink, Brain, FlaskConical, Cog, Plane, Landmark, HeartPulse, Car, Building2, Shield, BookOpen, Zap, Ruler, CircuitBoard, CheckCircle2, Rocket, Code2, FileText, Sparkles } from "lucide-react";

/* ── Product Mega Menu data ── */

const productEndpoints = [
  { icon: FileCode, label: "Language", desc: "The .b64 language — range types, verified by design", href: "/language" },
  { icon: Terminal, label: "CLI", desc: "Single binary compiler — brikc", href: "/cli" },
  { icon: Globe, label: "Platform", desc: "Circuit laboratory — brik64.com", href: "/platform" },
  { icon: Layers, label: "Registry", desc: "Public verified component registry", href: "/registry" },
  { icon: ArrowUpDown, label: "Lifter", desc: "Reverse-compile any language to PCD", href: "/lifter" },
  { icon: GitBranch, label: "Transpiler", desc: "Certified paths between languages", href: "/transpiler" },
  { icon: Box, label: "SDKs", desc: "Rust, JavaScript, Python libraries", href: "/sdks" },
];

const productMore = [
  { icon: Cpu, label: "BPU", desc: "Hardware coprocessor — roadmap to silicon", href: "/bpu" },
  { icon: FileCode, label: "PCD Format", desc: "The blueprint standard for software", href: "/pcd" },
];

/* ── Industries Mega Menu data ── */

const industryItems = [
  { icon: Plane, label: "Aerospace & Defense", desc: "DO-178C evidence, mission-critical certification", href: "/safety-critical" },
  { icon: HeartPulse, label: "Healthcare", desc: "IEC 62304 evidence, medical device software", href: "/safety-critical" },
  { icon: Landmark, label: "Banking & Finance", desc: "MiFID II, SOC2, SOX compliance evidence", href: "/compliance" },
  { icon: Car, label: "Automotive", desc: "ISO 26262 ASIL D, autonomous vehicle safety", href: "/safety-critical" },
  { icon: Brain, label: "AI & Machine Learning", desc: "Policy circuits, guardrails, certified AI code", href: "/ai" },
  { icon: Cog, label: "Blockchain", desc: "Verified smart contracts, WASM, on-chain certificates", href: "/blockchain" },
  { icon: FlaskConical, label: "Science & Research", desc: "Verified algorithms, domain constraints", href: "/industries/science" },
  { icon: Building2, label: "Government", desc: "FedRAMP evidence, classified system verification", href: "/industries/government" },
];

/* ── Languages Mega Menu data ── */

const liftFromLanguages = [
  { label: "JavaScript", href: "/languages/javascript" },
  { label: "TypeScript", href: "/languages/typescript" },
  { label: "Python", href: "/languages/python" },
  { label: "Rust", href: "/languages/rust" },
  { label: "C", href: "/languages/c" },
  { label: "C++", href: "/languages/cpp" },
  { label: "Go", href: "/languages/go" },
  { label: "COBOL", href: "/languages/cobol" },
  { label: "PHP", href: "/languages/php" },
  { label: "Java", href: "/languages/java" },
];

const compileToLanguages = [
  { label: "Rust", href: "/languages/rust" },
  { label: "JavaScript", href: "/languages/javascript" },
  { label: "TypeScript", href: "/languages/typescript" },
  { label: "Python", href: "/languages/python" },
  { label: "C", href: "/languages/c" },
  { label: "C++", href: "/languages/cpp" },
  { label: "Go", href: "/languages/go" },
  { label: "COBOL", href: "/languages/cobol" },
  { label: "PHP", href: "/languages/php" },
  { label: "Java", href: "/languages/java" },
  { label: "Swift", href: "/languages/swift" },
  { label: "WASM", href: "/languages/wasm" },
  { label: "Native", href: "/languages/native" },
  { label: "BIR", href: "/languages/bir" },
];

/* ── Resources Mega Menu data ── */

const resourcesProducts = [
  { label: "Playground", href: "/playground" },
  { label: "CLI", href: "/cli" },
  { label: "Platform", href: "/platform" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/changelog" },
  { label: "PCD Format", href: "/pcd" },
];

const resourcesUseCases = [
  { label: "Compliance Evidence", href: "/compliance" },
  { label: "Blockchain", href: "/blockchain" },
  { label: "Safety-Critical", href: "/safety-critical" },
  { label: "AI-Verified Code", href: "/ai" },
  { label: "COBOL Migration", href: "/use-cases/cobol-migration" },
  { label: "Formal Verification", href: "/use-cases/formal-verification" },
];

const resourcesDocs: { label: string; href: string; external?: boolean }[] = [
  { label: "Foundations", href: "/foundations" },
  { label: "Getting started", href: "https://docs.brik64.dev", external: true },
  { label: "API Reference", href: "https://docs.brik64.dev/api", external: true },
  { label: "PCD Language Spec", href: "https://docs.brik64.dev/pcd", external: true },
  { label: "SDKs", href: "/sdks" },
  { label: "Examples", href: "https://docs.brik64.dev/pcd/examples", external: true },
];

const resourcesCompany: { label: string; href: string }[] = [
  { label: "Blog", href: "/blog" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
  { label: "AI Agents", href: "/ai-agents" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

/* ── Mega Dropdown Shell ── */

function MegaDropdown({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div ref={ref} className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background shadow-xl">
      <div className="mx-auto max-w-7xl px-6 py-6">
        {children}
      </div>
    </div>
  );
}

/* ── Product Dropdown Content ── */

function ProductDropdown() {
  return (
    <div className="grid grid-cols-[1fr_1fr_280px] gap-8">
      {/* Left — Core Products */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Core
        </p>
        <div className="space-y-0.5">
          {productEndpoints.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/50"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Center — More + Research */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Research & Hardware
        </p>
        <div className="space-y-0.5">
          {productMore.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/50"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-6 rounded-lg border border-border/60 bg-muted/20 p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Foundations
          </p>
          <p className="mt-2 text-sm font-medium text-foreground">
            Digital Circuitality
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            The information-theoretic basis. Brillouin correction. Kish-Ferry distinction.
          </p>
          <a
            href="/foundations"
            className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-teal transition-colors hover:text-teal-hover"
          >
            Read the theory <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Right — Featured */}
      <div className="rounded-xl border border-border/60 bg-muted/10 p-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600">
          Coming 2026
        </p>
        <p className="mt-3 text-lg font-semibold leading-snug text-foreground">
          The public registry for{" "}
          <span className="text-teal">verified software</span>
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Publish certified PCD circuits. Discover reusable components. Every one with a mathematical proof.
        </p>
        <a
          href="/platform"
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-teal transition-colors hover:text-teal-hover"
        >
          Learn about the platform <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

/* ── Industries Dropdown Content ── */

function IndustriesDropdown() {
  return (
    <div className="grid grid-cols-[1fr_1fr_280px] gap-8">
      {/* Left column — first 4 */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Technology
        </p>
        <div className="space-y-0.5">
          {industryItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/50"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Center column — last 4 */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Regulated
        </p>
        <div className="space-y-0.5">
          {industryItems.slice(4).map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/50"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Right — Enterprise CTA */}
      <div className="rounded-xl border border-border/60 bg-muted/10 p-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Enterprise
        </p>
        <p className="mt-3 text-lg font-semibold leading-snug text-foreground">
          Built for{" "}
          <span className="text-teal">regulated industries</span>
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          When &quot;tests pass&quot; isn&apos;t enough. CI/CD integration, compliance reports, certification badges, SSO, audit trail.
        </p>
        <a
          href="/enterprise"
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-teal transition-colors hover:text-teal-hover"
        >
          Enterprise solutions <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

/* ── Languages Dropdown Content ── */

function LanguagesDropdown() {
  return (
    <div className="grid grid-cols-[1fr_1fr_280px] gap-8">
      {/* Left — Lift From */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Lift From (10 languages)
        </p>
        <div className="space-y-0.5">
          {liftFromLanguages.map((item) => (
            <a
              key={item.href + "-lift"}
              href={item.href}
              className="flex flex-col gap-0.5 rounded-lg px-3 py-2 transition-colors hover:bg-muted/50"
            >
              <span className="text-sm font-medium text-foreground">{item.label}</span>
              <span className="text-xs text-muted-foreground">Lift to PCD blueprint</span>
            </a>
          ))}
        </div>
      </div>

      {/* Center — Compile To */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Compile To (14 targets)
        </p>
        <div className="space-y-0.5">
          {compileToLanguages.slice(0, 7).map((item) => (
            <a
              key={item.href + "-compile"}
              href={item.href}
              className="flex flex-col gap-0.5 rounded-lg px-3 py-2 transition-colors hover:bg-muted/50"
            >
              <span className="text-sm font-medium text-foreground">{item.label}</span>
              <span className="text-xs text-muted-foreground">Emit verified code</span>
            </a>
          ))}
          <p className="px-3 pt-1 text-xs text-muted-foreground">
            + {compileToLanguages.length - 7} more targets
          </p>
        </div>
      </div>

      {/* Right — Featured */}
      <div className="rounded-xl border border-border/60 bg-muted/10 p-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-teal">
          Universal IR
        </p>
        <p className="mt-3 text-lg font-semibold leading-snug text-foreground">
          Every language.{" "}
          <span className="text-teal">One blueprint.</span>
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          PCD is the universal intermediate representation. Lift from any source, compile to any target — with verified structure at every step.
        </p>
        <a
          href="/transpiler"
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-teal transition-colors hover:text-teal-hover"
        >
          Explore the transpiler <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

/* ── Resources Dropdown Content ── */

function FeaturesDropdown() {
  return (
    <div className="grid grid-cols-[1fr_1fr_280px] gap-8">
      {/* Left — Core Capabilities */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Core Capabilities
        </p>
        <div className="space-y-0.5">
          {[
            { icon: CheckCircle2, label: "Formal Verification", desc: "Mathematical proofs in Coq — not just tests", href: "/features" },
            { icon: Ruler, label: "Domain Constraints", desc: "Compiler-enforced numeric ranges on every input", href: "/features" },
            { icon: CircuitBoard, label: "Circuit Closure", desc: "Every input produces a verified output or explicit rejection", href: "/features" },
            { icon: Zap, label: "EVA Composition", desc: "Composing verified parts produces a verified whole", href: "/features" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/50"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Center — Developer Tools */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Developer Tools
        </p>
        <div className="space-y-0.5">
          {[
            { icon: Rocket, label: "Self-Compilation Fixpoint", desc: "Compiler compiles itself to a bit-identical binary", href: "/cli" },
            { icon: Code2, label: "Multi-Target Compilation", desc: "One PCD blueprint, multiple language outputs", href: "/transpiler" },
            { icon: ArrowUpDown, label: "Reverse Compilation", desc: "Lift existing code to verified PCD blueprints", href: "/lifter" },
            { icon: Sparkles, label: "AI-Native Design", desc: "A language designed for AI agent workflows", href: "/ai-agents" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/50"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Right — Featured card */}
      <div className="rounded-xl border border-border/60 bg-muted/10 p-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-teal">
          Deep Dive
        </p>
        <p className="mt-3 text-lg font-semibold leading-snug text-foreground">
          The complete{" "}
          <span className="text-teal">feature overview</span>
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Verification, domains, composition, lifting, transpilation, certification — everything BRIK-64 does, in one page.
        </p>
        <a
          href="/features"
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-teal transition-colors hover:text-teal-hover"
        >
          All features <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

function ResourcesDropdown() {
  return (
    <div className="grid grid-cols-[1fr_1fr_280px] gap-8">
      {/* Left — Use Cases */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Use Cases
        </p>
        <div className="space-y-0.5">
          {[
            { icon: Shield, label: "AI Safety", desc: "Policy circuits as guardrails for AI agents", href: "/use-cases/ai-safety" },
            { icon: FileCode, label: "COBOL Migration", desc: "Lift legacy code to verified blueprints", href: "/use-cases/cobol-migration" },
            { icon: GitBranch, label: "Universal Transpilation", desc: "Certified paths between languages", href: "/use-cases/universal-transpilation" },
            { icon: CheckCircle2, label: "Formal Verification", desc: "Mathematical proofs, not just tests", href: "/use-cases/formal-verification" },
            { icon: Zap, label: "CI/CD Integration", desc: "Verify on every push", href: "/use-cases/ci-cd-integration" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/50"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Center — Documentation */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Documentation
        </p>
        <div className="space-y-0.5">
          {[
            { icon: BookOpen, label: "Foundations", desc: "Information-theoretic basis of Digital Circuitality", href: "/foundations" },
            { icon: Rocket, label: "Getting Started", desc: "Install brikc and write your first circuit", href: "https://docs.brik64.dev", external: true },
            { icon: FileText, label: "API Reference", desc: "REST endpoints for the platform", href: "https://docs.brik64.dev/api", external: true },
            { icon: Code2, label: "PCD Language Spec", desc: "Complete syntax and domain reference", href: "https://docs.brik64.dev/pcd", external: true },
            { icon: Box, label: "SDK Guides", desc: "Rust, JavaScript, Python integration", href: "/sdks" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                {...("external" in item && item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/50"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    {"external" in item && item.external && <ExternalLink className="h-3 w-3 text-muted-foreground" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Right — Featured card */}
      <div className="rounded-xl border border-border/60 bg-muted/10 p-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Latest
        </p>
        <p className="mt-3 text-lg font-semibold leading-snug text-foreground">
          Stories from the{" "}
          <span className="text-teal">frontier</span>
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Thoughts on verification, composition, coherence, and the future
          of software that works like hardware.
        </p>
        <a
          href="/blog"
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-teal transition-colors hover:text-teal-hover"
        >
          Read the blog <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

/* ── Nav trigger button ── */

function NavTrigger({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex cursor-pointer items-center gap-1 text-sm transition-colors ${
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
      <ChevronDown
        className={`h-3.5 w-3.5 transition-transform duration-150 ${active ? "rotate-180" : ""}`}
      />
    </button>
  );
}

/* ── Navbar ── */

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggle = (name: string) =>
    setOpenMenu((prev) => (prev === name ? null : name));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-0.5">
          <span className="text-sm font-bold tracking-tight text-foreground">BRIK</span>
          <span className="text-sm font-bold tracking-tight text-[#00b8d4]">64</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          <NavTrigger label="Product" active={openMenu === "product"} onClick={() => toggle("product")} />
          <NavTrigger label="Industries" active={openMenu === "industries"} onClick={() => toggle("industries")} />
          <NavTrigger label="Features" active={openMenu === "features"} onClick={() => toggle("features")} />
          <a href="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Blog
          </a>
          <NavTrigger label="Resources" active={openMenu === "resources"} onClick={() => toggle("resources")} />
          <a href="https://docs.brik64.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
            Docs <ExternalLink className="h-3 w-3" />
          </a>
        </nav>

        {/* Right CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://github.com/brik64"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
          <a href="/login" className="rounded-md border border-teal px-5 py-1.5 text-sm font-medium text-teal transition-colors hover:bg-teal/5">
            Login
          </a>
          <a href="/signup" className="rounded-md bg-teal px-5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-teal-hover">
            Sign Up
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="p-2 text-foreground lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Desktop mega dropdowns */}
      <MegaDropdown open={openMenu === "product"} onClose={() => setOpenMenu(null)}>
        <ProductDropdown />
      </MegaDropdown>
      <MegaDropdown open={openMenu === "industries"} onClose={() => setOpenMenu(null)}>
        <IndustriesDropdown />
      </MegaDropdown>
      <MegaDropdown open={openMenu === "features"} onClose={() => setOpenMenu(null)}>
        <FeaturesDropdown />
      </MegaDropdown>
      <MegaDropdown open={openMenu === "resources"} onClose={() => setOpenMenu(null)}>
        <ResourcesDropdown />
      </MegaDropdown>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-b border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Product</p>
            {productEndpoints.concat(productMore).map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground">
                {item.label}
              </a>
            ))}
            <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Industries</p>
            {industryItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground">
                {item.label}
              </a>
            ))}
            <hr className="my-2 border-border" />
            <a href="/pricing" className="px-3 py-2 text-sm text-muted-foreground">Pricing</a>
            <a href="/blog" className="px-3 py-2 text-sm text-muted-foreground">Blog</a>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Resources</p>
            <a href="/playground" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground">Playground</a>
            <a href="/pricing" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground">Pricing</a>
            <a href="/changelog" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground">Changelog</a>
            <a href="/news" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground">News</a>
            <a href="/about" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground">About</a>
            <a href="/investors" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground">Investors</a>
            <a href="/contact" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground">Contact</a>
            <a href="https://docs.brik64.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground">
              Docs <ExternalLink className="h-3 w-3" />
            </a>
            <hr className="my-2 border-border" />
            <a href="/login" className="px-3 py-2 text-sm text-foreground">Login</a>
            <a href="/signup" className="mt-1 rounded-md bg-teal px-5 py-1.5 text-center text-sm font-medium text-white">Sign Up</a>
          </nav>
        </div>
      )}
    </header>
  );
}
