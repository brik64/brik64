"use client";

import { cn } from "@/lib/utils";

interface TextGradientProps {
  children: React.ReactNode;
  className?: string;
}

export function TextGradient({ children, className }: TextGradientProps) {
  return (
    <span
      className={cn(
        "bg-[linear-gradient(90deg,#00e5ff,#00b8d4,#5ce5f0,#00ccee,#00e5ff)] bg-[length:200%] bg-clip-text text-transparent animate-[rainbow_6s_linear_infinite]",
        className,
      )}
    >
      {children}
    </span>
  );
}
