import { ShieldCheck, Puzzle, ScanLine, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

const cards: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-teal" />,
    title: "Verified Parts",
    desc: "Like tested beams in a bridge. Each part is mathematically proven correct before it's ever used.",
  },
  {
    icon: <Puzzle className="h-5 w-5 text-teal" />,
    title: "Composition Laws",
    desc: "Parts connect through algebra, not duct tape. If Part A works and Part B works, A+B is guaranteed to work.",
  },
  {
    icon: <ScanLine className="h-5 w-5 text-teal" />,
    title: "Automatic Check",
    desc: "The compiler verifies every connection. If the circuit doesn't close, the program simply won't compile.",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-teal" />,
    title: "Compound Interest",
    desc: "A certified component never needs rewriting. The more that exist, the less anyone needs to build from scratch.",
  },
];

export function ProblemSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [01] · THE PROBLEM
        </p>

        <h3 className="max-w-3xl text-2xl font-normal tracking-tight md:text-3xl">
          We build skyscrapers with blueprints.
          <br />
          We build software with hope.
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          A bridge engineer knows exactly how much weight each beam can hold. A
          chip designer knows exactly what signal each gate produces. But a
          software engineer? They write code, run some tests, cross their
          fingers, and ship.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 border border-border">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`group bg-muted/20 p-6 transition-colors hover:bg-teal/[0.03] ${
                (index === 0 || index === 1) ? "border-b border-border sm:border-b" : ""
              } ${
                (index === 0 || index === 2) ? "sm:border-r sm:border-border" : ""
              }`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05]">
                {card.icon}
              </div>
              <p className="text-sm font-medium">{card.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
