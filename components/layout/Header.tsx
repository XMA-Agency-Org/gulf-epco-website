"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { brandsData } from "@/lib/brands-data";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Gulf EPCO", href: "/about" },
  { name: "Manufacturing Expertise", href: "/manufacturing" },
  { name: "Our Brands", href: "/brands", hasDropdown: true },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isTransparent
          ? "bg-transparent border-transparent"
          : "bg-background/95 backdrop-blur-md border-b border-border"
      )}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-serif text-2xl font-semibold tracking-tight",
                  isTransparent ? "text-primary-foreground" : "text-foreground"
                )}
              >
                Gulf EPCO
              </span>
              <span
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em]",
                  isTransparent
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                )}
              >
                Beauty Manufacturing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setBrandsDropdownOpen(true)
                }
                onMouseLeave={() =>
                  item.hasDropdown && setBrandsDropdownOpen(false)
                }
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                    isActive(item.href)
                      ? isTransparent
                        ? "text-primary-foreground bg-white/10"
                        : "text-foreground bg-secondary"
                      : isTransparent
                      ? "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        brandsDropdownOpen && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Brands Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {brandsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-medium border border-border overflow-hidden"
                      >
                        <div className="py-2">
                          {brandsData.map((brand) => (
                            <Link
                              key={brand.slug}
                              href={`/brands/${brand.slug}`}
                              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                            >
                              {brand.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" asChild>
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2",
              isTransparent ? "text-primary-foreground" : "text-foreground"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-card border-t border-border"
            >
              <div className="py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() =>
                        !item.hasDropdown && setMobileMenuOpen(false)
                      }
                      className={cn(
                        "block px-4 py-3 text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "text-foreground bg-secondary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="pl-6 border-l-2 border-secondary ml-4 mt-1 space-y-1">
                        {brandsData.map((brand) => (
                          <Link
                            key={brand.slug}
                            href={`/brands/${brand.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {brand.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Button variant="gold" className="w-full" asChild>
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Partner With Us
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
