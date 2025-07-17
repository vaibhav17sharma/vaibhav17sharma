import { FileText, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vaibhav Sharma
            </h1>
            <p className="hidden sm:block text-xs text-gray-400 mt-0.5">
              Full Stack Engineer | MERN + Angular | AI/ML Enthusiast
            </p>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="mailto:vaibhav17sharma.it@gmail.com" 
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a 
              href="https://github.com/vaibhav17sharma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group relative"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a 
              href="https://www.linkedin.com/in/vaibhav-sharma-it/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group relative"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a 
              href="#projects" 
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group relative"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm">Resume</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-sm rounded-lg mt-2 border border-white/5">
            <a 
              href="mailto:vaibhav17sharma.it@gmail.com" 
              className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-md transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/vaibhav17sharma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-md transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/vaibhav-sharma-it/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-md transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="#projects" 
              className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-md transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
