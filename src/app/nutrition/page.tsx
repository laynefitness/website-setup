import type { Metadata } from "next";
import Image from "next/image";
import { ServicePage } from "@/components/service-page";
import { MacroVisual } from "@/components/visuals";
import { nutritionService } from "@/data/services";

export const metadata: Metadata = {
  title: "Online Nutrition Coaching",
  description: nutritionService.description,
  alternates: { canonical: "/nutrition" },
  openGraph: { title: nutritionService.title, description: nutritionService.description, url: "/nutrition", images: ["/images/nutrition-whole-foods.jpg"] },
};

export default function NutritionPage() {
  return (
    <ServicePage data={nutritionService} label="Practical food choices, adjusted with you">
      <section className="section section-dark">
        <div className="media-split wrap">
          <div><MacroVisual /></div>
          <div><span className="kicker">A useful framework</span><h2>Build meals around the work.</h2><p className="lede muted">Nutrition coaching connects your goal to repeatable decisions: a strong protein source, useful carbohydrates, fats that fit the day, produce you enjoy, and portions you can adjust.</p><div className="content-stack"><div className="content-note"><h3>Learn the label</h3><p>Understand serving size, calories, and nutrients in context instead of reacting to one highlighted number.</p></div><div className="content-note"><h3>Keep food recognizable</h3><p>Build around foods you can buy, prepare, and eat consistently rather than a perfect menu made for someone else.</p></div></div></div>
        </div>
      </section>
      <section className="section">
        <div className="media-split wrap">
          <div className="media-panel"><Image src="/images/nutrition-plan.jpg" alt="Protein foods, fruit, healthy fats, and light dumbbells arranged for a fitness nutrition plan" fill sizes="(max-width: 820px) 100vw, 52vw" /></div>
          <div><Image src="/images/nutrition-apple.png" alt="Illustrated apple flexing strong arms" width={1200} height={630} sizes="(max-width: 820px) 100vw, 38vw" /><h2>Strong enough to be simple.</h2><p className="lede">The goal is not to make eating more complicated. It is to make your next useful choice easier to recognize and repeat.</p></div>
        </div>
      </section>
    </ServicePage>
  );
}
