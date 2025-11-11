const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-emerald-800 to-emerald-900 text-white">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557050543-4d5f4e07ef46')] bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-amber-300 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300" 
                alt="Intezar Ali" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Intezar Ali</h1>
            <h2 className="text-xl md:text-2xl text-amber-300 font-semibold mb-4">Zoology Student & Researcher</h2>
            <p className="text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Dedicated to studying and conserving wildlife through research, education, and hands-on fieldwork. Specializing in mammalian behavior and conservation biology.
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors shadow-md"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-md transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
