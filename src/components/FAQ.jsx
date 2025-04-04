'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        boxShadow: isOpen
          ? '0 4px 20px rgba(59, 130, 246, 0.5)'
          : '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
      className={`rounded-2xl border transition-all duration-500 ease-out ${
        isOpen
          ? 'border-blue-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700'
          : 'border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700'
      } mb-4`}
    >
      {/* Question Section */}
      <div
        className="flex justify-between items-center py-4 px-6 cursor-pointer select-none"
        onClick={onClick}
        role="button"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? -90 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {isOpen ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-blue-500"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-blue-500"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </motion.div>
      </div>

      {/* Answer Section */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="overflow-hidden"
      >
        <div className="py-4 px-6 text-gray-700 dark:text-gray-300">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const faqData = [
    {
      question: "How does AudviseHQ work?",
      answer: "AudviseHQ is like your extended team. It brings all your data management in one place..."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, your data is fully encrypted and protected with industry-standard security measures."
    },
    {
      question: "What use cases does AudviseHQ work for?",
      answer: "AudviseHQ works for various data management workflows including audit data collection..."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy. Simply sign up for an account, set up your team..."
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Frequently <br /> asked questions
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Have questions? We've got answers. For everything else email me at{' '}
            <a
              href="mailto:adityahongalwork@gmail.com"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 underline"
            >
              adityahongalwork@gmail.com
            </a>
            .
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 flex flex-col">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
