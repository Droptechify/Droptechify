
import React from 'react'
import { Star, Quote } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      avatar: "/new-images/team-meeting.jpg",
      rating: 5,
      review: "DropTechify transformed our online presence completely. Their team delivered an exceptional website that increased our conversions by 300%. Highly professional and creative!"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, Digital Innovations",
      avatar: "/new-images/developer-working.png",
      rating: 5,
      review: "Outstanding mobile app development! They created exactly what we envisioned and delivered on time. The attention to detail and user experience is remarkable."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCo",
      avatar: "/new-images/phone-contact.jpg",
      rating: 5,
      review: "Their video editing services are top-notch. Our marketing campaigns have never looked better. Professional quality work with quick turnaround times."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CTO, InnovateLab",
      avatar: "/new-images/coding-workspace.png",
      rating: 5,
      review: "Excellent custom software development. They understood our complex requirements and delivered a solution that streamlined our entire workflow."
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Operations Manager, FlowTech",
      avatar: "/new-images/web-development.png",
      rating: 5,
      review: "Python automation scripts they created saved us hundreds of hours monthly. Incredible ROI and their support team is always responsive."
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Product Manager, CloudSync",
      avatar: "/new-images/video-editing.png",
      rating: 5,
      review: "Their SaaS development expertise is unmatched. Built us a scalable platform that handles thousands of users seamlessly. Fantastic work!"
    }
  ]

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-sky-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="mb-6">
                <Quote size={24} className="text-sky-400 mb-4" />
                <p className="text-gray-600 leading-relaxed">
                  "{review.review}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Happy Clients
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to experience the same level of excellence? Let's discuss your project today.
          </p>
          <button className="bg-sky-400 hover:bg-sky-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default Reviews
