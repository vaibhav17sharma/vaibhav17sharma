const education = [
  {
    degree: 'M.Tech — AI & Machine Learning',
    institution: 'BITS Pilani (WILP)',
    period: 'Pursuing',
    note: 'Coursework: Deep Learning, NLP, Statistical Learning, Computer Vision',
    highlight: true,
  },
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'RDEC, AKTU',
    period: '2018 – 2022',
    note: null,
    highlight: false,
  },
  {
    degree: 'Intermediate — Computer Science',
    institution: 'Jaypee Vidya Mandir',
    period: '2017 – 2018',
    note: null,
    highlight: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="mb-32">
      <div className="fade-in">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">education</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00D4FF]/20 to-transparent" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-gradient-main">
          Education
        </h3>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item group">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className={`text-lg font-semibold transition-colors duration-200 ${
                  edu.highlight ? 'text-[#00D4FF]' : 'text-white group-hover:text-[#00D4FF]'
                }`}>
                  {edu.degree}
                </h4>
                {edu.highlight && (
                  <span className="font-mono text-[10px] text-[#00D4FF] border border-[#00D4FF]/25 bg-[#00D4FF]/8 px-2 py-0.5 rounded-full">
                    in progress
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                <span className="text-[#8B98A9] text-sm">{edu.institution}</span>
                <span className="text-[#4A5568] text-xs">·</span>
                <span className="font-mono text-xs text-[#4A5568]">{edu.period}</span>
              </div>
              {edu.note && (
                <p className="font-mono text-xs text-[#4A5568] leading-relaxed">
                  {edu.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
