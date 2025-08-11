function Team() {
  const teamMembers = [
    {
      name: "Ryan",
      image: "/attached_assets/Ryan-photo.jpg",
      signature: "/attached_assets/Ryan-signature.png"
    },
    {
      name: "Martin", 
      image: "/attached_assets/Martin-photo.jpg",
      signature: "/attached_assets/Martin-signature.png"
    },
    {
      name: "David",
      image: "/attached_assets/David-photo.jpg", 
      signature: "/attached_assets/David-signature.png"
    }
  ];

  const stats = [
    {
      number: "200",
      label: "Developers trained",
      prefix: "+"
    },
    {
      number: "600", 
      label: "Projects managed",
      prefix: "+"
    },
    {
      number: "4.8",
      label: "Average rating",
      prefix: "★"
    }
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Who are we?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Team Photos */}
          <div className="grid grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-yellow-500 flex items-center justify-center text-black font-bold text-lg">
                          ${member.name[0]}
                        </div>
                      `;
                    }}
                  />
                </div>
                <h4 className="font-bold text-lg mb-2">{member.name}</h4>
                <div className="h-8 flex items-center justify-center">
                  <img 
                    src={member.signature} 
                    alt={`${member.name} signature`}
                    className="h-6 opacity-60"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Story */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              DropTechify is above all a great human adventure aimed at excellence.
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              It all started with three friends - Ryan and Martin, the founders of TechFlow Solutions, 
              and David, creator of CodeCraft Agency. Driven by the same desire to help, they pooled 
              their expertise to take on their missions: simplify developers' lives and optimize 
              the profitability of their projects.
            </p>
            
            <h4 className="text-xl font-bold mb-4">Our promise?</h4>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With solid values - rigor, excellence and commitment - the <strong>DropTechify</strong> team 
              has quickly developed. What started as a small group of developers now serves clients 
              worldwide, thanks to a passionate team always ready to put their clients first.
            </p>

            <h4 className="text-xl font-bold mb-4">Since 2023, here's what they've accomplished together</h4>
            <p className="text-gray-600 mb-6">
              – More than 200 developers trained to launch their own development agency.<br/>
              – More than 600 businesses freed from the hassles of daily project management.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">
                    {stat.prefix}{stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center text-lg font-medium">
              ★4.8/5
            </div>
            <div className="text-center text-sm text-gray-600">
              Based on 2000+ reviews
            </div>

            <p className="text-gray-600 mt-6 leading-relaxed">
              And that's just the beginning! <strong>DropTechify</strong> has never forgotten what sets it apart: 
              a warm approach, attention to detail, and the desire to always improve our clients' experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;