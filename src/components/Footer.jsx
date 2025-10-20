import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, MessageCircle, ExternalLink, Github, Play } from 'lucide-react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function Footer({ onPageChange }) {
  const [socialLinks, setSocialLinks] = useState({
    facebook: 'https://facebook.com/droptechify',
    twitter: 'https://twitter.com/droptechify',
    instagram: 'https://instagram.com/droptechify',
    linkedin: 'https://linkedin.com/company/droptechify',
    github: 'https://github.com/droptechify',
    youtube: 'https://youtube.com/@droptechify',
    clutch: 'https://clutch.co/profile/droptechify',
    upwork: 'https://upwork.com/agencies/droptechify'
  });

  const [contactInfo, setContactInfo] = useState({
    managerEmail: 'teamdroptechify@gmail.com',
  });

  const [iconVisibility, setIconVisibility] = useState({
    facebook: true,
    twitter: true,
    instagram: true,
    linkedin: true,
    clutch: true,
    upwork: true,
    github: true,
    youtube: true
  });

  useEffect(() => {
    loadSocialLinks();
    loadContactInfo();
    loadIconVisibility();
  }, []);

  const loadSocialLinks = async () => {
    try {
      if (!db) {
        const localSocialLinks = JSON.parse(localStorage.getItem('socialLinks') || '{}');
        if (Object.keys(localSocialLinks).length > 0) {
          setSocialLinks(prev => ({ ...prev, ...localSocialLinks }));
        }
        return;
      }

      const docRef = doc(db, 'socialLinks', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSocialLinks(prev => ({ ...prev, ...docSnap.data() }));
      }
    } catch (error) {
      console.error('Error loading social links:', error);
    }
  };

  const loadContactInfo = async () => {
    try {
      if (!db) {
        const localContactInfo = JSON.parse(localStorage.getItem('contactInfo') || '{}');
        if (Object.keys(localContactInfo).length > 0) {
          setContactInfo(prev => ({ ...prev, ...localContactInfo }));
        }
        return;
      }

      const docRef = doc(db, 'contactInfo', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContactInfo(prev => ({ ...prev, ...docSnap.data() }));
      }
    } catch (error) {
      console.error('Error loading contact info:', error);
    }
  };

  const loadIconVisibility = async () => {
    try {
      if (!db) {
        const localIconVisibility = JSON.parse(localStorage.getItem('iconVisibility') || '{}');
        if (Object.keys(localIconVisibility).length > 0) {
          setIconVisibility(prev => ({ ...prev, ...localIconVisibility }));
        }
        return;
      }

      const iconDocRef = doc(db, 'iconVisibility', 'main');
      const iconDocSnap = await getDoc(iconDocRef);
      if (iconDocSnap.exists()) {
        setIconVisibility(prev => ({ ...prev, ...iconDocSnap.data() }));
      }
    } catch (error) {
      console.error('Error loading icon visibility:', error);
    }
  };

  const handlePageChange = (page, serviceId = null) => {
    if (onPageChange) {
      onPageChange(page, serviceId);
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
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.facebook && iconVisibility.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Facebook size={18} className="sm:w-[20px] sm:h-[20px] text-white" />
                </a>
              )}
              {socialLinks.twitter && iconVisibility.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Twitter size={18} className="sm:w-[20px] sm:h-[20px] text-white" />
                </a>
              )}
              {socialLinks.instagram && iconVisibility.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Instagram size={18} className="sm:w-[20px] sm:h-[20px] text-white" />
                </a>
              )}
              {iconVisibility.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Linkedin size={18} className="sm:w-[20px] sm:h-[20px] text-white" />
                </a>
              )}
              {socialLinks.github && iconVisibility.github && (
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Github size={18} className="sm:w-[20px] sm:h-[20px] text-white" />
                </a>
              )}
              {socialLinks.youtube && iconVisibility.youtube && (
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Play size={18} className="sm:w-[20px] sm:h-[20px] text-white fill-current" />
                </a>
              )}
              {socialLinks.clutch && iconVisibility.clutch && (
                <a href={socialLinks.clutch} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-lg">
                  <CustomIcon type="clutch" size={18} />
                </a>
              )}
              {socialLinks.upwork && iconVisibility.upwork && (
                <a href={socialLinks.upwork} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-lg">
                  <CustomIcon type="upwork" size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Website Development', serviceId: 'website-development' },
                { name: 'WordPress Development', serviceId: 'wordpress-development' },
                { name: 'App Development', serviceId: 'app-development' },
                { name: 'Video Editing', serviceId: 'video-editing' },
                { name: 'Custom Software', serviceId: 'custom-software' },
                { name: 'SaaS Development', serviceId: 'saas-development' }
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange('service-detail', service.serviceId)}
                    className="text-gray-400 hover:text-sky-400 transition-colors duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
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
                { name: 'Case Studies', page: 'case-studies' },
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
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <p className="text-gray-400 text-sm font-medium">Email Contacts</p>
                </div>
                <div className="space-y-2 pl-6">
                  <div>
                    <p className="text-gray-500 text-xs">Manager Email</p>
                    <a href={`mailto:${contactInfo.managerEmail}`}
                       className="text-white hover:text-sky-400 transition-colors duration-300 text-sm">
                      {contactInfo.managerEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center animate-fade-in">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 DropTechify. All rights reserved. | 500+ Projects Completed | 500+ Happy Clients | Designed with for your digital success.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;