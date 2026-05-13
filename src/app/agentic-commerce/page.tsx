import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Agentic Commerce — BRIK64",
  description:
    "BRIK64 agentic commerce contract for human checkout, x402 pay-per-call, Stripe MPP/SPT, and enterprise AP2 roadmap.",
};

const rails = [
  ["Stripe Checkout/Billing", "Human SaaS plans and enterprise subscription path."],
  ["x402", "First agentic pay-per-call rail for bounded verification API calls."],
  ["Stripe MPP/SPT", "Card/Link based machine payments after Stripe profile readiness."],
  ["AP2", "Enterprise mandate roadmap; not required for v1."],
] as const;

export default function AgenticCommercePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-20">
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Commerce contract</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Humans subscribe. Agents can pay per bounded verification.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            BRIK64 separates payment from correctness claims. Payment unlocks access;
            evidence bundles report bounded verification results under explicit limits.
          </p>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          {rails.map(([title, body]) => (
            <article key={title} className="rounded-lg border p-5">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{body}</p>
            </article>
          ))}
        </section>
        <section className="rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">Claim boundary</h2>
          <p className="mt-3 text-muted-foreground">
            A paid run is not a claim of universal correctness. BRIK64 returns run ids,
            receipt hashes, evidence hashes, verification levels reached, and explicit
            boundaries for what was and was not checked.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
