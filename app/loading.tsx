export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#0D0D0D]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-bounce [animation-delay:-.5s]"></div>
        </div>
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}
