import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Shield, Star, Lightbulb, Users, Heart,
  Calendar, MapPin, Scale, Award
} from "lucide-react";
import { coreValues } from "@/data/siteData";
import { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ifeanyi Anago & Co. — Nigeria's specialist construction and ADR law firm with over 35 years of integrated legal and technical experience.",
};

const iconMap: Record<string, LucideIcon> = {
  Shield, Star, Lightbulb, Users, Heart,
};

const atAGlance = [
  { icon: Calendar, label: "Founded", value: "1991" },
  { icon: MapPin, label: "Location", value: "FCT Abuja, Nigeria" },
  { icon: Scale, label: "Core Expertise", value: "Construction Law & ADR" },
  { icon: Award, label: "Key Innovation", value: "Anago Mediative-Conciliation" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Ifeanyi Anago & Co."
        subtitle="Building Legal Solutions for the Built Environment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        height="md"
      />

      {/* Firm Overview */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <SectionHeader eyebrow="Who We Are" title="An Integrated Legal and Technical Practice" />

              <div className="mt-8 space-y-5 font-inter text-base text-graphite leading-[1.75]">
                <p>
                  Ifeanyi Anago &amp; Co. is an integrated consultancy and professional services firm
                  with core expertise in Construction and Engineering Law, Quantity Surveying, Project
                  Management, and Alternative Dispute Resolution (ADR) — particularly within the built
                  environment and infrastructure sectors.
                </p>
                <p>
                  As a multi-disciplinary firm, we work collaboratively with a network of corporate
                  and litigation expert teams, enabling us to deliver comprehensive solutions across
                  the project lifecycle — from inception and design through project finance and
                  procurement, contract administration, dispute management and resolution.
                </p>
                <p>
                  Over the past three decades, Ifeanyi Anago &amp; Co. has participated in numerous
                  public and private sector projects, either as lead consultants or as part of
                  integrated consortia — spanning healthcare facilities, housing estates, water
                  supply, aviation, and energy infrastructure across Nigeria.
                </p>
              </div>

              <blockquote className="mt-8 border-l-[3px] border-iac-gold bg-parchment-gold px-6 py-5">
                <p className="font-playfair italic text-base text-charcoal leading-relaxed">
                  &ldquo;Established in 1991, the firm began as a Quantity Surveying and Project
                  Management practice. Over time, recognising the recurring challenges and disputes
                  that often derail project delivery, our practice evolved to integrate engineering
                  and construction law advisory and dispute resolution services.&rdquo;
                </p>
              </blockquote>

              <div className="mt-8 space-y-5 font-inter text-base text-graphite leading-[1.75]">
                <p>
                  Our firm&apos;s principal internationally pioneered the concept of{" "}
                  <strong className="font-semibold text-charcoal">Mediative Conciliation</strong> — a
                  proactive model of dispute management in construction projects — which has since
                  gained international recognition and adoption, including by the{" "}
                  <strong className="font-semibold text-charcoal">U.S. Department of Justice</strong>.
                </p>
                <p>
                  Our approach integrates technical precision, legal insight, and dispute avoidance
                  strategies, ensuring that community relations, project timelines, and contract
                  performance are maintained seamlessly.
                </p>
              </div>
            </div>

            {/* Sidebar — At a Glance */}
            <div className="lg:col-span-1">
              <div className="bg-slate text-white p-8 rounded-sm sticky top-28">
                <h3 className="font-inter text-xs font-semibold uppercase tracking-[0.12em] text-champagne mb-1">
                  At a Glance
                </h3>
                <div className="w-8 h-[2px] bg-brass mb-6" />
                <ul className="space-y-5">
                  {atAGlance.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex gap-4">
                      <Icon size={18} className="text-brass flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-inter text-[10px] uppercase tracking-[0.1em] text-stone">{label}</p>
                        <p className="font-inter text-sm font-semibold text-white mt-0.5">{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-inter text-xs text-stone leading-relaxed">
                    Part of the <strong className="text-champagne">Ifeanyi Anago Group</strong>,
                    comprising Ifeanyi Anago &amp; Co. (Construction Law/ADR) and Ifeanyi Anago &amp;
                    Partners (QS/Project Management).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-linen py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-champagne">
            <div className="pb-10 md:pb-0 md:pr-16">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.12em] text-iac-gold mb-4">Our Mission</p>
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4">Mission</h2>
              <span className="block w-10 h-[3px] bg-brass mb-6" />
              <p className="font-playfair italic text-lg text-graphite leading-[1.75]">
                To provide practical legal and technical solutions that ensure compliance, prevent
                disputes, and drive sustainable project success — empowering clients to execute
                complex projects with confidence and clarity.
              </p>
            </div>
            <div className="pt-10 md:pt-0 md:pl-16">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.12em] text-iac-gold mb-4">Our Vision</p>
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4">Vision</h2>
              <span className="block w-10 h-[3px] bg-brass mb-6" />
              <p className="font-playfair italic text-lg text-graphite leading-[1.75]">
                To be Nigeria&apos;s leading construction and ADR law firm, recognised for excellence,
                innovation, and integrity in the built environment — contributing to the sustainable
                growth of Nigeria&apos;s infrastructure and broader economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <SectionHeader
            eyebrow="What Guides Us"
            title="Our Core Values"
            centered
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {coreValues.map((value) => {
              const Icon = iconMap[value.icon] ?? Shield;
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center text-center p-6 bg-white border border-fog shadow-xs hover:shadow-sm rounded-sm transition-shadow duration-200"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <Icon size={32} strokeWidth={1.5} className="text-iac-gold" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2">{value.title}</h3>
                  <div className="w-6 h-[2px] bg-brass mx-auto mb-4" />
                  <p className="font-inter text-xs text-graphite leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Anago Mediative-Conciliation */}
      <section className="bg-slate py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block border border-brass text-brass font-inter text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-sm mb-6">
                A World First
              </span>
              <SectionHeader
                eyebrow=""
                title="The Anago Mediative-Conciliation Model"
                light
              />
              <div className="mt-7 space-y-4 font-inter text-base text-white/75 leading-[1.75]">
                <p>
                  The firm&apos;s principal, Barr. Ifeanyi Tim Anago, is the originator and patent
                  holder of the internationally recognised ADR model &ldquo;Anago
                  Mediative-Conciliation&rdquo; — a proactive model of dispute management specifically
                  designed for construction projects.
                </p>
                <p>
                  This innovative model has gained international recognition and adoption, including
                  acknowledgement by the <strong className="text-champagne">U.S. Department of
                  Justice&apos;s Community Relations Service</strong> as an effective model for
                  conflict resolution.
                </p>
                <p>
                  Unlike traditional reactive dispute resolution, Mediative Conciliation anticipates
                  and prevents disputes before they escalate — protecting project timelines,
                  community relations, and contractual performance throughout the lifecycle.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-72 h-72 flex items-center justify-center">
                {/* Decorative circles */}
                <div className="absolute inset-0 rounded-full border-2 border-brass/30" />
                <div className="absolute inset-6 rounded-full border border-champagne/20" />
                <div className="absolute inset-12 rounded-full border border-champagne/10" />
                <div className="relative z-10 text-center px-10">
                  <p className="font-playfair italic text-base text-white/80 leading-relaxed">
                    &ldquo;To anticipate challenges before they become disputes. To resolve disputes
                    efficiently when they arise.&rdquo;
                  </p>
                  <p className="font-inter text-[10px] uppercase tracking-[0.12em] text-brass mt-4">
                    IAC Philosophy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Structure */}
      <section className="bg-linen py-14 md:py-18">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <SectionHeader eyebrow="Our Group" title="The Ifeanyi Anago Group" centered />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white border-t-[3px] border-brass p-8 shadow-sm rounded-sm relative">
              <span className="absolute top-4 right-4 text-[10px] font-inter font-semibold uppercase tracking-wider text-brass border border-brass px-2 py-1 rounded-sm">
                You Are Here
              </span>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-1">Ifeanyi Anago &amp; Co.</h3>
              <p className="font-inter text-xs text-iac-gold uppercase tracking-wider mb-4">Construction Law · ADR Services</p>
              <p className="font-inter text-sm text-graphite leading-relaxed">
                Specialist construction and ADR law firm providing legal advisory, contract
                management, arbitration representation, and dispute resolution services.
              </p>
            </div>
            <div className="bg-white border-t-[3px] border-fog p-8 shadow-sm rounded-sm">
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-1">Ifeanyi Anago &amp; Partners</h3>
              <p className="font-inter text-xs text-stone uppercase tracking-wider mb-4">Quantity Surveying · Project Management</p>
              <p className="font-inter text-sm text-graphite leading-relaxed">
                Sister firm providing Quantity Surveying, Cost Management, and Project Management
                services — enabling a fully integrated &ldquo;one-stop&rdquo; advisory capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
