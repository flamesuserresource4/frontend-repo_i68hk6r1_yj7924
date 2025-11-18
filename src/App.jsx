import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(29,78,216,0.12),transparent),radial-gradient(1000px_500px_at_110%_10%,rgba(56,189,248,0.08),transparent)]"/>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Resume />

        <footer className="py-10">
          <div className="mx-auto max-w-7xl px-4">
            <div className="border-t border-white/10 pt-6 text-sm text-blue-300/60">
              © {new Date().getFullYear()} Joshua P Deregla. Crafted with care.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
