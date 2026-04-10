import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-32">
        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-teal px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
