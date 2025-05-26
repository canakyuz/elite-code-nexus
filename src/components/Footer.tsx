
const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-gradient-to-br from-blue-25 to-blue-50 border-t border-blue-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
              <span className="text-white font-mono text-sm font-bold">CA</span>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-light text-blue-900">Can Akyüz</div>
              <div className="text-sm text-blue-600">Senior Software Engineer</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="space-y-4">
              <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Connect</div>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors text-sm">
                  LinkedIn
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors text-sm">
                  GitHub
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors text-sm">
                  Twitter
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Location</div>
              <div className="space-y-1">
                <div className="text-sm text-blue-700">Istanbul, Turkey</div>
                <div className="text-xs text-blue-500">UTC+3</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-blue-500">
              © 2024 Can Akyüz. All rights reserved.
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs font-mono text-blue-500 hover:text-blue-900 transition-colors uppercase tracking-wider"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
