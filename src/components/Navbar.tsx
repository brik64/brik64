"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeCheck,
  Building2,
  ChevronDown,
  Cpu,
  ArrowUpRight,
  FileCode,
  Layers3,
  Menu,
  Shield,
  Sparkles,
  TerminalSquare,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";

import {
  DiscordMark,
  GitHubStarBadge,
  SocialIconLink,
} from "@/components/vnext/primitives";
import { githubStarsSnapshot } from "@/lib/github-stars-snapshot";
import {
  industryDropdownItems,
  primaryNav,
  productDropdownItems,
  socialLinks,
  type MenuCardIcon,
  type MenuCardItem,
} from "@/lib/site-config";

type MenuGroup = {
  title: string;
  items: readonly MenuCardItem[];
};

type PrimaryLinkItem = Extract<(typeof primaryNav)[number], { kind: "link" }> & {
  external?: boolean;
};
type DropdownKey = "product" | "industries";

const productGroups: MenuGroup[] = [
  {
    title: "Core",
    items: productDropdownItems.slice(0, 3),
  },
  {
    title: "Tooling",
    items: productDropdownItems.slice(3),
  },
];

const industryGroups: MenuGroup[] = [
  {
    title: "Industries",
    items: industryDropdownItems.slice(0, 4),
  },
  {
    title: "Systems",
    items: industryDropdownItems.slice(4),
  },
];

function navIcon(icon: MenuCardIcon) {
  const className = "h-5 w-5";

  switch (icon) {
    case "sparkles":
      return <Sparkles className={className} />;
    case "workflow":
      return <Workflow className={className} />;
    case "layers":
      return <Layers3 className={className} />;
    case "terminal":
      return <TerminalSquare className={className} />;
    case "file":
      return <FileCode className={className} />;
    case "boxes":
      return <Layers3 className={className} />;
    case "cpu":
      return <Cpu className={className} />;
    case "shield":
      return <Shield className={className} />;
    case "building":
      return <Building2 className={className} />;
    case "badge":
      return <BadgeCheck className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

function MenuCard({
  item,
  mobile = false,
  onClick,
}: {
  item: MenuCardItem;
  mobile?: boolean;
  onClick?: () => void;
}) {
  const shared =
    "group flex items-start gap-4 transition-colors hover:bg-neutral-800/70";
  const mobileCard = "rounded-[12px] border border-neutral-800 bg-neutral-900/70 p-3";
  const desktopCard = "rounded-lg p-3";
  const cardClassName = `${shared} ${mobile ? mobileCard : desktopCard}`;

  const content = (
    <>
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-700 text-neutral-400 transition-colors group-hover:bg-[color:var(--accent)] group-hover:text-black">
        {navIcon(item.icon)}
      </div>
      <div className="min-w-0">
        <p className="relative mb-0.5 inline-block text-sm font-medium text-white transition-all duration-200 group-hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-200 after:opacity-80 group-hover:after:w-full">
          {item.label}
        </p>
        <p className="text-sm leading-6 text-neutral-400 transition-colors group-hover:text-neutral-200">
          {item.description}
        </p>
      </div>
    </>
  );

  return item.external ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cardClassName}
    >
      {content}
    </a>
  ) : (
    <Link href={item.href} onClick={onClick} className={cardClassName}>
      {content}
    </Link>
  );
}

function MenuGroupColumn({ group, mobile = false }: { group: MenuGroup; mobile?: boolean }) {
  return (
    <div className="space-y-4">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400">
        {group.title}
      </p>
      <div className={mobile ? "space-y-3" : "space-y-2.5"}>
        {group.items.map((item) => (
          <MenuCard key={item.label} item={item} mobile={mobile} />
        ))}
      </div>
    </div>
  );
}

function DropdownPanel({
  groups,
  active,
}: {
  groups: MenuGroup[];
  active: boolean;
}) {
  return (
    <div
      className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
        active
          ? "visible pointer-events-auto opacity-100 translate-y-0"
          : "invisible pointer-events-none opacity-0 -translate-y-2"
      }`}
    >
      <div className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="grid w-[calc(100vw-2rem)] max-w-[920px] grid-cols-1 bg-neutral-900 lg:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="border-neutral-800 p-5 lg:border-r lg:last:border-r-0">
              <MenuGroupColumn group={group} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DropdownTrigger({
  label,
  active,
  isOpen,
}: {
  label: string;
  active?: boolean;
  isOpen?: boolean;
}) {
  return (
    <button
      type="button"
      className={`relative flex items-center gap-1 text-sm font-medium transition-all duration-200 select-none ${
        active || isOpen
          ? "text-white opacity-100"
          : "text-white opacity-95 hover:opacity-100 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.5)]"
      } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-200 after:opacity-80 hover:after:w-full`}
      aria-haspopup="menu"
    >
      <span>{label}</span>
      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
  );
}

function SimpleNavLink({
  href,
  label,
  active,
  onClick,
  external,
}: {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  external?: boolean;
}) {
  const className = `text-sm font-medium transition-all duration-200 ${
    active
      ? "text-white opacity-100"
      : "text-white opacity-95 hover:opacity-100 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.5)]"
  } relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-200 after:opacity-80 hover:after:w-full`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`${className} inline-flex items-center gap-1.5`}
      >
        {label}
        <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={className}
    >
      {label}
    </Link>
  );
}

function MobileSection({
  title,
  items,
  onItemClick,
}: {
  title: string;
  items: readonly MenuCardItem[];
  onItemClick?: () => void;
}) {
  return (
    <details className="group rounded-xl border border-neutral-800 bg-neutral-900/70">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-white/92 [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="border-t border-neutral-800 p-4">
        <div className="space-y-3">
          {items.map((item) => (
            <MenuCard key={item.label} item={item} mobile onClick={onItemClick} />
          ))}
        </div>
      </div>
    </details>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const pathname = usePathname();
  const topLevelLinks = primaryNav.filter((item): item is PrimaryLinkItem => item.kind === "link");
  const closeDropdowns = () => setActiveDropdown(null);

  const isProductActive =
    pathname === "/" ||
    pathname === "/platform" ||
    pathname === "/registry" ||
    pathname === "/cli" ||
    pathname === "/pcd" ||
    pathname === "/sdks" ||
    pathname === "/foundations";

  const isIndustriesActive =
    pathname === "/ai" ||
    pathname === "/industries/engineering" ||
    pathname === "/safety-critical" ||
    pathname === "/compliance" ||
    pathname === "/enterprise";

  return (
    <header className="sticky top-0 z-50 h-16 bg-[#0f0f0f]">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between pl-4 pr-6 md:pl-2">
        <div className="flex items-center gap-1">
          <div className="p-1.5 md:p-0">
            <Link href="/" className="flex shrink-0 items-center gap-2 no-underline">
              <div className="relative inline-block h-[42px] w-[170px]">
                <Image
                  src="/brand/brik64-logo-primary-horizontal-white.svg"
                  alt="BRIK64"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          <nav
            className="ml-10 hidden items-center gap-12 lg:flex"
            onMouseLeave={closeDropdowns}
            onBlurCapture={(event) => {
              const nextTarget = event.relatedTarget as Node | null;
              if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
                closeDropdowns();
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                closeDropdowns();
              }
            }}
          >
            <div
              className="group relative"
              onMouseEnter={() => setActiveDropdown("product")}
              onFocusCapture={() => setActiveDropdown("product")}
            >
              <DropdownTrigger 
                label="Product" 
                active={isProductActive} 
                isOpen={activeDropdown === "product"}
              />
              <DropdownPanel
                groups={productGroups}
                active={activeDropdown === "product"}
              />
            </div>

            <div
              className="group relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onFocusCapture={() => setActiveDropdown("industries")}
            >
              <DropdownTrigger
                label="Industries"
                active={isIndustriesActive}
                isOpen={activeDropdown === "industries"}
              />
              <DropdownPanel
                groups={industryGroups}
                active={activeDropdown === "industries"}
              />
            </div>

            {topLevelLinks.map((item) => (
              <SimpleNavLink
                key={item.label}
                href={item.href}
                label={item.label}
                active={pathname === item.href}
                external={"external" in item && Boolean(item.external)}
              />
            ))}
          </nav>
        </div>

        <div className="hidden items-center lg:flex">
          <SocialIconLink
            href={socialLinks.discord}
            label="Discord"
            variant="navbar"
            icon={<DiscordMark className="h-5 w-5" />}
          />
          <GitHubStarBadge href={socialLinks.githubRepo} stars={githubStarsSnapshot.stars} />
          <Link
            href="/login"
            className="ml-3 inline-flex h-8 items-center justify-center rounded px-4 text-sm font-semibold leading-5 text-[color:var(--accent-foreground)] bg-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent-hover)] font-display"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="ml-3 inline-flex h-8 items-center justify-center rounded border border-white bg-transparent px-4 text-sm font-semibold leading-5 text-white transition-colors hover:bg-white/[0.04] font-display"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="relative inline-flex h-6 w-6 items-center justify-center text-white transition-all duration-300 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/8 bg-[#0f0f0f] lg:hidden">
          <div className="mx-auto max-w-[1280px] space-y-5 px-6 py-6 md:px-8">
            <div className="space-y-3">
              <MobileSection title="Product" items={productDropdownItems} onItemClick={() => setOpen(false)} />
              <MobileSection title="Industries" items={industryDropdownItems} onItemClick={() => setOpen(false)} />
            </div>

            <div className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-900/70 p-4">
              {topLevelLinks.map((item) => (
                <SimpleNavLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  active={pathname === item.href}
                  external={"external" in item && Boolean(item.external)}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-neutral-800 pt-5">
              <SocialIconLink
                href={socialLinks.discord}
                label="Discord"
                variant="navbar"
                icon={<DiscordMark className="h-5 w-5" />}
              />
              <GitHubStarBadge href={socialLinks.githubRepo} stars={githubStarsSnapshot.stars} />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-[6px] bg-[color:var(--accent)] px-4 text-[14px] font-semibold text-[color:var(--accent-foreground)] transition-colors hover:bg-[color:var(--accent-hover)]"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-[6px] border border-white/18 bg-transparent px-4 text-[14px] font-medium text-white/88 transition-colors hover:bg-white/[0.04]"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
