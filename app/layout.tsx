import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SentiBay Consulting | AWS Cloud Training & Consulting",
  description: "Technology training and cloud consulting for professionals and teams worldwide. AWS certification prep, corporate training, and cloud architecture consulting delivered globally by AWS Authorized Instructors.",
  metadataBase: new URL("https://sentibay.com"),
  openGraph: {
    title: "SentiBay Consulting | AWS Cloud Training & Consulting",
    description: "Technology training and cloud consulting for professionals and teams worldwide.",
    url: "https://sentibay.com",
    siteName: "SentiBay Consulting",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LRTNCFT7TS" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LRTNCFT7TS');`}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen bg-white text-[#0F172A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
