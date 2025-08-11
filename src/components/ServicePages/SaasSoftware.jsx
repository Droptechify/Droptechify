
import React from 'react'
import { ArrowLeft, Cloud, BarChart, Shield, Zap } from 'lucide-react'

const SaasSoftware = ({ onBack }) => {
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
            SaaS <span className="text-sky-400">Software</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Scalable Software-as-a-Service solutions that grow with your business. We build cloud-based 
            applications with robust architectures, subscription management, and seamless integrations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">SaaS Features</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Cloud className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cloud Architecture</h3>
                    <p className="text-gray-600">Scalable, secure cloud infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BarChart className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                    <p className="text-gray-600">Comprehensive data insights and reporting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                    <p className="text-gray-600">Bank-level security and compliance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/Developer activity-rafiki_1754317120912.png" 
                alt="SaaS Software"
                className="w-full h-80 object-contain"
              />
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="#contact"
              className="bg-sky-400 hover:bg-sky-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Launch Your SaaS
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaasSoftware
