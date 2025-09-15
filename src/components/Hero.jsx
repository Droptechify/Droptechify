
import React, { useState, useEffect } from 'react';
import { Target, Settings, Clock, TrendingUp } from 'lucide-react';

function Hero({ onPageChange }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "From smart web development to intelligent Python automation, DropTechify is your one-stop partner for building future-ready digital solutions that actually work for your business.",
    "At DropTechify, we don't just create websites—we craft digital experiences that drive growth, engage users, and bring your vision to life with clean design and powerful functionality"
  ];

  const features = [
    { icon: <Target size={24} />, title: 'Peace of mind' },
    { icon: <Settings size={24} />, title: 'Maintenance & support' },
    { icon: <Clock size={24} />, title: 'Save time' },
    { icon: <TrendingUp size={24} />, title: 'Maximize revenue' }
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }
    }, isDeleting ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-slide-up">
            DropTechify - Your Digital
            <span className="text-sky-400"> Growth Partner</span>
          </h1>

          <div className="text-base sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-4xl leading-relaxed animate-slide-up min-h-[80px] sm:min-h-[120px]" style={{ animationDelay: '200ms' }}>
            <p className="font-light">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <button 
              onClick={() => handlePageChange('contact')}
              className="bg-sky-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-sky-500 transition-all transform hover:scale-105 text-base sm:text-lg shadow-xl hover:shadow-2xl"
            >
              Contact Us
            </button>
            <button 
              onClick={() => handlePageChange('services')}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all text-base sm:text-lg hover:scale-105"
            >
              Explore Services
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-sky-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <p className="text-gray-300 font-medium">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
