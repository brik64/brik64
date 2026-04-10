"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTabsProps {
  tabs: string[];
  defaultIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
}

export function AnimatedTabs({
  tabs,
  defaultIndex = 0,
  onChange,
  className,
}: AnimatedTabsProps) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-border bg-secondary/50 p-1",
        className,
      )}
    >
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => {
            setActive(i);
            onChange?.(i);
          }}
          className="relative cursor-pointer px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {active === i && (
            <motion.div
              layoutId="tab-highlight"
              className="absolute inset-0 rounded-full bg-background"
              style={{
                boxShadow:
                  "0.2px 0.2px 0.3px -0.5px rgba(0,0,0,0.2), 0.6px 0.6px 0.9px -1px rgba(0,0,0,0.18), 1.3px 1.3px 1.9px -1.5px rgba(0,0,0,0.15)",
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40,
              }}
            />
          )}
          <span
            className={cn(
              "relative z-10",
              active === i && "text-foreground",
            )}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
}
