'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.feature-card');

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        x: -50,
        y: (i) => (i % 2 === 0 ? 30 : -30), // Alternating y-values for the ladder effect
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
    <section className="bg-[#4B3F97] text-white py-16 px-4 lg:mx-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-20">
          SignalsHQ is built for Auditors
        </h2>
        <div ref={containerRef} className="flex flex-wrap justify-center items-stretch gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex-1 min-w-[350px] max-w-[450px] bg-white text-black rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <span className="text-[#4B3F97] text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl text-left font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-left leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
