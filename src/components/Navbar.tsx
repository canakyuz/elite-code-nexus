
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
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <span className="text-white font-mono text-lg">Can Akyüz</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors font-mono text-sm tracking-wider">
              [01] ABOUT
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors font-mono text-sm tracking-wider">
              [02] SKILLS
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors font-mono text-sm tracking-wider">
              [03] WORK
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-mono text-sm tracking-wider">
              [04] CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-gray-800 bg-black/95">
            <div className="flex flex-col space-y-6">
              <a href="#about" className="text-gray-300 font-mono text-sm tracking-wider">[01] ABOUT</a>
              <a href="#skills" className="text-gray-300 font-mono text-sm tracking-wider">[02] SKILLS</a>
              <a href="#projects" className="text-gray-300 font-mono text-sm tracking-wider">[03] WORK</a>
              <a href="#contact" className="text-gray-300 font-mono text-sm tracking-wider">[04] CONTACT</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
