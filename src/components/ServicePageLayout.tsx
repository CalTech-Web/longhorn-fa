import Link from "next/link";
import { CheckCircle, ChevronRight, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";

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
      <section className="bg-[var(--color-charcoal)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-[var(--color-burnt-orange)] rounded-xl flex items-center justify-center mb-6">
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
                className="inline-flex items-center justify-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
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
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-10">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
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
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-10">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-burnt-orange)] flex items-center justify-center text-white font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                    {p.step}
                  </h3>
                  <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed">
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
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <FaqAccordion items={faqs} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[var(--color-charcoal)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8">
            Send us your project details for a flat-rate quote within one
            business day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
