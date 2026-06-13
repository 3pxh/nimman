import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AttentionClub from './pages/AttentionClub.tsx'
import Home from './pages/Home.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attention-club" element={<AttentionClub />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
