
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <span className="text-white font-bold text-lg">CA</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'HAKKIMDA', id: 'about' },
              { label: 'PROJELER', id: 'work' },
              { label: 'YETENEKLER', id: 'skills' },
              { label: 'BLOG', id: 'blog' },
              { label: 'İLETİŞİM', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium tracking-wide relative group px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                {item.label}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-8"></div>
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {[
                { label: 'HAKKIMDA', id: 'about' },
                { label: 'PROJELER', id: 'work' },
                { label: 'YETENEKLER', id: 'skills' },
                { label: 'BLOG', id: 'blog' },
                { label: 'İLETİŞİM', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium tracking-wide text-left px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
