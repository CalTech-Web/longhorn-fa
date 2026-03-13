import Image from "next/image";
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
import FaqAccordion from "@/components/FaqAccordion";
import IndustriesStrip from "@/components/IndustriesStrip";

const features = [
  {
    icon: Shield,
    title: "Over 25 Years of Experience",
    desc: "Founded in 2000. More than 2,000 projects completed since then. That kind of repetition builds an instinct for catching problems before the AHJ does.",
  },
  {
    icon: Award,
    title: "NICET IV Certified & TX Licensed",
    desc: "NICET Level IV is the top tier in the field. Our Texas professional license is the signature on every set of stamped plans we deliver.",
  },
  {
    icon: Clock,
    title: "Fast, Predictable Turnaround",
    desc: "Five business days for most projects up to 350 devices. If you are on a tighter timeline, expedited service is available.",
  },
  {
    icon: DollarSign,
    title: "Straightforward Pricing",
    desc: "No hourly billing. No surprise invoices. Every project starts with a flat quote, backed by our best price guarantee.",
  },
  {
    icon: Briefcase,
    title: "Full-Service Project Support",
    desc: "We stay in from estimating through permit approval. Sales support, submittals, and revision responses are all part of the deal.",
  },
  {
    icon: Gift,
    title: "First Plan Free",
    desc: "Your first qualifying design is free. Not a trial. A real, sealed, inspection-ready set of plans so you can judge the work before committing.",
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


const steps = [
  {
    title: "Initial Contact",
    desc: "Send us the project scope and floor plans. We ask what we need to build an accurate quote.",
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
  { value: "25+", label: "Years Experience", sub: "Fire alarm only, since 2000. That single focus shows in the details." },
  { value: "2,000+", label: "Projects Completed", sub: "Office towers, hospital wings, new builds, full retrofits. Most pass on first review." },
  { value: "5 Days", label: "Standard Turnaround", sub: "Projects up to 350 devices. Expedited service when the schedule runs tight." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to complete a fire alarm design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Projects up to 350 devices typically come back in five business days. If your schedule is tighter than that, we have expedited options.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed to stamp fire alarm plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every set of drawings is stamped by a Texas-licensed professional and reviewed by a NICET IV certified engineer before it leaves our office.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve areas outside of Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide design services nationwide. The stamp is Texas, but we work to each state's local codes for projects across the country.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a typical fire alarm design cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small projects start at $500. Standard plans start at $750, with add-ons at $7 per device and $50 for cut sheets. Every quote is flat-rate before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge hourly rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No hourly billing, ever. You get a flat quote before we start, and that is the number on your invoice.",
      },
    },
    {
      "@type": "Question",
      name: "What file formats do you deliver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard delivery is PDF. CAD files are available on request. Printed copies can ship via UPS if you need them.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal)]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <span className="inline-block bg-[var(--color-burnt-orange)] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Stamped Plans. Flat Fees. No Delays.
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Longhorn Fire Alarm Design
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                Sealed, inspection-ready plans in five business days. Flat-rate pricing, no hourly billing, and your first qualifying design at no cost.
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

            {/* Stacked Browser Cards */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-[480px] h-[380px]">
                {/* Card 1 — Back (top-left, peeking out) */}
                <div
                  className="absolute w-[420px] h-[300px] rounded-lg overflow-hidden shadow-xl"
                  style={{ top: 0, left: 0, zIndex: 1, transform: "rotate(-4deg)" }}
                >
                  <div className="bg-[#e8e8e8] px-3 py-2 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-[10px] text-gray-500 bg-white rounded px-2 py-0.5">construction-project.com</span>
                  </div>
                  <Image src="/hero-3.jpg" alt="Construction site" width={420} height={280} className="w-full h-[calc(100%-28px)] object-cover" />
                </div>

                {/* Card 2 — Middle */}
                <div
                  className="absolute w-[420px] h-[300px] rounded-lg overflow-hidden shadow-xl"
                  style={{ top: 30, left: 25, zIndex: 2, transform: "rotate(-2deg)" }}
                >
                  <div className="bg-[#e8e8e8] px-3 py-2 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-[10px] text-gray-500 bg-white rounded px-2 py-0.5">blueprint-designs.com</span>
                  </div>
                  <Image src="/hero-2.jpg" alt="Blueprint design" width={420} height={280} className="w-full h-[calc(100%-28px)] object-cover" />
                </div>

                {/* Card 3 — Front (most prominent, bottom-right) */}
                <div
                  className="absolute w-[420px] h-[300px] rounded-lg overflow-hidden shadow-2xl"
                  style={{ top: 65, left: 50, zIndex: 3, transform: "rotate(1deg)" }}
                >
                  <div className="bg-[#e8e8e8] px-3 py-2 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-[10px] text-gray-500 bg-white rounded px-2 py-0.5">longhornfirealarmdesign.com</span>
                  </div>
                  <Image src="/hero-1.jpg" alt="Fire alarm planning" width={420} height={280} className="w-full h-[calc(100%-28px)] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Strip */}
      <IndustriesStrip />

      {/* Why Choose Us */}
      <section className="relative py-20 lg:py-28 bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Why Choose Longhorn</h2>
            <p className="text-gray-400 text-lg">25 years of fire alarm design. 2,000+ projects completed. A flat-rate model that removes billing surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[var(--color-burnt-orange)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(216,77,26,0.15)]">
                <div className="absolute top-0 left-8 w-12 h-1 bg-[var(--color-burnt-orange)] rounded-b" />
                <div className="w-12 h-12 bg-[var(--color-burnt-orange)]/15 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[var(--color-burnt-orange)]/25 transition-colors">
                  <f.icon className="w-6 h-6 text-[var(--color-burnt-orange)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
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
                Longhorn has been designing fire alarm systems since 2000. We work with contractors, architects, and engineers who need plans that pass the first time. NICET IV certified. Texas licensed. That is the credential stack behind every set of drawings we produce.
              </p>
              <p className="text-[var(--color-gray-mid)] leading-relaxed mb-8">
                New construction, retrofits, office towers, hospitals. We have seen most of it. The job is always the same. Clear, accurate, permit-ready plans delivered in five business days.
              </p>
              <div className="space-y-3">
                {["NICET IV certified, not just licensed", "Single specialty since 2000, not a generalist shop", "Texas-stamped plans accepted statewide, design work done nationwide"].map((item) => (
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
                  "5-Day Standard Turnaround, Flat-Rate Pricing",
                  "Plans Built to NFPA 72, IBC, and NEC",
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
            <p className="text-[var(--color-gray-mid)] text-lg">From preliminary bid layouts to stamped permit documents, every phase covered.</p>
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
            <p className="text-[var(--color-gray-mid)] text-lg">Send us the project, get a flat-rate quote, and receive stamped plans within five business days.</p>
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
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Track Record</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Twenty-Five Years. One Specialty.</h2>
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

      {/* Pricing Preview */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] mt-3 mb-4">Flat-Rate Plans. No Surprises.</h2>
            <p className="text-[var(--color-gray-mid)] text-lg">Flat rates starting at $500. No hourly billing, no ambiguous invoices.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col">
              <h3 className="text-lg font-bold text-[var(--color-charcoal)] mb-2">Small Project</h3>
              <p className="text-sm text-[var(--color-gray-mid)] mb-6">For smaller commercial spaces with limited device counts.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--color-charcoal)]">$500</span>
                <span className="text-sm text-[var(--color-text-light)] ml-1">/ project</span>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {["Up to 50 devices", "Permit-ready PDF plans", "NICET IV certified review", "5 business day turnaround"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-gray-mid)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-burnt-orange)] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="block text-center py-3 rounded-lg font-semibold text-sm border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white transition-colors">
                View Details
              </Link>
            </div>
            <div className="bg-[var(--color-charcoal)] rounded-2xl p-8 border-2 border-[var(--color-burnt-orange)] flex flex-col relative md:scale-105 shadow-lg">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-burnt-orange)] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Standard Plan</h3>
              <p className="text-sm text-gray-300 mb-6">Our most popular option for mid-size commercial projects.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--color-burnt-orange)]">$750</span>
                <span className="text-sm text-gray-400 ml-1">/ project</span>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {["Up to 350 devices", "Full fire alarm layout", "Device placement & risers", "Wiring paths & battery calc", "NICET IV certified & stamped", "Permitting assistance"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-burnt-orange)] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center py-3 rounded-lg font-semibold text-sm bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white transition-colors">
                Get Started
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col">
              <h3 className="text-lg font-bold text-[var(--color-charcoal)] mb-2">Large / Custom</h3>
              <p className="text-sm text-[var(--color-gray-mid)] mb-6">For complex projects with 350+ devices or special requirements.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--color-charcoal)]">Custom</span>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {["350+ devices", "Custom scope & timeline", "Full engineering support", "Expedited options available"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-gray-mid)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-burnt-orange)] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center py-3 rounded-lg font-semibold text-sm border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link href="/pricing" className="inline-flex items-center text-[var(--color-burnt-orange)] font-semibold hover:underline">
              View Full Pricing Details <ChevronRight className="w-4 h-4 ml-1" />
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
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-[var(--color-burnt-orange)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Your First Plan Is on Us</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Submit a project. We design it, stamp it, and send permit-ready PDFs in five business days. No cost for qualifying clients. If the work holds up, the next conversation is easy.
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
