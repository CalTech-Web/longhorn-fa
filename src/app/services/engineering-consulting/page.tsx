import { Settings } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering & Consulting",
  description:
    "Expert fire alarm engineering and consulting from NICET IV certified professionals. Sealed drawings, cost breakdowns, and system guidance.",
  alternates: {
    canonical: "https://longhornfirealarmdesign.com/services/engineering-consulting",
  },
};

export default function EngineeringConsultingPage() {
  return (
    <ServicePageLayout
      icon={Settings}
      title="Engineering & Consulting"
      subtitle="Expert Guidance"
      description="NICET IV certified professionals providing sealed drawings, system recommendations, cost breakdowns, and technical guidance for fire alarm projects of any complexity."
      features={[
        "Sealed engineering drawings by Texas-licensed professionals",
        "System selection and product recommendations",
        "Cost breakdowns and budget estimates",
        "Code interpretation and compliance guidance",
        "Value engineering for cost-effective designs",
        "Technical support during installation",
      ]}
      faqs={[
        { q: "Can you review plans from another designer?", a: "Yes. We provide third-party review and can identify code issues, design gaps, or cost savings in existing plans." },
        { q: "Do you provide on-site consulting?", a: "Most consulting is handled remotely, but on-site visits can be arranged for Texas-based projects." },
      ]}
    />
  );
}
