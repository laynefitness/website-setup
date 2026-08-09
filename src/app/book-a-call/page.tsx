import { Check, Phone } from "lucide-react";
import type { Metadata } from "next";
import { CalendlyLoader } from "@/components/calendly-loader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Fitness Coaching & Nutrition Call With Layne",
  description: "Book a one-on-one strategy call with Layne to talk through your goal, your routine, and the fastest next step for fat loss, muscle building, or both.",
  alternates: { canonical: "/book-a-call" },
  robots: { index: true, follow: true },
};

export default function BookCallPage() {
  return (
    <section className="section">
      <div className="booking-grid wrap">
        <div className="booking-copy">
          <span className="kicker">One conversation. Clear next step.</span>
          <h1>Fitness Coaching &amp; Nutrition Call With Layne</h1>
          <p className="lede">Book this call if you want a clear plan instead of more guessing. Layne will look at your goal, your current routine, what is not working, and the fastest next step for losing fat, building muscle, or doing both without wasting months on the wrong approach.</p>
          <ul className="check-list">
            <li><Check aria-hidden="true" size={18} /> What to focus on first based on your goal</li>
            <li><Check aria-hidden="true" size={18} /> Where your training or diet is slowing progress down</li>
            <li><Check aria-hidden="true" size={18} /> Whether Layne&apos;s coaching is the right fit for you</li>
            <li><Check aria-hidden="true" size={18} /> No payment required to schedule</li>
          </ul>
          <p><strong>Rather call now?</strong></p>
          <a className="button button-light" href={siteConfig.phoneHref}>
            <Phone aria-hidden="true" size={20} /> {siteConfig.phoneDisplay}
          </a>
          <p className="muted">
            <small>Do not submit medical histories, diagnoses, prescriptions, or other sensitive health information through Calendly.</small>
          </p>
        </div>
        <CalendlyLoader />
      </div>
    </section>
  );
}
