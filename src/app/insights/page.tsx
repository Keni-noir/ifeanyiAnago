import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { insights } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Legal updates, arbitration commentary, and procurement intelligence from the team at Ifeanyi Anago & Co.",
};

const categories = ["All", "Construction Law", "Arbitration & ADR", "Infrastructure", "Procurement", "Oil & Gas"];
const featured = insights.find((i) => i.featured);
const rest = insights.filter((i) => !i.featured);

export default function InsightsPage() {
  return (
    <>
      {/* Typographic Hero */}
      <section className="relative bg-slate pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        {/* Decorative large text background */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-playfair italic text-[12rem] md:text-[16rem] text-white/[0.03] whitespace-nowrap">
            Insights
          </span>
        </div>

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
          <nav className="flex items-center gap-2 mb-6">
            <Link href="/" className="font-inter text-xs text-champagne/60 hover:text-champagne transition-colors">Home</Link>
            <span className="text-champagne/30 text-xs">/</span>
            <span className="font-inter text-xs text-champagne">Insights</span>
          </nav>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-brass mb-4">
            Knowledge & Thought Leadership
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">Insights</h1>
          <span className="block w-10 h-[3px] bg-brass mb-6" />
          <p className="font-inter text-base md:text-lg text-white/65 max-w-xl leading-relaxed">
            Legal updates, arbitration commentary, and procurement intelligence from our team.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="bg-white py-14 md:py-18">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 shadow-md rounded-sm overflow-hidden">
              {/* Thumbnail */}
              <div
                className="h-60 lg:h-auto bg-slate flex items-center justify-center min-h-[240px]"
                style={{ background: "linear-gradient(135deg, #2C2C3A, #1A1A1A)" }}
              >
                <div className="text-center px-8">
                  <div className="w-16 h-16 rounded-full border-2 border-brass/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-playfair italic text-2xl text-brass/60">F</span>
                  </div>
                  <p className="font-inter text-xs text-champagne/30 uppercase tracking-wider">Featured Article</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-inter text-[10px] font-semibold uppercase tracking-wider text-brass border border-brass px-2.5 py-1 rounded-sm">
                    {featured.category}
                  </span>
                  <span className="font-inter text-xs text-stone">{featured.date}</span>
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="font-inter text-sm text-graphite leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-stone" />
                    <span className="font-inter text-xs text-stone">By {featured.author}</span>
                    <span className="text-stone/40">·</span>
                    <Clock size={12} className="text-stone" />
                    <span className="font-inter text-xs text-stone">{featured.readTime}</span>
                  </div>
                  <Link
                    href={`/insights/${featured.id}`}
                    className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] hover:gap-3 transition-all duration-200"
                  >
                    Read Article <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="bg-linen py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          {/* Filter bar */}
          <div className="flex items-center gap-2 flex-wrap mb-10">
            <span className="font-inter text-xs text-stone mr-2">Filter:</span>
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full font-inter text-xs font-semibold transition-colors duration-200 ${
                  i === 0
                    ? "bg-iac-gold text-white"
                    : "bg-white border border-fog text-graphite hover:bg-parchment-gold hover:border-champagne"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <article
                key={article.id}
                className="group bg-white shadow-xs hover:shadow-md rounded-sm overflow-hidden transition-shadow duration-200"
              >
                {/* Thumbnail */}
                <div
                  className="h-44 flex items-center justify-center relative"
                  style={{ background: "linear-gradient(135deg, #2C2C3A, #3D3D3D)" }}
                >
                  <p className="font-playfair italic text-white/20 text-4xl">&ldquo;</p>
                  {/* Category badge */}
                  <span className="absolute bottom-3 left-4 font-inter text-[10px] font-semibold uppercase tracking-wider text-brass border border-brass/60 px-2 py-1 rounded-sm bg-charcoal/60">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-inter text-xs text-stone">{article.date}</span>
                    <span className="text-stone/30">·</span>
                    <Clock size={11} className="text-stone" />
                    <span className="font-inter text-xs text-stone">{article.readTime}</span>
                  </div>

                  <h3 className="font-playfair text-lg font-semibold text-charcoal leading-snug mb-3 group-hover:text-iac-gold transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="font-inter text-sm text-graphite leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-fog">
                    <div className="flex items-center gap-1.5">
                      <User size={12} className="text-stone" />
                      <span className="font-inter text-xs text-stone">{article.author}</span>
                    </div>
                    <Link
                      href={`/insights/${article.id}`}
                      className="font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] hover:text-iac-gold-light transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-slate py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 rounded-full border border-brass/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-brass text-xl">✉</span>
            </div>
            <h2 className="font-playfair text-3xl font-bold text-white mb-3">
              Stay Informed on Construction Law in Nigeria
            </h2>
            <p className="font-inter text-base text-stone mb-8">
              Receive our latest legal updates and insights directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 bg-white border-0 rounded-sm font-inter text-sm text-charcoal placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-brass"
              />
              <button className="flex-shrink-0 px-7 py-3.5 bg-brass text-white font-inter text-xs font-semibold uppercase tracking-[0.08em] rounded-sm hover:bg-burnished-gold transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="mt-4 font-inter text-xs text-stone/60">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
