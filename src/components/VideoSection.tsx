import React from 'react';
import { Play, Lightbulb, Zap } from 'lucide-react';

const VideoIntroSection = () => {
  return (
    <section className="bg-[#1E3A8A] text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Video Introductions
            </h2>
            
            <p className="text-blue-200 mb-8">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna 
              volutpat pellentesque a diam hendrerit amet sed.
            </p>
            
            {/* Feature List */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 rounded-full p-2 mt-1">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Explore ideas together
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Engage audience segments and finally create actionable insights. 
                    Amplify vertical integration.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 rounded-full p-2 mt-1">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Bring those ideas to life
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Engage audience segments and finally create actionable insights. 
                    Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Video Section */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/api/placeholder/600/400"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transform transition-transform hover:scale-110">
                  <Play className="w-8 h-8" fill="currentColor" />
                </button>
              </div>
              
              {/* Optional: Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroSection;