import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(105deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.80) 55%, rgba(44,44,58,0.65) 100%), url('/images/hero-bg.jpg') center/cover no-repeat",
      }}
    >
      {/* Decorative gold vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brass to-transparent opacity-60 hidden lg:block" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 w-full pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-champagne mb-5">
            Construction Lawyers · ADR Specialists · Nigeria
          </p>

          {/* Headline */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.15] mb-6">
            Trusted Legal Counsel for{" "}
            <span className="text-champagne italic">Nigeria&apos;s Built Environment.</span>
          </h1>

          {/* Gold rule */}
          <span className="block w-10 h-[3px] bg-brass mb-7" />

          {/* Sub-headline */}
          <p className="font-inter text-base md:text-lg text-white/80 leading-[1.75] mb-10 max-w-xl">
            We merge legal expertise with technical precision to help contractors, developers, and
            government agencies navigate complex construction, procurement, and infrastructure matters — with over 35 years of proven experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brass text-white font-inter text-xs font-semibold uppercase tracking-[0.08em] px-8 py-4 rounded-sm hover:bg-burnished-gold transition-colors duration-200 min-h-[52px]"
            >
              Book a Consultation
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white font-inter text-xs font-semibold uppercase tracking-[0.08em] px-8 py-4 rounded-sm hover:bg-white/10 transition-colors duration-200 min-h-[52px]"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-inter text-[10px] uppercase tracking-[0.12em] text-white/40">Scroll</span>
        <ChevronDown size={18} className="text-champagne/60" />
      </div>
    </section>
  );
}
