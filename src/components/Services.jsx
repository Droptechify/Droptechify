function Services() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Save Time */}
          <div>
            <div className="flex items-center mb-8">
              <div className="icon-yellow mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="heading-lg">On s'occupe<br />de tout</h2>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Gagnez du temps</h3>
              <p className="text-gray-600 mb-6">
                Ne perdez plus de temps avec la gestion quotidienne : développement, déploiement, 
                maintenance, et relation client sont entièrement pris en charge.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-yellow"
              >
                Requesting a free audit →
              </button>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <svg className="w-16 h-16 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div className="space-y-8">
            {/* Communication Service */}
            <div className="card flex items-center">
              <div className="w-32 h-24 bg-gray-200 rounded-lg mr-6 overflow-hidden">
                <img 
                  src="/attached_assets/Programmer-amico_1754336602655.png" 
                  alt="Communication"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Communication avec les clients</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Réponses rapides et précises : projet, délais, et résolution immédiate 
                  des problèmes rencontrés par vos clients.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">Communication</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★ 5,0</span>
                    <span className="ml-1">(Note Client)</span>
                  </div>
                </div>
                <a href="#" className="text-yellow-600 text-sm hover:underline">En savoir plus →</a>
              </div>
            </div>

            {/* Development Service */}
            <div className="card flex items-center">
              <div className="w-32 h-24 bg-gray-200 rounded-lg mr-6 overflow-hidden">
                <img 
                  src="/attached_assets/Developer activity-cuate_1754336602655.png" 
                  alt="Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Développement et déploiement</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Nos développeurs prennent en charge la création de vos projets, 
                  assurant le développement et le déploiement à leur livraison.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">Développement</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★ 5,0</span>
                    <span className="ml-1">(Note Client)</span>
                  </div>
                </div>
                <a href="#" className="text-yellow-600 text-sm hover:underline">En savoir plus →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;