export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "BRIK64",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "macOS, Windows, Linux",
            description:
              "The AI-native synthetic language. 128 verified operations composed through EVA algebra. Write once, verify everywhere.",
            url: "https://brik64.com",
          }),
        }}
      />
    </>
  );
}
