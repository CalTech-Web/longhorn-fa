import { BookCheck } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Compliance",
  description:
    "Fire alarm plans built to IBC, NFPA 72, NEC, and all AHJ amendments. Full code compliance to reduce revisions and pass inspections.",
  alternates: {
    canonical: "https://longhornfirealarmdesign.com/services/code-compliance",
  },
};

export default function CodeCompliancePage() {
  return (
    <ServicePageLayout
      icon={BookCheck}
      title="Code Compliance"
      subtitle="Built to Code"
      description="Every plan follows IBC, NFPA 72, NEC, and all applicable AHJ amendments. Full compliance is not optional. It is the baseline for every drawing we produce."
      features={[
        "Plans designed to NFPA 72, IBC, and NEC standards",
        "Local AHJ amendment research and compliance",
        "Code references included directly on drawings",
        "Reduced revision cycles and faster approvals",
        "Compliance documentation for project files",
        "Ongoing code update awareness across jurisdictions",
      ]}
      faqs={[
        { q: "Do you research local AHJ amendments?", a: "Yes. We verify the specific requirements for your jurisdiction before starting the design." },
        { q: "What happens if codes change mid-project?", a: "We track code updates and will flag any changes that affect your project during the design phase." },
      ]}
    />
  );
}
