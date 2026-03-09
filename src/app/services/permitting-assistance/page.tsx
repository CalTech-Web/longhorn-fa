import { FileCheck } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permitting Assistance",
  description:
    "Permit-ready fire alarm plans that follow all local codes and AHJ rules. Avoid delays and pass inspections faster with Longhorn Fire Alarm Design.",
  alternates: {
    canonical: "https://longhornfirealarmdesign.com/services/permitting-assistance",
  },
};

export default function PermittingAssistancePage() {
  return (
    <ServicePageLayout
      icon={FileCheck}
      title="Permitting Assistance"
      subtitle="Permit Support"
      description="Plans built to pass the first time. We format every submission to match your AHJ's requirements, handle revision responses, and stay involved until the permit comes through."
      features={[
        "Plans formatted to local AHJ submission requirements",
        "All required code references included on drawings",
        "Revision response coordination with the reviewing authority",
        "Sealed by a Texas-licensed professional",
        "Support through the full permit review cycle",
        "Experience with AHJs across the country",
      ]}
      faqs={[
        { q: "Do you handle the permit submission?", a: "We prepare permit-ready documents. The contractor or owner typically submits, but we coordinate directly with the AHJ if revisions come back." },
        { q: "What if the AHJ requests changes?", a: "We respond to revision comments and resubmit updated plans. That is part of the service." },
      ]}
    />
  );
}
