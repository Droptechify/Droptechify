
import React from 'react'
import { CheckCircle, Trophy, Users, Zap } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-12 leading-tight">
            Why Choose <span className="text-sky-400 italic">Droptechify</span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              At Droptechify, we don't just build software – we craft digital experiences that transform businesses and elevate brands to new heights.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Our team of expert developers, designers, and strategists work tirelessly to deliver solutions that not only meet your current needs but scale with your future ambitions.
            </p>
            <p className="text-lg text-gray-500">
              Founded in 2025 by Abdul Kabeer Mughal, we bring fresh perspectives and cutting-edge technologies to every project we undertake.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          <div className="text-center group">
            <div className="w-20 h-20 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="text-black" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Award-Winning Quality</h3>
            <p className="text-gray-600 leading-relaxed">Premium solutions that exceed industry standards</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-black" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
            <p className="text-gray-600 leading-relaxed">Skilled professionals with years of experience</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-black" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
            <p className="text-gray-600 leading-relaxed">Rapid development without compromising quality</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="text-black" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
            <p className="text-gray-600 leading-relaxed">Round-the-clock assistance for all your needs</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
