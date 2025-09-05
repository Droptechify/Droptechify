
function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];


  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              About <span className="text-yellow-400">DropTechify</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We are a passionate team of developers and designers committed to transforming
              your digital vision into reality through innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded with a vision to democratize technology, DropTechify started as a small team
                  of passionate developers who believed that every business deserves access to
                  high-quality software solutions.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Today, we have grown into a full-service software development company, but our
                  core values remain the same: deliver exceptional results, maintain transparent
                  communication, and build long-lasting partnerships with our clients.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    Web Development
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    Mobile Apps
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    Custom Software
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-up">
                <img
                  src="/attached_assets/IMAGE.jpg"
                  alt="Our Team"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help bring your next project to life.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;