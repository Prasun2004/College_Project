import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './pages/Login'
import Navbar from './components/Navbar'
import HeroSection from './pages/student/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <Login/>
    </main>
  )
}

export default App
