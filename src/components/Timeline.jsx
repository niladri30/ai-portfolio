import { motion } from 'framer-motion';
import { Briefcase, Award, TrendingUp } from 'lucide-react';
import { timeline } from '../data/timeline';
import SectionHeading from './SectionHeading';

const Timeline = () => {
  return (
    <section id="timeline" className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Career Journey"
          subtitle="Evolution from software engineering to enterprise AI architecture"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-indigo transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = item.type === 'current';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`glass-effect p-6 rounded-2xl border ${
                        isCurrent
                          ? 'border-accent-cyan shadow-lg shadow-accent-cyan/20'
                          : 'border-gray-200/20 dark:border-gray-700/30'
                      }`}
                    >
                      {/* Period badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${
                        isCurrent
                          ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white'
                          : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300'
                      }`}>
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold text-sm">{item.period}</span>
                      </div>

                      {/* Role and company */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.role}
                      </h3>
                      <p className="text-lg text-accent-cyan font-semibold mb-4">
                        {item.company} • {item.location}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-accent-cyan" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-1">
                          {item.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className={`text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2 ${
                                isEven ? 'lg:flex-row-reverse lg:text-right' : ''
                              }`}
                            >
                              <span className="text-accent-cyan mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {item.achievements && item.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Award className="w-4 h-4 text-accent-purple" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className={`text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2 ${
                                  isEven ? 'lg:flex-row-reverse lg:text-right' : ''
                                }`}
                              >
                                <span className="text-accent-purple mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}>
                        {item.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 4 && (
                          <span className="px-3 py-1 rounded-full text-xs text-gray-500 dark:text-gray-400">
                            +{item.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className={`w-5 h-5 rounded-full ${
                        isCurrent
                          ? 'bg-accent-cyan shadow-lg shadow-accent-cyan/50'
                          : 'bg-gray-300 dark:bg-gray-600'
                      } border-4 border-gray-50 dark:border-dark-800`}
                    />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect inline-block px-8 py-6 rounded-2xl border border-accent-cyan/30">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="font-semibold gradient-text">14+ years</span> of evolution 
              from software engineering to leading enterprise AI transformation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
