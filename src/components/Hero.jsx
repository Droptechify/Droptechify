
import React from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white section-padding">
        <div className="container-max">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              We Build Digital Solutions
              <br />
              <span className="text-sky-400">That Build Your Brand</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 font-light">
              DropTechify has a mission to help you build digital solutions that maximize your business potential and drive unprecedented growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-sky-400 hover:bg-sky-500 text-black px-10 py-5 rounded-full font-bold transition-all duration-300 inline-flex items-center gap-3 text-lg hover:scale-105 shadow-2xl">
                Get Started <ArrowRight size={24} />
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3 text-lg hover:scale-105">
                Our Services <ArrowDown size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ArrowDown className="text-white" size={32} />
        </div>
      </div>
    </section>
  )
}

export default Hero
