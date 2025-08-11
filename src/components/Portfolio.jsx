import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern online store with advanced features",
      image: "/new-images/web-development.png",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and user-friendly banking application",
      image: "/new-images/developer-working.png",
      category: "Mobile App",
      technologies: ["React Native", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Video Streaming Platform",
      description: "High-quality video streaming service",
      image: "/new-images/video-editing.png",
      category: "Web Platform",
      technologies: ["Vue.js", "Python", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI Data Analytics",
      description: "Machine learning powered analytics dashboard",
      image: "/new-images/coding-workspace.png",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "React"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Healthcare Management",
      description: "Comprehensive healthcare management system",
      image: "/new-images/team-meeting.jpg",
      category: "Healthcare",
      technologies: ["Angular", "PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Educational Platform",
      description: "Interactive online learning platform",
      image: "/new-images/phone-contact.jpg",
      category: "Education",
      technologies: ["React", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const categories = ["All", "Web Development", "Mobile App", "Web Platform", "AI/ML", "Healthcare", "Education"]
  const [activeCategory, setActiveCategory] = React.useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-sky-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-sky-400 text-black'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-sky-400 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-500 font-semibold"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-semibold"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today to discuss your project requirements.
          </p>
          <button className="bg-sky-400 hover:bg-sky-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio