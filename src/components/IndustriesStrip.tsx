"use client";

const industries = [
  "Office Towers",
  "Hospitals",
  "New Construction",
  "Retrofit Projects",
  "General Commercial",
];

export default function IndustriesStrip() {
  return (
    <section className="bg-white border-b border-gray-100 py-5 overflow-hidden">
      <div className="flex items-center">
        <div className="shrink-0 pl-4 sm:pl-6 lg:pl-8 pr-6 flex items-center gap-4 z-10 bg-white">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gray-mid)] whitespace-nowrap">
            Industries Served
          </span>
          <div className="hidden sm:block w-px h-4 bg-gray-300" />
        </div>
        <div className="relative overflow-hidden flex-1 mask-fade">
          <div className="flex animate-marquee w-max">
            {[...industries, ...industries].map((industry, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] whitespace-nowrap px-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-burnt-orange)] shrink-0 animate-blink" />
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
