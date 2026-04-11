import { ArrowRight, BookOpen, FileCode, Globe } from "lucide-react";
import { HomePrimaryButton, HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

const resources = [
  {
    title: "CLI",
    href: "/cli",
    icon: <BookOpen className="h-5 w-5 text-teal" />,
    description: "Install path and operator workflow",
  },
  {
    title: "PCD",
    href: "/pcd",
    icon: <FileCode className="h-5 w-5 text-teal" />,
    description: "Canonical blueprint and declared domains",
  },
  {
    title: "Platform",
    href: "/platform",
    icon: <Globe className="h-5 w-5 text-teal" />,
    description: "Registry state and delivery workflows",
  },
];

export function CTASection() {
  return (
    <div className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-balance leading-tight md:text-5xl">
          Start with one bounded workflow,
          <span className="text-teal"> BRIK64.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground md:text-base">
          Open the CLI, inspect PCD, and evaluate the review chain on real logic
          before expanding into registry and enterprise workflows.
        </p>

        <div className="mx-auto mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <HomePrimaryButton href="/cli">
            Open the CLI
          </HomePrimaryButton>
          <HomeSecondaryButton href="/pcd">Read PCD</HomeSecondaryButton>
          <a href="/platform" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-teal">
            View platform
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-teal/30 hover:shadow-sm"
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center bg-teal/10">
                {resource.icon}
              </div>
              <p className="text-sm font-semibold">{resource.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
