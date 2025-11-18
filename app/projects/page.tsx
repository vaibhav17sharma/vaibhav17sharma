import ClientHeader from '@/components/ClientHeader';
import Breadcrumb from '@/components/Breadcrumb';
import { getProjects } from '@/lib/projects';
import Link from 'next/link';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <ClientHeader />
      <div className="min-h-screen bg-[#0D0D0D] pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Projects' }
          ]} />
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="block bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden group"
              >
                {project.cover_image && (
                  <div className="overflow-hidden">
                    <img
                      src={project.cover_image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}