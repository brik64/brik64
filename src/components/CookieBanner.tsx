"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CONSENT_KEY = "brik64-cookie-consent";

type ConsentChoice = "all" | "essential" | null;

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept(choice: ConsentChoice) {
    const consent = {
      essential: true,
      analytics: choice === "all" ? true : analytics,
      marketing: choice === "all" ? true : marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-background p-5 shadow-lg">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold">Cookie Preferences</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              We use cookies to ensure the best experience. Essential cookies are
              required for the site to function. Analytics and marketing cookies
              help us improve and reach you with relevant content.{" "}
              <a
                href="/legal"
                className="text-teal underline-offset-2 hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
          <button
            onClick={() => {
              accept("essential");
            }}
            className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Preferences panel */}
        {showPrefs && (
          <div className="mt-4 space-y-3 border-t border-border pt-4">
            <label className="flex items-center justify-between">
              <div>
                <span className="text-xs font-medium">Essential</span>
                <p className="text-[10px] text-muted-foreground">
                  Required for site functionality
                </p>
              </div>
              <span className="text-[10px] font-medium text-muted-foreground">
                Always on
              </span>
            </label>
            <label className="flex cursor-pointer items-center justify-between">
              <div>
                <span className="text-xs font-medium">Analytics</span>
                <p className="text-[10px] text-muted-foreground">
                  Usage data to improve the site
                </p>
              </div>
              <button
                onClick={() => setAnalytics(!analytics)}
                className={`relative h-5 w-9 rounded-full transition-colors ${
                  analytics ? "bg-teal" : "bg-border"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform shadow-sm ${
                    analytics ? "translate-x-4" : ""
                  }`}
                />
              </button>
            </label>
            <label className="flex cursor-pointer items-center justify-between">
              <div>
                <span className="text-xs font-medium">Marketing</span>
                <p className="text-[10px] text-muted-foreground">
                  Personalized content and ads
                </p>
              </div>
              <button
                onClick={() => setMarketing(!marketing)}
                className={`relative h-5 w-9 rounded-full transition-colors ${
                  marketing ? "bg-teal" : "bg-border"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform shadow-sm ${
                    marketing ? "translate-x-4" : ""
                  }`}
                />
              </button>
            </label>
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => accept("all")}
            className="inline-flex h-8 items-center rounded-md bg-teal px-4 text-xs font-medium text-white transition-colors hover:bg-teal-hover"
          >
            Accept All
          </button>
          <button
            onClick={() => accept("essential")}
            className="inline-flex h-8 items-center rounded-md border border-border px-4 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Essential Only
          </button>
          <button
            onClick={() => setShowPrefs(!showPrefs)}
            className="ml-auto text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {showPrefs ? "Hide" : "Customize"}
          </button>
        </div>
      </div>
    </div>
  );
}
