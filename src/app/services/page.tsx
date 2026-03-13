import Link from "next/link";
import Image from "next/image";
import {
  Flame,
  FileCheck,
  Handshake,
  Settings,
  BookCheck,
  FileText,
  ChevronRight,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fire alarm design services from Longhorn. System design, permitting, sales support, engineering consulting, code compliance, and bid specifications.",
  alternates: {
    canonical: "https://longhornfirealarmdesign.com/services",
  },
};

const services = [
  {
    icon: Flame,
    title: "Fire Alarm System Design",
    desc: "Full fire alarm layouts for new and retrofit projects, including device placement, risers, wiring paths, and battery calculations.",
    highlights: ["Device placement & risers", "Wiring paths & conduit routing", "Battery calculations", "Sealed permit-ready PDFs"],
    href: "/services/fire-alarm-system-design",
  },
  {
    icon: FileCheck,
    title: "Permitting Assistance",
    desc: "Permit-ready plans that follow all local codes and AHJ rules to help you avoid delays and pass inspections faster.",
    highlights: ["AHJ submission support", "Code-compliant documentation", "Revision coordination", "Inspection-ready plans"],
    href: "/services/permitting-assistance",
  },
  {
    icon: Handshake,
    title: "Sales Support",
    desc: "Our design team supports your sales efforts by helping you build stronger bids and win more jobs at no added cost.",
    highlights: ["Bid-ready layouts", "Scope estimation", "Proposal support", "No added cost"],
    href: "/services/sales-support",
  },
  {
    icon: Settings,
    title: "Engineering & Consulting",
    desc: "Expert guidance, sealed drawings, cost breakdowns, and system advice from NICET IV certified professionals.",
    highlights: ["Sealed engineering drawings", "Cost breakdowns", "System recommendations", "NICET IV review"],
    href: "/services/engineering-consulting",
  },
  {
    icon: BookCheck,
    title: "Code Compliance",
    desc: "Every plan follows IBC, NFPA 72, NEC, and all AHJ amendments to ensure full compliance and reduce costly revisions.",
    highlights: ["NFPA 72 compliance", "IBC & NEC standards", "AHJ amendment review", "Revision reduction"],
    href: "/services/code-compliance",
  },
  {
    icon: FileText,
    title: "Bid Specification Writing",
    desc: "Clear, contractor-friendly specs based on CSI Master Format and AIA standards to support your project scope.",
    highlights: ["CSI Master Format", "AIA standards", "Contractor-friendly language", "Custom scope documents"],
    href: "/services/bid-specifications",
  },
];

const certifications = [
  { src: "/Nicet-Logo-LHF.png", alt: "NICET Certified", width: 120, height: 60 },
  { src: "/LongHotn-NFPA-Logo.webp", alt: "NFPA Member", width: 120, height: 60 },
  { src: "/International-Fire-Code-Logo.webp", alt: "International Fire Code", width: 120, height: 60 },
  { src: "/IBC-Logo-LHF.png", alt: "International Building Code", width: 120, height: 60 },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] py-20 lg:py-28 overflow-hidden">
        <HeroBackground variant="compass" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
              Fire Alarm Design Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              From preliminary bid layouts to stamped permit documents. Every phase covered by NICET IV certified professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 lg:py-28 bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal-light)] to-[var(--color-charcoal)]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[var(--color-burnt-orange)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(216,77,26,0.15)]"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-[var(--color-burnt-orange)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[var(--color-burnt-orange)]/20">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[var(--color-burnt-orange)]/30 text-5xl font-bold leading-none">0{i + 1}</span>
                </div>
                <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--color-burnt-orange)] transition-colors">
                  {s.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1 h-1 bg-[var(--color-burnt-orange)] rounded-full flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="text-[var(--color-burnt-orange)] text-sm font-semibold flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Certifications & Standards</span>
            <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mt-3">
              Every Plan Meets the Highest Industry Standards
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {certifications.map((cert) => (
              <div key={cert.alt} className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={cert.width}
                  height={cert.height}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal)]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-burnt-orange)]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[var(--color-burnt-orange)]/20 border border-[var(--color-burnt-orange)]/30 rounded-full px-5 py-1.5 mb-6">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold">Need Help Choosing?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Send us your project details and we will recommend the right scope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg shadow-[var(--color-burnt-orange)]/30">
              Contact Us <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:+15125890509" className="inline-flex items-center justify-center border-2 border-gray-500 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              <Phone className="w-5 h-5 mr-2" /> +1.512.589.0509
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
