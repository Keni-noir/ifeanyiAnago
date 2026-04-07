import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-charcoal flex items-center justify-center px-5">
      <div className="max-w-lg text-center">
        <div className="w-20 h-20 rounded-full border-2 border-brass/30 flex items-center justify-center mx-auto mb-8">
          <Scale size={36} strokeWidth={1.5} className="text-brass/60" />
        </div>

        <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-brass mb-4">
          404 — Page Not Found
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          This Page Doesn&apos;t Exist
        </h1>
        <span className="block w-10 h-[3px] bg-brass mx-auto mb-6" />
        <p className="font-inter text-base text-white/60 leading-relaxed mb-10">
          The page you&apos;re looking for may have been moved or removed. Return to the homepage or
          navigate to one of our main sections.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brass text-white font-inter text-xs font-semibold uppercase tracking-[0.08em] px-8 py-4 rounded-sm hover:bg-burnished-gold transition-colors duration-200"
          >
            Return Home <ArrowRight size={14} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-inter text-xs font-semibold uppercase tracking-[0.08em] px-8 py-4 rounded-sm hover:border-white/60 hover:bg-white/5 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-3 gap-4">
          {[
            { label: "Practice Areas", href: "/practice-areas" },
            { label: "Services", href: "/services" },
            { label: "Our Team", href: "/team" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-inter text-xs text-white/40 hover:text-champagne transition-colors text-center"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
