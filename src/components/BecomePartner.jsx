
import React, { useState } from 'react'
import { Users, TrendingUp, Award, ArrowRight, Send } from 'lucide-react'


const BecomePartner = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    companySize: '',
    services: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Partnership form submitted:', formData)
  }

  const benefits = [
    {
      icon: <Users size={48} />,
      title: "Collaborative Growth",
      description: "Join our network of trusted partners and grow together through shared expertise and resources."
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Revenue Opportunities",
      description: "Access new revenue streams through our referral program and joint project opportunities."
    },
    {
      icon: <Award size={48} />,
      title: "Brand Recognition",
      description: "Get featured as a certified partner and benefit from our marketing initiatives."
    },
    /* {
      icon: <Handshake size={48} />,
      title: "Mutual Support",
      description: "Receive dedicated support, training, and resources to ensure partnership success."
    }*/
  ]

  return (
    <section id="become-partner" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Become a <span className="text-sky-400 italic">Partner</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join DropTechify's partner ecosystem and unlock new opportunities for growth, collaboration, and success in the digital world.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center text-black mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Partnership Form */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 mb-6">
              Ready to Partner with Us?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fill out the form and let's discuss how we can build a successful partnership together. Our team will review your application and get back to you within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-700">Strategic partnership opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-700">Dedicated partner support team</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-700">Joint marketing initiatives</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-gray-700">Revenue sharing programs</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                    placeholder="your@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Services
                  </label>
                  <input
                    type="text"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                    placeholder="e.g. Marketing, Design, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Partnership Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your company and how you'd like to partner with us..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-400 hover:bg-sky-500 text-black py-3 md:py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Submit Partnership Request <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BecomePartner
