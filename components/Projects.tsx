import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Stock Exchange Portal',
    description: 'Upgraded Angular 9 → 15, 88% faster builds.',
    tech: ['Angular', 'TypeScript', 'RxJS'],
  },
  {
    title: 'Document Management System',
    description: 'MERN + AWS S3 for secure document storage.',
    tech: ['React', 'Node.js', 'AWS S3', 'MongoDB'],
  },
  {
    title: 'Identity Management App',
    description: 'Used 3rd party APIs for document verification.',
    tech: ['Next.js', 'API Integration', 'Verification'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-32">
      <div className="fade-in">
        <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Featured Projects
        </h3>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="project-item py-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-semibold text-blue-400">{project.title}</h4>
                <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
                  >
                    {tech}
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
