import { Flame } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Alarm System Design",
  description:
    "Full fire alarm system design with device placement, risers, wiring paths, and battery calculations. NICET IV certified, permit-ready plans in 5 business days.",
  alternates: {
    canonical: "https://longhornfirealarmdesign.com/services/fire-alarm-system-design",
  },
};

export default function FireAlarmSystemDesignPage() {
  return (
    <ServicePageLayout
      icon={Flame}
      title="Fire Alarm System Design"
      subtitle="Our Core Service"
      description="Complete fire alarm system layouts for new construction and retrofit projects. Device placement, riser diagrams, wiring paths, and battery calculations, all sealed and ready for permit submission."
      features={[
        "Full fire alarm system layout per NFPA 72",
        "Device placement and spacing calculations",
        "Riser diagrams and sequence of operations",
        "Wiring path design and conductor sizing",
        "Battery and voltage drop calculations",
        "Sealed by a Texas-licensed professional",
        "NICET IV certified review on every project",
        "Permit-ready PDF delivery in 5 business days",
      ]}
      process={[
        { step: "Send Project Files", desc: "Share floor plans and project scope. We review and ask clarifying questions." },
        { step: "Flat-Rate Quote", desc: "Receive a fixed price based on device count and complexity. No hourly billing." },
        { step: "Design & Review", desc: "Full layout designed, reviewed by NICET IV certified staff, and sealed." },
        { step: "Delivery", desc: "Permit-ready plans delivered as PDF. CAD available on request." },
      ]}
      faqs={[
        { q: "What information do you need to start?", a: "Floor plans and a project scope are enough to get a quote. We will ask about occupancy type, device counts, and any AHJ-specific requirements." },
        { q: "Do you design for both new construction and retrofits?", a: "Yes. We handle new builds, tenant improvements, and full system retrofits. The process is the same." },
        { q: "What codes do you design to?", a: "NFPA 72, IBC, NEC, and all applicable AHJ amendments. We verify local requirements for every project." },
      ]}
    />
  );
}
