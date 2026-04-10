import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const colsClass: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div className={`grid grid-cols-1 gap-6 ${colsClass[columns]}`}>
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="border border-border p-6 transition-colors hover:border-foreground/20 hover:bg-muted/30"
          >
            <Icon className="mb-4 h-5 w-5 text-teal" />
            <h3 className="text-sm font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
