import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Tag, Star, Code } from 'lucide-react';

const ProjectCard = ({ project, isHovered, onHover }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => onHover(project.id)}
      onHoverEnd={() => onHover(null)}
      className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 group"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x200/3b82f6/ffffff?text=${encodeURIComponent(project.title)}`;
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status & Category Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {project.status && (
            <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full shadow-lg">
              {project.status}
            </span>
          )}
          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full flex items-center shadow-lg">
            <Tag className="w-3 h-3 mr-1" />
            {project.category}
          </span>
        </div>

        {/* Action Buttons (visible on hover) */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-dark-bg/90 text-gray-700 dark:text-gray-300 rounded-full hover:bg-white dark:hover:bg-dark-bg transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
          {project.demo && project.demo !== "#" && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Key Features (show first 2) */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <div className="space-y-1">
              {project.features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-start text-xs text-gray-500 dark:text-gray-500">
                  <Star className="w-3 h-3 mr-1 mt-0.5 text-primary-500 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
              {project.features.length > 2 && (
                <p className="text-xs text-gray-400 dark:text-gray-600 ml-4">
                  +{project.features.length - 2} more features
                </p>
              )}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-md">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Achievements */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-green-700 dark:text-green-400">Key Achievements:</span>
            </div>
            <div className="mt-2 space-y-1">
              {project.achievements.map((achievement, index) => (
                <p key={index} className="text-xs text-green-600 dark:text-green-400">
                  • {achievement}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium group"
            >
              <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Code
            </a>
          )}
          
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium group"
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Demo
            </a>
          )}
          
          {(!project.demo || project.demo === "#") && (
            <div className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg text-sm font-medium">
              <Code className="w-4 h-4 mr-2" />
              In Development
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
