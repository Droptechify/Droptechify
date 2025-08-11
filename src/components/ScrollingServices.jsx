
import React from 'react'

const ScrollingServices = () => {
  const services = [
    'Website Development',
    'WordPress Development', 
    'App Development',
    'Video Editing',
    'SaaS Software',
    'Custom Software',
    'Python Automation'
  ]

  // Duplicate services for seamless scrolling
  const duplicatedServices = [...services, ...services]

  return (
    <section className="bg-sky-400 py-6 overflow-hidden">
      <div className="flex items-center whitespace-nowrap">
        <div className="flex animate-scroll hover:pause">
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <span className="text-black font-bold text-xl px-8">
                {service}
              </span>
              <span className="text-black text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollingServices
