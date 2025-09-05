
import React from 'react';
import { ArrowRight, Code, Smartphone, Video, Cog, Globe, Database, Zap, Palette } from 'lucide-react';

function Services({ onPageChange }) {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom websites built with modern technologies, responsive design, and optimized performance for your business needs.',
      icon: <Globe size={32} />,
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX']
    },
    {
      title: 'WordPress Development', 
      description: 'Professional WordPress solutions including custom themes, plugins, and e-commerce functionality.',
      icon: <Code size={32} />,
      features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Security']
    },
    {
      title: 'Website SEO',
      description: 'Complete SEO optimization to improve your search rankings and drive organic traffic to your website.',
      icon: <Zap size={32} />,
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Analytics']
    },
    {
      title: 'Python Automation',
      description: 'Automated workflows and scripts to streamline your business processes and increase efficiency.',
      icon: <Cog size={32} />,
      features: ['Web Scraping', 'Data Processing', 'API Integration', 'Workflow Automation']
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your unique business requirements and workflows.',
      icon: <Database size={32} />,
      features: ['Custom Development', 'System Integration', 'Database Design', 'API Development']
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
      icon: <Smartphone size={32} />,
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'UI/UX Design']
    },
    {
      title: 'SaaS Software Development',
      description: 'Scalable Software-as-a-Service platforms with subscription management and multi-tenant architecture.',
      icon: <Palette size={32} />,
      features: ['Multi-Tenant', 'Subscription Management', 'Cloud Architecture', 'Scalability']
    },
    {
      title: 'Video Editing Services',
      description: 'Professional video editing for marketing content, tutorials, and promotional videos with high quality output.',
      icon: <Video size={32} />,
      features: ['Motion Graphics', 'Color Correction', 'Sound Design', 'Professional Editing']
    }
  ];

  const handleLearnMore = (service) => {
    if (onPageChange) {
      onPageChange('contact');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-sky-400">Services</span>
            </h2>
            <div className="w-20 h-1 bg-sky-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions to help your business grow and succeed in the digital world.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-sky-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button 
                  onClick={() => handleLearnMore(service)}
                  className="w-full bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center group-hover:shadow-lg"
                >
                  Contact for Discussion
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-sky-400 to-sky-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-sky-100 mb-6 text-lg">
                Let's discuss your project and create something amazing together.
              </p>
              <button 
                onClick={() => onPageChange && onPageChange('contact')}
                className="bg-white text-sky-500 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
