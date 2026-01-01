"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Factory, FlaskConical, Package, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Factory,
    title: "Skin Care, Hair Care, and Specialized Personal Care",
    description:
      "We manufacture a wide range of personal care products across key categories.",
  },
  {
    icon: Palette,
    title: "Private Label, Contract Manufacturing, and Custom Product Development",
    description:
      "Flexible production models tailored to your brand goals and timelines.",
  },
  {
    icon: FlaskConical,
    title: "In-House Formulation and R&D Support",
    description:
      "Expert teams develop market-ready formulations that meet global standards.",
  },
  {
    icon: Package,
    title: "Modern Packaging and Labelling Solutions",
    description:
      "End-to-end packaging support with premium finishes and compliance-ready labels.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-10 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />
      </div>
      <div className="container-wide">
        {/* Section Header */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-end mb-14 relative z-10">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-gold text-sm font-medium uppercase tracking-wider mb-4"
            >
              <span className="w-10 h-px bg-gold" />
              Manufacturing Overview
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground"
            >
              Comprehensive Manufacturing Capabilities
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We manufacture a wide range of personal care products across key categories, supported
            by flexible production models.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-7 bg-background/90 backdrop-blur rounded-2xl border border-foreground/10 hover:border-gold/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-sm font-serif text-gold/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center relative z-10">
          <Button variant="cta" asChild>
            <Link href="/manufacturing">
              Explore Manufacturing & Capabilities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
