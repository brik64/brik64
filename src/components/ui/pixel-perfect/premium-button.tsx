import React from "react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const PremiumButton = React.forwardRef<
  HTMLButtonElement,
  PremiumButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "rounded-md bg-muted px-5 py-3 text-sm font-medium transition-all active:scale-95",
        className,
      )}
      style={{
        boxShadow:
          "0.4px 0.4px 0.6px -1px rgba(0,0,0,0.26), 1.2px 1.2px 1.7px -1.5px rgba(0,0,0,0.25), 2.7px 2.7px 3.8px -2.25px rgba(0,0,0,0.23), 5.9px 5.9px 8.3px -3px rgba(0,0,0,0.19), 10px 10px 21px -3.75px rgba(0,0,0,0.06), -0.5px -0.5px 0px rgba(0,0,0,0.05), inset 1px 1px 1px #FFFFFF, inset -1px -1px 1px rgba(0,0,0,0.15)",
      }}
      {...props}
    >
      {children || "Premium Action"}
    </button>
  );
});

PremiumButton.displayName = "PremiumButton";
