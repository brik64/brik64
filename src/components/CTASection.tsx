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
          Build software that works{" "}
          <span className="text-teal">like hardware</span>.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground md:text-base">
          <a
            href="https://digitalcircuitality.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-teal transition-colors hover:text-teal-hover"
          >
            Learn the theory at Digital Circuitality{" "}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </p>

        {/* Email CTA */}
        <div className="mx-auto mt-10 max-w-md">
          <p className="mb-3 text-sm text-muted-foreground">
            Get notified when the platform launches
          </p>
          <div className="flex h-11 items-center border border-teal/20 bg-background pr-1.5 pl-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder-teal/40 outline-none"
            />
            <button className="inline-flex h-8 cursor-pointer items-center justify-center rounded-md bg-teal px-4 text-sm font-medium text-white transition-colors hover:bg-teal-hover">
              Notify me
            </button>
          </div>
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
