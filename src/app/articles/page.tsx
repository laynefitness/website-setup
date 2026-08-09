import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Fitness and Nutrition Articles",
  description: "Direct, source-backed answers about online fitness coaching, personalized nutrition, and peptide safety questions.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <header className="article-index-hero"><div className="wrap"><span className="kicker">Layne Fitness field notes</span><h1>Useful answers you can act on before you buy anything.</h1><p className="lede">Every published guide gives a direct answer, visible sources, honest limits, and a clear next move. No filler written to hit a word count.</p></div></header>
      <section className="section"><div className="article-list wrap">{articles.filter((article) => article.status !== "draft").map((article) => <Link className="article-card" key={article.slug} href={`/articles/${article.slug}`}><div className="article-card-media"><Image src={article.cover} alt={article.coverAlt} fill sizes="(max-width: 560px) 100vw, (max-width: 1120px) 50vw, 34vw" /></div><div className="article-card-copy"><small>{article.category} · Updated August 9, 2026</small><h2>{article.title}</h2><p>{article.description}</p><span>Read {article.readingTime} <ArrowRight aria-hidden="true" size={17} /></span></div></Link>)}</div></section>
      <section className="section section-dark"><div className="media-split wrap"><div className="media-panel contain"><Image src="/images/peptide-mark.png" alt="Illustrated yellow peptide molecule mark" fill sizes="(max-width: 820px) 100vw, 52vw" /></div><div><span className="kicker">Publishing standard</span><h2>Verified before visible.</h2><p className="lede muted">Claims are checked against primary sources. Numbers keep their year and context. Health content states what is not known. Drafts stay out of the sitemap until they pass source, tone, and final human review.</p></div></div></section>
    </>
  );
}
