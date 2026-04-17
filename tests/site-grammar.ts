import fs from "fs";
import path from "path";

export const ROOT = path.resolve(__dirname, "..");
export const APP_DIR = path.join(ROOT, "src", "app");

export function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf-8");
}

export function getAllPageFiles(dir = APP_DIR): string[] {
  const results: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllPageFiles(fullPath));
      continue;
    }
    if (entry.name === "page.tsx") {
      results.push(fullPath);
    }
  }

  return results;
}

export const productCorePages = [
  "src/app/page.tsx",
  "src/app/pcd/page.tsx",
  "src/app/platform/page.tsx",
  "src/app/registry/page.tsx",
  "src/app/sdks/page.tsx",
  "src/app/transpiler/page.tsx",
  "src/app/lifter/page.tsx",
  "src/app/bpu/page.tsx",
  "src/app/features/page.tsx",
  "src/app/foundations/page.tsx",
] as const;

export const productMigratedPages = [
  "src/app/cli/page.tsx",
  "src/app/compliance/page.tsx",
  "src/app/about/page.tsx",
  "src/app/pricing/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/faq/page.tsx",
  "src/app/enterprise/page.tsx",
] as const;

export const productRestoredPages = [
  "src/app/ai-agents/page.tsx",
] as const;

export const editorialPages = [
  "src/app/blog/page.tsx",
  "src/app/blog/page/[page]/page.tsx",
  "src/app/blog/[slug]/page.tsx",
  "src/app/news/page.tsx",
  "src/app/news/[slug]/page.tsx",
] as const;

export const utilityWrapperPages = [
  ["src/app/download/page.tsx", "download"],
  ["src/app/legal/page.tsx", "legal"],
  ["src/app/playground/page.tsx", "playground"],
  ["src/app/changelog/page.tsx", "changelog"],
  ["src/app/docs/page.tsx", "docs"],
  ["src/app/login/page.tsx", "login"],
  ["src/app/signup/page.tsx", "signup"],
  ["src/app/investors/page.tsx", "investors"],
  ["src/app/careers/page.tsx", "careers"],
  ["src/app/contact-sales/page.tsx", "contactSales"],
  ["src/app/security/page.tsx", "security"],
  ["src/app/privacy-policy/page.tsx", "privacyPolicy"],
  ["src/app/terms-of-use/page.tsx", "termsOfUse"],
  ["src/app/dpa/page.tsx", "dpa"],
  ["src/app/subprocessors/page.tsx", "subprocessors"],
  ["src/app/cookie-policy/page.tsx", "cookiePolicy"],
  ["src/app/business-information/page.tsx", "businessInformation"],
  ["src/app/support/page.tsx", "support"],
  ["src/app/community-guides/page.tsx", "communityGuides"],
  ["src/app/postgresql-tutorial/page.tsx", "postgresqlTutorial"],
  ["src/app/startups/page.tsx", "startups"],
] as const;

export const auditedUtilityWrapperPages = utilityWrapperPages;

export const utilityDirectPages = [
  "src/app/design-system/page.tsx",
] as const;

export const commerceDirectPages = [
  "src/app/shop/page.tsx",
] as const;

export const utilityRestoredPages = [] as const;

export const riskWrapperPages = [
  ["src/app/ai/page.tsx", "thesisPages.ai"],
  ["src/app/blockchain/page.tsx", "thesisPages.blockchain"],
  ["src/app/safety-critical/page.tsx", "thesisPages.safetyCritical"],
  ["src/app/industries/aerospace/page.tsx", "industryPages.aerospace"],
  ["src/app/industries/ai/page.tsx", "industryPages.ai"],
  ["src/app/industries/automotive/page.tsx", "industryPages.automotive"],
  ["src/app/industries/engineering/page.tsx", "industryPages.engineering"],
  ["src/app/industries/finance/page.tsx", "industryPages.finance"],
  ["src/app/industries/government/page.tsx", "industryPages.government"],
  ["src/app/industries/healthcare/page.tsx", "industryPages.healthcare"],
  ["src/app/industries/science/page.tsx", "industryPages.science"],
  ["src/app/use-cases/ai-safety/page.tsx", "useCasePages.aiSafety"],
  ["src/app/use-cases/ci-cd-integration/page.tsx", "useCasePages.ciCdIntegration"],
  ["src/app/use-cases/cobol-migration/page.tsx", "useCasePages.cobolMigration"],
  ["src/app/use-cases/formal-verification/page.tsx", "useCasePages.formalVerification"],
  ["src/app/use-cases/universal-transpilation/page.tsx", "useCasePages.universalTranspilation"],
] as const;

export const auditedRiskThesisPages = [
  ["src/app/ai/page.tsx", "ai"],
  ["src/app/blockchain/page.tsx", "blockchain"],
  ["src/app/safety-critical/page.tsx", "safetyCritical"],
] as const;

export const auditedDirectProductPages = [
  "src/app/foundations/page.tsx",
  "src/app/bpu/page.tsx",
  "src/app/pcd/page.tsx",
] as const;

export const auditedMigratedProductPages = [
  "src/app/compliance/page.tsx",
] as const;

export const riskDirectPages = [
  "src/app/languages/[slug]/page.tsx",
] as const;

export const retiredPages = [
  "src/app/v2/page.tsx",
  "src/app/v2-jobs/page.tsx",
] as const;
