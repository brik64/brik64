export type NavItem = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type FooterGroup = {
  title: string;
  links: NavItem[];
};

export type MenuCardIcon =
  | "sparkles"
  | "workflow"
  | "layers"
  | "terminal"
  | "file"
  | "boxes"
  | "cpu"
  | "shield"
  | "building"
  | "badge";

export type MenuCardItem = {
  label: string;
  href: string;
  description: string;
  icon: MenuCardIcon;
  external?: boolean;
};

export type PrimaryNavItem =
  | { label: "Product"; kind: "dropdown" }
  | { label: "Industries"; kind: "dropdown" }
  | { label: "Pricing"; kind: "link"; href: string }
  | { label: "Blog"; kind: "link"; href: string }
  | { label: "Shop"; kind: "link"; href: string }
  | { label: "Docs"; kind: "link"; href: string; external: true };

export const socialLinks = {
  discord: "https://discord.gg/brik64",
  githubOrg: "https://github.com/brik64",
  githubRepo: "https://github.com/brik64/brik64",
  x: "https://x.com/brik64com",
  linkedin: "https://www.linkedin.com/company/brik64/",
  youtube: "https://www.youtube.com/@brik64",
} as const;



export const primaryNav = [
  {
    label: "Product",
    kind: "dropdown",
  },
  {
    label: "Industries",
    kind: "dropdown",
  },
  {
    label: "Pricing",
    kind: "link",
    href: "/pricing",
  },
  {
    label: "Blog",
    kind: "link",
    href: "/blog",
  },
  {
    label: "Shop",
    kind: "link",
    href: "/shop",
  },
  {
    label: "Docs",
    kind: "link",
    href: "https://docs.brik64.dev",
    external: true,
  },
] as const satisfies readonly PrimaryNavItem[];

export const productDropdownItems = [
  {
    label: "Overview",
    href: "/features",
    description: "What BRIK64 is, why the formal layer matters, and how the system reads like hardware.",
    icon: "sparkles",
  },
  {
    label: "Workflow",
    href: "/foundations",
    description: "Lift, model, check, emit, publish as one visible chain.",
    icon: "workflow",
  },
  {
    label: "Platform",
    href: "/platform",
    description: "Publication, discovery, review state, governance, and reuse.",
    icon: "layers",
  },
  {
    label: "CLI",
    href: "/cli",
    description: "Install path, commands, and the verification entry point.",
    icon: "terminal",
  },
  {
    label: "PCD",
    href: "/pcd",
    description: "Canonical format, domains, operators, and closure.",
    icon: "file",
  },
  {
    label: "Developer Stack",
    href: "/sdks",
    description: "Registry, SDKs, Lifter, and Transpiler in one toolchain surface.",
    icon: "boxes",
  },
] as const satisfies readonly MenuCardItem[];

export const industryDropdownItems = [
  {
    label: "Aerospace & Defense",
    href: "/industries/aerospace",
    description: "DO-178C evidence, mission-critical certification",
    icon: "building",
  },
  {
    label: "Healthcare",
    href: "/industries/healthcare",
    description: "IEC 62304 evidence, medical device software",
    icon: "layers",
  },
  {
    label: "Banking & Finance",
    href: "/industries/finance",
    description: "MiFID II, SOC2, SOX compliance evidence",
    icon: "shield",
  },
  {
    label: "Automotive",
    href: "/industries/automotive",
    description: "ISO 26262 ASIL D, autonomous vehicle safety",
    icon: "shield",
  },
  {
    label: "AI & Machine Learning",
    href: "/industries/ai",
    description: "Policy circuits, guardrails, and external verification loops",
    icon: "cpu",
  },
  {
    label: "Engineering",
    href: "/industries/engineering",
    description: "IEC 61508, structural analysis, control systems",
    icon: "layers",
  },
  {
    label: "Science & Research",
    href: "/industries/science",
    description: "Verified algorithms, domain constraints",
    icon: "badge",
  },
  {
    label: "Government",
    href: "/industries/government",
    description: "FedRAMP evidence, classified system verification",
    icon: "building",
  },
] as const satisfies readonly MenuCardItem[];

export const footerGroups = [
  {
    title: "Product",
    links: [...productDropdownItems],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Shop", href: "/shop" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Sales", href: "/contact-sales" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      { label: "Legal", href: "/legal" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "DPA", href: "/dpa" },
      { label: "Subprocessors List", href: "/subprocessors" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Business Information", href: "/business-information" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "https://docs.brik64.dev", external: true },
      { label: "Changelog", href: "/changelog" },
      { label: "Support", href: "/support" },
      { label: "Community Guides", href: "/community-guides" },
      { label: "PostgreSQL Tutorial", href: "/postgresql-tutorial" },
      { label: "Startups", href: "/startups" },
    ],
  },
] as const satisfies readonly FooterGroup[];
