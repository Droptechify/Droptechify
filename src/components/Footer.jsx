
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Website Development',
    'WordPress Development', 
    'Video Editing',
    'Guest Posting',
    'App Development'
  ]

  const quickLinks = [
    'Services',
    'About Us',
    'F.A.Q',
    'Privacy Policy',
    'Contact'
  ]

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold">
                <span className="text-blue-500">D</span>ropTechify
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We Build Digital Solutions That Build Your Brand. Expert software development 
              company specializing in modern web and mobile solutions.
            </p>
            <div className="text-sm text-gray-400">
              <p>Email: contact@droptechify.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DropTechify - All rights reserved
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
