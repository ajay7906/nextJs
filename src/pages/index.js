import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import TableImg from '../../public/table.png'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white py-2 px-4">
        <div className="container mx-auto flex justify-end items-center space-x-4 text-sm">
          <a href="http://www.registerkaro.in" className="flex items-center">
            <span className="mr-1">✉</span> www.registerkaro.in
          </a>
          <a href="tel:+918844774683" className="flex items-center">
            <span className="mr-1">📞</span> +918844774683
          </a>
          <div className="flex items-center space-x-2">
            <a href="#" className="hover:text-gray-200">
              <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-gray-200">
              <span>Facebook</span>
            </a>
            <a href="#" className="hover:text-gray-200">
              <span>Twitter</span>
            </a>
            <a href="#" className="hover:text-gray-200">
              <span>Pinterest</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/api/placeholder/150/45" 
              alt="RegisterKaro" 
              className="h-11"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900">Our Services ▾</a>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
            <button className="bg-[#FF8C00] text-white px-6 py-2 rounded hover:bg-[#FF7000]">
              Talk An Expert
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#F5F7FF] to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-sm">Google Rating</span>
                <div className="ml-2 text-[#FFD700]">★★★★★</div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Your trusted partner<br />
                for compliance business needs
              </h1>

              <p className="text-gray-600 mb-8 max-w-xl">
                An online business compliance platform that helps entrepreneurs and 
                other individuals with various, registrations, tax filings, and other legal 
                matters.
              </p>

              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="flex items-center">
                    <img src="/api/placeholder/24/24" alt="Rating" className="mr-2" />
                    <span className="font-bold text-xl">4.5+</span>
                  </div>
                  <p className="text-sm text-gray-600">Customer Rating</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <img src="/api/placeholder/24/24" alt="Users" className="mr-2" />
                    <span className="font-bold text-xl">20,000+</span>
                  </div>
                  <p className="text-sm text-gray-600">Clients</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <img src="/api/placeholder/24/24" alt="Stability" className="mr-2" />
                    <span className="font-bold text-xl">99.8%</span>
                  </div>
                  <p className="text-sm text-gray-600">Financial Stability</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-[#1E3A8A] text-white px-8 py-3 rounded-md hover:bg-[#152B5F]">
                  Talk An Expert
                </button>
                <button className="flex items-center space-x-2 text-gray-700 px-8 py-3 rounded-md border border-gray-300 hover:bg-gray-50">
                  <span className="text-[#FF8C00]">●</span>
                  <span>See how it works</span>
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="relative w-full h-[500px]">
                <Image 
                  src={TableImg}
                  alt="Business illustration" 
                  className="w-full h-full object-contain"
                />
                
                {/* Floating Cards */}
                <div className="absolute right-0 top-0 space-y-3">
                  <div className="bg-white shadow-lg rounded-lg px-6 py-3 text-sm">
                    Annual Compliance
                  </div>
                  <div className="bg-white shadow-lg rounded-lg px-6 py-3 text-sm">
                    Payroll Services
                  </div>
                  <div className="bg-white shadow-lg rounded-lg px-6 py-3 text-sm">
                    Company Formation
                  </div>
                  <div className="bg-white shadow-lg rounded-lg px-6 py-3 text-sm">
                    Annual Compliance
                  </div>
                </div>

                {/* Search Icon */}
                <div className="absolute left-1/4 top-1/4">
                  <div className="bg-white p-3 rounded-full shadow-lg">
                    <Search className="w-6 h-6 text-[#FF8C00]" />
                  </div>
                </div>

                {/* Target Icon */}
                <div className="absolute right-1/4 bottom-1/4">
                  <div className="bg-[#FF8C00] p-4 rounded-full">
                    <div className="w-6 h-6 border-2 border-white rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full m-auto mt-1.5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;