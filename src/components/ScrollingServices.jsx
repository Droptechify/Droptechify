
import React from 'react'

const ScrollingServices = () => {
  const services = [
    'Website Development',
    'WordPress Development', 
    'App Development',
    'Video Editing',
    'SaaS Software',
    'Custom Software',
    'Python Automations',
    'Website Development',
    'WordPress Development',
    'App Development',
    'Video Editing',
    'SaaS Software',
    'Custom Software',
    'Python Automations'
  ]

  return (
    <section className="bg-sky-400 py-4 overflow-hidden">
      <div className="flex items-center whitespace-nowrap animate-scroll hover:animate-none">
        {services.map((service, index) => (
          <span
            key={index}
            className="text-black font-semibold text-lg mx-8 flex items-center cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            {service}
            <span className="mx-8 text-2xl">•</span>
          </span>
        ))}
      </div>
    </section>
  )
}

export default ScrollingServices
