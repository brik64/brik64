import { ArrowRight } from "lucide-react";

const sourceLanguages = [
  "JavaScript", "TypeScript", "Python", "Rust", "C", "C++", "Go", "COBOL", "PHP", "Java",
];

const targetLanguages = [
  "Rust", "JavaScript", "TypeScript", "Python", "C", "C++", "Go", "COBOL", "PHP", "Java", "Swift", "WASM", "Native", "BIR",
];

export function LanguagesSection() {
  return (
    <section className="border-border border-t px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [05] · LANGUAGES
        </p>

        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
          Every language. <span className="text-teal">One blueprint.</span>
        </h3>

        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:gap-6">
          {/* Source languages */}
          <div className="flex-1">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Lift from
            </p>
            <div className="flex flex-wrap gap-2">
              {sourceLanguages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* PCD center */}
          <div className="flex shrink-0 flex-col items-center gap-2">
            <ArrowRight className="hidden h-4 w-4 text-muted-foreground md:block" />
            <div className="rounded-lg border border-teal/30 bg-teal/10 px-5 py-3 text-center">
              <p className="text-xs font-bold tracking-wider text-teal">PCD</p>
              <p className="text-[10px] text-teal/70">Blueprint</p>
            </div>
            <ArrowRight className="hidden h-4 w-4 text-muted-foreground md:block" />
          </div>

          {/* Target languages */}
          <div className="flex-1">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Compile to
            </p>
            <div className="flex flex-wrap gap-2">
              {targetLanguages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
