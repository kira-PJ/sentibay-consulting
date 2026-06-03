import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] to-[#0C4A6E] py-28 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="blob-1 absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/20 blur-[100px]" />
        <div className="blob-2 absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#059669]/15 blur-[90px]" />
      </div>
      <ScrollReveal className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
          Ready to get certified?
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
          Whether you are preparing for your first AWS exam, upskilling your team, or need
          cloud consulting support, we are here to help.
        </p>
        <Link
          href="/consulting"
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#1E3A8A] font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </ScrollReveal>
    </section>
  );
}
