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
      isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center rounded-xl shadow-lg">
              <span className="text-white font-bold text-lg">CA</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium tracking-wide relative group">
              ABOUT
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#work" className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium tracking-wide relative group">
              PROJECTS
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium tracking-wide relative group">
              SKILLS
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#blog" className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium tracking-wide relative group">
              BLOG
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium tracking-wide relative group">
              CONTACT
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
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
          <div className="md:hidden py-8 border-t border-slate-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-6">
              <a href="#about" className="text-slate-600 text-sm font-medium tracking-wide">ABOUT</a>
              <a href="#work" className="text-slate-600 text-sm font-medium tracking-wide">PROJECTS</a>
              <a href="#skills" className="text-slate-600 text-sm font-medium tracking-wide">SKILLS</a>
              <a href="#blog" className="text-slate-600 text-sm font-medium tracking-wide">BLOG</a>
              <a href="#contact" className="text-slate-600 text-sm font-medium tracking-wide">CONTACT</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
