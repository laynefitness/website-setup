import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Accessibility", description: "Layne Fitness accessibility commitments and contact options.", alternates: { canonical: "/accessibility" } };

export default function AccessibilityPage() {
  return <LegalPage title="Accessibility" intro="Layne Fitness aims to make this site usable with keyboards, screen readers, zoom, reduced motion, and a wide range of devices."><h2>What the site supports</h2><ul><li>Semantic headings and page landmarks</li><li>Keyboard access to navigation, accordions, links, and booking controls</li><li>Visible focus indicators</li><li>Text and interface contrast designed for WCAG 2.1 AA</li><li>Alternative text for meaningful images</li><li>Reduced-motion behavior for animated visuals</li><li>Reflow at 200% zoom and narrow mobile widths</li></ul><h2>Known third-party content</h2><p>The Calendly scheduler is operated by a third party and may have accessibility behavior outside Layne Fitness&apos;s direct control. A direct Calendly link and phone option are available as alternatives.</p><h2>Need another format?</h2><p>If a page or scheduling method is difficult to use, call 281-659-7800 and explain the barrier. Layne Fitness will make a reasonable effort to provide the information or booking path another way.</p></LegalPage>;
}
