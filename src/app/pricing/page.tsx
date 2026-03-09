import Link from "next/link";
import { CheckCircle, ChevronRight, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flat-rate fire alarm design pricing starting at $500. No hourly billing, no surprise invoices. Small projects, standard plans, and custom quotes available.",
  alternates: {
    canonical: "https://longhornfirealarmdesign.com/pricing",
  },
};

const tiers = [
  {
    name: "Small Project",
    price: "$500",
    unit: "/ project",
    desc: "For smaller commercial spaces with limited device counts.",
    features: [
      "Up to 50 devices",
      "Permit-ready PDF plans",
      "NICET IV certified review",
      "5 business day turnaround",
    ],
    cta: "Get Started",
    href: "/contact",
    highlight: false,
  },
  {
    name: "Standard Plan",
    price: "$750",
    unit: "/ project",
    desc: "Our most popular option for mid-size commercial projects.",
    features: [
      "Up to 350 devices",
      "Full fire alarm layout",
      "Device placement & risers",
      "Wiring paths & battery calc",
      "NICET IV certified & stamped",
      "Permitting assistance",
    ],
    cta: "Get Started",
    href: "/contact",
    highlight: true,
  },
  {
    name: "Large / Custom",
    price: "Custom",
    unit: "",
    desc: "For complex projects with 350+ devices or special requirements.",
    features: [
      "350+ devices",
      "Custom scope & timeline",
      "Full engineering support",
      "Expedited options available",
    ],
    cta: "Request a Quote",
    href: "/contact",
    highlight: false,
  },
];

const addOns = [
  { item: "Additional devices (beyond tier limit)", price: "$7 / device" },
  { item: "Cut sheets", price: "$50 / set" },
  { item: "CAD file delivery", price: "On request" },
  { item: "Expedited turnaround", price: "On request" },
  { item: "Printed copies (UPS shipped)", price: "On request" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-charcoal)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
              Flat-Rate Plans. No Surprises.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every project starts with a flat quote. No hourly rates, no
              ambiguous invoices. You know the number before we start.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlight
                    ? "bg-[var(--color-charcoal)] border-2 border-[var(--color-burnt-orange)] relative md:scale-105 shadow-lg"
                    : "bg-white border border-gray-200"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-burnt-orange)] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-lg font-bold mb-2 ${
                    tier.highlight ? "text-white" : "text-[var(--color-charcoal)]"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    tier.highlight ? "text-gray-300" : "text-[var(--color-gray-mid)]"
                  }`}
                >
                  {tier.desc}
                </p>
                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      tier.highlight
                        ? "text-[var(--color-burnt-orange)]"
                        : "text-[var(--color-charcoal)]"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.unit && (
                    <span
                      className={`text-sm ml-1 ${
                        tier.highlight ? "text-gray-400" : "text-[var(--color-text-light)]"
                      }`}
                    >
                      {tier.unit}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle
                        className={`w-5 h-5 flex-shrink-0 ${
                          tier.highlight
                            ? "text-[var(--color-burnt-orange)]"
                            : "text-[var(--color-burnt-orange)]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.highlight ? "text-gray-300" : "text-[var(--color-gray-mid)]"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                    tier.highlight
                      ? "bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white"
                      : "border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-4">
              Add-Ons & Extras
            </h2>
            <p className="text-[var(--color-gray-mid)]">
              Additional options available with any plan.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {addOns.map((a, i) => (
              <div
                key={a.item}
                className={`flex items-center justify-between px-6 py-4 ${
                  i < addOns.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span className="text-[var(--color-charcoal)] text-sm font-medium">
                  {a.item}
                </span>
                <span className="text-[var(--color-burnt-orange)] text-sm font-semibold">
                  {a.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Price Guarantee */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-4">
            Best Price Guarantee
          </h2>
          <p className="text-[var(--color-gray-mid)] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            If you receive a lower quote from another NICET IV certified firm
            for the same scope of work, send it over. We will match it or beat
            it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-burnt-orange)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your First Plan Is on Us
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Qualifying clients get their first fire alarm design at no cost. A
            real, sealed, inspection-ready set of plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[var(--color-burnt-orange)] px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+15125890509"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" /> +1.512.589.0509
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
