export const brandsData = [
  {
    name: "Richie",
    slug: "richie-skincare",
    category: "Advanced Skincare",
    tagline: "Advanced Skincare, Backed by Science",
    description:
      "Richie is a skincare brand developed around dermatologist-approved formulations and innovative peptide technology, created to support skin health, hydration, and long-term performance.",
    products: [
      "Gentle cleansing",
      "Hydration and moisture retention",
      "Skin barrier support",
      "Targeted treatment solutions",
    ],
    image: "/assets/brands/richie.webp",
    color: "from-[#00153A] to-[#00153A]",
  },
  {
    name: "NovoCare",
    slug: "novocare",
    category: "Personal Care",
    tagline: "Everyday Care, Built on Trust",
    description:
      "NovoCare is a Dubai-based personal care brand created to deliver safe, effective, and affordable solutions for everyday families.",
    products: ["NovoBaby", "NovoSkin", "NovoHair"],
    image: "/assets/brands/novocare.webp",
    color: "from-sky-100 to-blue-100",
  },
  {
    name: "SO20",
    slug: "so20-haircare",
    category: "Professional Haircare",
    tagline: "Performance Haircare, Designed for Results",
    description:
      "SO20 is a haircare brand developed around performance-driven formulations, created to support hair strength, manageability, and long-term hair health.",
    products: [
      "Effective cleansing",
      "Conditioning and smoothness",
      "Hair strength and resilience",
      "Ongoing care and maintenance",
    ],
    image: "/assets/brands/so20.webp",
    color: "from-zinc-800 to-zinc-900",
  },
  {
    name: "Orga +",
    slug: "orga-plus",
    category: "Hair Care",
    tagline: "Targeted Haircare, Structured Around Everyday Needs",
    description:
      "Orga+ is a haircare brand developed around specific hair concerns and ingredient-led solutions, offering structured shampoo and conditioner systems for different hair types and routines.",
    products: [
      "Scalp comfort and freshness",
      "Hydration for dry or damaged hair",
      "Improved softness and manageability",
      "Ongoing nourishment through consistent care",
    ],
    image: "/assets/brands/orga-plus.webp",
    color: "from-amber-900 to-stone-900",
  },
  {
    name: "Fiora",
    slug: "fiora",
    category: "Body Care",
    tagline: "Everyday Cleansing, Designed for Comfort",
    description:
      "Fiora is a shower gel brand developed around gentle cleansing and everyday skin comfort.",
    products: [
      "Daily body cleansing",
      "Skin comfort and freshness",
      "Routine-friendly use for all household members",
    ],
    image: "/assets/brands/fiora.webp",
    color: "from-green-50 to-emerald-100",
  },
  {
    name: "Aroma",
    slug: "aroma",
    category: "Haircare",
    tagline: "Everyday Argan Haircare, Made Simple",
    description:
      "Aroma is a haircare brand built around argan-based formulations, developed to support everyday hair nourishment, softness, and manageability.",
    products: [
      "Gentle daily cleansing",
      "Improved softness and manageability",
      "Ongoing nourishment and hydration",
      "Simple, repeatable haircare routines",
    ],
    image: "/assets/brands/aroma.webp",
    color: "from-amber-100 to-orange-100",
  },
] as const;

export type Brand = (typeof brandsData)[number];
