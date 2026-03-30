"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        <section className="bg-background border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-20 md:px-12 lg:px-18">
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            {/* Badge */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/[0.06] px-3.5 py-1 text-xs font-medium text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              Closed Beta
            </span>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create your <span className="text-teal">BRIK-64</span> account
            </h1>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Join the closed beta. Get access to the platform, registry, and certification dashboard.
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
              <div className="mt-10 w-full space-y-4">
                {/* OAuth buttons */}
                <button
                  disabled
                  className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Sign up with GitHub
                  <span className="ml-auto rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">SOON</span>
                </button>

                <button
                  disabled
                  className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Sign up with Google
                  <span className="ml-auto rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">SOON</span>
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 py-2">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">or sign up with email</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Email form */}
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none"
                  />
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
                  <button
                    onClick={() => setSubmitted(true)}
                    className="w-full rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
                  >
                    Create Account
                  </button>
                </div>

                <p className="text-xs text-muted-foreground pt-1">
                  Already have an account?{" "}
                  <a href="/login" className="text-teal hover:underline">Sign in</a>
                </p>

                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  By creating an account, you agree to our{" "}
                  <a href="/legal" className="text-teal hover:underline">Terms of Service</a>
                  {" "}and{" "}
                  <a href="/legal" className="text-teal hover:underline">Privacy Policy</a>.
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
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
