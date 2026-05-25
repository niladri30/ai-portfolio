import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Success Stories', href: '#stories' },
    { label: 'Tech Stack', href: '#tech' },
    { label: 'Journey', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/niladri-podder-96a9b8142/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/niladri30', label: 'GitHub' },
    { icon: Mail, url: 'mailto:niladri.podder12@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold gradient-text mb-3">
                Niladri Podder
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                SAP AI Architect crafting enterprise solutions that bridge cutting-edge 
                AI technology with real-world business impact. Passionate about generative 
                AI, SAP integration, and building intelligent systems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Core Expertise
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>SAP BTP & AI Core</li>
              <li>Generative AI & LLMs</li>
              <li>Agentic AI Frameworks</li>
              <li>Enterprise Integration</li>
              <li>Solution Architecture</li>
              <li>Team Leadership</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Niladri Podder. All rights reserved.
            </p>
            
            <p className="flex items-center gap-2">
              Built to showcase enterprise AI innovation
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </p>

            <p className="text-xs">
              {/* Powered by React + Vite + Tailwind + Framer Motion */}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
