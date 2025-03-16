'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger delay between children
      delayChildren: 0.2, // Initial delay before starting stagger
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b to-indigo-200 from-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Staggered container */}
        <motion.div 
          className="flex flex-col items-center text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Hyperscale your Audit & Advisory firm with AI
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-gray-700 max-w-4xl"
            variants={itemVariants}
          >
            SignalsHQ improves the performance of Audit & Advisory firms with agents to collect, extract, analyse, verify and reference documentation at scale
          </motion.p>
        </motion.div>

        {/* Staggered Image */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.img 
            src="https://framerusercontent.com/images/2mWEfhFVLm62HjNg8br9Kp46Xdc.png" 
            alt="Audit & Advisory dashboard visualization"
            className="rounded-lg shadow-xl w-full h-auto max-w-5xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
