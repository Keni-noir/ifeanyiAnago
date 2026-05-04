"use client";
import Link from "next/link";
import { MapPin, Phone, Mail, Share2, ExternalLink } from "lucide-react";

const practiceLinks = [
  { label: "Construction & Engineering", href: "/practice-areas/construction-engineering" },
  { label: "Arbitration & ADR", href: "/practice-areas/arbitration-adr" },
  { label: "Infrastructure & Utilities", href: "/practice-areas/infrastructure-utilities" },
  { label: "Oil & Gas", href: "/practice-areas/oil-gas" },
  { label: "Procurement & Property", href: "/practice-areas/procurement-property" },
  { label: "PFI & PPP", href: "/practice-areas/pfi-ppp" },
];

const serviceLinks = [
  { label: "Contract Management", href: "/services#contract-management" },
  { label: "Construction Advisory", href: "/services#construction-advisory" },
  { label: "Procurement Advisory", href: "/services#procurement-advisory" },
  { label: "Capacity Building", href: "/services#capacity-building" },
  { label: "Arbitration", href: "/services#arbitration" },
  { label: "Expert Witness", href: "/services#expert-witness" },
  { label: "Project Finance", href: "/services#project-finance" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 lg:py-20">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-brass font-playfair font-bold text-sm">IA</span>
              </div>
              <div className="font-playfair font-semibold text-sm text-champagne leading-tight tracking-wide">
                IFEANYI ANAGO & CO.
              </div>
            </Link>
            <p className="font-playfair italic text-stone text-sm leading-relaxed mb-6">
              Building Legal Solutions for the Built Environment.
            </p>
            <p className="font-inter text-xs text-stone leading-relaxed mb-6">
              A specialist construction and ADR law firm delivering practical, strategic, and commercially sound legal solutions since 1991.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brass transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <ExternalLink size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brass transition-colors duration-200"
                aria-label="Twitter"
              >
                <Share2 size={14} />
              </a>
            </div>
          </div>

          {/* Column 2 — Practice Areas */}
          <div>
            <h4 className="font-inter text-xs font-semibold uppercase tracking-[0.12em] text-iac-gold mb-5">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-stone hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-inter text-xs font-semibold uppercase tracking-[0.12em] text-iac-gold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-stone hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-inter text-xs font-semibold uppercase tracking-[0.12em] text-iac-gold mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-brass flex-shrink-0 mt-0.5" />
                <span className="font-inter text-sm text-stone leading-relaxed">
                  Block 2 (New Block), Flat 2 Doliz Brown Estate, Stella Okotiete Street, Durumi 3, FCT, Abuja
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-brass flex-shrink-0 mt-0.5" />
                <div className="font-inter text-sm text-stone">
                  <a href="tel:+2348061585794" className="block hover:text-white transition-colors">+234 806 158 5794</a>
                  <a href="tel:+2349067154932" className="block hover:text-white transition-colors">+234 906 715 4932</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-brass flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@ifeanyianagoandco.com"
                  className="font-inter text-sm text-stone hover:text-white transition-colors"
                >
                  info@ifeanyianagoandco.com
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 block w-full py-3 text-center border border-white/30 text-white font-inter text-xs font-semibold uppercase tracking-[0.08em] rounded-sm hover:border-brass hover:text-champagne transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-3">
          <p className="font-inter text-xs text-stone">
            © {new Date().getFullYear()} Ifeanyi Anago & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="font-inter text-xs text-stone hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link href="/disclaimer" className="font-inter text-xs text-stone hover:text-white transition-colors">Disclaimer</Link>
            <span className="text-white/20">|</span>
            <Link href="/cookie-policy" className="font-inter text-xs text-stone hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
