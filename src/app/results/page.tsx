import { ArrowRight, CalendarDays } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { results } from "@/data/results";

export const metadata: Metadata = {
  title: "Fitness Results & Progress Photos",
  description: "See Layne Fitness progress photos in a clean side-by-side layout, starting with Layne's own before and after transformation.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  const [layneResult] = results;

  return (
    <>
      <section className="results-hero">
        <div className="wrap results-hero-grid">
          <div>
            <span className="kicker">Progress photos</span>
            <h1>Results you can actually inspect.</h1>
          </div>
          <div className="results-hero-copy">
            <p className="lede">Layne built himself before asking anyone else to trust the process. This page keeps transformation photos organized, clean, and easy to compare as more client results get added.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/book-a-call">
                <CalendarDays aria-hidden="true" size={20} /> Start My Coaching Plan
              </Link>
              <Link className="button button-light" href="/#intake-title">
                Send Layne My Intake <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="layne-result-title">
        <div className="wrap result-feature">
          <div className="result-feature-head">
            <span className="kicker">Layne&apos;s own proof</span>
            <h2 id="layne-result-title">{layneResult.name}</h2>
            <p className="lede">{layneResult.summary} The point is not a fake guarantee. It is clear proof that the coach understands the discipline he is asking from you.</p>
          </div>

          <div className="result-photo-pair" aria-label="Layne before and after progress photos">
            <figure className="result-photo-card">
              <div className="result-photo-frame">
                <Image src={layneResult.before.src} alt={layneResult.before.alt} width={layneResult.before.width} height={layneResult.before.height} sizes="(max-width: 820px) calc(100vw - 64px), 44vw" priority />
                <span className="result-photo-label">Before</span>
              </div>
              <figcaption>Starting progress photo</figcaption>
            </figure>
            <figure className="result-photo-card">
              <div className="result-photo-frame">
                <Image src={layneResult.after.src} alt={layneResult.after.alt} width={layneResult.after.width} height={layneResult.after.height} sizes="(max-width: 820px) calc(100vw - 64px), 44vw" priority />
                <span className="result-photo-label">After</span>
              </div>
              <figcaption>Current transformation photo</figcaption>
            </figure>
          </div>

          <p className="result-disclaimer">{layneResult.disclaimer}</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap results-cta">
          <h2>Want your own photos to belong here later?</h2>
          <p className="lede">Start with the intake, get a plan, and let Layne adjust the work as your body changes.</p>
          <Link className="button button-primary" href="/book-a-call">
            <CalendarDays aria-hidden="true" size={20} /> Book My Coaching Call
          </Link>
        </div>
      </section>
    </>
  );
}
