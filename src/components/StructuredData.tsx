// JSON-LD structured data for SEO rich snippets
// All data is hardcoded constants — no user input, no XSS risk

export function StructuredData() {
  const canonicalLogo = "https://brik64.com/brand/brik64-logo-primary-horizontal-black.svg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BRIK64",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Windows, Linux",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier — CLI + all SDKs forever",
    },
    description:
      "Bounded software infrastructure for AI-era engineering. Review logic as a blueprint, keep domains explicit, and emit across supported targets.",
    url: "https://brik64.com",
    downloadUrl: "https://brik64.com/download",
    author: {
      "@type": "Organization",
      name: "BRIK64 Inc.",
      url: "https://brik64.com",
      logo: canonicalLogo,
      sameAs: [
        "https://github.com/brik64",
        "https://discord.gg/brik64",
      ],
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BRIK64 Inc.",
    url: "https://brik64.com",
    logo: canonicalLogo,
    description:
      "Bounded software infrastructure with reviewable blueprints, explicit domains, and closure-aware workflows.",
    sameAs: [
      "https://github.com/brik64",
      "https://discord.gg/brik64",
      "https://digitalcircuitality.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@brik64.com",
      contactType: "customer support",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BRIK64",
    url: "https://brik64.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://docs.brik64.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Safe: all values are compile-time string constants, not user input
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
