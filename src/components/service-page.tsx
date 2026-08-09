import { ArrowRight, CalendarDays, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ServicePageData } from "@/data/site";
import { siteConfig } from "@/data/site";
import { FAQ } from "./faq";
import { IntakeForm } from "./intake-form";
import { JsonLd } from "./json-ld";
import { faqSchema, serviceSchema } from "@/data/schema";

export function ServicePage({ data, label, children }: { data: ServicePageData; label: string; children?: ReactNode }) {
  const url = `${siteConfig.domain}/${data.slug}`;
  return (
    <>
      <JsonLd data={[serviceSchema(data.h1, data.description, `/${data.slug}`), faqSchema(data.faq, url)]} />
      <section className="page-hero">
        <div className="page-hero-grid wrap">
          <div className="page-hero-copy">
            <span className="kicker">{label}</span>
            <h1>{data.h1}</h1>
            <p className="lede">{data.description}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/book-a-call"><CalendarDays aria-hidden="true" size={20} /> Book My Call</Link>
              <a className="button button-ghost" href={siteConfig.phoneHref}><Phone aria-hidden="true" size={20} /> Call Layne</a>
            </div>
          </div>
          <div className="page-hero-media"><Image src={data.image} alt={data.imageAlt} fill priority sizes="(max-width: 820px) calc(100vw - 28px), 42vw" /><span className="page-hero-tag">PHONE + ZOOM</span></div>
        </div>
      </section>
      <div className="wrap"><div className="answer-block"><strong>Direct answer</strong><p>{data.directAnswer}</p></div></div>

      <section className="section center-section reveal-band">
        <div className="split-content wrap">
          <div><span className="kicker">Best fit</span><h2>Who this is built for.</h2><ul className="check-list">{data.forWhom.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><span className="kicker">What you get</span><h2>Clear work. Direct support.</h2><ul className="check-list">{data.includes.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>

      {children}

      <section className="section section-soft center-section reveal-band">
        <div className="wrap intake-shell">
          <div className="section-heading-centered">
            <span className="kicker">Quick intake</span>
            <h2>See if coaching fits your goal.</h2>
            <p className="lede">Share the goal first: lose weight, burn fat, build muscle, improve your diet, get stronger, or ask safer peptide questions.</p>
          </div>
          <IntakeForm compact />
        </div>
      </section>

      <section className="section section-soft">
        <div className="split-content wrap">
          <div><span className="kicker">Honest limits</span><h2>What this service is not.</h2><p className="lede">Trust starts with knowing where coaching stops.</p><ul className="boundary-list">{data.excludes.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><span className="kicker">Questions</span><h2>Know before you book.</h2><FAQ items={data.faq} /></div>
        </div>
      </section>

      <section className="section section-signal">
        <div className="wrap section-heading"><div><span className="kicker">Your next move</span><h2>Tell Layne what you are working toward.</h2></div><Link className="button button-light" href="/book-a-call">Book My Coaching Call <ArrowRight aria-hidden="true" size={19} /></Link></div>
      </section>
    </>
  );
}
