'use client';

export default function FeaturesTwo() {
    return (
        <section className="py-40 bg-white min-h-[120vh]">
            {/* Section 1: Smart Automation */}
            <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center py-20">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <p className="text-[#4B3F97] text-sm font-medium mb-2">
                        Smart Automation
                    </p>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Boost the efficiency<br /> of your audit staff
                    </h1>
                    <p className="text-gray-600">
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

            {/* Section 2: Risk & Compliance */}
            <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center py-20 mt-40">
                <div className="md:w-1/2 flex justify-center">
                    <img 
                        src="https://framerusercontent.com/images/98CzsUUGmmK6oyoDzgW6OdrfVGk.png" 
                        alt="Auditing Standards Illustration" 
                        className="max-w-[450px] md:max-w-[500px] object-contain"
                    />
                </div>

                <div className="md:w-1/2 mb-10 md:mb-0">
                    <p className="text-[#4B3F97] text-sm font-medium mb-2">
                        Risk & Compliance
                    </p>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Be compliant with<br /> Auditing Standards
                    </h1>
                    <p className="text-gray-600">
                        Minimize human error in audits by leveraging the latest technologies to 
                        assist your team in ground work. Ensure accuracy with clear citations and audit trails.
                    </p>
                </div>
            </div>

            {/* Section 3: Client Satisfaction */}
            <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center py-20 mt-40">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <p className="text-[#4B3F97] text-sm font-medium mb-2">
                        Client Satisfaction
                    </p>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Drive collaboration<br /> with clients
                    </h1>
                    <p className="text-gray-600">
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
        </section>
    );
}
