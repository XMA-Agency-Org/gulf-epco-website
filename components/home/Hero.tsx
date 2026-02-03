"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
const heroVideo = "https://res.cloudinary.com/dw1j7izud/video/upload/q_auto:good,f_auto,vc_auto,c_scale,br_2000k/v1770119092/xvnkufavk13b6icx77y4.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.78)_58%,rgba(2,6,23,0.62)_68%,rgba(2,6,23,0.6)_100%)]" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-10 md:py-14 lg:py-20">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-gold text-sm font-medium uppercase tracking-wider">
              <span className="w-8 h-px bg-gold" />
              Dubai Industrial City, UAE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground leading-tight mb-6"
          >
            Premium Skin and Hair Care Manufacturing.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0"
          >
            <span className="md:hidden">
              Welcome to Gulf EPCO Cosmetics Factory, a Dubai-based manufacturer of skin care, hair
              care, and personal care products, since 2013.
            </span>
            <span className="hidden md:inline">
              Welcome to Gulf EPCO Cosmetics Factory, a Dubai-based manufacturer of skin care, hair
              care, and personal care products. Since 2013, we develop high-quality formulations
              that meet global standards.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start"
          >
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link href="/manufacturing">Manufacturing & Capabilities</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg mx-auto md:mx-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block text-xs text-primary-foreground/70 uppercase tracking-wider">
                  GMP & ISO
                </span>
                <span className="text-sm font-medium text-primary-foreground">Certified</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block text-xs text-primary-foreground/70 uppercase tracking-wider">
                  Global
                </span>
                <span className="text-sm font-medium text-primary-foreground">Compliance</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block text-xs text-primary-foreground/70 uppercase tracking-wider">
                  FDA
                </span>
                <span className="text-sm font-medium text-primary-foreground">Registered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
