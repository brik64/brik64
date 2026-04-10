"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HexGridProps {
  className?: string;
  count?: number;
}

export function HexGrid({ className, count = 12 }: HexGridProps) {
  const hexPath = "M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z";

  return (
    <svg
      className={cn("text-teal/[0.06]", className)}
      width="300"
      height="240"
      viewBox="0 0 300 240"
      fill="none"
    >
      {Array.from({ length: count }).map((_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = col * 58 + (row % 2 === 1 ? 29 : 0);
        const y = row * 50;
        return (
          <motion.path
            key={i}
            d={hexPath}
            transform={`translate(${x}, ${y}) scale(0.9)`}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          />
        );
      })}
    </svg>
  );
}
