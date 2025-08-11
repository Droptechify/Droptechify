function WhyChoose() {
  return (
    <section id="why-choose" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          {/* Decorative Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
          
          <h2 className="heading-lg text-center mb-4">
            Why choose <span className="yellow-underline">DropTechify?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free up your time */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Free up your time</h3>
            <p className="text-gray-600 leading-relaxed">
              Don't waste time on daily management: development, deployment, maintenance, 
              and client relationships are completely taken care of.
            </p>
          </div>

          {/* Maximize your revenue */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Maximize your revenue</h3>
            <p className="text-gray-600 leading-relaxed">
              Maximize your revenue through expert management: optimized projects, 
              prices adjusted according to demand, and improved visibility for more clients.
            </p>
          </div>

          {/* Say goodbye to stress */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Say goodbye to stress</h3>
            <p className="text-gray-600 leading-relaxed">
              Rest assured: your projects remain perfect, continuously maintained, 
              and the risks of bugs or security issues are handled by our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;