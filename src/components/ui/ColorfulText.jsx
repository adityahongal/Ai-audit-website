'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const lightModeColor = "#A855F7"; // purple-500
const darkModeColor = "#C084FC"; // purple-400

const ColorfulText = ({ text }) => {
  const { theme } = useTheme();
  const [currentColor, setCurrentColor] = useState(lightModeColor);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const color = theme === 'light' ? lightModeColor : darkModeColor;
    setCurrentColor(color);

    // Trigger animation update every 2 seconds
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1); // Update key to retrigger animation
    }, 20000);

    return () => clearInterval(interval);
  }, [theme]);

  return (
    <span className="inline-flex">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${animationKey}-${index}`} // Change key to retrigger animation
          initial={{ opacity: 0, y: -5 }}
          animate={{
            opacity: 1,
            y: 0,
            color: currentColor,
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
            ease: "easeInOut",
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default ColorfulText;
