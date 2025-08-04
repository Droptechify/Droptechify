
import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Why Choose Droptechify
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              At Droptechify, we specialize in creating cutting-edge digital solutions that transform your business vision into reality. Our expert team combines innovation with reliability to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              From custom web development to advanced automation systems, we build digital solutions that scale with your business and drive measurable growth.
            </p>
            <p className="text-lg text-gray-600">
              Founded in 2025, we bring fresh perspectives and modern technologies to help you stay ahead in the digital landscape.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Skilled developers and designers with years of experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Solutions</h3>
            <p className="text-gray-600">Latest technologies and best practices for optimal results</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Continuous support and maintenance for your projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
