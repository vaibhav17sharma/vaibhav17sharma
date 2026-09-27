import { Award, Brain, Code, Database, Layers, Wrench } from 'lucide-react';

const skills = [
  {
    category: 'AI / ML',
    items: ['Python', 'PyTorch', 'LLM APIs', 'RAG', 'Prompt Engineering'],
    icon: Brain,
    accent: '#00D4FF',
    chipClass: 'chip',
  },
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python'],
    icon: Code,
    accent: '#60A5FA',
    chipClass: 'chip',
  },
  {
    category: 'Frameworks',
    items: ['Angular', 'Next.js', 'React', 'Node.js', 'Express'],
    icon: Layers,
    accent: '#A78BFA',
    chipClass: 'chip chip-violet',
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Docker', 'Git', 'CI/CD'],
    icon: Wrench,
    accent: '#34D399',
    chipClass: 'chip chip-emerald',
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Redis'],
    icon: Database,
    accent: '#F472B6',
    chipClass: 'chip chip-violet',
  },
  {
    category: 'Craft',
    items: ['System Design', 'SEO', 'Lighthouse 95+', 'Code Review'],
    icon: Award,
    accent: '#FBBF24',
    chipClass: 'chip',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-32">
      <div className="fade-in">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00D4FF]/20 to-transparent" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-gradient-main">
          Skills & Technologies
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card p-6 group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${skill.accent}15`, border: `1px solid ${skill.accent}25` }}
                >
                  <skill.icon
                    className="w-4 h-4"
                    style={{ color: skill.accent }}
                  />
                </div>
                <h4 className="text-sm font-semibold tracking-wide" style={{ color: skill.accent }}>
                  {skill.category}
                </h4>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className={skill.chipClass}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
