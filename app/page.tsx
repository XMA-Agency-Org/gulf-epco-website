"use client";

import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { BrandsPreview } from "@/components/home/BrandsPreview";
import { WhoWeWorkWith } from "@/components/home/WhoWeWorkWith";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <TrustIndicators />
      <BrandsPreview />
      <WhoWeWorkWith />
      <CTA />
    </Layout>
  );
}
