function Sectors() {
  const sectors = [
    {
      title: "Web Development",
      image: "/attached_assets/Web-development-sector.png",
      description: "Full-stack web development services",
      link: "/web-development"
    },
    {
      title: "Mobile Apps", 
      image: "/attached_assets/Mobile-apps-sector.png",
      description: "iOS and Android app development",
      link: "/mobile-apps"
    },
    {
      title: "E-commerce",
      image: "/attached_assets/Ecommerce-sector.png", 
      description: "Complete e-commerce solutions",
      link: "/ecommerce"
    },
    {
      title: "Digital Marketing",
      image: "/attached_assets/Digital-marketing-sector.png",
      description: "SEO, social media & advertising",
      link: "/digital-marketing"
    }
  ];

  return (
    <section id="sectors" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our sectors</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our partners, located throughout the world, are available to carefully 
            take care of your projects and your clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <a 
              key={index}
              href={sector.link}
              className="sector-card group"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-xl mb-6 mx-auto overflow-hidden">
                <img 
                  src={sector.image} 
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-yellow-500 flex items-center justify-center">
                        <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                        </svg>
                      </div>
                    `;
                  }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{sector.title}</h3>
              <p className="text-gray-600 text-sm">{sector.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sectors;