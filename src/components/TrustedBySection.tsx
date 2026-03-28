export function TrustedBySection() {
  return (
    <section className="border-border mx-auto w-full max-w-7xl border-x border-t">
      <div className="px-6 py-10 md:px-12 md:py-14">
        <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[3px] text-muted-foreground/60">
          Trusted by engineering teams at
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
          {[
            { src: "/brands/cloudflare.svg", alt: "Cloudflare" },
            { src: "/brands/nvidia.svg", alt: "NVIDIA" },
            { src: "/brands/lockheed-martin.svg", alt: "Lockheed Martin" },
            { src: "/brands/meta.svg", alt: "Meta" },
            { src: "/brands/tesla.svg", alt: "Tesla" },
            { src: "/brands/spacex.svg", alt: "SpaceX" },
            { src: "/brands/nasa.svg", alt: "NASA" },
            { src: "/brands/apple.svg", alt: "Apple" },
          ].map((brand) => (
            <img
              key={brand.alt}
              src={brand.src}
              alt={brand.alt}
              className="h-6 opacity-40 grayscale transition-all hover:opacity-70 hover:grayscale-0 md:h-7"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
