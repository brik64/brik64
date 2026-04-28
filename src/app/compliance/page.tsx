import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";

const compliancePage: UtilityPageSpec = {
  hero: {
    eyebrow: "Compliance",
    title: "Compliance review starts with bounded software evidence, not blanket",
    highlight: "certification claims.",
    backgroundImageSrc: "/generated/compliance-hero-bg.png",
    description: "BRIK64 generates reviewable software evidence that teams can carry into audit and governance workflows. That evidence supports engineering and compliance review; it does not satisfy regulatory or organizational programs on its own.",
    actions: [
      { label: "Request evaluation", href: "mailto:enterprise@brik64.com", tone: "primary" },
      { label: "Enterprise", href: "/enterprise", tone: "secondary" },
    ],
    metrics: [
      { label: "Core claim", value: "Evidence generation", detail: "The route focuses on bounded logic, change-sensitive evidence, and readable review state." },
      { label: "Claim posture", value: "Scope explicit", detail: "This evidence model does not imply complete regulatory certification." },
      { label: "Review fit", value: "Engineering + audit", detail: "The useful output is evidence another team can inspect quickly." },
    ],
  },
  sectionHeader: {
    eyebrow: "Compliance",
    title: "What compliance evidence covers and what it does not",
    description: "Readers should see what software evidence is produced, how it is scoped, and where it fits into wider audit or compliance workflows.",
  },
  primarySurface: {
    eyebrow: "Evidence path",
    title: "Bounded software evidence for engineering and audit review",
    description: "Compliance posture is expressed through readable software evidence rather than floating standards badges.",
    metrics: [
      { label: "Evidence type", value: "Change-sensitive review packet", detail: "The output stays tied to the exact code path or blueprint under review." },
      { label: "Review use", value: "Engineering + audit", detail: "Teams can inspect what was checked and what changed." },
      { label: "Boundary", value: "Software logic", detail: "Organizational, process, and infrastructure controls still sit outside this claim set." },
    ],
    rows: [
      { title: "Software logic", body: "Bounded logic can be reviewed directly", note: "proof" },
      { title: "Audit support", body: "Evidence helps reviewers move faster" },
      { title: "Claim boundary", body: "Software evidence is not the whole program", note: "risk" },
    ],
    statusLabel: "evidence surface",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "COMPLIANCE",
    title: "Regulatory Compliance Mapping",
    description: "Automatically map your AI trust assessments to major regulatory frameworks.",
    complianceItems: [
      {
        name: "EU AI Act",
        description: "Full conformity assessment",
        logoSrc: "/compliance-logos/eu-ai-act.png",
        logoAlt: "EU AI Act logo",
        fallback: "EU",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:The_EU_Artificial_Intelligence_Act_Main_Logo.png",
      },
      {
        name: "NIST AI RMF",
        description: "Risk management alignment",
        logoSrc: "/compliance-logos/nist.svg",
        logoAlt: "National Institute of Standards and Technology logo",
        fallback: "NIST",
        sourceUrl: "https://www.nist.gov/itl/ai-risk-management-framework",
      },
      {
        name: "HIPAA",
        description: "Healthcare data protection",
        logoSrc: "/compliance-logos/hipaa.svg",
        logoAlt: "HIPAA logo",
        fallback: "HIPAA",
        sourceUrl: "https://seeklogo.com/free-vector-logos/hipaa",
      },
      {
        name: "SOC 2",
        description: "Security & availability",
        logoSrc: "/compliance-logos/soc2.svg",
        logoAlt: "SOC 2 logo",
        fallback: "SOC",
        sourceUrl: "https://www.aicpa-cima.com/resources/download/soc-for-service-organizations-logo-guidelines-for-service-organization",
      },
      {
        name: "GDPR",
        description: "Data privacy compliance",
        logoSrc: "/compliance-logos/gdpr.svg",
        logoAlt: "GDPR regulation document emblem",
        fallback: "GDPR",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:GDPR_p1.svg",
      },
      {
        name: "ISO 42001",
        description: "AI management systems",
        logoSrc: "/compliance-logos/iso-42001.svg",
        logoAlt: "ISO 42001 badge",
        fallback: "ISO",
        sourceUrl: "https://www.figma.com/community/file/1458082992679071182/iso-security-logos-and-badges",
      },
    ],
    kind: "compliance",
    statusLabel: "framework mapping",
    statusTone: "neutral",
  },
  cta: {
    title: "Request a compliance evaluation",
    description: "Connect with our team to understand how bounded software evidence fits into your existing audit and governance workflows.",
    actions: [
      { label: "Contact sales", href: "mailto:enterprise@brik64.com", tone: "primary" },
      { label: "Back to home", href: "/", tone: "secondary" },
    ],
  },
};

export const metadata = {
  title: "Compliance — BRIK64",
  description: "Bounded software evidence, review support, and explicit claim boundaries for compliance-facing workflows.",
};

export default function CompliancePage() {
  return <UtilityPageView page={compliancePage} />;
}
