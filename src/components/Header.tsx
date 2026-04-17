import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about',          label: 'About' },
  { href: '#education',      label: 'Education' },
  { href: '#experience',     label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#volunteering',   label: 'Volunteering' },
  { href: '#contact',        label: 'Contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll to add extra shadow / blur on header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      setTimeout(() => {
        window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
      }, 10);
    }
  };

  return (
    <>
      {/* ── Sticky header bar ─────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-forest-900/95 backdrop-blur-md shadow-lg'
            : 'bg-gradient-to-r from-emerald-800 to-teal-700'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl select-none">🌿</span>
            <span className="text-xl md:text-2xl font-bold text-white font-display">
              <span className="text-amber-300 group-hover:text-amber-200 transition-colors">Intezar</span>{' '}Ali
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="relative px-3 py-2 text-sm font-medium text-white/90 hover:text-amber-200 transition-colors duration-200 group"
              >
                {label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Hamburger button (mobile) */}
          <button
            id="mobile-menu-btn"
            className="md:hidden text-white hover:text-amber-300 transition-colors p-2 rounded-lg hover:bg-white/10"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Mobile menu — FIXED overlay (does NOT push content) ── */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fadeIn md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu panel — slides down from top, sits at z-40 BELOW header (z-50) */}
          <nav
            className="fixed top-16 left-0 right-0 z-40 md:hidden animate-slideDown"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="mx-3 rounded-2xl bg-forest-900/95 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex flex-col p-3">
                {navLinks.map(({ href, label }, i) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-amber-200 hover:bg-white/10 transition-all duration-200 font-medium"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {label}
                  </a>
                ))}
              </div>
              <div className="px-7 py-4 border-t border-white/10">
                <p className="text-xs text-emerald-300/70 font-medium tracking-wide uppercase">Neuro-oncology Researcher</p>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
