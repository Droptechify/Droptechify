
import React from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const CompanyStats = ({ className = '' }) => {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-sky-400" />,
      number: '500+',
      label: 'Projects Completed',
      description: 'Successful deliveries'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      number: '20+',
      label: 'Years Experience',
      description: 'Industry expertise'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      number: '24/7',
      label: 'Support Available',
      description: 'Always here for you'
    }
  ];

  return (
    <div className={`bg-gray-50 py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-sky-400">DropTechify?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide for delivering exceptional digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </h3>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </h4>
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
