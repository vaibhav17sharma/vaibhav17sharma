import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] pt-12 pb-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div>
          <p className="text-sm font-semibold text-white mb-0.5">Vaibhav Sharma</p>
          <p className="font-mono text-[10px] text-[#4A5568] tracking-widest">
            engineer × ai_curious
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/vaibhav17sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-sharma-it/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:vaibhav17sharma.it@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-mono text-[11px] text-[#4A5568]">
          © {new Date().getFullYear()} · built with curiosity
        </p>
      </div>
    </footer>
  );
}
