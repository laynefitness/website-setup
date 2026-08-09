import { CalendarDays, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function MobileDock() {
  return (
    <div className="mobile-dock" aria-label="Contact actions">
      <a href={siteConfig.phoneHref}><Phone aria-hidden="true" size={19} /> Call Layne</a>
      <Link href="/book-a-call"><CalendarDays aria-hidden="true" size={19} /> Book a Call</Link>
    </div>
  );
}
