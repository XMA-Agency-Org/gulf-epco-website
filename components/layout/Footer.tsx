"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

const navigation = {
  company: [
    { name: "About Gulf EPCO", href: "/about" },
    { name: "Manufacturing Expertise", href: "/manufacturing" },
    { name: "Contact Us", href: "/contact" },
  ],
  brands: [
    { name: "SO20 Haircare", href: "/brands/so20-haircare" },
    { name: "Richie Skincare", href: "/brands/richie-skincare" },
    { name: "GranHair", href: "/brands/granhair" },
    { name: "NovoCare", href: "/brands/novocare" },
    { name: "Aroma", href: "/brands/aroma" },
    { name: "Fiora Shower Gel", href: "/brands/fiora" },
  ],
  certifications: [
    "GMP Certified",
    "ISO 22716",
    "FDA Registered",
    "EU Compliant",
    "GCC Approved",
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold">
                Gulf EPCO
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mt-1">
                Beauty Manufacturing Excellence
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Your trusted partner for premium cosmetics manufacturing. From
              concept to shelf, we bring beauty brands to life with precision,
              quality, and care.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Our Brands</h3>
            <ul className="space-y-3">
              {navigation.brands.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Dubai Industrial City, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+971555666192"
                  className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  +971 55 566 6192
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@gulfepco.com"
                  className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  info@gulfepco.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {navigation.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-2 py-1 bg-primary-foreground/10 rounded"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} Gulf EPCO. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
