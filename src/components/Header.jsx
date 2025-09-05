
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, Code, Smartphone, Video, Cog, Database, Zap, Palette } from 'lucide-react';
import './Header.css';

function Header({ currentPage, onPageChange }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const services = [
    { id: 'website-development', label: 'Website Development', icon: <Globe size={18} /> },
    { id: 'wordpress-development', label: 'WordPress Development', icon: <Code size={18} /> },
    { id: 'app-development', label: 'App Development', icon: <Smartphone size={18} /> },
    { id: 'saas-development', label: 'SaaS Development', icon: <Palette size={18} /> },
    { id: 'custom-software', label: 'Custom Software', icon: <Database size={18} /> },
    { id: 'python-automation', label: 'Python Automation', icon: <Cog size={18} /> },
    { id: 'video-editing', label: 'Video Editing', icon: <Video size={18} /> },
    { id: 'seo-services', label: 'SEO Services', icon: <Zap size={18} /> }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'case-studies', label: 'Case Studies' }
  ];

  const handleServiceClick = (serviceId) => {
    onPageChange('service-detail', serviceId);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.header-glass')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header-container">
      <div className="header-glass">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-container" onClick={() => onPageChange('home')}>
            <img 
              src="/attached_assets/Droptechify-black.png" 
              alt="DropTechify" 
              className="logo-image"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <div key={item.id} className="nav-item">
                {item.hasDropdown ? (
                  <div 
                    className="dropdown-container"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button
                      className={`dropdown-button ${
                        currentPage === item.id || currentPage.startsWith('service-') ? 'active' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`dropdown-chevron ${isServicesOpen ? 'open' : ''}`} />
                      {(currentPage === item.id || currentPage.startsWith('service-')) && (
                        <div className="nav-underline"></div>
                      )}
                    </button>

                    {/* Desktop Dropdown Menu */}
                    {isServicesOpen && (
                      <div 
                        className="dropdown-menu animate-slide-up"
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="dropdown-content">
                          <div className="dropdown-grid">
                            {services.map((service) => (
                              <button
                                key={service.id}
                                onClick={() => handleServiceClick(service.id)}
                                className="service-item"
                              >
                                <div className="service-icon">
                                  {service.icon}
                                </div>
                                <span className="service-label">{service.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => onPageChange(item.id)}
                    className={`nav-button ${currentPage === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                    {currentPage === item.id && (
                      <div className="nav-underline"></div>
                    )}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button 
            onClick={() => onPageChange('contact')}
            className="cta-button"
          >
            Contact
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu animate-slide-up">
            <div className="mobile-menu-content">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="mobile-services-header">
                        {item.label}
                      </div>
                      <div className="mobile-services-list">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service.id)}
                            className="mobile-service-item"
                          >
                            <div className="mobile-service-icon">
                              {service.icon}
                            </div>
                            <span className="mobile-service-text">{service.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        onPageChange(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`mobile-nav-item ${currentPage === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <button 
                onClick={() => {
                  onPageChange('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="mobile-cta-button"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
