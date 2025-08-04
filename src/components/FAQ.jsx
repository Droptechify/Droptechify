
import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    {
      question: 'What services does DropTechify offer?',
      answer: 'We offer comprehensive digital solutions including website development, WordPress development, video editing, guest posting, and mobile app development. Our team specializes in creating custom solutions tailored to your business needs.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally. This includes regular updates, security monitoring, and technical support.'
    },
    {
      question: 'What is your development process?',
      answer: 'Our process includes three main phases: Initial consultation and planning, development and design with regular updates, and finally launch with ongoing support. We maintain clear communication throughout the entire process.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Absolutely! We provide SEO optimization for all our web projects and offer guest posting services to build quality backlinks. We also ensure all our websites are built with SEO best practices in mind.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, Node.js, WordPress, PHP, and various mobile development frameworks. We choose the best technology stack based on your specific project requirements.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">FAQs</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Find the answers to your frequently asked questions, and do not hesitate to contact us if you need more information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-gray-50 p-6 rounded-lg text-left hover:bg-gray-100 transition-colors duration-300"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <Minus size={20} className="text-primary flex-shrink-0" />
                  ) : (
                    <Plus size={20} className="text-primary flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openFaq === index && (
                <div className="bg-gray-50 px-6 pb-6 rounded-b-lg">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
