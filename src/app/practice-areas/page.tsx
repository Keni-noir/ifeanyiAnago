import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HardHat, Scale, Zap, Flame, FileSearch, Building } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeader from "@/components/ui/SectionHeader";
import PracticeAreaCard from "@/components/ui/PracticeAreaCard";
import { practiceAreas } from "@/data/siteData";
import { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Specialist legal expertise across Construction & Engineering, Arbitration & ADR, Infrastructure, Oil & Gas, Procurement, and PPP — covering the full project lifecycle.",
};

const iconMap: Record<string, LucideIcon> = {
  "construction-engineering": HardHat,
  "arbitration-adr": Scale,
  "infrastructure-utilities": Zap,
  "oil-gas": Flame,
  "procurement-property": FileSearch,
  "pfi-ppp": Building,
};

const clientTypes = [
  "Contractors", "Developers", "Government Agencies",
  "Investors", "Consultants", "Lenders",
];

const representativeItems = [
  "Co-Counsel to a major EPC contractor in an ICC arbitration concerning N12 billion in variation claims on an airport development project in Asaba.",
  "Legal advisers to a state government on a 500-unit affordable housing PPP project in Enugu integrating energy efficient building systems.",
  "Advising an EPC contractor on claims arising from delay, variation, and performance issues under a FIDIC Red Book contract for a multi-billion-naira road project.",
  "Advised on concession agreements for a state-owned water supply modernisation project in Anambra State, Nigeria.",
  "Served as lead counsel in a London-seated arbitration involving an office construction dispute under Nigerian law.",
];

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        title="Our Practice Areas"
        subtitle="Specialist legal expertise from procurement to dispute resolution — across the full project lifecycle."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Practice Areas" }]}
        height="md"
      />

      {/* Intro */}
      <section className="bg-white py-14 md:py-18">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              eyebrow="End-to-End Coverage"
              title="Specialist Legal Expertise Across Nigeria's Construction and Infrastructure Sectors"
              subtitle="Our firm is a specialist construction and infrastructure law practice providing end-to-end legal services across the project lifecycle — from conception and procurement to contract administration and dispute resolution."
              centered
            />
          </div>
        </div>
      </section>

      {/* Practice Area Cards */}
      <section className="bg-linen py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <PracticeAreaCard
                key={area.id}
                icon={iconMap[area.id] ?? Scale}
                title={area.title}
                description={area.description}
                href={`/practice-areas/${area.slug}`}
                keyServices={area.keyServices.slice(0, 4)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Advise */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <SectionHeader eyebrow="Who We Advise" title="Our Clients" centered />
          <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-6 max-w-3xl mx-auto">
            {clientTypes.map((type) => (
              <div key={type} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-parchment-gold flex items-center justify-center">
                  <span className="font-playfair font-bold text-iac-gold text-sm">{type[0]}</span>
                </div>
                <span className="font-inter text-xs font-semibold text-charcoal">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representative Experience */}
      <section className="bg-slate py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Track Record"
                title="Selected Representative Engagements"
                subtitle="A selection of engagements across our practice areas. This is not an exhaustive record of our work."
                light
              />
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-0 divide-y divide-champagne/20">
                {representativeItems.map((item, i) => (
                  <li key={i} className="flex gap-4 py-5">
                    <span className="w-2 h-2 rounded-full bg-brass flex-shrink-0 mt-2" />
                    <p className="font-inter text-sm text-white/80 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
