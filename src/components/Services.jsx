
import React from 'react'
import { Code, Wordpress, Video, PenTool, Smartphone, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies, responsive design, and optimized performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern Tech Stack']
    },
    {
      icon: <Wordpress size={40} />,
      title: 'WordPress Development',
      description: 'Professional WordPress solutions with custom themes, plugins, and complete site management.',
      features: ['Custom Themes', 'Plugin Development', 'Site Migration', 'Maintenance']
    },
    {
      icon: <Video size={40} />,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing, social media, and promotional content.',
      features: ['Professional Editing', 'Motion Graphics', 'Color Correction', 'Audio Enhancement']
    },
    {
      icon: <PenTool size={40} />,
      title: 'Guest Posting',
      description: 'Strategic guest posting services to boost your SEO and build quality backlinks.',
      features: ['Quality Backlinks', 'SEO Boost', 'Content Strategy', 'Authority Building']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX design.',
      features: ['iOS & Android', 'Cross-Platform', 'Modern UI/UX', 'API Integration']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="italic">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
