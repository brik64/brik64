"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextSlideUpProps {
  children: string;
  className?: string;
  staggerFrom?: "start" | "center" | "end";
  delay?: number;
}

export function TextSlideUp({
  children,
  className,
  staggerFrom = "start",
  delay = 0,
}: TextSlideUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const chars = children.split("");

  const getDelay = (i: number) => {
    const len = chars.length;
    switch (staggerFrom) {
      case "center":
        return Math.abs(i - len / 2) * 0.03;
      case "end":
        return (len - i) * 0.03;
      default:
        return i * 0.03;
    }
  };

  return (
    <span ref={ref} className={cn("inline-flex overflow-hidden", className)}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + getDelay(i),
            ease: [0.25, 0.4, 0, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
