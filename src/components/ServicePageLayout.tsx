import Link from "next/link";
import { CheckCircle, ChevronRight, type LucideIcon } from "lucide-react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  details: string[];
  icon: LucideIcon;
}

export default function ServicePageLayout({ title, subtitle, description, features, details, icon: Icon }: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-charcoal)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-14 h-14 bg-[var(--color-burnt-orange)] rounded-xl flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">{subtitle}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">{title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-6">What We Deliver</h2>
              <div className="space-y-4">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-burnt-orange)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-gray-mid)] leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-6">Why It Matters</h2>
              <div className="space-y-4">
                {details.map((d) => (
                  <div key={d} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-burnt-orange)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-gray-mid)] leading-relaxed">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-4">Ready to Get Started?</h2>
          <p className="text-[var(--color-gray-mid)] mb-8">Contact us today for a free quote on your next fire alarm project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Us <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-charcoal)] hover:text-white transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
