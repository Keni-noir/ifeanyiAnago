import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ifeanyi Anago & Co. — book a consultation, call us, or visit our office in Abuja, Nigeria.",
};

export default function ContactPage() {
  return <ContactClient />;
}
