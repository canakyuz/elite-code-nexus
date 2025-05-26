
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleDownloadResume = () => {
    // Create a simple resume download - you can replace this with actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add this file to public folder
    link.download = 'Can_Akyuz_Resume.pdf';
    link.click();
  };

  return (
    <footer className="py-20 px-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white transform -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Left section - Brand */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center rounded-xl shadow-lg">
                  <span className="text-white font-bold text-lg">CA</span>
                </div>
                <div>
                  <div className="text-2xl font-light">Can Akyüz</div>
                  <div className="text-blue-300 text-sm font-mono">Software Architect</div>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Building scalable solutions with mathematical precision and technical depth.
              </p>
              
              <Button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Get Resume
              </Button>
            </div>
          </div>

          {/* Right section - Links and contact */}
          <div className="md:col-span-7 grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="text-sm text-blue-300 font-mono uppercase tracking-wider">Connect</div>
              <div className="space-y-4">
                <a href="https://linkedin.com/in/canakyuz" className="block text-slate-300 hover:text-blue-400 transition-colors group">
                  <span className="text-sm">LinkedIn</span>
                  <div className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="https://github.com/canakyuz" className="block text-slate-300 hover:text-blue-400 transition-colors group">
                  <span className="text-sm">GitHub</span>
                  <div className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="mailto:hello@canakyuz.dev" className="block text-slate-300 hover:text-blue-400 transition-colors group">
                  <span className="text-sm">Email</span>
                  <div className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-sm text-blue-300 font-mono uppercase tracking-wider">Navigation</div>
              <div className="space-y-4">
                <a href="#about" className="block text-slate-300 hover:text-blue-400 transition-colors text-sm">About</a>
                <a href="#work" className="block text-slate-300 hover:text-blue-400 transition-colors text-sm">Projects</a>
                <a href="#skills" className="block text-slate-300 hover:text-blue-400 transition-colors text-sm">Skills</a>
                <a href="#contact" className="block text-slate-300 hover:text-blue-400 transition-colors text-sm">Contact</a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-sm text-blue-300 font-mono uppercase tracking-wider">Location</div>
              <div className="space-y-2">
                <div className="text-slate-300 text-sm">Istanbul, Turkey</div>
                <div className="text-slate-400 text-xs font-mono">UTC+3</div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              © 2024 Can Akyüz. Crafted with precision and passion.
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors group flex items-center space-x-2"
            >
              <span>Back to top</span>
              <div className="w-4 h-4 border border-current rounded-full flex items-center justify-center">
                <div className="w-2 h-2 border-t border-current transform rotate-45 group-hover:-translate-y-0.5 transition-transform"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
