"use client";

import { useState } from "react";
import { TextGradient } from "@/components/ui/pixel-perfect/text-gradient";
import { TextReveal } from "@/components/ui/pixel-perfect/text-reveal";
import { TextSlideUp } from "@/components/ui/pixel-perfect/text-slide-up";
import { StripeButton } from "@/components/ui/pixel-perfect/stripe-button";
import { GlassButton } from "@/components/ui/pixel-perfect/glass-button";
import { PremiumButton } from "@/components/ui/pixel-perfect/premium-button";
import { AnimatedTabs } from "@/components/ui/pixel-perfect/animated-tabs";
import { AnimatedCard } from "@/components/ui/pixel-perfect/animated-card";
import { StarBorder } from "@/components/ui/pixel-perfect/star-border";
import { BorderGradientButton } from "@/components/ui/pixel-perfect/border-gradient-button";
import { OrbitDot } from "@/components/ui/pixel-perfect/orbit-dot";
import { Zap, Shield, Cpu, Code } from "lucide-react";

function DemoBox({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border p-6">
      <p className="text-xs font-medium uppercase tracking-[1.44px] text-teal">
        {title}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      <div className="mt-5 flex min-h-[80px] items-center">{children}</div>
    </div>
  );
}

export function PixelPerfectShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-16 border-t border-border pt-12">
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-medium tracking-tight">
          Animated Components
        </h3>
        <span className="rounded-full border border-teal/20 bg-teal/10 px-2.5 py-0.5 text-[10px] font-medium text-teal">
          Pixel-Perfect
        </span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Micro-interactions and animated primitives adapted from Pixel-Perfect
        library. Framer Motion powered.
      </p>

      {/* ─── TEXT EFFECTS ─── */}
      <div className="mt-10">
        <p className="mb-4 text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
          Text Effects
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <DemoBox title="TextGradient" description="Animated teal gradient on text">
            <h2 className="text-3xl font-normal tracking-tight">
              <TextGradient>Digital Circuitality</TextGradient>
            </h2>
          </DemoBox>

          <DemoBox title="TextReveal" description="Word-by-word fade + blur on viewport entry">
            <h2 className="text-2xl font-normal tracking-tight">
              <TextReveal>Every program is a circuit</TextReveal>
            </h2>
          </DemoBox>

          <DemoBox title="TextSlideUp" description="Character-by-character slide from bottom">
            <h2 className="text-2xl font-normal tracking-tight">
              <TextSlideUp>BRIK-64</TextSlideUp>
            </h2>
          </DemoBox>
        </div>
      </div>

      {/* ─── BUTTONS ─── */}
      <div className="mt-10">
        <p className="mb-4 text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
          Button Variants
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <DemoBox title="StripeButton" description="Inset highlight, depth feel">
            <div className="flex flex-wrap gap-3">
              <StripeButton>Start Building</StripeButton>
              <StripeButton className="bg-foreground" style={{ background: "#1A1817", boxShadow: "inset 0px 2px 0px #333" }}>
                Dark Variant
              </StripeButton>
            </div>
          </DemoBox>

          <DemoBox title="GlassButton" description="Glassmorphism with teal/slate/gold/rose">
            <div className="flex flex-wrap gap-3">
              <GlassButton variant="teal">Teal Glass</GlassButton>
              <GlassButton variant="slate">Slate</GlassButton>
              <GlassButton variant="gold">Gold</GlassButton>
            </div>
          </DemoBox>

          <DemoBox title="PremiumButton" description="Multi-layer shadow, pressed feel">
            <div className="flex flex-wrap gap-3">
              <PremiumButton>Contact Sales</PremiumButton>
              <PremiumButton className="bg-foreground text-white">
                Dark Premium
              </PremiumButton>
            </div>
          </DemoBox>

          <DemoBox title="BorderGradientButton" description="Animated gradient border with inner bg">
            <div className="flex flex-wrap gap-3">
              <BorderGradientButton>Get Started Free</BorderGradientButton>
            </div>
          </DemoBox>
        </div>
      </div>

      {/* ─── UI COMPONENTS ─── */}
      <div className="mt-10">
        <p className="mb-4 text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
          UI Components
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <DemoBox title="AnimatedTabs" description="Spring-animated tab indicator">
            <div className="flex flex-col gap-3">
              <AnimatedTabs
                tabs={["Compile", "Verify", "Lift", "Certify"]}
                defaultIndex={0}
                onChange={setActiveTab}
              />
              <p className="text-xs text-muted-foreground">
                Active: {["Compile", "Verify", "Lift", "Certify"][activeTab]}
              </p>
            </div>
          </DemoBox>

          <DemoBox title="StarBorder" description="Teal star decorators on corners">
            <StarBorder className="w-full rounded-lg p-6">
              <div className="text-center">
                <p className="text-sm font-medium">Pro Plan</p>
                <p className="mt-1 text-2xl font-normal tracking-tight">
                  $49<span className="text-sm text-muted-foreground">/mo</span>
                </p>
              </div>
            </StarBorder>
          </DemoBox>
        </div>
      </div>

      {/* ─── ANIMATED CARDS ─── */}
      <div className="mt-10">
        <p className="mb-4 text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
          Animated Cards
        </p>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { icon: Zap, title: "Compile", desc: "PCD to any target language" },
            { icon: Shield, title: "Verify", desc: "Formal proof generation" },
            { icon: Cpu, title: "Lift", desc: "Legacy code to PCD" },
            { icon: Code, title: "Certify", desc: "Compliance evidence" },
          ].map((item) => (
            <AnimatedCard key={item.title}>
              <item.icon className="h-5 w-5 text-teal" />
              <h4 className="mt-3 text-sm font-semibold">{item.title}</h4>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* ─── DECORATIVE ─── */}
      <div className="mt-10">
        <p className="mb-4 text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
          Decorative Elements
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <DemoBox title="OrbitDot" description="3D orbiting teal dot">
            <div className="flex items-center justify-center w-full">
              <OrbitDot size={80} />
            </div>
          </DemoBox>

          <DemoBox title="Composition" description="Combining effects for hero sections">
            <div className="text-center w-full">
              <p className="text-xs font-medium uppercase tracking-[1.44px] text-muted-foreground">
                <TextSlideUp delay={0.2}>THE SYNTHETIC LANGUAGE</TextSlideUp>
              </p>
              <h2 className="mt-2 text-2xl font-normal tracking-tight">
                <TextReveal delay={0.4}>Write once.</TextReveal>{" "}
                <TextGradient>
                  <TextReveal delay={0.8}>Verify everywhere.</TextReveal>
                </TextGradient>
              </h2>
            </div>
          </DemoBox>
        </div>
      </div>
    </div>
  );
}
