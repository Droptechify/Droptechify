
import React from 'react'
import { ArrowLeft, Code, Smartphone, Zap } from 'lucide-react'

const WebsiteDevelopment = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-max section-padding py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sky-400 hover:text-sky-500 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Services
        </button>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Website <span className="text-sky-400">Development</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            We create stunning, responsive websites that drive results. From concept to deployment, 
            we handle every aspect of web development to ensure your online presence stands out.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Code className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Custom Development</h3>
                    <p className="text-gray-600">Tailored solutions built with modern technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Smartphone className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Responsive Design</h3>
                    <p className="text-gray-600">Perfect performance across all devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fast Loading</h3>
                    <p className="text-gray-600">Optimized for speed and performance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/Programmer-amico_1754317120912.png" 
                alt="Website Development"
                className="w-full h-80 object-contain"
              />
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="#contact"
              className="bg-sky-400 hover:bg-sky-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteDevelopment
