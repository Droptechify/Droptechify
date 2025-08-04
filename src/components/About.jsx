
import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Why Choose <span className="italic">DropTechify</span>?
          </h2>
          
          {/* Office Images */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/IMAGE.jpg" alt="Professional Office Space" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/IMAGE2.jpg" alt="Team Collaboration" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/IMAGE3.jpg" alt="Modern Workspace" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-black font-bold text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Save Time</h3>
            <p className="text-gray-600 mb-6">
              Don't waste time with day-to-day development tasks. We handle everything from planning to deployment, so you can focus on growing your business.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-black font-bold text-2xl">€</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Maximize Revenue</h3>
            <p className="text-gray-600 mb-6">
              Maximize your revenue with expert development: optimized solutions, scalable architecture, and improved performance for better ROI.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-black font-bold text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Scale Fast</h3>
            <p className="text-gray-600 mb-6">
              Build scalable solutions that grow with your business. Our architecture ensures your platform can handle increased traffic and features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
