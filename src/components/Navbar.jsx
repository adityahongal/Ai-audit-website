'use client';

import ThemeSwitch from './ThemeSwitch';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className={`transition-all duration-300 ease-in-out shadow-md
      ${theme === 'light'
        ? 'bg-white'
        : 'bg-gray-900'}`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="text-xl font-bold transition-colors duration-300 ease-out dark:text-white">
          SignalsHQ
        </a>
        <div className="flex items-center space-x-6">
          <div className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 ease-in-out">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 ease-in-out">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 ease-in-out">
              Contact
            </a>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}