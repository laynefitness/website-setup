export type ArticleStatus = "draft" | "verified" | "published";

export type ArticleRecord = {
  slug: string;
  title: string;
  description: string;
  category: "Fitness" | "Nutrition" | "Peptide Education";
  primaryKeyword: string;
  published: string;
  modified: string;
  readingTime: string;
  cover: string;
  coverAlt: string;
  status: ArticleStatus;
};

export const articles: ArticleRecord[] = [
  {
    slug: "what-online-fitness-coaching-includes",
    title: "What Does Online Fitness Coaching Include?",
    description:
      "See how a real coach builds, explains, and adjusts a custom workout plan around your goals, schedule, equipment, and feedback.",
    category: "Fitness",
    primaryKeyword: "online fitness coaching",
    published: "2026-08-09",
    modified: "2026-08-09",
    readingTime: "7 min read",
    cover: "/images/fitness-dumbbell-rack.jpg",
    coverAlt: "A row of adjustable dumbbells ready for a personalized strength workout",
    status: "verified",
  },
  {
    slug: "how-personalized-nutrition-coaching-works",
    title: "How Personalized Nutrition Coaching Works",
    description:
      "Learn how practical nutrition coaching turns your goals, preferences, schedule, and progress into a plan you can actually follow.",
    category: "Nutrition",
    primaryKeyword: "personalized nutrition coaching",
    published: "2026-08-09",
    modified: "2026-08-09",
    readingTime: "8 min read",
    cover: "/images/nutrition-plan.jpg",
    coverAlt: "Protein foods, fruit, healthy fats, and light dumbbells arranged for a nutrition plan",
    status: "verified",
  },
  {
    slug: "peptide-safety-questions-before-a-consultation",
    title: "Peptide Safety Questions Before a Consultation",
    description:
      "Understand the questions to ask about approval status, sourcing, prescriptions, licensed oversight, and health claims before considering peptides.",
    category: "Peptide Education",
    primaryKeyword: "peptide safety consultation",
    published: "2026-08-09",
    modified: "2026-08-09",
    readingTime: "9 min read",
    cover: "/images/peptide-bottles.jpg",
    coverAlt: "Small glass bottles arranged in sunlight for a peptide sourcing discussion",
    status: "verified",
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
