function ServicesMarquee() {
  const services = [
    { icon: "🏠", name: "Website Development" },
    { icon: "📱", name: "Mobile Apps" },
    { icon: "🎥", name: "Video Editing" },
    { icon: "💡", name: "Digital Marketing" },
    { icon: "⚙️", name: "Maintenance & Support" },
    { icon: "📈", name: "SEO Optimization" },
  ];

  return (
    <section className="py-8 bg-gray-50 overflow-hidden">
      <div className="marquee flex items-center space-x-16">
        {/* Double the services for seamless loop */}
        {[...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center space-x-4 whitespace-nowrap">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-2xl">
              {service.icon}
            </div>
            <span className="font-medium text-gray-800">{service.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesMarquee;