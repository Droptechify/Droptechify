import React from 'react';
import { ArrowLeft, Check, Star, Users, Clock, Award } from 'lucide-react';

const ServiceDetailPage = ({ service, onBack, onPageChange }) => {
  const serviceData = {
    'website-development': {
      title: 'Website Development',
      subtitle: 'Custom Websites That Drive Results',
      description: 'We create stunning, responsive websites that not only look great but also deliver exceptional performance and user experience.',
      image: '/attached_assets/Programmer-cuate_1754317120909.png',
      features: [
        'Responsive & Mobile-First Design',
        'SEO Optimized Structure',
        'Fast Loading Performance',
        'Modern UI/UX Design',
        'Cross-Browser Compatibility',
        'Content Management System',
        'E-commerce Integration',
        'Analytics & Tracking Setup'
      ],
      techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],

      timeline: '2-4 weeks',
      process: [
        'Requirements Analysis',
        'Design & Wireframes',
        'Development',
        'Testing & QA',
        'Launch & Support'
      ]
    },
    'wordpress-development': {
      title: 'WordPress Development',
      subtitle: 'Professional WordPress Solutions',
      description: 'Custom WordPress themes, plugins, and complete website solutions tailored to your specific business needs.',
      image: '/attached_assets/Programmer-amico_1754317120910.png',
      features: [
        'Custom Theme Development',
        'Plugin Development',
        'WooCommerce Integration',
        'WordPress Security',
        'Performance Optimization',
        'Content Migration',
        'Maintenance & Updates',
        'SEO Configuration'
      ],
      techStack: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'CSS3', 'HTML5'],

      timeline: '1-3 weeks',
      process: [
        'Consultation',
        'Theme Selection/Custom Design',
        'Development & Customization',
        'Content Setup',
        'Launch & Training'
      ]
    },
    'app-development': {
      title: 'Mobile App Development',
      subtitle: 'Native & Cross-Platform Apps',
      description: 'Build powerful mobile applications for iOS and Android with seamless user experience and robust functionality.',
      image: '/attached_assets/Programmer-bro_1754317120912.png',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'API Integration',
        'Push Notifications',
        'App Store Deployment',
        'Performance Optimization'
      ],
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],

      timeline: '6-12 weeks',
      process: [
        'App Concept & Planning',
        'UI/UX Design',
        'Development',
        'Testing & QA',
        'App Store Submission'
      ]
    },
    'video-editing': {
      title: 'Video Editing Services',
      subtitle: 'Professional Video Production',
      description: 'High-quality video editing services for all your content needs, from social media to corporate presentations.',
      image: '/attached_assets/Programmer-pana_1754317120910.png',
      features: [
        'YouTube Shorts Editing',
        'Long Form Content',
        'Animation Videos',
        'Motion Graphics',
        'Color Correction',
        'Sound Design',
        'Social Media Optimization',
        'Corporate Video Production'
      ],
      techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop'],

      timeline: '3-7 days',
      process: [
        'Content Review',
        'Editing & Enhancement',
        'Review & Feedback',
        'Final Delivery',
        'Revisions if needed'
      ]
    },
    'saas-development': {
      title: 'SaaS Development',
      subtitle: 'Scalable Software Solutions',
      description: 'Build powerful Software-as-a-Service platforms with subscription management and multi-tenant architecture.',
      image: '/attached_assets/Developer activity-rafiki_1754317120912.png',
      features: [
        'Multi-Tenant Architecture',
        'Subscription Management',
        'User Authentication',
        'Payment Integration',
        'Analytics Dashboard',
        'API Development',
        'Cloud Infrastructure',
        'Scalable Database Design'
      ],
      techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],

      timeline: '8-16 weeks',
      process: [
        'Market Research',
        'Architecture Planning',
        'MVP Development',
        'User Testing',
        'Full Platform Launch'
      ]
    }
  };

  const currentService = serviceData[service] || serviceData['website-development'];

  return (
    <div className="pt-20 min-h-screen bg-white animate-fade-in">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sky-400 hover:text-sky-500 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout: Image first, then text */}
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              {/* Image Section */}
              <div className="w-full md:w-1/2 order-1 md:order-2 animate-slide-right">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-72 md:h-96 object-contain mx-auto"
                />
              </div>
              
              {/* Text Section */}
              <div className="w-full md:w-1/2 order-2 md:order-1 animate-slide-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  {currentService.title}
                </h1>
                <h2 className="text-xl md:text-2xl text-sky-400 mb-6 md:mb-8">
                  {currentService.subtitle}
                </h2>
                <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                  {currentService.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onPageChange('contact')}
                    className="bg-sky-400 hover:bg-sky-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm md:text-base"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => onPageChange('case-studies')}
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base"
                  >
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Details */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto">

              {/* Features */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-sky-50 rounded-xl animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <Check className="text-sky-500 flex-shrink-0" size={18} />
                      <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Process */}
                <div className="mt-12 md:mt-16">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Our Process</h3>
                  <div className="space-y-4 md:space-y-6">
                    {currentService.process.map((step, index) => (
                      <div key={index} className="flex items-center gap-4 md:gap-6 animate-slide-left" style={{ animationDelay: `${index * 200}ms` }}>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-400 text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 p-3 md:p-4 bg-white rounded-xl border border-gray-200">
                          <h4 className="font-semibold text-gray-900 text-sm md:text-base">{step}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              <div className="lg:col-span-1 order-1 lg:order-2">
                <div className="lg:sticky lg:top-32">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8 animate-slide-right">
                    <div className="text-center mb-6 md:mb-8">
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Project Details</h4>
                      <div className="w-16 h-1 bg-sky-400 mx-auto"></div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm md:text-base">Custom Pricing</span>
                        <span className="text-xl md:text-2xl font-bold text-sky-500">Get Quote</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm md:text-base">Timeline</span>
                        <span className="font-semibold text-gray-900 flex items-center gap-2 text-sm md:text-base">
                          <Clock size={16} />
                          {currentService.timeline}
                        </span>
                      </div>

                      <div className="border-t border-gray-200 pt-4 md:pt-6">
                        <h5 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Technology Stack</h5>
                        <div className="flex flex-wrap gap-2">
                          {currentService.techStack.map((tech, index) => (
                            <span key={index} className="bg-sky-100 text-sky-700 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => onPageChange('contact')}
                        className="w-full bg-sky-400 hover:bg-sky-500 text-white py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 mt-6 md:mt-8 text-sm md:text-base"
                      >
                        Get Custom Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">Why Choose Our {currentService.title} Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="animate-bounce-in" style={{ animationDelay: '200ms' }}>
                <Award className="text-sky-400 w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" />
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">100+</h4>
                <p className="text-gray-600 text-sm md:text-base">Projects Completed</p>
              </div>
              <div className="animate-bounce-in" style={{ animationDelay: '400ms' }}>
                <Users className="text-sky-400 w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" />
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">50+</h4>
                <p className="text-gray-600 text-sm md:text-base">Happy Clients</p>
              </div>
              <div className="animate-bounce-in" style={{ animationDelay: '600ms' }}>
                <Star className="text-sky-400 w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" />
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">5.0</h4>
                <p className="text-gray-600 text-sm md:text-base">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Start Your Project?</h3>
          <p className="text-base md:text-xl text-sky-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your requirements and create something amazing together.
          </p>
          <button
            onClick={() => onPageChange('contact')}
            className="bg-white text-sky-500 px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
          >
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
