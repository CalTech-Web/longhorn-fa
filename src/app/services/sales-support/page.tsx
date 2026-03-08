import ServicePageLayout from "@/components/ServicePageLayout";
import { Handshake } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Support | Longhorn Fire Alarm Design",
  description: "Free design support for fire alarm contractors. Build stronger bids and win more jobs with professional plans and estimates.",
};

export default function SalesSupportPage() {
  return (
    <ServicePageLayout
      icon={Handshake}
      title="Sales Support"
      subtitle="Win More Bids"
      description="Our design team supports your sales efforts by helping you build stronger bids and win more jobs at no added cost to you. We provide preliminary layouts, device counts, and cost estimates that give your proposals a professional edge."
      features={[
        "Preliminary fire alarm layouts for bid proposals",
        "Accurate device counts for estimating",
        "Cost breakdowns to support competitive pricing",
        "Professional plan presentations for client meetings",
        "Submittal preparation assistance",
        "No charge for sales support services",
      ]}
      details={[
        "Professional plans differentiate your bids from competitors",
        "Accurate device counts prevent costly underestimates",
        "Free support means no added overhead on your proposals",
        "Faster estimates let you respond to RFPs quickly",
        "Stronger bids lead to higher win rates and more revenue",
      ]}
    />
  );
}
