import Link from "next/link";
import { CheckCircle, ChevronRight, Phone } from "lucide-react";
import type { Metadata } from "next";
import HeroBackground from "@/components/HeroBackground";

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
      <section className="relative bg-[var(--color-charcoal)] py-20 lg:py-28 overflow-hidden">
        <HeroBackground variant="measurement" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-burnt-orange)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) =>
              tier.highlight ? (
                <div key={tier.name} className="relative md:-mt-4 md:mb-4">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-[var(--color-burnt-orange)] to-[var(--color-burnt-orange-dark)] rounded-2xl" />
                  <div className="relative bg-[var(--color-charcoal)] rounded-2xl p-8 flex flex-col h-full">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-burnt-orange)] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                      Most Popular
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-sm text-gray-300 mb-6">{tier.desc}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-[var(--color-burnt-orange)]">{tier.price}</span>
                      <span className="text-sm text-gray-400 ml-1">{tier.unit}</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[var(--color-burnt-orange)] shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link href={tier.href} className="block text-center py-3.5 rounded-lg font-semibold text-sm bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white transition-colors shadow-lg shadow-[var(--color-burnt-orange)]/30">
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              ) : (
                <div key={tier.name} className="group bg-white rounded-2xl p-8 border border-gray-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-lg font-bold text-[var(--color-charcoal)] mb-2">{tier.name}</h3>
                  <p className="text-sm text-[var(--color-gray-mid)] mb-6">{tier.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[var(--color-charcoal)]">{tier.price}</span>
                    {tier.unit && <span className="text-sm text-[var(--color-text-light)] ml-1">{tier.unit}</span>}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--color-gray-mid)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-burnt-orange)] shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href={tier.href} className="block text-center py-3.5 rounded-lg font-semibold text-sm border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white transition-colors">
                    {tier.cta}
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="relative py-20 lg:py-28 bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Extras</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-4">
              Add-Ons & Extras
            </h2>
            <p className="text-gray-400">
              Additional options available with any plan.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            {addOns.map((a, i) => (
              <div
                key={a.item}
                className={`flex items-center justify-between px-6 py-4 ${
                  i < addOns.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <span className="text-white text-sm font-medium">
                  {a.item}
                </span>
                <span className="text-[var(--color-burnt-orange)] text-sm font-semibold whitespace-nowrap ml-4">
                  {a.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Price Guarantee */}
      <section className="relative py-20 lg:py-28 bg-[var(--color-burnt-orange)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-burnt-orange)] via-[var(--color-burnt-orange-dark)] to-[var(--color-burnt-orange)]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Best Price Guarantee
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            If you receive a lower quote from another NICET IV certified firm
            for the same scope of work, send it over. We will match it or beat
            it.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-white text-[var(--color-burnt-orange)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Get a Quote <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal)]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-burnt-orange)]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[var(--color-burnt-orange)]/20 border border-[var(--color-burnt-orange)]/30 rounded-full px-5 py-1.5 mb-6">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold">Limited Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Your First Plan Is on Us
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Qualifying clients get their first fire alarm design at no cost. A
            real, sealed, inspection-ready set of plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg shadow-[var(--color-burnt-orange)]/30">
              Claim Your Free Plan <ChevronRight className="w-5 h-5 ml-2" />
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
