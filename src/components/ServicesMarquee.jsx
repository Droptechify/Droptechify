
import React from 'react';

function ServicesMarquee() {
  const services = [
    'Website Development',
    'WordPress Development', 
    'Mobile App Development',
    'Video Editing Services',
    'Custom Software Solutions',
    'SaaS Development',
    'E-commerce Solutions',
    'UI/UX Design'
  ];

  return (
    <div className="bg-white py-8 overflow-hidden border-t border-gray-100">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...services, ...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center mx-12">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 flex-shrink-0"></div>
            <span className="text-gray-800 font-medium text-lg">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesMarquee;
