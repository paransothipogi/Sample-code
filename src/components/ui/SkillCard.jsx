import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="bg-white dark:bg-dark-bg p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300"
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        rotateY: 5
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Icon */}
      <div className="text-4xl mb-3">{skill.icon}</div>
      
      {/* Skill Name */}
      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
        {skill.name}
      </h3>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-primary-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
      
      {/* Level Percentage */}
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {skill.level}%
      </span>
    </motion.div>
  );
};

export default SkillCard;
