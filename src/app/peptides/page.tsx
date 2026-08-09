import { ExternalLink, ShieldAlert } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { ServicePage } from "@/components/service-page";
import { PeptideVisual } from "@/components/visuals";
import { peptideService } from "@/data/services";
import { PEPTIDE_SALES_ENABLED } from "@/data/site";

export const metadata: Metadata = {
  title: "Peptide Education Consultation",
  description: peptideService.description,
  alternates: { canonical: "/peptides" },
  openGraph: { title: peptideService.title, description: peptideService.description, url: "/peptides", images: ["/images/peptide-vial.jpg"] },
};

export default function PeptidesPage() {
  return (
    <ServicePage data={peptideService} label="Education only · No products for sale">
      <section className="section section-dark">
        <div className="media-split wrap">
          <div><PeptideVisual /><div className="media-panel contain"><Image src="/images/amino-bottle.png" alt="Illustration of an amino supplement bottle next to a short molecular chain" fill sizes="(max-width: 820px) 100vw, 52vw" /></div></div>
          <div><ShieldAlert aria-hidden="true" color="var(--signal)" size={48} /><span className="kicker">Sales status: {PEPTIDE_SALES_ENABLED ? "enabled" : "disabled"}</span><h2>Coaching is not prescribing.</h2><p className="lede muted">A fitness coach can help you understand questions. A licensed medical professional must determine whether a drug is appropriate, establish a patient relationship, explain risks, and issue a valid prescription when required.</p><ul className="source-list"><li><a href="https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks" target="_blank" rel="noreferrer">FDA: compounded substances with significant safety risks <ExternalLink aria-hidden="true" size={15} /></a></li><li><a href="https://www.fda.gov/drugs/unapproved-drugs/fdas-concerns-unapproved-drugs-used-weight-loss" target="_blank" rel="noreferrer">FDA: concerns with unapproved GLP-1 drugs <ExternalLink aria-hidden="true" size={15} /></a></li><li><a href="https://www.pharmacy.texas.gov/Consumer/broch4.asp" target="_blank" rel="noreferrer">Texas State Board of Pharmacy: who may prescribe <ExternalLink aria-hidden="true" size={15} /></a></li><li><a href="https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance" target="_blank" rel="noreferrer">FTC: substantiating health-product claims <ExternalLink aria-hidden="true" size={15} /></a></li></ul></div>
        </div>
      </section>
      <section className="section">
        <div className="media-split wrap">
          <div className="media-panel"><Image src="/images/peptide-ampoules.jpg" alt="Clear laboratory ampoules and a dropper on a pale background" fill sizes="(max-width: 820px) 100vw, 52vw" /></div>
          <div><span className="kicker">Before any consultation</span><h2>Ask the questions marketing skips.</h2><div className="content-stack"><div className="content-note"><h3>Who is the licensed prescriber?</h3><p>Verify the professional and the state where they are licensed before sharing medical information.</p></div><div className="content-note"><h3>Which pharmacy dispenses it?</h3><p>Verify state licensure, the actual product, and whether it is FDA approved or compounded.</p></div><div className="content-note"><h3>What evidence supports the exact claim?</h3><p>Health claims need competent, reliable scientific evidence that matches the product and use being advertised.</p></div></div></div>
        </div>
      </section>
    </ServicePage>
  );
}
