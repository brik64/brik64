import {
  GitBranch,
  FileCheck,
  BadgeCheck,
  KeyRound,
  ClipboardList,
  Headset,
} from "lucide-react";
import type { ReactNode } from "react";

const features: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <GitBranch className="h-5 w-5 text-teal" />,
    title: "CI/CD Integration",
    description: "GitHub Actions, GitLab CI, Jenkins plugins",
  },
  {
    icon: <FileCheck className="h-5 w-5 text-teal" />,
    title: "Compliance Reports",
    description: "Auto-generated SOC2, HIPAA, PCI-DSS evidence",
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-teal" />,
    title: "Certification Badges",
    description: "Embeddable, verifiable certification for READMEs",
  },
  {
    icon: <KeyRound className="h-5 w-5 text-teal" />,
    title: "SSO / SAML",
    description: "Enterprise authentication out of the box",
  },
  {
    icon: <ClipboardList className="h-5 w-5 text-teal" />,
    title: "Audit Trail",
    description: "Full history of certifications, exports, changes",
  },
  {
    icon: <Headset className="h-5 w-5 text-teal" />,
    title: "SLA & Support",
    description: "99.9% uptime, dedicated support, on-premise option",
  },
];

export function EnterpriseSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [11] · ENTERPRISE
        </p>

        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
          Built for <span className="text-teal">regulated industries</span>.
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Fintech. Healthcare. Automotive. Government. When &ldquo;tests
          pass&rdquo; isn&apos;t enough.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-border [&>*]:border-border [&>*]:border-b [&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(odd)]:border-r md:[&>*:nth-child(odd)]:border-r-0 md:[&>*:nth-child(3n+1)]:border-r md:[&>*:nth-child(3n+2)]:border-r [&>*:last-child]:border-b-0 sm:[&>*:nth-last-child(-n+2)]:border-b-0 md:[&>*:nth-last-child(-n+3)]:border-b-0">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background p-6 transition-colors hover:bg-teal/[0.03]"
            >
              {feature.icon}
              <p className="mt-3 text-sm font-semibold">{feature.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
