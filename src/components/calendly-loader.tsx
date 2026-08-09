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
        <iframe title="Schedule a call with Layne Fitness" src={embedUrl} loading="lazy" />
        <a href={siteConfig.calendly} target="_blank" rel="noreferrer">
          Open scheduler in a new tab <ExternalLink aria-hidden="true" size={16} />
        </a>
      </div>
    );
  }

  return (
    <div className="calendar-consent">
      <ShieldCheck aria-hidden="true" size={42} />
      <h2>Ready to choose a time?</h2>
      <p>Calendly is a third-party scheduling service. Load it when you are ready to view available times.</p>
      <button className="button button-primary" onClick={() => setLoaded(true)}>
        <CalendarDays aria-hidden="true" size={20} /> Load Available Times
      </button>
      <a href={siteConfig.calendly} target="_blank" rel="noreferrer">
        Or open Calendly directly <ExternalLink aria-hidden="true" size={16} />
      </a>
    </div>
  );
}
