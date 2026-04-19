const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-forest-800 to-teal-900 text-white min-h-[92vh] flex items-center"
      style={{ backgroundSize: '300%' }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Decorative dot grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="flex flex-col justify-center md:flex-row items-center gap-10 md:gap-16">

          {/* ── Profile photo ── */}
          <div
            className="flex-shrink-0 animate-fadeIn"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            <div className="relative mx-auto w-52 h-52 md:w-68 md:h-68">
              {/* Animated pulse rings */}
              <span className="absolute inset-0 rounded-full border-2 border-amber-300/60 animate-pulseRing" />
              <span className="absolute inset-[-12px] rounded-full border border-amber-300/30 animate-pulseRing" style={{ animationDelay: '0.8s' }} />

              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-amber-300 shadow-glow-amber">
                <img
                  src="/assets/profile.jpg"
                  alt="Intezar Ali"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge */}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-400 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                🔬 Researcher
              </span>
            </div>
          </div>

          {/* ── Text content ── */}
          <div className="text-center md:text-left">
            <p
              className="text-amber-300/80 text-sm font-semibold uppercase tracking-widest mb-3 animate-fadeInUp"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Welcome to my portfolio
            </p>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight animate-fadeInUp"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              Intezar <span className="text-amber-300">Ali</span>
            </h1>

            <h2
              className="text-xl md:text-2xl text-emerald-200 font-medium mb-5 animate-fadeInUp"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              Neuro-oncology Researcher
            </h2>

            <p
              className="text-base md:text-lg text-white/75 max-w-lg mx-auto md:mx-0 leading-relaxed mb-8 animate-fadeInUp"
              style={{ animationDelay: '0.65s', opacity: 0 }}
            >
              Investigating brain tumor biology and glioblastoma dynamics to develop targeted therapies that improve patient outcomes and quality of life.
            </p>

            <div
              className="flex flex-wrap justify-center md:justify-start gap-4 animate-fadeInUp"
              style={{ animationDelay: '0.8s', opacity: 0 }}
            >
              <a
                href="#contact"
                className="btn-glow px-7 py-3 bg-amber-400 hover:bg-amber-300 text-emerald-900 font-bold rounded-full shadow-glow-amber transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="#experience"
                className="px-7 py-3 border-2 border-white/40 hover:border-amber-300 hover:text-amber-200 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                View Experience
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap justify-center md:justify-start gap-6 mt-10 animate-fadeInUp"
              style={{ animationDelay: '0.95s', opacity: 0 }}
            >
              {[
                { value: 'BSc & MSc', label: 'in Zoology' },
                { value: '4+', label: 'Years Research' },
                { value: 'BNOS', label: 'Member' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-amber-300 font-display">{value}</p>
                  <p className="text-xs text-white/60 uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: '72px', width: '100%' }}>
          <path d="M0,32 C360,72 1080,0 1440,40 L1440,72 L0,72 Z" fill="#faf8f5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
