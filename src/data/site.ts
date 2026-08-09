export const PEPTIDE_SALES_ENABLED = false as const;

export const siteConfig = {
  name: "Layne Fitness",
  shortName: "LF",
  domain: "https://laynefitness.com",
  description:
    "Personal fitness coaching in Cleveland, Texas with online workout plans, nutrition coaching, weight-loss support, muscle-building plans, and peptide safety education by phone or Zoom.",
  phoneDisplay: "281-659-7800",
  phoneHref: "tel:2816597800",
  calendly: "https://calendly.com/laynefitness/call",
  base: "Cleveland, Texas",
  localRadius: "25-mile radius",
  delivery: "Online coaching across the United States",
  serviceCities: [
    "Cleveland",
    "North Cleveland",
    "Tarkington Prairie",
    "Plum Grove",
    "Shepherd",
    "Splendora",
    "Goodrich",
    "New Caney",
    "Coldspring",
    "Conroe",
    "Huffman",
    "Dayton",
    "Kingwood",
    "Liberty",
    "Roman Forest",
    "Woodbranch",
  ],
} as const;

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  slug: "fitness-coaching" | "nutrition" | "peptides";
  title: string;
  description: string;
  h1: string;
  directAnswer: string;
  image: string;
  imageAlt: string;
  forWhom: string[];
  includes: string[];
  excludes: string[];
  faq: FAQItem[];
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/fitness-coaching", label: "Fitness Coaching" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/peptides", label: "Peptides" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
] as const;
