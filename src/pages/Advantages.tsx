import React from 'react';

const Advantages = () => {
  const advantages = [
    {
      icon: "🔴",
      title: "Commission Free Booking",
      features: [
        "No commission fees on bookings.",
        "Competitive Settlement",
        "Transparent pricing",
        "Boosts bookings without platform costs."
      ]
    },
    {
      icon: "👥",
      title: "Regular Customers Engagement for Bus Operators",
      features: [
        "Regular booking customer volume increase.",
        "Make Offers by Campaign",
        "Providing unique offers for visiting customers",
        "Request Pricing Method for customers",
        "AI-driven support customer Service"
      ]
    },
    {
      icon: "📱",
      title: "Direct Commission for Agents",
      features: [
        "Bus Owners have deciding an agent commission percentage.",
        "Increased Ticket Sales via Agent Network..",
        "Increased exposure for bus owners across regions.",
        "Streamlined booking process"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-red-50 to-white py-24 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-red-600">Goal</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl p-3 bg-red-50 rounded-lg">{advantage.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
              </div>
              <ul className="space-y-4">
                {advantage.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-start space-x-2 text-gray-900"
                  >
                    <span className="text-red-500 mt-1">•</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;