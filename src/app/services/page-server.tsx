import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end legal and technical advisory services: Contract Management, Construction Advisory, Procurement, Capacity Building, Arbitration, Expert Witness, and Project Finance.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
