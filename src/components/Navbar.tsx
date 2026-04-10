import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/pcd", label: "PCD" },
  { href: "https://docs.brik64.dev", label: "Docs", external: true },
  { href: "https://github.com/brik64", label: "GitHub", external: true },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.26em] text-teal">
          BRIK64
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          {navItems.map((item) =>
            item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
