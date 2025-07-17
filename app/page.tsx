'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import img from '../public/assets/hiii.gif';
import Loading from './loading';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <>
      {/* Loader */}
      <div className={`loader ${!isLoading ? 'hidden' : ''}`}>
        <Loading />
      </div>

      {/* Main Content */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          {/* Intro Section */}
          <section className="mb-32">
            <div className="fade-in flex flex-col items-center md:flex-row md:items-center md:gap-12">
              <div className="flex-shrink-0 mb-8 md:mb-0">
                <Image
                  src={img}
                  alt="Hi"
                  width={300}
                  height={300}
                  className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover rounded-full mx-auto md:mx-0 filter backdrop-contrast-125"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  I'm Vaibhav Sharma
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                  A developer building scalable, fast, and user-focused web applications. Currently pursuing M.Tech in
                  <span className="text-blue-400"> Artificial Intelligence & Machine Learning </span>
                  from BITS Pilani (WILP).
                </p>
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
    </>
  );
}