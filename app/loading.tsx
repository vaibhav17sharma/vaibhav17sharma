'use client';

import { useEffect, useState } from 'react';

const lines = [
  'initializing runtime...',
  'loading neural context...',
  'mounting interface...',
];

export default function Loading() {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length - 1) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 320);
      return () => clearTimeout(t);
    }
  }, [lineIndex]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#080B12] gap-8">
      {/* Logo mark */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-cyan-ai/30 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute inset-2 rounded-full border border-cyan-ai/50" />
        <span className="font-mono text-cyan-ai text-lg font-bold tracking-tight">VS</span>
      </div>

      {/* Terminal lines */}
      <div className="font-mono text-xs space-y-1.5 text-left w-52">
        {lines.slice(0, lineIndex + 1).map((line, i) => (
          <p
            key={i}
            className={`transition-opacity duration-300 ${
              i === lineIndex ? 'text-cyan-ai' : 'text-[#4A5568]'
            }`}
          >
            <span className="text-[#4A5568] mr-2">{'>'}</span>
            {line}
            {i === lineIndex && (
              <span className="ml-0.5 inline-block w-1.5 h-3.5 bg-cyan-ai align-middle animate-pulse" />
            )}
          </p>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-52 h-px bg-white/5 relative overflow-hidden rounded-full">
        <div
          className="h-full bg-gradient-to-r from-cyan-ai to-violet-ai transition-all duration-700 ease-out"
          style={{ width: `${((lineIndex + 1) / lines.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
