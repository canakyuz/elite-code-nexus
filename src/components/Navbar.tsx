
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded">
              <span className="text-white font-medium text-sm">CA</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <a href="#about" className="text-slate-600 hover:text-blue-500 transition-colors text-small">
              About
            </a>
            <a href="#work" className="text-slate-600 hover:text-blue-500 transition-colors text-small">
              Work
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-500 transition-colors text-small">
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-slate-200 bg-white">
            <div className="flex flex-col space-y-6">
              <a href="#about" className="text-slate-600 text-small">About</a>
              <a href="#work" className="text-slate-600 text-small">Work</a>
              <a href="#contact" className="text-slate-600 text-small">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
