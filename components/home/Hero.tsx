import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] bg-[#0a0f2e] text-white overflow-hidden flex items-center">

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block bg-accent/20 border border-accent/30 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            AWS Training and Consulting
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Cloud Training for Teams<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              that mean business.
            </span>
          </h1>
          <p className="text-blue-100/80 text-xl leading-relaxed mb-10 max-w-2xl">
            KiraTechHub delivers AWS training, certification prep, and cloud consulting
            for individuals and organizations across Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/training"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
              Explore Training <ArrowRight size={16} />
            </Link>
            <Link href="/consulting"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              Work With Us
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10">
            {[
              { value: "500+", label: "Professionals Trained" },
              { value: "9", label: "AWS Certifications" },
              { value: "100%", label: "Pass Rate" },
              { value: "5+", label: "Industries Served" },
            ].map(({ value, label }) => (
              <div key={label} className="group">
                <div className="text-3xl font-extrabold text-white group-hover:text-accent transition-colors duration-300">{value}</div>
                <div className="text-sm text-blue-300 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
