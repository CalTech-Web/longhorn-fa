import ServicePageLayout from "@/components/ServicePageLayout";
import { Flame } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Alarm System Design | Longhorn Fire Alarm Design",
  description: "Full fire alarm system layouts for new construction and retrofit projects. Device placement, risers, wiring paths, and battery calculations.",
};

export default function FireAlarmSystemDesignPage() {
  return (
    <ServicePageLayout
      icon={Flame}
      title="Fire Alarm System Design"
      subtitle="Our Core Service"
      description="We create complete fire alarm layouts for new construction and retrofit projects, including device placement, riser diagrams, wiring paths, and battery calculations. Every plan is sealed by a NICET IV certified, Texas-licensed professional."
      features={[
        "Complete floor plan layouts with device placement",
        "Riser diagrams showing system architecture",
        "Wiring path routing and conductor sizing",
        "Battery and power supply calculations",
        "Notification appliance circuit design",
        "Initiating device circuit layout",
        "Plans sealed by Texas-licensed professionals",
        "Delivered in PDF format within 5 business days",
      ]}
      details={[
        "Accurate device placement reduces installation time and material waste",
        "Proper riser diagrams prevent wiring errors and inspection failures",
        "Code-compliant designs pass AHJ review on the first submission",
        "Sealed plans are accepted by building departments statewide",
        "Flat-rate pricing means no budget surprises during design phase",
        "Expedited turnaround available for time-sensitive projects",
      ]}
    />
  );
}
