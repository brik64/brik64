"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-border bg-background p-6 transition-colors",
        className,
      )}
      whileHover={{
        y: -4,
        boxShadow:
          "0 10px 40px -10px rgba(0,229,255,0.15), 0 4px 12px -2px rgba(0,0,0,0.05)",
        borderColor: "rgba(0,229,255,0.3)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
}
