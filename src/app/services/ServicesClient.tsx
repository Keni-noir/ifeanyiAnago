"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  FileText, ClipboardList, Search, GraduationCap,
  Scale, BookOpen, TrendingUp, ArrowRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/siteData";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  ClipboardList,
  Search,
  GraduationCap,
  Scale,
  BookOpen,
  TrendingUp,
};

export default function ServicesClient() {
  const [activeService, setActiveService] = useState(services[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToService = (id: string) => {
    setActiveService(id);
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <PageHero
        title="Our Scope of Service"
        subtitle="Practical, end-to-end advisory from contract structuring to dispute resolution."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        height="md"
      />

      {/* Intro */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              eyebrow="What We Deliver"
              title="A One-Stop Advisory Practice for the Built Environment"
              subtitle="In concert with our sister firm Ifeanyi Anago & Partners (Quantity Surveying & Project Management), we offer comprehensive consultancy services across the full project lifecycle."
              centered
            />
          </div>
        </div>
      </section>

      {/* Mobile pill nav */}
      <div className="lg:hidden sticky top-20 z-30 bg-white border-b border-fog shadow-xs">
        <div className="overflow-x-auto flex gap-2 px-5 py-3">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToService(s.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-inter text-xs font-semibold transition-colors duration-200 ${
                activeService === s.id
                  ? "bg-iac-gold text-white"
                  : "bg-fog text-graphite hover:bg-parchment-gold"
              }`}
            >
              {s.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Services detail layout */}
      <section className="bg-linen py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex gap-10">

            {/* Sticky left nav — desktop only */}
            <div className="hidden lg:block w-60 flex-shrink-0">
              <div className="sticky top-28 bg-white border border-fog shadow-xs rounded-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-fog">
                  <p className="font-inter text-xs font-semibold uppercase tracking-[0.1em] text-iac-gold">
                    Services
                  </p>
                </div>
                <nav>
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToService(s.id)}
                      className={`w-full text-left px-5 py-3.5 font-inter text-sm border-l-[3px] transition-all duration-150 ${
                        activeService === s.id
                          ? "border-l-iac-gold bg-parchment-gold text-charcoal font-semibold"
                          : "border-l-transparent text-graphite hover:bg-parchment-gold/50 hover:text-charcoal"
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Service content blocks */}
            <div className="flex-1 divide-y divide-champagne/40">
              {services.map((service) => {
                const Icon = iconMap[service.icon] ?? FileText;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    ref={(el) => {
                      sectionRefs.current[service.id] = el;
                    }}
                    className="py-14 first:pt-0"
                  >
                    {/* Icon + heading */}
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-parchment-gold rounded-sm">
                        <Icon size={26} strokeWidth={1.5} className="text-iac-gold" />
                      </div>
                      <div>
                        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal">
                          {service.title}
                        </h2>
                        <span className="block w-8 h-[2px] bg-brass mt-3" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-inter text-base text-graphite leading-[1.75] mb-7">
                      {service.description}
                    </p>

                    {/* What this covers */}
                    <div className="bg-white border border-fog p-6 rounded-sm shadow-xs">
                      <h3 className="font-inter text-xs font-semibold uppercase tracking-[0.1em] text-charcoal mb-4">
                        What This Covers
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.covers.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="text-brass font-bold mt-0.5 flex-shrink-0">—</span>
                            <span className="font-inter text-sm text-graphite">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] hover:gap-3 transition-all duration-200"
                      >
                        Discuss This Service <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Building highlight */}
      <section className="bg-slate py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block border border-brass text-brass font-inter text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-sm mb-6">
                Signature Programme
              </span>
              <h2 className="font-playfair text-3xl font-bold text-white mb-4">
                Capacity Building &amp; Training Programmes
              </h2>
              <span className="block w-10 h-[3px] bg-brass mb-6" />
              <div className="space-y-4 font-inter text-base text-white/75 leading-[1.75]">
                <p>
                  We design and deliver capacity-building programmes that equip organisations,
                  professionals, and public institutions with the legal and practical knowledge
                  needed to navigate complex contractual, procurement, and dispute resolution
                  processes.
                </p>
                <p>
                  Through workshops, seminars, and bespoke training sessions, we help participants
                  build the competence and confidence required to manage projects effectively and
                  minimise legal and commercial risks.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 border border-white text-white font-inter text-xs font-semibold uppercase tracking-[0.08em] px-7 py-3.5 rounded-sm hover:bg-white/10 transition-colors duration-200"
              >
                Enquire About Training <ArrowRight size={14} />
              </Link>
            </div>

            {/* Quote card */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
              <p className="font-playfair italic text-lg text-champagne/90 leading-relaxed mb-6">
                &ldquo;To transfer knowledge and build capacity so that clients and institutions
                emerge stronger after every engagement.&rdquo;
              </p>
              <p className="font-inter text-xs uppercase tracking-[0.12em] text-brass mb-8">
                — IAC Core Philosophy
              </p>
              <div className="pt-6 border-t border-white/10 space-y-3">
                {[
                  "Contract Administration",
                  "Procurement Compliance",
                  "Arbitration & Claims Management",
                  "Government & Institutional Training",
                ].map((topic) => (
                  <div key={topic} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brass flex-shrink-0" />
                    <span className="font-inter text-sm text-white/70">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
