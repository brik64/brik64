import { cn } from "@/lib/utils";

interface CrosshairProps {
  className?: string;
  size?: number;
}

export function Crosshair({ className, size = 32 }: CrosshairProps) {
  return (
    <svg
      className={cn("text-teal/25", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >
      <line x1="16" y1="0" x2="16" y2="10" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="22" x2="16" y2="32" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="16" x2="10" y2="16" stroke="currentColor" strokeWidth="1" />
      <line x1="22" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}
