"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Exam Prep" },
  { href: "/training", label: "Corporate Training" },
  { href: "/consulting", label: "Consulting" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        : "bg-white border-b border-gray-100"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/images/sentibaylight.png"
            alt="SentiBay Consulting"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-[#1E3A8A] px-4 py-2 rounded-lg hover:bg-slate-50 transition-all duration-150"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://learn.sentibay.com"
            className="ml-2 bg-[#059669] hover:bg-[#047857] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-150 shadow-sm hover:shadow-md hover:-translate-y-px"
          >
            Start Learning
          </a>
          <Link
            href="/consulting"
            className="ml-1 bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-150 shadow-sm hover:shadow-md hover:-translate-y-px"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-[#1E3A8A] px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://learn.sentibay.com"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#059669] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
          >
            Start Learning
          </a>
          <Link
            href="/consulting"
            onClick={() => setOpen(false)}
            className="mt-1 bg-[#1E3A8A] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
