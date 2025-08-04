
import React from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 video-overlay"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          We Build Digital Solutions 
          <br />
          That Build Your{' '}
          <span className="relative">
            Brand
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-sky-400"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C100 2 200 2 298 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up">
          DropTechify has a mission to help you build digital solutions that maximize your business potential.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <button className="bg-sky-400 hover:bg-sky-500 text-black px-8 py-4 rounded-full font-semibold transition-colors duration-300 inline-flex items-center gap-2 text-lg">
            Get Started <ArrowRight size={20} />
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Our Services <ArrowDown size={20} />
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-sm opacity-80">
            <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">✓</span>
            </div>
            <span>Quality Solutions</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm opacity-80">
            <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">✓</span>
            </div>
            <span>Expert Development</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm opacity-80">
            <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">✓</span>
            </div>
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm opacity-80">
            <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">✓</span>
            </div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
