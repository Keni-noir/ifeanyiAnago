import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Ifeanyi Anago & Co. — how we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-slate pt-28 pb-14 md:pt-36 md:pb-16 text-center">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <nav className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="font-inter text-xs text-champagne/60 hover:text-champagne">Home</Link>
            <span className="text-champagne/30">/</span>
            <span className="font-inter text-xs text-champagne">Cookie Policy</span>
          </nav>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3">Cookie Policy</h1>
          <span className="block w-10 h-[3px] bg-brass mx-auto mb-4" />
          <p className="font-inter text-sm text-stone">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[800px] mx-auto px-5 md:px-10 space-y-8 font-inter text-sm text-graphite leading-[1.8]">

          <div>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">What Are Cookies?</h2>
            <span className="block w-6 h-[2px] bg-brass mb-5" />
            <p>
              Cookies are small text files that are placed on your device when you visit our website.
              They help us provide you with a better browsing experience by remembering your
              preferences and enabling core website functionality.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">How We Use Cookies</h2>
            <span className="block w-6 h-[2px] bg-brass mb-5" />
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="space-y-3">
              {[
                {
                  name: "Essential Cookies",
                  desc: "These cookies are necessary for the website to function properly. They enable core features such as page navigation and access to secure areas. The website cannot function correctly without these cookies.",
                },
                {
                  name: "Analytics Cookies",
                  desc: "We use analytics cookies (such as Google Analytics) to understand how visitors interact with our website — including which pages are visited most frequently and how users navigate the site. This helps us improve our content and user experience. All data collected is anonymised.",
                },
                {
                  name: "Preference Cookies",
                  desc: "These cookies allow our website to remember choices you have made (such as your preferred language or region) and provide enhanced, personalised features.",
                },
                {
                  name: "Marketing Cookies",
                  desc: "We may use marketing cookies to deliver relevant content and track the effectiveness of our communications. These are only placed with your explicit consent.",
                },
              ].map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="text-brass mt-0.5 flex-shrink-0">—</span>
                  <div>
                    <strong className="font-semibold text-charcoal">{item.name}:</strong>{" "}
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              Managing Cookies
            </h2>
            <span className="block w-6 h-[2px] bg-brass mb-5" />
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow
              you to refuse cookies, delete cookies already stored on your device, or receive a
              warning before cookies are set. Please note that disabling certain cookies may affect
              the functionality of our website.
            </p>
            <p className="mt-4">
              For guidance on managing cookies in your browser, please refer to your browser&apos;s
              help documentation or visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-iac-gold hover:underline"
              >
                www.aboutcookies.org
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              Third-Party Cookies
            </h2>
            <span className="block w-6 h-[2px] bg-brass mb-5" />
            <p>
              Some cookies on our website are set by third-party services, including analytics
              providers. These third parties have their own privacy policies, and we recommend
              reviewing them. We do not control the cookies placed by third parties and are not
              responsible for their content or privacy practices.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              Updates to This Policy
            </h2>
            <span className="block w-6 h-[2px] bg-brass mb-5" />
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology,
              regulation, or our business operations. The &quot;Last Updated&quot; date at the top of
              this page will indicate when the policy was last revised. We encourage you to review
              this policy periodically.
            </p>
          </div>

          <div className="bg-parchment-gold border-l-[3px] border-iac-gold px-6 py-5">
            <p>
              For more information about how we handle your personal data, please review our{" "}
              <Link href="/privacy-policy" className="text-iac-gold hover:underline font-semibold">
                Privacy Policy
              </Link>
              . If you have questions about our use of cookies, please{" "}
              <Link href="/contact" className="text-iac-gold hover:underline font-semibold">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
