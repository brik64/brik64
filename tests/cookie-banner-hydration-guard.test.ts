import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Cookie banner hydration guard", () => {
  it("does not derive first-render visibility from window or localStorage during state initialization", () => {
    const source = read("src/components/CookieBanner.tsx");

    expect(source).toContain('const [visible, setVisible] = useState(false);');
    expect(source).not.toContain("useState(() =>");
    expect(source).not.toContain("typeof window === \"undefined\"");
  });

  it("loads consent visibility after mount in an effect", () => {
    const source = read("src/components/CookieBanner.tsx");

    expect(source).toContain("useEffect(() => {");
    expect(source).toContain("setVisible(!localStorage.getItem(CONSENT_KEY));");
  });
});
