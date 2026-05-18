import Link from "next/link";
import { Youtube, Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <img
                src="/images/sentibaydark.png"
                alt="SentiBay Consulting"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Technology training and cloud consulting for professionals and teams worldwide.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.youtube.com/@kiratechhub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/paulinenamwakira/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/courses", label: "Exam Prep Courses" },
                { href: "/training", label: "Corporate Training" },
                { href: "/consulting", label: "Consulting" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>AWS Certification Prep</li>
              <li>Corporate Cloud Training</li>
              <li>Cloud Consulting</li>
              <li>Generative AI on AWS</li>
            </ul>

            <h3 className="text-white font-semibold text-sm mt-8 mb-4">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:hello@sentibay.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={14} className="shrink-0" />
                  hello@sentibay.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254792730128"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone size={14} className="shrink-0" />
                  +254 792 730 128
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} SentiBay Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
