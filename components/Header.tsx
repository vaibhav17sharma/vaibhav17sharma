'use client';

import { FileText, Github, Home, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useAppStore } from '../lib/store';

const navLinks = [
  { href: '/',                                  icon: Home,     label: 'Home'     },
  { href: 'mailto:vaibhav17sharma.it@gmail.com',icon: Mail,     label: 'Email'    },
  { href: 'https://github.com/vaibhav17sharma',  icon: Github,   label: 'GitHub',   external: true },
  { href: 'https://www.linkedin.com/in/vaibhav-sharma-it/', icon: Linkedin, label: 'LinkedIn', external: true },
  { href: '/projects',                           icon: FileText, label: 'Projects' },
];

export default function Header() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useAppStore();

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Subtle frosted glass bar */}
      <div className="bg-[#080B12]/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">

            {/* Logo / Identity */}
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* Monogram */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-md bg-[#00D4FF]/10 border border-[#00D4FF]/25" />
                <span className="font-mono text-[#00D4FF] text-xs font-bold tracking-widest relative z-10">VS</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white tracking-tight leading-none">
                  Vaibhav Sharma
                </p>
                <p className="hidden sm:block font-mono text-[10px] text-[#00D4FF]/60 mt-0.5 tracking-wider">
                  engineer × ai_curious
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="nav-link flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[#8B98A9] hover:text-[#00D4FF] text-sm transition-colors duration-200 hover:bg-[#00D4FF]/5"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </a>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#8B98A9] hover:text-[#00D4FF] transition-colors duration-200 p-2 rounded-md hover:bg-white/5"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pb-4 pt-1 space-y-1 border-t border-white/[0.04]">
            {navLinks.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-3 px-3 py-2.5 text-[#8B98A9] hover:text-[#00D4FF] hover:bg-[#00D4FF]/5 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
