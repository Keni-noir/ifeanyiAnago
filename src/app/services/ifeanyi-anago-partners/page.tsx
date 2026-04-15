import { redirect } from "next/navigation";

// The full page lives under /practice-areas/ifeanyi-anago-partners
// This route redirects there to avoid duplicate content
export default function IfeanyiAnagoPartnersServicePage() {
  redirect("/practice-areas/ifeanyi-anago-partners");
}
