import type { ReactNode } from "react";
import { Breadcrumbs } from "./breadcrumbs";

export function LegalPage({ title, intro, updated = "August 9, 2026", children }: { title: string; intro: string; updated?: string; children: ReactNode }) {
  return <section className="legal-page wrap"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} /><header><span className="kicker">Plain-language policy</span><h1>{title}</h1><p className="lede">{intro}</p><p className="muted">Last updated: {updated}</p></header><article>{children}</article></section>;
}
