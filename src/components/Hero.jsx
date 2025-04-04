'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import ColorfulText from './ui/ColorfulText';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full py-16 md:py-24 transition-all duration-300 ease-in-out ${
        theme === 'light'
          ? 'bg-gradient-to-b from-white to-indigo-200'
          : 'bg-gradient-to-b from-gray-900 to-indigo-950'
      }`}
    >
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
            className="text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 ease-in-out dark:text-white text-gray-900"
            variants={itemVariants}
          >
            Hyperscale your{' '}
            <ColorfulText key={Date.now()} text="Audit & Advisory firm " />
            with AI
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl max-w-4xl transition-colors duration-300 ease-in-out dark:text-gray-300 text-gray-700"
            variants={itemVariants}
          >
            AudviseHQ improves the performance of Audit & Advisory firms with agents to collect, extract, analyse, verify and reference documentation at scale
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
            className={`rounded-lg w-full h-auto max-w-5xl transition-all duration-300 ease-in-out ${
              theme === 'light'
                ? 'shadow-xl'
                : 'shadow-2xl shadow-indigo-500/20 brightness-90'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
