import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children?: ReactNode;
  className?: string;
};

type HomeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
  };

const homeButtonBase =
  "inline-flex h-12 items-center justify-center gap-2 rounded-md px-8 text-base font-medium transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const homeSecondaryBase =
  "inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border px-8 text-base font-medium text-foreground transition-colors hover:bg-secondary active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function HomePrimaryButton({
  href,
  className,
  children,
  ...props
}: HomeButtonProps) {
  const classes = cn(
    homeButtonBase,
    "bg-teal text-white shadow-[inset_0_2px_0_rgba(0,229,255,0.85)] hover:bg-teal-hover",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function HomeSecondaryButton({
  href,
  className,
  children,
  ...props
}: HomeButtonProps) {
  const classes = cn(homeSecondaryBase, className);

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
