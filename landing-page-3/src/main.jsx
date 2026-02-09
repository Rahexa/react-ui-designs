import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/NavBar'   // ✅ Capital
import Hero from './components/Hero'
import Features from './components/Features'
import CIA from './components/CIA'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />   {/* ✅ Capital */}
    <Hero />
    <Features />
    <CIA />
  </StrictMode>
)
