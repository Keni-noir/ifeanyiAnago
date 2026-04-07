import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ifeanyi Anago & Co. | Construction Law & ADR Specialists, Nigeria",
    template: "%s | Ifeanyi Anago & Co.",
  },
  description:
    "Expert legal and technical advisory in construction arbitration, procurement, contract management, and project finance — 35+ years of experience.",
  keywords: ["construction law Nigeria", "ADR arbitration Nigeria", "construction lawyers Abuja"],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Ifeanyi Anago & Co.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
