export type EditorialCoverTheme =
  | "blueprint-grid"
  | "registry-atlas"
  | "agent-proof"
  | "circuit-lab"
  | "finance-evidence"
  | "compliance-ledger"
  | "hardware-control"
  | "migration-bridge"
  | "research-wave";

export interface EditorialCoverMeta {
  coverTheme: EditorialCoverTheme;
  coverImage: string;
  coverAlt: string;
}

export function getEditorialCover(
  theme: EditorialCoverTheme,
  alt: string,
  imagePath?: string,
): EditorialCoverMeta {
  return {
    coverTheme: theme,
    coverImage: imagePath ?? `/blog/covers/${theme}.svg`,
    coverAlt: alt,
  };
}

export function paginateItems<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * perPage;

  return {
    page: safePage,
    perPage,
    totalPages,
    totalItems: items.length,
    items: items.slice(start, start + perPage),
    start,
    end: Math.min(start + perPage, items.length),
  };
}

export function getPaginationRange(totalPages: number): number[] {
  return Array.from({ length: totalPages }, (_, index) => index + 1);
}
