import type { Metadata, Viewport } from "next";
import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/700.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { MobileDock } from "@/components/mobile-dock";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { layneSchema, organizationSchema, websiteSchema } from "@/data/schema";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: "Online Fitness Coach | Layne Fitness", template: "%s | Layne Fitness" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Layne", url: `${siteConfig.domain}/about` }],
  creator: "Layne Fitness",
  publisher: "Layne Fitness",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Online Fitness Coaching Built for Your Body",
    description: siteConfig.description,
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Layne Fitness online coaching" }],
  },
  twitter: { card: "summary_large_image", title: "Layne Fitness", description: siteConfig.description, images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#163f43", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <JsonLd data={[organizationSchema, layneSchema, websiteSchema()]} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <MobileDock />
      </body>
    </html>
  );
}
