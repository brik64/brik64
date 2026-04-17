import { getEditorialCover, type EditorialCoverMeta, type EditorialCoverTheme } from "@/lib/editorial-utils";

export interface NewsArticle extends EditorialCoverMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  category?: string;
}

interface NewsArticleSeed {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  coverTheme: EditorialCoverTheme;
}

const newsSeeds: NewsArticleSeed[] = [
  {
    slug: "launch",
    title: "Digital Circuitality Goes Public",
    excerpt:
      "Today marks the public debut of Digital Circuitality — the formal discipline of building software that works like hardware. Everything is live.",
    date: "MAR 2026",
    tag: "LAUNCH",
    coverTheme: "blueprint-grid",
  },
  {
    slug: "platform",
    title: "BRIK64 Platform Enters Development",
    excerpt:
      "The BRIK64 platform is now in active development — a visual circuit laboratory at brik64.com.",
    date: "MAR 2026",
    tag: "PLATFORM",
    coverTheme: "registry-atlas",
  },
  {
    slug: "documentation",
    title: "Complete Documentation Live",
    excerpt:
      "Full BRIK64 documentation is now live at docs.brik64.dev, powered by Mintlify. 33+ pages covering the entire ecosystem.",
    date: "MAR 2026",
    tag: "DOCS",
    coverTheme: "compliance-ledger",
  },
  {
    slug: "skills",
    title: "Claude Code Skills Released",
    excerpt:
      "Five Claude Code skills for BRIK64 are now publicly available — from core PCD system to language-specific SDK integration.",
    date: "MAR 2026",
    tag: "TOOLS",
    coverTheme: "agent-proof",
  },
  {
    slug: "open-source",
    title: "BRIK64 Goes Open Source",
    excerpt:
      "The brik64 organization on GitHub now hosts 14 public repositories — core, SDKs, platform, theory proofs, tools, and community.",
    date: "MAR 2026",
    tag: "OPEN SOURCE",
    coverTheme: "circuit-lab",
  },
  {
    slug: "community",
    title: "Community Channels Open",
    excerpt:
      "Join the Digital Circuitality community — GitHub Discussions, contributing areas, roadmap, and more.",
    date: "MAR 2026",
    tag: "COMMUNITY",
    coverTheme: "research-wave",
  },
];

export const newsArticles: NewsArticle[] = newsSeeds.map((article) => ({
  ...article,
  ...getEditorialCover(article.coverTheme, `Editorial cover for ${article.title}`),
}));

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}
