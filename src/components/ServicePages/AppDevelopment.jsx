import React from 'react'
import { ArrowLeft, Smartphone, Tablet, Users, Code, Shield, Zap } from 'lucide-react'

const AppDevelopment = ({ onBack }) => {
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
            App <span className="text-sky-400">Development</span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Native and cross-platform mobile applications that deliver exceptional user experiences. 
            From iOS to Android, we create apps that users love and businesses rely on.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mobile Solutions</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Smartphone className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">iOS & Android</h3>
                    <p className="text-gray-600">Native apps for both platforms</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Tablet className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cross-Platform</h3>
                    <p className="text-gray-600">React Native and Flutter solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">User-Centered Design</h3>
                    <p className="text-gray-600">Intuitive interfaces that users love</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="/Developer activity-cuate_1754317120912.png" 
                alt="App Development"
                className="w-full h-80 object-contain"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="bg-sky-400 hover:bg-sky-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Contact Us for Discussion
            </a>
            <p className="mt-4 text-gray-600">
              Let's discuss your app development needs and requirements
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDevelopment