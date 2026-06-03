import Link from "next/link";
import { examPrepCourses } from "@/lib/data/courses";
import CertificationGroup from "@/components/courses/CertificationGroup";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Award } from "lucide-react";

const LEVEL_ORDER = ["Foundational", "Associate", "Professional", "Specialty"] as const;

const SECTION_BACKGROUNDS: Record<string, string> = {
  Foundational: "bg-white",
  Associate:    "bg-[#F0F9FF]",
  Professional: "bg-white",
  Specialty:    "bg-[#F0F9FF]",
};

export default function CoursesPage() {
  const grouped = LEVEL_ORDER.reduce<Record<string, typeof examPrepCourses>>(
    (acc, level) => {
      acc[level] = examPrepCourses.filter((c) => c.level === level);
      return acc;
    },
    {}
  );

  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0C4A6E]">
        <div className="pointer-events-none absolute inset-0">
          <div className="blob-1 absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/30 blur-[90px]" />
          <div className="blob-2 absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#059669]/20 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#059669]/15 border border-[#059669]/25 text-[#34D399] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <Award size={12} />
              12 Certifications Available
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Get AWS Certified
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              Structured exam prep for every AWS certification level. From Cloud Practitioner
              to Professional and Specialty tracks, we prepare you to pass.
            </p>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#1E3A8A] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Enroll Now <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: photo — AWS training environment */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3B82F6]/30 to-[#059669]/20 blur-2xl scale-105" />
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80&auto=format&fit=crop"
              alt="Professional studying for AWS certification on laptop"
              className="relative z-10 w-full h-64 object-cover rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── Certification groups ── */}
      {LEVEL_ORDER.map((level, i) => (
        <section key={level} className={`${SECTION_BACKGROUNDS[level]} py-14 px-6`}>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal delay={i * 50}>
              <CertificationGroup level={level} certs={grouped[level]} />
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] to-[#0C4A6E] py-20 px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/20 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#059669]/15 blur-[70px]" />
        </div>
        <ScrollReveal className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start your certification journey?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Contact us to enroll or ask about group pricing.
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
