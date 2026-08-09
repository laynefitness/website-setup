import { CalendarDays, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead wrap">
        <p>STOP GUESSING.</p>
        <h2>Build a plan with someone who has your back.</h2>
        <Link className="button button-primary" href="/book-a-call">
          <CalendarDays aria-hidden="true" size={20} /> Book My Coaching Call
        </Link>
      </div>
      <div className="footer-grid wrap">
        <div className="footer-brand">
          <Brand />
          <p>Human coaching. Clear plans. Honest boundaries.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={siteConfig.phoneHref}><Phone aria-hidden="true" size={18} /> {siteConfig.phoneDisplay}</a>
          <Link href="/book-a-call"><CalendarDays aria-hidden="true" size={18} /> Book a Call</Link>
          <p><MapPin aria-hidden="true" size={18} /> Cleveland, Texas + online nationwide</p>
        </div>
        <div>
          <h3>Policies</h3>
          <nav aria-label="Policies">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/cookie-policy">Cookies</Link>
            <Link href="/health-disclaimer">Health Disclaimer</Link>
            <Link href="/accessibility">Accessibility</Link>
          </nav>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <p>© {new Date().getFullYear()} Layne Fitness. All rights reserved.</p>
        <p>Fitness and nutrition education, not medical care.</p>
      </div>
    </footer>
  );
}
