
import React from 'react'

const ScrollingServices = () => {
  const services = [
    'Website Development',
    'WordPress Development', 
    'Video Editing',
    'Guest Posting',
    'App Development',
    'Website Development',
    'WordPress Development',
    'Video Editing',
    'Guest Posting',
    'App Development'
  ]

  return (
    <section className="bg-primary py-4 overflow-hidden">
      <div className="flex items-center whitespace-nowrap animate-scroll">
        {services.map((service, index) => (
          <span
            key={index}
            className="text-black font-semibold text-lg mx-8 flex items-center"
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
