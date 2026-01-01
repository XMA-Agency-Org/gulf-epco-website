"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { brandsData } from "@/lib/brands-data";

export default function BrandsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-gradient-hero">
        <div className="container-wide">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 text-gold text-sm font-medium uppercase tracking-wider mb-6"
            >
              <span className="w-8 h-px bg-gold" />
              Our Brands
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6"
            >
              A Portfolio of Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90"
            >
              Discover the brands we&apos;ve developed in-house - each representing our commitment
              to quality, innovation, and market-ready beauty solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandsData.map((brand, index) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/brands/${brand.slug}`}
                  className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-gold/30 hover:shadow-medium transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wider text-gold mb-2 block">
                      {brand.category}
                    </span>
                    <h2 className="font-serif text-2xl text-foreground mb-2 group-hover:text-gold transition-colors">
                      {brand.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {brand.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gold">
                      Explore Brand
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="container-wide text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-foreground mb-6"
          >
            Interested in Creating a Similar Product?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            These brands showcase our manufacturing capabilities. Let us help you create
            your own distinctive beauty or lifestyle product line.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
