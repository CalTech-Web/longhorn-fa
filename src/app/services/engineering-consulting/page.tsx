import ServicePageLayout from "@/components/ServicePageLayout";
import { Settings } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering & Consulting | Longhorn Fire Alarm Design",
  description: "Expert fire alarm engineering guidance, sealed drawings, cost breakdowns, and system advice from NICET IV certified professionals.",
};

export default function EngineeringConsultingPage() {
  return (
    <ServicePageLayout
      icon={Settings}
      title="Engineering & Consulting"
      subtitle="Expert Guidance"
      description="Receive expert guidance, sealed drawings, cost breakdowns, and system advice from NICET IV certified professionals. Whether you need a second opinion on a complex system or full engineering support, we are here to help."
      features={[
        "System analysis and recommendations",
        "Sealed engineering drawings",
        "Cost analysis and budgeting support",
        "Code interpretation and compliance guidance",
        "Retrofit feasibility assessments",
        "Coordination with other engineering disciplines",
        "Expert testimony and documentation support",
      ]}
      details={[
        "NICET IV certification ensures the highest level of technical expertise",
        "Independent analysis helps identify cost-saving opportunities",
        "Expert code interpretation prevents compliance issues",
        "Feasibility studies reduce risk before committing to a project",
        "Professional documentation supports AHJ reviews and approvals",
      ]}
    />
  );
}
