import { cn } from "@/lib/utils";

interface GridDotsProps {
  className?: string;
  cols?: number;
  rows?: number;
}

export function GridDots({ className, cols = 8, rows = 6 }: GridDotsProps) {
  const spacing = 24;
  const w = (cols - 1) * spacing;
  const h = (rows - 1) * spacing;

  return (
    <svg
      className={cn("text-teal/10", className)}
      width={w + 4}
      height={h + 4}
      viewBox={`0 0 ${w + 4} ${h + 4}`}
      fill="none"
    >
      {Array.from({ length: cols * rows }).map((_, i) => {
        const x = (i % cols) * spacing + 2;
        const y = Math.floor(i / cols) * spacing + 2;
        return (
          <circle key={i} cx={x} cy={y} r="1.5" fill="currentColor" />
        );
      })}
    </svg>
  );
}
