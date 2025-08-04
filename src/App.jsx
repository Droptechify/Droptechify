
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollingServices from './components/ScrollingServices'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import StickySection from './components/StickySection'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ScrollingServices />
      <About />
      <Services />
      <StickySection />
      <Portfolio />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
