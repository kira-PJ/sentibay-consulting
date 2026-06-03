import Link from "next/link";
import MissionVision from "@/components/about/MissionVision";
import LeadershipCard from "@/components/about/LeadershipCard";
import Testimonials from "@/components/home/Testimonials";
import { leadership } from "@/lib/data/leadership";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* ── Hero with Pauline's speaking photo ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0C4A6E]">
        <div className="pointer-events-none absolute inset-0">
          <div className="blob-1 absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/30 blur-[90px]" />
          <div className="blob-2 absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#059669]/20 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#059669]/15 border border-[#059669]/25 text-[#34D399] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              About Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              SentiBay Consulting
            </h1>
            <p className="text-xl text-[#60A5FA] font-medium mb-4">
              Technology training and cloud consulting for professionals and teams worldwide.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              We are committed to excellence and continuous growth. Every training session,
              every consulting engagement, and every student we work with reflects our
              belief that high standards and real results go hand in hand.
            </p>
          </div>

          {/* Pauline speaking photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[400px] lg:w-[360px] lg:h-[440px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3B82F6]/30 to-[#059669]/20 blur-2xl scale-105" />
              <img
                src="/images/pauline4.jpeg"
                alt="Pauline Namwakira, Co-Founder and Senior Technical Trainer"
                className="relative z-10 w-full h-full object-cover object-top rounded-3xl border border-white/10 shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 z-20">
                <p className="text-white font-semibold text-sm">Pauline Namwakira</p>
                <p className="text-slate-400 text-xs mt-0.5">Co-Founder &amp; Senior Technical Trainer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission and Vision ── */}
      <MissionVision />

      {/* ── Leadership ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Leadership
            </h2>
            <p className="text-slate-600 text-lg">The people behind SentiBay Consulting.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <LeadershipCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] to-[#0C4A6E] py-20 px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/20 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#059669]/15 blur-[70px]" />
        </div>
        <ScrollReveal className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Work with our team</h2>
          <p className="text-slate-300 text-lg mb-8">
            Whether you need to certify your team, build on the cloud, or both, we are ready.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#1E3A8A] font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
