import { Play, Youtube } from "lucide-react";

// Real videos from @kiratechhub — update thumbnails/IDs as needed
const videos = [
  {
    id: "dQw4w9WgXcQ", // replace with real YouTube video IDs
    title: "AWS Multi-VPC Setup – Transit Gateway Hands On",
    topic: "Networking",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Clouds Aren't Just for Rain – Welcome to AWS Cloud 101",
    topic: "Module #1",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Mastering AWS IAM – I Am Who I Say I Am",
    topic: "Module #3",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Leveraging Gen AI in AWS Security",
    topic: "AI + Security",
  },
];

export default function YouTubeSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0f2e] text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">YouTube</span>
            <h2 className="text-4xl font-bold mt-2 mb-2">Kira Tech Hub</h2>
            <p className="text-blue-200 max-w-lg">
              Free AWS tutorials, hands-on labs, and cloud concepts explained the way I wish someone had explained them to me.
            </p>
          </div>
          <a href="https://www.youtube.com/@kiratechhub" target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-red-700 transition-colors shrink-0">
            <Youtube size={16} /> Visit Channel
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {videos.map((v, i) => (
            <a key={i}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank" rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all">
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={18} className="fill-white text-white ml-0.5" />
                  </div>
                </div>
                <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                  {v.topic}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-white leading-snug line-clamp-2">{v.title}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="https://www.youtube.com/@kiratechhub" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors">
            <Youtube size={16} /> Visit Channel
          </a>
        </div>
      </div>
    </section>
  );
}
