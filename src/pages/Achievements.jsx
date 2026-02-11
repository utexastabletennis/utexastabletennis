function Achievements() {
  const achievements = [
    {
      tournament: "2024 NCTTA Fall Regionals",
      date: "November 2024",
      results: [
        { event: "Team Event", placement: "2nd Place", color: "text-gray-500" },
        { event: "Women's Singles", placement: "1st Place", color: "text-yellow-500", medal: "🥇" },
        { event: "Co-ed Doubles", placement: "3rd Place", color: "text-amber-700", medal: "🥉" },
      ]
    },
    {
      tournament: "2024 NCTTA Fall Tournament",
      date: "October 2024",
      results: [
        { event: "Team Event", placement: "3rd Place", color: "text-amber-700", medal: "🥉" },
        { event: "Men's Singles", placement: "2nd Place", color: "text-gray-500", medal: "🥈" },
      ]
    }
  ]

  const legacyStats = [
    { label: "Years Active", value: "10+" },
    { label: "NCTTA Division", value: "1" },
    { label: "Active Members", value: "50+" },
    { label: "Tournament Wins", value: "15+" },
  ]

  return (
    <div>
      {/* Hero Section with solid gradient */}
      <div className="bg-gradient-to-r from-ut-orange to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Achievements</h1>
          <p className="text-xl text-white">Our competitive success in NCTTA tournaments</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Recent Tournament Results */}
        <div className="space-y-12 mb-16">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-8">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{achievement.tournament}</h2>
                <p className="text-gray-600 mt-2">{achievement.date}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievement.results.map((result, resultIdx) => (
                  <div key={resultIdx} className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">{result.medal || "🏅"}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{result.event}</h3>
                    <p className={`text-2xl font-bold ${result.color}`}>{result.placement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legacy Statistics */}
        <div className="bg-gradient-to-r from-ut-orange to-orange-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Our Legacy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {legacyStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
