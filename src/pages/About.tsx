const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About <span className='text-red-600'>TickMyBus</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80"
              alt="Modern Bus"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Founded in 2024, TickMyBus has revolutionized the way people book bus tickets. 
              We're committed to making bus travel simple, accessible, and comfortable for everyone.
            </p>
            
            <p className="text-lg text-gray-700">
              Our platform connects thousands of bus operators with millions of passengers, 
              ensuring seamless journeys across the country. With cutting-edge technology 
              and customer-first approach, we've become the most trusted name in bus booking.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600">1M+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600">100+</div>
                <div className="text-gray-600">Bus Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;