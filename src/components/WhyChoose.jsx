function WhyChoose() {
  return (
    <section id="why-choose" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Pourquoi faire appel à <span className="yellow-underline italic">DropTechify</span> ?
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Save Time */}
          <div className="text-center">
            <div className="icon-yellow mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Libérez-vous du temps</h3>
            <p className="text-gray-600 leading-relaxed">
              Ne perdez plus de temps avec la gestion quotidienne : développement, maintenance, 
              optimisation et relation client sont entièrement pris en charge.
            </p>
          </div>

          {/* Maximize Revenue */}
          <div className="text-center">
            <div className="icon-yellow mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Maximisez vos revenus</h3>
            <p className="text-gray-600 leading-relaxed">
              Maximisez vos revenus grâce à une gestion experte : solutions optimisées, 
              technologies modernes, et stratégies digitales pour plus de conversions.
            </p>
          </div>

          {/* Peace of Mind */}
          <div className="text-center">
            <div className="icon-yellow mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Dites adieu au stress</h3>
            <p className="text-gray-600 leading-relaxed">
              Soyez tranquille : vos projets restent impeccables, entretenus en continu, 
              et les risques de bugs ou de pannes sont gérés par nos soins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;