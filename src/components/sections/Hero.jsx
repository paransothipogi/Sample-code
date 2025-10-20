import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/personal';
import Button from '../common/Button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Mail: Mail
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-dark-bg dark:to-dark-surface px-4 pt-20">
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary-500 shadow-xl bg-gradient-to-br from-primary-400 to-primary-600">
            <img 
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&size=200&background=3b82f6&color=ffffff&font-size=0.6`;
              }}
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-inter mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {personalInfo.title}
          </motion.p>
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">8+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">3.4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">CGPA (out of 4.0)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">62%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Best ML Model Accuracy</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
              size="lg"
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button
              href={personalInfo.resumeUrl}
              variant="outline"
              size="lg"
              download
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white dark:bg-dark-surface shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-100 dark:border-gray-800"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-primary-600 transition-colors p-2"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
