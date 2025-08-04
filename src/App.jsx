
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollingServices from './components/ScrollingServices'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import PrivacyPolicy from './components/PrivacyPolicy'
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
      <HowItWorks />
      <FAQ />
      <PrivacyPolicy />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
