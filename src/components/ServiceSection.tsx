import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  withDivider?: boolean;
}

const ServiceCard = ({ icon, title, description, withDivider = false }: ServiceCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center p-6">
      {/* Icon */}
      <div className="mb-4 w-16 h-16 flex items-center justify-center">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 max-w-xs">{description}</p>
      
      {/* Learn More Link */}
      <a href="#" className="text-blue-600 text-sm hover:text-blue-700 flex items-center">
        Learn more <span className="ml-1">→</span>
      </a>
      
      {/* Vertical Divider */}
      {withDivider && (
        <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-gray-200" />
      )}
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
      withDivider: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals.",
      withDivider: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      ),
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
      withDivider: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: "Payroll Services",
      description: "Expand your business goals with modern solutions.",
      withDivider: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
        </svg>
      ),
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm mb-2">WELCOME TO REGISTERKARO.IN</p>
          <h2 className="text-3xl font-bold">Explore Our Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              withDivider={service.withDivider}
            />
          ))}
        </div>

        {/* See All Services Button */}
        <div className="text-center mt-12">
          <button className="bg-[#1E3A8A] text-white px-8 py-3 rounded-md hover:bg-[#152B5F] transition-colors duration-300">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;