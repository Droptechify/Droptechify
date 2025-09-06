
import React, { useEffect } from 'react';
import Hero from './Hero';
import ServicesMarquee from './ServicesMarquee';
import Services from './Services';
import WhyChoose from './WhyChoose';
import Contact from './Contact';
import { initScrollAnimations } from '../utils/scrollAnimations';

function HomePage({ onPageChange }) {
  useEffect(() => {
    const observer = initScrollAnimations();
    return () => observer?.disconnect();
  }, []);

  return (
    <div className="animate-fade-in">
      <Hero onPageChange={onPageChange} />
      <ServicesMarquee />
      
      {/* Scrolling Services Animation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* SaaS Development */}
            <div className="mb-16 md:mb-32 service-section" data-aos="fade-right">
              {/* Mobile Layout */}
              <div className="block md:hidden mobile-image-text-layout">
                <div className="mb-8">
                  <img 
                      src="/attached_assets/developer-activity.png" 
                        alt="SaaS Development" 
                        className="w-full h-64 object-contain mx-auto rounded-xl"
                        />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    SaaS Development
                  </h2>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Build scalable Software-as-a-Service platforms with subscription management, multi-tenant architecture, and cloud-based solutions that grow with your business.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      Multi-Tenant Architecture
                    </li>
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      Subscription Management
                    </li>
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      Cloud Infrastructure
                    </li>
                  </ul>
                  <button 
                    onClick={() => onPageChange('service-detail', 'saas-development')}
                    className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="fade-in-left">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      SaaS Development
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Build scalable Software-as-a-Service platforms with subscription management, multi-tenant architecture, and cloud-based solutions that grow with your business.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        Multi-Tenant Architecture
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        Subscription Management
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        Cloud Infrastructure
                      </li>
                    </ul>
                    <button 
                      onClick={() => onPageChange('service-detail', 'saas-development')}
                      className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="fade-in-right">
                    <img 
                      src="/attached_assets/Developer activity-rafiki_1754317120912.png" 
                      alt="SaaS Development" 
                      className="w-full h-96 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Website Development */}
            <div className="mb-16 md:mb-32 service-section" data-aos="fade-left">
              {/* Mobile Layout */}
              <div className="block md:hidden mobile-image-text-layout">
                <div className="mb-8">
                  <img 
                    src="/attached_assets/Programmer-cuate_1754317120909.png" 
                    alt="Website Development" 
                    className="w-full h-64 object-contain mx-auto rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Website Development
                  </h2>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Custom websites built with modern technologies, responsive design, and optimized performance for your business needs.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      Responsive Design
                    </li>
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      SEO Optimized
                    </li>
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      Fast Loading
                    </li>
                  </ul>
                  <button 
                    onClick={() => onPageChange('service-detail', 'website-development')}
                    className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="fade-in-left">
                    <img 
                      src="/attached_assets/Programmer-cuate_1754317120909.png" 
                      alt="Website Development" 
                      className="w-full h-96 object-contain"
                    />
                  </div>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="fade-in-right">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Website Development
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Custom websites built with modern technologies, responsive design, and optimized performance for your business needs.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        Responsive Design
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        SEO Optimized
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        Fast Loading
                      </li>
                    </ul>
                    <button 
                      onClick={() => onPageChange('service-detail', 'website-development')}
                      className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* WordPress Development */}
            <div className="mb-16 md:mb-32 service-section" data-aos="fade-right">
              {/* Mobile Layout */}
              <div className="block md:hidden mobile-image-text-layout">
                <div className="mb-8">
                  <img 
                    src="/attached_assets/Programmer-amico_1754317120910.png" 
                    alt="WordPress Development" 
                    className="w-full h-64 object-contain mx-auto rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    WordPress Development
                  </h2>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Professional WordPress solutions including custom themes, plugins, and e-commerce functionality.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      Custom Themes
                    </li>
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      Plugin Development
                    </li>
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      WooCommerce Integration
                    </li>
                  </ul>
                  <button 
                    onClick={() => onPageChange('service-detail', 'wordpress-development')}
                    className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="fade-in-left">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      WordPress Development
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Professional WordPress solutions including custom themes, plugins, and e-commerce functionality.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        Custom Themes
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        Plugin Development
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        WooCommerce Integration
                      </li>
                    </ul>
                    <button 
                      onClick={() => onPageChange('service-detail', 'wordpress-development')}
                      className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="fade-in-right">
                    <img 
                      src="/attached_assets/Programmer-amico_1754317120910.png" 
                      alt="WordPress Development" 
                      className="w-full h-96 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bug Fixing */}
            <div className="mb-16 md:mb-32 service-section" data-aos="fade-left">
              {/* Mobile Layout */}
              <div className="block md:hidden mobile-image-text-layout">
                <div className="mb-8">
                  <img 
                    src="/attached_assets/Programmer-bro_1754317120912.png" 
                    alt="Bug Fixing" 
                    className="w-full h-64 object-contain mx-auto rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Bug Fixing & Maintenance
                  </h2>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Expert debugging services to identify and resolve issues quickly, ensuring your applications run smoothly and efficiently.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      Quick Issue Resolution
                    </li>
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      Code Optimization
                    </li>
                    <li className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      Performance Enhancement
                    </li>
                  </ul>
                  <button 
                    onClick={() => onPageChange('service-detail', 'bug-fixing')}
                    className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="fade-in-left">
                    <img 
                      src="/attached_assets/Programmer-bro_1754317120912.png" 
                      alt="Bug Fixing" 
                      className="w-full h-96 object-contain"
                    />
                  </div>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="fade-in-right">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Bug Fixing & Maintenance
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Expert debugging services to identify and resolve issues quickly, ensuring your applications run smoothly and efficiently.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        Quick Issue Resolution
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        Code Optimization
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                        Performance Enhancement
                      </li>
                    </ul>
                    <button 
                      onClick={() => onPageChange('service-detail', 'bug-fixing')}
                      className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Editing */}
            <div className="mb-12 md:mb-20 service-section" data-aos="fade-right">
              {/* Mobile Layout */}
              <div className="block md:hidden mobile-image-text-layout">
                <div className="mb-8">
                  <img 
                    src="/attached_assets/Programmer-pana_1754317120910.png" 
                    alt="Video Editing" 
                    className="w-full h-64 object-contain mx-auto rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Video Editing Services
                  </h2>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Professional video editing for marketing content, tutorials, and promotional videos with high quality output.
                  </p>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Video Types We Edit:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                        YouTube Shorts
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                        Long Form Videos
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                        Animation Videos
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                        Motion Graphics
                      </li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => onPageChange('service-detail', 'video-editing')}
                    className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="fade-in-left">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Video Editing Services
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Professional video editing for marketing content, tutorials, and promotional videos with high quality output.
                    </p>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Video Types We Edit:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                          YouTube Shorts
                        </li>
                        <li className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                          Long Form Videos
                        </li>
                        <li className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                          Animation Videos
                        </li>
                        <li className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-sky-400 rounded-full mr-4"></div>
                          Motion Graphics
                        </li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => onPageChange('service-detail', 'video-editing')}
                      className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="fade-in-right">
                    <img 
                      src="/attached_assets/Programmer-pana_1754317120910.png" 
                      alt="Video Editing" 
                      className="w-full h-96 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <WhyChoose />
      
      <Contact />
    </div>
  );
}

export default HomePage;
