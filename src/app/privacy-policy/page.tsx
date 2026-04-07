import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Ifeanyi Anago & Co. — how we collect, use, and protect your personal data.",
};

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "definitions", title: "2. Definitions" },
  { id: "who-we-are", title: "3. Who We Are" },
  { id: "data-collected", title: "4. What Personal Data We Collect" },
  { id: "how-collected", title: "5. How We Collect Your Data" },
  { id: "lawful-basis", title: "6. Lawful Basis for Processing" },
  { id: "use", title: "7. How We Use Your Personal Data" },
  { id: "sharing", title: "8. Data Sharing and Disclosure" },
  { id: "security", title: "9. Data Security" },
  { id: "retention", title: "10. Data Retention" },
  { id: "rights", title: "11. Your Data Privacy Rights" },
  { id: "transfer", title: "12. Data Transfer Outside Nigeria" },
  { id: "ai", title: "13. Automated Decision-Making and AI Use" },
  { id: "cookies", title: "14. Cookies" },
  { id: "breach", title: "15. Data Breach Management" },
  { id: "links", title: "16. Links to Third-Party Websites" },
  { id: "governing", title: "17. Governing Law" },
  { id: "contact", title: "18. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-slate pt-28 pb-14 md:pt-36 md:pb-16 text-center">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <nav className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="font-inter text-xs text-champagne/60 hover:text-champagne">Home</Link>
            <span className="text-champagne/30">/</span>
            <span className="font-inter text-xs text-champagne">Privacy Policy</span>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3">Privacy Policy</h1>
          <span className="block w-10 h-[3px] bg-brass mx-auto mb-4" />
          <p className="font-inter text-sm text-stone">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* TOC */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.1em] text-iac-gold mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block font-inter text-xs text-stone hover:text-iac-gold transition-colors py-1"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 prose-custom">
              <div className="space-y-10 font-inter text-sm text-graphite leading-[1.8]">

                <div id="introduction">
                  <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">1. Introduction</h2>
                  <span className="block w-6 h-[2px] bg-brass mb-5" />
                  <p>Ifeanyi Anago &amp; Co. (&quot;the Firm&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy and ensuring the lawful processing of your personal data in accordance with the Nigeria Data Protection Act (NDPA) 2023, the Nigeria Data Protection Commission (NDPC) General Application and Implementation Directive (GAID) 2025, and other applicable data protection regulations.</p>
                  <p className="mt-3">This Privacy Policy outlines how we collect, use, disclose, and safeguard personal data obtained through our website and professional services.</p>
                </div>

                <div id="who-we-are">
                  <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">3. Who We Are</h2>
                  <span className="block w-6 h-[2px] bg-brass mb-5" />
                  <p>Ifeanyi Anago &amp; Co. is a legal and business advisory firm providing construction law, ADR, and compliance-related services. We act as the Data Controller for the personal data we collect and process in connection with our Services.</p>
                  <p className="mt-3">For data privacy enquiries, contact our Data Protection Officer: <a href="mailto:info@ifeanyianagoandco.com" className="text-iac-gold hover:underline">info@ifeanyianagoandco.com</a>.</p>
                </div>

                <div id="rights">
                  <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">11. Your Data Privacy Rights</h2>
                  <span className="block w-6 h-[2px] bg-brass mb-5" />
                  <p>Under the NDPA and GAID, you have the following rights:</p>
                  <ul className="mt-4 space-y-2 pl-4">
                    {["Access: Request a copy of your personal data.", "Rectification: Request correction of inaccurate data.", "Erasure: Request deletion under lawful circumstances.", "Restriction: Request suspension of data processing.", "Objection: Object to data processing.", "Portability: Request transfer of your data.", "Withdraw Consent: Revoke consent at any time.", "Lodge a Complaint: With the Nigeria Data Protection Commission (NDPC)."].map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <span className="text-brass flex-shrink-0 mt-0.5">—</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="contact">
                  <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">18. Contact Us</h2>
                  <span className="block w-6 h-[2px] bg-brass mb-5" />
                  <p>For questions, requests, or concerns regarding this Privacy Policy, please contact:</p>
                  <p className="mt-3">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@ifeanyianagoandco.com" className="text-iac-gold hover:underline">
                      info@ifeanyianagoandco.com
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
