
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-gray-900">
            Ahmet Koç
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              Hakkımda
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
              Yetenekler
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projeler
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              İletişim
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                Hakkımda
              </a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
                Yetenekler
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projeler
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                İletişim
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
