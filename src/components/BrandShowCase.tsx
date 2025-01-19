import React from 'react';

const BrandShowcase = () => {
  // In a real app, you might fetch this data from an API
  const brands = [
    {
      name: "Oracle",
      logoUrl: "/api/placeholder/120/40",
      className: "text-[#FF0000]" // Oracle red
    },
    {
      name: "Morpheus",
      logoUrl: "/api/placeholder/120/40",
      className: "text-[#00A3E0]" // Morpheus blue
    },
    {
      name: "Morpheus",
      logoUrl: "/api/placeholder/120/40",
      className: "text-[#00A3E0]" // Second Morpheus instance
    },
    {
      name: "Samsung",
      logoUrl: "/api/placeholder/120/40",
      className: "text-[#1428A0]" // Samsung blue
    },
    {
      name: "Monday",
      logoUrl: "/api/placeholder/120/40",
      className: "text-[#FF3D57]" // Monday.com color
    },
    {
      name: "Segment",
      logoUrl: "/api/placeholder/120/40",
      className: "text-[#52BD95]" // Segment green
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-center text-xl text-gray-800 mb-10 font-medium">
          Trusted By Over 100+ Startups and freelance business
        </h2>
        
        {/* Brands Container */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {brands.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`} 
              className="flex items-center justify-center"
            >
              <img
                src={brand.logoUrl}
                alt={`${brand.name} logo`}
                className="h-8 md:h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;