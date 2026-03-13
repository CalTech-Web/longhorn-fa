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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rajdhani.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
