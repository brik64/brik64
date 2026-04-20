import Image from "next/image";

import {
  BrandWordmark,
  DiscordMark,
  FooterColumn,
  FooterLinkGroup,
  GitHubMark,
  renderBrandText,
  SocialIconLink,
} from "@/components/vnext/primitives";
import { footerGroups, socialLinks } from "@/lib/site-config";

function XMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.244 2H21l-6.02 6.88L22 22h-5.514l-4.32-5.655L7.214 22H4.457l6.44-7.36L2 2h5.654l3.905 5.146L18.244 2Zm-.967 18h1.528L6.824 3.895H5.184L17.277 20Z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 13.02c0-3.48-1.86-5.1-4.34-5.1-2 0-2.9 1.1-3.4 1.88V8.5H9.31c.04.86 0 11.5 0 11.5h3.39v-6.42c0-.34.02-.68.12-.93.27-.67.88-1.36 1.9-1.36 1.34 0 1.88 1.02 1.88 2.52V20H20v-6.98c0 .01.44 0 .44 0Z" />
    </svg>
  );
}

function YouTubeMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M21.58 7.19a2.97 2.97 0 0 0-2.09-2.1C17.63 4.6 12 4.6 12 4.6s-5.63 0-7.49.5a2.97 2.97 0 0 0-2.09 2.1A31.4 31.4 0 0 0 2 12a31.4 31.4 0 0 0 .42 4.81 2.97 2.97 0 0 0 2.09 2.1c1.86.49 7.49.49 7.49.49s5.63 0 7.49-.5a2.97 2.97 0 0 0 2.09-2.09A31.4 31.4 0 0 0 22 12a31.4 31.4 0 0 0-.42-4.81ZM10.2 15.1V8.9l5.4 3.1-5.4 3.1Z" />
    </svg>
  );
}

const socialIconMap = {
  Discord: <DiscordMark className="h-4 w-4" />,
  GitHub: <GitHubMark className="h-4 w-4" />,
  "X.com": <XMark />,
  LinkedIn: <LinkedInMark />,
  YouTube: <YouTubeMark />,
} as const;

export function Footer() {
  const [productGroup, companyGroup, legalGroup, resourcesGroup] = footerGroups;
  const isExternal = (item: unknown) =>
    typeof item === "object" &&
    item !== null &&
    "external" in item &&
    (item as { external?: boolean }).external === true;

  return (
    <footer className="border-t border-white/8 bg-[#04070b]">
      <div className="mx-auto max-w-[1480px] px-6 py-24 md:px-8 lg:px-14">
        <div className="flex flex-col gap-10 border-b border-white/8 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Image
              src="/brand/brik64-logo-primary-horizontal-white.svg"
              alt="BRIK64"
              width={184}
              height={36}
              unoptimized
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-[32ch] text-[15px] leading-8 text-white/60">
              Verified software platform for bounded blueprints, supported target emission,
              and registry-native reuse.
            </p>
          </div>
          <div className="space-y-4 lg:min-w-[320px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/36">
              Follow <BrandWordmark>BRIK64</BrandWordmark>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <SocialIconLink href={socialLinks.discord} label="Discord" icon={<DiscordMark className="h-5 w-5" />} compact />
              <SocialIconLink href={socialLinks.githubOrg} label="GitHub" icon={<GitHubMark className="h-5 w-5" />} compact />
              <SocialIconLink href={socialLinks.x} label="X.com" icon={<XMark />} compact />
              <SocialIconLink href={socialLinks.linkedin} label="LinkedIn" icon={<LinkedInMark />} compact />
              <SocialIconLink href={socialLinks.youtube} label="YouTube" icon={<YouTubeMark />} compact />
            </div>
          </div>
        </div>

        <div className="grid gap-x-12 gap-y-12 pt-12 md:grid-cols-2 xl:grid-cols-4">
          <FooterColumn title={productGroup.title}>
            {productGroup.links.map((item) => (
              <FooterLinkGroup
                key={`${productGroup.title}-${item.label}`}
                href={item.href}
                label={item.label}
                external={isExternal(item)}
              />
            ))}
          </FooterColumn>

          <FooterColumn title={companyGroup.title}>
            {companyGroup.links.map((item) => (
              <FooterLinkGroup
                key={`${companyGroup.title}-${item.label}`}
                href={item.href}
                label={item.label}
                external={isExternal(item)}
              />
            ))}
          </FooterColumn>

          <FooterColumn title={resourcesGroup.title}>
            {resourcesGroup.links.map((item) => (
              <FooterLinkGroup
                key={`${resourcesGroup.title}-${item.label}`}
                href={item.href}
                label={item.label}
                external={isExternal(item)}
              />
            ))}
          </FooterColumn>

          <FooterColumn title={legalGroup.title}>
            {legalGroup.links.map((item) => (
              <FooterLinkGroup
                key={`${legalGroup.title}-${item.label}`}
                href={item.href}
                label={item.label}
                external={isExternal(item)}
              />
            ))}
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>{renderBrandText("© 2026 BRIK64. All rights reserved.")}</p>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/30">verified software platform</p>
        </div>
      </div>
    </footer>
  );
}
