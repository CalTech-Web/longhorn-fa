import ServicePageLayout from "@/components/ServicePageLayout";
import { FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bid Specification Writing | Longhorn Fire Alarm Design",
  description: "Contractor-friendly fire alarm bid specifications based on CSI Master Format and AIA standards.",
};

export default function BidSpecificationsPage() {
  return (
    <ServicePageLayout
      icon={FileText}
      title="Bid Specification Writing"
      subtitle="Clear Project Scope"
      description="We write clear, contractor-friendly specs based on CSI Master Format and AIA standards to support your project scope. Well-written specifications reduce misunderstandings and keep projects on track."
      features={[
        "CSI Master Format compliant specifications",
        "AIA standards adherence",
        "Equipment and material specifications",
        "Installation requirements documentation",
        "Testing and inspection procedures",
        "Warranty and maintenance specifications",
      ]}
      details={[
        "Clear specs reduce bid disputes and change orders",
        "Standard formatting makes specs easy to read and follow",
        "Detailed equipment specs ensure correct product selection",
        "Installation requirements prevent field issues",
        "Testing procedures ensure system reliability after installation",
      ]}
    />
  );
}
