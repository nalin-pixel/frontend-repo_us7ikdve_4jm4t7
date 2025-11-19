import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Roadmap from './components/Roadmap'
import Beta from './components/Beta'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-400/30 selection:text-white">
      {/* animated mesh background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 opacity-60 mix-blend-screen bg-[radial-gradient(1200px_600px_at_-10%_-20%,rgba(30,64,175,0.35),transparent),radial-gradient(900px_500px_at_120%_10%,rgba(139,92,246,0.25),transparent),radial-gradient(800px_600px_at_50%_120%,rgba(56,189,248,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <Announcement />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Roadmap />
        <Beta />
      </main>
      <Footer />
    </div>
  )
}

export default App
