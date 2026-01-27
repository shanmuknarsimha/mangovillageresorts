import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "../src/pages/HomePage"
import Cottages from "../src/pages/CottagesPage"
import Events from "../src/pages/EventsPage"
import Gallery from "../src/pages/GalleryPage"
import About from "../src/pages/AboutPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cottages" element={<Cottages />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
