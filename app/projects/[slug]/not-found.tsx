import Link from 'next/link';
import ClientHeader from '@/components/ClientHeader';

export default function NotFound() {
  return (
    <>
      <ClientHeader />
      <div className="min-h-screen bg-[#0D0D0D] pt-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
              <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Project Not Found
            </h2>
            <p className="text-gray-400 mb-6">The project you're looking for doesn't exist or has been moved.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/projects"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Back to Projects
            </Link>
            <Link
              href="/"
              className="bg-white/10 text-gray-300 px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}