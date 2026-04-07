"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const practiceAreas = [
  { label: "Construction & Engineering", href: "/practice-areas/construction-engineering" },
  { label: "Arbitration & ADR", href: "/practice-areas/arbitration-adr" },
  { label: "Infrastructure & Utilities", href: "/practice-areas/infrastructure-utilities" },
  { label: "Oil & Gas", href: "/practice-areas/oil-gas" },
  { label: "Procurement & Property", href: "/practice-areas/procurement-property" },
  { label: "PFI & PPP", href: "/practice-areas/pfi-ppp" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas", dropdown: practiceAreas },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [practiceExpanded, setPracticeExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                <span className="text-[#C49A3C] font-playfair font-bold text-sm">IA</span>
              </div>
              <div>
                <div className="font-playfair font-semibold text-sm text-[#8C7320] leading-tight tracking-wide">
                  IFEANYI ANAGO & CO.
                </div>
                <div className="font-inter text-[10px] text-stone uppercase tracking-widest">
                  Construction Lawyers · ADR
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      className="flex items-center gap-1 font-inter text-xs font-semibold uppercase tracking-[0.08em] text-charcoal hover:text-iac-gold transition-colors duration-200"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {dropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-1 w-64 bg-white shadow-md border-t-2 border-brass z-50"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-2 px-5 py-3 font-inter text-sm text-charcoal hover:text-iac-gold hover:bg-parchment-gold transition-colors duration-150 group"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brass opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-inter text-xs font-semibold uppercase tracking-[0.08em] text-charcoal hover:text-iac-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-6 py-3 bg-brass text-white font-inter text-xs font-semibold uppercase tracking-[0.08em] rounded-sm hover:bg-burnished-gold transition-colors duration-200"
            >
              Book a Consultation
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-charcoal"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-charcoal flex flex-col">
          <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <div className="font-playfair font-semibold text-sm text-champagne tracking-wide">
                IFEANYI ANAGO & CO.
              </div>
            </Link>
            <button onClick={() => setMobileOpen(false)} className="text-white p-2" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            {navLinks.map((link, i) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-4 font-playfair text-2xl text-white border-b border-white/10"
                      onClick={() => setPracticeExpanded(!practiceExpanded)}
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        className={`text-champagne transition-transform duration-200 ${practiceExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {practiceExpanded && (
                      <div className="pl-6 pb-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-3 font-inter text-base text-champagne border-b border-white/5 hover:text-white transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center py-4 font-playfair text-2xl text-white border-b border-white/10 hover:text-champagne transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="px-5 py-6">
            <Link
              href="/contact"
              className="block w-full py-4 text-center bg-brass text-white font-inter text-sm font-semibold uppercase tracking-[0.08em] rounded-sm hover:bg-burnished-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
