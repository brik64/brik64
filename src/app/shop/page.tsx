import Link from "next/link";
import {
  SupportingSurface,
  ProductFrame,
  ButtonVNext
} from "@/components/vnext/primitives";
import { EditorialHeroVNext } from "@/components/vnext/editorial";
import { CanonicalPageLayout } from "@/components/PageArchetypes";
import { getPrintfulStorefront } from "@/lib/printful";

export const metadata = {
  title: "Shop — BRIK64",
  description:
    "BRIK64 merchandise storefront and team-order support.",
};

function formatPrice(minPrice: number, maxPrice: number, currency: string): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  });

  if (minPrice === maxPrice) {
    return formatter.format(minPrice);
  }

  return `${formatter.format(minPrice)} - ${formatter.format(maxPrice)}`;
}

export default async function ShopPage() {
  const storefront = await getPrintfulStorefront();

  return (
    <CanonicalPageLayout>
      <EditorialHeroVNext 
        eyebrow="Merch storefront"
        title="BRIK64 Core Gear"
        description="Merchandise, product details, and team-order support."
        topics={["Stickers", "Apparel", "Hardware Essentials"]}
      />
      
      <main className="flex-1">
        {/* Product Grid */}
        <SupportingSurface className="relative border-t border-white/5 bg-transparent py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            {storefront.products.length === 0 ? (
              <div className="rounded-[2.5rem] border border-white/10 bg-[#05080c]/60 p-12 text-center lg:p-20">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">Store status</p>
                <h2 className="mt-6 text-3xl font-bold text-white max-w-xl mx-auto">The current product drop is not available in this build.</h2>
                <p className="mt-6 text-lg text-white/50 mx-auto max-w-lg">
                   Check support for current availability.
                </p>
              </div>
            ) : (
              <div className="space-y-16">
                <div className="flex items-end justify-between gap-6 border-b border-white/5 pb-8">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Current Collection</p>
                    <h2 className="text-3xl font-bold tracking-tight text-white">Selected Hardware Essentials</h2>
                  </div>
                  <p className="hidden text-sm font-medium text-white/30 sm:block">
                    {storefront.products.length} Items found
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {storefront.products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/shop/${product.slug}`}
                      className="group flex flex-col overflow-hidden rounded-[24px] border border-white/8 bg-[#070b11] p-5 transition-colors hover:border-[color:var(--accent)]/28"
                    >
                      <ProductFrame className="aspect-square flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-[1.02] overflow-hidden rounded-[18px] border border-black/8 bg-white">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-full w-full object-contain mix-blend-multiply"
                          loading="lazy"
                        />
                      </ProductFrame>
                      
                      <div className="mt-8 flex items-start justify-between gap-4 px-2 pb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[color:var(--accent)] transition-colors">{product.name}</h3>
                          <p className="mt-2 text-sm font-medium text-white/40">{product.variants.length} Available variants</p>
                        </div>
                        <p className="text-sm font-black uppercase tracking-widest text-white mt-1 shrink-0">
                          {formatPrice(product.minPrice, product.maxPrice, product.currency)}
                        </p>
                      </div>
                      
                      <div className="mt-8 flex items-center justify-between px-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-white transition-colors">
                        <span>View Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SupportingSurface>
        
        {/* Support Path */}
        <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-8 lg:px-12 text-center">
           <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-white">Need custom team gear?</h2>
              <p className="text-lg text-white/50 leading-relaxed">
                For bulk or custom orders, contact sales.
              </p>
              <div className="flex justify-center gap-6 pt-4">
                <ButtonVNext href="/support" tone="secondary" className="rounded-xl px-10">
                  Store Support
                </ButtonVNext>
                <ButtonVNext href="/contact-sales" tone="primary" className="rounded-xl px-10 font-black">
                  Request Team Quote
                </ButtonVNext>
              </div>
           </div>
        </section>
      </main>
    </CanonicalPageLayout>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
