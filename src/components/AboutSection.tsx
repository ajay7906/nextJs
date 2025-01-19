import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-orange-100 rounded-full opacity-20 -mr-32 -mt-32" />
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Welcome Text */}
            <p className="text-orange-500 text-sm mb-3">WELCOME TO REGISTERKARO.IN</p>
            
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              About <span className="text-orange-500">Register Karo</span>
            </h2>
            
            {/* Description */}
            <div className="space-y-4 text-gray-600">
              <p>
                We have been using Intelligencia as our DevOps vendor for our field service 
                applications over the last couple of years and I'm extremely pleased with 
                their performance, ability to execute, and willingness to adapt in our ever changing 
                environment. Perry is an outstanding leader who is fanatical about 
                customer satisfaction. He has built a solid team which has consistently delivered 
                on projects thereby exceeding everyone's expectations.
              </p>
              
              <p>
                I would strongly recommend their services to any organization that is looking for 
                solid, reliable, and predictable outcomes.
              </p>
            </div>
            
            {/* Learn More Button */}
            <button className="mt-8 bg-[#1E3A8A] text-white px-6 py-2.5 rounded inline-flex items-center group hover:bg-[#152B5F] transition-colors">
              Learn More
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/api/placeholder/600/400"
                alt="Register Karo Team"
                className="w-full h-full object-cover"
              />
              
              {/* Optional: Image Overlay for better text contrast */}
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-100 rounded-full opacity-50" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-50" />
          </div>
        </div>
      </div>
      
      {/* Bottom Decoration */}
      <div className="absolute left-0 bottom-0 w-48 h-48 bg-blue-100 rounded-full opacity-20 -ml-24 -mb-24" />
    </section>
  );
};

export default AboutSection;