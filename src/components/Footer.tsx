
const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-8">
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded">
              <span className="text-white font-medium text-sm">CA</span>
            </div>
            <div className="space-y-2">
              <div className="text-xl font-light text-slate-900">Can Akyüz</div>
              <div className="text-slate-500">Senior Software Engineer</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16">
            <div className="space-y-6">
              <div className="text-small text-slate-400">Connect</div>
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">
                  Twitter
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-small text-slate-400">Location</div>
              <div className="space-y-1">
                <div className="text-slate-600">Istanbul, Turkey</div>
                <div className="text-slate-400 text-sm">UTC+3</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              © 2024 Can Akyüz. All rights reserved.
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-small text-slate-500 hover:text-blue-500 transition-colors"
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
