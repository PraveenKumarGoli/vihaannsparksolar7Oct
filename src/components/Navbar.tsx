import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-navy-900/5 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <a href="#home" aria-label="Vihaan Spark Solar home">
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={scrolled ? 'nav-link' : 'text-white/90 hover:text-white font-medium text-sm transition-colors duration-200'}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-navy-950 font-semibold text-sm rounded-lg hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-navy-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${scrolled ? 'text-navy-900' : 'text-white'}`} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-white z-40 overflow-y-auto">
          <div className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-navy-700 font-medium text-base border-b border-navy-100 hover:text-gold-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold-500 text-navy-950 font-semibold rounded-lg"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
