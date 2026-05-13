import * as React from "react";

import { cn } from "@/lib/utils";

function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function Tooltip({ children }: { children: React.ReactNode }) {
  return <span className="group/tooltip relative inline-flex">{children}</span>;
}

function TooltipTrigger({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("inline-flex", className)} {...props}>
      {children}
    </span>
  );
}

function TooltipContent({
  children,
  className,
  side = "top",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { side?: "top" | "right" | "bottom" | "left" }) {
  const sideClass = {
    top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
    right: "left-full top-1/2 ml-2 -translate-y-1/2",
    bottom: "left-1/2 top-full mt-2 -translate-x-1/2",
    left: "right-full top-1/2 mr-2 -translate-y-1/2",
  };

  return (
    <span
      role="tooltip"
      className={cn(
        "pointer-events-none absolute z-50 hidden max-w-xs rounded-md border border-border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-md group-hover/tooltip:block group-focus-within/tooltip:block",
        sideClass[side],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
