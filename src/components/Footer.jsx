
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function Footer({ onPageChange }) {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: 'https://linkedin.com/company/droptechify',
    clutch: '',
    upwork: ''
  });

  const [contactInfo, setContactInfo] = useState({
    companyEmail: 'droptechify@gmail.com',
    managerEmail: 'manager@droptechify.com',
    companyPhone: '+92 303 0273718',
    managerPhone: '+92 317 2664119',
    whatsappCompany: '923030273718',
    whatsappManager: '923172664119'
  });

  useEffect(() => {
    loadSocialLinks();
    loadContactInfo();
  }, []);

  const loadSocialLinks = async () => {
    try {
      const docRef = doc(db, 'socialLinks', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSocialLinks(docSnap.data());
      }
    } catch (error) {
      console.error('Error loading social links:', error);
    }
  };

  const loadContactInfo = async () => {
    try {
      const docRef = doc(db, 'contactInfo', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContactInfo(docSnap.data());
      }
    } catch (error) {
      console.error('Error loading contact info:', error);
    }
  };

  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const CustomIcon = ({ type, size = 18 }) => {
    const iconStyle = { width: size, height: size };
    
    switch (type) {
      case 'clutch':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
      case 'upwork':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.014-2.439-5.466-5.439-5.466z"/>
          </svg>
        );
      default:
        return <ExternalLink size={size} />;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <img 
              src="/attached_assets/Droptechify_white.png" 
              alt="DropTechify" 
              className="h-10 sm:h-12 mb-4 sm:mb-6"
            />
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Leading software development company with 20+ years of experience and 500+ completed projects. 
              We specialize in web development, app development, and digital solutions that drive business growth.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="https://facebook.com/droptechify" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg">
                <Facebook size={18} className="sm:w-[20px] sm:h-[20px] text-white" />
              </a>
              <a href="https://twitter.com/droptechify" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 shadow-lg">
                <Twitter size={18} className="sm:w-[20px] sm:h-[20px] text-white" />
              </a>
              <a href="https://instagram.com/droptechify" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 shadow-lg">
                <Instagram size={18} className="sm:w-[20px] sm:h-[20px] text-white" />
              </a>
              <a href="https://linkedin.com/company/droptechify" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 hover:scale-110 shadow-lg">
                <Linkedin size={18} className="sm:w-[20px] sm:h-[20px] text-white" />
              </a>
              <a href="https://clutch.co/profile/droptechify" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110 shadow-lg">
                <CustomIcon type="clutch" size={18} />
              </a>
              <a href="https://upwork.com/agencies/droptechify" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110 shadow-lg">
                <CustomIcon type="upwork" size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Website Development',
                'WordPress Development',
                'App Development',
                'Video Editing',
                'Custom Software',
                'SaaS Development'
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange('services')}
                    className="text-gray-400 hover:text-sky-400 transition-colors duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Home', page: 'home' },
                { name: 'About Us', page: 'about' },
                { name: 'Services', page: 'services' },
                { name: 'Contact', page: 'contact' },
                { name: 'Privacy Policy', page: 'privacy' },
                { name: 'Terms & Conditions', page: 'terms' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange(link.page)}
                    className="text-gray-400 hover:text-sky-400 transition-colors duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">CEO Email</p>
                <a href={`mailto:${contactInfo.companyEmail}`} 
                   className="text-white hover:text-sky-400 transition-colors duration-300 text-sm sm:text-base flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-400" />
                  {contactInfo.companyEmail}
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-2">Manager Email</p>
                <a href={`mailto:${contactInfo.managerEmail}`} 
                   className="text-white hover:text-sky-400 transition-colors duration-300 text-sm sm:text-base flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-400" />
                  {contactInfo.managerEmail}
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-2">CEO Phone</p>
                <a href={`tel:${contactInfo.companyPhone}`} 
                   className="text-white hover:text-sky-400 transition-colors duration-300 text-sm sm:text-base flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-400" />
                  {contactInfo.companyPhone}
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-2">Manager Phone</p>
                <a href={`tel:${contactInfo.managerPhone}`} 
                   className="text-white hover:text-sky-400 transition-colors duration-300 text-sm sm:text-base flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-400" />
                  {contactInfo.managerPhone}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <a href={`https://wa.me/${contactInfo.whatsappCompany}`} target="_blank" rel="noopener noreferrer"
                   className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm flex items-center gap-2 justify-center sm:justify-start">
                  <MessageCircle size={16} />
                  CEO WhatsApp
                </a>
                <a href={`https://wa.me/${contactInfo.whatsappManager}`} target="_blank" rel="noopener noreferrer"
                   className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm flex items-center gap-2 justify-center sm:justify-start">
                  <MessageCircle size={16} />
                  Manager WhatsApp
                </a>
              </div>

              <button
                onClick={() => handlePageChange('contact')}
                className="w-full sm:w-auto mt-4 sm:mt-6 bg-sky-400 hover:bg-sky-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center animate-fade-in">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 DropTechify. All rights reserved. | 20+ Years Experience | 500+ Projects Completed | Designed with for your digital success.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
