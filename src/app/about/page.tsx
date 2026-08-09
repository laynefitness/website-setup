import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/data/schema";

export const metadata: Metadata = {
  title: "About Layne",
  description: "Meet Layne, the 20-year-old Cleveland, Texas fitness coach behind personalized online training and nutrition support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <section className="page-hero">
        <div className="page-hero-grid wrap">
          <div className="page-hero-copy"><span className="kicker">The person behind the plan</span><h1>Layne learned to perform by refusing to stay comfortable.</h1><p className="lede">He is 20, based in Cleveland, Texas, and building his work around a simple promise: pay attention, tell the truth, and have the client&apos;s back.</p><Link className="button button-primary" href="/book-a-call">Talk With Layne <ArrowRight aria-hidden="true" size={19} /></Link></div>
          <figure><div className="page-hero-media contain"><Image src="/images/results/layne-transformation/after.jpg" alt="Layne after his physique transformation, taking a mirror progress photo" fill priority sizes="(max-width: 820px) calc(100vw - 28px), 42vw" /></div><figcaption className="proof-caption">See the full before and after comparison on the results page. Individual results vary.</figcaption></figure>
        </div>
      </section>
      <section className="section section-signal"><div className="wrap"><div className="answer-block"><strong>Layne&apos;s story</strong><p>Over the past few years, Layne rose through his own training by deciding he wanted to perform and become the strongest version of himself—for himself and his family. Fitness gave that decision structure. Coaching lets him give that structure to someone else.</p></div></div></section>
      <section className="section"><div className="comparison wrap"><h2>What “having your back” means in practice.</h2><div className="compare-rows"><div className="compare-row"><strong>Pay attention</strong><span>Remember the goal, the constraint, and what happened last week.</span></div><div className="compare-row"><strong>Explain the work</strong><span>Make sure you understand what to do and why it belongs in the plan.</span></div><div className="compare-row"><strong>Adjust honestly</strong><span>Change what is not working instead of defending a generic template.</span></div><div className="compare-row"><strong>Respect the boundary</strong><span>Know when a question belongs with a doctor, physical therapist, or registered dietitian.</span></div></div></div></section>
      <section className="section section-dark"><div className="wrap split-content"><div><span className="kicker">No borrowed authority</span><h2>Proof before titles.</h2></div><div><p className="lede muted">This site does not invent certifications, client counts, awards, reviews, or medical credentials. As Layne earns verified credentials and gathers real client outcomes, those facts can be added with the source and context they deserve.</p><Link className="button button-primary" href="/fitness-coaching">See How Coaching Works <ArrowRight aria-hidden="true" size={19} /></Link></div></div></section>
    </>
  );
}
