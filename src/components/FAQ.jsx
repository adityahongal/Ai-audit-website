'use client';

import React, { useState, useRef } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  
  return (
    <div
      className={`rounded-2xl shadow-md border transition-all duration-500 ease-out ${
        isOpen ? 'border-blue-50 bg-gray-50' : 'border-gray-200 bg-white'
      } mb-4`}
    >
      {/* Question Section */}
      <div 
        className="flex justify-between items-center py-4 px-6 cursor-pointer select-none"
        onClick={onClick}
        role="button"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <div className="transform transition-transform duration-500 ease-in-out">
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
              className="text-blue-500 transition-all duration-500"
              style={{ transform: 'rotate(0deg)' }}
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
              className="text-blue-500 transition-all duration-500"
              style={{ transform: 'rotate(0deg)' }}
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </div>
      </div>

      {/* Answer Section with height animation */}
      <div 
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ 
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 1000}px` : '0px',
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? '8px' : '0px'
        }}
      >
        <div className="py-4 px-6 text-gray-700">
          {answer}
        </div>
      </div>
    </div>
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
      question: "How does SignalsHQ work?",
      answer: "SignalsHQ is like your extended team. It brings all your data management in one place, where you can request PBC from clients, standardize the data, analyse flux and finally conduct test of details for relevant transactions. All of this is done in one place with complete audit trails"
    },
    {
      question: "Is my data secure?",
      answer: "Yes, your data is fully encrypted and protected with industry-standard security measures. We implement end-to-end encryption, regular security audits, and strict access controls."
    },
    {
      question: "What use cases does SignalsHQ work for?",
      answer: "SignalsHQ works for various data management workflows including audit data collection, financial reporting, compliance processes, and any scenario where you need to collect, standardize, and analyze data from multiple sources."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy. Simply sign up for an account, set up your team, and begin adding your data sources. Our onboarding team will guide you through the process and provide any necessary training."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently <br /> asked questions
          </h2>
          <p className="text-gray-500">
            Have questions? We've got answers. For everything else email me at{' '}
            <a href="mailto:adityahongalwork@gmail.com" className="text-blue-500 underline">
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
  );
};

export default FAQ;