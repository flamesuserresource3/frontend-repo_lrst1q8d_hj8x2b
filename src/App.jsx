import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { User, PlayCircle, Layers, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Navigation */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <a href="#home" className="font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Alief Kaka</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
              <a href="#about" className="inline-flex items-center gap-2 hover:text-white">
                <User className="h-4 w-4" /> About
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 hover:text-white">
                <Layers className="h-4 w-4" /> Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-3 py-2 font-medium text-white transition hover:bg-indigo-400"
              >
                <PlayCircle className="h-4 w-4" /> Watch
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/50">© {new Date().getFullYear()} Alief Kaka. All rights reserved.</p>
            <div className="text-xs text-white/50">Built with love, code, and creativity.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
