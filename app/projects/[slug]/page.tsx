import ClientHeader from '@/components/ClientHeader';
import Breadcrumb from '@/components/Breadcrumb';
import { getProject } from '@/lib/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: { slug: string };
}

function getYouTubeEmbedUrl(url: string) {
  const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    };
  }

  const seoData = project.seo?.[0];
  
  return {
    title: seoData?.title || project.title,
    description: seoData?.description || project.description,
    keywords: seoData?.keywords || project.tags,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <ClientHeader />
      <div className="min-h-screen bg-black text-white">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
          
          <div className="relative pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6">
              <Breadcrumb items={[
                { label: 'Home', href: '/' },
                { label: 'Projects', href: '/projects' },
                { label: project.title }
              ]} />
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-none">
                    {project.title}
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {project.seo?.[0]?.description || project.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <Link
                      href={`https://${project.upstream_url}`}
                      target="_blank"
                      className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold hover:from-purple-500 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      Launch App
                    </Link>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
                
                {project.cover_image && (
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <img
                      src={project.cover_image}
                      alt={project.title}
                      className="relative w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
              
              {project.demo_url && (
                <div className="mb-20">
                  <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Live Demo
                  </h2>
                  <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Watch this project in action and see how it works in real-time. This demo showcases the key features and functionality.
                  </p>
                  <div className="relative max-w-4xl mx-auto">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl blur-xl opacity-30"></div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                      <iframe
                        src={getYouTubeEmbedUrl(project.demo_url)}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {project.seo?.[0]?.body && (
                <div className="mb-20">
                  <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    About This Project
                  </h2>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-gray-300 leading-relaxed text-center">
                      {project.seo[0].body}
                    </p>
                  </div>
                </div>
              )}
              
              {project.images && project.images.length > 0 && (
                <div>
                  <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Screenshots
                  </h2>
                  <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Explore the user interface and design elements that make this project unique and user-friendly.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {project.images.map((image, index) => (
                      <div key={index} className="bg-gray-900 rounded-xl overflow-hidden h-96">
                        <img
                          src={image.url}
                          alt={image.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-6 h-32 flex flex-col">
                          <h3 className="text-xl font-bold mb-2">{image.name}</h3>
                          <p className="text-gray-400 flex-1">{image.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}