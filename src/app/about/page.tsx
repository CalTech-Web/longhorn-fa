import Link from "next/link";
import { CheckCircle, ChevronRight, Target, Eye, Award, Users, Clock, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Longhorn Fire Alarm Design",
  description: "Learn about Longhorn Fire Alarm Design, a specialized fire alarm system design firm with 25+ years of experience and NICET IV certification.",
};

const values = [
  { icon: Award, title: "NICET IV Certified", desc: "Our designers hold the highest level of NICET certification in fire alarm systems." },
  { icon: Shield, title: "Texas Licensed", desc: "All plans are stamped by Texas-licensed professionals for full regulatory compliance." },
  { icon: Clock, title: "5-Day Turnaround", desc: "Most projects are completed within 5 business days, with expedited options available." },
  { icon: Users, title: "Full-Service Partner", desc: "We support every phase from estimating and sales assistance to submittals and permitting." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-charcoal)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">Built on Experience. Driven by Precision.</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Trusted across Texas and beyond for over 25 years. We deliver code-compliant fire alarm designs that keep your projects on track.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-6">Who We Are</h2>
              <p className="text-[var(--color-gray-mid)] leading-relaxed mb-6">
                Longhorn Fire Alarm Design is a specialized fire alarm system design firm with over two decades of combined experience in life safety engineering. We serve contractors, architects, and engineers with fast, code-compliant designs backed by NICET IV certification and a Texas professional license.
              </p>
              <p className="text-[var(--color-gray-mid)] leading-relaxed mb-8">
                From new construction to complex retrofits, our mission is simple: deliver clear, accurate, and permit-ready plans that keep your projects moving forward, on time and within budget. We have completed over 2,000 projects ranging from office towers to hospitals.
              </p>
              <div className="space-y-3">
                {[
                  "Specialized in fire alarm system design only",
                  "Over 2,000 projects completed",
                  "Serving contractors, architects, and engineers nationwide",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-burnt-orange)] flex-shrink-0" />
                    <span className="text-[var(--color-charcoal)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[var(--color-charcoal)] rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-[var(--color-burnt-orange)] mb-2">25+</div>
                <div className="text-white text-sm">Years Experience</div>
              </div>
              <div className="bg-[var(--color-charcoal)] rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-[var(--color-burnt-orange)] mb-2">2,000+</div>
                <div className="text-white text-sm">Projects Done</div>
              </div>
              <div className="bg-[var(--color-charcoal)] rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-[var(--color-burnt-orange)] mb-2">5</div>
                <div className="text-white text-sm">Day Turnaround</div>
              </div>
              <div className="bg-[var(--color-charcoal)] rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-[var(--color-burnt-orange)] mb-2">IV</div>
                <div className="text-white text-sm">NICET Level</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Goal */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[var(--color-burnt-orange)] rounded-lg flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-4">Our Mission</h3>
              <p className="text-[var(--color-gray-mid)] leading-relaxed">
                To enhance life safety with advanced fire alarm systems, expert engineering, and top-notch services. We strive to save lives with innovative, code-compliant designs, offering cost-effective solutions that meet client needs and streamline projects.
              </p>
            </div>
            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[var(--color-burnt-orange)] rounded-lg flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-4">Our Goal</h3>
              <p className="text-[var(--color-gray-mid)] leading-relaxed">
                Deliver fast, accurate, and affordable fire alarm design solutions with the highest level of professionalism and project support, from first draft to permit approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mb-4">Why Clients Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-[var(--color-burnt-orange)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-[var(--color-burnt-orange)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">{v.title}</h3>
                <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-charcoal)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-gray-300 mb-8">Get your first qualifying fire alarm design at no cost.</p>
          <Link href="/contact" className="inline-flex items-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Contact Us <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
