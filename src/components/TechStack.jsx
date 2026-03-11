import { motion } from 'framer-motion';
import { 
  Brain, 
  Layers, 
  Code, 
  Database, 
  Cloud, 
  FileText 
} from 'lucide-react';
import { techStack, techCategories } from '../data/techstack';
import SectionHeading from './SectionHeading';

const iconMap = {
  brain: Brain,
  layers: Layers,
  code: Code,
  database: Database,
  cloud: Cloud,
  fileText: FileText,
};

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="tech" className="section-padding bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Technology Stack"
          subtitle="Enterprise-grade technologies powering next-generation AI solutions"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {techCategories.map((category, categoryIndex) => {
            const categoryData = techStack[category];
            const Icon = iconMap[categoryData.icon];
            
            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-6 md:p-8 border border-gray-200/20 dark:border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoryData.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                {/* Technologies Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryData.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + techIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="p-4 rounded-lg bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 hover:border-accent-cyan transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {tech.name}
                          </span>
                          <span className="text-xs text-accent-cyan font-semibold">
                            {tech.proficiency}%
                          </span>
                        </div>
                        
                        {/* Proficiency Bar */}
                        <div className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.2,
                              ease: "easeOut"
                            }}
                            className={`h-full bg-gradient-to-r ${categoryData.color} rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect inline-block px-8 py-6 rounded-2xl border border-accent-cyan/30">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="font-semibold gradient-text">Full-stack AI expertise</span> from 
              prompt engineering to production deployment on enterprise platforms
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
