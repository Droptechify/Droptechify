import { useState } from 'react';

function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "Can I still use my development team for personal projects?",
      answer: "Yes, you can block dates of your choice in the project calendar. You retain the ability to work on your own projects whenever you want."
    },
    {
      question: "How are you sure you'll deliver quality projects and optimize results?",
      answer: "We use powerful tools to manage quality according to industry standards, and we optimize your processes on the main platforms to maximize visibility and success rate."
    },
    {
      question: "How will I track the performance of my projects?",
      answer: "Each month, we send you a complete audit including completed projects, success rate, revenue generated, and any other key indicator so you can track management progress with complete transparency."
    },
    {
      question: "What happens if I'm not satisfied with the development service?",
      answer: "Your satisfaction is our priority. We adjust our services based on your feedback and you can terminate the contract at any time if you feel our services don't meet your expectations."
    },
    {
      question: "How can I be sure my projects will be well maintained?",
      answer: "We have experienced development and maintenance teams that intervene after each deployment. Your projects will be regularly inspected and maintained in perfect condition to guarantee their quality and avoid technical issues."
    },
    {
      question: "What happens in case of emergency or technical problem with projects?",
      answer: "In case of emergency, such as a security breach or technical problem, we will intervene quickly. You will be informed immediately and we handle the repair without delay."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Images */}
          <div className="relative">
            <div className="absolute left-0 top-0">
              <img 
                src="/attached_assets/FAQ-image-left.png" 
                alt="FAQ illustration left"
                className="w-32 h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="absolute right-0 bottom-0">
              <img 
                src="/attached_assets/FAQ-image-right.png" 
                alt="FAQ illustration right"
                className="w-32 h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Right Column - FAQ Content */}
          <div>
            <h2 className="heading-lg mb-4">FAQ</h2>
            <p className="text-gray-600 text-lg mb-8">
              Find answers to your frequently asked questions, and don't hesitate 
              to contact us if you need more information.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl bg-white">
                  <button
                    onClick={() => toggleItem(index)}
                    className="faq-button flex items-center justify-between w-full p-6 text-left"
                  >
                    <span className="font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className={`faq-icon ${openItems[index] ? 'open' : ''}`}>
                      +
                    </div>
                  </button>
                  
                  {openItems[index] && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;