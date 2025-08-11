import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 glass-effect">
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/attached_assets/Droptechify-black.png" 
              alt="DropTechify"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
               className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
              SERVICES
            </a>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-yellow-500 transition-colors font-medium flex items-center">
                OUR SECTORS
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">Web Development</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">Mobile Apps</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">Digital Marketing</a>
                </div>
              </div>
            </div>

            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} 
               className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
              F.A.Q
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
              BLOG
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
              BECOME A PARTNER
            </a>
          </div>

          {/* Contact Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-yellow hidden lg:block"
          >
            Contact
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <div className="space-y-4">
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
                 className="block text-gray-700 hover:text-yellow-500 font-medium">
                SERVICES
              </a>
              <a href="#sectors" onClick={(e) => { e.preventDefault(); scrollToSection('sectors'); }} 
                 className="block text-gray-700 hover:text-yellow-500 font-medium">
                OUR SECTORS
              </a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} 
                 className="block text-gray-700 hover:text-yellow-500 font-medium">
                F.A.Q
              </a>
              <a href="#" className="block text-gray-700 hover:text-yellow-500 font-medium">
                BLOG
              </a>
              <a href="#" className="block text-gray-700 hover:text-yellow-500 font-medium">
                BECOME A PARTNER
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-yellow w-full mt-4"
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