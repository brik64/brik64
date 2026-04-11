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
        description="This internal design reference uses the same shell and cadence as the rest of the public site."
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
          description="It clarifies the living site grammar and avoids parallel visual languages."
        />
        <div className="mx-auto mt-10 max-w-6xl">
          <DesignKitSection />
        </div>
      </CanonicalSection>

      <CanonicalSection>
        <div className="mx-auto max-w-6xl">
          <DocsRailSurface
            eyebrow="Reference Rails"
            title="The design system references point back to the governing docs."
            description="This surface makes the truth hierarchy explicit for anyone changing copy or visuals."
            links={[
              { title: "Design canon", body: "The active design-system document for the site.", href: "/docs" },
              { title: "Content scope", body: "Claim boundaries and truth-set guidance.", href: "https://github.com/brik64/brik64.com", external: true },
              { title: "Platform", body: "The strongest public example of the product grammar.", href: "/platform" },
            ]}
            note="This design reference is part of the live system and remains consistent with the public routes it governs."
          />
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
