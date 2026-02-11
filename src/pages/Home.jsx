function Home() {
  return (
    <div>
      {/* Hero Section with team photo background */}
      <div className="relative h-96 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/team-photo.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-ut-orange bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              UT Table Tennis
            </h1>
            <p className="text-xl md:text-2xl text-white">
              Competing in the NCTTA Division 1
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are the University of Texas at Austin&apos;s competitive table tennis team,
            competing in Division 1 of the National Collegiate Table Tennis Association (NCTTA).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-ut-orange text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold mb-2">Weekly Meetings</h3>
            <p className="text-gray-600">
              Join us every Tuesday at the Rec Sports Center for practice and training
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-ut-orange text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Competitive Play</h3>
            <p className="text-gray-600">
              We compete in NCTTA Division 1 tournaments throughout the year
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-ut-orange text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">All Skill Levels</h3>
            <p className="text-gray-600">
              From beginners to advanced players, everyone is welcome to join
            </p>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="relative rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/team-photo.jpg)' }}
          ></div>
          <div className="absolute inset-0 bg-ut-orange bg-opacity-90"></div>
          <div className="relative text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-6">
              Follow us on social media and join our Discord to stay updated
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/texas_tabletennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-ut-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Follow on Instagram
              </a>
              <a
                href="https://discord.gg/uvnz3g2aaj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
