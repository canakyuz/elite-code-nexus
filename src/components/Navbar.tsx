
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <span className="text-white font-bold text-lg">CA</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium tracking-wide relative group py-2"
            >
              HAKKIMDA
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium tracking-wide relative group py-2"
            >
              YETENEKLERİM
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium tracking-wide relative group py-2"
            >
              PROJELER
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium tracking-wide relative group py-2"
            >
              BLOG
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
            >
              İLETİŞİM
            </button>
          </div>

          <button
            className="md:hidden text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 text-sm font-medium tracking-wide text-left py-2 hover:text-blue-600 transition-colors"
              >
                HAKKIMDA
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-slate-600 text-sm font-medium tracking-wide text-left py-2 hover:text-blue-600 transition-colors"
              >
                YETENEKLERİM
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="text-slate-600 text-sm font-medium tracking-wide text-left py-2 hover:text-blue-600 transition-colors"
              >
                PROJELER
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-slate-600 text-sm font-medium tracking-wide text-left py-2 hover:text-blue-600 transition-colors"
              >
                BLOG
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 text-sm font-medium text-left shadow-lg"
              >
                İLETİŞİM
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
