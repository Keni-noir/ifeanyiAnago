"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const initialForm = {
  firstName: "", lastName: "", email: "", phone: "",
  subject: "", organization: "", message: "", privacy: false,
};

export default function ContactClient() {
  const [formData, setFormData] = useState(initialForm);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Submission failed");

      setFormState("success");
      setFormData(initialForm);
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 bg-white border-[1.5px] border-stone/60 rounded-sm font-sans text-sm text-charcoal placeholder:text-stone focus:outline-none focus:border-iac-gold focus:ring-2 focus:ring-iac-gold/20 transition-all duration-200";

  return (
    <>
      {/* Hero */}
      <section className="bg-slate pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 text-center">
          <nav className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="font-sans text-xs text-champagne/60 hover:text-champagne transition-colors">Home</Link>
            <span className="text-champagne/30 text-xs">/</span>
            <span className="font-sans text-xs text-champagne">Contact</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <span className="block w-10 h-[3px] bg-brass mx-auto mb-6" />
          <p className="font-serif italic text-lg md:text-xl text-champagne">
            We welcome the opportunity to work with you.
          </p>
        </div>
      </section>

      {/* Main contact split */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left — Form */}
            <div className="lg:col-span-3">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-iac-gold mb-3">
                Send Us a Message
              </p>
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-2">
                We&apos;ll Respond Within One Business Day
              </h2>
              <span className="block w-10 h-[3px] bg-brass mb-8" />

              {/* Success state */}
              {formState === "success" && (
                <div className="bg-parchment-gold border border-champagne border-l-[3px] border-l-iac-gold p-8 rounded-sm mb-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-iac-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                        Message Received
                      </h3>
                      <p className="font-sans text-sm text-graphite leading-relaxed">
                        Thank you for reaching out. A member of our team will be in touch within
                        one business day. For urgent matters, please call us directly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error banner */}
              {formState === "error" && (
                <div className="bg-red-50 border border-red-200 border-l-[3px] border-l-red-500 p-5 rounded-sm mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-charcoal mb-2">
                      First Name *
                    </label>
                    <input
                      type="text" name="firstName" required
                      value={formData.firstName} onChange={handleChange}
                      className={inputClass} placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-charcoal mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text" name="lastName" required
                      value={formData.lastName} onChange={handleChange}
                      className={inputClass} placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className={inputClass} placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel" name="phone"
                    value={formData.phone} onChange={handleChange}
                    className={inputClass} placeholder="+234 ..."
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-charcoal mb-2">
                    Matter Type *
                  </label>
                  <select
                    name="subject" required
                    value={formData.subject} onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="">Select a matter type</option>
                    <option>Contract Advisory</option>
                    <option>Arbitration / Dispute Resolution</option>
                    <option>Procurement Advisory</option>
                    <option>Capacity Building / Training</option>
                    <option>Project Finance</option>
                    <option>Expert Witness</option>
                    <option>General Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Organisation */}
                <div>
                  <label className="block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-charcoal mb-2">
                    Organisation / Company
                  </label>
                  <input
                    type="text" name="organization"
                    value={formData.organization} onChange={handleChange}
                    className={inputClass} placeholder="Your organisation"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message" required rows={5}
                    value={formData.message} onChange={handleChange}
                    className={`${inputClass} resize-y min-h-[140px]`}
                    placeholder="Please describe your matter in brief..."
                  />
                </div>

                {/* Privacy checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox" id="privacy" name="privacy" required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 accent-iac-gold flex-shrink-0"
                  />
                  <label htmlFor="privacy" className="font-sans text-sm text-graphite leading-relaxed">
                    I agree to the{" "}
                    <Link href="/privacy-policy" className="text-iac-gold hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and consent to Ifeanyi Anago &amp; Co. contacting me about my enquiry.
                  </label>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-brass text-white font-sans text-xs font-semibold uppercase tracking-[0.08em] rounded-sm hover:bg-burnished-gold transition-colors duration-200 min-h-[52px] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  <p className="flex items-center gap-2 font-sans text-xs text-stone">
                    <span>🔒</span> Protected under our Privacy Policy
                  </p>
                </div>
              </form>
            </div>

            {/* Right — Info panel */}
            <div className="lg:col-span-2">
              <div className="bg-linen border border-fog border-l-[3px] border-l-iac-gold p-8 rounded-sm">
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-6">
                  Contact Information
                </h3>

                <div className="space-y-0 divide-y divide-champagne/60">
                  {[
                    {
                      icon: MapPin,
                      label: "Our Office",
                      content: (
                        <p className="font-sans text-sm text-charcoal leading-relaxed">
                          Block 2 (New Block), Flat 2 Doliz Brown Estate,<br />
                          Stella Okotiete Street,<br />
                          Durumi 3, FCT, Abuja
                        </p>
                      ),
                    },
                    {
                      icon: Phone,
                      label: "Call Us",
                      content: (
                        <div className="space-y-1">
                          <a href="tel:+2348061585794" className="block font-sans text-sm text-charcoal hover:text-iac-gold transition-colors">
                            +234 806 158 5794
                          </a>
                          <a href="tel:+2349067154932" className="block font-sans text-sm text-charcoal hover:text-iac-gold transition-colors">
                            +234 906 715 4932
                          </a>
                        </div>
                      ),
                    },
                    {
                      icon: Mail,
                      label: "Email Us",
                      content: (
                        <a
                          href="mailto:info@ifeanyianagoandco.com"
                          className="font-sans text-sm text-charcoal hover:text-iac-gold transition-colors break-all"
                        >
                          info@ifeanyianagoandco.com
                        </a>
                      ),
                    },
                    {
                      icon: Clock,
                      label: "Office Hours",
                      content: (
                        <div className="font-sans text-sm text-charcoal">
                          <p>Monday – Friday</p>
                          <p className="text-stone">9:00am – 5:00pm WAT</p>
                        </div>
                      ),
                    },
                  ].map(({ icon: Icon, label, content }) => (
                    <div key={label} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                      <Icon size={18} className="text-brass flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-stone mb-1.5">
                          {label}
                        </p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-champagne/60">
                  <a
                    href="mailto:info@ifeanyianagoandco.com?subject=Consultation Request"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-brass text-white font-sans text-xs font-semibold uppercase tracking-[0.08em] rounded-sm hover:bg-burnished-gold transition-colors duration-200"
                  >
                    Schedule a Consultation
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="w-full h-80 bg-slate flex items-center justify-center">
        <div className="text-center px-6">
          <MapPin size={32} className="text-brass/40 mx-auto mb-3" />
          <p className="font-sans text-sm text-champagne/40">Durumi 3, FCT, Abuja, Nigeria</p>
          <p className="font-sans text-xs text-champagne/20 mt-2 max-w-xs mx-auto">
            Replace this block with a Google Maps &lt;iframe&gt; embed pointing to the office address.
          </p>
        </div>
      </div>

      {/* Alternative contact methods */}
      <section className="bg-linen py-14 md:py-18">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-champagne">
            {[
              {
                icon: MessageCircle,
                title: "Chat on WhatsApp",
                desc: "Quick response for urgent matters",
                cta: "Start Chat",
                href: "https://wa.me/2348061585794",
              },
              {
                icon: Calendar,
                title: "Book a Call",
                desc: "Choose a time that suits you",
                cta: "Request Callback",
                href: "mailto:info@ifeanyianagoandco.com?subject=Callback Request",
              },
              {
                icon: Mail,
                title: "Email Directly",
                desc: "For detailed enquiries and documentation",
                cta: "Send Email",
                href: "mailto:info@ifeanyianagoandco.com",
              },
            ].map(({ icon: Icon, title, desc, cta, href }) => (
              <div key={title} className="flex flex-col items-center text-center py-10 px-8">
                <Icon size={32} strokeWidth={1.5} className="text-iac-gold mb-4" />
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{title}</h3>
                <p className="font-sans text-sm text-stone mb-5 leading-relaxed">{desc}</p>
                <a
                  href={href}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] hover:gap-3 transition-all duration-200"
                >
                  {cta} <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
