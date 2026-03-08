import ServicePageLayout from "@/components/ServicePageLayout";
import { BookCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Compliance | Longhorn Fire Alarm Design",
  description: "Fire alarm designs that follow IBC, NFPA 72, NEC, and all AHJ amendments. Full compliance, fewer revisions.",
};

export default function CodeCompliancePage() {
  return (
    <ServicePageLayout
      icon={BookCheck}
      title="Code Compliance"
      subtitle="Full Compliance"
      description="Every plan follows IBC, NFPA 72, NEC, and all AHJ amendments to ensure full compliance and reduce costly revisions. We stay current on code updates so you do not have to."
      features={[
        "Full NFPA 72 (National Fire Alarm Code) compliance",
        "IBC (International Building Code) adherence",
        "NEC (National Electrical Code) wiring compliance",
        "Local AHJ amendments incorporated",
        "Texas state fire marshal requirements met",
        "Code change tracking and plan updates",
      ]}
      details={[
        "Code-compliant designs pass inspection on the first review",
        "Fewer revisions mean lower costs and faster project timelines",
        "Staying current on code changes prevents costly retrofits",
        "Multi-code compliance ensures full regulatory coverage",
        "Proper documentation supports smooth AHJ interactions",
      ]}
    />
  );
}
