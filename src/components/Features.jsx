export default function Features() {
    const features = [
      { 
        title: 'Streamline your work', 
        description: 'Efficiency starts here. Streamline your fieldwork to automate data collection, standardization, flux analysis and test of details.', 
        icon: '⚡' 
      },
      { 
        title: 'Works with your favourite tools', 
        description: 'Integrate quickly and directly with your tools you already love. It’s as easy as 1, 2, 3.', 
        icon: '🔲' 
      },
      { 
        title: 'Save hours every week', 
        description: 'Unlock more time for real work. Save hours every week with agents and focus on value added outcomes.', 
        icon: '⭐' 
      },
    ];
  
    return (
      <section className="bg-[#4B3F97] text-white py-16 px-4 mx-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-20">
            SignalsHQ is built for Auditors
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex-1 min-w-[320px] max-w-[400px] bg-white text-black rounded-2xl p-6 shadow-md"
              >
                <div className="flex items-center mb-10">
                  <span className="text-[#4B3F97] text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl text-left font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-left">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  