import { PhiC } from "@/components/PhiC";

const editors: {
  name: string;
  subtitle: string;
  status: string;
  logo: string;
}[] = [
  {
    name: "VSCode",
    subtitle: "Extension + LSP",
    status: "AVAILABLE",
    logo: "/brands/vscode.svg",
  },
  {
    name: "Cursor",
    subtitle: "AI + PCD native",
    status: "AVAILABLE",
    logo: "/brands/cursor.svg",
  },
  {
    name: "Windsurf",
    subtitle: "AI-powered coding",
    status: "AVAILABLE",
    logo: "/brands/windsurf.svg",
  },
  {
    name: "Zed",
    subtitle: "High-performance editor",
    status: "AVAILABLE",
    logo: "/brands/zed.svg",
  },
  {
    name: "IntelliJ",
    subtitle: "JetBrains IDEs",
    status: "AVAILABLE",
    logo: "/brands/intellij.svg",
  },
  {
    name: "Antigravity",
    subtitle: "Google AI IDE",
    status: "AVAILABLE",
    logo: "/brands/antigravity.svg",
  },
];

const features = [
  "Syntax highlighting for .pcd files",
  <>Inline <PhiC /> certification status</>,
  "One-click lift from source to PCD",
  "LSP server: brikc lsp",
];

export function EditorsSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [08] · EDITORS
        </p>

        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
          Works where you code.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          Native in your editor. PCD syntax highlighting, inline certification,
          and one-click lift.
        </p>

        {/* Editor grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 border border-border [&>*]:border-border [&>*]:border-b [&>*:nth-child(odd)]:border-r md:[&>*:nth-child(odd)]:border-r-0 md:[&>*:nth-child(3n+1)]:border-r md:[&>*:nth-child(3n+2)]:border-r [&>*:nth-last-child(-n+2)]:border-b-0 md:[&>*:nth-last-child(-n+3)]:border-b-0">
          {editors.map((editor) => (
            <div
              key={editor.name}
              className="bg-background p-5 transition-colors hover:bg-teal/[0.03]"
            >
              <div className="flex items-center gap-3">
                <img src={editor.logo} alt={editor.name} className="h-8 w-8" />
                <div>
                  <p className="text-sm font-semibold">{editor.name}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {editor.subtitle}
                  </p>
                </div>
              </div>
              <span className="mt-3 inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                {editor.status}
              </span>
            </div>
          ))}
        </div>

        {/* Feature bullets */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal/60" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
