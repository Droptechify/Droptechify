
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            Privacy Policy
          </h2>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="prose prose-gray max-w-none">
              <h3 className="text-xl font-bold mb-4">Information We Collect</h3>
              <p className="mb-6 text-gray-600">
                We collect information you provide directly to us, such as when you create an account, 
                request our services, or contact us for support. This may include your name, email address, 
                phone number, and project requirements.
              </p>

              <h3 className="text-xl font-bold mb-4">How We Use Your Information</h3>
              <p className="mb-6 text-gray-600">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and respond 
                to your comments and questions.
              </p>

              <h3 className="text-xl font-bold mb-4">Information Sharing</h3>
              <p className="mb-6 text-gray-600">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information 
                with trusted service providers who assist us in operating our business.
              </p>

              <h3 className="text-xl font-bold mb-4">Data Security</h3>
              <p className="mb-6 text-gray-600">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>

              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@droptechify.com or through our contact form.
              </p>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
