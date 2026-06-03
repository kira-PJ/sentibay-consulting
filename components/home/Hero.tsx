import Link from "next/link";
import { ArrowRight, Users, Award, Globe, TrendingUp } from "lucide-react";
import HeroWave from "./HeroWave";
import AnimatedStat from "./AnimatedStat";

const stats = [
  { icon: Users,      value: "1,000+", label: "Students Trained" },
  { icon: Award,      value: "13",     label: "AWS Certifications" },
  { icon: TrendingUp, value: "5+",     label: "Years Experience" },
  { icon: Globe,      value: "Global", label: "Reach" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[85vh] flex flex-col justify-center">

      {/* Animated wave canvas — right side, like Stripe */}
      <HeroWave />

      {/* Very subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #1E3A8A08 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: copy ── */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E3A8A] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              Cloud Training &amp; Consulting
            </div>

            <h1 className="text-5xl lg:text-[64px] font-extrabold text-[#0F172A] leading-[1.05] tracking-tight mb-6">
              Train.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #059669 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Certify.
              </span>
              <br />
              Grow Globally.
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg">
              SentiBay Consulting prepares individuals and teams for every AWS certification.
              Live virtual training, corporate on-site programs, and cloud consulting
              delivered globally by AWS Authorized Instructors.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/consulting"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/20 hover:-translate-y-0.5"
              >
                Start Learning <ArrowRight size={16} />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                Browse Courses
              </Link>
            </div>
          </div>

          {/* ── Right: photo + floating badges ── */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[420px] lg:w-[380px] lg:h-[460px]">
              {/* Soft glow behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3B82F6]/20 to-[#059669]/15 blur-2xl scale-105" />
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=760&q=80&auto=format&fit=crop"
                alt="Professional training session"
                className="relative z-10 w-full h-full object-cover rounded-3xl border border-slate-200 shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent rounded-b-3xl z-20" />
            </div>

            {/* Floating badge 1 */}
            <div className="float absolute -left-6 top-12 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <Award className="text-[#3B82F6]" size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 leading-none mb-0.5">Certifications</p>
                <p className="text-sm font-bold text-slate-900">13 AWS Certs</p>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="float-delay absolute -right-4 bottom-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] flex items-center justify-center shrink-0">
                <Users className="text-[#059669]" size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 leading-none mb-0.5">Students</p>
                <p className="text-sm font-bold text-slate-900">1,000+ Trained</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
          {stats.map(({ icon: Icon, value, label }) => (
            <AnimatedStat
              key={label}
              value={value}
              label={label}
              icon={<Icon size={18} className="text-[#3B82F6]" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
