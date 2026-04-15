import type { Metadata } from "next";
import Link from "next/link";
import {
  HardHat, ClipboardList, TrendingUp, Users,
  ArrowRight, CheckCircle, Building2,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ifeanyi Anago & Partners",
  description:
    "Ifeanyi Anago & Partners — specialist Quantity Surveying, Cost Management, and Project Management services for the built environment.",
};

const services = [
  {
    icon: ClipboardList,
    title: "Quantity Surveying",
    description:
      "Comprehensive quantity surveying services covering cost planning, bills of quantities, tender documentation, and final account preparation for construction and infrastructure projects.",
  },
  {
    icon: TrendingUp,
    title: "Cost Management",
    description:
      "End-to-end cost management from pre-contract budget advice and cost planning through post-contract cost control, variation valuation, and final account settlement.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description:
      "Full project management services covering project inception, programme planning, contractor procurement, site supervision, and project closeout across public and private sector developments.",
  },
  {
    icon: Users,
    title: "Procurement Advisory",
    description:
      "Strategic procurement advisory for construction and infrastructure projects, including tender strategy, bid evaluation, contract award recommendations, and contractor performance monitoring.",
  },
];

const keyStrengths = [
  "Over four decades of cumulative experience in the built environment",
  "Dual competence across quantity surveying and legal practice",
  "Experienced in public sector, MDG, and donor-funded projects",
  "Specialists in FIDIC, NEC, and bespoke contract cost management",
  "Integrated with Ifeanyi Anago & Co. for seamless legal and technical support",
  "Nationwide project experience across Nigeria",
];

const representativeProjects = [
  "2008/2009 Quickwins MDG Projects in Anambra and Abia States",
  "Primary Health Care Rehabilitation Programmes across 19 LGAs in Delta State under the PTF initiative",
  "ADF-Funded Sokoto Health Services Rehabilitation Programme",
  "Abia Health Services Rehabilitation Programme",
  "Contract supervision for the construction of General Hospital, Sokoto",
  "Shere Galuyi Housing Estate — project management and cost control",
  "Federal Rural Water Supply Programme under the 2004 Appropriation Act",
];

export default function IfeanyiAnagoPartnersPage() {
  return (
    <>
      <PageHero
        title="Ifeanyi Anago & Partners"
        subtitle="Specialist Quantity Surveying, Cost Management, and Project Management for the Built Environment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Ifeanyi Anago & Partners" },
        ]}
        height="md"
      />

      {/* Overview */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Main content */}
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Sister Firm"
                title="Technical Expertise Across the Full Project Lifecycle"
              />

              <div className="mt-8 space-y-5 font-inter text-base text-graphite leading-[1.75]">
                <p>
                  Ifeanyi Anago &amp; Partners is the Quantity Surveying and Project Management arm
                  of the Ifeanyi Anago Group. Established alongside Ifeanyi Anago &amp; Co., the
                  firm provides specialist technical advisory services across the full construction
                  and infrastructure project lifecycle.
                </p>
                <p>
                  Together with Ifeanyi Anago &amp; Co. (Construction Law &amp; ADR), Ifeanyi Anago
                  &amp; Partners enables the Group to offer a truly integrated &ldquo;one-stop
                  shop&rdquo; consultancy — combining legal precision with technical and commercial
                  expertise that few firms in Nigeria can match.
                </p>
                <p>
                  The firm&apos;s principal, Barr. Ifeanyi Tim Anago, is a dual-qualified Quantity
                  Surveyor and Legal Practitioner — a rare combination that ensures seamless
                  coordination between the technical and legal dimensions of every project
                  engagement.
                </p>
              </div>

              <blockquote className="mt-8 border-l-[3px] border-iac-gold bg-parchment-gold px-6 py-5">
                <p className="font-playfair italic text-base text-charcoal leading-relaxed">
                  &ldquo;Our approach integrates technical precision, legal insight, and dispute
                  avoidance strategies — ensuring that community relations, project timelines, and
                  contract performance are maintained seamlessly.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate text-white p-8 rounded-sm sticky top-28">
                <h3 className="font-inter text-xs font-semibold uppercase tracking-[0.12em] text-champagne mb-1">
                  The Ifeanyi Anago Group
                </h3>
                <div className="w-8 h-[2px] bg-brass mb-6" />

                <div className="space-y-5">
                  {/* IAC */}
                  <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                    <p className="font-inter text-xs font-semibold uppercase tracking-wider text-brass mb-1">
                      Ifeanyi Anago &amp; Co.
                    </p>
                    <p className="font-inter text-xs text-stone leading-relaxed">
                      Construction Law · ADR Services · Arbitration · Expert Witness
                    </p>
                  </div>

                  {/* IAP — highlighted */}
                  <div className="p-4 bg-brass/20 border border-brass/40 rounded-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-inter text-xs font-semibold uppercase tracking-wider text-champagne">
                        Ifeanyi Anago &amp; Partners
                      </p>
                      <span className="text-[10px] bg-brass text-white px-2 py-0.5 rounded-sm font-inter font-semibold uppercase tracking-wide">
                        This Firm
                      </span>
                    </div>
                    <p className="font-inter text-xs text-stone leading-relaxed">
                      Quantity Surveying · Cost Management · Project Management
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-inter text-xs text-stone leading-relaxed mb-4">
                    Contact us to discuss how our integrated Group can support your next project.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full py-3 text-center bg-brass text-white font-inter text-xs font-semibold uppercase tracking-[0.08em] rounded-sm hover:bg-burnished-gold transition-colors duration-200"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-linen py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our Technical Services"
            subtitle="Specialist quantity surveying and project management services for construction and infrastructure projects across Nigeria."
            centered
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white p-8 shadow-sm hover:shadow-md rounded-sm transition-shadow duration-200 border-t-[3px] border-brass"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-parchment-gold rounded-sm mb-5">
                    <Icon size={26} strokeWidth={1.5} className="text-iac-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm text-graphite leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Work With Us"
                title="Our Key Strengths"
              />
              <ul className="mt-8 space-y-4">
                {keyStrengths.map((strength) => (
                  <li key={strength} className="flex items-start gap-4">
                    <CheckCircle
                      size={18}
                      className="text-brass flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="font-inter text-sm text-graphite leading-relaxed">
                      {strength}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div
              className="relative h-80 rounded-sm overflow-hidden flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2C2C3A, #1A1A1A)" }}
            >
              <div className="text-center px-10">
                <Building2 size={48} strokeWidth={1} className="text-brass/40 mx-auto mb-5" />
                <p className="font-playfair italic text-white/30 text-base leading-relaxed">
                  Over three decades delivering technical excellence across Nigeria&apos;s built
                  environment.
                </p>
              </div>
              <div className="absolute top-0 left-0 w-14 h-14 border-t-[3px] border-l-[3px] border-brass/50" />
              <div className="absolute bottom-0 right-0 w-14 h-14 border-b-[3px] border-r-[3px] border-brass/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Representative Projects */}
      <section className="bg-slate py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <SectionHeader
            eyebrow="Track Record"
            title="Representative Project Experience"
            subtitle="A selection of public and private sector projects delivered by the Ifeanyi Anago Group."
            light
          />

          <div className="mt-12 space-y-3">
            {representativeProjects.map((project, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-sm"
              >
                <span className="w-2 h-2 rounded-full bg-brass flex-shrink-0 mt-2" />
                <p className="font-inter text-sm text-white/80 leading-relaxed">{project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link to IAC */}
      <section className="bg-linen py-14">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.12em] text-iac-gold mb-4">
              The Integrated Group
            </p>
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4">
              Looking for Legal & ADR Services?
            </h2>
            <span className="block w-10 h-[3px] bg-brass mx-auto mb-6" />
            <p className="font-inter text-base text-graphite leading-relaxed mb-8">
              Our sister firm Ifeanyi Anago &amp; Co. provides specialist Construction Law, Arbitration,
              Contract Advisory, and Expert Witness services — working seamlessly alongside
              Ifeanyi Anago &amp; Partners for fully integrated project support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/practice-areas" variant="primary" arrow>
                Explore Practice Areas
              </Button>
              <Button href="/contact" variant="secondary" arrow>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Work With the Ifeanyi Anago Group?" />
    </>
  );
}
