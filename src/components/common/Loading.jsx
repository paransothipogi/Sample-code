import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-dark-bg flex items-center justify-center z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Logo Animation */}
        <motion.div
          className="text-4xl font-bold mb-8 gradient-text"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Pogitha
        </motion.div>
        
        {/* Loading Spinner */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-primary-600 rounded-full"
              animate={{ y: [0, -20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: index * 0.2
              }}
            />
          ))}
        </div>
        
        <motion.p 
          className="mt-4 text-gray-600 dark:text-gray-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Loading Portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;
