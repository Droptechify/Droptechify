import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Satisfied clients</h2>
          <p className="text-gray-600 text-lg">
            Our satisfaction lies in the satisfaction of your clients.
          </p>
        </div>

        {/* Client Reviews */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Review Images */}
          <div className="grid grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={`/attached_assets/Client-${i}.jpg`} 
                  alt={`Client ${i}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-yellow-500 flex items-center justify-center">
                        <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                    `;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Right Column - Rating and Reviews */}
          <div>
            <div className="flex items-center mb-8">
              <img 
                src="/attached_assets/Platform-logo.png" 
                alt="Platform"
                className="h-8 mr-4"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <div className="text-2xl font-bold">4.86 on Platform</div>
                <div className="text-sm text-gray-600">Platform Reviews</div>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img 
                    src="/attached_assets/Client-1.jpg" 
                    alt="Pauline"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="font-medium mr-2">Pauline</span>
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Project perfectly matching the brief, beautifully developed and lacking nothing 
                    for a pleasant experience. The team is very responsive, I highly recommend.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img 
                    src="/attached_assets/Client-2.jpg" 
                    alt="Marcus"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="font-medium mr-2">Marcus</span>
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Very easy project setup. Great communication throughout the process, 
                    they even helped us improve our initial requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Get in touch</h3>
            <p className="text-gray-600 text-lg">
              Ready to transform your development process? Let's discuss your project.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn-yellow px-12 py-4 text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;