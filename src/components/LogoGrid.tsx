import React from 'react';

const LogoGrid = () => {
  // Example logos array - replace placeholder URLs with actual logo URLs
  const logos = [
    { name: "Dropbox", class: "w-10 h-10 left-[10%] top-[20%]" },
    { name: "Atlassian", class: "w-8 h-8 left-[25%] top-[15%]" },
    { name: "Uber", class: "w-12 h-12 left-[40%] top-[10%]" },
    { name: "Microsoft", class: "w-10 h-10 left-[60%] top-[15%]" },
    { name: "Firebase", class: "w-10 h-10 left-[75%] top-[20%]" },
    { name: "Pinterest", class: "w-8 h-8 left-[15%] top-[40%]" },
    { name: "Shopify", class: "w-10 h-10 left-[30%] top-[35%]" },
    { name: "GitLab", class: "w-12 h-12 left-[45%] top-[45%]" },
    { name: "Trello", class: "w-10 h-10 left-[65%] top-[40%]" },
    { name: "Jira", class: "w-8 h-8 left-[80%] top-[35%]" },
    { name: "Sketch", class: "w-10 h-10 left-[20%] top-[60%]" },
    { name: "Microsoft", class: "w-12 h-12 left-[35%] top-[65%]" },
    { name: "Dropbox", class: "w-10 h-10 left-[55%] top-[60%]" },
    { name: "Cloud", class: "w-8 h-8 left-[70%] top-[65%]" },
    { name: "Google", class: "w-10 h-10 left-[85%] top-[60%]" }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Happy Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-
            leveling customer service for state of the art customer service.
          </p>
        </div>

        {/* Logo Grid Container */}
        <div className="relative h-[400px] md:h-[500px] mx-auto max-w-4xl">
          {/* Logos */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110 ${logo.class}`}
            >
              <div className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src="/api/placeholder/48/48"
                  alt={`${logo.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            Show more
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;