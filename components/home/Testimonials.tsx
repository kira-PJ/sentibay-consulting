"use client";
import { useState, useEffect } from "react";
import { testimonials } from "@/lib/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 px-6 bg-[#0a0f2e] text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Student Feedback</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">What Learners Say</h2>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => <Star key={s} size={14} className="fill-amber-400 text-amber-400" />)}
            </div>
            <span className="text-white font-bold">4.9</span>
            <span className="text-blue-300 text-sm">/ 5 overall rating</span>
          </div>
        </div>

        {/* Card */}
        <div
          className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 text-center relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="text-accent/40 mx-auto mb-6" size={36} />
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-light mb-8 min-h-[100px]">
            "{t.quote}"
          </p>
          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="font-semibold text-white">{t.name}</div>
            <div className="text-blue-300 text-sm">{t.course}</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prev} aria-label="Previous"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all ${i === current ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-white/30 hover:bg-white/50"}`} />
            ))}
          </div>

          <button onClick={next} aria-label="Next"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
