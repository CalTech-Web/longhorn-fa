"use client";

import { useState, useEffect, useCallback, type FormEvent } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const RECAPTCHA_SITE_KEY = "6Lcg0lErAAAAAKUjCgcFTrp2nilw3Lk89Qykn1gP";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (key: string, opts: { action: string }) => Promise<string>;
    };
  }
}

interface MathChallenge {
  token: string;
  question: string;
}

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1.512.589.0509", href: "tel:+15125890509" },
  { icon: Mail, label: "Email", value: "dhasselberg@longhornfirealarmdesign.com", href: "mailto:dhasselberg@longhornfirealarmdesign.com" },
  { icon: Clock, label: "Turnaround", value: "5 Business Days Standard", href: null },
  { icon: MapPin, label: "Service Area", value: "Texas Licensed, Nationwide Service", href: null },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [mathChallenge, setMathChallenge] = useState<MathChallenge | null>(null);
  const [mathAnswer, setMathAnswer] = useState("");

  const fetchChallenge = useCallback(async () => {
    try {
      const res = await fetch("https://forms.caltechweb.com/api/challenge");
      if (res.ok) {
        const data = await res.json();
        setMathChallenge(data);
        setMathAnswer("");
      }
    } catch {
      // Challenge fetch failed silently
    }
  }, []);

  useEffect(() => {
    // Load reCAPTCHA v3
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      window.grecaptcha.ready(() => setRecaptchaReady(true));
    };
    document.head.appendChild(script);

    // Fetch math challenge
    fetchChallenge();

    return () => {
      document.head.removeChild(script);
    };
  }, [fetchChallenge]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;

    // Check honeypot
    const honeypotValue = (form.elements.namedItem("honeypot") as HTMLInputElement)?.value;
    if (honeypotValue) {
      setSubmitting(false);
      return;
    }

    // Get reCAPTCHA token with 5s timeout
    let recaptchaToken: string | null = null;
    try {
      recaptchaToken = await Promise.race([
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact" }),
        new Promise<null>((resolve) => setTimeout(() => resolve(null), 5000)),
      ]);
    } catch {
      // reCAPTCHA failed silently
    }

    const data = {
      site: "longhornfirealarmdesign.com",
      name: `${(form.elements.namedItem("firstName") as HTMLInputElement).value} ${(form.elements.namedItem("lastName") as HTMLInputElement).value}`,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: [
        (form.elements.namedItem("phone") as HTMLInputElement).value && `Phone: ${(form.elements.namedItem("phone") as HTMLInputElement).value}`,
        (form.elements.namedItem("company") as HTMLInputElement).value && `Company: ${(form.elements.namedItem("company") as HTMLInputElement).value}`,
        (form.elements.namedItem("projectType") as HTMLSelectElement).value && `Project Type: ${(form.elements.namedItem("projectType") as HTMLSelectElement).value}`,
        (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      ].filter(Boolean).join("\n"),
      source: "contact-page" as const,
      recaptchaToken,
      honeypot: honeypotValue || "",
      mathToken: mathChallenge?.token || "",
      mathAnswer,
          turnstileToken: document.querySelector<HTMLInputElement>("[name=cf-turnstile-response]")?.value || "",
    };

    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
      fetchChallenge();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-charcoal)] py-20 lg:py-28 overflow-hidden">
        <HeroBackground variant="compass" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">Get in Touch</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Send us project details and floor plans. We will review them and respond with a flat-rate quote within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-burnt-orange)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for reaching out. We will get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition bg-white" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition bg-white" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition bg-white" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition bg-white" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Company</label>
                    <input type="text" id="company" name="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition bg-white" />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Project Type</label>
                    <select id="projectType" name="projectType" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition bg-white">
                      <option value="">Select a project type</option>
                      <option value="new-construction">New Construction</option>
                      <option value="retrofit">Retrofit</option>
                      <option value="consulting">Engineering & Consulting</option>
                      <option value="permitting">Permitting Assistance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition resize-none bg-white" />
                  </div>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Math CAPTCHA */}
                  {mathChallenge && (
                    <div>
                      <label htmlFor="mathAnswer" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                        {mathChallenge.question} *
                      </label>
                      <input
                        type="text"
                        id="mathAnswer"
                        required
                        value={mathAnswer}
                        onChange={(e) => setMathAnswer(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition bg-white"
                        placeholder="Your answer"
                        autoComplete="off"
                      />
                    </div>
                  )}

                  {error && (
                    <p className="text-red-600 text-sm">{error}</p>
                  )}
                  <div className="cf-turnstile" data-sitekey="0x4AAAAAACyyvaAYDtMSgOUI"></div>

                  <button type="submit" disabled={submitting || !recaptchaReady} className="w-full sm:w-auto bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-10 py-4 rounded-lg font-semibold transition-colors disabled:opacity-60 shadow-lg shadow-[var(--color-burnt-orange)]/30">
                    {submitting ? "Sending..." : "Send Message"}
                  </button>

                  {/* reCAPTCHA attribution */}
                  <p className="text-xs text-gray-400">
                    Protected by reCAPTCHA.{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Privacy</a>
                    {" & "}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Terms</a>
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-8">Contact Information</h2>
              <div className="space-y-5">
                {contactInfo.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-[var(--color-burnt-orange)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-[var(--color-burnt-orange)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-light)] mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-[var(--color-charcoal)] font-medium hover:text-[var(--color-burnt-orange)] transition-colors break-all">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-[var(--color-charcoal)] font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick note */}
              <div className="relative mt-8">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--color-burnt-orange)] to-[var(--color-burnt-orange-dark)] rounded-xl blur opacity-20" />
                <div className="relative bg-[var(--color-charcoal)] rounded-xl p-8">
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[var(--color-burnt-orange)] to-transparent rounded-b" />
                  <h3 className="font-semibold text-white mb-3">First Plan Free</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Qualifying clients receive their first fire alarm design at no cost. Mention it in your first message and we will apply it to your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
