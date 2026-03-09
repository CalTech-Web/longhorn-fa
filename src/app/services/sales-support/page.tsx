import { Handshake } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Support",
  description:
    "Free fire alarm design sales support for contractors. Build stronger bids and win more jobs with accurate preliminary layouts from Longhorn.",
  alternates: {
    canonical: "https://longhornfirealarmdesign.com/services/sales-support",
  },
};

export default function SalesSupportPage() {
  return (
    <ServicePageLayout
      icon={Handshake}
      title="Sales Support"
      subtitle="Win More Bids"
      description="Our design team backs your sales efforts. We provide preliminary layouts, device counts, and material estimates so you can bid with confidence and close more projects."
      features={[
        "Preliminary layouts for bid proposals",
        "Accurate device counts and material estimates",
        "No cost for qualifying sales support requests",
        "Fast turnaround to meet bid deadlines",
        "Helps differentiate your proposal from competitors",
        "Seamless transition from bid to final design",
      ]}
      faqs={[
        { q: "Is there a cost for sales support?", a: "Sales support for qualifying projects is provided at no cost. If the bid wins, we move straight into the full design." },
        { q: "How fast can you turn around a bid layout?", a: "Most preliminary layouts are ready within 2 to 3 business days, depending on project size." },
      ]}
    />
  );
}
