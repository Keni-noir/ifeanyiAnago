import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Building2, Scale } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const quickFacts = [
  { icon: Calendar, label: "Established", value: "1991" },
  { icon: Building2, label: "Location", value: "FCT Abuja, Nigeria" },
  { icon: Scale, label: "Specialisation", value: "Construction Law & ADR" },
];

export default function AboutSnapshot() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — content */}
          <div>
            <SectionHeader
              eyebrow="About the Firm"
              title="Specialists in Construction Law and Dispute Resolution Since 1991"
            />

            <p className="mt-8 font-inter text-base text-graphite leading-[1.75]">
              Ifeanyi Anago &amp; Co. is an integrated consultancy and professional services firm with
              core expertise in Construction and Engineering Law, Quantity Surveying, Project
              Management, and Alternative Dispute Resolution — particularly within the built
              environment and infrastructure sectors.
            </p>
            <p className="mt-5 font-inter text-base text-graphite leading-[1.75]">
              As a multi-disciplinary firm, we work collaboratively with a network of corporate and
              litigation expert teams, enabling us to deliver comprehensive solutions across the
              project lifecycle — from inception and design through project finance and procurement,
              contract administration, dispute management and resolution.
            </p>

            <blockquote className="mt-8 border-l-[3px] border-iac-gold bg-parchment-gold px-6 py-5">
              <p className="font-playfair italic text-base text-charcoal leading-relaxed">
                &ldquo;Established in 1991, the firm began as a Quantity Surveying practice — evolving over
                three decades to become Nigeria&apos;s specialist construction and ADR law firm.&rdquo;
              </p>
            </blockquote>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {quickFacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <Icon size={18} className="text-brass mb-1" />
                  <span className="font-inter text-[10px] uppercase tracking-[0.1em] text-stone">{label}</span>
                  <span className="font-inter text-sm font-semibold text-charcoal">{value}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] hover:gap-3 transition-all duration-200"
            >
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right — image with gold accent treatment */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <div
                className="w-full h-80 md:h-96 lg:h-[480px] bg-slate"
                style={{
                  background:
                    "linear-gradient(135deg, #2C2C3A 0%, #1A1A1A 100%)",
                }}
              >
                {/* Placeholder — replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                     <Image
                      src="/images/hero/slide-3.jpg"
                      alt="Office"
                        width={600}
                        height={100}
                      className="object-fill w-full h-full"
                    />
                </div>
              </div>
              {/* Gold border accent — left and bottom */}
              <div className="absolute -left-3 -bottom-3 w-full h-full border-l-[3px] border-b-[3px] border-brass rounded-sm pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
