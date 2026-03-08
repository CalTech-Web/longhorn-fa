import Link from "next/link";
import {
  Shield,
  Award,
  Clock,
  DollarSign,
  Briefcase,
  Gift,
  Flame,
  FileCheck,
  Handshake,
  Settings,
  BookCheck,
  FileText,
  CheckCircle,
  ChevronRight,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Over 25 Years of Experience",
    desc: "All plans are reviewed and sealed by certified professionals, ensuring full compliance with state and local requirements.",
  },
  {
    icon: Award,
    title: "NICET IV Certified & TX Licensed",
    desc: "All plans are reviewed and sealed by certified professionals, ensuring full compliance with state and local requirements.",
  },
  {
    icon: Clock,
    title: "Fast, Predictable Turnaround",
    desc: "We complete most projects within five business days. Need it sooner? We offer expedited services to meet tight deadlines.",
  },
  {
    icon: DollarSign,
    title: "Straightforward Pricing",
    desc: "No hidden fees. No hourly guesswork. Flat-rate packages, affordable add-ons, and a best price guarantee.",
  },
  {
    icon: Briefcase,
    title: "Full-Service Project Support",
    desc: "From estimating and sales assistance to submittals and permitting, we are your partner through every phase of the project.",
  },
  {
    icon: Gift,
    title: "First Plan Free",
    desc: "We stand by our work. Your first qualifying fire alarm design is at no cost so you can see the value before committing.",
  },
];

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

const faqs = [
  {
    q: "How long does it take to complete a fire alarm design?",
    a: "Most projects with 350 devices or less are completed within 5 business days. Expedited services are also available upon request.",
  },
  {
    q: "Are you licensed to stamp fire alarm plans?",
    a: "Yes. Our designs are stamped by Texas-licensed professionals and reviewed by a NICET IV certified engineer.",
  },
  {
    q: "Do you serve areas outside of Texas?",
    a: "Absolutely. While we are licensed to stamp plans in Texas, we provide design services nationwide and follow each state's local codes.",
  },
  {
    q: "How much does a typical fire alarm design cost?",
    a: "Standard plans start at $750, with add-ons like $7 per device and $50 for cut sheets. We also offer a $500 option for small projects.",
  },
  {
    q: "Do you charge hourly rates?",
    a: "No. We believe in transparent, flat-rate pricing so you can control costs and avoid unexpected fees.",
  },
  {
    q: "What file formats do you deliver?",
    a: "We provide electronic plans in PDF format. CAD files are available upon request, and UPS shipping is available for printed copies.",
  },
];

const steps = [
  {
    title: "Initial Contact",
    desc: "Reach out with your project details and scope. We respond quickly and ask the right questions.",
  },
  {
    title: "Estimating",
    desc: "Receive a flat-rate quote based on project size. No hourly rates, no surprises.",
  },
  {
    title: "Design",
    desc: "Full fire alarm layout with device placement, risers, wiring paths, and battery calculations.",
  },
  {
    title: "Review & Stamp",
    desc: "Plans reviewed and sealed by our NICET IV certified, Texas-licensed professionals.",
  },
  {
    title: "Delivery",
    desc: "Permit-ready plans delivered in PDF format within 5 business days.",
  },
];

const stats = [
  { value: "25+", label: "Years Experience", sub: "Delivering precise, code-compliant designs for every type of facility" },
  { value: "2,000+", label: "Projects Completed", sub: "From office towers to hospitals, our plans get permits approved" },
  { value: "5 Days", label: "Standard Turnaround", sub: "Most projects completed in 5 business days or less" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal)]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-block bg-[var(--color-burnt-orange)] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Stamped Plans. Flat Fees. No Delays.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Longhorn Fire Alarm Design
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              We deliver sealed, inspection-ready fire alarm plans in just 5 business days. Built for contractors, engineers, and architects who need it done right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors">
                Contact Us <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <a href="tel:+15125890509" className="inline-flex items-center justify-center border-2 border-gray-500 hover:border-white text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors">
                <Phone className="w-5 h-5 mr-2" /> +1.512.589.0509
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] mb-4">Why Choose Longhorn</h2>
            <p className="text-[var(--color-gray-mid)] text-lg">Built on experience. Driven by precision. Trusted across Texas and beyond.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-[var(--color-burnt-orange)] bg-opacity-10 rounded-lg flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-[var(--color-burnt-orange)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-3">{f.title}</h3>
                <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">About Longhorn</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] mt-3 mb-6">
                Built on Experience. Driven by Precision.
              </h2>
              <p className="text-[var(--color-gray-mid)] leading-relaxed mb-8">
                Longhorn Fire Alarm Design is a specialized fire alarm system design firm with over two decades of combined experience in life safety engineering. We serve contractors, architects, and engineers with fast, code-compliant designs backed by NICET IV certification and a Texas professional license.
              </p>
              <p className="text-[var(--color-gray-mid)] leading-relaxed mb-8">
                From new construction to complex retrofits, our mission is simple: deliver clear, accurate, and permit-ready plans that keep your projects moving forward, on time and within budget.
              </p>
              <div className="space-y-3">
                {["Certified & Trusted Experts", "Qualified & Proven Team", "Built on 25+ Years of Experience"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-burnt-orange)] flex-shrink-0" />
                    <span className="text-[var(--color-charcoal)] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--color-charcoal)] rounded-2xl p-10 lg:p-14">
              <h3 className="text-2xl font-bold text-white mb-6">What Sets Longhorn Apart</h3>
              <div className="space-y-4">
                {[
                  "NICET IV Certified Designers",
                  "Free Sales Support for Contractors",
                  "Built for New Installs & Retrofits",
                  "Fast Turnaround with No Hourly Rates",
                  "100% Code-Compliant Drawings",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-burnt-orange)] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center mt-8 text-[var(--color-burnt-orange)] font-semibold text-sm hover:underline">
                Learn More About Us <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] mt-3 mb-4">Fire Alarm Design Services</h2>
            <p className="text-[var(--color-gray-mid)] text-lg">Comprehensive design solutions for every phase of your project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-[var(--color-burnt-orange)]">
                <div className="w-12 h-12 bg-[var(--color-burnt-orange)] rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-burnt-orange)] transition-colors">{s.title}</h3>
                <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-[var(--color-burnt-orange)] text-sm font-semibold flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] mt-3 mb-4">How It Works</h2>
            <p className="text-[var(--color-gray-mid)] text-lg">From your first call to permit-ready plans in five straightforward steps.</p>
          </div>
          <div className="relative">
            {/* Connector line desktop */}
            <div className="hidden lg:block absolute top-8 bg-gray-200 h-0.5 z-0" style={{ left: "10%", right: "10%" }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-burnt-orange)] flex items-center justify-center text-white text-xl font-bold mb-5 shadow-md ring-4 ring-white">
                    {i + 1}
                  </div>
                  <h3 className="text-[var(--color-charcoal)] font-semibold mb-2">{step.title}</h3>
                  <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-14">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors">
              Start Your Project <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Built for Speed & Compliance</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">The Numbers Speak for Themselves</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-[var(--color-burnt-orange)] mb-3">{s.value}</div>
                <div className="text-white font-semibold text-lg mb-2">{s.label}</div>
                <p className="text-gray-400 text-sm">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/pricing" className="inline-flex items-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors">
              Get Pricing <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] mt-3">Quick Answers to Common Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-[var(--color-burnt-orange)] transition-colors">
                <h3 className="text-[var(--color-charcoal)] font-semibold mb-2">{f.q}</h3>
                <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-[var(--color-burnt-orange)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Get your first qualifying fire alarm design at no cost. See the quality of our work before committing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="inline-flex items-center justify-center bg-white text-[var(--color-burnt-orange)] px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors">
              View Pricing
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
