"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageHoverProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageHover({ images, className }: ImageHoverProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className={cn("flex items-end gap-1.5", className)}
      onMouseLeave={() => setActive(null)}
    >
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="overflow-hidden rounded-lg"
          animate={{
            width: active === i ? 180 : 120,
            height: active === i ? 150 : 100,
            opacity: active === null ? 1 : active === i ? 1 : 0.5,
          }}
          transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
          onMouseEnter={() => setActive(i)}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={360}
            height={300}
            className="h-full w-full object-cover"
            unoptimized
          />
        </motion.div>
      ))}
    </div>
  );
}
