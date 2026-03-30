import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/* ── Page ── */

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Legal
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Terms & <span className="text-[#00b8d4]">Policies.</span>
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
              By accessing or using the BRIK-64 platform, CLI tools, APIs, SDKs, or any associated
              services (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms
              of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the Service.
            </p>
            <h3 className="text-sm font-bold text-foreground">1. Service Description</h3>
            <p>
              BRIK-64 provides software verification tools including a compiler, lifter, certification
              engine, and platform for creating, verifying, and sharing PCD (Printed Circuit Description)
              blueprints. The platform is currently provided in beta and features, functionality, and
              pricing are subject to change without prior notice.
            </p>
            <h3 className="text-sm font-bold text-foreground">2. Beta Disclaimer</h3>
            <p>
              During the beta period, the Service is provided &ldquo;as-is&rdquo; without warranties
              of any kind, express or implied. BRIK-64 makes no guarantees regarding uptime, data
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
              BRIK-64 reserves the right to modify these Terms at any time. Continued use of the
              Service after changes constitutes acceptance of the modified Terms.
            </p>
            <h3 className="text-sm font-bold text-foreground">6. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, BRIK-64 shall not be liable for any indirect,
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
              <strong className="text-foreground">Your source code is never stored on our servers.</strong>{" "}
              The CLI processes code locally on your machine. Only PCD blueprints and certification
              hashes are stored on the platform if you explicitly choose to publish them.
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
              Digital Circuitality&trade;, BRIK-64&trade;, PCD&trade;, and BPU&trade; are trademarks
              of BRIK-64 Inc. The compiler, runtime, Coq proofs, and TCE certification engine are
              proprietary.
            </p>
            <p>
              <strong className="text-foreground">Your PCD blueprints remain your intellectual property.</strong>{" "}
              Publishing to the registry grants BRIK-64 a non-exclusive license to host and serve the
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
              &copy; 2026 BRIK-64 Inc. All rights reserved.
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
