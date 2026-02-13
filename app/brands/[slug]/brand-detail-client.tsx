"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, FlaskConical, Factory, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { brandsData, type Brand } from "@/lib/brands-data";

export function BrandDetailClient({ brand }: { brand: Brand }) {
  const currentIndex = brandsData.findIndex((item) => item.slug === brand.slug);
  const nextBrand = brandsData[(currentIndex + 1) % brandsData.length];
  const prevBrand = brandsData[(currentIndex - 1 + brandsData.length) % brandsData.length];
  const isRichie = brand.slug === "richie-skincare";
  const isNovoCare = brand.slug === "novocare";
  const isSo20 = brand.slug === "so20-haircare";
  const isOrgaPlus = brand.slug === "orga-plus";
  const isFiora = brand.slug === "fiora";
  const isAroma = brand.slug === "aroma";
  const fallbackProducts = brand.products;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden">
        {isAroma ? (
          <div className="absolute inset-0" style={{ backgroundColor: "#2F1404" }} />
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.color}`} />
            <div className="absolute inset-0 bg-primary/60" />
          </>
        )}
        <div className="container-wide relative z-10">
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Brands
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                {brand.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
                {brand.name}
              </h1>
              <p className="text-xl text-primary-foreground/90 italic mb-6">{brand.tagline}</p>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                {brand.description}
              </p>
              {isRichie ? (
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Developed and manufactured by Gulf EPCO, Richie reflects a science-led
                  approach to modern skincare that balances efficacy with daily usability.
                </p>
              ) : null}
              {isNovoCare ? (
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Developed and manufactured by Gulf EPCO, the brand addresses the growing demand
                  across the UAE and wider GCC for trusted, transparent, and dermatologist-friendly
                  personal care products that meet international quality expectations while
                  remaining accessible.
                </p>
              ) : null}
              {isSo20 ? (
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Developed and manufactured by Gulf EPCO, SO20 reflects a professional approach
                  to haircare, balancing visible results with formulations suitable for regular use.
                </p>
              ) : null}
              {isOrgaPlus ? (
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Manufactured by Gulf EPCO, the brand focuses on practical, routine-friendly
                  formulations designed to support hair comfort, hydration, and manageability.
                  Each Orga+ system is built around a clear functional goal, making it easy for
                  consumers to choose products that match their hair needs without overcomplicating
                  their routine.
                </p>
              ) : null}
              {isFiora ? (
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Developed and manufactured by Gulf EPCO, the brand focuses on simple, reliable
                  formulations enhanced with moisturizing ingredients, making Fiora suitable for
                  regular use across a broad consumer base.
                </p>
              ) : null}
              {isAroma ? (
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Manufactured by Gulf EPCO, Aroma offers a focused haircare system designed for
                  consistent use and long-term hair wellness. The brand is centered on simplicity,
                  providing essential haircare products that fit naturally into daily routines.
                </p>
              ) : null}
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" asChild>
                  <Link href="/contact">
                    Create a Similar Product
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                {isRichie ? (
                  <Button variant="hero-outline" asChild>
                    <a href="https://richiestores.com/" target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                ) : null}
                {isNovoCare ? (
                  <Button variant="hero-outline" asChild>
                    <a href="https://novocare.me/" target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img src={brand.image} alt={brand.name} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {isRichie ? (
        <>
          {/* Story */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                    The Story Behind Richie
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    A Function-First Skincare Philosophy
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Richie was created in response to a growing demand for skincare that goes
                      beyond surface-level results. The brand focuses on function-first
                      formulations, where every product is developed with a clear purpose - to
                      support the skin barrier, improve texture, and maintain hydration through
                      consistent use.
                    </p>
                    <p>
                      By integrating advanced peptides and carefully selected active ingredients,
                      Richie brings together dermatological insight and modern formulation science,
                      offering skincare solutions designed to work with the skin rather than
                      overwhelm it.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-secondary/20 rounded-2xl p-6 md:p-8 lg:sticky lg:top-28 self-start"
                >
                  <span className="text-xs uppercase tracking-wider text-gold mb-3 block">
                    Brand Focus
                  </span>
                  <p className="text-foreground font-medium mb-4">
                    Dermatologist-aligned care for daily use.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Richie emphasizes skin tolerance, balance, and effectiveness to support
                    healthier-looking skin over time.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Structured System */}
          <section className="section-padding bg-cream">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                  A Structured Skincare System
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  A Routine Built to Work Together
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Richie is developed as a complete skincare system, covering essential daily
                  steps and targeted care needs. This approach allows products to reinforce
                  long-term skin comfort and visible improvement over time.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brand.products.map((product, index) => (
                  <motion.div
                    key={product}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-border text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-5 h-5 text-gold" />
                    </div>
                    <p className="font-medium text-foreground">{product}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Ingredients & Manufacturing */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <FlaskConical className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Ingredient & Formulation Focus
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Richie formulations are centered around innovative peptides and scientifically
                    backed active ingredients commonly used in advanced skincare. These components
                    are selected for their role in supporting skin resilience, hydration, and
                    overall skin function.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Factory className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Manufactured by Gulf EPCO
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Richie Skincare is developed and manufactured at Gulf EPCO&apos;s facility in
                    Dubai Industrial City, following structured production processes and
                    quality-focused manufacturing practices. The brand demonstrates Gulf EPCO&apos;s
                    capability to manufacture dermatologist-aligned, active-driven skincare
                    ranges with consistent, scalable production.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="section-padding bg-secondary/20">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="border border-border rounded-2xl p-8 md:p-10">
                  <span className="block text-4xl text-gold/60 font-serif leading-none mb-4">
                    “
                  </span>
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                    Richie represents a refined approach to skincare manufacturing - where
                    innovation, dermatological insight, and formulation science come together to
                    support healthier skin.
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      ) : isNovoCare ? (
        <>
          {/* Story */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                    The Story Behind NovoCare
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    Everyday Care, Built for Families
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      NovoCare was developed with a clear purpose: to simplify personal care for
                      families without compromising on safety or quality. In a market often
                      dominated by either highly clinical products or generic mass offerings,
                      NovoCare bridges the gap by offering masstige-level quality with a strong
                      focus on everyday usability.
                    </p>
                    <p>
                      The brand is built around transparency, clarity, and regional relevance,
                      ensuring products are easy to understand, suitable for frequent use, and
                      aligned with the expectations of modern consumers in the UAE and GCC.
                    </p>
                  </div>
                </motion.div>

                <div className="lg:sticky lg:top-28 self-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-secondary/20 rounded-2xl p-6 md:p-8"
                  >
                    <span className="text-xs uppercase tracking-wider text-gold mb-3 block">
                      Brand Focus
                    </span>
                    <p className="text-foreground font-medium mb-4">
                      Safe, accessible personal care for daily routines.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      NovoCare brings together science-backed formulation, clear communication, and
                      routine-focused care across multiple personal care categories.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Structured System */}
          <section className="section-padding bg-cream">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                  A Structured Personal Care System
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  A Unified Brand with Distinct Lines
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  NovoCare is designed as an umbrella brand with clearly defined product lines,
                  each developed to address the specific needs of its intended users while
                  maintaining a consistent standard of safety and quality.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "NovoBaby",
                    description:
                      "Gentle care for newborns and sensitive skin, prioritizing purity, comfort, and parental trust with dermatologist-tested principles.",
                  },
                  {
                    title: "NovoSkin",
                    description:
                      "Everyday cleansing and care for young, urban consumers, focused on routine-friendly products suited to the region's hot and humid climate.",
                  },
                  {
                    title: "NovoHair",
                    description:
                      "Structured haircare solutions for hydration, volume, color care, and manageability with recognizable, care-focused ingredients.",
                  },
                ].map((line, index) => (
                  <motion.div
                    key={line.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background rounded-2xl p-6 md:p-8 border border-border"
                  >
                    <h3 className="font-serif text-xl text-foreground mb-3">{line.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {line.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Ingredients & Manufacturing */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <FlaskConical className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Ingredient & Formulation Focus
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    NovoCare formulations are developed with a strong emphasis on safety, clarity,
                    and scientifically supported ingredients. The brand prioritizes ingredient
                    transparency, providing clear INCI listings, bilingual packaging (English and
                    Arabic), and straightforward usage guidance. Across all lines, formulations are
                    designed to be dermatologist-friendly and suitable for regular use.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Factory className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Manufactured by Gulf EPCO
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    NovoCare is developed and manufactured at Gulf EPCO&apos;s facility in Dubai
                    Industrial City, following structured production processes and quality-focused
                    manufacturing practices. The brand demonstrates Gulf EPCO&apos;s ability to
                    manufacture multi-line personal care brands that meet regulatory expectations,
                    support diverse consumer needs, and maintain consistency across categories.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="section-padding bg-secondary/20">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="border border-border rounded-2xl p-8 md:p-10">
                  <span className="block text-4xl text-gold/60 font-serif leading-none mb-4">
                    “
                  </span>
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                    NovoCare represents a balanced approach to personal care manufacturing -
                    combining safety, accessibility, and structured formulation to support
                    everyday life.
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      ) : isSo20 ? (
        <>
          {/* Story */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                    The Story Behind SO20
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    Performance Without Complexity
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      SO20 was created to address the need for haircare that delivers reliable,
                      noticeable performance without unnecessary complexity. The brand focuses on
                      structured haircare routines that support hair condition over time, rather
                      than quick cosmetic fixes.
                    </p>
                    <p>
                      By combining formulation expertise with a results-oriented mindset, SO20
                      offers haircare solutions designed to perform consistently across different
                      hair types and care needs.
                    </p>
                  </div>
                </motion.div>

                <div className="lg:sticky lg:top-28 self-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-secondary/20 rounded-2xl p-6 md:p-8"
                  >
                    <span className="text-xs uppercase tracking-wider text-gold mb-3 block">
                      Brand Focus
                    </span>
                    <p className="text-foreground font-medium mb-4">
                      Performance-driven care for stronger, more manageable hair.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      SO20 brings together structured routines and professional-grade formulation
                      expertise to support long-term hair health.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Structured System */}
          <section className="section-padding bg-cream">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                  A Structured Haircare System
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  A Routine Built for Results
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  SO20 is developed as a complete performance haircare system, covering essential
                  steps required to maintain healthy, well-managed hair. This system-based
                  structure allows products to work together and reinforce performance through
                  consistent use.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brand.products.map((product, index) => (
                  <motion.div
                    key={product}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-border text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-5 h-5 text-gold" />
                    </div>
                    <p className="font-medium text-foreground">{product}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Ingredients & Manufacturing */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <FlaskConical className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Ingredient & Formulation Focus
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    SO20 formulations emphasize functional, performance-oriented ingredients
                    commonly used in advanced haircare. The approach focuses on supporting hair
                    structure, improving manageability, and maintaining overall hair condition.
                    Rather than relying on heavy or aggressive formulations, SO20 prioritizes
                    balance to deliver performance while remaining suitable for frequent use.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Factory className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Manufactured by Gulf EPCO
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    SO20 Haircare is developed and manufactured at Gulf EPCO&apos;s facility in
                    Dubai Industrial City, following structured production processes and
                    quality-focused manufacturing practices. The brand demonstrates Gulf EPCO&apos;s
                    capability to manufacture performance-led haircare ranges with consistent,
                    scalable production across multiple formats.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="section-padding bg-secondary/20">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="border border-border rounded-2xl p-8 md:p-10">
                  <span className="block text-4xl text-gold/60 font-serif leading-none mb-4">
                    “
                  </span>
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                    SO20 represents a focused approach to haircare manufacturing - where
                    performance, structure, and consistency come together.
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      ) : isOrgaPlus ? (
        <>
          {/* Story */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                    The Story Behind Orga+
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    Simplified Haircare, Targeted Results
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Orga+ was created to simplify haircare by pairing targeted formulations
                      with recognizable ingredients. Instead of broad, one-size-fits-all products,
                      the brand organizes its ranges around specific hair concerns—such as scalp
                      comfort, hydration, or nourishment.
                    </p>
                    <p>
                      By offering clearly defined shampoo-and-conditioner pairs, Orga+ helps
                      consumers build effective routines without confusion, supporting consistent
                      results through regular use.
                    </p>
                  </div>
                </motion.div>

                <div className="lg:sticky lg:top-28 self-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-secondary/20 rounded-2xl p-6 md:p-8"
                  >
                    <span className="text-xs uppercase tracking-wider text-gold mb-3 block">
                      Brand Focus
                    </span>
                    <p className="text-foreground font-medium mb-4">
                      Concern-based haircare with structured shampoo and conditioner systems.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Orga+ pairs targeted formulations with recognizable ingredients, helping
                      consumers build effective routines for their specific hair needs.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Concern-Based System */}
          <section className="section-padding bg-cream">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                  A Concern-Based Haircare System
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Dedicated Pairs for Every Need
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Orga+ is structured around dedicated shampoo and conditioner pairs, each
                  designed to address a particular hair or scalp need. This system-based approach
                  ensures that cleansing and conditioning steps work together as part of a
                  cohesive routine.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brand.products.map((product, index) => (
                  <motion.div
                    key={product}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-border text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-5 h-5 text-gold" />
                    </div>
                    <p className="font-medium text-foreground">{product}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Ingredients & Manufacturing */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <FlaskConical className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Ingredient & Formulation Focus
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Orga+ formulations are built around recognizable, purpose-driven ingredients,
                    with each system centered on a specific ingredient story aligned to its
                    function. Across the range, the formulation approach emphasizes balanced
                    moisture and nourishment, gentle routine-friendly cleansing, scalp comfort
                    and hair manageability, and ingredients commonly associated with hydration,
                    softness, or revitalization. The goal is to create practical, effective
                    haircare products that fit naturally into everyday routines.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Factory className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Manufactured by Gulf EPCO
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Orga+ is developed and manufactured at Gulf EPCO&apos;s facility in Dubai
                    Industrial City, following structured production processes and quality-focused
                    manufacturing practices. The brand reflects Gulf EPCO&apos;s manufacturing
                    capability in multi-system, concern-based haircare ranges, combining
                    ingredient-led concepts with consistent, scalable production.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="section-padding bg-secondary/20">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="border border-border rounded-2xl p-8 md:p-10">
                  <span className="block text-4xl text-gold/60 font-serif leading-none mb-4">
                    &ldquo;
                  </span>
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                    Orga+ represents a practical, system-driven approach to haircare
                    manufacturing—focused on targeted routines, familiar ingredients, and
                    everyday usability.
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      ) : isFiora ? (
        <>
          {/* Story */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                    The Story Behind Fiora
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    Everyday Cleansing Made Simple
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Fiora was created to deliver a straightforward approach to body cleansing -
                      where products feel pleasant to use, support skin comfort, and fit easily
                      into daily routines.
                    </p>
                    <p>
                      Rather than overcomplicating personal care, Fiora emphasizes consistency and
                      accessibility, offering shower gels designed to cleanse effectively while
                      helping maintain the skin&apos;s natural moisture balance.
                    </p>
                  </div>
                </motion.div>

                <div className="lg:sticky lg:top-28 self-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-secondary/20 rounded-2xl p-6 md:p-8"
                  >
                    <span className="text-xs uppercase tracking-wider text-gold mb-3 block">
                      Brand Focus
                    </span>
                    <p className="text-foreground font-medium mb-4">
                      Gentle cleansing that supports comfort and daily use.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fiora keeps body care simple, focusing on reliable cleansing with
                      moisturizing support for everyday routines.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Focused System */}
          <section className="section-padding bg-cream">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                  A Focused Body Care System
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  A Clear, Single-Category Routine
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fiora is designed as a single-category brand centered exclusively on shower and
                  body cleansing. This focus keeps the experience clear, consistent, and easy to
                  use for households.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {brand.products.map((product, index) => (
                  <motion.div
                    key={product}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-border text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-5 h-5 text-gold" />
                    </div>
                    <p className="font-medium text-foreground">{product}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Ingredients & Manufacturing */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <FlaskConical className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Ingredient & Formulation Focus
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Fiora shower gels are formulated with an emphasis on skin comfort and
                    hydration, incorporating moisturizing ingredients commonly used to support
                    softness and reduce dryness during cleansing. The formulation approach
                    prioritizes gentleness and everyday usability for frequent use.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Factory className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Manufactured by Gulf EPCO
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Fiora is developed and manufactured at Gulf EPCO&apos;s facility in Dubai
                    Industrial City, following structured production processes and quality-focused
                    manufacturing practices. The brand demonstrates Gulf EPCO&apos;s capability to
                    manufacture high-volume, single-category personal care products with consistent
                    quality and scalable production.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="section-padding bg-secondary/20">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="border border-border rounded-2xl p-8 md:p-10">
                  <span className="block text-4xl text-gold/60 font-serif leading-none mb-4">
                    “
                  </span>
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                    Fiora represents a clean, uncomplicated approach to body care manufacturing -
                    focused on everyday cleansing and skin comfort.
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      ) : isAroma ? (
        <>
          {/* Story */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                    The Story Behind Aroma
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    Everyday Argan Care, Made Easy
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Aroma was created with a clear philosophy: effective haircare should be
                      easy to understand, comfortable to use, and consistent over time. Rather
                      than targeting extreme hair concerns or aggressive treatments, the brand
                      focuses on maintaining healthy-looking hair through regular care.
                    </p>
                    <p>
                      By building the range around argan oil, Aroma draws on a widely trusted
                      ingredient associated with nourishment and moisture, creating a familiar
                      and reassuring haircare experience for everyday consumers.
                    </p>
                  </div>
                </motion.div>

                <div className="lg:sticky lg:top-28 self-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-secondary/20 rounded-2xl p-6 md:p-8"
                  >
                    <span className="text-xs uppercase tracking-wider text-gold mb-3 block">
                      Brand Focus
                    </span>
                    <p className="text-foreground font-medium mb-4">
                      Argan-based nourishment for everyday softness and manageability.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Aroma keeps routines simple, delivering consistent care with a clear
                      ingredient story and gentle performance.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Focused System */}
          <section className="section-padding bg-cream">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                  A Focused Haircare System
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  A Routine Built for Daily Use
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aroma is developed as a cohesive haircare system, covering the essential steps
                  of a daily routine. This structure allows products to work together seamlessly,
                  reinforcing consistency and ease of use.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brand.products.map((product, index) => (
                  <motion.div
                    key={product}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-border text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-5 h-5 text-gold" />
                    </div>
                    <p className="font-medium text-foreground">{product}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Ingredients & Manufacturing */}
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <FlaskConical className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Ingredient & Formulation Focus
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Aroma formulations are centered around argan oil, an ingredient associated
                    with hair nourishment, smoothness, and moisture support. The formulation
                    approach prioritizes balance, creating products that feel effective yet gentle
                    enough for regular use while supporting comfort and appearance over time.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Factory className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium uppercase tracking-wider">
                      Manufactured by Gulf EPCO
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Aroma is developed and manufactured at Gulf EPCO&apos;s facility in Dubai
                    Industrial City, following structured production processes and quality-focused
                    manufacturing practices. The brand demonstrates Gulf EPCO&apos;s ability to
                    manufacture focused, wellness-led haircare ranges with consistent, scalable
                    production and a clear ingredient story.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="section-padding bg-secondary/20">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="border border-border rounded-2xl p-8 md:p-10">
                  <span className="block text-4xl text-gold/60 font-serif leading-none mb-4">
                    “
                  </span>
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                    Aroma reflects a calm, routine-driven approach to haircare manufacturing -
                    rooted in nourishment, simplicity, and everyday usability.
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      ) : (
        /* Products */
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-12"
            >
              <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
                Product Range
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Featured Products
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fallbackProducts.map((product, index) => (
                <motion.div
                  key={product}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="font-medium text-foreground">{product}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl text-foreground mb-4"
            >
              Interested in Creating a Similar Beauty Product?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8 max-w-xl mx-auto"
            >
              Gulf EPCO can help you develop and manufacture products inspired by {brand.name}&apos;s
              quality and positioning. Let&apos;s discuss your vision.
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
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container-wide">
          <div className="flex justify-between items-center">
            <Link
              href={`/brands/${prevBrand.slug}`}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider block">Previous</span>
                <span className="font-serif text-lg">{prevBrand.name}</span>
              </div>
            </Link>
            <Link
              href={`/brands/${nextBrand.slug}`}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="text-right">
                <span className="text-xs uppercase tracking-wider block">Next</span>
                <span className="font-serif text-lg">{nextBrand.name}</span>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
