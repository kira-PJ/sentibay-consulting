"use client";
import { useState, useEffect } from "react";
import { testimonials } from "@/lib/data/testimonials";
import { Star, ChevronLeft, ChevronRight, GraduationCap, Briefcase } from "lucide-react";

export default function Testimonials() {
  const [tab, setTab] = useState<"training" | "consulting">("training");
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const filtered = testimonials.filter((t) => t.type === tab);

  // Reset to first when tab changes
  useEffect(() => { setCurrent(0); }, [tab]);

  useEffect(() => {
    if (paused || filtered.length <= 1) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % filtered.length), 5000);
    return () => clearInterval(timer);
  }, [paused, filtered.length, tab]);

  const prev = () => setCurrent((c) => (c - 1 + filtered.length) % filtered.length);
  const next = () => setCurrent((c) => (c + 1) % filtered.length);
  const t = filtered[current];

  if (!t) return null;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            What Our Clients Say
          </h2>

          {/* Tab switcher */}
          <div className="inline-flex bg-slate-100 rounded-xl p-1 gap-1">
            <button
              onClick={() => setTab("training")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                tab === "training"
                  ? "bg-white text-[#1E3A8A] shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <GraduationCap size={15} />
              Training
            </button>
            <button
              onClick={() => setTab("consulting")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                tab === "consulting"
                  ? "bg-white text-[#1E3A8A] shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Briefcase size={15} />
              Consulting
            </button>
          </div>
        </div>

        {/* Rating badge — training only */}
        {tab === "training" && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-800 font-semibold text-sm">4.9</span>
              <span className="text-slate-500 text-sm">average rating</span>
            </div>
          </div>
        )}

        {/* Upwork badge — consulting only */}
        {tab === "consulting" && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#14A800]/10 border border-[#14A800]/25 rounded-full px-5 py-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={13} className="fill-[#14A800] text-[#14A800]" />
                ))}
              </div>
              <span className="text-slate-800 font-semibold text-sm">5.0</span>
              <span className="text-slate-500 text-sm">on Upwork</span>
            </div>
          </div>
        )}

        {/* Quote card */}
        <div
          className="relative bg-[#F8FAFC] rounded-3xl border border-gray-200 p-10 md:p-14 text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Decorative quote mark */}
          <div className="text-[100px] leading-none text-[#1E3A8A]/8 font-serif absolute top-4 left-8 select-none pointer-events-none">
            &ldquo;
          </div>

          <p className="relative z-10 text-lg md:text-xl text-slate-700 leading-relaxed font-light mb-8 min-h-[80px]">
            {t.quote}
          </p>

          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="font-semibold text-slate-900">{t.name}</p>
            {t.company && (
              <p className="text-[#059669] text-sm font-medium">{t.company}</p>
            )}
            <p className="text-[#3B82F6] text-sm">{t.role}</p>
          </div>
        </div>

        {/* Controls — only show if more than 1 */}
        {filtered.length > 1 && (
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-[#1E3A8A]"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
