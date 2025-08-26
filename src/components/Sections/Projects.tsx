import React, { useState } from 'react';
import { ExternalLink, Github, FileText, Filter, Star } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';

interface Project {
  id: string;
  title: string;
  tags: string[];
  category: string;
  cover: string;
  summary: string;
  description: string;
  impact: string[];
  technologies: string[];
  links: {
    demo?: string;
    code?: string;
  };
}

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'Web Development', 'Artificial Intelligence', 'Full Stack', 'Python'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.category === selectedFilter || project.tags.includes(selectedFilter)
      );

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 dark:border-slate-700/50">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <Star className="w-5 h-5 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
          {project.summary}
        </p>

        {/* Impact Metrics */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Impact:</h4>
          <ul className="space-y-1">
            {project.impact.slice(0, 2).map((impact, index) => (
              <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                {impact}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          <button
            onClick={() => setSelectedProject(project)}
            className="flex items-center space-x-1 px-3 py-2 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-lg transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Showcasing innovative solutions in AI, web development, and data science
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center space-x-4 mb-8 overflow-x-auto pb-2">
            <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 whitespace-nowrap">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400">
                No projects found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.cover}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {selectedProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Impact & Results:</h4>
                <ul className="space-y-2">
                  {selectedProject.impact.map((impact, index) => (
                    <li key={index} className="text-slate-600 dark:text-slate-300 flex items-start">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-3">
                {selectedProject.links.demo && (
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Demo</span>
                  </a>
                )}
                {selectedProject.links.code && (
                  <a
                    href={selectedProject.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};