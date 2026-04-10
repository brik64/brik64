import {
  ArchetypeSectionHeader,
  CanonicalPageHero,
  CanonicalPageLayout,
  CanonicalSection,
  DocsRailSurface,
} from "@/components/PageArchetypes";
import { DesignKitSection } from "@/components/DesignKitSection";

export const metadata = {
  title: "Design System — BRIK64",
  description:
    "Internal and public-facing design system surface for the current BRIK64 site grammar.",
};

export default function DesignSystemPage() {
  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow="Design System"
        title="The current site grammar is a family of bounded"
        highlight="page archetypes."
        description="This page remains internal-facing in tone, but it should still use the same shell and cadence as the rest of the public site."
        actions={[
          { label: "Read canon", href: "/docs", tone: "primary" },
          {
            label: "Repository docs",
            href: "https://github.com/brik64/brik64.com",
            tone: "secondary",
            external: true,
          },
        ]}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader
          eyebrow="Design Kit"
          title="The kit demonstrates the canonical surfaces and their allowed variations."
          description="It should clarify the living site grammar, not preserve a parallel visual language."
        />
        <div className="mx-auto mt-10 max-w-6xl">
          <DesignKitSection />
        </div>
      </CanonicalSection>

      <CanonicalSection>
        <div className="mx-auto max-w-6xl">
          <DocsRailSurface
            eyebrow="Reference Rails"
            title="The design system page should point back to the governing docs."
            description="This surface makes the truth hierarchy explicit for anyone changing copy or visuals."
            links={[
              { title: "Design canon", body: "The active design-system document for the site.", href: "/docs" },
              { title: "Content scope", body: "Claim boundaries and truth-set guidance.", href: "https://github.com/brik64/brik64.com", external: true },
              { title: "Platform", body: "The strongest public example of the product grammar.", href: "/platform" },
            ]}
            note="This page is part of the live system and should remain consistent with the public routes it governs."
          />
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
