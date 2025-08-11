import { useState } from 'react';

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Combien de temps faut-il pour développer un site web ?",
      answer: "Le délai dépend de la complexité du projet. Un site vitrine simple peut être développé en 2-3 semaines, tandis qu'une application web complexe peut prendre 2-3 mois. Nous fournissons toujours un planning détaillé après l'analyse de vos besoins."
    },
    {
      question: "Proposez-vous la maintenance après le développement ?",
      answer: "Oui, nous proposons des contrats de maintenance pour assurer la sécurité, les mises à jour et les corrections de bugs. Nos forfaits incluent également l'hébergement et le support technique."
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer: "Nous utilisons les technologies les plus modernes : React, Vue.js, Node.js, Python, WordPress, Flutter pour le mobile. Nous choisissons toujours la meilleure technologie selon vos besoins spécifiques."
    },
    {
      question: "Puis-je voir l'avancement de mon projet ?",
      answer: "Absolument ! Nous utilisons des outils de gestion de projet en ligne où vous pouvez suivre l'avancement en temps réel. Vous recevez également des rapports hebdomadaires avec captures d'écran et démonstrations."
    },
    {
      question: "Offrez-vous une garantie sur votre travail ?",
      answer: "Oui, nous offrons une garantie de 3 mois sur tous nos développements contre les bugs et dysfonctionnements. De plus, nous proposons une révision gratuite dans les 30 jours suivant la livraison."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Questions <span className="yellow-underline italic">fréquentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses aux questions les plus courantes sur nos services 
            de développement et notre processus de travail.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-lg p-6 text-left flex justify-between items-center hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className={`w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500 flex-shrink-0 transition-transform ${
                  openFAQ === index ? 'rotate-45' : ''
                }`}>
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="bg-white rounded-lg mt-2 p-6 border-l-4 border-yellow-500">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Vous avez d'autres questions ?
          </p>
          <button className="btn-yellow">
            Contactez-nous →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;