import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "SentiBay | Self-Paced AWS Cloud Courses",
  description: "Learn AWS at your own pace with structured, recorded courses taught by an AWS Authorized Instructor with 13 certifications. From Cloud Practitioner to Professional level.",
  metadataBase: new URL("https://sentibay.com"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "SentiBay | Self-Paced AWS Cloud Courses",
    description: "Learn AWS at your own pace with structured, recorded courses taught by an AWS Authorized Instructor with 13 certifications.",
    url: "https://sentibay.com",
    siteName: "SentiBay",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "SentiBay",
              url: "https://sentibay.com",
              logo: "https://sentibay.com/images/sentibaylight.png",
              description: "Self-paced AWS cloud courses and certification prep taught by an AWS Authorized Instructor.",
              founder: {
                "@type": "Person",
                name: "Pauline Namwakira",
                jobTitle: "AWS Authorized Instructor & Cloud Solutions Architect",
              },
              areaServed: "Global",
              knowsAbout: ["AWS", "Cloud Computing", "AWS Certification Training", "Cloud Architecture", "Generative AI"],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@sentibay.com",
                telephone: "+254792730128",
                contactType: "customer service",
              },
            }),
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LRTNCFT7TS" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LRTNCFT7TS');`}
        </Script>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-[#0F172A]`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
