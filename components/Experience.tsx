const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Novoinvent Softwares',
    period: '2023 – Present',
    description: 'Led cross-functional team for Fintech modules; delivered 5+ features in a year. Built apps scoring 95+ on Lighthouse.',
  },
  {
    title: 'Software Engineer',
    company: 'Novoinvent',
    period: '2021 – 2023',
    description: '2500+ commits, 100% deadlines met, 30% fewer bugs via code reviews.',
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2020 – 2021',
    description: 'Built 10+ full stack apps. Created travel agency platform with custom bookings, admin dashboard, and SEO-optimized pages.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-32">
      <div className="fade-in">
        <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Experience
        </h3>
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-2">
                <h4 className="text-xl font-semibold text-blue-400">{exp.title}</h4>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
