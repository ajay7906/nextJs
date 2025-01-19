import React from 'react';
import { FileText, DollarSign, UserCheck, Mail } from 'lucide-react';

const ApplicationSteps = () => {
  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      text: "Fill up Application Form",
      bgColor: "bg-pink-500"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      text: "Make Online Payment",
      bgColor: "bg-green-500"
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      text: "Executive will Process Application",
      bgColor: "bg-purple-500"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "Get Confirm Mail",
      bgColor: "bg-blue-500"
    }
  ];

  return (
    <div className="w-full bg-orange-400 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 flex-grow basis-40 justify-center"
            >
              <div className={`${step.bgColor} p-2 rounded-lg`}>
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
              <span className="text-sm font-medium text-white whitespace-normal">
                {step.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationSteps;