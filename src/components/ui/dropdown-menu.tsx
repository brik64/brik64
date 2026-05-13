import * as React from "react";

import { cn } from "@/lib/utils";

function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-flex">{children}</div>;
}

function DropdownMenuTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" className={cn("inline-flex", className)} {...props} />;
}

function DropdownMenuContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("absolute right-0 top-full z-50 mt-2 min-w-44 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md", className)}
      {...props}
    />
  );
}

function DropdownMenuItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground", className)} {...props} />;
}

export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger };
