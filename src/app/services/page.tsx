import Link from "next/link";
import {
  Flame,
  FileCheck,
  Handshake,
  Settings,
  BookCheck,
  FileText,
  ChevronRight,
} from "lucide-react";
import type { Metadata } from "next";

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
    href: "/services/fire-alarm-system-design",
  },
  {
    icon: FileCheck,
    title: "Permitting Assistance",
    desc: "Permit-ready plans that follow all local codes and AHJ rules to help you avoid delays and pass inspections faster.",
    href: "/services/permitting-assistance",
  },
  {
    icon: Handshake,
    title: "Sales Support",
    desc: "Our design team supports your sales efforts by helping you build stronger bids and win more jobs at no added cost.",
    href: "/services/sales-support",
  },
  {
    icon: Settings,
    title: "Engineering & Consulting",
    desc: "Expert guidance, sealed drawings, cost breakdowns, and system advice from NICET IV certified professionals.",
    href: "/services/engineering-consulting",
  },
  {
    icon: BookCheck,
    title: "Code Compliance",
    desc: "Every plan follows IBC, NFPA 72, NEC, and all AHJ amendments to ensure full compliance and reduce costly revisions.",
    href: "/services/code-compliance",
  },
  {
    icon: FileText,
    title: "Bid Specification Writing",
    desc: "Clear, contractor-friendly specs based on CSI Master Format and AIA standards to support your project scope.",
    href: "/services/bid-specifications",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-charcoal)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-[var(--color-burnt-orange)]"
              >
                <div className="w-12 h-12 bg-[var(--color-burnt-orange)] rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-burnt-orange)] transition-colors">
                  {s.title}
                </h2>
                <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span className="text-[var(--color-burnt-orange)] text-sm font-semibold flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-burnt-orange)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Send us your project details and we will recommend the right scope.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-[var(--color-burnt-orange)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
