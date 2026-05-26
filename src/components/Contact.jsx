import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/niladri-podder-96a9b8142/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/niladri30',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:niladri.podder12@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-dark-900 via-indigo-950 to-dark-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Let's Connect"
          subtitle="Interested in enterprise AI, SAP innovation, and next-generation intelligent applications? Let's collaborate."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise with AI?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I specialize in architecting and delivering enterprise AI solutions that 
              drive real business value. Whether you're looking to integrate AI with SAP, 
              build conversational interfaces, or implement knowledge systems, I'd love 
              to discuss how we can work together.
            </p>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3 justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-cyan mt-2" />
                <p className="text-gray-300">
                  <strong className="text-white">Enterprise AI Architecture</strong> on SAP BTP
                </p>
              </div>
              <div className="flex items-start gap-3 justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-purple mt-2" />
                <p className="text-gray-300">
                  <strong className="text-white">Generative AI & LLMs</strong> for business applications
                </p>
              </div>
              <div className="flex items-start gap-3 justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-indigo mt-2" />
                <p className="text-gray-300">
                  <strong className="text-white">Team Leadership</strong> and AI enablement
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Connect With Me
            </h4>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-lg glass-effect flex items-center justify-center text-gray-300 ${link.color} transition-colors duration-300`}
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="mt-8">
            <motion.a
              href="/ai-portfolio/resume.pdf"
              download="Niladri_Podder_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-accent-cyan to-accent-purple hover:shadow-lg hover:shadow-accent-cyan/50 text-white"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
