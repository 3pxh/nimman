import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AttentionClub from './pages/AttentionClub.tsx'
import Home from './pages/Home.tsx'
import ReadingClub from './pages/ReadingClub.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attention-club" element={<AttentionClub />} />
        <Route path="/reading-club" element={<ReadingClub />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
