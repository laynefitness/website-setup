"use client";

import { CalendarDays, CheckCircle2, MessageSquareText } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";

const goals = [
  "Lose weight / burn fat",
  "Build muscle",
  "Get stronger",
  "Improve diet",
  "Peptide safety questions",
];

export function IntakeForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    goal: "",
    location: "",
    message: "",
  });

  const smsHref = useMemo(() => {
    const lines = [
      "Layne Fitness intake",
      form.name ? `Name: ${form.name}` : "Name:",
      form.phone ? `Phone: ${form.phone}` : "Phone:",
      form.goal ? `Goal: ${form.goal}` : "Goal:",
      form.location ? `Location: ${form.location}` : "Location:",
      form.message ? `Help needed: ${form.message}` : "Help needed:",
    ];

    return `sms:2816597800?&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [form]);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className={compact ? "intake-form intake-form-compact" : "intake-form"} onSubmit={(event) => event.preventDefault()}>
      <div className="intake-grid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" placeholder="Your name" value={form.name} onChange={(event) => updateField("name", event.target.value)} required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Best number" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} required />
        </label>
        <label>
          <span>Main goal</span>
          <select name="goal" value={form.goal} onChange={(event) => updateField("goal", event.target.value)} required>
            <option value="" disabled>Choose one</option>
            {goals.map((goal) => <option key={goal}>{goal}</option>)}
          </select>
        </label>
        <label>
          <span>Where are you?</span>
          <input name="location" autoComplete="address-level2" placeholder="Cleveland, TX or nearby" value={form.location} onChange={(event) => updateField("location", event.target.value)} />
        </label>
      </div>
      <label>
        <span>What do you want help with first?</span>
        <textarea name="message" rows={compact ? 3 : 4} placeholder="Example: I want to lose fat, keep muscle, and need a workout plan I can follow 4 days a week." value={form.message} onChange={(event) => updateField("message", event.target.value)} />
      </label>
      <div className="intake-actions">
        <a className="button button-primary" href={smsHref}>
          <MessageSquareText aria-hidden="true" size={19} />
          Text Layne My Intake
        </a>
        <Link className="button button-light" href="/book-a-call">
          <CalendarDays aria-hidden="true" size={19} />
          Book Calendly Call
        </Link>
      </div>
      <p className="intake-note"><CheckCircle2 aria-hidden="true" size={16} /> This opens your texting app. Nothing is saved on the website.</p>
    </form>
  );
}
