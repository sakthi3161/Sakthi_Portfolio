import React from 'react';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';

const iconMap = {
  Linkedin: Linkedin,
  Github: Github,
  Mail: Mail,
};

export const SocialLinks: React.FC = () => {
  const { socials } = portfolioData;

  return (
    <div className="flex space-x-4">
      {socials.map((social, index) => {
        const IconComponent = iconMap[social.icon as keyof typeof iconMap] || ExternalLink;
        
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            aria-label={`Follow me on ${social.name}`}
          >
            <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </a>
        );
      })}
    </div>
  );
};