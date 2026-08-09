import type { FAQItem } from "./site";
import { siteConfig } from "./site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.domain}/#organization`,
  name: siteConfig.name,
  url: siteConfig.domain,
  telephone: siteConfig.phoneDisplay,
  description: siteConfig.description,
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "City", name: "Cleveland", containedInPlace: { "@type": "State", name: "Texas" } },
    ...siteConfig.serviceCities.map((name) => ({ "@type": "City", name, containedInPlace: { "@type": "State", name: "Texas" } })),
  ],
  founder: { "@id": `${siteConfig.domain}/#layne` },
};

export const layneSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.domain}/#layne`,
  name: "Layne",
  jobTitle: "Fitness and Nutrition Coach",
  worksFor: { "@id": `${siteConfig.domain}/#organization` },
  homeLocation: { "@type": "City", name: "Cleveland", containedInPlace: "Texas" },
};

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    name: siteConfig.name,
    url: siteConfig.domain,
    publisher: { "@id": `${siteConfig.domain}/#organization` },
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.domain}${path}`,
    provider: { "@id": `${siteConfig.domain}/#organization` },
    areaServed: [
      { "@type": "Country", name: "United States" },
      ...siteConfig.serviceCities.map((city) => ({ "@type": "City", name: city, containedInPlace: { "@type": "State", name: "Texas" } })),
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.domain}/book-a-call`,
      servicePhone: siteConfig.phoneDisplay,
    },
  };
}

export function faqSchema(items: FAQItem[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.path}`,
    })),
  };
}
