'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

export default function Stats() {
  const { theme } = useTheme();

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      } 
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  // Number animation variants
  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        delay: 0.3 
      } 
    }
  };

  // Lighting effect for the text
  const lightingEffect = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.5 
      } 
    }
  };

  return (
    <section className={`py-16 px-4 w-full transition-all duration-300 ease-in-out
      ${theme === 'light' 
        ? 'bg-gradient-to-t from-white to-indigo-50' 
        : 'bg-gradient-to-t from-gray-900 to-indigo-950'}`}>
      <div className="max-w-6xl mx-auto mb-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 transition-colors duration-300 ease-in-out dark:text-white text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our customers achieve outstanding ROI
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* First stat card */}
          <motion.div 
            className={`rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out
              ${theme === 'light' 
                ? 'bg-white shadow-lg' 
                : 'bg-gray-800 shadow-lg shadow-indigo-500/20'}`}
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="text-6xl font-bold mb-3"
              style={{
                backgroundImage: 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              variants={numberVariants}
              animate={lightingEffect.animate}
            >
              80%
            </motion.div>
            <motion.div 
              className="transition-colors duration-300 ease-in-out dark:text-gray-300 text-gray-700"
              variants={textVariants}
            >
              reduction in manual effort
            </motion.div>
          </motion.div>
          
          {/* Second stat card */}
          <motion.div 
            className={`rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out
              ${theme === 'light' 
                ? 'bg-white shadow-lg' 
                : 'bg-gray-800 shadow-lg shadow-indigo-500/20'}`}
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="text-6xl font-bold mb-3"
              style={{
                backgroundImage: 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              variants={numberVariants}
              animate={lightingEffect.animate}
            >
              5X
            </motion.div>
            <motion.div 
              className="transition-colors duration-300 ease-in-out dark:text-gray-300 text-gray-700"
              variants={textVariants}
            >
              risk identification
            </motion.div>
          </motion.div>
          
          {/* Third stat card */}
          <motion.div 
            className={`rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out
              ${theme === 'light' 
                ? 'bg-white shadow-lg' 
                : 'bg-gray-800 shadow-lg shadow-indigo-500/20'}`}
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="text-6xl font-bold mb-3"
              style={{
                backgroundImage: 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              variants={numberVariants}
              animate={lightingEffect.animate}
            >
              2X
            </motion.div>
            <motion.div 
              className="transition-colors duration-300 ease-in-out dark:text-gray-300 text-gray-700"
              variants={textVariants}
            >
              document speed
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}