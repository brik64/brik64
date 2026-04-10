import { HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";
import { EvidenceSurface, FeatureMatrixSurface, HomeSectionHeader } from "@/components/PageArtifacts";

export function EnterpriseSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[09] · ENTERPRISE"
          title="Enterprise proof means operational evidence, not just passing tests."
          description="Platform teams need explicit scope, traceability, and deployable proof packets."
        />

        <div className="mt-10 grid gap-6">
          <FeatureMatrixSurface
            eyebrow="Enterprise Surface"
            title="Commercial support wraps around the same certifiable core."
            description="The enterprise layer defines what becomes operationally available once certified circuits enter a real organization."
            metrics={[
              { label: "Review path", value: "PR-native", detail: "Evidence lands where engineering review already happens." },
              { label: "Identity", value: "SSO / SAML", detail: "Org controls exist without creating a parallel trust surface." },
              { label: "Support", value: "Scoped", detail: "Support and SLAs attach to bounded product layers, not vague guarantees." },
            ]}
            rows={[
              { title: "CI/CD integration", body: "GitHub Actions, GitLab CI, and Jenkins keep certification inside the existing delivery path.", state: "accent" },
              { title: "Compliance evidence", body: "Mapped reports, support documents, and trace exports give audit teams a concrete review packet." },
              { title: "Certification badges", body: "Badges remain live proof endpoints instead of static screenshots in a README." },
            ]}
          />

          <EvidenceSurface
            eyebrow="Enterprise Evidence"
            title="The commercial story stays bounded by the technical one."
            description="Enterprise add-ons sharpen the proof chain instead of widening the mathematical claim."
            items={[
              { label: "Audit trail", body: "Certification runs, exports, and package changes remain historically inspectable." },
              { label: "Private registry", body: "Organizations can retain certified circuits inside internal package surfaces with the same metadata model." },
              { label: "Support posture", body: "Dedicated support helps teams integrate BRIK64 into delivery and audit flows without changing the proof semantics." },
            ]}
            footer={<span>Enterprise features increase operational readiness. They do not widen the mathematical claim beyond the certified scope of each circuit.</span>}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <HomeSecondaryButton href="/contact" className="opacity-90">
            Request architecture review
          </HomeSecondaryButton>
        </div>
      </div>
    </section>
  );
}
