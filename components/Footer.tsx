import { FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/vaibhav17sharma" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-sharma-it/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:vaibhav17sharma.it@gmail.com" className="social-link">
              <Mail className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
            <a href="#projects" className="social-link">
              <FileText className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2025 Vaibhav Sharma — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
