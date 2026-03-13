import Link from "next/link";
import { CheckCircle, ChevronRight, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import HeroBackground from "@/components/HeroBackground";

interface ServicePageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  process?: { step: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}

export default function ServicePageLayout({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  process,
  faqs,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] py-20 lg:py-28 overflow-hidden">
        <HeroBackground variant="schematic" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-[var(--color-burnt-orange)] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-burnt-orange)]/20">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">
              {subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
              {title}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors shadow-lg shadow-[var(--color-burnt-orange)]/30"
              >
                Get a Quote <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+15125890509"
                className="inline-flex items-center justify-center border-2 border-gray-500 hover:border-white text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" /> +1.512.589.0509
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-burnt-orange)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">What You Get</span>
          <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mt-3 mb-10">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-[var(--color-burnt-orange)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-charcoal)] text-sm leading-relaxed">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {process && process.length > 0 && (
        <section className="relative py-20 lg:py-28 bg-[var(--color-charcoal)] overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-10">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((p, i) => (
                <div key={i} className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[var(--color-burnt-orange)]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-burnt-orange)] flex items-center justify-center text-white font-bold text-sm mb-4 shadow-lg shadow-[var(--color-burnt-orange)]/20">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {p.step}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="relative py-20 lg:py-28 bg-[var(--color-charcoal)] overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-burnt-orange)]/10 rounded-full blur-3xl -translate-y-1/2" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl font-bold text-white mt-3">
                Frequently Asked Questions
              </h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal)]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-burnt-orange)]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[var(--color-burnt-orange)]/20 border border-[var(--color-burnt-orange)]/30 rounded-full px-5 py-1.5 mb-6">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold">Get Started Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Send us your project details for a flat-rate quote within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg shadow-[var(--color-burnt-orange)]/30"
            >
              Contact Us <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+15125890509"
              className="inline-flex items-center justify-center border-2 border-gray-500 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" /> +1.512.589.0509
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
