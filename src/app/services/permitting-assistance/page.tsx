import ServicePageLayout from "@/components/ServicePageLayout";
import { FileCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permitting Assistance | Longhorn Fire Alarm Design",
  description: "Permit-ready fire alarm plans that follow local codes and AHJ rules. Avoid delays and pass inspections faster.",
};

export default function PermittingAssistancePage() {
  return (
    <ServicePageLayout
      icon={FileCheck}
      title="Permitting Assistance"
      subtitle="Smooth Approvals"
      description="We develop permit-ready plans that follow all local codes and AHJ rules to help you avoid delays and pass inspections faster. Our experience with building departments across Texas means fewer revisions and faster approvals."
      features={[
        "Plans formatted to meet AHJ submission requirements",
        "Local code amendments incorporated into every design",
        "All required calculations and specifications included",
        "NFPA 72, IBC, and NEC compliance verified",
        "Revision support for any AHJ feedback",
        "Direct communication with plan reviewers when needed",
      ]}
      details={[
        "Permit-ready plans reduce review cycles and project delays",
        "Familiarity with Texas AHJs means fewer surprises during review",
        "Proper documentation avoids costly re-submissions",
        "Sealed plans carry the authority needed for permit approval",
        "Faster permits mean faster project completion and revenue",
      ]}
    />
  );
}
