"use client";
import { useState, useEffect, useRef } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export default function AnimatedStat({ value, label, icon }: AnimatedStatProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-white hover:bg-slate-50 transition-colors px-8 py-6 flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className={`text-2xl font-extrabold text-[#0F172A] leading-none transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          {value}
        </div>
        <div className="text-xs text-slate-500 mt-0.5">{label}</div>
      </div>
    </div>
  );
}
