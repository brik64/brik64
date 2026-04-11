"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ── Page ── */

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Legal
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Terms & <span className="text-teal">Policies.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Last updated: March 2026
            </p>
          </div>
        </section>

        {/* Terms of Service */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] TERMS OF SERVICE
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">Terms of Service</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              By accessing or using the BRIK64 platform, CLI tools, APIs, SDKs, or any associated
              services (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms
              of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the Service.
            </p>
            <h3 className="text-sm font-bold text-foreground">1. Service Description</h3>
            <p>
              BRIK64 provides software verification tools including a compiler, lifter, certification
              engine, and platform for creating, verifying, and sharing PCD (Printed Circuit Description)
              blueprints. The platform is currently provided in beta and features, functionality, and
              pricing are subject to change without prior notice.
            </p>
            <h3 className="text-sm font-bold text-foreground">2. Beta Disclaimer</h3>
            <p>
              During the beta period, the Service is provided &ldquo;as-is&rdquo; without warranties
              of any kind, express or implied. BRIK64 makes no guarantees regarding uptime, data
              preservation, or feature availability during beta.
            </p>
            <h3 className="text-sm font-bold text-foreground">3. User Accounts</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and
              for all activities that occur under your account. You must immediately notify us of any
              unauthorized use.
            </p>
            <h3 className="text-sm font-bold text-foreground">4. Acceptable Use</h3>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Use the Service for any illegal activities</li>
              <li>Attempt to reverse-engineer the TCE or certification engine</li>
              <li>Abuse API rate limits or scrape platform content</li>
              <li>Interfere with or disrupt the Service or its infrastructure</li>
              <li>Misrepresent certification status or forge certification badges</li>
            </ul>
            <h3 className="text-sm font-bold text-foreground">5. Modifications</h3>
            <p>
              BRIK64 reserves the right to modify these Terms at any time. Continued use of the
              Service after changes constitutes acceptance of the modified Terms.
            </p>
            <h3 className="text-sm font-bold text-foreground">6. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, BRIK64 shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of the
              Service. The certification provided by the TCE is a mathematical verification tool and
              does not constitute a warranty of fitness for any particular purpose.
            </p>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] PRIVACY POLICY
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">Privacy Policy</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <h3 className="text-sm font-bold text-foreground">Data We Collect</h3>
            <p>We collect minimal data necessary to provide the Service:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Email address (for account creation and communication)</li>
              <li>Usage preferences and settings</li>
              <li>Anonymous usage metrics (aggregated, non-identifying)</li>
              <li>PCD blueprints and certification hashes (only when you choose to publish)</li>
            </ul>

            <h3 className="text-sm font-bold text-foreground">Source Code</h3>
            <p>
              <strong className="text-foreground">By default, source processing runs locally in the CLI workflow.</strong>{" "}
              PCD blueprints and certification hashes are stored on the platform only when you explicitly choose to publish them.
            </p>

            <h3 className="text-sm font-bold text-foreground">Data Sharing</h3>
            <p>
              We do not sell, trade, or share your personal information for marketing purposes. We may
              share data only when required by law or to protect the safety and security of the Service.
            </p>

            <h3 className="text-sm font-bold text-foreground">Data Security</h3>
            <p>
              We use industry-standard encryption (TLS 1.3 in transit, AES-256 at rest) to protect
              your data. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h3 className="text-sm font-bold text-foreground">GDPR Compliance</h3>
            <p>
              We are committed to GDPR compliance. You have the right to access, correct, export, or
              delete your personal data at any time. Contact{" "}
              <a href="mailto:privacy@brik64.com" className="text-teal hover:underline">
                privacy@brik64.com
              </a>{" "}
              for data requests.
            </p>

            <h3 className="text-sm font-bold text-foreground">Data Retention</h3>
            <p>
              All data associated with your account is deleted upon account termination, subject to
              legal retention requirements. Published PCD blueprints in the public registry remain
              available unless explicitly removed.
            </p>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] INTELLECTUAL PROPERTY
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">Intellectual Property</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Digital Circuitality&trade;, BRIK64&trade;, PCD&trade;, and BPU&trade; are trademarks
              of BRIK64 Inc. The compiler, runtime, mathematical proofs, and TCE certification engine are
              proprietary.
            </p>
            <p>
              <strong className="text-foreground">Your PCD blueprints remain your intellectual property.</strong>{" "}
              Publishing to the registry grants BRIK64 a non-exclusive license to host and serve the
              content. You may remove your blueprints at any time.
            </p>

            <h3 className="text-sm font-bold text-foreground">Open Source</h3>
            <p>
              The CLI is available under a dual license: free for academic and non-commercial use,
              commercial license required for business use. BSL 1.1 is under consideration for the
              open source components. Academic institutions receive free licenses including all Pro features.
            </p>
          </div>
        </section>

        {/* Cookie Policy */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] COOKIE POLICY
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">Cookie Policy</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              This Cookie Policy explains how BRIK64 Inc. (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
              uses cookies and similar tracking technologies when you visit brik64.com and related services.
              This policy complies with the EU General Data Protection Regulation (GDPR), the ePrivacy
              Directive, and the California Consumer Privacy Act (CCPA).
            </p>

            <h3 className="text-sm font-bold text-foreground">What Are Cookies</h3>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help
              the site remember your preferences and understand how you interact with the content.
            </p>

            <h3 className="text-sm font-bold text-foreground">Types of Cookies We Use</h3>

            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-4 py-2.5 text-left font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 text-left font-semibold text-foreground">Purpose</th>
                    <th className="px-4 py-2.5 text-left font-semibold text-foreground">Duration</th>
                    <th className="px-4 py-2.5 text-left font-semibold text-foreground">Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Essential</td>
                    <td className="px-4 py-2.5">Site functionality, authentication, security, cookie consent preferences</td>
                    <td className="px-4 py-2.5">Session &ndash; 1 year</td>
                    <td className="px-4 py-2.5 font-medium text-emerald-600">Always on</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5">Anonymous usage metrics, page views, feature adoption, error tracking</td>
                    <td className="px-4 py-2.5">Up to 2 years</td>
                    <td className="px-4 py-2.5 font-medium text-teal">Opt-in</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Marketing</td>
                    <td className="px-4 py-2.5">Personalized content, retargeting, campaign measurement</td>
                    <td className="px-4 py-2.5">Up to 1 year</td>
                    <td className="px-4 py-2.5 font-medium text-teal">Opt-in</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-sm font-bold text-foreground">Essential Cookies</h3>
            <p>
              These cookies are strictly necessary for the website to function. They include cookies
              that remember your cookie consent choice, maintain your session if logged in, and protect
              against cross-site request forgery (CSRF). These cannot be disabled.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">brik64-cookie-consent</code> &mdash; Stores your cookie preferences (localStorage)</li>
              <li><code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">brik64-session</code> &mdash; Authentication session token</li>
              <li><code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">__cf_bm</code> &mdash; Cloudflare bot management</li>
            </ul>

            <h3 className="text-sm font-bold text-foreground">Analytics Cookies</h3>
            <p>
              When you consent to analytics cookies, we collect anonymous usage data to understand how
              visitors interact with our site. This data is aggregated and cannot identify you personally.
              We use privacy-focused analytics that do not track users across sites.
            </p>

            <h3 className="text-sm font-bold text-foreground">Marketing Cookies</h3>
            <p>
              Marketing cookies are only set with your explicit consent. They allow us to deliver
              relevant content and measure the effectiveness of our campaigns. You can opt out at any
              time through the cookie banner or by contacting us.
            </p>

            <h3 className="text-sm font-bold text-foreground">Your Rights</h3>
            <p>Under GDPR and CCPA, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-foreground">Access</strong> &mdash; Request a copy of the data we hold about you</li>
              <li><strong className="text-foreground">Rectification</strong> &mdash; Correct inaccurate personal data</li>
              <li><strong className="text-foreground">Erasure</strong> &mdash; Request deletion of your personal data</li>
              <li><strong className="text-foreground">Restrict processing</strong> &mdash; Limit how we use your data</li>
              <li><strong className="text-foreground">Data portability</strong> &mdash; Export your data in a machine-readable format</li>
              <li><strong className="text-foreground">Withdraw consent</strong> &mdash; Change your cookie preferences at any time via the cookie banner</li>
              <li><strong className="text-foreground">Opt-out of sale</strong> (CCPA) &mdash; We do not sell personal information</li>
            </ul>

            <h3 className="text-sm font-bold text-foreground">Managing Cookies</h3>
            <p>
              You can manage your cookie preferences at any time by clicking the cookie banner that
              appears at the bottom of any page, or by clearing your browser cookies to reset your
              preferences. Most browsers also allow you to block or delete cookies in their settings.
            </p>

            <h3 className="text-sm font-bold text-foreground">Third-Party Cookies</h3>
            <p>
              We minimize the use of third-party cookies. When present, they are limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-foreground">Cloudflare</strong> &mdash; CDN, security, and performance (essential)</li>
              <li><strong className="text-foreground">GitHub</strong> &mdash; Embedded content from our repositories (functional)</li>
            </ul>

            <h3 className="text-sm font-bold text-foreground">Do Not Track</h3>
            <p>
              We respect the Do Not Track (DNT) browser signal. When detected, we disable all
              non-essential cookies regardless of your consent preferences.
            </p>

            <h3 className="text-sm font-bold text-foreground">Changes to This Policy</h3>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this
              page with an updated &ldquo;last modified&rdquo; date. Significant changes will be
              communicated via email or a notice on our website.
            </p>

            <h3 className="text-sm font-bold text-foreground">Contact</h3>
            <p>
              For questions about this Cookie Policy or to exercise your data rights, contact our
              Data Protection Officer at{" "}
              <a href="mailto:privacy@brik64.com" className="text-teal hover:underline">
                privacy@brik64.com
              </a>.
            </p>

            <p className="text-xs text-muted-foreground/60 italic">
              Last updated: April 2026
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <div className="mx-auto max-w-3xl border border-border bg-muted/10 p-6">
            <p className="text-sm text-muted-foreground">
              For legal inquiries, contact{" "}
              <a href="mailto:legal@brik64.com" className="text-teal hover:underline">
                legal@brik64.com
              </a>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              &copy; 2026 BRIK64 Inc. All rights reserved.
            </p>
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
