import ConsultingForm from "@/components/ConsultingForm";
import { services } from "@/lib/data/services";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ConsultingPage() {
  return (
    <div className="bg-white">

      {/* ── Hero strip ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0C4A6E] py-20 px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="blob-1 absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/30 blur-[90px]" />
          <div className="blob-2 absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#059669]/20 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-[#059669]/15 border border-[#059669]/25 text-[#34D399] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            Get in Touch
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Cloud Consulting &amp; Training
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Whether you need a cloud architecture review, a team upskilling program,
            or hands-on AWS implementation support, let&apos;s talk.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left — services list */}
          <ScrollReveal direction="left">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">What We Can Help With</h2>
            <div className="space-y-6">
              {services.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="shrink-0 mt-0.5">
                    <CheckCircle2 className="text-[#059669]" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{s.title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right">
            <div className="bg-[#F8FAFC] rounded-2xl border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Send an Inquiry</h2>
              <ConsultingForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
