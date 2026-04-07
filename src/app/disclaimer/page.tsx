import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal disclaimer for Ifeanyi Anago & Co. website.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-slate pt-28 pb-14 md:pt-36 md:pb-16 text-center">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <nav className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="font-inter text-xs text-champagne/60 hover:text-champagne">Home</Link>
            <span className="text-champagne/30">/</span>
            <span className="font-inter text-xs text-champagne">Disclaimer</span>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3">Disclaimer</h1>
          <span className="block w-10 h-[3px] bg-brass mx-auto" />
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[800px] mx-auto px-5 md:px-10 space-y-7 font-inter text-sm text-graphite leading-[1.8]">

          <div>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">General Information Only</h2>
            <span className="block w-6 h-[2px] bg-brass mb-5" />
            <p>The information contained on this website is provided by Ifeanyi Anago &amp; Co. for general informational and educational purposes only. Although every effort has been made to ensure that the content is accurate, comprehensive, and current, it does not, under any circumstances, constitute legal advice, opinion, or professional counsel.</p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">No Attorney-Client Relationship</h2>
            <span className="block w-6 h-[2px] bg-brass mb-5" />
            <p>Accessing or using this website, or communicating with Ifeanyi Anago &amp; Co. through it, does not create and is not intended to create an attorney-client or solicitor-client relationship. Users are strongly advised not to act, or refrain from acting, based on any information contained herein without obtaining specific legal advice from qualified counsel familiar with their particular facts and circumstances.</p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">Limitation of Liability</h2>
            <span className="block w-6 h-[2px] bg-brass mb-5" />
            <p>Ifeanyi Anago &amp; Co. expressly disclaims any liability for loss, damage, or inconvenience arising directly or indirectly from the use of, reliance upon, or interpretation of any material presented on this website or through any linked resources.</p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">Third-Party Links</h2>
            <span className="block w-6 h-[2px] bg-brass mb-5" />
            <p>Links to third-party websites, if provided, are for convenience and reference purposes only. Ifeanyi Anago &amp; Co. neither endorses nor accepts responsibility for the content, accuracy, or security of any external website accessed through such links.</p>
          </div>

          <div className="bg-parchment-gold border-l-[3px] border-iac-gold px-6 py-5">
            <p>By continuing to browse or use this website, you acknowledge and agree that the materials provided are for informational purposes only and that Ifeanyi Anago &amp; Co. shall not be held liable for any action taken or not taken based on the content herein.</p>
          </div>

          <p>
            For legal guidance tailored to your specific situation, please{" "}
            <Link href="/contact" className="text-iac-gold hover:underline">
              contact a qualified professional at Ifeanyi Anago &amp; Co.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
