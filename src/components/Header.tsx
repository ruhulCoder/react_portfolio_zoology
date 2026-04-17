import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="text-amber-300">Intezar</span> Ali
        </h1>
        
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-amber-200 transition-colors">About</a>
          <a href="#education" className="hover:text-amber-200 transition-colors">Education</a>
          <a href="#experience" className="hover:text-amber-200 transition-colors">Experience</a>
          <a href="#certifications" className="hover:text-amber-200 transition-colors">Certifications</a>
          <a href="#volunteering" className="hover:text-amber-200 transition-colors">Volunteering</a>
          <a href="#contact" className="hover:text-amber-200 transition-colors">Contact</a>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <nav className="md:hidden bg-emerald-900 px-4 py-2 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            <a href="#about" className="py-2 hover:text-amber-200 transition-colors" onClick={toggleMobileMenu}>About</a>
            <a href="#education" className="py-2 hover:text-amber-200 transition-colors" onClick={toggleMobileMenu}>Education</a>
            <a href="#experience" className="py-2 hover:text-amber-200 transition-colors" onClick={toggleMobileMenu}>Experience</a>
            <a href="#certifications" className="py-2 hover:text-amber-200 transition-colors" onClick={toggleMobileMenu}>Certifications</a>
            <a href="#volunteering" className="py-2 hover:text-amber-200 transition-colors" onClick={toggleMobileMenu}>Volunteering</a>
            <a href="#contact" className="py-2 hover:text-amber-200 transition-colors" onClick={toggleMobileMenu}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
