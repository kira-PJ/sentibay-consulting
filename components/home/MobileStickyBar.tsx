"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MobileStickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-lg">
      <Link
        href="/consulting"
        className="flex items-center justify-center gap-2 w-full bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
      >
        Get Started <ArrowRight size={14} />
      </Link>
    </div>
  );
}
