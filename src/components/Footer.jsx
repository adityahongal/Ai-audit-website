'use client';

import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-white py-8 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              {/* Logo section */}
              <div className="mb-6 md:mb-0">
                <div className="flex items-center">
                  <div className="text-indigo-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-bold">SignalsHQ</span>
                </div>
              </div>
    
              {/* Navigation links */}
              <div className="flex flex-col mb-6 md:mb-0">
                <a href="#" className="text-gray-800 hover:text-indigo-600 mb-3">Home</a>
                <a href="#" className="text-gray-800 hover:text-indigo-600 mb-3">Privacy Policy</a>
                <a href="#" className="text-gray-800 hover:text-indigo-600">Blog</a>
              </div>
    
              {/* Social links */}
              <div>
                <a href="#" className="text-gray-800 hover:text-indigo-600">LinkedIn</a>
              </div>
            </div>
    
            {/* Divider line */}
            <div className="border-t border-gray-200 my-4"></div>
    
            {/* Copyright */}
            <div className="text-right text-gray-600 text-sm">
              © adityahongal 2025
            </div>
          </div>
        </footer>
      );
  }
  