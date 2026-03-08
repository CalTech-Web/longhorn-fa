import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Longhorn Fire Alarm Design | Stamped Plans. Flat Fees. No Delays.",
  description:
    "Texas-based fire alarm system design firm with 25+ years of experience. NICET IV certified, sealed plans delivered in 5 business days. Flat-rate pricing.",
  keywords: "fire alarm design, fire alarm plans, NICET IV, Texas fire alarm, permit-ready plans, fire alarm system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
