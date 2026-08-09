import { ArrowRight, CalendarDays, Check, MapPin, Phone, Video } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BarbellVisual } from "@/components/visuals";
import { FAQ } from "@/components/faq";
import { IntakeForm } from "@/components/intake-form";
import { JsonLd } from "@/components/json-ld";
import { articles } from "@/data/articles";
import { faqSchema } from "@/data/schema";
import { siteConfig } from "@/data/site";

const homeFaq = [
  { question: "What does online fitness coaching include?", answer: "Layne starts with your goal, experience, schedule, equipment, and current constraints. He then builds a custom training structure and uses phone or Zoom check-ins to review execution and make adjustments." },
  { question: "Can Layne help with both workouts and nutrition?", answer: "Yes. Fitness coaching and practical nutrition coaching can work together so your training, food choices, recovery, and accountability point toward the same goal." },
  { question: "Does Layne coach people outside Cleveland, Texas?", answer: "Yes. Coaching is available online across the United States. Layne is based in Cleveland, Texas and also serves people within the surrounding 25-mile area." },
  { question: "How much does Layne Fitness cost?", answer: "Pricing is consultation-first because the right level of support depends on your goals and situation. Book a call and Layne will explain the fit and pricing before you commit." },
  { question: "Does Layne Fitness sell peptides?", answer: "No. Peptide sales are not enabled. The site currently provides general safety education and does not diagnose, prescribe, recommend doses, operate a pharmacy, or sell products." },
];

export const metadata: Metadata = {
  title: "Personal Fitness Coach in Cleveland, TX",
  description: "Personal fitness coaching in Cleveland, TX for weight loss, fat loss, building muscle, getting stronger, better diet habits, and peptide safety education.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaq, siteConfig.domain)} />
      <section className="hero">
        <div className="hero-grid wrap">
          <div className="hero-copy">
            <span className="kicker">Cleveland, TX personal coaching</span>
            <h1>Lose Fat. Build Muscle. <span>Stop Guessing.</span></h1>
            <p className="lede">Personal fitness coaching for Cleveland, Texas and online clients who want a clear workout plan, practical diet support, and direct accountability from Layne by phone or Zoom.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/book-a-call"><CalendarDays aria-hidden="true" size={20} /> Book My Coaching Call</Link>
              <a className="button button-light" href={siteConfig.phoneHref}><Phone aria-hidden="true" size={20} /> Call {siteConfig.phoneDisplay}</a>
            </div>
            <div className="hero-trust" aria-label="Coaching availability">
              <span><Video aria-hidden="true" size={18} /> Phone + Zoom coaching</span>
              <span><MapPin aria-hidden="true" size={18} /> Cleveland, Texas</span>
              <span><Check aria-hidden="true" size={18} /> Online nationwide</span>
            </div>
          </div>
          <figure className="hero-proof">
            <div className="proof-frame">
              <Image src="/images/layne-transformation.jpg" alt="Layne's two-stage physique transformation collage showing a reported 25-pound difference over two months" width={1200} height={2134} priority sizes="(max-width: 820px) calc(100vw - 28px), 42vw" />
              <span className="proof-label">LAYNE&apos;S OWN PROOF</span>
            </div>
            <figcaption className="proof-caption">Layne reports a 25-pound change over two months. Individual results vary.</figcaption>
          </figure>
        </div>
      </section>

      <div className="barbell-wrap section-tight"><div className="wrap"><BarbellVisual /></div></div>

      <section className="section section-soft center-section reveal-band" aria-labelledby="intake-title">
        <div className="wrap intake-shell">
          <div className="section-heading-centered">
            <span className="kicker">Start here</span>
            <h2 id="intake-title">Tell Layne the result you want.</h2>
            <p className="lede">Weight loss, fat burning, building muscle, getting shredded, improving your diet, or peptide safety questions. A short intake makes the call sharper.</p>
          </div>
          <IntakeForm />
        </div>
      </section>

      <section className="section center-section reveal-band" aria-labelledby="process-title">
        <div className="wrap">
          <div className="process-head">
            <h2 id="process-title">A plan should change when you do.</h2>
            <p className="lede">Generic plans stop at delivery. Coaching starts there. Layne listens, builds, watches what happens, and adjusts the work.</p>
          </div>
          <div className="process-list">
            <div className="process-item"><h3>Tell Layne where you are.</h3><p>Talk through your goal, training history, schedule, equipment, food habits, and the obstacles that keep getting in the way.</p></div>
            <div className="process-item"><h3>Get a plan you understand.</h3><p>Know what to do, why it matters, how to progress, and what success should look like this week—not someday.</p></div>
            <div className="process-item"><h3>Check in and adjust.</h3><p>Report what worked, what hurt, what felt easy, and what life changed. Layne helps you choose the next move.</p></div>
          </div>
        </div>
      </section>

      <section aria-label="Coaching services" className="service-stack reveal-band">
        <article className="service-band">
          <div className="service-media"><Image src="/images/fitness-dumbbell-rack.jpg" alt="A rack of adjustable dumbbells for strength training" fill sizes="(max-width: 820px) 100vw, 45vw" /></div>
          <div className="service-copy"><span className="service-index">01 / FITNESS</span><h3>Train with a reason behind every set.</h3><p>Get a workout structure built around your body, schedule, equipment, and experience. No recycled PDF. No wondering what comes next.</p><Link className="text-link" href="/fitness-coaching">See Fitness Coaching <ArrowRight aria-hidden="true" size={18} /></Link></div>
        </article>
        <article className="service-band">
          <div className="service-media"><Image src="/images/nutrition-whole-foods.jpg" alt="Colorful whole foods including vegetables, grains, fruit, beans, and nuts" fill sizes="(max-width: 820px) 100vw, 55vw" /></div>
          <div className="service-copy"><span className="service-index">02 / NUTRITION</span><h3>Eat for the plan without putting life on pause.</h3><p>Build practical food choices, portions, and habits that support the work you are doing—without pretending one rigid menu fits everyone.</p><Link className="text-link" href="/nutrition">See Nutrition Coaching <ArrowRight aria-hidden="true" size={18} /></Link></div>
        </article>
        <article className="service-band peptide-band">
          <div className="service-media"><Image src="/images/peptide-vial.jpg" alt="A gloved laboratory hand holding a bottle labeled peptide" fill sizes="(max-width: 820px) 100vw, 45vw" /></div>
          <div className="service-copy"><span className="service-index">03 / PEPTIDE EDUCATION</span><h3>Better questions before any big decision.</h3><p>Learn what to verify about approval status, sourcing, licensed oversight, prescriptions, and marketing claims. No products or medical recommendations are offered.</p><Link className="text-link" href="/peptides">Read the Safety Guide <ArrowRight aria-hidden="true" size={18} /></Link></div>
        </article>
      </section>

      <section className="section section-dark">
        <div className="comparison wrap">
          <h2>A real coach sees what a template misses.</h2>
          <div className="compare-rows">
            <div className="compare-row"><strong>Built around your week</strong><span>Not a seven-day routine designed for an imaginary schedule.</span></div>
            <div className="compare-row"><strong>Feedback becomes a decision</strong><span>What you report changes the plan instead of disappearing into an app.</span></div>
            <div className="compare-row"><strong>Training and nutrition connect</strong><span>One conversation keeps the work pointed toward the same outcome.</span></div>
            <div className="compare-row"><strong>A person knows your name</strong><span>You speak with Layne—not a bot, content library, or rotating support queue.</span></div>
          </div>
        </div>
      </section>

      <section className="section center-section local-seo reveal-band" aria-labelledby="local-title">
        <div className="wrap">
          <span className="kicker">Local coaching area</span>
          <h2 id="local-title">Personal coaching near Cleveland, Texas.</h2>
          <p className="lede">Layne serves online clients nationwide and local clients around Cleveland, TX, including communities within roughly 25 miles.</p>
          <div className="city-cloud" aria-label="Cities served near Cleveland Texas">
            {siteConfig.serviceCities.map((city) => <span key={city}>{city}, TX</span>)}
          </div>
        </div>
      </section>

      <section className="section section-signal">
        <div className="story-grid wrap">
          <div className="story-stat"><div><strong>20</strong><span>years old, already committed to doing the work</span></div></div>
          <div className="story-copy"><span className="kicker">Meet Layne</span><h2>He built himself before he offered to coach you.</h2><p className="lede">Layne got serious about fitness after deciding he wanted to perform and become the strongest version of himself—for himself and his family. Now he gives clients the same thing he valued most: a real person who pays attention and has their back.</p><Link className="button button-light" href="/about">Read Layne&apos;s Story <ArrowRight aria-hidden="true" size={18} /></Link></div>
        </div>
      </section>

      <section className="section reveal-band">
        <div className="wrap">
          <div className="section-heading"><h2>Useful answers before you book.</h2><Link className="text-link" href="/articles">Read All Articles <ArrowRight aria-hidden="true" size={18} /></Link></div>
          <div className="article-list">
            {articles.map((article) => (
              <Link className="article-card" key={article.slug} href={`/articles/${article.slug}`}>
                <div className="article-card-media"><Image src={article.cover} alt={article.coverAlt} fill sizes="(max-width: 560px) 100vw, (max-width: 1120px) 50vw, 34vw" /></div>
                <div className="article-card-copy"><small>{article.category} · {article.readingTime}</small><h3>{article.title}</h3><p>{article.description}</p><span>Read the guide →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap split-content">
          <div><span className="kicker">Straight answers</span><h2>What people ask before coaching.</h2><p className="lede">No fake urgency. No hidden checkout. Understand the service, then decide whether the conversation is worth having.</p></div>
          <FAQ items={homeFaq} />
        </div>
      </section>
    </>
  );
}
