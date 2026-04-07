import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesSnapshot from "@/components/sections/ServicesSnapshot";
import TeamSnapshot from "@/components/sections/TeamSnapshot";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Ifeanyi Anago & Co. | Construction Law & ADR Specialists, Nigeria",
  description: "Nigeria's leading specialist construction and ADR law firm — 35+ years of integrated legal and technical experience.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSnapshot />
      <PracticeAreasSection />
      <WhyChooseUs />
      <ServicesSnapshot />
      <TeamSnapshot />
      <CTABanner />
    </>
  );
}
