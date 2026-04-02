import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KiraTech Hub | AWS Cloud Training & Consulting",
  description:
    "Expert AWS cloud training, certification prep, and consulting services by Pauline Namwakira — AWS Authorized Instructor & Cloud Solutions Architect.",
  keywords: ["AWS training", "cloud consulting", "AWS certification", "KiraTech"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
