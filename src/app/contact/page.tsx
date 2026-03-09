import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a flat-rate quote for your fire alarm design project. Send us your floor plans and project details, and we will respond within one business day.",
  alternates: {
    canonical: "https://longhornfirealarmdesign.com/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
