import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen bg-gradient-to-r from-red-600 to-red-800" id="home">
      <img
        src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
        alt="Bus Travel"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            Travel with Comfort & Style
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Experience the future of bus travel with TickMyBus. 
            We connect you to thousands of destinations with premium comfort and unmatched reliability.
          </p>
          <button
            onClick={scrollToAbout}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;