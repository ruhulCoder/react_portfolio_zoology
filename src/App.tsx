import { useState, useEffect } from 'react';
import './index.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';

export function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-earth-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Volunteering />
        <Contact />
      </main>
      <Footer />

      {/* Back to top button — only visible after scrolling */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-glow-forest transition-all duration-300 group
          bg-gradient-to-br from-emerald-600 to-teal-700 hover:from-amber-400 hover:to-amber-500
          ${showTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white group-hover:text-emerald-900 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

export default App;