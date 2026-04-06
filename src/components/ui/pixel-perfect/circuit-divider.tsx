import { cn } from "@/lib/utils";

interface CircuitDividerProps {
  className?: string;
  variant?: "horizontal" | "corner" | "nodes";
}

export function CircuitDivider({
  className,
  variant = "horizontal",
}: CircuitDividerProps) {
  if (variant === "corner") {
    return (
      <svg
        className={cn("text-teal/20", className)}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M0 60h40a8 8 0 0 1 8 8v52"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="0" cy="60" r="3" fill="currentColor" />
        <circle cx="48" cy="120" r="3" fill="currentColor" />
        <rect x="36" y="56" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    );
  }

  if (variant === "nodes") {
    return (
      <svg
        className={cn("text-teal/15", className)}
        width="200"
        height="40"
        viewBox="0 0 200 40"
        fill="none"
      >
        <line x1="0" y1="20" x2="60" y2="20" stroke="currentColor" strokeWidth="1" />
        <circle cx="60" cy="20" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="68" y1="20" x2="132" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="140" cy="20" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="148" y1="20" x2="200" y2="20" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="20" r="2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      className={cn("w-full text-teal/15", className)}
      height="24"
      viewBox="0 0 800 24"
      fill="none"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="12" x2="350" y2="12" stroke="currentColor" strokeWidth="1" />
      <rect x="350" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="356" cy="12" r="2" fill="currentColor" />
      <line x1="362" y1="12" x2="438" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <rect x="438" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="444" cy="12" r="2" fill="currentColor" />
      <line x1="450" y1="12" x2="800" y2="12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
