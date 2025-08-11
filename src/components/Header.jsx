function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-dark fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/attached_assets/Droptechify_white.png" 
              alt="DropTechify"
              className="h-10 w-auto"
            />
          </div>

          {/* Contact Button - ConciergeLite Style */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-yellow text-sm font-semibold"
          >
            Contact us
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;