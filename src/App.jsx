import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Players from './pages/Players'
import Achievements from './pages/Achievements'
import Sponsorships from './pages/Sponsorships'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/sponsorships" element={<Sponsorships />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
