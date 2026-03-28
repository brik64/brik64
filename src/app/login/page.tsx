"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, ArrowRight, Check } from "lucide-react";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-background">
        <section className="bg-background border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-20 md:px-12 lg:px-18">
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            {/* Badge */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/[0.06] px-3.5 py-1 text-xs font-medium text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              Closed Beta
            </span>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome to <span className="text-teal">BRIK-64</span>
            </h1>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              The platform is currently in closed beta. Sign in or request access below.
            </p>

            {submitted ? (
              <div className="mt-10 w-full border border-teal/30 bg-teal/[0.04] p-8">
                <Check className="mx-auto h-10 w-10 text-emerald-400" />
                <h2 className="mt-4 text-lg font-bold">You&rsquo;re on the list!</h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  We&rsquo;ll email you when your access is ready. In the meantime, install the CLI:
                </p>
                <code className="mt-4 block border border-border bg-[#0a0e14] px-4 py-3 font-mono text-sm text-emerald-400">
                  curl -fsSL https://brik64.dev/install | sh
                </code>
              </div>
            ) : (
              <div className="mt-10 w-full space-y-6">
                {/* Login form */}
                <div className="border border-border bg-muted/10 p-8">
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
                    />
                    <button className="w-full rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover">
                      Sign In
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <a href="#" className="text-muted-foreground hover:text-teal transition-colors">
                      Forgot password?
                    </a>
                    <button
                      onClick={() => setSubmitted(true)}
                      className="text-teal hover:underline cursor-pointer"
                    >
                      Don&rsquo;t have an account? Sign up
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">or request beta access</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Beta request */}
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
                  />
                  <button
                    onClick={() => setSubmitted(true)}
                    className="shrink-0 rounded-md bg-teal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
                  >
                    Request Access
                  </button>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  We&rsquo;ll email you when your access is ready. No spam.
                </p>
              </div>
            )}

            {/* What's included */}
            {!submitted && (
              <div className="mt-12 w-full">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
                  What&rsquo;s included in beta
                </p>
                <div className="grid grid-cols-2 gap-2 text-left">
                  {[
                    "GitHub integration",
                    "PCD Registry access",
                    "Certification dashboard",
                    "Unlimited lifts",
                    "All export targets",
                    "Priority support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 shrink-0 text-emerald-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
