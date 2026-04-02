import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative bg-[#0a0f2e] py-24 px-6 text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to go deep on AWS?
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
          Whether you're chasing your first cert, upskilling your team, or need someone to
          help you architect something real, I'm here for it.
        </p>
        <Link href="/consulting"
          className="inline-block bg-accent text-white font-semibold px-10 py-4 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/30">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
