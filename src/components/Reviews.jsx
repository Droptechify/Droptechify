
import React from 'react'
import { Star } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      text: "DropTechify transformed our digital presence completely. The team's expertise and dedication are unmatched."
    },
    {
      name: "Michael Chen",
      company: "Global Solutions",
      rating: 5,
      text: "Outstanding work on our e-commerce platform. Sales increased by 300% within the first month of launch."
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      rating: 5,
      text: "The custom software solution they built for us streamlined our entire workflow. Highly recommended!"
    },
    {
      name: "David Thompson",
      company: "Startup Ventures",
      rating: 5,
      text: "Professional, reliable, and innovative. DropTechify exceeded all our expectations."
    },
    {
      name: "Lisa Wang",
      company: "E-commerce Store",
      rating: 5,
      text: "The mobile app they developed for us is absolutely amazing. User engagement increased significantly."
    }
  ]

  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section className="py-32 bg-sky-50">
      <div className="container-max section-padding">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
            What Our <span className="text-sky-400 italic">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll hover:pause">
            {duplicatedReviews.map((review, index) => (
              <div key={index} className="flex-shrink-0 w-96 mx-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sky-500 text-sm">{review.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
