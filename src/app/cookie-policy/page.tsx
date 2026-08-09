import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Cookie Policy", description: "Cookie and third-party scheduling information for Layne Fitness.", alternates: { canonical: "/cookie-policy" } };

export default function CookiePolicyPage() {
  return <LegalPage title="Cookie Policy" intro="Layne Fitness keeps tracking minimal and does not load the third-party scheduler until you request it."><h2>Essential technology</h2><p>The website and hosting platform may use essential storage or security technology needed to deliver pages, balance traffic, prevent abuse, and remember technical preferences.</p><h2>Calendly</h2><p>Calendly may set cookies or use similar technology when you load its scheduler or visit Calendly directly. The Layne Fitness booking page displays a clear load button before the embedded scheduler is requested.</p><h2>Analytics and advertising</h2><p>No advertising pixels or behavioral advertising cookies are intentionally enabled at launch. If analytics or advertising tools are added later, this policy and the consent experience must be updated before they load.</p><h2>Your controls</h2><p>You can avoid the embedded scheduler, clear cookies in your browser, or block nonessential cookies through browser settings. Blocking essential storage may affect site or scheduling functionality.</p></LegalPage>;
}
