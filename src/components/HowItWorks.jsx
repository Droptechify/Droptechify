function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Comment <span className="yellow-underline italic">ça marche</span> ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous simplifions chaque étape, de la consultation initiale à l'analyse des performances, 
            pour vous garantir un résultat maximal et une tranquillité d'esprit totale.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">étape 1</h3>
            </div>
            <h4 className="text-lg font-semibold mb-4">Consultation initiale</h4>
            <p className="text-gray-600">
              Rendez-vous en ligne pour analyser vos besoins, définir le cahier des charges 
              et établir un devis personnalisé.
            </p>
            
            {/* Arrow */}
            <div className="flex justify-center mt-8 lg:hidden">
              <svg className="w-8 h-8 text-yellow-500 rotate-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">étape 2</h3>
            </div>
            <h4 className="text-lg font-semibold mb-4">Développement intégral</h4>
            <p className="text-gray-600">
              Nous développons chaque aspect de votre projet pour que vous profitiez 
              pleinement de votre solution digitale.
            </p>
            
            {/* Arrow */}
            <div className="flex justify-center mt-8 lg:hidden">
              <svg className="w-8 h-8 text-yellow-500 rotate-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">étape 3</h3>
            </div>
            <h4 className="text-lg font-semibold mb-4">Analyse des performances</h4>
            <p className="text-gray-600">
              Recevez un rapport mensuel avec les métriques clés, taux de conversion 
              et autres indicateurs de performance.
            </p>
          </div>
        </div>

        {/* Desktop Arrows */}
        <div className="hidden lg:flex justify-center items-center mt-16 relative">
          <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
            <svg className="w-12 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </div>
          <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2">
            <svg className="w-12 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;