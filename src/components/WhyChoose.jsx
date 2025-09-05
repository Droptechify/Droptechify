import React from 'react';
import { ShieldCheck, TrendingUp } from 'lucide-react';

function WhyChoose() {
  const benefits = [
    {
      // Instead of an icon component, we use an image element here:
      icon: (
        <img
          src="/attached_assets/coding.png"
          alt="coding Icon"
          className="w-10 h-10"
        />
      ),
      title: "End-to-End Development",
      description:
        "From strategy to deployment — we handle everything with speed, quality & accountability.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: (
        <img
          src="/attached_assets/solutions.png"
          alt="solutions Icon"
          className="w-10 h-10"
        />
      ),
      title: "Scalable & Secure Solutions",
      description:
        "Build on future-proof technologies with top-tier security, optimized for performance.",
      color: "from-green-500 to-green-700",
    },
    {
      icon: (
        <img
          src="/attached_assets/diagram.png"
          alt="diagram Icon"
          className="w-10 h-10"
        />
      ),
      title: "Growth-Driven Technology",
      description:
        "We engineer digital products that drive revenue, cut costs & improve operational efficiency.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-yellow-500">DropTechify</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We don’t just build software — we build digital engines for business growth.
          </p>
        </div>

        {/* 3-Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-xl border hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className={`absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br ${b.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}
              ></div>

              <div className="flex items-center mb-6">
                <div
                  className={`p-4 rounded-full bg-gradient-to-br ${b.color} text-white shadow-md`}
                >
                  {b.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                {b.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="mt-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
            Get Your Project Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
