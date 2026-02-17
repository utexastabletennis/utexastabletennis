function Sponsorships() {
  const benefits = [
    { icon: "🎯", title: "Brand Visibility", description: "Logo placement on team materials and social media" },
    { icon: "🤝", title: "Community Engagement", description: "Connect with students and table tennis enthusiasts" },
    { icon: "📱", title: "Social Media Promotion", description: "Featured across our social media platforms" },
    { icon: "🏆", title: "Tournament Recognition", description: "Recognition at NCTTA tournaments" },
  ]

  return (
    <div>
      {/* Hero Section with team photo */}
      <div className="relative h-64 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/utexastabletennis/team-photo.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-ut-orange bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Sponsorships</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Current Sponsor */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Sponsor</h2>
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <img
                src="/utexastabletennis/attc_logo.png"
                alt="Austin Table Tennis Club"
                className="w-48 h-48 object-contain mb-6"
              />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Austin Table Tennis Club</h3>
              <p className="text-gray-600 text-center mb-6">
                Supporting competitive table tennis in the Austin area and helping develop the next generation of players.
              </p>
              <a
                href="https://www.austintt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ut-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Visit ATTC Website
              </a>
            </div>
          </div>
        </div>

        {/* Sponsorship Benefits */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sponsorship Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action with team photo */}
        <div className="relative rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/utexastabletennis/team-photo.jpg)' }}
          ></div>
          <div className="absolute inset-0 bg-ut-orange bg-opacity-90"></div>
          <div className="relative text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Sponsoring Us?</h2>
            <p className="text-xl mb-6">
              Help us compete at the highest level in collegiate table tennis
            </p>
            <a
              href="mailto:sponsor@uttabletennis.org"
              className="inline-block bg-white text-ut-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsorships
