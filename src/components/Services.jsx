function Services() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Communication with clients",
      description: "Fast and accurate responses: project requirements, technical details, and immediate resolution of problems encountered by your clients.",
      category: "Communication",
      rating: "★ 5.0",
      note: "(Client satisfaction rating)",
      image: "/attached_assets/Communication-illustration.png",
      link: "#communication"
    },
    {
      title: "Development & Deployment",
      description: "Our developers handle the development of your projects, ensuring delivery of functional solutions and deployment to production environments.",
      category: "Development",
      rating: "★ 5.0",
      note: "(Quality rating)",
      image: "/attached_assets/Development-illustration.png",
      link: "#development"
    },
    {
      title: "Maintenance",
      description: "Handling bugs and incidents: security vulnerabilities, server issues, and other technical problems quickly resolved.",
      category: "Support",
      rating: "★ 4.9",
      note: "(Response time rating)",
      image: "/attached_assets/Maintenance-illustration.png",
      link: "#maintenance"
    },
    {
      title: "Testing & Quality Control",
      description: "Complete project testing and quality control after each update to ensure flawless delivery to your clients.",
      category: "Quality",
      rating: "★ 4.9",
      note: "(Quality rating)",
      image: "/attached_assets/Testing-illustration.png",
      link: "#testing"
    },
    {
      title: "Optimized Project Creation",
      description: "We take care of every detail: compelling proposals, engaging descriptions and attractive presentations to maximize conversions.",
      category: "Precision",
      rating: "★ 4.7",
      note: "(Conversion rating)",
      image: "/attached_assets/Project-creation-illustration.png",
      link: "#project-creation"
    },
    {
      title: "Business Growth Strategy",
      description: "Business optimization on multiple platforms and other channels to improve the visibility of your services.",
      category: "Growth",
      rating: "★ 4.8",
      note: "(Growth rating)",
      image: "/attached_assets/Growth-illustration.png",
      link: "#growth"
    },
    {
      title: "Dynamic Price & Timeline Management",
      description: "Price adjustment according to supply and demand to maximize profitability, with fine management of project timelines.",
      category: "Value-price",
      rating: "★ 4.7",
      note: "(ROI rating)",
      image: "/attached_assets/Price-management-illustration.png",
      link: "#price-management"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-8">We take care of everything</h2>
          
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Save Time */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Save time</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Don't waste time on daily management: development, deployment, maintenance, 
                and client relationships are completely taken care of.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-yellow mb-8"
              >
                Request a free audit
              </button>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="arrow-yellow w-12 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </div>
            </div>
            
            {/* Right Column - First 4 Services */}
            <div className="space-y-6">
              {services.slice(0, 4).map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-image bg-gray-100">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">{service.category}</span>
                        <div className="text-yellow-500 font-bold">{service.rating}</div>
                        <div className="text-xs text-gray-500">{service.note}</div>
                      </div>
                      <a 
                        href={service.link}
                        className="text-yellow-500 hover:text-yellow-600 font-medium text-sm"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Make Money */}
          <div className="grid lg:grid-cols-2 gap-16 mt-20">
            {/* Left Column - Remaining Services */}
            <div className="space-y-6">
              {services.slice(4).map((service, index) => (
                <div key={index + 4} className="service-card">
                  <div className="service-image bg-gray-100">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">{service.category}</span>
                        <div className="text-yellow-500 font-bold">{service.rating}</div>
                        <div className="text-xs text-gray-500">{service.note}</div>
                      </div>
                      <a 
                        href={service.link}
                        className="text-yellow-500 hover:text-yellow-600 font-medium text-sm"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Column - Make Money */}
            <div className="text-right">
              <h3 className="text-3xl font-bold mb-6">Make money</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Maximize your revenue through expert management: optimized projects, 
                prices adjusted according to demand, and improved visibility for more clients.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-yellow mb-8"
              >
                Request a free audit
              </button>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="arrow-yellow w-12 h-8 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;