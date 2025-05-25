
const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CA</span>
                </div>
                <span className="text-white font-mono text-xl">Can Akyüz</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Building the future, one line of code at a time. 
                Let's create something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                Connect
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="font-mono text-sm">LINKEDIN</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="font-mono text-sm">GITHUB</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="font-mono text-sm">TWITTER</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="font-mono text-sm">MEDIUM</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:text-right space-y-8">
            <div className="space-y-4">
              <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                Status
              </div>
              <div className="flex lg:justify-end items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-mono text-sm">AVAILABLE FOR PROJECTS</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                Location
              </div>
              <div className="text-gray-300 font-mono">
                Istanbul, Turkey
              </div>
              <div className="text-gray-500 text-sm">
                UTC+3 • Remote Friendly
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 font-mono">
              © 2024 Can Akyüz. Crafted with passion.
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
              <span>SCROLL TO TOP</span>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-colors"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
