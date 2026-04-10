"use client";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

export function HeroWireframeClient() {
  return <HeroWireframe />;
}
