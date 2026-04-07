import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamCard from "@/components/ui/TeamCard";
import { teamMembers } from "@/data/siteData";

export default function TeamSnapshot() {
  const featured = teamMembers.slice(0, 3);

  return (
    <section className="bg-linen py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Our People"
            title="Led by Experience. Driven by Expertise."
          />
          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] hover:gap-3 transition-all duration-200 flex-shrink-0"
          >
            Meet the Full Team <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {featured.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              title={member.title}
              credentials={member.credentials}
              bio={member.bio}
              featured={false}
            />
          ))}
        </div>

        <div className="mt-10 text-center lg:hidden">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 justify-center w-full max-w-sm py-4 border border-charcoal text-charcoal font-inter text-xs font-semibold uppercase tracking-[0.08em] rounded-sm hover:bg-charcoal hover:text-white transition-colors duration-200"
          >
            Meet the Full Team <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
