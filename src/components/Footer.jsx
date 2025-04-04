'use client';

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Logo section */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="text-indigo-600 dark:text-indigo-400 mr-2">
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
                >
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                AudviseHQ
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-gray-800 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 mb-3 transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-800 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 mb-3 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-800 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              Blog
            </a>
          </div>

          {/* Social links */}
          <div>
            <a 
              href="#" 
              className="text-gray-800 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

        {/* Copyright */}
        <div className="text-right text-gray-600 dark:text-gray-400 text-sm">
          © adityahongal 2025
        </div>
      </div>
    </footer>
  );
}
