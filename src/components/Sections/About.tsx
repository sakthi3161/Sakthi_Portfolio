import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';

export const About: React.FC = () => {
  const { personal, education, achievements } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              About Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Passionate about leveraging technology to solve real-world problems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {personal.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
                    Open to opportunities
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl transform rotate-3"></div>
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
                />
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg">
                  <div className="text-2xl">💻</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                      {edu.location} • {edu.duration}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">
                        CGPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center">
                <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mr-3" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};