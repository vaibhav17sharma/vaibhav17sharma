import { Award, Code, Database, Layers, Wrench, Zap } from 'lucide-react';

const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript'], icon: Code, gradient: 'from-blue-400 to-cyan-400' },
  { category: 'Frameworks', items: ['Angular', 'Next.js', 'MERN Stack'], icon: Layers, gradient: 'from-purple-400 to-pink-400' },
  { category: 'Tools', items: ['AWS', 'Git', 'Docker', 'VS Code'], icon: Wrench, gradient: 'from-green-400 to-emerald-400' },
  { category: 'Libraries', items: ['Prisma', 'Tailwind CSS'], icon: Zap, gradient: 'from-yellow-400 to-orange-400' },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL'], icon: Database, gradient: 'from-red-400 to-rose-400' },
  { category: 'Bonus', items: ['SEO', 'Responsive Design'], icon: Award, gradient: 'from-indigo-400 to-purple-400' },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-32">
      <div className="fade-in">
        <h3 className="text-2xl sm:text-3xl font-bold mb-16 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Skills & Technologies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-center mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.gradient} bg-opacity-10 mr-3`}>
                  <skill.icon className={`w-5 h-5 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`} />
                </div>
                <h4 className={`text-lg font-semibold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                  {skill.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="text-sm bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  >
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
