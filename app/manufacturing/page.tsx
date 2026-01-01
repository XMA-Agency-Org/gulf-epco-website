"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Scissors,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/home/CTA";

const heroImage = "/factory-int.jpg";
const packagingImage = "/assets/packaging-line.jpg";
const researchImage = "/assets/research-lab.jpg";

const manufactureItems = [
  {
    icon: Sparkles,
    title: "Skincare Manufacturing",
    summary:
      "We manufacture a broad range of skincare products designed for daily care, targeted routines, and performance-led formulations.",
    details:
      "Our skincare capabilities include creams, lotions, serums, facial washes, scrubs, body butters, and mists.",
  },
  {
    icon: Scissors,
    title: "Haircare Manufacturing",
    summary:
      "Our haircare manufacturing expertise spans everyday and performance-oriented ranges.",
    details:
      "We produce shampoos, conditioners, oils, serums, masks, and styling products.",
  },
  {
    icon: Shield,
    title: "Specialized Personal Care",
    summary:
      "In addition to skincare and haircare, Gulf EPCO manufactures specialized feminine care and grooming products.",
    details:
      "These are developed with a focus on safety, consistency, and routine use.",
  },
];

const stats = [
  { value: "50,000+", label: "Sq Ft Facility" },
  { value: "200+", label: "Formulations" },
  { value: "10+", label: "Production Lines" },
  { value: "50+", label: "Global Partners" },
];

export default function ManufacturingPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Manufacturing Facility"
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
              Manufacturing Expertise
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6"
            >
              End-to-End Cosmetics Manufacturing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90"
            >
              Our manufacturing expertise combines innovation, science, and
              nature to deliver safe, effective, and consistent personal care
              products across multiple categories.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="font-serif text-4xl lg:text-5xl text-gold font-semibold">
                  {stat.value}
                </span>
                <span className="block text-sm text-muted-foreground mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Manufacture */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                What We Manufacture
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Beauty and Personal Care Categories
              </h2>
              <div className="space-y-6">
                {manufactureItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-soft"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="font-serif text-2xl text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.summary}
                    </p>
                    <details className="mt-4">
                      <summary className="cursor-pointer text-sm font-medium text-gold">
                        Read more
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {item.details}
                      </p>
                    </details>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={packagingImage}
                alt="Packaging Line"
                className="rounded-xl w-full h-auto"
              />
              <img
                src={researchImage}
                alt="R&D Laboratory"
                className="rounded-xl w-full h-auto mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Models */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-24 left-10 w-80 h-80 rounded-full bg-gold/20 blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
              Manufacturing Models
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Flexible Production for Different Growth Stages
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Gulf EPCO operates with large-scale production capacity, offering
              flexible manufacturing models designed to support different
              business needs and stages of growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Private Label Manufacturing",
                description:
                  "Manufacturing ready-to-market products under your own brand, supported by Gulf EPCO’s production infrastructure, formulation knowledge, and operational expertise.",
              },
              {
                title: "Contract Manufacturing",
                description:
                  "Manufacturing based on existing formulas or specifications, with structured processes that ensure consistency, efficiency, and scalability.",
              },
              {
                title: "Custom Product Development",
                description:
                  "End-to-end product development supported by our in-house formulation and innovation team, tailored to specific product concepts, categories, and market requirements.",
              },
            ].map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/90 backdrop-blur rounded-2xl border border-foreground/10 p-6 md:p-8 shadow-soft"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-serif text-gold/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="w-10 h-10 rounded-full border border-gold/40" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Labelling Expertise */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28 self-start"
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                Packaging & Labelling Expertise
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Modern Lines for Flexible Formats
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our manufacturing facility is equipped with modern packaging
                and labelling lines, supporting a wide range of formats and
                customized designs.
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
                Packaging capabilities include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold" />
                  <span>Bottles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold" />
                  <span>Jars</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold" />
                  <span>Tubes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold" />
                  <span>Custom packaging formats</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-6">
                All packaging and labelling processes are carried out within
                dedicated production areas to maintain product integrity and
                consistency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility */}
      <section className="section-padding bg-secondary/10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                Manufacturing Facility
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Purpose-Built in Dubai Industrial City
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Gulf EPCO operates from a purpose-built manufacturing facility
                located in Dubai Industrial City, designed to support hygienic
                workflows and efficient production.
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
                Infrastructure includes:
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gold" />
                  <span>Water treatment system for purified production water</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gold" />
                  <span>HVAC-controlled environment for hygiene and consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gold" />
                  <span>
                    Dedicated rooms for production, filling, labelling, and
                    packaging
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gold" />
                  <span>Sample bank for long-term stability studies</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Standards */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="border-y border-foreground/10 py-10 md:py-12">
              <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider block mb-2">
                      Manufacturing Standards
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                      Global Standards, Consistent Output
                    </h2>
                  </div>
                </div>
                <div className="lg:pl-8 lg:border-l lg:border-foreground/10">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    All manufacturing processes at Gulf EPCO are structured to
                    align with international cosmetic standards, supporting
                    brands that require reliability, consistency, and readiness
                    for local and global markets.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
}
