
import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Get In Touch
          </h2>
          <p className="text-black text-lg max-w-3xl mx-auto opacity-80">
            Ready to start your next project? Contact us today for a free consultation 
            and let's build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="text-primary" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">contact@droptechify.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="text-primary" size={24} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MapPin className="text-primary" size={24} />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">Global Remote Services</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 text-center">
                    Contact form will be implemented here.
                    <br />
                    <span className="text-sm italic">
                      (This is a placeholder - you mentioned you'll add it yourself later)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
