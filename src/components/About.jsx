import React from 'react'
import { Users, Award, Clock, HeadphonesIcon } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">💡</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Why Choose <span className="italic text-yellow-500">DropTechify</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua sed do eiusmod tempor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-yellow-50 p-8 rounded-3xl">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <Users className="text-black" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Save Time</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Don't waste time on daily management: entries and exits, cleaning, 
              linen, consumables, maintenance and relationship with travelers are 
              completely taken care of.
            </p>
          </div>

          <div className="bg-yellow-50 p-8 rounded-3xl">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <Award className="text-black" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Maximize Your Revenue</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Maximize your revenue through expert management: optimized ads, 
              adjusted rates according to demand, and intelligent referencing 
              strategy for maximum visibility.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-3"
          >
            Get Started <Award size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About