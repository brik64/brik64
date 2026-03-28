export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "launch",
    title: "Digital Circuitality Goes Public",
    excerpt:
      "Today marks the public debut of Digital Circuitality — the formal discipline of building software that works like hardware. Everything is live.",
    date: "MAR 2026",
    tag: "LAUNCH",
  },
  {
    slug: "platform",
    title: "BRIK-64 Platform Enters Development",
    excerpt:
      "The BRIK-64 platform is now in active development — a visual circuit laboratory at brik64.com.",
    date: "MAR 2026",
    tag: "PLATFORM",
  },
  {
    slug: "documentation",
    title: "Complete Documentation Live",
    excerpt:
      "Full BRIK-64 documentation is now live at docs.brik64.dev, powered by Mintlify. 33+ pages covering the entire ecosystem.",
    date: "MAR 2026",
    tag: "DOCS",
  },
  {
    slug: "skills",
    title: "Claude Code Skills Released",
    excerpt:
      "Five Claude Code skills for BRIK-64 are now publicly available — from core PCD system to language-specific SDK integration.",
    date: "MAR 2026",
    tag: "TOOLS",
  },
  {
    slug: "open-source",
    title: "BRIK-64 Goes Open Source",
    excerpt:
      "The brik64 organization on GitHub now hosts 14 public repositories — core, SDKs, platform, theory proofs, tools, and community.",
    date: "MAR 2026",
    tag: "OPEN SOURCE",
  },
  {
    slug: "community",
    title: "Community Channels Open",
    excerpt:
      "Join the Digital Circuitality community — GitHub Discussions, contributing areas, roadmap, and more.",
    date: "MAR 2026",
    tag: "COMMUNITY",
  },
];

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
