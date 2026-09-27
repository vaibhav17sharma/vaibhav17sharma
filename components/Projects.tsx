import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Stock Exchange Portal',
    description:
      'Upgraded a large Angular 9 codebase to Angular 15, achieving 88% faster build times and modern reactive patterns with RxJS.',
    tech: ['Angular', 'TypeScript', 'RxJS'],
    chipClass: 'chip chip-violet',
  },
  {
    title: 'Document Management System',
    description:
      'Designed and built a secure MERN-stack DMS with AWS S3 integration — role-based access control, full-text search, and audit logs.',
    tech: ['React', 'Node.js', 'AWS S3', 'MongoDB'],
    chipClass: 'chip chip-emerald',
  },
  {
    title: 'Identity Management App',
    description:
      'Integrated 3rd-party document verification APIs into a Next.js platform for KYC workflows, with real-time status tracking.',
    tech: ['Next.js', 'API Integration', 'KYC'],
    chipClass: 'chip',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-32">
      <div className="fade-in">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00D4FF]/20 to-transparent" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-gradient-main">
          Featured Projects
        </h3>

        <div className="space-y-0 divide-y divide-white/[0.04]">
          {projects.map((project, index) => (
            <div key={index} className="project-item py-8 group cursor-default">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h4 className="text-lg font-semibold text-white group-hover:text-[#00D4FF] transition-colors duration-200">
                  {project.title}
                </h4>
                <ArrowUpRight className="w-4 h-4 text-[#4A5568] group-hover:text-[#00D4FF] flex-shrink-0 mt-1 transition-colors duration-200" />
              </div>
              <p className="text-[#8B98A9] text-sm leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className={project.chipClass}>
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
