import React from 'react';
import { Heart } from 'lucide-react';
import { SocialLinks } from '../UI/SocialLinks';
import portfolioData from '../../config/portfolio.json';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Bio */}
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                SAKTHIMURUGAN
              </button>
              <p className="text-slate-300 text-sm leading-relaxed">
                AI & Data Science student passionate about building innovative web solutions 
                and leveraging artificial intelligence to solve real-world problems.
              </p>
              <SocialLinks />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-slate-300 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Get in Touch</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>{personal.location}</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="block hover:text-blue-400 transition-colors"
                >
                  {personal.email}
                </a>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Download Resume</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400 flex items-center space-x-2">
              <span>© {currentYear} {personal.name}. All rights reserved.</span>
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>
          </div>

          {/* Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": personal.fullName,
                "alternateName": personal.name,
                "jobTitle": personal.role,
                "email": personal.email,
                "url": window.location.origin,
                "sameAs": portfolioData.socials.map(social => social.url),
                "knowsAbout": ["Artificial Intelligence", "Data Science", "Web Development", "Python Programming", "Machine Learning"],
                "alumniOf": portfolioData.education[0]?.institution,
                "worksFor": {
                  "@type": "Organization",
                  "name": "Student"
                }
              })
            }}
          />
        </div>
      </div>
    </footer>
  );
};