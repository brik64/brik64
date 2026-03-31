"use client";

import { ArrowRight, BookOpen } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
const resources = [
  {
    title: "Docs",
    href: "https://docs.brik64.dev",
    icon: <BookOpen className="h-5 w-5 text-teal" />,
    description: "docs.brik64.dev",
  },
  {
    title: "GitHub",
    href: "https://github.com/brik64",
    icon: <img src="/brands/github.svg" alt="GitHub" className="h-5 w-5" style={{ filter: "brightness(0) saturate(100%) invert(58%) sepia(78%) saturate(1640%) hue-rotate(152deg) brightness(101%) contrast(101%)" }} />,
    description: "github.com/brik64",
  },
  {
    title: "Discord",
    href: "https://discord.gg/brik64",
    icon: <img src="/brands/discord.svg" alt="Discord" className="h-5 w-5" style={{ filter: "brightness(0) saturate(100%) invert(58%) sepia(78%) saturate(1640%) hue-rotate(152deg) brightness(101%) contrast(101%)" }} />,
    description: "discord.gg/brik64",
  },
];

export function CTASection() {
  return (
    <div className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-balance leading-tight md:text-5xl">
          Start building with{" "}
          <span className="text-teal">BRIK64.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground md:text-base">
          The compiler is free. The language is finite. The proof is permanent.
        </p>

        {/* CTA */}
        <div className="mx-auto mt-10 flex flex-col items-center gap-4">
          <a
            href="https://docs.brik64.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center bg-teal px-8 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
          >
            Get started &mdash; free
          </a>
          <a
            href="https://digitalcircuitality.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-teal"
          >
            Learn the theory at Digital Circuitality{" "}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Resource cards */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border bg-background p-5 text-center transition-colors hover:border-teal/30"
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center bg-teal/10">
                {resource.icon}
              </div>
              <p className="text-sm font-semibold">{resource.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
