const education = [
  {
    degree: 'M.Tech (AI & ML)',
    institution: 'BITS Pilani, WILP',
    period: 'Pursuing',
  },
  {
    degree: 'B.Tech (CSE)',
    institution: 'RDEC, AKTU',
    period: '2018–2022',
  },
  {
    degree: 'Intermediate (CS)',
    institution: 'Jaypee Vidya Mandir',
    period: '2017–2018',
  },
];

export default function Education() {
  return (
    <section id="education" className="mb-32">
      <div className="fade-in">
        <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Education
        </h3>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-2">
                <h4 className="text-xl font-semibold text-blue-400">{edu.degree}</h4>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
