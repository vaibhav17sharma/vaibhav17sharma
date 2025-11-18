import ClientHeader from '@/components/ClientHeader';

export default function Loading() {
  return (
    <>
      <ClientHeader />
      <div className="min-h-screen bg-[#0D0D0D] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="h-10 bg-gradient-to-r from-white/10 to-white/5 rounded-lg mb-8 w-48 mx-auto md:mx-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              </div>
              <div className="p-6 space-y-3">
                <div className="h-6 bg-gradient-to-r from-white/10 to-white/5 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                </div>
                <div className="h-4 bg-gradient-to-r from-white/10 to-white/5 rounded w-3/4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                </div>
                <div className="h-4 bg-gradient-to-r from-white/10 to-white/5 rounded w-2/3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded w-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>
                  </div>
                  <div className="h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded w-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>
                  </div>
                  <div className="h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded w-14 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}