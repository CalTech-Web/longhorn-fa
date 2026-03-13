import type { Metadata } from "next";
import Link from "next/link";
import { Home, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-[var(--color-charcoal)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-burnt-orange)]/10 rounded-full blur-3xl" />

      <div className="relative text-center px-4 sm:px-6 lg:px-8">
        <p className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider mb-4">
          Error 404
        </p>
        <h1 className="text-8xl sm:text-9xl font-bold text-white mb-4 leading-none">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for may have been moved or no longer exists.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-gray-500 hover:border-white text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
