"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import type { Metadata } from "next";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1.512.589.0509", href: "tel:+15125890509" },
  { icon: Mail, label: "Email", value: "dhasselberg@longhornfirealarmdesign.com", href: "mailto:dhasselberg@longhornfirealarmdesign.com" },
  { icon: Clock, label: "Turnaround", value: "5 Business Days Standard", href: null },
  { icon: MapPin, label: "Service Area", value: "Texas Licensed, Nationwide Service", href: null },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-charcoal)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--color-burnt-orange)] text-sm font-semibold uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">Get in Touch</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ready to get started on your fire alarm design project? Reach out and we will get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <input type="text" id="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Last Name *</label>
                      <input type="text" id="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Email *</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Phone</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Company</label>
                    <input type="text" id="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition" />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">Project Type</label>
                    <select id="projectType" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition bg-white">
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
                    <textarea id="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:border-transparent outline-none transition resize-none" />
                  </div>
                  <button type="submit" className="w-full sm:w-auto bg-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange-dark)] text-white px-10 py-4 rounded-lg font-semibold transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-burnt-orange)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
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
              <div className="mt-10 bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="font-semibold text-[var(--color-charcoal)] mb-3">First Plan Free</h3>
                <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">
                  Qualifying clients receive their first fire alarm design at no cost. Mention this offer when you reach out and we will take care of the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
