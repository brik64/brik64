import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: Breadcrumb[];
}

export function PageHeader({ title, subtitle, badge, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-muted-foreground/40">/</span>}
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-foreground"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <span className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            {badge}
          </span>
        )}

        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
