'use client';

import { useTheme } from './ThemeContext';
import SpotlightCard from './ui/SpotlightCard';

export default function FeaturesTwo() {
  const { theme } = useTheme();

  return (
    <section 
      className={`py-40 min-h-[120vh] transition-all duration-300 ease-in-out
        ${theme === 'light' 
          ? 'bg-white text-gray-900' 
          : 'bg-gray-900 text-gray-100'}`}
    >
      <SpotlightCard>
        {/* Section 1 */}
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center py-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className={`${theme === 'light' ? 'text-[#4B3F97]' : 'text-indigo-400'} text-sm font-medium mb-2`}>
              Smart Automation
            </p>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Boost the efficiency<br /> of your audit staff
            </h1>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Say goodbye to manual vouching and test of details, and let your staff focus on 
              real risk identification in forming a true and fair view.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://framerusercontent.com/images/LiIz7yCgIXd4jik9Jp4niUnwMHg.png" 
              alt="Audit Efficiency Illustration" 
              className="max-w-[450px] md:max-w-[500px] object-contain"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center py-20 mt-40">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://framerusercontent.com/images/98CzsUUGmmK6oyoDzgW6OdrfVGk.png" 
              alt="Auditing Standards Illustration" 
              className="max-w-[450px] md:max-w-[500px] object-contain"
            />
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className={`${theme === 'light' ? 'text-[#4B3F97]' : 'text-indigo-400'} text-sm font-medium mb-2`}>
              Risk & Compliance
            </p>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Be compliant with<br /> Auditing Standards
            </h1>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Minimize human error in audits by leveraging the latest technologies to 
              assist your team in ground work. Ensure accuracy with clear citations and audit trails.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center py-20 mt-40">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className={`${theme === 'light' ? 'text-[#4B3F97]' : 'text-indigo-400'} text-sm font-medium mb-2`}>
              Client Satisfaction
            </p>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Drive collaboration<br /> with clients
            </h1>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Centralise your document management, and ensure clear communication with clients. 
              Ensure proper control and trail for all PBC data.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://framerusercontent.com/images/OiYjGz6hB7ikya9u9pgQXre0PM4.jpeg" 
              alt="Client Collaboration Illustration" 
              className="max-w-[400px] md:max-w-[500px] object-contain"
            />
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
