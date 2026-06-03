import { partners } from "@/lib/data/partners";

// Duplicate for seamless loop
const doubled = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="bg-white border-y border-gray-100 py-12 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-8 px-6">
        Technologies We Train &amp; Consult On
      </p>

      {/* Marquee strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex marquee-track gap-6 w-max">
          {doubled.map((partner, i) => (
            <a
              key={`${partner.name}-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 bg-white hover:shadow-sm transition-all duration-200 shrink-0"
            >
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: partner.brandColor }}
              />
              <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors whitespace-nowrap">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
