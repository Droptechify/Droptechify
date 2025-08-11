
import React from 'react'
import { ArrowLeft, Code, Settings, Users, Shield } from 'lucide-react'

const CustomSoftware = ({ onBack }) => {
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
            Custom <span className="text-sky-400">Software</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Tailored software solutions designed specifically for your business processes. We create 
            custom applications that perfectly fit your workflow and help streamline operations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Solutions</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Cog className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Process Automation</h3>
                    <p className="text-gray-600">Streamline your business workflows</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Database className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Database Design</h3>
                    <p className="text-gray-600">Robust data management systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">User Management</h3>
                    <p className="text-gray-600">Role-based access and permissions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/Programmer-cuate_1754317120909.png" 
                alt="Custom Software"
                className="w-full h-80 object-contain"
              />
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="#contact"
              className="bg-sky-400 hover:bg-sky-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Build Custom Solution
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomSoftware
