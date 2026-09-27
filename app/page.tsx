'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { useAppStore } from '../lib/store';
import img from '../public/assets/hiii.gif';
import Loading from './loading';

const ROLES = [
  'Full Stack Engineer',
  'AI / ML Enthusiast',
  'Team Lead',
  'Curious Builder',
];

function useTypewriter(words: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((i) => i + 1), speed);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((i) => i - 1), speed / 2);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  useEffect(() => {
    setDisplay(words[wordIdx].slice(0, charIdx));
  }, [charIdx, wordIdx, words]);

  return display;
}

export default function Portfolio() {
  const { isLoading, setIsLoading } = useAppStore();
  const role = useTypewriter(ROLES);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <>
      {/* ── Loader ─────────────────────────────────────── */}
      <div className={`loader ${!isLoading ? 'hidden' : ''}`}>
        <Loading />
      </div>

      {/* ── Main ───────────────────────────────────────── */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>

        {/* Ambient background */}
        <div className="ambient-orb-1" />
        <div className="ambient-orb-2" />
        <div className="fixed inset-0 bg-grid-pattern bg-grid pointer-events-none z-0 opacity-100" />

        <div className="relative z-10">
          <Header />

          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">

            {/* ── Hero ─────────────────────────────────── */}
            <section className="mb-36 min-h-[70vh] flex items-center">
              <div className="fade-in w-full flex flex-col md:flex-row md:items-center md:gap-16">

                {/* Avatar */}
                <div className="flex-shrink-0 mb-10 md:mb-0 flex justify-center md:justify-start">
                  <div className="relative">
                    {/* Glow ring */}
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#7C3AED]/20 blur-xl" />
                    <div className="absolute -inset-1 rounded-full border border-[#00D4FF]/20" />
                    <Image
                      src={img}
                      alt="Vaibhav Sharma"
                      width={260}
                      height={260}
                      className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full"
                      priority
                    />
                    {/* Online indicator */}
                    <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#080B12] pulse-dot" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  {/* Terminal greeting */}
                  <p className="font-mono text-xs text-[#00D4FF]/60 mb-4 tracking-widest uppercase">
                    {'> hello_world.tsx'}
                  </p>

                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-gradient-main">
                    I&apos;m Vaibhav Sharma
                  </h2>

                  {/* Typewriter role */}
                  <div className="h-8 mb-6">
                    <span className="font-mono text-lg sm:text-xl text-[#00D4FF] typewriter-cursor">
                      {role}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-[#8B98A9] max-w-xl leading-relaxed mb-8">
                    Building scalable, intelligent web systems. Bridging the gap
                    between{' '}
                    <span className="text-white font-medium">production engineering</span>
                    {' '}and{' '}
                    <span className="text-[#00D4FF] font-medium">AI research</span>.
                    Pursuing{' '}
                    <span className="text-white font-medium">M.Tech AI & ML</span>
                    {' '}at BITS Pilani.
                  </p>

                  {/* CTA chips */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:vaibhav17sharma.it@gmail.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00D4FF] text-[#080B12] text-sm font-semibold hover:bg-[#00D4FF]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                    >
                      Let&apos;s Connect
                    </a>
                    <a
                      href="https://github.com/vaibhav17sharma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-[#8B98A9] text-sm font-medium hover:border-[#00D4FF]/30 hover:text-white transition-all duration-200 hover:bg-white/[0.03]"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}