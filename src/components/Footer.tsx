import React from 'react';
import { Facebook, Instagram, Apple } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'START A BUSINESS': [
      { title: 'Features', href: '#' },
      { title: 'Solutions', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Enterprise', href: '#' },
      { title: 'Solutions', href: '#' }
    ],
    'GOVERNMENT REGISTRATION': [
      { title: 'Partners', href: '#' },
      { title: 'Community', href: '#' },
      { title: 'Developers', href: '#' },
      { title: 'App', href: '#' },
      { title: 'Blog', href: '#' }
    ],
    'COMPLIANCE & TAX': [
      { title: 'Channels', href: '#' },
      { title: 'Scale', href: '#' },
      { title: 'Watch the Demo', href: '#' },
      { title: 'Our Competition', href: '#' }
    ],
    'IRS & CDSCO': [
      { title: 'About Us', href: '#' },
      { title: 'News', href: '#' },
      { title: 'Leadership', href: '#' },
      { title: 'Media Kit', href: '#' }
    ]
  };

  const socialLinks = [
    { Icon: Facebook, href: '#' },
    { Icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ), href: '#' },
    { Icon: Apple, href: '#' },
    { Icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-[#00134C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-sm max-w-md">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={`Visit our social media`}
            >
              <social.Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-orange-500 font-medium text-sm mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col items-center">
          <div className="mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white">↑</span>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;