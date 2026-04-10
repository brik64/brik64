import type { AnchorHTMLAttributes, ReactNode } from "react";

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function HomePrimaryButton({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={joinClasses(
        "inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function HomeSecondaryButton({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={joinClasses(
        "inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-background/90 px-5 py-3 text-sm font-semibold text-muted-foreground shadow-sm transition-colors hover:border-teal/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/25",
        className,
      )}
    >
      {children}
    </a>
  );
}
