import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Commercial Use — BRIK64",
  description:
    "Commercial-use policy for BRIK64 evidence bundles, paid verification and agent-triggered upgrade prompts.",
};

export default function CommercialUsePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-20">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Commercial use</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Paid plans are for evidence-bearing commercial workflows.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Free resources remain available for learning and exploration. Paid BRIK64
            service applies when a team or agent needs exportable evidence, commercial
            licensing, release records, or organization-level traceability.
          </p>
        </section>
        <section className="rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">Paid triggers</h2>
          <p className="mt-3 text-muted-foreground">
            Commercial deployment, release gating, audit export, paid license acquisition,
            and compliance package generation are paid paths. General education and
            basic design guidance are not forced into a paid path.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
