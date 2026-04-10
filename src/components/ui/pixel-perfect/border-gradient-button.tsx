import { cn } from "@/lib/utils";

interface BorderGradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function BorderGradientButton({
  className,
  children,
  ...props
}: BorderGradientButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center rounded-md bg-[linear-gradient(90deg,#00e5ff,#00b8d4,#5ce5f0,#00ccee,#00e5ff)] bg-[length:200%] px-6 py-2.5 text-sm font-medium animate-[rainbow_4s_linear_infinite] active:scale-95 transition-transform",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-[1.5px] rounded-[calc(0.375rem-1.5px)] bg-background/95 backdrop-blur-sm transition-colors group-hover:bg-background/40" />
      <span className="relative z-10 text-foreground">{children || "Gradient Border"}</span>
    </button>
  );
}
