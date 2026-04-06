"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrbitDotProps {
  className?: string;
  size?: number;
}

export function OrbitDot({ className, size = 96 }: OrbitDotProps) {
  const dotSize = size / 3;
  const orbitRadius = size * 0.77;

  return (
    <div
      className={cn("relative", className)}
      style={{
        perspective: "900px",
        transformStyle: "preserve-3d",
        width: size,
        height: size,
      }}
    >
      <div
        className="rounded-full bg-foreground"
        style={{ width: size, height: size }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full bg-teal will-change-transform"
        style={{ width: dotSize, height: dotSize }}
        initial={{
          transform: `translate(-50%, -50%) rotateY(0deg) translateZ(${orbitRadius}px) rotateY(360deg)`,
        }}
        animate={{
          transform: `translate(-50%, -50%) rotateY(360deg) translateZ(${orbitRadius}px) rotateY(0deg)`,
        }}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
      />
    </div>
  );
}
