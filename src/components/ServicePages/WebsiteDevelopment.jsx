import React from 'react'
import { ArrowLeft, Globe, Code, Smartphone, Zap, Database, Shield, Search } from 'lucide-react'

const WebsiteDevelopment = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 lg:py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sky-400 hover:text-sky-500 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Services
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Website <span className="text-sky-400">Development</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Modern, responsive websites that drive business growth. From simple landing pages 
              to complex web applications, we create digital experiences that convert visitors into customers.
            </p>
          </div>

          <div className="space-y-16">
            {/* First Section - Image then Text on mobile */}
            <div className="mobile-image-text-layout lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="order-1 lg:order-2">
                <img 
                  src="/attached_assets/Programmer-amico_1754317120910.png" 
                  alt="Website Development"
                  className="w-full h-64 lg:h-80 object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Web Solutions</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Globe className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Custom Websites</h3>
                      <p className="text-gray-600">Tailored solutions designed specifically for your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Code className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Modern Tech Stack</h3>
                      <p className="text-gray-600">React, Node.js, and latest technologies for robust performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Smartphone className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Responsive Design</h3>
                      <p className="text-gray-600">Perfect performance across all devices and screen sizes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Fast Loading</h3>
                      <p className="text-gray-600">Optimized for speed and superior user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Section - Text then Image on mobile */}
            <div className="mobile-image-text-layout lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="order-1">
                <img 
                  src="/attached_assets/Developer activity-rafiki_1754317120912.png" 
                  alt="Development Features"
                  className="w-full h-64 lg:h-80 object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="order-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Advanced Features</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Database className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Database Integration</h3>
                      <p className="text-gray-600">Secure and scalable data management solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                      <p className="text-gray-600">Enterprise-level security for your web applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Search className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">SEO Optimized</h3>
                      <p className="text-gray-600">Built for search engine visibility and ranking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="#contact"
              className="bg-sky-400 hover:bg-sky-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-block"
            >
              Contact Us for Discussion
            </a>
            <p className="mt-4 text-gray-600">
              Get in touch to discuss your project requirements and get a personalized quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteDevelopment