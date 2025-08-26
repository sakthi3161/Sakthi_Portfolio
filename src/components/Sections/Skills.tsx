import React from 'react';
import portfolioData from '../../config/portfolio.json';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const skillCategories = Object.entries(skills);
  
  const categoryColors = {
    'Programming': 'from-blue-500 to-blue-600',
    'Technologies': 'from-emerald-500 to-emerald-600',
    'AI/DS': 'from-purple-500 to-purple-600',
    'Soft Skills': 'from-orange-500 to-orange-600'
  };

  const categoryIcons = {
    'Programming': '💻',
    'Technologies': '⚙️',
    'AI/DS': '🤖',
    'Soft Skills': '🎯'
  };

  const proficiencyLevels = {
    'Programming': 88,
    'Technologies': 85,
    'AI/DS': 82,
    'Soft Skills': 90
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Skills & Technologies
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map(([category, skillList], index) => (
              <div
                key={category}
                className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 dark:border-slate-700/50"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3 mb-6">
                  {skillList.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group/skill flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-200"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover/skill:scale-150 transition-transform duration-200"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Proficiency Indicator */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-600">
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
                    <span>Proficiency</span>
                    <span>{proficiencyLevels[category as keyof typeof proficiencyLevels]}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ width: `${proficiencyLevels[category as keyof typeof proficiencyLevels]}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Certifications & Learning
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                    {cert.organization}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};