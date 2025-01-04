import React from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      <div className="relative h-[600px] bg-gradient-to-r from-red-600 to-red-800">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
          alt="Bus Travel"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Your Journey Begins Here
          </h1>
          <p className="text-xl text-white mb-8">
            Book your bus tickets with ease and travel in comfort
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 border-b-2 pb-2">
                <MapPin className="text-red-600" />
                <input
                  type="text"
                  placeholder="From"
                  className="w-full focus:outline-none"
                />
              </div>
              <div className="flex items-center space-x-2 border-b-2 pb-2">
                <MapPin className="text-red-600" />
                <input
                  type="text"
                  placeholder="To"
                  className="w-full focus:outline-none"
                />
              </div>
              <div className="flex items-center space-x-2 border-b-2 pb-2">
                <Calendar className="text-red-600" />
                <input
                  type="date"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
            <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search Buses</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose TickMyBus?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Wide Network',
              description: 'Access to thousands of bus routes across the country'
            },
            {
              title: 'Best Prices',
              description: 'Guaranteed best fares and amazing discounts'
            },
            {
              title: '24/7 Support',
              description: 'Round the clock customer support for your needs'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;