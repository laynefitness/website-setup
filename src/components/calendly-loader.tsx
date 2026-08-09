"use client";

import { CalendarDays, ExternalLink, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function CalendlyLoader() {
  const [loaded, setLoaded] = useState(false);
  const embedUrl = `${siteConfig.calendly}?hide_event_type_details=1&hide_gdpr_banner=1&embed_domain=laynefitness.com&embed_type=Inline`;

  if (loaded) {
    return (
      <div className="calendar-frame">
        <iframe title="Fitness Coaching & Nutrition Call With Layne" src={embedUrl} loading="lazy" />
        <a href={siteConfig.calendly} target="_blank" rel="noreferrer">
          Open scheduler in a new tab <ExternalLink aria-hidden="true" size={16} />
        </a>
      </div>
    );
  }

  return (
    <div className="calendar-consent">
      <ShieldCheck aria-hidden="true" size={42} />
      <h2>Fitness Coaching &amp; Nutrition Call With Layne</h2>
      <p>Choose a time if you want direct help figuring out what to fix next. This call is built to uncover what is holding progress back, what your plan should prioritize first, and whether Layne is the right coach to help you get there.</p>
      <button className="button button-primary" onClick={() => setLoaded(true)}>
        <CalendarDays aria-hidden="true" size={20} /> Load Available Times
      </button>
      <a href={siteConfig.calendly} target="_blank" rel="noreferrer">
        Or open Calendly directly <ExternalLink aria-hidden="true" size={16} />
      </a>
    </div>
  );
}
