import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamCard from "@/components/ui/TeamCard";
import { teamMembers } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the multidisciplinary team of legal, technical, and advisory professionals at Ifeanyi Anago & Co.",
};

const featured = teamMembers.filter((m) => m.featured);
const rest = teamMembers.filter((m) => !m.featured);

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="A multidisciplinary team of legal, technical, and advisory professionals."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
        height="md"
      />

      {/* Intro */}
      <section className="bg-white py-14 md:py-18">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Our People"
                title="People Who Understand Both the Law and the Project"
              />
              <p className="mt-7 font-inter text-base text-graphite leading-[1.75]">
                At Ifeanyi Anago &amp; Co., our team is distinguished by its dual competence in law
                and construction practice. Our lawyers, quantity surveyors, and technical consultants
                work in an integrated fashion — enabling us to provide advice that is both legally
                precise and practically grounded.
              </p>
              <p className="mt-5 font-inter text-base text-graphite leading-[1.75]">
                This multidisciplinary approach means our clients benefit from a holistic perspective
                at every stage of a project — from contract inception through dispute resolution.
              </p>
            </div>
            <div className="bg-slate text-white p-7 rounded-sm self-start">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.1em] text-champagne mb-4">
                Team at a Glance
              </p>
              <div className="space-y-4">
                {[
                  { label: "Combined Experience", value: "70+ Years" },
                  { label: "Dual-Qualified Professionals", value: "2" },
                  { label: "Practice Areas Covered", value: "6" },
                  { label: "Languages", value: "English" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="font-inter text-sm text-stone">{label}</span>
                    <span className="font-inter text-sm font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Leadership */}
      <section className="bg-linen py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <SectionHeader eyebrow="Senior Leadership" title="The Principals" centered />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {featured.map((member) => (
              <div
                key={member.id}
                className="relative bg-white shadow-md rounded-sm pt-16 pb-8 px-8 text-center"
              >
                {/* Overlapping photo circle */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full border-4 border-brass shadow-md bg-parchment-gold flex items-center justify-center">
                    <span className="font-playfair font-bold text-2xl text-iac-gold">
                      {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                </div>

                <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.08em] text-iac-gold mb-1">
                  {member.title}
                </p>
                <p className="font-inter text-xs text-stone mb-5">{member.credentials}</p>
                <div className="w-8 h-[2px] bg-brass mx-auto mb-5" />
                <p className="font-inter text-sm text-graphite leading-relaxed">{member.bio}</p>

                {member.fullBio && (
                  <details className="mt-5 text-left">
                    <summary className="font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] cursor-pointer list-none flex items-center gap-1 justify-center hover:text-iac-gold-light transition-colors">
                      Read Full Profile ↓
                    </summary>
                    <div className="mt-4 space-y-3">
                      {member.fullBio.slice(1).map((para, i) => (
                        <p key={i} className="font-inter text-sm text-graphite leading-relaxed text-left">
                          {para}
                        </p>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team Grid */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <SectionHeader eyebrow="The Full Team" title="Every Member, Every Role" centered />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {rest.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                title={member.title}
                credentials={member.credentials}
                bio={member.bio}
                featured={false}
              />
            ))}

            {/* Join our team card */}
            <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-champagne rounded-sm bg-linen">
              <div className="w-12 h-12 rounded-full bg-champagne/50 flex items-center justify-center mb-4">
                <span className="text-iac-gold font-bold text-2xl">+</span>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2">
                Join Our Team
              </h3>
              <p className="font-inter text-xs text-stone leading-relaxed mb-4">
                We&apos;re always looking for exceptional talent in construction law and ADR.
              </p>
              <a
                href="mailto:info@ifeanyianagoandco.com"
                className="font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] hover:text-iac-gold-light transition-colors"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Work With Nigeria's Leading Construction Law Specialists" />
    </>
  );
}
