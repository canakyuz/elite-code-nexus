
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-lg font-light text-gray-900 tracking-wide">
            AK
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#about" className="text-sm uppercase tracking-widest text-gray-600 hover:text-blue-600 transition-colors">
              Hakkımda
            </a>
            <a href="#skills" className="text-sm uppercase tracking-widest text-gray-600 hover:text-blue-600 transition-colors">
              Yetenekler
            </a>
            <a href="#projects" className="text-sm uppercase tracking-widest text-gray-600 hover:text-blue-600 transition-colors">
              Projeler
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest text-gray-600 hover:text-blue-600 transition-colors">
              İletişim
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-px bg-current"></span>
              <span className="w-full h-px bg-current"></span>
              <span className="w-full h-px bg-current"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-6">
              <a href="#about" className="text-sm uppercase tracking-widest text-gray-600">
                Hakkımda
              </a>
              <a href="#skills" className="text-sm uppercase tracking-widest text-gray-600">
                Yetenekler
              </a>
              <a href="#projects" className="text-sm uppercase tracking-widest text-gray-600">
                Projeler
              </a>
              <a href="#contact" className="text-sm uppercase tracking-widest text-gray-600">
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
