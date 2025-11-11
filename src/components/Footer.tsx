import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emerald-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              <span className="text-amber-300">Intezar</span> Ali
            </h2>
            <p className="text-emerald-200 text-sm mt-1">Zoology Student</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-emerald-200 text-sm">
              &copy; {currentYear} Intezar Ali. All rights reserved.
            </p>
            <p className="text-emerald-300 text-xs mt-1">
              Last updated: July 11, 2025
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-emerald-700/50 text-center">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-emerald-200">
            <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
            <a href="#education" className="hover:text-amber-300 transition-colors">Education</a>
            <a href="#research" className="hover:text-amber-300 transition-colors">Research</a>
            <a href="#projects" className="hover:text-amber-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-amber-300 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
