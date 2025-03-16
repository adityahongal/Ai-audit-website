'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SpotlightCard({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-xl"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(0, 123, 255, 0.3), transparent)`,

        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
