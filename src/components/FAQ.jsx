
import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: "What services does DropTechify offer?",
      answer: "We offer a comprehensive range of digital services including website development, WordPress development, app development, video editing, SaaS software, custom software solutions, and Python automations."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer 24/7 support and maintenance services. Our team is always available to help with updates, bug fixes, and any technical issues that may arise."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Vue.js, Node.js, Python, WordPress, React Native, and many others. We choose the best technology stack for each project's specific requirements."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices, conduct thorough testing, and maintain clear communication throughout the development process. Quality assurance is integrated into every step of our workflow."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can help improve, maintain, or completely redesign existing projects. Our team is experienced in working with legacy systems and modernizing them."
    }
  ]

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
            Frequently Asked <span className="text-sky-400 italic">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full py-8 flex items-center justify-between text-left hover:text-sky-500 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
              >
                <h3 className="text-xl md:text-2xl font-semibold pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="text-sky-500" size={24} />
                  ) : (
                    <Plus className="text-gray-400" size={24} />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="pb-8 -mt-2">
                  <p className="text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
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
