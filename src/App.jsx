import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Hello from './pages/Hello.jsx'
import Hi from './pages/Hi.jsx'
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/WoW/Woo/hi" element={<Hi />} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}
