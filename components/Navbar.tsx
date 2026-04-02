"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/training", label: "Corporate Training" },
  { href: "/projects", label: "Projects" },
  { href: "/consulting", label: "Consulting" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="KiraTechHub" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/consulting"
            className="bg-accent text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-primary transition-colors">
            Work With Me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-muted" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted hover:text-primary">
              {l.label}
            </Link>
          ))}
          <Link href="/consulting" onClick={() => setOpen(false)}
            className="bg-accent text-white text-sm font-semibold px-5 py-2 rounded-lg text-center">
            Work With Me
          </Link>
        </div>
      )}
    </nav>
  );
}
