"use client";

import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav
      className={`transition-all duration-300 ease-in-out shadow-md
      ${theme === "light" ? "bg-white" : "bg-gray-900"}`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <a
          href="/"
          className="text-xl font-bold transition-colors duration-300 ease-out dark:text-white"
        >
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
        </a>
        <div className="flex items-center space-x-6">
          <div className="space-x-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 ease-in-out"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 ease-in-out"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
