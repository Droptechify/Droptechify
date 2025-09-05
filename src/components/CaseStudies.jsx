
import React from 'react';
import { Clock, Lightbulb, ArrowRight } from 'lucide-react';

function CaseStudies({ onPageChange }) {

  return (
    <div className="pt-20 min-h-screen bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Case <span className="text-sky-400">Studies</span>
            </h1>
            <div className="w-20 h-1 bg-sky-400 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Amazing projects are on the way. Stay tuned for our success stories!
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 animate-slide-up">
              <div className="mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock size={64} className="text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Coming Soon
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We're currently working on showcasing our most impressive projects and success stories. 
                  Our case studies will demonstrate how we've helped businesses transform their digital presence 
                  and achieve remarkable results.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-sky-50 rounded-2xl p-6">
                  <div className="text-sky-500 mb-4">
                    <Lightbulb size={32} className="mx-auto" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Innovative Solutions</h3>
                  <p className="text-gray-600 text-sm">Cutting-edge technology implementations</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <div className="text-green-500 mb-4">
                    <ArrowRight size={32} className="mx-auto" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Measurable Results</h3>
                  <p className="text-gray-600 text-sm">Proven impact on business growth</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="text-purple-500 mb-4">
                    <Clock size={32} className="mx-auto" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">On-Time Delivery</h3>
                  <p className="text-gray-600 text-sm">Projects completed within timeline</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-500 mb-6">
                  In the meantime, let's discuss how we can help with your project
                </p>
                <button
                  onClick={() => onPageChange('contact')}
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
