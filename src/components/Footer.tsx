
const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div>
            <div className="text-lg font-light text-gray-900 tracking-wide mb-2">
              Ahmet Koç
            </div>
            <p className="text-sm text-gray-500 font-light">
              Yazılım Geliştirici & Girişimci
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-light">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-light">
              GitHub
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-light">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-xs text-gray-400 font-light">
            © 2024 Ahmet Koç. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
