import React from "react";
import { cn } from "@/lib/utils";

interface StripeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const StripeButton = React.forwardRef<
  HTMLButtonElement,
  StripeButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-all active:scale-95",
        className,
      )}
      style={{
        background: "#00b8d4",
        boxShadow: "inset 0px 2px 0px #00e5ff",
      }}
      {...props}
    >
      {children || "Get Started"}
    </button>
  );
});

StripeButton.displayName = "StripeButton";
