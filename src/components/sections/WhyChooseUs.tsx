import { CheckCircle, Building2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const differentiators = [
  {
    title: "35+ Years Dual Legal & Technical Expertise",
    desc: "Unique combination of legal and quantity surveying qualifications — bridging law and construction practice.",
  },
  {
    title: "Proven Record in Procurement & Arbitration",
    desc: "Trusted by major contractors, government agencies, and private developers on high-value matters.",
  },
  {
    title: "Originator of the Anago Mediative-Conciliation Model",
    desc: "A patented, internationally recognised ADR innovation acknowledged by the U.S. Department of Justice.",
  },
  {
    title: "Trusted by Government Agencies & Private Developers",
    desc: "Decades of work on public infrastructure, housing, healthcare facilities and energy projects across Nigeria.",
  },
  {
    title: "Practical, Results-Driven Approach",
    desc: "We deliver commercially sound, legally robust solutions focused on protecting our clients' project interests.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Left — image / visual placeholder */}
          <div className="hidden lg:block">
            <div
              className="relative h-[500px] rounded-sm overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #2C2C3A 0%, #1A1A1A 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <Building2 size={48} className="text-brass/40 mx-auto mb-6" />
                  <p className="font-playfair italic text-white/20 text-base leading-relaxed">
                    Professional construction site or meeting room photography
                  </p>
                </div>
              </div>
              {/* Decorative gold corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-[3px] border-l-[3px] border-brass/60" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-brass/60" />
            </div>
          </div>

          {/* Right — content */}
          <div>
            <SectionHeader
              eyebrow="Why Choose IAC"
              title="More Than Legal Advisers — We Are Strategic Partners to the Built Environment"
              light
            />

            <p className="mt-7 font-inter text-base text-white/75 leading-[1.75]">
              Our strength lies in the seamless integration of legal and technical expertise — giving
              clients clear, actionable insight into the realities of project delivery.
            </p>

            <ul className="mt-8 space-y-6">
              {differentiators.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle
                    size={20}
                    className="text-brass flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <div>
                    <p className="font-inter text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="font-inter text-sm text-stone leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/contact" variant="primary" arrow>
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
