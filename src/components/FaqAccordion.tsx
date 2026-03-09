const defaultFaqs = [
  {
    q: "How long does it take to complete a fire alarm design?",
    a: "Projects up to 350 devices typically come back in five business days. If your schedule is tighter than that, we have expedited options.",
  },
  {
    q: "Are you licensed to stamp fire alarm plans?",
    a: "Every set of drawings is stamped by a Texas-licensed professional and reviewed by a NICET IV certified engineer before it leaves our office.",
  },
  {
    q: "Do you serve areas outside of Texas?",
    a: "We provide design services nationwide. The stamp is Texas, but we work to each state's local codes for projects across the country.",
  },
  {
    q: "How much does a typical fire alarm design cost?",
    a: "Small projects start at $500. Standard plans start at $750, with add-ons at $7 per device and $50 for cut sheets. Every quote is flat-rate before work begins.",
  },
  {
    q: "Do you charge hourly rates?",
    a: "No hourly billing, ever. You get a flat quote before we start, and that is the number on your invoice.",
  },
  {
    q: "What file formats do you deliver?",
    a: "Standard delivery is PDF. CAD files are available on request. Printed copies can ship via UPS if you need them.",
  },
];

export default function FaqAccordion({ items }: { items?: { q: string; a: string }[] } = {}) {
  const faqs = items ?? defaultFaqs;
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <details
          key={i}
          className="group border border-gray-200 rounded-xl overflow-hidden open:border-[var(--color-burnt-orange)]"
        >
          <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
            <span className="font-semibold text-sm sm:text-base text-[var(--color-charcoal)] group-open:text-[var(--color-burnt-orange)]">
              {f.q}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 shrink-0 text-[var(--color-burnt-orange)] transition-transform duration-300 group-open:rotate-180"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </summary>
          <p className="px-6 pb-5 text-[var(--color-gray-mid)] text-sm leading-relaxed">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
