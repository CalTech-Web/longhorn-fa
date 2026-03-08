import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Longhorn Fire Alarm Design",
  description: "Transparent, flat-rate fire alarm design pricing. Standard plans from $750, small projects from $500. No hidden fees or hourly rates.",
};

const plans = [
  {
    name: "Small Project",
    price: "$500",
    desc: "For smaller commercial spaces with limited device counts.",
    features: [
      "Up to 50 devices",
      "Permit-ready PDF plans",
      "NICET IV certified review",
      "Texas-licensed stamp",
      "5 business day turnaround",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard Plan",
    price: "$750",
    desc: "Our most popular option for mid-size commercial projects.",
    features: [
      "Up to 350 devices",
      "Full fire alarm layout",
      "Device placement & risers",
      "Wiring paths & battery calc",
      "NICET IV certified & stamped",
      "5 business day turnaround",
      "Permitting assistance",
      "Phone & email support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Large / Custom",
    price: "Custom",
    desc: "For complex projects with 350+ devices or special requirements.",
    features: [
      "350+ devices",
      "Custom scope & timeline",
      "Full engineering support",
      "Sealed drawings",
      "Expedited options available",
      "Dedicated project manager",
      "Submittals & permitting",
      "Priority support",
    ],
    cta: "Request a Quote",
    popular: false,
  },
];

const addons = [
  { name: "Per Device Fee", price: "$7", desc: "Per device beyond base plan allocation" },
  { name: "Cut Sheets", price: "$50", desc: "Equipment cut sheets included with plans" },
  { name: "CAD Files", price: "On Request", desc: "AutoCAD source files for your team" },
  { name: "Expedited Delivery", price: "On Request", desc: "Faster turnaround for tight deadlines" },
  { name: "Printed Copies", price: "On Request", desc: "Physical plans shipped via UPS" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-charcoal)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">Transparent, Flat-Rate Pricing</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            No hidden fees. No hourly guesswork. Choose the plan that fits your project and stay in control of your budget.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`relative rounded-2xl p-8 ${plan.popular ? "bg-[var(--color-charcoal)] text-white ring-2 ring-[var(--color-burnt-orange)] scale-105" : "bg-white border border-gray-200"}`}>
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-burnt-orange)] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-[var(--color-charcoal)]"}`}>{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-gray-300" : "text-[var(--color-gray-mid)]"}`}>{plan.desc}</p>
                <div className="mb-8">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-[var(--color-burnt-orange)]" : "text-[var(--color-charcoal)]"}`}>{plan.price}</span>
                  {plan.price !== "Custom" && <span className={`text-sm ${plan.popular ? "text-gray-400" : "text-[var(--color-text-light)]"}`}> / project</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-[var(--color-burnt-orange)]" : "text-green-500"}`} />
                      <span className={`text-sm ${plan.popular ? "text-gray-300" : "text-[var(--color-gray-mid)]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                    plan.popular
                      ? "bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white"
                      : "border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-4">Add-Ons & Extras</h2>
            <p className="text-[var(--color-gray-mid)]">Customize your plan with affordable add-ons.</p>
          </div>
          <div className="space-y-4">
            {addons.map((a, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex items-center justify-between border border-gray-100">
                <div>
                  <h3 className="font-semibold text-[var(--color-charcoal)]">{a.name}</h3>
                  <p className="text-sm text-[var(--color-gray-mid)]">{a.desc}</p>
                </div>
                <span className="text-[var(--color-burnt-orange)] font-bold text-lg whitespace-nowrap ml-4">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-[var(--color-charcoal)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">First Plan Free for Qualifying Clients</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We stand by our work. See the value of our designs before committing to more. Plus, we offer a best price guarantee on every project.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Get Your Free Plan <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
