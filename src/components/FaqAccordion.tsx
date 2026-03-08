"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden transition-colors ${
              isOpen
                ? "border-[var(--color-burnt-orange)]"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
            >
              <span className={`font-semibold text-sm sm:text-base transition-colors ${isOpen ? "text-[var(--color-burnt-orange)]" : "text-[var(--color-charcoal)] group-hover:text-[var(--color-burnt-orange)]"}`}>
                {f.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-[var(--color-burnt-orange)] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-5 text-[var(--color-gray-mid)] text-sm leading-relaxed">
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
