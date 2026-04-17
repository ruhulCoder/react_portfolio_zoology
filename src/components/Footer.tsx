const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-emerald-950 via-forest-950 to-teal-950 text-white">
      {/* Animated gradient divider */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-amber-400 to-teal-400 bg-[length:200%] animate-shimmer" />

      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold font-display text-white">
              <span className="text-amber-300">Intezar</span> Ali
            </h2>
            <p className="text-emerald-300/70 text-sm mt-1">Neuro-oncology Researcher</p>
            <p className="text-emerald-400/50 text-xs mt-2 flex items-center gap-1">
              <span>🌿</span> Made with passion for science
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-emerald-200/70">
            {['About', 'Education', 'Experience', 'Certifications', 'Volunteering', 'Contact'].map(label => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="hover:text-amber-300 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-emerald-200/60 text-sm">
              &copy; {currentYear} Intezar Ali
            </p>
            <p className="text-emerald-300/40 text-xs mt-1">
              Last updated: July 11, 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
