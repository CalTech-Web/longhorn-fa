import Link from "next/link";
import { CheckCircle, ChevronRight, Target, Eye, Award, Users, Clock, Shield, Phone } from "lucide-react";
import type { Metadata } from "next";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: "About Longhorn Fire Alarm Design | NICET IV Certified Since 2000",
  description: "Longhorn Fire Alarm Design has specialized in fire alarm system design since 2000. NICET IV certified, Texas licensed, with 2,000+ projects completed for contractors, engineers, and architects nationwide.",
  alternates: {
    canonical: "https://longhornfirealarmdesign.com/about",
  },
};

const values = [
  { icon: Award, title: "NICET IV Certified", desc: "Level IV is the top of the NICET scale. Most fire alarm shops credential at Level II or III. That gap shows when a complex plan hits review." },
  { icon: Shield, title: "Texas Licensed", desc: "All plans are stamped by Texas-licensed professionals. That seal is what building departments require at permit submission." },
  { icon: Clock, title: "5-Day Turnaround", desc: "Send us the project files Monday. Stamped PDFs by Friday. Projects up to 350 devices. Expedited service when the schedule won't hold." },
  { icon: Users, title: "Full-Service Partner", desc: "Bid prep, permit docs, AHJ response coordination. We stay with the project until the permit comes through, not just until the drawing is done." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] py-20 lg:py-28 overflow-hidden">
        <HeroBackground variant="drafting" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">Built on Experience. Driven by Precision.</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fire alarm design only, since 2000. NICET IV certified, Texas licensed, and 2,000+ projects into a very specific specialty.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-burnt-orange)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mt-3 mb-6">Who We Are</h2>
              <p className="text-[var(--color-gray-mid)] leading-relaxed mb-6">
                Longhorn has been doing one thing since 2000. Designing fire alarm systems. Not MEP packages. Not general engineering. Just fire alarm. That focus means 25 years of repetition on the details that matter, from conductor sizing to AHJ submission requirements.
              </p>
              <p className="text-[var(--color-gray-mid)] leading-relaxed mb-8">
                Over 2,000 projects completed. Office towers, hospital wings, new construction, and full retrofits. The common thread is plans that are sealed, code-compliant, and ready for permit submission without a revision cycle.
              </p>
              <div className="space-y-3">
                {[
                  "Specialized in fire alarm system design only",
                  "Over 2,000 projects completed",
                  "Serving contractors, architects, and engineers nationwide",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-[var(--color-burnt-orange)] flex-shrink-0" />
                    <span className="text-[var(--color-charcoal)] font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "25+", label: "Years Experience" },
                { value: "2,000+", label: "Projects Done" },
                { value: "5", label: "Day Turnaround" },
                { value: "IV", label: "NICET Level" },
              ].map((s, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--color-burnt-orange)] to-[var(--color-burnt-orange-dark)] rounded-xl blur opacity-20 group-hover:opacity-30 transition" />
                  <div className="relative bg-[var(--color-charcoal)] rounded-xl p-8 text-center">
                    <div className="text-4xl font-bold text-[var(--color-burnt-orange)] mb-2">{s.value}</div>
                    <div className="text-white text-sm">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Goal */}
      <section className="relative py-20 lg:py-28 bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-10 border border-white/10 hover:border-[var(--color-burnt-orange)]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-10 w-12 h-1 bg-[var(--color-burnt-orange)] rounded-b" />
              <div className="w-12 h-12 bg-[var(--color-burnt-orange)]/15 rounded-lg flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[var(--color-burnt-orange)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                Life safety is the job. Every plan we produce is designed to protect the people who occupy buildings they may never think twice about. Our work only holds up if it passes inspection and performs on the day it matters.
              </p>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-10 border border-white/10 hover:border-[var(--color-burnt-orange)]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-10 w-12 h-1 bg-[var(--color-burnt-orange)] rounded-b" />
              <div className="w-12 h-12 bg-[var(--color-burnt-orange)]/15 rounded-lg flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-[var(--color-burnt-orange)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Goal</h3>
              <p className="text-gray-400 leading-relaxed">
                Fast turnaround, accurate plans, flat fees. We measure success by how quickly your permit comes through and how rarely you need to call us about a revision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-burnt-orange)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl font-bold text-[var(--color-charcoal)] mt-3 mb-4">Why Clients Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[var(--color-burnt-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[var(--color-burnt-orange)]/20 transition-colors">
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
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal)]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-burnt-orange)]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[var(--color-burnt-orange)]/20 border border-[var(--color-burnt-orange)]/30 rounded-full px-5 py-1.5 mb-6">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold">First Plan Free</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Get your first qualifying fire alarm design at no cost.</p>
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
