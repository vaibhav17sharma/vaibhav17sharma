const experience = [
  {
    title: 'Team Lead — AI & MERN',
    company: 'Eminence Technology',
    period: 'Jan 2026 – Present',
    tag: 'current',
    description:
      'Leading the AI & MERN stack team. Driving adoption of LLM-assisted tooling and overseeing architecture decisions for AI-integrated products.',
  },
  {
    title: 'Senior Software Engineer',
    company: 'Novoinvent Softwares',
    period: '2023 – 2026',
    tag: null,
    description:
      'Led cross-functional team for Fintech modules; delivered 5+ major features in a year. Built apps scoring 95+ on Google Lighthouse. Architected scalable Node.js microservices.',
  },
  {
    title: 'Software Engineer',
    company: 'Novoinvent',
    period: '2021 – 2023',
    tag: null,
    description:
      '2,500+ commits across production codebases. Maintained 100% deadline adherence. Reduced bug backlog by 30% via systematic code reviews and automated test coverage.',
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2020 – 2021',
    tag: null,
    description:
      'Built 10+ full-stack applications. Delivered a travel agency platform with custom booking engine, admin dashboard, and SEO-optimized pages.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-32">
      <div className="fade-in">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00D4FF]/20 to-transparent" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-gradient-main">
          Experience
        </h3>

        <div className="space-y-10">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item group">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h4 className="text-lg font-semibold text-white group-hover:text-[#00D4FF] transition-colors duration-200">
                  {exp.title}
                </h4>
                {exp.tag === 'current' && (
                  <span className="font-mono text-[10px] text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                    ● now
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                <span className="text-[#8B98A9] text-sm">{exp.company}</span>
                <span className="text-[#4A5568] text-xs">·</span>
                <span className="font-mono text-xs text-[#4A5568]">{exp.period}</span>
              </div>
              <p className="text-[#8B98A9] text-sm leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
