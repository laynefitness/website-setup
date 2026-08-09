import { Check, Phone } from "lucide-react";
import type { Metadata } from "next";
import { CalendlyLoader } from "@/components/calendly-loader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Coaching Call",
  description: "Choose a time to talk with Layne about personalized online fitness or nutrition coaching.",
  alternates: { canonical: "/book-a-call" },
  robots: { index: true, follow: true },
};

export default function BookCallPage() {
  return (
    <section className="section">
      <div className="booking-grid wrap">
        <div className="booking-copy"><span className="kicker">One conversation. Clear next step.</span><h1>Book a Call With Layne.</h1><p className="lede">Tell Layne what you are trying to change, what you have already tried, and what keeps getting in the way. He will explain whether his coaching fits and how pricing works before you commit.</p><ul className="check-list"><li><Check aria-hidden="true" size={18} /> Fitness and workout-plan questions</li><li><Check aria-hidden="true" size={18} /> Practical nutrition-coaching questions</li><li><Check aria-hidden="true" size={18} /> Phone or Zoom availability</li><li><Check aria-hidden="true" size={18} /> No payment required to schedule</li></ul><p><strong>Rather call now?</strong></p><a className="button button-light" href={siteConfig.phoneHref}><Phone aria-hidden="true" size={20} /> {siteConfig.phoneDisplay}</a><p className="muted"><small>Do not submit medical histories, diagnoses, prescriptions, or other sensitive health information through Calendly.</small></p></div>
        <CalendlyLoader />
      </div>
    </section>
  );
}
