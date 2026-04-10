import { notFound } from "next/navigation";

import {
  ArchetypeSectionHeader,
  CanonicalPageHero,
  CanonicalPageLayout,
  CanonicalSection,
  DocsRailSurface,
  LanguageExchangeSurface,
} from "@/components/PageArchetypes";
import { getLanguageBySlug, languages } from "@/lib/language-data";

const sdkExamples: Record<string, { description: string; code: string }> = {
  javascript: {
    description:
      "Use verified monomer patterns inside a JavaScript or TypeScript workflow and keep the path back to PCD explicit when you need a bounded artifact.",
    code: `import { mc, eva } from "@brik64/core";

const safeAdd = mc.add8(200, 100);
const pipeline = eva.seq(
  (x) => mc.add8(x, 10),
  (x) => mc.mod8(x, 7),
);`,
  },
  python: {
    description:
      "Use the Python package as a host-language bridge while keeping the formal path available when the workflow needs certification or liftability.",
    code: `from brik64.mc import arithmetic

result = arithmetic.add8(200, 100)
digest = arithmetic.mod8(result, 7)`,
  },
  rust: {
    description:
      "Use Rust as a strongly typed host while keeping the same lift, check, and publish story visible to the operator.",
    code: `use brik64_core::mc;

let sum = mc::add8(200, 100);
let reduced = mc::mod8(sum, 7);`,
  },
};

export function generateStaticParams() {
  return languages.map((language) => ({ slug: language.slug }));
}

export default async function LanguagePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const language = getLanguageBySlug(slug);

  if (!language) {
    return notFound();
  }

  const exchangeCode =
    sdkExamples[language.slug]?.code ??
    language.compileExample?.output ??
    language.liftExample?.output ??
    language.liftExample?.input;

  const exchangeDescription =
    sdkExamples[language.slug]?.description ??
    `Use ${language.name} as part of the same bounded lift, check, and compile story that appears elsewhere on the site.`;

  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow={`Language · ${language.name}`}
        title={`Work with ${language.name} through the`}
        description={language.description}
        metrics={[
          {
            label: "Lift from source",
            value: language.canLiftFrom ? "Supported" : "Not primary",
            detail: language.canLiftFrom
              ? `The public workflow can lift ${language.extension} source into a bounded blueprint.`
              : `This language is primarily a compilation target in the current public story.`,
          },
          {
            label: "Compile target",
            value: language.canCompileTo ? "Supported" : "Not primary",
            detail: language.canCompileTo
              ? `PCD can emit ${language.name} artifacts as part of the broader target story.`
              : `Compilation into ${language.name} is not the emphasis of this route today.`,
          },
          {
            label: "Host artifact",
            value: language.extension,
            detail: language.installCommand
              ? `The page can also route into the ${language.name} package path.`
              : `This route is presented as part of the target and interoperability story.`,
          },
        ]}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader
          eyebrow="Language Surface"
          title="Each language route now behaves like one bounded exchange surface."
          description="The page explains how the language enters the BRIK64 flow, what can be lifted or emitted, and where the operator should go next."
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
          <LanguageExchangeSurface
            eyebrow="Language Exchange"
            title={`${language.name} in the BRIK64 path`}
            description={exchangeDescription}
            metrics={[
              {
                label: "Install path",
                value: language.installCommand ? "Available" : "Indirect",
                detail: language.installCommand
                  ? language.installCommand
                  : "This route currently behaves more as a lift or target surface than as an installable SDK.",
              },
              {
                label: "Lift posture",
                value: language.canLiftFrom ? "Source bridge" : "Target-first",
                detail: language.canLiftFrom
                  ? `Existing ${language.name} code can be interpreted as source material for a bounded blueprint.`
                  : `The public story emphasizes ${language.name} as a destination rather than a lift source.`,
              },
              {
                label: "Registry fit",
                value: "Shared grammar",
                detail: "Language-specific routes should still point back to the same CLI, PCD, platform, and registry flow.",
              },
            ]}
            exchanges={[
              {
                title: `How ${language.name} enters the workflow`,
                body: language.canLiftFrom
                  ? `This route can start from existing ${language.name} source and move into an explicit bounded blueprint before deeper verification or publication.`
                  : `This route is presented primarily as a target emitted from a bounded intermediate form.`,
              },
              {
                title: "What the page should prove",
                body: "The route should make clear whether the language is a source bridge, a compile target, or an SDK host without mixing those stories loosely.",
              },
              {
                title: "Where the operator goes next",
                body: "Language pages should still hand off to CLI, PCD, docs, or SDK surfaces instead of behaving like isolated microsites.",
              },
            ]}
            codeTitle={`${language.name} example`}
            code={exchangeCode}
            footer={
              language.installCommand
                ? `Install path: ${language.installCommand}`
                : "No package install path is advertised here. The route remains valuable as a bounded source or target surface."
            }
          />
          <DocsRailSurface
            eyebrow="Reference Rails"
            title="Language pages should always terminate in concrete operator routes."
            description="A reader evaluating a language integration needs the next technical path immediately."
            links={[
              {
                title: "CLI",
                body: "The operator entrypoint for lift, check, certify, and build workflows.",
                href: "/cli",
              },
              {
                title: "PCD",
                body: "The formal language surface behind the bounded blueprint story.",
                href: "/pcd",
              },
              {
                title: "Documentation",
                body: "Reference material for language-specific install and workflow detail.",
                href: "https://docs.brik64.dev",
                external: true,
              },
            ]}
            note="Language routes are useful only when they remain attached to the same product grammar as the rest of the site."
          />
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
