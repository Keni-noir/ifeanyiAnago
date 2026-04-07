import {
  HardHat,
  Scale,
  Zap,
  Flame,
  FileSearch,
  Building,
} from "lucide-react";
import PracticeAreaCard from "@/components/ui/PracticeAreaCard";
import SectionHeader from "@/components/ui/SectionHeader";
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

export default function PracticeAreasSection() {
  return (
    <section className="bg-linen py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Practice Areas"
          subtitle="Specialist legal expertise across the full construction and infrastructure lifecycle — from procurement to dispute resolution."
          centered
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <PracticeAreaCard
              key={area.id}
              icon={iconMap[area.id] ?? Scale}
              title={area.title}
              description={area.description}
              href={`/practice-areas/${area.slug}`}
              keyServices={area.keyServices.slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
