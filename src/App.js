import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Meditation } from "./containers/Meditation/Meditation"
import Breathing from "./containers/breath/Breathing"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/breathing" element={<Breathing />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/" element={<Meditation />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
