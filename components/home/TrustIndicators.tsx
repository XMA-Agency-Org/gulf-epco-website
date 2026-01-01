"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Globe2, FileCheck2, Leaf, FlaskRound } from "lucide-react";

const certifications = [
  {
    icon: Award,
    name: "GMP Certified",
    description: "Good Manufacturing Practice",
  },
  {
    icon: ShieldCheck,
    name: "ISO 22716",
    description: "Cosmetics GMP Standard",
  },
  {
    icon: FileCheck2,
    name: "FDA Registered",
    description: "US Market Compliance",
  },
  {
    icon: Globe2,
    name: "EU Compliant",
    description: "European Standards",
  },
  {
    icon: FlaskRound,
    name: "GCC Approved",
    description: "Regional Certification",
  },
  {
    icon: Leaf,
    name: "Sustainability",
    description: "Eco-Conscious Production",
  },
];

export function TrustIndicators() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Quality & Compliance
          </h2>
          <p className="text-muted-foreground">
            Trusted certifications for global market access
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-4 shadow-soft">
                <cert.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
