"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Eye, LockKeyhole } from "lucide-react";

import { GitHubMark } from "@/components/vnext/primitives";

type AuthMode = "login" | "signup";

const BRIK64_USE_CASES = [
  "Model bounded software as explicit blueprints before moving work into platform execution.",
  "Route CLI and CI flows through a shared structure for repeatable checks and visible handoff.",
  "Keep reusable components aligned with registry-native packaging instead of one-off project code.",
  "Prepare generated or agent-authored code for external review before credentials and execution are connected.",
  "Use PCD language boundaries to keep system intent explicit across implementation and review.",
  "Move engineering teams from informal code paths toward traceable, reusable software units.",
  "Separate public access from execution authority until the platform has verified identity and session state.",
  "Give regulated software teams a clearer path from design structure to repeatable release checks.",
  "Keep platform workflows close to the evidence trail instead of relying on hidden process memory.",
  "Connect documentation, CLI work, and platform surfaces around the same bounded-system vocabulary.",
];

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.82-.07-1.43-.22-2.07H12v3.92h5.5c-.11.97-.72 2.43-2.07 3.41l-.02.13 3.14 2.39.22.02c2.03-1.84 3.2-4.55 3.2-7.8Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.97-.87 6.62-2.37l-3.34-2.54c-.89.61-2.08 1.04-3.28 1.04-2.64 0-4.88-1.71-5.68-4.08l-.13.01-3.27 2.49-.04.12A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.32 14.05A5.9 5.9 0 0 1 6 12c0-.71.12-1.4.31-2.05l-.01-.14-3.31-2.53-.11.05A9.9 9.9 0 0 0 2 12c0 1.8.44 3.5 1.2 5l3.12-2.41Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.87c1.52 0 2.55.64 3.13 1.18l2.29-2.2C16.96 3.06 14.7 2 12 2A10 10 0 0 0 2.88 7.33l3.43 2.62C7.12 7.58 9.36 5.87 12 5.87Z"
      />
    </svg>
  );
}

function ProviderButton({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <button
      type="button"
      className="mx-auto flex h-10 w-full items-center justify-center gap-2.5 rounded-md border border-white/14 bg-[#202020] px-4 text-sm font-semibold text-white transition-colors hover:border-white/28 hover:bg-[#282828]"
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

function Field({
  label,
  type,
  placeholder,
  action,
}: {
  label: string;
  type: string;
  placeholder: string;
  action?: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-sm font-semibold text-white/78">
        <span>{label}</span>
        {action}
      </span>
      <span className="relative block">
        <input
          type={type}
          placeholder={placeholder}
          className="h-10 w-full rounded-md border border-white/13 bg-[#171717] px-3.5 pr-12 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[color:var(--accent)]"
        />
        {type === "password" ? (
          <button
            type="button"
            aria-label="Show password"
            className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/42 transition-colors hover:text-white"
          >
            <Eye className="h-4 w-4" />
          </button>
        ) : null}
      </span>
    </label>
  );
}

function DigitalCircuitalityPanel() {
  const [activeUseCase, setActiveUseCase] = useState(0);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveUseCase((current) => (current + 1) % BRIK64_USE_CASES.length);
    }, 10800);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <section className="relative hidden h-dvh min-h-[720px] overflow-hidden border-l border-white/10 bg-[#09111a] lg:block">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.72] [filter:saturate(1.08)_brightness(0.98)]"
        style={{ backgroundImage: "url(/generated/home-digital-circuitality-bg.png)" }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.34] mix-blend-screen [filter:blur(18px)_saturate(1.12)]"
        style={{ backgroundImage: "url(/generated/home-digital-circuitality-bg.png)" }}
      />
      <div className="absolute inset-0 blueprint-grid opacity-[0.16]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,13,0.68)_0%,rgba(4,10,16,0.46)_44%,rgba(1,4,8,0.8)_100%)]" />
      <div className="absolute inset-x-12 top-10 flex items-center justify-end">
        <Link
          href="/foundations"
          className="inline-flex h-9 items-center gap-2 rounded-md border border-white/12 bg-white/[0.06] px-3 text-sm font-semibold text-white/72 transition-colors hover:border-white/22 hover:text-white"
        >
          <BookOpen className="h-4 w-4" />
          Foundations
        </Link>
      </div>
      <div className="relative flex h-full items-center px-14 xl:px-20">
        <div className="max-w-[600px]">
          <p className="text-[11px] font-black uppercase tracking-[0.32em] text-[color:var(--accent)]">
            BRIK64 Platform
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.06] text-white xl:text-5xl">
            Access the workspace for bounded software systems.
          </h2>
          <div className="mt-6 flex min-h-[88px] justify-center overflow-hidden">
            <p
              key={activeUseCase}
              className="auth-use-case-slide max-w-[38ch] text-center text-base leading-7 text-white/62 xl:text-lg"
            >
              {BRIK64_USE_CASES[activeUseCase]}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes authUseCaseSlide {
          0%,
          92.59% {
            opacity: 1;
            transform: translateX(0);
          }

          100% {
            opacity: 0;
            transform: translateX(-64px);
          }
        }

        .auth-use-case-slide {
          animation: authUseCaseSlide 10.8s linear both;
        }

        @media (prefers-reduced-motion: reduce) {
          .auth-use-case-slide {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

export function AuthMockView({ mode }: { mode: AuthMode }) {
  const isSignup = mode === "signup";

  return (
    <main className="min-h-dvh bg-[#171717] text-white selection:bg-[color:var(--accent)]/30">
      <div className="grid min-h-dvh lg:h-dvh lg:min-h-[720px] lg:grid-cols-[minmax(500px,42vw)_1fr]">
        <section className="flex min-h-dvh flex-col bg-[#171717] lg:h-dvh lg:min-h-[720px]">
          <div className="flex h-20 shrink-0 items-center px-6 sm:px-10 xl:px-12">
            <Link href="/" aria-label="BRIK64 home" className="inline-flex">
              <Image
                src="/brand/brik64-logo-primary-horizontal-white.svg"
                alt="BRIK64"
                width={154}
                height={32}
                priority
                unoptimized
                className="h-7 w-auto"
              />
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center px-8 py-6 sm:px-14 xl:px-20">
            <div className="mx-auto w-full max-w-[430px]">
              <h1 className="text-center text-[32px] font-semibold leading-tight text-white">
                {isSignup ? "Create your account" : "Welcome back"}
              </h1>
              <p className="mt-2 text-center text-sm text-white/54">
                {isSignup ? "Sign up for BRIK64 platform access" : "Sign in to your account"}
              </p>

              <div className="mt-8 space-y-2.5">
                <ProviderButton icon={<GitHubMark className="h-5 w-5" />}>
                  Continue with GitHub
                </ProviderButton>
                <ProviderButton icon={<GoogleMark />}>Continue with Google</ProviderButton>
                <ProviderButton icon={<LockKeyhole className="h-5 w-5 text-white/62" />}>
                  Continue with SSO
                </ProviderButton>
              </div>

              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/12" />
                <span className="text-sm font-semibold text-white/56">or</span>
                <div className="h-px flex-1 bg-white/12" />
              </div>

              <form className="space-y-4">
                {isSignup ? (
                  <Field label="Name" type="text" placeholder="Jane Operator" />
                ) : null}
                <Field label="Email" type="email" placeholder={isSignup ? "team@company.com" : "you@example.com"} />
                <Field
                  label="Password"
                  type="password"
                  placeholder={isSignup ? "Create a password" : "Enter your password"}
                  action={
                    isSignup ? null : (
                      <Link href="/contact" className="font-medium text-white/44 hover:text-white">
                        Forgot password?
                      </Link>
                    )
                  }
                />
                <button
                  type="button"
                  className="mx-auto mt-4 flex h-10 w-full items-center justify-center rounded-md bg-[color:var(--accent)] px-4 text-sm font-semibold text-black transition-colors hover:bg-cyan-200"
                >
                  {isSignup ? "Sign up" : "Sign in"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm font-medium text-white/50">
                {isSignup ? "Already have an account? " : "Do not have an account? "}
                <Link
                  href={isSignup ? "/login" : "/signup"}
                  className="font-semibold text-white underline underline-offset-4 hover:text-[color:var(--accent)]"
                >
                  {isSignup ? "Sign in" : "Sign up"}
                </Link>
              </div>
            </div>
          </div>

          <div className="shrink-0 px-6 pb-6 text-center text-xs leading-5 text-white/36 sm:px-10 xl:px-12">
            By continuing, you agree to BRIK64&apos;s{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-white">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-white">
              Privacy Policy
            </Link>
            .
          </div>
        </section>

        <DigitalCircuitalityPanel />
      </div>
    </main>
  );
}
