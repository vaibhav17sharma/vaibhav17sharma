'use client';

import { ExternalLink, FileText, Github, Linkedin, Mail, Twitter, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LinktreePage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
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
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [isLoading]);

    const links = [
        {
            title: 'Portfolio Website',
            description: 'View my complete portfolio and projects',
            url: '/',
            icon: User,
            gradient: 'from-blue-400 to-cyan-400',
            external: false
        },
        {
            title: 'Resume / CV',
            description: 'Download my latest resume',
            url: '#resume',
            icon: FileText,
            gradient: 'from-purple-400 to-pink-400',
            external: false
        },
        {
            title: 'GitHub',
            description: 'Check out my code repositories',
            url: 'https://github.com/vaibhav17sharma',
            icon: Github,
            gradient: 'from-gray-400 to-gray-600',
            external: true
        },
        {
            title: 'Twitter',
            description: 'Follow me for tech updates',
            url: 'https://twitter.com/vaib_tw',
            icon: Twitter,
            gradient: 'from-sky-400 to-blue-500',
            external: true
        },
        {
            title: 'LinkedIn',
            description: 'Connect with me professionally',
            url: 'https://www.linkedin.com/in/vaibhav-sharma-it/',
            icon: Linkedin,
            gradient: 'from-blue-500 to-blue-700',
            external: true
        },
        {
            title: 'Email Me',
            description: 'Get in touch for opportunities',
            url: 'mailto:vaibhav17sharma.it@gmail.com',
            icon: Mail,
            gradient: 'from-green-400 to-emerald-400',
            external: true
        },
        // Future links - uncomment and customize as needed
        /*
        {
          title: 'Blog',
          description: 'Read my latest articles and insights',
          url: 'https://blog.vaibhavsharma.dev',
          icon: Globe,
          gradient: 'from-orange-400 to-red-400',
          external: true
        },
        {
          title: 'YouTube Channel',
          description: 'Watch my coding tutorials',
          url: 'https://youtube.com/@vaibhavsharma',
          icon: Youtube,
          gradient: 'from-red-500 to-red-700',
          external: true
        },
        {
          title: 'Instagram',
          description: 'Behind the scenes content',
          url: 'https://instagram.com/vaibhavsharma',
          icon: Instagram,
          gradient: 'from-pink-400 to-rose-500',
          external: true
        },
        */
    ];

    const handleLinkClick = (url: string, external: boolean) => {
        if (external) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = url;
        }
    };

    return (
        <>
            {/* Loader */}
            <div className={`fixed inset-0 bg-[#0D0D0D] flex items-center justify-center z-50 transition-opacity duration-500 ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
            </div>

            {/* Main Content */}
            <div className={`min-h-screen bg-[#0D0D0D] text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <div className="max-w-md mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="text-center mb-12 fade-in">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 p-0.5">
                            <div className="w-full h-full rounded-full bg-[#0D0D0D] flex items-center justify-center">
                                <User className="w-10 h-10 text-blue-400" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Vaibhav Sharma
                        </h1>
                        <p className="text-gray-400 text-sm mb-4">
                            Full Stack Engineer | MERN + Angular | AI/ML Enthusiast
                        </p>
                        <p className="text-gray-500 text-xs">
                            Connect with me across all platforms
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <button
                                    onClick={() => handleLinkClick(link.url, link.external)}
                                    className="w-full group relative p-4 rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`p-2 rounded-lg bg-gradient-to-r ${link.gradient} bg-opacity-10`}>
                                            <link.icon className={`w-5 h-5 text-white bg-gradient-to-r ${link.gradient} bg-clip-text`} />
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                                {link.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                                {link.description}
                                            </p>
                                        </div>
                                        {link.external && (
                                            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                                        )}
                                    </div>

                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-purple-400/5 group-hover:to-blue-400/5 transition-all duration-300"></div>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-12">
                        <p className="text-xs text-gray-500">
                            © 2025 Vaibhav Sharma — All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}