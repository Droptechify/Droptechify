import Header from './components/Header';
import Hero from './components/Hero';
import ServicesMarquee from './components/ServicesMarquee';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Sectors from './components/Sectors';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ServicesMarquee />
      <WhyChoose />
      <Services />
      <HowItWorks />
      <Sectors />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;