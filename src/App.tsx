import React, { useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Experience } from './components/Sections/Experience';
import { Skills } from './components/Sections/Skills';
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';
import { Footer } from './components/Layout/Footer';
import { useActiveSection } from './hooks/useActiveSection';
import portfolioData from './config/portfolio.json';

function App() {
  const activeSection = useActiveSection();

  useEffect(() => {
    // Set page title and meta description
    document.title = `${portfolioData.personal.name} | ${portfolioData.personal.role}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `${portfolioData.personal.name} - ${portfolioData.personal.tagline}. Specializing in AI, Data Science, Web Development, and Python programming.`
      );
    }

    // Add OpenGraph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', `${portfolioData.personal.name} | ${portfolioData.personal.role}`);
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', portfolioData.personal.tagline);
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', portfolioData.personal.avatar);
    if (!document.querySelector('meta[property="og:image"]')) {
      document.head.appendChild(ogImage);
    }

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }

    // Add Twitter Card meta tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard);
    }

    // Handle reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionPreference = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0s');
      } else {
        document.documentElement.style.removeProperty('--animation-duration');
      }
    };

    handleMotionPreference(prefersReducedMotion);
    prefersReducedMotion.addEventListener('change', handleMotionPreference);

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionPreference);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <Header activeSection={activeSection} />
      
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;