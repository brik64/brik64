import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Command } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export type ActionTone = "primary" | "secondary" | "ghost" | "link";

const brandTokenPattern = /(BRIK-64|BRIK64)/g;

export function BrandWordmark({
  children = "BRIK64",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return <span className={cn("brand-wordmark", className)}>{children}</span>;
}

export function renderBrandText(text: string | ReactNode): ReactNode {
  if (typeof text !== "string") {
    return text;
  }
  const parts = text.split(brandTokenPattern);

  if (parts.length === 1) {
    return text;
  }

  return parts.map((part, index) =>
    part === "BRIK64" || part === "BRIK-64" ? (
      <BrandWordmark key={`${part}-${index}`}>{part}</BrandWordmark>
    ) : (
      part
    ),
  );
}

export function DiscordMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={cn("h-4 w-4 fill-current", className)}>
      <path d="M16.942 3.523a16.3 16.3 0 0 0-4.126-1.296c-.178.32-.386.753-.529 1.097a15.2 15.2 0 0 0-4.573 0 12 12 0 0 0-.535-1.097c-1.448.25-2.834.692-4.129 1.3C.44 7.471-.269 11.32.085 15.113a16.5 16.5 0 0 0 5.06 2.593q.613-.841 1.084-1.785a10.7 10.7 0 0 1-1.706-.83q.215-.16.418-.332c3.29 1.54 6.866 1.54 10.118 0q.206.171.418.331a10.6 10.6 0 0 1-1.71.833c.314.626.675 1.224 1.084 1.785a16.5 16.5 0 0 0 5.064-2.595c.415-4.398-.71-8.21-2.973-11.59M6.678 12.781c-.988 0-1.798-.922-1.798-2.046S5.672 8.69 6.678 8.69c1.005 0 1.815.922 1.798 2.047.001 1.123-.793 2.045-1.798 2.045m6.644 0c-.988 0-1.798-.922-1.798-2.046s.793-2.046 1.798-2.046c1.006 0 1.816.922 1.798 2.047 0 1.123-.792 2.045-1.798 2.045" />
    </svg>
  );
}

export function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={cn("h-4 w-4 fill-current", className)}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.22-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.06 0-1.12-.388-2.033-1.03-2.751.104-.26.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.4 9.4 0 0 0 10 4.958a9.4 9.4 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.37-.57.263-2.018.716-2.91-.85 0 0-.529-.986-1.533-1.058 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .27-.184.588-.683.493C2.865 18.627 0 14.782 0 10.252 0 4.59 4.478 0 10 0"
      />
    </svg>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground">{children}</div>;
}

export function ButtonVNext({
  href,
  children,
  tone = "secondary",
  external,
  className,
}: {
  href?: string;
  children: ReactNode;
  tone?: ActionTone;
  external?: boolean;
  className?: string;
}) {
  const shared =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const tones: Record<ActionTone, string> = {
    primary:
      "bg-primary text-primary-foreground hover:bg-[color:var(--accent-hover)] h-11 px-5",
    secondary:
      "border border-border bg-card text-foreground hover:border-[color:var(--accent-soft)] hover:bg-secondary h-11 px-5",
    ghost:
      "text-muted-foreground hover:bg-secondary hover:text-foreground h-11 px-4",
    link: "h-auto px-0 text-muted-foreground hover:text-foreground",
  };
  const content = (
    <>
      {children}
      {tone === "link" ? (external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />) : null}
    </>
  );

  if (!href) {
    return (
      <button
        type="button"
        className={cn(shared, tones[tone], className)}
      >
        {content}
      </button>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(shared, tones[tone], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(shared, tones[tone], className)}>
      {content}
    </Link>
  );
}

export function ChipVNext({
  children,
  variant = "neutral",
  className,
}: {
  children: ReactNode;
  variant?: "neutral" | "active" | "accent";
  className?: string;
}) {
  const variants = {
    neutral: "border-border bg-secondary text-muted-foreground",
    active: "border-[color:var(--accent-soft)] bg-card text-foreground",
    accent: "border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)] text-accent-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[14px] font-medium leading-none",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function AnnouncementPill({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  const className =
    "inline-flex items-center rounded-full border border-[color:var(--accent-soft)] bg-[#11161d] px-4 py-2 text-sm font-medium text-white/84 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-colors hover:border-[color:var(--accent)] hover:bg-[#141b24]";
  const content = <span>{children}</span>;

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export function CommandChip({ children }: { children: ReactNode }) {
  return (
    <ChipVNext variant="active" className="font-mono text-[13px] tracking-[-0.01em]">
      {children}
    </ChipVNext>
  );
}

export function SurfaceCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-card/95 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ProductFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_40px_120px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionRail({
  title,
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {title ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {title}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-2.5">{children}</div>
    </div>
  );
}

export function LogoRail({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-medium uppercase tracking-[0.18em] text-muted-foreground/90">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export function ToolRail({
  label,
}: {
  label: string;
}) {
  const logos = [
    { id: "rust", name: "Rust", ext: "png" },
    { id: "swift", name: "Swift" },
    { id: "cplusplus", name: "C++" },
    { id: "python", name: "Python" },
    { id: "go", name: "Go" },
    { id: "typescript", name: "TypeScript" },
    { id: "java", name: "Java" },
    { id: "webassembly", name: "WASM" },
    { id: "cobol", name: "COBOL" },
    { id: "php", name: "PHP" },
    { id: "javascript", name: "JavaScript" },
    { id: "c", name: "C" },
  ];

  const carouselItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="border-t border-white/8 bg-[#070b11]/92 overflow-hidden py-8">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row lg:items-center gap-10 lg:justify-between">
        <p className="text-sm font-bold uppercase tracking-widest text-white/30 shrink-0 whitespace-nowrap">
           {label}
        </p>
        
        <div className="relative flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div 
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{ x: [0, -1056] }}
            transition={{ 
              repeat: Infinity, 
              duration: 25, 
              ease: "linear" 
            }}
          >
            {carouselItems.map((logo, i) => (
              <div key={i} className="flex items-center transition-transform hover:scale-110 shrink-0">
                <img 
                  src={`/brands/${logo.id}.${(logo as any).ext || 'svg'}`} 
                  alt={logo.name} 
                  className="h-10 w-10 object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function StatBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/88">
      <span className="text-white/44">{label}</span>
      <span className="ml-2 font-medium text-white">{value}</span>
    </div>
  );
}

export function AuthAction({
  href,
  children,
  primary = false,
  className,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
  className?: string;
}) {
  return <ButtonVNext href={href} tone={primary ? "primary" : "ghost"} className={className}>{children}</ButtonVNext>;
}

export function SocialIconLink({
  href,
  label,
  icon,
  compact = false,
  variant = "default",
}: {
  href: string;
  label: string;
  icon: ReactNode;
  compact?: boolean;
  variant?: "default" | "navbar";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center transition-colors",
        variant === "navbar"
          ? "h-9 w-9 p-2 text-[#b4b4b4] hover:text-white"
          : "rounded-full border hover:border-[color:var(--accent-soft)] hover:text-foreground",
        compact
          ? "h-11 w-11 border-white/8 bg-transparent text-white/56 hover:bg-white/[0.04]"
          : variant === "navbar"
            ? ""
            : "h-[46px] w-[46px] border-border bg-card text-muted-foreground",
      )}
    >
      {icon}
    </a>
  );
}

export function GitHubStarBadge({ href, stars }: { href: string; stars: number }) {
  const displayStars = stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : String(stars);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`GitHub ${stars} stars`}
      className="inline-flex h-9 min-w-[70px] items-center justify-center gap-2 p-2 text-[14px] font-medium text-[#b4b4b4] transition-colors hover:text-white"
    >
      <GitHubMark className="h-5 w-5" />
      <span className="text-sm font-medium">{displayStars}</span>
    </a>
  );
}

export function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-5">
      <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/46">{renderBrandText(title)}</p>
      <div className="space-y-3.5">{children}</div>
    </div>
  );
}

export function FooterLinkGroup({ href, label, external }: { href: string; label: string; external?: boolean }) {
  const shared = "block text-[15px] font-medium leading-7 text-white/70 transition-colors hover:text-white";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={shared}>
      {label}
    </a>
  ) : (
    <Link href={href} className={shared}>
      {label}
    </Link>
  );
}

export function PageHeaderVNext({
  eyebrow,
  title,
  description,
  status,
  centered = false,
}: {
  eyebrow: string;
  title: string | ReactNode;
  description: string | ReactNode;
  status?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl space-y-4", centered && "mx-auto text-center")}>
      {status && <div className={cn("flex", centered && "justify-center")}>{status}</div>}
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{renderBrandText(eyebrow)}</p>
      <h2 className={cn("text-balance text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl", centered && "mx-auto")}>
        {renderBrandText(title)}
      </h2>
      <p className={cn("max-w-2xl text-xl leading-relaxed text-muted-foreground", centered && "mx-auto")}>
        {typeof description === "string" ? renderBrandText(description) : description}
      </p>
    </div>
  );
}

export function ProtagonistSurface({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return <section className={cn("relative isolate overflow-hidden", className)} id={id}>{children}</section>;
}

export function SupportingSurface({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return <section className={cn("border-t border-border bg-background", className)} id={id}>{children}</section>;
}

export function PillarCard({
  icon,
  title,
  description,
  href,
  actionLabel,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  actionLabel?: string;
}) {
  const content = (
    <div className="flex flex-col h-full">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)]/20 text-[color:var(--accent)] border border-[color:var(--accent-soft)]/30 group-hover:scale-110 group-hover:bg-[color:var(--accent-soft)] transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-medium tracking-tight text-white mb-3">{renderBrandText(title)}</h3>
      <p className="text-[15px] leading-relaxed text-white/50 mb-8 flex-grow">{description}</p>
      
      {actionLabel && (
        <div className="mt-auto pt-6">
          <ButtonVNext tone="primary" className="w-full text-xs font-bold uppercase tracking-widest pointer-events-none">
            {actionLabel}
          </ButtonVNext>
        </div>
      )}
    </div>
  );

  const className = "group block h-full rounded-[32px] border border-white/5 bg-[#05080c]/60 p-8 transition-all duration-300 hover:border-[color:var(--accent-soft)]/40 hover:bg-[#071019] hover:shadow-[0_24px_80px_rgba(0,0,0,0.3)] shadow-[0_12px_40px_rgba(0,0,0,0.12)]";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
