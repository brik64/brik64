import React from "react";
import { cn } from "@/lib/utils";

export type GlassVariant = "teal" | "slate" | "gold" | "rose";

const glassStyles: Record<
  GlassVariant,
  { border: string; inner: string; shadow: string; text: string }
> = {
  teal: {
    border:
      "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(0,229,255,0.6) 52%, rgba(255,255,255,0.6) 100%)",
    inner:
      "linear-gradient(264deg, rgba(207,250,254,0.4) 10%, rgba(0,184,212,0.4) 49%, rgba(207,250,254,0.4) 103%)",
    shadow:
      "0px 37px 14px rgba(0,229,255,0.02), 0px 20px 13px rgba(0,229,255,0.08), 0px 9px 9px rgba(0,229,255,0.13), 0px 3px 5px rgba(0,229,255,0.15)",
    text: "text-white",
  },
  slate: {
    border:
      "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(100,116,139,0.6) 52%, rgba(255,255,255,0.6) 100%)",
    inner:
      "linear-gradient(264deg, rgba(226,232,240,0.4) 10%, rgba(71,85,105,0.4) 49%, rgba(226,232,240,0.4) 103%)",
    shadow:
      "0px 37px 14px rgba(148,163,184,0.02), 0px 20px 13px rgba(148,163,184,0.08), 0px 9px 9px rgba(148,163,184,0.13), 0px 3px 5px rgba(148,163,184,0.15)",
    text: "text-white",
  },
  gold: {
    border:
      "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(224,176,32,0.6) 52%, rgba(255,255,255,0.6) 100%)",
    inner:
      "linear-gradient(264deg, rgba(254,243,199,0.4) 10%, rgba(217,119,6,0.4) 49%, rgba(254,243,199,0.4) 103%)",
    shadow:
      "0px 37px 14px rgba(251,191,36,0.02), 0px 20px 13px rgba(251,191,36,0.08), 0px 9px 9px rgba(251,191,36,0.13), 0px 3px 5px rgba(251,191,36,0.15)",
    text: "text-white",
  },
  rose: {
    border:
      "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(244,63,94,0.6) 52%, rgba(255,255,255,0.6) 100%)",
    inner:
      "linear-gradient(264deg, rgba(255,228,230,0.4) 10%, rgba(225,29,72,0.4) 49%, rgba(255,228,230,0.4) 103%)",
    shadow:
      "0px 37px 14px rgba(251,113,133,0.02), 0px 20px 13px rgba(251,113,133,0.08), 0px 9px 9px rgba(251,113,133,0.13), 0px 3px 5px rgba(251,113,133,0.15)",
    text: "text-white",
  },
};

interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GlassVariant;
}

export const GlassButton = React.forwardRef<
  HTMLButtonElement,
  GlassButtonProps
>(({ className, children, variant = "teal", ...props }, ref) => {
  const { border, inner, shadow, text } = glassStyles[variant];
  return (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-transform duration-200 active:scale-[0.98]",
        text,
        className,
      )}
      style={{
        background: border,
        borderRadius: "100px",
        border: "none",
      }}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[3px] rounded-[100px]"
        style={{
          background: inner,
          boxShadow: shadow,
          backdropFilter: "blur(4.5px)",
        }}
      />
      <span className="relative z-10">{children || "Glass Button"}</span>
    </button>
  );
});

GlassButton.displayName = "GlassButton";
