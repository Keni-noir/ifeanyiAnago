import Link from "next/link";
import {
  FileText,
  ClipboardList,
  Search,
  GraduationCap,
  Scale,
  BookOpen,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
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

export default function ServicesSnapshot() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="How We Help"
            title="Our Scope of Service"
            subtitle="End-to-end legal and technical advisory across the project lifecycle."
          />
          <Button href="/services" variant="secondary" className="flex-shrink-0 self-start md:self-auto">
            View All Services
          </Button>
        </div>

        {/* Service tiles grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? FileText;
            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group flex flex-col items-center text-center p-5 md:p-7 bg-linen border border-fog hover:bg-parchment-gold hover:border-champagne rounded-sm transition-all duration-200"
              >
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-iac-gold mb-4 group-hover:scale-110 transition-transform duration-200"
                />
                <p className="font-inter text-xs md:text-sm font-semibold text-charcoal leading-tight group-hover:text-iac-gold transition-colors duration-200">
                  {service.title}
                </p>
              </Link>
            );
          })}

          {/* View all tile */}
          <Link
            href="/services"
            className="group flex flex-col items-center justify-center text-center p-5 md:p-7 bg-charcoal border border-charcoal hover:bg-slate rounded-sm transition-all duration-200"
          >
            <ArrowRight
              size={28}
              strokeWidth={1.5}
              className="text-brass mb-3 group-hover:translate-x-1 transition-transform duration-200"
            />
            <p className="font-inter text-xs font-semibold text-white">View All</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
