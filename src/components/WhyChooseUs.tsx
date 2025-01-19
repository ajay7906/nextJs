import React from 'react';
import { Shield, Users, Check, UserCog } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={`p-6 rounded-lg ${className}`}>
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      className: "bg-red-50"
    },
    {
      icon: <Check className="w-8 h-8 text-green-500" />,
      title: "No Hidden Fee",
      description: "Everything is laid before you with no hidden charges or conditions",
      className: "bg-green-50"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services",
      className: "bg-blue-50"
    },
    {
      icon: <UserCog className="w-8 h-8 text-purple-500" />,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      className: "bg-pink-50"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      className: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-orange-500 text-sm mb-2">WHY REGISTERKARO.IN</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose Register Karo
          </h2>
          <p className="text-gray-600 max-w-2xl">
            It is with consistent services and results that build trust with the people and that in 
            turn help us to serve the business better.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`transform transition-transform hover:-translate-y-1 ${feature.className}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;