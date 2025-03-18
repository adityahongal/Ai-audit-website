'use client';

import React from "react";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 shadow-xl rounded-3xl p-24 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
          <div className="space-y-6 mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-200">
              Hyperscale your audit firm and grow your business
            </p>
          </div>
          <div>
            <button className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 font-medium py-3 px-6 rounded-lg flex items-center transition duration-300 shadow-md">
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
