import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Mission & Vision</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
            <div className="flex items-center space-x-4 mb-6">
              <Target className="h-8 w-8 text-red-600" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To revolutionize bus travel by providing a seamless, reliable, and 
              convenient booking experience while ensuring safety and comfort for 
              all our passengers. We strive to make transportation accessible to 
              everyone through innovative technology and exceptional service.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
            <div className="flex items-center space-x-4 mb-6">
              <Eye className="h-8 w-8 text-red-600" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become the world's most trusted and preferred platform for bus 
              travel, connecting people to their destinations with unmatched 
              convenience and reliability. We envision a future where bus travel 
              is the first choice for comfortable and sustainable transportation.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-red-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Customer First',
                description: 'Everything we do is focused on delivering the best experience to our customers'
              },
              {
                title: 'Innovation',
                description: 'Continuously improving our services through technological advancement'
              },
              {
                title: 'Reliability',
                description: 'Building trust through consistent and dependable service'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-red-600">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;