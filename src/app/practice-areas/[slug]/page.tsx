import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  HardHat, Scale, Zap, Flame, FileSearch, Building, ArrowRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { practiceAreas } from "@/data/siteData";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "construction-engineering": HardHat,
  "arbitration-adr": Scale,
  "infrastructure-utilities": Zap,
  "oil-gas": Flame,
  "procurement-property": FileSearch,
  "pfi-ppp": Building,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return { title: "Not Found" };
  return {
    title: area.title,
    description: area.description,
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const Icon = iconMap[area.id] ?? Scale;
  const related = practiceAreas.filter((a) => a.id !== area.id).slice(0, 3);

  return (
    <>
      <PageHero
        title={area.title}
        subtitle={area.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: area.shortTitle },
        ]}
        height="lg"
      />

      {/* Overview */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 flex items-center justify-center bg-parchment-gold rounded-sm">
                  <Icon size={32} strokeWidth={1.5} className="text-iac-gold" />
                </div>
                <SectionHeader eyebrow="Practice Area" title={`What We Do in ${area.shortTitle}`} />
              </div>

              <div className="space-y-5 font-inter text-base text-graphite leading-[1.75]">
                {area.fullDescription.map((para, i) => <p key={i}>{para}</p>)}
              </div>

              <div className="mt-10">
                <h3 className="font-inter text-sm font-semibold text-charcoal mb-5 uppercase tracking-[0.08em]">
                  What We Advise On
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {area.keyServices.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <span className="text-brass font-bold mt-0.5 flex-shrink-0">—</span>
                      <span className="font-inter text-sm text-graphite">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* CTA card */}
              <div className="bg-parchment-gold border border-champagne border-l-[3px] border-l-iac-gold p-7 rounded-sm">
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                  Speak to a Specialist
                </h3>
                <p className="font-inter text-sm text-graphite leading-relaxed mb-6">
                  Contact us to discuss your specific matter. Our team responds within one business day.
                </p>
                <Button href="/contact" variant="primary" fullWidth arrow>
                  Book a Consultation
                </Button>
                <div className="mt-4 pt-4 border-t border-champagne">
                  <Link
                    href="/practice-areas"
                    className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] hover:gap-3 transition-all duration-200"
                  >
                    All Practice Areas <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Related services */}
              <div className="bg-white border border-fog p-7 rounded-sm shadow-xs">
                <h3 className="font-inter text-xs font-semibold uppercase tracking-[0.1em] text-iac-gold mb-4">
                  Related Services
                </h3>
                <ul className="space-y-3">
                  {["Contract Management", "Procurement Advisory", "Arbitration Representation"].map((s) => (
                    <li key={s}>
                      <Link
                        href="/services"
                        className="font-inter text-sm text-graphite hover:text-iac-gold transition-colors flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-brass flex-shrink-0" />
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Experience */}
      <section className="bg-linen py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <SectionHeader
            eyebrow="Our Track Record"
            title={`Representative Experience in ${area.shortTitle}`}
          />
          <div className="mt-12 space-y-4">
            {area.representativeExperience.map((exp, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white p-6 shadow-xs border-l-[3px] border-brass rounded-sm"
              >
                <div className="flex-shrink-0">
                  <span className="inline-block font-inter text-xs font-semibold text-brass uppercase tracking-wider">
                    {area.shortTitle}
                  </span>
                </div>
                <p className="font-inter text-sm text-graphite leading-relaxed">{exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="bg-white py-14">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <SectionHeader eyebrow="Also Explore" title="Related Practice Areas" centered />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((rel) => {
              const RelIcon = iconMap[rel.id] ?? Scale;
              return (
                <Link
                  key={rel.id}
                  href={`/practice-areas/${rel.slug}`}
                  className="group flex flex-col p-6 bg-linen border border-fog hover:border-brass hover:bg-parchment-gold rounded-sm transition-all duration-200"
                >
                  <RelIcon size={24} strokeWidth={1.5} className="text-iac-gold mb-3" />
                  <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2">{rel.shortTitle}</h3>
                  <p className="font-inter text-xs text-graphite line-clamp-2 mb-4">{rel.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-xs font-semibold text-iac-gold group-hover:gap-2 transition-all duration-200">
                    Explore <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
