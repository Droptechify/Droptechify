
import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Website Development",
      image: "/IMAGE.jpg",
      description: "Full-featured e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "SaaS Software",
      image: "/IMAGE2.jpg",
      description: "Analytics dashboard for business intelligence",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      link: "#"
    },
    {
      id: 3,
      title: "Mobile App",
      category: "App Development",
      image: "/IMAGE3.jpg",
      description: "Cross-platform mobile application for fitness tracking",
      tech: ["React Native", "Firebase"],
      link: "#"
    }
  ]

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
            Our <span className="text-sky-400 italic">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of our most successful projects that have helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <button className="bg-white text-black p-3 rounded-full hover:bg-sky-400 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="bg-white text-black p-3 rounded-full hover:bg-sky-400 transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-sm text-sky-500 font-semibold mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
