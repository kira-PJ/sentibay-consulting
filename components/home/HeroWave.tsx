// Static mesh gradient — beautiful, clean, no animation
// Inspired by Stripe's colour palette but in SentiBay blue/teal/green
export default function HeroWave() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {/* Main diagonal mesh — covers right 65% */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            conic-gradient(
              from 200deg at 80% 50%,
              #1E3A8A 0deg,
              #2563EB 40deg,
              #3B82F6 70deg,
              #06B6D4 110deg,
              #0D9488 150deg,
              #059669 190deg,
              #10B981 230deg,
              #34D399 260deg,
              #06B6D4 290deg,
              #3B82F6 320deg,
              #1E3A8A 360deg
            )
          `,
          opacity: 0.92,
        }}
      />

      {/* Soft blur to smooth the conic gradient into silk */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(0px)",
          background: `
            radial-gradient(ellipse 55% 90% at 78% 45%,
              rgba(59,130,246,0.0) 0%,
              rgba(59,130,246,0.0) 100%
            )
          `,
        }}
      />

      {/* Overlay to soften and blend colours — makes it look like silk */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 70% at 90% 20%, rgba(96,165,250,0.5) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 70% 80%, rgba(52,211,153,0.45) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 95% 55%, rgba(6,182,212,0.4) 0%, transparent 55%)
          `,
        }}
      />

      {/* Left fade — clean white on the text side */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 15%, rgba(255,255,255,0.85) 28%, rgba(255,255,255,0.3) 42%, rgba(255,255,255,0) 55%)",
        }}
      />

      {/* Top fade — so it doesn't look cut off */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 85%, rgba(255,255,255,0.3) 100%)",
        }}
      />

      {/* Subtle grain texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
