import { FileText } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bid Specification Writing",
  description:
    "Contractor-friendly fire alarm bid specifications based on CSI Master Format and AIA standards. Clear scope documentation for your projects.",
  alternates: {
    canonical: "https://longhornfirealarmdesign.com/services/bid-specifications",
  },
};

export default function BidSpecificationsPage() {
  return (
    <ServicePageLayout
      icon={FileText}
      title="Bid Specification Writing"
      subtitle="Clear Project Scope"
      description="Detailed, contractor-friendly bid specifications based on CSI Master Format and AIA standards. Clear scope documentation that removes ambiguity from fire alarm project bids."
      features={[
        "Specifications written to CSI Master Format standards",
        "AIA document compatibility",
        "Product and system selection guidance",
        "Clear scope definitions to reduce bid confusion",
        "Coordination with architectural and engineering teams",
        "Formatted for direct inclusion in project manuals",
      ]}
      faqs={[
        { q: "What format are the specs delivered in?", a: "Standard delivery is Word or PDF, formatted to CSI Master Format sections. We can adapt to your preferred format." },
        { q: "Can you write specs for specific manufacturers?", a: "Yes. We can write proprietary specs or performance-based specs depending on the project requirements." },
      ]}
    />
  );
}
