'use client';

import React from "react";

const CallToAction = () => {
    return (
        <section className="py-16 px-4 lg:mx-20">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-gradient-to-r from-purple-50 to-indigo-100 rounded-3xl p-24 flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-6 mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-900">Ready to get started?</h2>
            <p className="text-xl text-gray-800">Hyperscale your audit firm and grow your business</p>
          </div>
          <div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg flex items-center transition duration-300">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
      );
}

export default CallToAction;