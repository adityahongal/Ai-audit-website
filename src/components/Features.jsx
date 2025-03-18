'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from './ThemeContext';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const { theme } = useTheme();
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.feature-card');

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        x: -50,
        y: (i) => (i % 2 === 0 ? 30 : -30),
        filter: 'blur(20px)',
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const features = [
    { 
      title: 'Streamline your work', 
      description: 'Efficiency starts here. Streamline your fieldwork to automate data collection, standardization, flux analysis and test of details.', 
      icon: '⚡' 
    },
    { 
      title: 'Works with your favourite tools', 
      description: 'Integrate quickly and directly with your tools you already love. It’s as easy as 1, 2, 3.', 
      icon: '🔲' 
    },
    { 
      title: 'Save hours every week', 
      description: 'Unlock more time for real work. Save hours every week with agents and focus on value added outcomes.', 
      icon: '⭐' 
    },
  ];

  return (
    // <section className="bg-[#4B3F97] text-white py-16 px-4 lg:mx-20">
    <section className={`py-16 px-4 w-full transition-all duration-300 ease-in-out
        ${theme === 'light' 
            ? 'bg-[#4B3F97] text-white' 
            : 'bg-gray-900 text-gray-100'}`}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-20 transition-colors duration-300 ease-in-out">
          SignalsHQ is built for Auditors
        </h2>

        {/* Feature Cards */}
        <div ref={containerRef} className="flex flex-wrap justify-center items-stretch gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card flex-1 min-w-[350px] max-w-[450px] rounded-2xl p-8 shadow-lg transition-all duration-300 ease-in-out
                ${theme === 'light' 
                  ? 'bg-white text-black shadow-md' 
                  : 'bg-gray-800 text-gray-200 shadow-md shadow-indigo-500/20'}`}
            >
              {/* Icon */}
              <div className="flex items-center mb-6">
                <span className={`${theme === 'light' 
                  ? 'text-[#4B3F97]' 
                  : 'text-indigo-400'} text-4xl`}>
                  {feature.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl text-left font-semibold mb-4 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className={`text-left leading-relaxed transition-colors duration-300
                ${theme === 'light' 
                  ? 'text-gray-600' 
                  : 'text-gray-400'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
