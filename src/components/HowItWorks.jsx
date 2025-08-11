function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">How does it work?</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            We simplify every step, from project handover to performance analysis, 
            to guarantee you maximum return and total peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="step-number">1</div>
            <h3 className="text-2xl font-bold mb-4">Project handover</h3>
            <p className="text-gray-600">
              Meet on-site to conduct the project review, sign the contract 
              and hand over access credentials.
            </p>
            
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
              <svg className="w-8 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="step-number">2</div>
            <h3 className="text-2xl font-bold mb-4">Comprehensive management</h3>
            <p className="text-gray-600">
              We manage every aspect so you can fully enjoy your passive income 
              from development projects.
            </p>
            
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
              <svg className="w-8 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="step-number">3</div>
            <h3 className="text-2xl font-bold mb-4">Performance analysis</h3>
            <p className="text-gray-600">
              Receive a monthly audit with completed projects, success rate 
              and other key indicators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;