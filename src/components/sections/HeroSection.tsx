"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/hero/slide-1.jpg",
    alt: "An In-Depth Analysis of Public Procurement — Rockview Hotels, Abuja",
    headline: "Trusted Legal Counsel for Nigeria's Built Environment.",
    sub: "We merge legal expertise with technical precision to help contractors, developers, and government agencies navigate complex construction, procurement, and infrastructure matters.",
    tag: "Capacity Building · Public Procurement · Abuja 2025",
  },
  {
    src: "/images/hero/slide-2.jpg",
    alt: "Presenter at IAC training session",
    headline: "Empowering Professionals Through Knowledge.",
    sub: "Our capacity-building programmes equip organisations and institutions with the legal and practical tools to manage complex contracts and procurement processes with confidence.",
    tag: "Training & Capacity Building · IAC",
  },
  {
    src: "/images/hero/slide-3.jpg",
    alt: "IAC group photo — Kigali, Rwanda, December 2023",
    headline: "Building Legal Solutions Across Africa.",
    sub: "From Abuja to Kigali, the Ifeanyi Anago Group delivers internationally recognised training, advisory, and dispute resolution services across the built environment.",
    tag: "Overview of Public Procurement · Kigali, Rwanda 2023",
  },
  {
    src: "/images/hero/slide-4.jpg",
    alt: "IAC training participants — Abuja",
    headline: "Equipping Nigeria's Construction Professionals.",
    sub: "Through workshops, seminars, and bespoke training sessions, we help participants build the competence required to manage projects effectively and minimise legal and commercial risks.",
    tag: "In-Depth Analysis of Public Procurement · Abuja",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent((index + slides.length) % slides.length);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background image */}
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay — stronger at left for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/40" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal/60 to-transparent" />
        </div>
      ))}

      {/* Content — sits above slides */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 w-full pt-28 pb-24">
          <div className="max-w-2xl">

            {/* Tag / eyebrow — slides per image */}
            <div
              key={`tag-${current}`}
              className="inline-flex items-center gap-2 mb-5 animate-fade-in"
            >
              <span className="w-8 h-[2px] bg-brass" />
              <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">
                {slides[current].tag}
              </p>
            </div>

            {/* Headline */}
            <h1
              key={`h-${current}`}
              className="font-playfair text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6 animate-fade-in"
            >
              {slides[current].headline}
            </h1>

            {/* Gold rule */}
            <span className="block w-10 h-[3px] bg-brass mb-7" />

            {/* Sub-headline */}
            <p
              key={`p-${current}`}
              className="font-inter text-base md:text-lg text-white/80 leading-[1.75] mb-10 max-w-xl animate-fade-in"
            >
              {slides[current].sub}
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
      </div>

      {/* Slide counter + dot indicators */}
      <div className="relative z-20 pb-10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 flex items-center justify-between">

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-brass"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/60 transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="font-inter text-xs text-white/40 tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/60 transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar — resets on slide change */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 z-30 h-[2px] bg-white/10">
          <div
            key={`progress-${current}`}
            className="h-full bg-brass origin-left"
            style={{
              animation: `progressBar ${AUTOPLAY_INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="font-inter text-[10px] uppercase tracking-[0.12em] text-white/30">
          Scroll
        </span>
        <ChevronDown size={16} className="text-champagne/50" />
      </div>

      {/* Progress bar keyframe injected inline */}
      <style>{`
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
