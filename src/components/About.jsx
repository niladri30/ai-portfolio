import { motion } from 'framer-motion';
import { Layers, Zap, Network, Rocket, Users, Settings } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
  const services = [
    {
      icon: Layers,
      title: 'Enterprise AI Architecture',
      description: 'Designing scalable AI solutions on SAP BTP with focus on production-readiness and business value.'
    },
    {
      icon: Network,
      title: 'SAP AI Integration',
      description: 'Seamless integration of AI capabilities with SAP S/4HANA and enterprise systems.'
    },
    {
      icon: Zap,
      title: 'GenAI & Agentic Workflows',
      description: 'Building intelligent agents using LLMs, LangChain, and retrieval-augmented generation.'
    },
    {
      icon: Rocket,
      title: 'AI Solution Delivery',
      description: 'End-to-end ownership from concept through production deployment across industries.'
    },
    {
      icon: Users,
      title: 'AI Team Leadership',
      description: 'Building and mentoring high-performing AI teams to deliver enterprise solutions.'
    },
    {
      icon: Settings,
      title: 'Business Process Automation',
      description: 'AI-powered automation of complex workflows across finance, procurement, and operations.'
    }
  ];

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
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="Building the future of enterprise AI, one solution at a time"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                As an <strong className="text-accent-cyan">SAP AI Architect</strong> and 
                <strong className="text-accent-purple"> Generative AI Lead</strong>, I bridge 
                the gap between cutting-edge AI technology and real-world enterprise needs.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                My journey spans across <strong>manufacturing, banking, oil & gas, and shared 
                services</strong>, where I've helped organizations transform their operations 
                through intelligent automation, conversational AI, and knowledge systems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                From building AI-powered chatbots that democratize access to SAP data, to 
                architecting document intelligence platforms that unlock insights from 
                thousands of documents, I focus on creating solutions that deliver measurable 
                business value while pushing the boundaries of what's possible with AI.
              </p>
            </div>
          </motion.div>

          {/* Right: Highlight stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-2xl border border-accent-cyan/20">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Core Expertise
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-2">•</span>
                  SAP BTP AI Core & Generative AI Hub
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-2">•</span>
                  LLMs, RAG, and Agentic AI Frameworks
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-2">•</span>
                  Vector Search & Knowledge Graphs
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-2">•</span>
                  SAP S/4HANA Integration & APIs
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-2">•</span>
                  Python, Flask, Streamlit, LangChain
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-2">•</span>
                  IoT, Edge Computing, Protocols, IIoT Platforms
                </li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-2xl border border-accent-purple/20">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Leadership Impact
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Led a <strong className="text-accent-purple">45+ member AI team</strong>, 
                architected solutions across multiple industries, and established best 
                practices for enterprise AI delivery on SAP BTP.
              </p>
            </div>
          </motion.div>
        </div>

        {/* What I Do Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            What I Do
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-effect p-6 rounded-xl border border-gray-200/20 dark:border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
