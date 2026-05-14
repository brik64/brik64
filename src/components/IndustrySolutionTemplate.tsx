"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CanonicalPageLayout, CanonicalPageHero } from "@/components/PageArchetypes";
import { IndustrySolutionData } from "@/lib/industry-v2-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ButtonVNext } from "@/components/vnext/primitives";
import { NoiseTexture } from "@/components/NoiseTexture";
import { 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Activity, 
  ArrowRight, 
  Building2, 
  Layout, 
  Clock,
  Lock
} from "lucide-react";
import { useReducedMotion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a more premium "smooth" feel
    },
  },
};

export function IndustrySolutionTemplate({ data }: { data: IndustrySolutionData }) {
  const shouldReduceMotion = useReducedMotion();
  
  // Adjusted animation settings based on motion preferences
  const animationProps = shouldReduceMotion 
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" } };

  return (
    <CanonicalPageLayout>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[color:var(--accent)] focus:text-black focus:rounded-md">
        Skip to main content
      </a>
      
      <NoiseTexture />
      
      <main id="main-content">
        <CanonicalPageHero
          eyebrow={`Industry Solution: ${data.title}`}
          title={<span className="text-wrap-balance">{data.subtitle}</span>}
          description={data.heroDescription}
          backgroundImageSrc={data.heroImage}
          actions={[
            { label: "Request Architecture Review", href: "/contact", tone: "primary" },
            { label: "View Technical Specs", href: "/docs", tone: "secondary", opaque: true },
          ]}
        />

        {/* Pain Points Section */}
        <section id="challenges" className="relative border-t border-white/5 bg-black py-24 overflow-hidden scroll-mt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.03),transparent_40%)]" />
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            <motion.div 
              {...animationProps}
              variants={containerVariants}
              className="mb-16 text-center"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-wrap-balance">
                The Cost of Legacy Infrastructure
              </motion.h2>
              <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-2xl text-lg text-white/50 leading-relaxed text-wrap-balance">
                {data.targetAudience} navigate a landscape where infrastructure brittleness translates directly into market risk.
              </motion.p>
            </motion.div>

            <motion.div 
              {...animationProps}
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-3"
            >
              {data.painPoints.map((pain, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="group h-full border-white/10 bg-white/[0.02] text-white transition-all duration-500 hover:border-red-500/40 hover:bg-white/[0.04] shadow-2xl backdrop-blur-xl rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-xl text-red-400 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                          <Activity className="h-5 w-5" aria-hidden="true" />
                        </div>
                        {pain.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <CardDescription className="text-white/70 text-base leading-relaxed">
                        {pain.description}
                      </CardDescription>
                      <div className="rounded-xl bg-red-500/5 p-4 border border-red-500/10 transition-all duration-500 group-hover:bg-red-500/10 group-hover:border-red-500/20">
                        <span className="text-[10px] font-bold tracking-wider text-red-400/60 block mb-2">Business Impact</span>
                        <p className="text-sm text-red-200/70 leading-relaxed italic">“{pain.impact}”</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Real World Image / Case Study Section (Industry Performance Benchmark) */}
        {data.realWorldImage && (
          <section className="relative bg-[#030712] py-24 overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c10] shadow-2xl min-h-[500px] lg:min-h-[600px] flex items-center"
              >
                {/* Full Image background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={data.realWorldImage}
                    alt={data.caseStudy?.title || "Case Study"}
                    fill
                    className="object-cover transition-transform duration-[10s] hover:scale-105"
                    sizes="100vw"
                    unoptimized
                  />
                  {/* Improved Gradient overlay for text readability - more aggressive on the text side */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black/80 lg:bg-gradient-to-l lg:from-black/85 lg:via-black/40 lg:to-transparent z-10" />
                </div>
                
                {/* Narrative content overlay on the right - wider horizontal span, justified text */}
                <div className="relative z-20 ml-auto w-full lg:w-[60%] p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-black/5 lg:bg-transparent">
                  <Badge className="mb-6 w-fit bg-[color:var(--accent)] text-black font-bold tracking-wider px-4 py-1">
                    {data.caseStudy?.title || "Industry Insight"}
                  </Badge>
                  <h3 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl text-wrap-balance leading-[1.05] tracking-tight mb-8 italic-font-fix drop-shadow-md">
                    {data.caseStudy?.subtitle}
                  </h3>
                  <div className="space-y-6">
                    <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl drop-shadow-sm text-justify">
                      {data.caseStudy?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Interventions Section */}
        <section id="solution" className="relative bg-[#030712] py-24 overflow-hidden scroll-mt-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,182,172,0.06)_0%,transparent_100%)]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/30 to-transparent" />
          
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            <motion.div 
              {...animationProps}
              variants={containerVariants}
              className="mb-20"
            >
              <motion.div variants={itemVariants}>
                <Badge variant="outline" className="border-[color:var(--accent)]/50 text-[color:var(--accent)] mb-6 px-4 py-1.5 font-bold tracking-wider bg-[color:var(--accent)]/5 text-[10px]">
                  The BRIK-64 Intervention
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-wrap-balance leading-[1.05]">
                Deterministic Infrastructure
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-6 max-w-3xl text-lg text-white/50 leading-relaxed text-wrap-balance">
                {data.solutionOverview}
              </motion.p>
            </motion.div>

            <motion.div 
              {...animationProps}
              variants={containerVariants}
              className="grid gap-8"
            >
              {data.interventions.map((intervention, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="group relative flex flex-col md:flex-row gap-6 md:gap-16 rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 shadow-2xl hover:border-[color:var(--accent)]/30 hover:bg-white/[0.03] transition-all duration-700 backdrop-blur-xl overflow-hidden"
                >
                  {/* Decorative corner glow */}
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[color:var(--accent)]/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="md:w-1/3 relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent)] mb-8 group-hover:bg-[color:var(--accent)] group-hover:text-black transition-all duration-700 shadow-[0_0_40px_rgba(44,182,172,0.1)] group-hover:shadow-[0_0_60px_rgba(44,182,172,0.3)]">
                      <Zap className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-none mb-2">{intervention.feature}</h3>
                    <div className="h-1 w-10 bg-[color:var(--accent)]/20 group-hover:w-20 group-hover:bg-[color:var(--accent)]/50 transition-all duration-700" />
                  </div>
                  <div className="md:w-2/3 grid gap-10 sm:grid-cols-2 relative z-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-px w-4 bg-white/20" />
                        <span className="text-[10px] font-bold tracking-widest text-white/30">Technical Mechanism</span>
                      </div>
                      <p className="text-sm text-white/60 leading-relaxed pr-4">{intervention.howItWorks}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-px w-4 bg-[color:var(--accent)]/40" />
                        <span className="text-[10px] font-bold tracking-widest text-[color:var(--accent)]">Business Outcome</span>
                      </div>
                      <p className="text-lg text-white/90 font-medium leading-snug group-hover:text-white transition-colors">
                        {intervention.businessOutcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Results & Compliance Section (Quantifiable Proof) */}
        <section id="outcomes" className="relative border-t border-white/5 bg-[#07090d] py-32 overflow-hidden scroll-mt-20">
          {/* Advanced Technical Background Layers */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/generated/finance-hero-bg.png" 
              alt="Blueprint Background" 
              fill 
              className="object-cover opacity-20"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07090d] via-transparent to-[#07090d]" />
          </div>
          <div className="absolute inset-0 blueprint-grid opacity-[0.15] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(44,182,172,0.08)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            <div className="mb-20 text-center">
              <motion.div variants={itemVariants} className="flex justify-center">
                <Badge variant="outline" className="border-white/10 text-white/40 mb-6 px-4 py-1 font-mono text-[9px] tracking-widest bg-white/[0.02] backdrop-blur-sm">
                  Benchmark Data
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="mx-auto text-2xl font-bold tracking-tight text-white sm:text-3xl text-wrap-balance leading-[1.1] max-w-2xl italic-font-fix">
                Quantifiable Proof
              </motion.h2>
              <motion.p variants={itemVariants} className="mx-auto mt-6 text-lg text-white/50 leading-relaxed text-wrap-balance max-w-2xl">
                Moving infrastructure from the realm of probability to the precision of mathematics.
              </motion.p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
              
              {/* Left Column: Metrics Grid */}
              <motion.div
                {...animationProps}
                variants={containerVariants}
                className="grid gap-4 sm:grid-cols-2"
              >
                {data.keyBenefits.map((benefit, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <Card className="group relative h-full overflow-hidden border-white/10 bg-white/[0.01] p-8 transition-all duration-700 hover:bg-white/[0.04] hover:border-[color:var(--accent)]/30 backdrop-blur-xl rounded-2xl flex flex-col justify-between">
                      <div className="relative z-10">
                        <div className="text-2xl font-bold text-white tracking-tight sm:text-3xl group-hover:text-[color:var(--accent)] transition-colors duration-700 font-variant-numeric:tabular-nums leading-none">
                          {benefit.value}
                        </div>
                        <div className="mt-3 text-[10px] font-bold text-white/40 tracking-wider group-hover:text-white transition-colors duration-700">
                          {benefit.metric}
                        </div>
                      </div>
                      <div className="mt-8 text-sm leading-relaxed text-white/30 group-hover:text-white/50 transition-colors duration-700 border-t border-white/5 pt-6">
                        {benefit.description}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="h-full">
                <Card className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group hover:border-[color:var(--accent)]/20 transition-all duration-700 flex flex-col">
                  {/* Decorative technical elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[color:var(--accent)]/20 to-transparent" />
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[color:var(--accent)]/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-500">
                        <ShieldCheck className="h-6 w-6 text-white/50 group-hover:text-green-400 transition-colors duration-500" aria-hidden="true" />
                      </div>
                      <Badge variant="outline" className="border-green-500/30 text-green-400/80 bg-green-500/5 px-3 py-0.5 text-[9px] tracking-widest font-mono">
                        Verified Status
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Compliance Readiness</h3>
                    <p className="text-sm text-white/40 leading-relaxed mb-8">Pre-validated architectural patterns for global regulatory frameworks.</p>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {data.complianceContext.map((compliance, idx) => (
                        <Badge key={idx} variant="outline" className="border-white/5 bg-white/5 text-white/60 py-2 px-4 hover:border-[color:var(--accent)]/40 hover:text-white hover:bg-[color:var(--accent)]/5 transition-all cursor-default text-[10px] tracking-wider backdrop-blur-md rounded-lg">
                          {compliance}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-10 border-t border-white/10">
                    <h3 className="text-sm font-bold text-white/80 mb-6 tracking-wider flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[color:var(--accent)]" />
                      Trust Markers
                    </h3>
                    <div className="grid gap-5 relative z-10">
                      {data.trustMarkers.map((marker, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-white/40 group/marker">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10 group-hover/marker:border-[color:var(--accent)]/40 transition-colors">
                            <div className="h-1 w-1 rounded-full bg-white/20 group-hover/marker:bg-[color:var(--accent)] group-hover/marker:scale-125 transition-all duration-300" />
                          </div>
                          <span className="text-sm font-medium group-hover/marker:text-white transition-colors tracking-tight">{marker}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enterprise CTA Section */}
        <section className="relative bg-[#07090d] py-32 overflow-hidden">
          {data.ctaImage && (
            <div className="absolute inset-0 z-0">
              <Image 
                src={data.ctaImage} 
                alt="" 
                fill 
                className="object-cover opacity-100 transition-transform duration-[20s] hover:scale-110" 
                unoptimized 
              />
              {/* Subtle overlay instead of heavy vignetting/halo */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mx-auto mb-10 inline-flex items-center justify-center rounded-xl bg-white/5 p-3.5 text-[color:var(--accent)] border border-white/10 backdrop-blur-2xl"
            >
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-5xl text-2xl font-bold tracking-tight text-white md:text-3xl text-wrap-balance leading-[1.1] italic-font-fix drop-shadow-lg"
            >
              Scale with Enterprise-Grade Proof
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-8 max-w-3xl text-base text-white/70 leading-relaxed text-wrap-balance drop-shadow-md"
            >
              For organizations requiring custom compliance mapping, dedicated support SLAs, and private registry deployment. Start your architecture review today.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
            >
              <ButtonVNext href="/contact" tone="primary" className="h-14 px-10 text-base shadow-[0_0_40px_rgba(44,182,172,0.2)] rounded-xl font-semibold group">
                Contact Enterprise Sales
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </ButtonVNext>
              <ButtonVNext href="/platform" tone="secondary" className="h-14 px-10 text-base border-white/10 backdrop-blur-md rounded-xl font-semibold hover:bg-white/10 transition-all">
                Explore Platform
              </ButtonVNext>
            </motion.div>
            
            <motion.div 
              {...animationProps}
              variants={containerVariants}
              className="mt-24 grid grid-cols-2 gap-12 md:grid-cols-4"
            >
              {[
                { label: "SLA", value: "99.99%", icon: Activity },
                { label: "Support", value: "24/7/365", icon: Clock },
                { label: "Security", value: "ISO 27001", icon: ShieldCheck },
                { label: "Architecture", value: "Custom", icon: Layout },
              ].map((stat, idx) => (
                <motion.div key={idx} variants={itemVariants} className="group cursor-default">
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center text-white/20 group-hover:text-[color:var(--accent)] transition-all duration-700 transform group-hover:scale-110">
                    <stat.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="text-2xl font-bold text-white tracking-tighter group-hover:text-[color:var(--accent)] transition-colors duration-500 font-variant-numeric:tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold tracking-wider text-white/30 mt-3 group-hover:text-white/60 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
    </CanonicalPageLayout>
  );
}

