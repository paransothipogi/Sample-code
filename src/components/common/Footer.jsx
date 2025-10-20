import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/personal';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Mail: Mail
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Pogitha</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Computer Engineering student passionate about AI and full-stack development. 
              Building innovative solutions with cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.name !== "Email" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>{personalInfo.location}</p>
              <p>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-400 transition-colors">
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Pogitha Paransothinathan © 2025
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="p-2 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
            <span className="sr-only">Back to top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
