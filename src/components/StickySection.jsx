
import React from 'react'
import { Clock, Target, Rocket } from 'lucide-react'

const StickySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Sticky Left Content */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Save <span className="text-sky-400">Time</span>
              <br />
              Scale <span className="text-sky-400">Growth</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our comprehensive digital solutions eliminate bottlenecks and streamline your operations, 
              giving you more time to focus on what matters most – growing your business.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rapid Development</h3>
                  <p className="text-gray-600">Get your projects delivered faster than ever</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Targeted Solutions</h3>
                  <p className="text-gray-600">Custom-built for your specific needs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Growth</h3>
                  <p className="text-gray-600">Solutions that grow with your business</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Scrolling Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img src="/IMAGE.jpg" alt="Office workspace" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-2xl font-bold mb-4">Modern Workspace</h3>
              <p className="text-gray-600">Our team works in cutting-edge environments to deliver the best results.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img src="/IMAGE2.jpg" alt="Team collaboration" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-2xl font-bold mb-4">Collaborative Excellence</h3>
              <p className="text-gray-600">Every project benefits from our collective expertise and creativity.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img src="/IMAGE3.jpg" alt="Innovation process" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-2xl font-bold mb-4">Innovation Process</h3>
              <p className="text-gray-600">We follow proven methodologies to ensure success in every project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StickySection
