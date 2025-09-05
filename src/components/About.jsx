import React from 'react';
import { Shield, Clock, TrendingUp, CheckCircle, Users } from 'lucide-react';

function About({ onPageChange }) {

  const guarantees = [
    {
      icon: <CheckCircle size={24} />,
      title: "Accurate and realistic cost estimation",
      description: "We prioritize accurate and realistic cost estimation through detailed analysis of your business goals, user needs, and project requirements, that allow us to provide precise budget and timeline assessments."
    },
    {
      icon: <Users size={24} />,
      title: "Competence-based selection of a project team", 
      description: "Our thorough resource planning process matches the best-suited candidates to each role, ensuring their skills, interests, and expertise align perfectly with project needs."
    },
    {
      icon: <Shield size={24} />,
      title: "Comprehensive risk management",
      description: "We proactively identify, assess, and mitigate risks to maintain project stability, focusing on transparency and addressing potential threats early on."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Agile delivery",
      description: "Our flexible and iterative approach ensures timely delivery, adapts to changing requirements and prioritizes continuous improvement throughout the development process."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Budget control",
      description: "By accurately scoping and prioritizing features, we ensure efficient resource allocation and prevent unnecessary costs or budget overruns."
    },
    {
      icon: <Clock size={24} />,
      title: "Responsible approach to deadlines",
      description: "Our structured processes and proactive change management ensure deadlines are met without compromising on quality or project goals."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-purple-800 text-white"
        style={{
          backgroundImage: 'url(/api/admin/background/about)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-purple-800/90"></div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            About <span className="text-yellow-400">DropTechify</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
            We are a passionate team of developers and designers committed to transforming your digital vision into reality through innovative software solutions.
          </p>
        </div>
      </section>


      {/* Project Guarantees */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What we do to guarantee project <span className="text-sky-500">success</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-sky-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Our Team</h2>
          <div className="bg-gray-100 rounded-2xl p-12">
            <p className="text-lg text-gray-600 mb-4">Team member images and information will be managed through the admin panel.</p>
            <p className="text-gray-500">Add team members, their photos, roles, and descriptions via the admin dashboard.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into powerful digital solutions.
          </p>
          <button 
            onClick={() => onPageChange('contact')}
            className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default About