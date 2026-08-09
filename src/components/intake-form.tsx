"use client";

import { CalendarDays, CheckCircle2, MessageSquareText } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";

const goals = [
  "I want to lose fat",
  "I want to build muscle",
  "Both",
];

export function IntakeForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    height: "",
    weight: "",
    goal: "",
  });

  const smsHref = useMemo(() => {
    const lines = [
      "Layne Fitness intake",
      form.name ? `Name: ${form.name}` : "Name:",
      form.height ? `Height: ${form.height}` : "Height:",
      form.weight ? `Weight: ${form.weight}` : "Weight:",
      form.goal ? `Goal: ${form.goal}` : "Goal:",
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
          <span>First and last name</span>
          <input name="name" autoComplete="name" placeholder="Your name" value={form.name} onChange={(event) => updateField("name", event.target.value)} required />
        </label>
        <label>
          <span>Height</span>
          <input name="height" placeholder="Example: 5'10&quot;" value={form.height} onChange={(event) => updateField("height", event.target.value)} required />
        </label>
        <label>
          <span>Weight</span>
          <input name="weight" placeholder="Example: 185 lb" value={form.weight} onChange={(event) => updateField("weight", event.target.value)} required />
        </label>
        <label>
          <span>Main goal</span>
          <select name="goal" value={form.goal} onChange={(event) => updateField("goal", event.target.value)} required>
            <option value="" disabled>Choose one</option>
            {goals.map((goal) => <option key={goal}>{goal}</option>)}
          </select>
        </label>
      </div>
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
