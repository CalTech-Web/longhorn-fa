import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const serviceLinks = [
  { name: "Fire Alarm System Design", href: "/services/fire-alarm-system-design" },
  { name: "Permitting Assistance", href: "/services/permitting-assistance" },
  { name: "Sales Support", href: "/services/sales-support" },
  { name: "Engineering & Consulting", href: "/services/engineering-consulting" },
  { name: "Code Compliance", href: "/services/code-compliance" },
  { name: "Bid Specifications", href: "/services/bid-specifications" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services/fire-alarm-system-design" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image src="/logo.webp" alt="Longhorn Fire Alarm Design" width={180} height={40} className="h-10 w-auto mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed">
              We specialize in precise, code-compliant fire alarm plans with fast turnaround times and expert support from start to finish.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[var(--color-burnt-orange)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[var(--color-burnt-orange)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+15125890509" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[var(--color-burnt-orange)] transition-colors">
                <Phone className="w-4 h-4 text-[var(--color-burnt-orange)]" />
                +1.512.589.0509
              </a>
              <a href="mailto:dhasselberg@longhornfirealarmdesign.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[var(--color-burnt-orange)] transition-colors">
                <Mail className="w-4 h-4 text-[var(--color-burnt-orange)]" />
                dhasselberg@longhorn...
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 Longhorn Fire Alarm Design. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
