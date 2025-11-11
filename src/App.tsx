import { useEffect } from 'react';
import './index.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Research from './components/Research';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export function App() {
  useEffect(() => {
    // Add Inter font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector<HTMLElement>(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 bg-emerald-700 hover:bg-emerald-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </div>
  );
}

export default App;
