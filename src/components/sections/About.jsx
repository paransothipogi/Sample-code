import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Users } from 'lucide-react';
import { personalInfo, education } from '../../data/personal';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const achievements = [
    {
      icon: Award,
      title: "Research Excellence",
      description: "Ongoing Cross Cultural Facial Emotion Recognition research with 62% accuracy achievement"
    },
    {
      icon: BookOpen,
      title: "Academic Performance",
      description: "Maintaining 3.4/4.0 CGPA in Computer Engineering"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong team player with excellent collaborative communication skills"
    }
  ];

  const highlights = [
    "End-to-end ML pipeline development",
    "Full-stack web application development",
    "Computer vision and deep learning expertise",
    "Database design and optimization",
    "Real-time system development",
    "Research and technical writing"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about leveraging technology to solve complex problems through innovative AI and web solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                My Journey in Technology
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  As a dedicated Computer Engineering student at the University of Jaffna, I've developed 
                  a passion for the intersection of artificial intelligence and practical software development. 
                  My journey began with curiosity about how machines can learn and evolved into hands-on 
                  experience with cutting-edge technologies.
                </p>
                <p>
                  I specialize in machine learning and AI, with extensive experience in Python, TensorFlow, 
                  and PyTorch. My research focuses on cross-cultural emotion recognition, where I've achieved 
                  significant improvements in model performance through domain adaptation techniques.
                </p>
                <p>
                  Beyond research, I'm passionate about full-stack development, creating responsive web 
                  applications using modern frameworks like React and ASP.NET. I believe in building 
                  solutions that not only work but also provide exceptional user experiences.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                What I Do Best
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                    {highlight}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Education & Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-6 rounded-2xl border border-primary-100 dark:border-primary-800"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-600 text-white rounded-xl">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Education
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-800 dark:text-gray-200">
                        {education.degree}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">{education.university}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500 mt-1">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {education.period}
                        </span>
                        <span className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          CGPA: {education.cgpa}
                        </span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-primary-200 dark:border-primary-700">
                      <h5 className="font-medium text-gray-800 dark:text-gray-200">
                        GCE Advanced Level
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">{education.alevel.stream}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500 mt-1">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {education.alevel.period}
                        </span>
                        <span className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {education.alevel.results}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              variants={itemVariants}
              className="bg-gray-50 dark:bg-dark-surface p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-600 text-white rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Available for remote work and collaboration
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Key Achievements
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-gray-700"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-lg">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                          {achievement.title}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
