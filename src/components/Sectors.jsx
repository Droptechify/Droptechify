function Sectors() {
  return (
    <section id="sectors" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Nos <span className="yellow-underline italic">secteurs</span> d'expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous servons une grande variété de secteurs avec des solutions sur mesure 
            pour répondre aux besoins spécifiques de chaque industrie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="card group hover-lift">
            <div className="icon-yellow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Développement Web</h3>
            <p className="text-gray-600 mb-4">
              Sites vitrines, e-commerce, applications web sur mesure avec technologies modernes.
            </p>
            <div className="flex items-center text-yellow-600">
              <span className="text-sm font-medium">En savoir plus</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="card group hover-lift">
            <div className="icon-yellow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Applications Mobiles</h3>
            <p className="text-gray-600 mb-4">
              Apps iOS et Android natives et cross-platform avec React Native et Flutter.
            </p>
            <div className="flex items-center text-yellow-600">
              <span className="text-sm font-medium">En savoir plus</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Video Editing */}
          <div className="card group hover-lift">
            <div className="icon-yellow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Montage Vidéo</h3>
            <p className="text-gray-600 mb-4">
              Création et montage de contenus vidéo professionnels pour marketing et communication.
            </p>
            <div className="flex items-center text-yellow-600">
              <span className="text-sm font-medium">En savoir plus</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* WordPress */}
          <div className="card group hover-lift">
            <div className="icon-yellow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">WordPress</h3>
            <p className="text-gray-600 mb-4">
              Développement de thèmes et plugins WordPress sur mesure pour tous vos besoins.
            </p>
            <div className="flex items-center text-yellow-600">
              <span className="text-sm font-medium">En savoir plus</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* SEO & Marketing */}
          <div className="card group hover-lift">
            <div className="icon-yellow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">SEO & Marketing Digital</h3>
            <p className="text-gray-600 mb-4">
              Stratégies SEO, campagnes publicitaires et optimisation de la visibilité en ligne.
            </p>
            <div className="flex items-center text-yellow-600">
              <span className="text-sm font-medium">En savoir plus</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Guest Posting */}
          <div className="card group hover-lift">
            <div className="icon-yellow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Guest Posting</h3>
            <p className="text-gray-600 mb-4">
              Création de contenu et publication d'articles invités sur des sites autorités.
            </p>
            <div className="flex items-center text-yellow-600">
              <span className="text-sm font-medium">En savoir plus</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectors;