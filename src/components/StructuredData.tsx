export function StructuredData() {
  const canonicalLogo = "https://brik64.com/brand/brik64-logo-primary-horizontal-white.svg";

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
      description: "Open entry path through CLI and public documentation.",
    },
    description:
      "Compile, certify, and publish bounded blueprints across supported targets with visible package state.",
    url: "https://brik64.com",
    downloadUrl: "https://brik64.com/cli",
    author: {
      "@type": "Organization",
      name: "BRIK64 Inc.",
      url: "https://brik64.com",
      logo: canonicalLogo,
      sameAs: [
        "https://github.com/brik64",
        "https://discord.gg/brik64",
        "https://x.com/brik64com",
        "https://www.linkedin.com/company/brik64/",
        "https://www.youtube.com/@brik64",
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
      "Verified software platform for bounded blueprints, supported target emission, and registry-native reuse.",
    sameAs: [
      "https://github.com/brik64",
      "https://discord.gg/brik64",
      "https://x.com/brik64com",
      "https://www.linkedin.com/company/brik64/",
      "https://www.youtube.com/@brik64",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
    </>
  );
}
