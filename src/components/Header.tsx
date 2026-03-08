"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Fire Alarm System Design", href: "/services/fire-alarm-system-design" },
  { name: "Permitting Assistance", href: "/services/permitting-assistance" },
  { name: "Sales Support", href: "/services/sales-support" },
  { name: "Engineering & Consulting", href: "/services/engineering-consulting" },
  { name: "Code Compliance", href: "/services/code-compliance" },
  { name: "Bid Specifications", href: "/services/bid-specifications" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-[var(--color-charcoal)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.webp" alt="Longhorn Fire Alarm Design" width={220} height={50} className="h-12 w-auto" priority sizes="64px" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[var(--color-burnt-orange)] transition-colors text-sm font-medium">Home</Link>
            <Link href="/about" className="text-white hover:text-[var(--color-burnt-orange)] transition-colors text-sm font-medium">About</Link>
            <div className="relative group">
              <button className="text-white hover:text-[var(--color-burnt-orange)] transition-colors text-sm font-medium flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-72">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-burnt-orange)] transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/pricing" className="text-white hover:text-[var(--color-burnt-orange)] transition-colors text-sm font-medium">Pricing</Link>
            <Link href="/contact" className="text-white hover:text-[var(--color-burnt-orange)] transition-colors text-sm font-medium">Contact</Link>
            <Link href="/pricing" className="bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Get Pricing
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-charcoal-light)] border-t border-gray-700">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2.5 text-white hover:text-[var(--color-burnt-orange)] text-sm">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2.5 text-white hover:text-[var(--color-burnt-orange)] text-sm">About</Link>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full py-2.5 text-white hover:text-[var(--color-burnt-orange)] text-sm">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-300 hover:text-[var(--color-burnt-orange)] text-sm">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block py-2.5 text-white hover:text-[var(--color-burnt-orange)] text-sm">Pricing</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2.5 text-white hover:text-[var(--color-burnt-orange)] text-sm">Contact</Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block mt-3 bg-[var(--color-burnt-orange)] text-white text-center px-5 py-2.5 rounded-lg text-sm font-semibold">
              Get Pricing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
