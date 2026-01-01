"use client";

import { motion } from "framer-motion";

const partners = [
  "Private brands seeking custom or private label manufacturing",
  "Retailers and distributors requiring reliable large-scale production",
  "International partners looking for export-ready personal care products",
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

export function WhoWeWorkWith() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-gold text-sm font-medium uppercase tracking-wider mb-4"
          >
            Who We Work With
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Supporting brands at every stage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We partner with teams that need dependable, scalable manufacturing.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              variants={itemVariants}
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
                  {partner}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
