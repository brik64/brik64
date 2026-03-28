import { PhiC } from "@/components/PhiC";
import {
  FolderOpen,
  Globe,
  GitBranch,
  BadgeCheck,
  ArrowRight,
  Search,
} from "lucide-react";
import type { ReactNode } from "react";

interface FeatureCard {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: <FolderOpen className="h-5 w-5 text-teal" />,
    title: "Personal Library",
    description:
      "Your circuits, organized by project. Build, test, and recompose with real-time certification status.",
  },
  {
    icon: <Globe className="h-5 w-5 text-teal" />,
    title: "Public Registry",
    description:
      "A growing catalog of pre-certified circuits. Search, explore, and implement — never rewrite what's already proven.",
  },
  {
    icon: <GitBranch className="h-5 w-5 text-teal" />,
    title: "Visual Composition",
    description:
      "Drag, connect, compose. Every connection verified automatically through EVA algebra.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-teal" />,
    title: "Certification Badges",
    description:
      "Live proof embedded in your README. If the code changes one byte, the badge invalidates instantly.",
  },
];

interface CircuitRow {
  id: string;
  name: string;
  description: string;
  status: "certified" | "open";
  phiC: string;
  monomers: number;
}

const circuits: CircuitRow[] = [
  {
    id: "AUTH-FLOW-001",
    name: "OAuth2 Handler",
    description: "Authentication flow",
    status: "certified",
    phiC: "1",
    monomers: 12,
  },
  {
    id: "SORT-ALG-042",
    name: "Quicksort",
    description: "Sorting algorithm",
    status: "certified",
    phiC: "1",
    monomers: 8,
  },
  {
    id: "NET-API-017",
    name: "REST Client",
    description: "Network layer",
    status: "open",
    phiC: "0.87",
    monomers: 24,
  },
  {
    id: "CRYPTO-005",
    name: "JWT Validator",
    description: "Token verification",
    status: "certified",
    phiC: "1",
    monomers: 6,
  },
];

const sidebarItems = [
  { label: "EXPLORER", active: true },
  { label: "MY CIRCUITS", active: false },
  { label: "SHARED", active: false },
  { label: "PUBLIC REGISTRY", active: false },
  { label: "CERTIFY", active: false },
];

export function PlatformSection() {
  return (
    <section className="border-border border-t px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [03] · THE PLATFORM
        </p>

        <h3 className="text-2xl font-normal tracking-tight md:text-3xl">
          Where verified software lives.
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Publish PCD blueprints. Discover certified circuits. Compose and ship.
          Every component with a mathematical proof.
        </p>

        {/* Platform mockup */}
        <div className="mt-12 overflow-hidden border border-white/10 bg-[#0a0e14] shadow-2xl">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-0.5 text-xs tracking-widest">
              <span className="font-bold text-white/90">BRIK64.COM</span>
              <span className="text-white/30">&nbsp;/ LABORATORY</span>
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
          </div>

          {/* Body */}
          <div className="flex min-h-[340px]">
            {/* Sidebar */}
            <div className="hidden w-[140px] shrink-0 border-r border-white/10 py-3 sm:block">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className={`px-4 py-2 text-[10px] font-semibold tracking-widest ${
                    item.active
                      ? "border-l-2 border-teal text-teal"
                      : "border-l-2 border-transparent text-white/35 hover:text-white/50"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main */}
            <div className="flex flex-1 flex-col">
              {/* Search */}
              <div className="border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2.5 border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                  <Search className="h-3.5 w-3.5 text-white/25" />
                  <span className="text-xs text-white/25">
                    Search circuits...
                  </span>
                </div>
              </div>

              {/* Headers */}
              <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/8 px-5 py-2 text-[10px] font-semibold uppercase tracking-widest text-white/20 sm:grid-cols-[140px_1fr_auto]">
                <span>Circuit ID</span>
                <span className="hidden sm:block">Name</span>
                <span className="text-right">Details</span>
              </div>

              {/* Rows */}
              <div className="flex-1 divide-y divide-white/5">
                {circuits.map((c) => (
                  <div
                    key={c.id}
                    className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 text-xs transition-colors hover:bg-white/[0.02] sm:grid-cols-[140px_1fr_auto]"
                  >
                    <span className="font-mono text-[11px] font-semibold text-teal">
                      {c.id}
                    </span>
                    <div className="hidden sm:block">
                      <span className="font-semibold text-white/85">
                        {c.name}
                      </span>
                      <span className="ml-2 text-white/30">
                        {c.description}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-white/40">
                      {c.status === "certified" ? (
                        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-emerald-400">
                          CERTIFIED
                        </span>
                      ) : (
                        <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-amber-400">
                          OPEN
                        </span>
                      )}
                      <span className="text-[11px]">
                        <PhiC /> = {c.phiC}
                      </span>
                      <span className="hidden text-[11px] text-white/25 md:inline">
                        {c.monomers} monomers
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
                <span className="text-[10px] tracking-wide text-white/30">
                  PUBLIC · MINE · SHARED
                </span>
                <button className="rounded-md bg-teal px-3.5 py-1.5 text-[10px] font-semibold tracking-wide text-black transition-colors hover:bg-teal/80">
                  Publish Circuit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 pillar cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-border bg-background p-6 transition-colors hover:border-teal/30"
            >
              <div className="mb-3 flex items-center gap-2.5">
                {f.icon}
                <span className="text-sm font-semibold">{f.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Badge + CTA */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-medium text-amber-400">
            REGISTRY LAUNCHING 2026
          </span>
          <a
            href="https://brik64.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal/80"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
