import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
