import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import FeaturedService from './components/FeaturedService'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIChatWidget from './components/chat/AIChatWidget'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <FeaturedService />
        <About />
        <WhyChooseUs />
        <Process />
        <Showcase />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  )
}
