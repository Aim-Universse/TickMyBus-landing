import React from 'react';

const Goals = () => {
  const goals = [
    {
      icon: "🏷️",
      title: "Commission Free Booking"
    },
    {
      icon: "🎁",
      title: "Bus Owner's can make Unique Offers to their regular customer by our App"
    },
    {
      icon: "📍",
      title: "Providing Boarding Points to Customers at every place"
    },
    {
      icon: "🤖",
      title: "Our AI will cut off customer communication via Manpower"
    },
    {
      icon: "👥",
      title: "Agent Interaction will be more in Our App"
    },
    {
      icon: "💳",
      title: "Request pricing Option, Promo Code etc"
    }
  ];

  return (
    <div className="bg-white py-24 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our <span className="text-red-600">Advantages</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-6 rounded-xl border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-lg bg-white"
            >
              <span className="text-3xl p-3 bg-red-50 rounded-lg">{goal.icon}</span>
              <div>
                <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                  {goal.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;