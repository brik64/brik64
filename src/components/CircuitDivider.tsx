export function CircuitDivider() {
  return (
    <div className="mx-auto flex max-w-5xl items-center gap-4 text-muted-foreground/55">
      <div className="h-px flex-1 bg-border" />
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em]">
        <span className="h-2 w-2 rounded-full bg-teal/60" />
        Closed review path
        <span className="h-2 w-2 rounded-full bg-teal/35" />
      </div>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
