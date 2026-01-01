"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Target, Leaf, Factory } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/home/CTA";

const researchImage = "/assets/research-lab.jpg";
const packagingImage = "/assets/packaging-line.jpg";

const milestones = [
  { year: "2013", event: "Founded in Dubai Industrial City" },
  { year: "2015", event: "ISO 22716 & GMP Certification" },
  { year: "2017", event: "FDA Registration Achieved" },
  { year: "2019", event: "Facility Expansion - 50,000 sq ft" },
  { year: "2021", event: "Launched 6 In-House Brands" },
  { year: "2023", event: "Serving 50+ Global Partners" },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every formulation, every batch, every product meets exacting standards.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We succeed when our clients succeed. Your vision drives our innovation.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Responsible manufacturing practices for a better tomorrow.",
  },
  {
    icon: Factory,
    title: "Excellence",
    description: "World-class facilities, world-class results. No compromises.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bundle.jpg"
            alt="Gulf EPCO Product Bundle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/30" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 text-gold text-sm font-medium uppercase tracking-wider mb-6"
            >
              <span className="w-8 h-px bg-gold" />
              About Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6"
            >
              A Cosmetics Manufacturing Partner Built on Experience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90"
            >
              With over a decade of experience, Gulf EPCO combines innovation,
              science, and nature to create safe and effective personal care
              products for local and international markets.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Where Science Meets Artistry
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Gulf EPCO was founded with a clear focus: to build a
                  manufacturing operation that prioritizes{" "}
                  <strong>
                    consistency, quality, and long-term reliability.
                  </strong>{" "}
                  From the beginning, the company has focused on developing the
                  infrastructure, expertise, and internal systems required to
                  support brands at different stages of growth.
                </p>
                <p>
                  Today, Gulf EPCO works with a wide range of partners — from
                  emerging private labels to established retailers and
                  international distributors — providing dependable production
                  capabilities across multiple personal care categories.
                </p>
              </div>
              <Button variant="gold" className="mt-8" asChild>
                <Link href="/manufacturing">
                  Explore Our Facilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={researchImage}
                  alt="Gulf EPCO Research Laboratory"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-xl overflow-hidden border-4 border-background shadow-medium hidden lg:block">
                <img
                  src={packagingImage}
                  alt="Manufacturing Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-cream relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-28 -left-24 w-80 h-80 rounded-full bg-gold/20 blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Purpose
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Vision & Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our direction and commitment guide every formulation, every
                partnership, and every product we manufacture.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background/90 backdrop-blur rounded-2xl border border-foreground/10 p-8 md:p-10 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center font-serif text-lg">
                    V
                  </span>
                  <h3 className="font-serif text-2xl text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become a global leader in beauty manufacturing, delivering
                  trusted skincare and haircare products that enhance confidence
                  and well-being.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-background/90 backdrop-blur rounded-2xl border border-foreground/10 p-8 md:p-10 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif text-lg">
                    M
                  </span>
                  <h3 className="font-serif text-2xl text-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To produce premium, innovative, and sustainable personal care
                  solutions tailored to the needs of modern consumers, while
                  maintaining high standards across manufacturing and production
                  processes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-foreground">Our Journey</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-0 lg:justify-between">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4 py-6 lg:flex-1"
              >
                <span className="font-serif text-3xl text-gold font-semibold mb-2">
                  {milestone.year}
                </span>
                <span className="text-sm text-muted-foreground max-w-[140px]">
                  {milestone.event}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Manufacturing Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              A Disciplined, Science-Driven Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Gulf EPCO, manufacturing is approached as a balance between
              scientific formulation, operational discipline, and thoughtful
              ingredient selection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-secondary/20 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto"
          >
            <p className="text-foreground font-medium mb-6">
              Every product manufactured at our facility is developed with a
              focus on:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gold" />
                <span>Safety and skin compatibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gold" />
                <span>Consistent performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gold" />
                <span>Scalable, repeatable production</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-6">
              This philosophy ensures products are not only effective, but also
              reliable at scale - a critical requirement for long-term brand
              growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Facility
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Purpose-Built for Modern Manufacturing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Gulf EPCO operates from a purpose-built manufacturing facility
                designed to support hygienic workflows and efficient production.
              </p>
              <div className="mt-8 bg-background rounded-2xl shadow-soft p-6 md:p-8">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Facility Size
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <span className="block text-2xl font-semibold text-foreground">
                      1,400 sqm
                    </span>
                    <span className="text-sm">Ground floor</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-semibold text-foreground">
                      900 sqm
                    </span>
                    <span className="text-sm">Mezzanine</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background rounded-2xl shadow-soft p-8 md:p-10"
            >
              <h3 className="font-serif text-2xl text-foreground mb-6">
                The facility includes:
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gold" />
                  <span>
                    Dedicated rooms for production, filling, labelling, and
                    packaging
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gold" />
                  <span>
                    HVAC-controlled environments for hygiene and consistency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gold" />
                  <span>
                    Water treatment systems for purified production water
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gold" />
                  <span>
                    A sample bank supporting long-term stability studies
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsible & Sustainable Practices */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                Responsible & Sustainable Practices
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Sustainability Built Into Operations
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Gulf EPCO is committed to incorporating eco-friendly practices
                across its operations, aligning responsible manufacturing with
                long-term sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-secondary/20 rounded-2xl p-8 md:p-10"
            >
              <p className="text-foreground font-medium mb-6">
                Our approach includes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold" />
                  <span>Safe and sustainable ingredient sourcing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold" />
                  <span>Wastewater treatment and recycling practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold" />
                  <span>Environmentally responsible packaging options</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-6">
                These practices are integrated into daily operations without
                compromising product quality or manufacturing efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Standards */}
      <section className="section-padding bg-secondary/10">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
              Manufacturing Standards
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Built for Global Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All manufacturing processes at Gulf EPCO are structured to align
              with international cosmetic standards, supporting brands that
              require consistency, reliability, and readiness for both regional
              and global markets.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our focus remains on maintaining controlled production
              environments and quality-driven processes that support long-term
              partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
              Who We Support
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Built to Support Diverse Partners
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Gulf EPCO works with organizations across the beauty industry,
              supporting a wide range of production goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              "Private brands seeking custom or private label manufacturing",
              "Retailers and distributors requiring dependable large-scale production",
              "International partners looking for export-ready personal care products",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 lg:p-8 bg-card rounded-xl border border-border shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <span className="absolute inset-0 rounded-full border-2 border-gold/40 [clip-path:inset(0_50%_0_0)]" />
                    <span className="text-3xl font-serif text-gold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-base text-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA description="With a foundation built on experience, structured manufacturing, and a growing portfolio of brands, Gulf EPCO continues to support businesses seeking a trusted cosmetics manufacturing partner in the region." />
    </Layout>
  );
}
