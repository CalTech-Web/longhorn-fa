import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Shield } from "lucide-react";

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
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.webp" alt="Longhorn Fire Alarm Design" width={40} height={40} className="h-10 w-10 rounded-full" />
              <span className="text-white font-bold">Longhorn Fire Alarm</span>
            </div>
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

      {/* Best Price Guarantee, Payment & Contact */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Best Price Guarantee */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--color-burnt-orange)]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[var(--color-burnt-orange)]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Best Price Guarantee</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Find a better advertised design price and we will meet it!
                </p>
              </div>
            </div>

            {/* We Accept */}
            <div>
              <h4 className="text-white font-semibold mb-2">We Accept</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Enjoy hassle-free checkout with trusted payment methods. We support Visa, Mastercard, and American Express, making it simple and secure to get started.
              </p>
              <div className="flex items-center gap-3">
                {/* Visa */}
                <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center h-10 w-16">
                  <svg viewBox="0 0 780 500" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
                    <path d="M293.2 348.7l33.4-195.8h53.4l-33.4 195.8H293.2zm246.8-191c-10.6-4-27.2-8.3-47.9-8.3-52.8 0-90 26.6-90.2 64.7-.3 28.2 26.5 43.9 46.8 53.3 20.8 9.6 27.8 15.8 27.7 24.4-.1 13.2-16.6 19.2-32 19.2-21.4 0-32.7-3-50.3-10.2l-6.9-3.1-7.5 43.9c12.5 5.5 35.6 10.2 59.6 10.5 56.2 0 92.6-26.3 93-67.2.2-22.4-14.1-39.4-45-53.4-18.7-9.1-30.2-15.2-30.1-24.4 0-8.2 9.7-16.9 30.7-16.9 17.5-.3 30.2 3.5 40.1 7.5l4.8 2.3 7.2-42.2zm138.4-4.8h-41.3c-12.8 0-22.4 3.5-28 16.3l-79.4 179.8h56.2s9.2-24.2 11.3-29.5c6.1 0 60.8.1 68.6.1 1.6 6.9 6.5 29.4 6.5 29.4h49.7l-43.6-196.1zm-65.8 126.5c4.4-11.3 21.4-54.8 21.4-54.8-.3.5 4.4-11.4 7.1-18.8l3.6 17s10.3 47 12.5 56.6h-44.6zM317.4 152.9l-52.3 133.7-5.6-27.1c-9.7-31.3-39.9-65.2-73.7-82.2l47.9 171.2 56.6-.1 84.2-195.6h-57.1z" fill="#1A1F71"/>
                    <path d="M155.2 152.9H70.5l-.7 4c67.1 16.3 111.5 55.6 129.9 102.8L181.3 170c-3.2-12.4-12.6-16.5-26.1-17.1z" fill="#F9A533"/>
                  </svg>
                </div>
                {/* Mastercard */}
                <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center h-10 w-16">
                  <svg viewBox="0 0 780 500" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="312" cy="250" r="170" fill="#EB001B"/>
                    <circle cx="468" cy="250" r="170" fill="#F79E1B"/>
                    <path d="M390 120.8c-42.5 33.8-69.8 85.5-69.8 143.2s27.3 109.4 69.8 143.2c42.5-33.8 69.8-85.5 69.8-143.2S432.5 154.6 390 120.8z" fill="#FF5F00"/>
                  </svg>
                </div>
                {/* American Express */}
                <div className="bg-[#006FCF] rounded-md px-3 py-2 flex items-center justify-center h-10 w-16">
                  <svg viewBox="0 0 780 500" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
                    <text x="390" y="280" textAnchor="middle" fill="white" fontSize="130" fontFamily="Arial, sans-serif" fontWeight="bold">AMEX</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-3">Get in Touch</h4>
              <div className="space-y-3">
                <a href="tel:+15125890509" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[var(--color-burnt-orange)] transition-colors">
                  <Phone className="w-4 h-4 text-[var(--color-burnt-orange)] flex-shrink-0" />
                  +1.512.589.0509
                </a>
                <a href="mailto:dhasselberg@longhornfirealarmdesign.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[var(--color-burnt-orange)] transition-colors">
                  <Mail className="w-4 h-4 text-[var(--color-burnt-orange)] flex-shrink-0" />
                  dhasselberg@longhornfirealarmdesign.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 Longhorn Fire Alarm Design. All rights reserved.</p>
          <p className="text-sm text-gray-500">Built by <a href="https://caltechweb.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">CalTech Web</a>.</p>
        </div>
      </div>
    </footer>
  );
}
