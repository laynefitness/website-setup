import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/fitness-coaching", "/nutrition", "/peptides", "/articles", "/about", "/book-a-call", "/terms", "/privacy-policy", "/cookie-policy", "/health-disclaimer", "/accessibility"];
  return [
    ...routes.map((route) => ({ url: `${siteConfig.domain}${route}`, lastModified: new Date("2026-08-09"), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : route.startsWith("/terms") || route.includes("policy") ? 0.3 : 0.8 })),
    ...articles.filter((article) => article.status !== "draft").map((article) => ({ url: `${siteConfig.domain}/articles/${article.slug}`, lastModified: new Date(article.modified), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
