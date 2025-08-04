
import React from 'react'
import { MessageSquare, Settings, BarChart3 } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      step: 'STEP 1',
      icon: <MessageSquare size={40} />,
      title: 'Initial Consultation',
      description: 'We discuss your project requirements, goals, and timeline to create the perfect solution for your needs.'
    },
    {
      step: 'STEP 2',
      icon: <Settings size={40} />,
      title: 'Development & Design',
      description: 'Our expert team develops your project using cutting-edge technologies and best practices.'
    },
    {
      step: 'STEP 3',
      icon: <BarChart3 size={40} />,
      title: 'Launch & Support',
      description: 'We launch your project and provide ongoing support to ensure optimal performance and growth.'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            How <span className="italic">Does it work?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We simplify each step, from initial consultation to final delivery, to ensure maximum efficiency and complete peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-sky-400 text-black text-sm font-bold px-4 py-2 rounded-full inline-block mb-6">
                {step.step}
              </div>
              
              <div className="text-sky-500 mb-6 flex justify-center">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300 relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
