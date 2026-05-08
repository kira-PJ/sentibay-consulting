export default function MissionVision() {
  const values = [
    {
      name: "Excellence",
      description: "High standards in every training session and every consulting engagement.",
    },
    {
      name: "Client First",
      description: "We work around your goals, your team, and your timeline.",
    },
    {
      name: "Integrity",
      description: "Honest advice, accurate content, and clear expectations every time.",
    },
    {
      name: "Infinite Momentum",
      description:
        "We move fast and we keep moving. In training and in consulting, we push for progress at every step.",
    },
  ];

  return (
    <section className="bg-[#F0F9FF] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Mission and Vision columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {/* Mission */}
          <div className="border-t-4 border-[#3B82F6] pt-6">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Our Mission</h2>
            <p className="text-[#64748B] text-lg leading-relaxed">
              To accelerate the growth of professionals and organizations through technology
              training and cloud consulting that sets a high bar and delivers lasting results.
            </p>
          </div>

          {/* Vision */}
          <div className="border-t-4 border-[#059669] pt-6">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Our Vision</h2>
            <p className="text-[#64748B] text-lg leading-relaxed">
              A future where every professional and every organization has the tools, skills,
              and support to grow without limits.
            </p>
          </div>
        </div>

        {/* Values section */}
        <div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Our Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((value) => (
              <div
                key={value.name}
                className="bg-white rounded-lg border border-gray-200 p-5"
              >
                <p className="text-[#0F172A] font-bold mb-2">{value.name}</p>
                <p className="text-[#64748B] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
