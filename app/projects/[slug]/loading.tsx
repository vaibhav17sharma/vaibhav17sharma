import ClientHeader from '@/components/ClientHeader';

export default function Loading() {
  return (
    <>
      <ClientHeader />
      <div className="min-h-screen bg-[#0D0D0D] pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg mb-8 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            </div>
            <div className="h-10 bg-gradient-to-r from-white/10 to-white/5 rounded-lg mb-4 w-3/4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            </div>
            <div className="flex gap-2 mb-6">
              <div className="h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full w-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>
              </div>
              <div className="h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full w-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>
              </div>
              <div className="h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full w-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              <div className="h-4 bg-gradient-to-r from-white/10 to-white/5 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              </div>
              <div className="h-4 bg-gradient-to-r from-white/10 to-white/5 rounded w-5/6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              </div>
              <div className="h-4 bg-gradient-to-r from-white/10 to-white/5 rounded w-4/6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-lg w-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>
              </div>
              <div className="h-12 bg-white/10 rounded-lg w-32 border border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}