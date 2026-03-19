import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Longhorn Fire Alarm Design | NICET IV Certified Fire Alarm Plans",
    template: "%s | Longhorn Fire Alarm Design",
  },
  description:
    "Sealed, inspection-ready fire alarm plans in five business days. NICET IV certified, Texas licensed. Flat-rate pricing, no hourly billing. Serving contractors nationwide since 2000.",
  metadataBase: new URL("https://longhornfirealarmdesign.com"),
  verification: { google: "AYFjBQMAmYQE_Xjk9_DIJPFMoNkTYTnnHObfMQFAQtI" },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Longhorn Fire Alarm Design",
    images: [
      {
        url: "https://longhornfirealarmdesign.com/logo.webp",
        width: 954,
        height: 701,
        alt: "Longhorn Fire Alarm Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Longhorn Fire Alarm Design",
  description:
    "NICET IV certified fire alarm system design. Sealed, inspection-ready plans in five business days. Flat-rate pricing, serving contractors nationwide since 2000.",
  url: "https://longhornfirealarmdesign.com",
  logo: "https://longhornfirealarmdesign.com/logo.webp",
  image: "https://longhornfirealarmdesign.com/logo.webp",
  telephone: "+15125890509",
  email: "dhasselberg@longhornfirealarmdesign.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$$",
  foundingDate: "2000",
  knowsAbout: [
    "Fire Alarm System Design",
    "NFPA 72",
    "Fire Alarm Permitting",
    "NICET Certification",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fire Alarm Design Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Alarm System Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Permitting Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sales Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engineering & Consulting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Code Compliance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bid Specification Writing" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rajdhani.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
