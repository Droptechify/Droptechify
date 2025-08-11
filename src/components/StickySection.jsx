
import React from 'react'
import { Zap, Target, Shield, Clock, ArrowRight } from 'lucide-react'

const StickySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 text-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who've accelerated their growth with our digital solutions.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Zap className="text-white" size={24} />
                </div>
                <span className="text-lg">Lightning-fast development</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <span className="text-lg">Precision-focused solutions</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <span className="text-lg">Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <span className="text-lg">24/7 dedicated support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="bg-white text-sky-600 px-8 py-4 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Start Your Project <ArrowRight size={24} />
              </a>
              <a 
                href="#portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-sky-600 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg hover:scale-105"
              >
                View Our Work
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6">Project Consultation</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span>Free Initial Consultation</span>
                  <span className="text-green-300">✓</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span>Custom Solution Design</span>
                  <span className="text-green-300">✓</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span>Timeline & Budget Planning</span>
                  <span className="text-green-300">✓</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span>24/7 Support Available</span>
                  <span className="text-green-300">✓</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                <p className="text-sm opacity-80 mb-4">
                  Get started today with a free consultation call
                </p>
                <a 
                  href="#contact"
                  className="block w-full bg-white text-sky-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-opacity-90 transition-all duration-300"
                >
                  Schedule Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StickySection
