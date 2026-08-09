import type { ServicePageData } from "./site";

export const fitnessService: ServicePageData = {
  slug: "fitness-coaching",
  title: "Online Fitness Coaching | Layne Fitness",
  description:
    "Get personal fitness coaching in Cleveland, TX and online: custom workout plans for weight loss, fat burning, strength, getting shredded, and building muscle.",
  h1: "Online Fitness Coaching That Adjusts With You.",
  directAnswer:
    "Layne builds a workout plan around your goal, experience, available equipment, schedule, and current limitations. You meet by phone or Zoom, follow a clear plan, report what is happening, and adjust instead of guessing alone.",
  image: "/images/fitness-dumbbell.jpg",
  imageAlt: "A 40-pound dumbbell on a gym floor ready for a custom strength workout",
  forWhom: [
    "Beginners who need a clear starting point",
    "People returning after time away from training",
    "Lifters who have stalled on a generic routine",
    "Busy clients training at home, in a gym, or both",
  ],
  includes: [
    "A private goal and training-history call",
    "A workout structure matched to your schedule and equipment",
    "Exercise selection, sets, reps, rest, and progression guidance",
    "Phone or Zoom check-ins with direct adjustments",
    "Technique feedback when you provide clear training video",
  ],
  excludes: [
    "Medical diagnosis, injury treatment, or physical therapy",
    "Guaranteed timelines or identical results for every client",
    "A recycled plan with your name placed on top",
  ],
  faq: [
    { question: "Do I need a gym membership?", answer: "No. Layne can build around the equipment you actually have, whether that is a full gym, a few dumbbells, or a home setup." },
    { question: "How do coaching calls work?", answer: "Calls happen by phone or Zoom. The first conversation covers your goals and constraints; later check-ins focus on execution, feedback, and adjustments." },
    { question: "Is this only for advanced lifters?", answer: "No. The plan starts from your current experience and gives beginners enough structure to move forward without being overwhelmed." },
    { question: "How much does coaching cost?", answer: "Pricing depends on the level of support and plan you need. Layne explains the fit and price after the initial conversation." },
  ],
};

export const nutritionService: ServicePageData = {
  slug: "nutrition",
  title: "Online Nutrition Coaching | Layne Fitness",
  description:
    "Personalized nutrition coaching for weight loss, fat loss, building muscle, better diet habits, workout fuel, and accountability in Cleveland, TX and online.",
  h1: "Nutrition Coaching You Can Actually Live With.",
  directAnswer:
    "Layne helps you turn your goal into practical food choices, routines, and accountability. The work is built around what you eat now, what you can sustain, and how your training is progressing—not an extreme menu you abandon after a week.",
  image: "/images/nutrition-whole-foods.jpg",
  imageAlt: "Colorful whole foods including grains, vegetables, fruit, beans, nuts, and olives",
  forWhom: [
    "People who train consistently but feel stuck with food choices",
    "Beginners who want a simpler structure for meals",
    "Clients who need accountability without extreme restrictions",
    "Fitness clients who want training and nutrition to work together",
  ],
  includes: [
    "A review of your goals, schedule, preferences, and current habits",
    "A practical meal-building and portion framework",
    "Education around protein, carbohydrates, fats, hydration, and labels",
    "Regular progress conversations and realistic adjustments",
    "Coordination with the training plan Layne builds for you",
  ],
  excludes: [
    "Medical nutrition therapy or treatment for disease",
    "Claims that one food or supplement guarantees a result",
    "A needlessly restrictive diet that ignores your real life",
  ],
  faq: [
    { question: "Will I receive a strict meal plan?", answer: "The goal is a useful structure you can sustain. Your plan may include meal examples and targets, but it is built to teach decisions rather than make you dependent on one menu." },
    { question: "Can nutrition coaching work with my fitness plan?", answer: "Yes. Training and nutrition are considered together so the plan reflects your goal, schedule, recovery, and feedback." },
    { question: "Does Layne treat medical conditions?", answer: "No. Nutrition coaching is educational and behavior-focused. Medical conditions and therapeutic diets belong with a licensed medical professional or registered dietitian." },
    { question: "How is pricing handled?", answer: "Book a call so Layne can understand the support you need and explain the available pricing clearly." },
  ],
};

export const peptideService: ServicePageData = {
  slug: "peptides",
  title: "Peptide Education Consultation | Layne Fitness",
  description:
    "Peptide safety education for adults researching peptides, retatrutide, GLP-1 claims, sourcing, prescriptions, licensed oversight, and fitness marketing boundaries.",
  h1: "Peptides Require Better Questions, Not Bigger Promises.",
  directAnswer:
    "Layne Fitness currently provides general education about the questions consumers should ask before considering peptides. Layne does not diagnose, prescribe, recommend a dose, operate a pharmacy, or sell peptide products through this website.",
  image: "/images/peptide-vial.jpg",
  imageAlt: "A gloved hand holding a laboratory bottle labeled peptide",
  forWhom: [
    "Adults trying to understand what peptide marketing leaves out",
    "People who want to ask better questions before a medical visit",
    "Fitness clients who need a clear boundary between coaching and medical care",
  ],
  includes: [
    "Plain-language education about approval and compounding status",
    "Questions to ask about a licensed prescriber and pharmacy",
    "A review of common marketing red flags",
    "Links to primary FDA, FTC, and Texas sources",
  ],
  excludes: [
    "Product sales, checkout, fulfillment, or pricing",
    "Diagnosis, prescribing, dosing, or treatment recommendations",
    "Claims that a peptide is safe, effective, or right for your body",
  ],
  faq: [
    { question: "Can I buy peptides from Layne Fitness?", answer: "No. Peptide sales are not enabled, and this website does not offer products, prescriptions, checkout, or fulfillment." },
    { question: "Can Layne tell me which peptide I need?", answer: "No. Deciding whether a drug is appropriate for a person requires a properly licensed medical professional and a legitimate patient relationship." },
    { question: "Are compounded peptides FDA approved?", answer: "Compounded drugs are not FDA approved. The FDA does not review compounded products for safety, effectiveness, or quality before they are marketed." },
    { question: "What should I verify first?", answer: "Verify the licensed prescriber, the dispensing pharmacy, approval or compounding status, evidence for every claim, known risks, and whether an FDA-approved option can meet the medical need." },
  ],
};
