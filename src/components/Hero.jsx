import React from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            We Build Digital Solutions That Build Your Brand
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up">
            DropTechify has a mission to help you build digital solutions that maximize your business potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <button className="bg-sky-400 hover:bg-sky-500 text-black px-8 py-4 rounded-full font-semibold transition-colors duration-300 inline-flex items-center gap-2 text-lg">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300 inline-flex items-center gap-2 text-lg">
              Our Services <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero