import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Experience
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Building expertise through hands-on projects and internships
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 transform md:-translate-x-0.5"></div>

            {experience.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline marker */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800 transform -translate-x-2 md:-translate-x-2 z-10">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    {/* Company Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {exp.company}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-emerald-500" />
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-slate-600 dark:text-slate-300 flex items-start">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Ready for New Challenges
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                I'm actively seeking full-time opportunities and exciting internships in 
                AI/ML, web development, and data science roles.
              </p>
              <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};