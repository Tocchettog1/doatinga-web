import { useState } from 'react'
import reactLogo from './assets/logo.svg'
import viteLogo from './assets/logo.svg'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Mapa from './pages/Mapa.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Mapa/>
      <Footer/>
    </div>
  )
}

export default App
