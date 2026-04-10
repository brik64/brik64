export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>BRIK64. Digital Circuitality for software teams that need proof.</p>
        <div className="flex items-center gap-4">
          <a href="https://docs.brik64.dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Docs
          </a>
          <a href="https://github.com/brik64" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
