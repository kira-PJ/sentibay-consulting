import Link from "next/link";
import { Youtube, Calendar, ArrowRight } from "lucide-react";
import { webinars } from "@/lib/data/webinars";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@kiratechhub";

export default function Webinars() {
  const upcoming = webinars.filter((w) => w.isUpcoming);

  return (
    <section className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
              Free Learning Sessions
            </h2>
            <p className="text-slate-600 text-lg">
              Live webinars and recorded sessions, free for everyone.
            </p>
          </div>
          <Link
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors shrink-0"
          >
            <Youtube size={16} className="text-red-500" />
            Visit our YouTube channel <ArrowRight size={14} />
          </Link>
        </div>

        {upcoming.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-5">
              <Youtube className="text-red-500" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No upcoming sessions right now</h3>
            <p className="text-slate-600 mb-6">
              Watch our recorded webinars on YouTube while you wait for the next one.
            </p>
            <Link
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Youtube size={16} />
              Watch on YouTube
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcoming.map((webinar, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-7 hover:border-[#3B82F6]/30 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 text-[#3B82F6] text-sm font-medium mb-3">
                  <Calendar size={14} />
                  {webinar.date}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{webinar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{webinar.description}</p>
                {webinar.registrationUrl && (
                  <Link
                    href={webinar.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#1e40af] transition-colors"
                  >
                    Register Now <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
