
const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-light mb-4">Ahmet Koç</h3>
            <p className="text-gray-400 max-w-md">
              Modern teknolojilerle dijital dünyayı şekillendiren yazılımcı ve girişimci.
            </p>
          </div>
          
          <div className="flex space-x-6 md:justify-end">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ahmet Koç. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
