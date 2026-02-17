function PlayerCard({ player }) {
  // Generate initials from player name
  const initials = player.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  // Generate a color based on the player's name
  const stringToColor = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    const hue = hash % 360
    return `hsl(${hue}, 70%, 60%)`
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {player.image ? (
        <img
          src={player.image}
          alt={player.name}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div
          className="h-48 flex items-center justify-center text-white text-6xl font-bold"
          style={{ backgroundColor: stringToColor(player.name) }}
        >
          {initials}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{player.name}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-600">Rating</span>
          <span className="text-2xl font-bold text-ut-orange">{player.rating}</span>
        </div>
        {player.handedness && (
          <div className="space-y-2 text-sm text-gray-600 border-t pt-3">
            <div className="flex justify-between">
              <span className="font-semibold">Handedness:</span>
              <span>{player.handedness}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Style:</span>
              <span>{player.playingStyle}</span>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <div className="font-semibold mb-2">Equipment</div>
              <div className="text-xs space-y-1">
                <div><span className="font-medium">Blade:</span> {player.blade}</div>
                <div><span className="font-medium">FH:</span> {player.fhRubber}</div>
                <div><span className="font-medium">BH:</span> {player.bhRubber}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlayerCard
