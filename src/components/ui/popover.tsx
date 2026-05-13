import * as React from "react";

import { cn } from "@/lib/utils";

function Popover({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-flex">{children}</div>;
}

function PopoverTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" className={cn("inline-flex", className)} {...props} />;
}

function PopoverContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("absolute left-0 top-full z-50 mt-2 min-w-56 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md", className)}
      {...props}
    />
  );
}

export { Popover, PopoverContent, PopoverTrigger };
